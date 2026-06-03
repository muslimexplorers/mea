import { Resend } from "resend";

export const DUMMY_RESEND_API_KEY = "re_dummy_replace_with_real_resend_key";

export function isDummyResendKey(apiKey = process.env.RESEND_API_KEY) {
  return !apiKey || apiKey === DUMMY_RESEND_API_KEY || apiKey.includes("dummy");
}

export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY || DUMMY_RESEND_API_KEY;
  return new Resend(apiKey);
}
