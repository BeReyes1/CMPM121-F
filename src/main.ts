import "./style.css";

import * as THREE from "three";
//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import type { Scene } from "./scene";
import { Scene1 } from "./ammo-demo";
import { GameState } from "./gamestate";

/*IDEA: SCene 1: get key via puzzle
Scene 2: used key to win game, go up to door and check?
Scene 3: Victory screen (only accessible when use key in scene 2)

UNCOMMENT CONTROLS BACK ON WHEN DONE, commented right now just so can use console
*/

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
  }

  currentScene = targetScene;

  await currentScene.init(scene);

  currentScene.onSceneLeave = (newScene) => loadScene(newScene);

  currentScene.onEnter();

  loadingScene = false;
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

//const controls = new OrbitControls(camera, renderer.domElement);

const clock = new THREE.Clock();

//TEST FOR NOW-> ADDING TO INVENTORY
window.addEventListener("keydown", (event) => {
  if (event.code === "KeyI") {
    GameState.inventory.push("Test Item");
  }
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

await loadScene(new Scene1());

// like update in unity
function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();

  if (currentScene && !loadingScene) currentScene.update(delta);

  renderer.render(scene, camera);
}

animate();
