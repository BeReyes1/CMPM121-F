import "./style.css";

import * as THREE from "three";
//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import type { Scene } from "./scene";
import { Scene1 } from "./ammo-demo";
import { Inventory } from "./gamestate";
import { Localization } from "./localization";

/*
UNCOMMENT CONTROLS BACK ON WHEN DONE, commented right now just so can use console
*/

const scene = new THREE.Scene();
let currentScene!: Scene;
let loadingScene = false;

const raycast = new THREE.Raycaster();
let mousePosition = new THREE.Vector2();

const message = document.createElement("button");
message.textContent = "Hi";

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
const CAMERA_ZOOM = 4;
camera.position.z = CAMERA_ZOOM;

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// hooking up start screen
const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById(
  "start-button",
) as HTMLButtonElement | null;

if (startButton) {
  startButton.addEventListener("click", async () => {
    if (loadingScene) return;
    startScreen?.classList.add("hidden");
    await loadScene(new Scene1());
  });
}

//const controls = new OrbitControls(camera, renderer.domElement);

const clock = new THREE.Clock();

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

  if (changeLanguage)
    console.log("Language changed to: ", Localization.getText("start_button"));
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

loadGame();
await Localization.initalizeRecord();
await loadScene(new Scene1());

// like update in unity
function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();

  if (currentScene && !loadingScene) currentScene.update(delta);

  renderer.render(scene, camera);
}

animate();

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
