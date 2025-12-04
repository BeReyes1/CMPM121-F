import * as THREE from "three";

type ThemedAsset<T> = {
  light: T;
  dark: T;
};

type ThemedAssetRecord = Record<string, ThemedAsset<any>>;

//ANYTHING THAT CHANGES VIA THEME MODE GOES HERE
export const ThemeAssets: ThemedAssetRecord = {
  ground_Material: {
    light: new THREE.MeshBasicMaterial({ color: 0xffffff }),
    dark: new THREE.MeshBasicMaterial({ color: 0x111111 }),
  },
  cube_Material: {
    light: new THREE.MeshBasicMaterial({ color: 0xff474c }),
    dark: new THREE.MeshBasicMaterial({ color: 0xff0000 }),
  },
};
