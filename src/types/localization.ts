//SET LANGUAGES HERE
//Add text in ./public/localization.json

type Language = "en" | "jp" | "ar";

type LocalizationRecord = Record<string, Record<Language, string>>;

export class Localization {
  private static language: Language = "en";
  private static record: LocalizationRecord = {};

  static async initalizeRecord() {
    const url = `${import.meta.env.BASE_URL}localization.json`;
    const getLanguages = await fetch(url);
    this.record = await getLanguages.json();
  }

  static setLanguage(l: Language) {
    this.language = l;
  }

  static getText(key: string): string {
    return this.record[key][this.language];
  }

  static getLocalizedString(key: string): () => string {
    return () => this.record[key][this.language];
  }
}
