const PCLOUD_PUBLIC_CODE = "kZphkf5ZaNsQg1XMYhQD1mkMtXvAaFvHetEy";
const PCLOUD_PUBLIC_URL = `https://u.pcloud.link/publink/show?code=${PCLOUD_PUBLIC_CODE}`;

const CATEGORY_LABELS: Record<string, string> = {
  "1 to 22": "Infographics 1-22",
  "23 to 44": "Infographics 23-44",
  "45 to 76": "Infographics 45-76",
  "77 - 92": "Infographics 77-92",
  "93-": "Infographics 93+",
  
};

const CATEGORY_ORDER = [
  "1 to 22",
  "23 to 44",
  "45 to 76",
  "77 - 92",
  "93-",
  
];

const EXCLUDED_CATEGORIES = new Set(["Bottom branding labels INFOGRAPHIC", "General", "Nature in Quran"]);

interface PCloudNode {
  name?: string;
  isfolder?: boolean;
  contents?: PCloudNode[];
  contenttype?: string;
  fileid?: number;
  width?: number;
  height?: number;
  size?: number;
  modified?: string;
}

interface PCloudPublicData {
  metadata?: PCloudNode;
}

export interface ResourceItem {
  id: string;
  title: string;
  filename: string;
  category: string;
  width: number;
  height: number;
  contentType: string;
  size: number;
  modified: string;
  thumbnailUrl: string;
  previewUrl: string;
}

export interface ResourceCategory {
  id: string;
  label: string;
  count: number;
  items: ResourceItem[];
}

function extractPcloudData(html: string) {
  const marker = "var publinkData =";
  const start = html.indexOf(marker);
  if (start === -1) {
    throw new Error("pCloud public data was not found.");
  }

  const firstBrace = html.indexOf("{", start);
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let index = firstBrace; index < html.length; index += 1) {
    const char = html[index];

    if (inString) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === "\"") inString = false;
      continue;
    }

    if (char === "\"") inString = true;
    else if (char === "{") depth += 1;
    else if (char === "}") {
      depth -= 1;
      if (depth === 0) {
        return JSON.parse(html.slice(firstBrace, index + 1)) as PCloudPublicData;
      }
    }
  }

  throw new Error("pCloud public data could not be parsed.");
}

function makeImageUrl(fileid: number, size: string) {
  return `https://api.pcloud.com/getpubthumb?code=${PCLOUD_PUBLIC_CODE}&fileid=${fileid}&size=${size}&crop=0&type=jpg`;
}

function titleFromFilename(filename: string) {
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\s*\(\d+\)\s*/g, " ")
    .replace(/\bInfographic\b/gi, "")
    .replace(/\bpg\b/gi, "Page")
    .trim();
}

function walkResources(node: PCloudNode | undefined, path: string[] = [], items: ResourceItem[] = []) {
  if (!node) return items;

  if (node.isfolder) {
    const nextPath = node.name && node.name.trim() !== "Infographic" ? [...path, node.name.trim()] : path;
    node.contents?.forEach((child) => walkResources(child, nextPath, items));
    return items;
  }

  if (!node.fileid || !node.name || !node.contenttype?.startsWith("image/")) {
    return items;
  }

  const category = path[0] || "General";
  items.push({
    id: String(node.fileid),
    title: titleFromFilename(node.name),
    filename: node.name,
    category,
    width: node.width ?? 0,
    height: node.height ?? 0,
    contentType: node.contenttype,
    size: node.size ?? 0,
    modified: node.modified ?? "",
    thumbnailUrl: makeImageUrl(node.fileid, "900x1400"),
    previewUrl: makeImageUrl(node.fileid, "1800x2600"),
  });

  return items;
}

function sortItems(items: ResourceItem[]) {
  return [...items].sort((a, b) => a.filename.localeCompare(b.filename, undefined, { numeric: true }));
}

function toCategories(items: ResourceItem[]): ResourceCategory[] {
  const grouped = new Map<string, ResourceItem[]>();

  items.forEach((item) => {
    const existing = grouped.get(item.category) ?? [];
    existing.push(item);
    grouped.set(item.category, existing);
  });

  return Array.from(grouped.entries())
    .filter(([id]) => !EXCLUDED_CATEGORIES.has(id))
    .sort(([a], [b]) => {
      const aIndex = CATEGORY_ORDER.indexOf(a);
      const bIndex = CATEGORY_ORDER.indexOf(b);
      if (aIndex !== -1 || bIndex !== -1) {
        return (aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex) - (bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex);
      }
      return a.localeCompare(b);
    })
    .map(([id, categoryItems]) => ({
      id,
      label: CATEGORY_LABELS[id] ?? id,
      count: categoryItems.length,
      items: sortItems(categoryItems),
    }));
}

export async function getResourceCategories(): Promise<ResourceCategory[]> {
  const response = await fetch(PCLOUD_PUBLIC_URL, { next: { revalidate: 86400 } });
  if (!response.ok) {
    throw new Error("Could not load pCloud resources.");
  }

  const html = await response.text();
  const data = extractPcloudData(html);
  return toCategories(walkResources(data.metadata));
}
