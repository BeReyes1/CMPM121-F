import "./style.css";

import * as THREE from "three";
//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import initAmmo from "./ammo-demo";
import initScene2 from "./scene2";
import loadAmmo from "./physics/ammo-loader";

//PERSISTENT DATA BETWEEN SCENES IN HERE
const GameState = {
  inventory: [] as string[],
};

const AmmoLib = await loadAmmo();
const scene = new THREE.Scene();

let currentSceneIndex = 0;
//PUT ALL SCENES IN ARRAY
const scenes = [initAmmo, initScene2];

async function loadScene(index: number) {
  while (scene.children.length > 0) {
    scene.remove(scene.children[0]);
  }

  WIN = false;
  ammoDemo = null;

  const sceneInitFunction = scenes[index];
  ammoDemo = await sceneInitFunction(scene);
  console.log("Inventory:", GameState.inventory);
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
let ammoDemo: any = null;

//load initial scene
initAmmo(scene).then((demo) => {
  ammoDemo = demo;
});

const input = { forward: false, backward: false, left: false, right: false };

window.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "KeyW":
      input.forward = true;
      break;
    case "KeyS":
      input.backward = true;
      break;
    case "KeyA":
      input.left = true;
      break;
    case "KeyD":
      input.right = true;
      break;
  }
});

//TEST FOR NOW-> CHANGING SCENES EXAMPLE
window.addEventListener("keydown", (event) => {
  if (event.code === "KeyP") {
    currentSceneIndex = (currentSceneIndex + 1) % scenes.length;
    loadScene(currentSceneIndex);
  }
});

//TEST FOR NOW-> ADDING TO INVENTORY
window.addEventListener("keydown", (event) => {
  if (event.code === "KeyI") {
    GameState.inventory.push("Test Item");
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.code) {
    case "KeyW":
      input.forward = false;
      break;
    case "KeyS":
      input.backward = false;
      break;
    case "KeyA":
      input.left = false;
      break;
    case "KeyD":
      input.right = false;
      break;
  }
});

let WIN: boolean = false;
function checkWinCondition() {
  if (!ammoDemo) return;
  const boxMesh = ammoDemo.bodies[0].mesh;

  const boxX = boxMesh.position.x;
  const boxY = boxMesh.position.y;
  const boxZ = boxMesh.position.z;

  // potentially can change this to dynamic size of the barriers
  const insideX = boxX > 0 && boxX < 0.1;
  const insideZ = boxZ > 0 && boxZ < 0.1;

  if (!WIN && insideX && insideZ && boxY < 1) {
    WIN = true;
    const player: THREE.MeshBasicMaterial = ammoDemo.bodies[0].mesh.material;
    player.color.setHex(0x00ff00);
    console.log("WIN!");
  }
}

function applyMovement() {
  if (!ammoDemo) return;

  const body = ammoDemo.bodies[0].body;

  //const boxMesh = ammoDemo.bodies[0].mesh;
  //const boxX = boxMesh.position.x;
  //const boxZ = boxMesh.position.z;
  const impulse = new AmmoLib.btVector3(0, 0, 0);
  const moveSpeed = 0.5;

  if (input.forward) {
    impulse.op_add(new AmmoLib.btVector3(0, moveSpeed, 0));
  }
  if (input.backward) {
    impulse.op_add(new AmmoLib.btVector3(0, -moveSpeed, 0));
  }
  if (input.left) {
    impulse.op_add(new AmmoLib.btVector3(-moveSpeed, 0, 0));
  }
  if (input.right) {
    impulse.op_add(new AmmoLib.btVector3(moveSpeed, 0, 0));
  }

  body.applyCentralImpulse(impulse);
}

// like update in unity
function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();

  if (ammoDemo && typeof ammoDemo.update === "function") {
    ammoDemo.update(delta);
  }

  //controls.update();
  applyMovement();
  checkWinCondition();
  renderer.render(scene, camera);
}

animate();
