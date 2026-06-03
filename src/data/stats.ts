/** Headline impact metrics shown in the homepage StatsSection. */

export type IconName = "Users" | "BookOpen" | "Globe" | "Star";

export interface Stat {
  value: string;
  label: string;
  icon: IconName;
  color: string;
  bg: string;
}

export const stats: Stat[] = [
  { value: "7,500+", label: "Students Worldwide", icon: "Users", color: "text-brand-blue", bg: "bg-blue-50" },
  { value: "24", label: "Free Booklets", icon: "BookOpen", color: "text-brand-gold", bg: "bg-amber-50" },
  { value: "15+", label: "Countries Reached", icon: "Globe", color: "text-brand-green", bg: "bg-green-50" },
  { value: "94.7%", label: "Completion Rate", icon: "Star", color: "text-blue-700", bg: "bg-slate-100" },
];
