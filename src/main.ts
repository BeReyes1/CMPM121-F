import "./style.css";

import * as THREE from "three";
//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import initAmmo from "./ammo-demo";
import initScene2 from "./scene2";
import loadAmmo from "./physics/ammo-loader";
import initVictoryScene from "./victoryScene";

/*IDEA: SCene 1: get key via puzzle
Scene 2: used key to win game, go up to door and check?
Scene 3: Victory screen (only accessible when use key in scene 2)

REFACTOR: Scene interface to make main clearer:
functions:
onEnter (anything that needs setup when scene starts)
  -ex setting up event listeners
onExit (anything that happens when exiting scene)
  -ex unsubscribing event listerners
update (call this in animate, logic that happens every frame)
onClick (for clicking objects done via raycasting)

loadScene function will take either scene index or scene init name
  -clears children
  -loads scene

UNCOMMENT CONTROLS BACK ON WHEN DONE, commented right now just so can use console
*/

//PERSISTENT DATA BETWEEN SCENES IN HERE
const GameState = {
  inventory: [] as string[],
};

const AmmoLib = await loadAmmo();
const scene = new THREE.Scene();

let currentSceneIndex = 0;
//PUT ALL SCENES IN ARRAY
const scenes = [initAmmo, initScene2, initVictoryScene];

let key: THREE.Mesh | null = null;
const raycast = new THREE.Raycaster();
let mousePosition = new THREE.Vector2();

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
    if (currentSceneIndex == 0) {
      currentSceneIndex = 1;
      loadScene(currentSceneIndex);
    } else if (currentSceneIndex == 1) {
      currentSceneIndex = 0;
      loadScene(currentSceneIndex);
    }
  }
});

//TEST FOR NOW-> ADDING TO INVENTORY
window.addEventListener("keydown", (event) => {
  if (event.code === "KeyI") {
    GameState.inventory.push("Test Item");
  }
});

//when clicking key, TEMP
window.addEventListener("click", (event) => {
  if (currentSceneIndex != 0) return;
  mousePosition = new THREE.Vector2(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1,
  );
  raycast.setFromCamera(mousePosition, camera);

  const raycastHits = raycast.intersectObjects(scene.children);
  if (raycastHits.length == 0) return;

  const hitObject = raycastHits[0].object;

  if (hitObject.userData.type == "Key") {
    GameState.inventory.push("Key");
    scene.remove(hitObject);
    key = null;
    console.log("Picked up key! Inventory:", GameState.inventory);
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

//TEMP
let WIN: boolean = false;

function checkWinCondition() {
  if (!ammoDemo) return;

  const boxMesh = ammoDemo.bodies[0].mesh;

  const boxX = boxMesh.position.x;
  const boxY = boxMesh.position.y;
  const boxZ = boxMesh.position.z;

  const player: THREE.MeshBasicMaterial = ammoDemo.bodies[0].mesh.material;
  switch (currentSceneIndex) {
    case 0:
      const insideX = boxX > 0 && boxX < 0.1;
      const insideZ = boxZ > 0 && boxZ < 0.1;

      if (!WIN && insideX && insideZ && boxY < 1) {
        WIN = true;
        player.color.setHex(0x00ff00);
        spawnKey();
      }
      break;

    case 1:
      if (GameState.inventory.includes("Key") && !WIN) {
        WIN = true;
        player.color.setHex(0x00ff00);

        window.addEventListener("keydown", (event) => {
          if (event.code === "KeyG") {
            currentSceneIndex = 2;
            loadScene(currentSceneIndex);
          }
        });
      }
      break;
  }
}

function spawnKey() {
  const geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
  const material = new THREE.MeshBasicMaterial({ color: 0x4169e1 });

  key = new THREE.Mesh(geometry, material);

  key.position.set(0, 2, 0);
  key.userData.type = "Key";
  scene.add(key);
}

function applyMovement() {
  if (!ammoDemo) return;

  const body = ammoDemo.bodies[0].body;

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
