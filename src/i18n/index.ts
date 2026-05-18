import { en } from "./en";
import { es } from "./es";

export type Language = "es" | "en";
export type Translation = typeof es;

export const translations: Record<Language, Translation> = {
  es,
  en,
};
