import { ThemeAssets } from "./themeAssets";

export type ThemeMode = "light" | "dark";
type ThemeListener = (mode: ThemeMode) => void;

export class ThemeFacade {
  private static currentMode: ThemeMode = "light"; // default
  private static listeners: Set<ThemeListener> = new Set();

  static get(): ThemeFacade {
    return this;
  }

  static init() {
    const windowMode = window.matchMedia("(prefers-color-scheme: dark)");

    // Force-run listeners here
    this.setTheme(windowMode.matches ? "dark" : "light");

    windowMode.addEventListener("change", (ev) => {
      this.setTheme(ev.matches ? "dark" : "light");
    });
  }

  static setTheme(targetMode: ThemeMode) {
    this.currentMode = targetMode;
    this.listeners.forEach((listener) => listener(this.currentMode));
    console.log("Theme is: " + this.currentMode);
  }

  static getMode(): ThemeMode {
    return this.currentMode;
  }

  static subscribe(listener: ThemeListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  static getAsset<T extends object>(key: string): T {
    const currentAsset = ThemeAssets[key][this.currentMode] as T;
    const wrapper = Object.create(currentAsset as object) as T;

    this.subscribe((mode) => {
      const next = ThemeAssets[key][mode] as object;
      Object.setPrototypeOf(wrapper as object, next);
    });

    return wrapper;
  }
}
