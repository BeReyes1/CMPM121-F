//SET LANGUAGES HERE
//Add text in ./public/localization.json

export type Language = "en" | "jp" | "ar";

type LocalizationRecord = Record<string, Record<Language, string>>;
type LocalizationListener = (lang: Language) => void;

export class Localization {
  private static language: Language = "en";
  private static record: LocalizationRecord = {};
  private static listeners: Set<LocalizationListener> = new Set();

  static async initalizeRecord() {
    const url = `${import.meta.env.BASE_URL}localization.json`;
    const getLanguages = await fetch(url);
    this.record = await getLanguages.json();
  }

  static setLanguage(l: Language) {
    this.language = l;

    // notify subscribers (main.ts is subscribing)
    this.listeners.forEach((listener) => listener(this.language));
  }

  static getLanguage(): Language {
    return this.language;
  }

  static getText(key: string): string {
    const entry = this.record[key];
    if (!entry) return key; // fallback if missing key
    return entry[this.language] ?? key; // fallback if missing language
  }

  // optional
  static getLocalizedString(key: string): () => string {
    return () => this.getText(key);
  }

  static subscribe(listener: LocalizationListener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}
