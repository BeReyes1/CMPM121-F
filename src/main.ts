import "./style.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import type { Scene } from "./types/scene";
import { Scene1 } from "./scene1";
import { Scene2 } from "./scene2";
import { Scene3 } from "./scene3";
import { Inventory } from "./types/gamestate";
import { Localization } from "./types/localization";
import { ThemeFacade } from "./types/themeFacade";
import type { Language } from "./types/localization";

const scene = new THREE.Scene();
let currentScene!: Scene;
let loadingScene = false;

const raycast = new THREE.Raycaster();
let mousePosition = new THREE.Vector2();


async function loadScene(targetScene: Scene) {
  loadingScene = true;

  while (scene.children.length) scene.remove(scene.children[0]);

  if (currentScene) {
    currentScene.onExit();
    currentScene.onSceneLeave = undefined;
    currentScene.onSaveGame = undefined;
  }

  currentScene = targetScene;

  await currentScene.init(scene);

  currentScene.onSceneLeave = (newScene) => loadScene(newScene);
  currentScene.onSaveGame = () => saveGame();

  currentScene.onGameComplete = () => {
    if (endScreen) {
      console.log("Win!");
      endScreen.classList.add("visible");
    }
  };

  currentScene.onEnter();
  loadingScene = false;
  saveGame();
}

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
const CAMERA_ZOOM = 15;
camera.position.y = CAMERA_ZOOM;

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//#region Start/End Screens
const startScreen = document.getElementById(
  "start-screen",
) as HTMLElement | null;
const startButton = document.getElementById(
  "start-button",
) as HTMLButtonElement | null;

const levelButton = document.getElementById(
  "level-button",
) as HTMLButtonElement | null;

const levelSelectScreen = document.getElementById(
  "level-select-screen",
) as HTMLElement | null;
const levelTitle = document.querySelector<HTMLElement>(
  "#level-select-screen .level-title",
);
const level1Button = document.getElementById(
  "level1-button",
) as HTMLButtonElement | null;
const level2Button = document.getElementById(
  "level2-button",
) as HTMLButtonElement | null;
const level3Button = document.getElementById(
  "level3-button",
) as HTMLButtonElement | null;

const levelBackButton = document.getElementById(
  "level-back-button",
) as HTMLButtonElement | null;

const endScreen = document.getElementById("end-screen") as HTMLElement | null;
const endText = document.querySelector<HTMLElement>("#end-screen .end-text");
const endGif = document.querySelector<HTMLImageElement>("#end-screen .end-gif");

const restartButton = document.getElementById(
  "restart-button",
) as HTMLButtonElement | null;

const languageButton = document.getElementById(
  "language-button",
) as HTMLButtonElement | null;

// initial overlay state
if (startScreen) startScreen.classList.add("visible");
if (endScreen) endScreen.classList.remove("visible");
if (levelSelectScreen) levelSelectScreen.classList.remove("visible");
//#endregion

//#region Theming
// uses themeAssets
const appTheme = ThemeFacade.getAsset<{
  startBgSrc: string;
  endGifSrc: string;
  endBackground: string;
  clearColor: number;
  endTextColor: string;
}>("appTheme");

// whenever the theme changes, update DOM + renderer
ThemeFacade.subscribe((mode) => {
  document.documentElement.setAttribute("data-theme", mode);

  if (startScreen)
    startScreen.style.backgroundImage = `url(${appTheme.startBgSrc})`;
  if (levelSelectScreen)
    levelSelectScreen.style.backgroundImage = appTheme.endBackground;
  if (endGif) endGif.src = appTheme.endGifSrc;
  if (endScreen) endScreen.style.backgroundColor = appTheme.endBackground;
  if (endText) endText.style.color = appTheme.endTextColor;

  renderer.setClearColor(appTheme.clearColor, 1);
});
//#endregion

//#region Localization
// APPLY LOCALIZATION TO ALL UI
function applyLocalization() {
  if (startButton) {
    startButton.textContent = Localization.getText("start_button");
  }

  if (languageButton) {
    languageButton.textContent = Localization.getText("language_button");
  }

  if (endText) {
    endText.textContent = Localization.getText("end_text");
  }

  if (restartButton) {
    restartButton.textContent = Localization.getText("restart_button");
  }

  if (levelButton) {
    levelButton.textContent = Localization.getText("level_button");
  }

  if (levelTitle) {
    levelTitle.textContent = Localization.getText("level_select_title");
  }

  if (level1Button) {
    level1Button.textContent = Localization.getText("level1_button");
  }

  if (level2Button) {
    level2Button.textContent = Localization.getText("level2_button");
  }

  if (level3Button) {
    level3Button.textContent = Localization.getText("level3_button")
  }

  if (levelBackButton) {
    levelBackButton.textContent = Localization.getText("back_button");
  }
}

// LANGUAGES TO CYCLE THROUGH
const LANG_ORDER: Language[] = ["en", "jp", "ar"];

// LANGUAGE BUTTON: cycle languages
if (languageButton) {
  languageButton.addEventListener("click", () => {
    const current = Localization.getLanguage();
    const idx = LANG_ORDER.indexOf(current);
    const next = LANG_ORDER[(idx + 1) % LANG_ORDER.length];
    Localization.setLanguage(next);
  });
}
if (startButton) {
  startButton.addEventListener("click", async () => {
    if (loadingScene) return;
    startScreen?.classList.remove("visible");
    await loadScene(new Scene1());
  });
}

if (levelButton) {
  levelButton.addEventListener("click", () => {
    if (!levelSelectScreen) return;
    startScreen?.classList.remove("visible");
    levelSelectScreen.classList.add("visible");
  });
}

if (level1Button) {
  level1Button.addEventListener("click", async () => {
    if (loadingScene) return;
    levelSelectScreen?.classList.remove("visible");
    await loadScene(new Scene1());
  });
}

if (level2Button) {
  level2Button.addEventListener("click", async () => {
    if (loadingScene) return;
    levelSelectScreen?.classList.remove("visible");
    await loadScene(new Scene2());
  });
}

if (level3Button) {
  level3Button.addEventListener("click", async () => {
    if (loadingScene) return;
    levelSelectScreen?.classList.remove("visible");
    await loadScene(new Scene3());
  });
}


if (levelBackButton) {
  levelBackButton.addEventListener("click", () => {
    levelSelectScreen?.classList.remove("visible");
    startScreen?.classList.add("visible");
  });
}

if (restartButton) {
  restartButton.addEventListener("click", () => {
    newGame();
    endScreen?.classList.remove("visible");
    startScreen?.classList.add("visible");
  });
}
//#endregion

const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = false; 

const clock = new THREE.Clock();

//#region Controls
/*
window.addEventListener("keydown", (event) => {
  let changeLanguage: boolean = false;
  if (event.code === "KeyL") {
    const current = Localization.getLanguage();
    const idx = LANG_ORDER.indexOf(current);
    const next = LANG_ORDER[(idx + 1) % LANG_ORDER.length];
    Localization.setLanguage(next);
  }
  if (changeLanguage) console.log("Language changed, new value: ", message());
});*/

window.addEventListener("click", (event) => {
  mousePosition = new THREE.Vector2(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1,
  );
  raycast.setFromCamera(mousePosition, camera);

  const raycastHits = raycast.intersectObjects(scene.children);
  if (raycastHits.length == 0) return;

  const hitObject = raycastHits[0].object;

  if (currentScene) currentScene.onCollect(hitObject);
});
//#endregion

//#region Box
export interface Box {
  posX: number;
  posY: number;
  posZ: number;
  sizeX: number;
  sizeY: number;
  sizeZ: number;
  color: THREE.Material;
  collide: boolean;
}
//#endregion

//#region Load Game
loadGame();
ThemeFacade.init();
await Localization.initalizeRecord();
Localization.subscribe(() => applyLocalization());
applyLocalization();

// like update in unity
function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();

  controls.update();
  if (currentScene && !loadingScene) currentScene.update(delta);

  renderer.render(scene, camera);
}

animate();
//#endregion

//#region Game State Functions
function saveGame() {
  const gameData = {
    inventory: Inventory.getGameStateInventory(),
  };

  localStorage.setItem("gameSave", JSON.stringify(gameData));
  console.log("Game saved with inventory: ", Inventory.getGameStateInventory());
}

function loadGame() {
  const save = localStorage.getItem("gameSave");
  if (!save) return;

  const gameData = JSON.parse(save);
  Inventory.setGameStateInventory(gameData.inventory);

  console.log(
    "Loaded game with inventory: ",
    Inventory.getGameStateInventory(),
  );
}

function newGame() {
  localStorage.removeItem("gameSave");
  Inventory.setGameStateInventory({});
  alert("New game started.");
}
