import "./style.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import type { Scene } from "./types/scene";
import { Scene1 } from "./scene1";
import { Inventory } from "./types/gamestate";
import { Localization } from "./types/localization";
import { ThemeFacade } from "./types/themeFacade";
import type { Language } from "./types/localization";

/*
UNCOMMENT CONTROLS BACK ON WHEN DONE, commented right now just so can use console
*/

const scene = new THREE.Scene();
let currentScene!: Scene;
let loadingScene = false;

const raycast = new THREE.Raycaster();
let mousePosition = new THREE.Vector2();

let message = Localization.getLocalizedString("start_button");

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

const endScreen = document.getElementById("end-screen") as HTMLElement | null;
const endText = document.querySelector<HTMLElement>("#end-screen .end-text");
const endGif = document.querySelector<HTMLImageElement>("#end-screen .end-gif");

const restartButton = document.getElementById(
  "restart-button",
) as HTMLButtonElement | null;

const languageButton = document.getElementById(
  "language-button",
) as HTMLButtonElement | null;
const modeButton = document.getElementById(
  "mode-button",
) as HTMLButtonElement | null;

// initial overlay state
if (startScreen) startScreen.classList.add("visible");
if (endScreen) endScreen.classList.remove("visible");
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
  if (endGif) endGif.src = appTheme.endGifSrc;
  if (endScreen) endScreen.style.backgroundColor = appTheme.endBackground;
  if (endText) endText.style.color = appTheme.endTextColor;

  renderer.setClearColor(appTheme.clearColor, 1);
});

// button toggle for light/dark
if (modeButton) {
  modeButton.addEventListener("click", () => {
    const current = ThemeFacade.getMode();
    const next = current === "light" ? "dark" : "light";
    ThemeFacade.setTheme(next);
  });
}
//#endregion

//#region Localization
// APPLY LOCALIZATION TO ALL UI
function applyLocalization() {
  if (startButton) {
    startButton.textContent = Localization.getText("start_button");
  }

  if (modeButton) {
    modeButton.textContent = Localization.getText("mode_button");
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
//#endregion

const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = false;

const clock = new THREE.Clock();

//#region Controls
//TEST FOR NOW-> ADDING TO INVENTORY
window.addEventListener("keydown", (event) => {
  if (event.code === "KeyI") {
    Inventory.addItem("test_item", 1);
    saveGame();
  }
});

window.addEventListener("keydown", (event) => {
  let changeLanguage: boolean = false;
  if (event.code === "KeyB") {
    Localization.setLanguage("en");
    changeLanguage = true;
  } else if (event.code === "KeyN") {
    Localization.setLanguage("jp");
    changeLanguage = true;
  } else if (event.code == "KeyM") {
    Localization.setLanguage("ar");
    changeLanguage = true;
  }

  if (changeLanguage) console.log("Language changed, new value: ", message());
});

//TEMP FOR TESTING NEWGAME
window.addEventListener("keydown", (event) => {
  if (event.code === "KeyL") newGame();
});

window.addEventListener("click", (event) => {
  mousePosition = new THREE.Vector2(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1,
  );
  raycast.setFromCamera(mousePosition, camera);

  const raycastHits = raycast.intersectObjects(scene.children);
  if (raycastHits.length == 0) return;

  const hitObject = raycastHits[0].object;

  if (currentScene) currentScene.onClick(hitObject);
});
//#endregion

//#region Load Game
loadGame();
ThemeFacade.init();
await Localization.initalizeRecord();
Localization.subscribe(() => applyLocalization());
applyLocalization();
await loadScene(new Scene1());

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
