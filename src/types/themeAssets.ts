import * as THREE from "three";

type ThemedAsset<T> = {
  light?: T;
  dark?: T;
};

type ThemedAssetRecord = Record<string, ThemedAsset<any>>;

//ANYTHING THAT CHANGES VIA THEME MODE GOES HERE
export const ThemeAssets: ThemedAssetRecord = {
  ground_Material: {
    light: new THREE.MeshBasicMaterial({ color: 0xeeeeee }),
    dark: new THREE.MeshBasicMaterial({ color: 0x363636 }),
  },
  barrier_Material: {
    light: new THREE.MeshBasicMaterial({ color: 0xdddddd }),
    dark: new THREE.MeshBasicMaterial({ color: 0x1b1b1b }),
  },

  //for end screen
  appTheme: {
    light: {
      startBgSrc: "titleLight.png",
      endGifSrc: "endLight.gif",
      endBackground: "#ffffff",
      clearColor: 0xffffff,
      endTextColor: "#111827",
    },
    dark: {
      startBgSrc: "titleDark.png",
      endGifSrc: "endDark.gif",
      endBackground: "#000000",
      clearColor: 0x000000,
      endTextColor: "#e5e7eb",
    },
  },
};
