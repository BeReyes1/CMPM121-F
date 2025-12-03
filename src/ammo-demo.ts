import * as THREE from "three";
import loadAmmo from "./physics/ammo-loader";
import { createPhysicsWorld } from "./physics/world";
import { createBoxBody } from "./physics/body-factory";
import type { Scene } from "./scene";
import { Inventory } from "./gamestate";
import { Scene2 } from "./scene2";
import { ThemeFacade } from "./themeFacade";

export class Scene1 implements Scene {
  physicsWorld: any;
  AmmoLib: any;
  playerMesh!: THREE.Mesh;
  playerBody!: any;
  playerMaterial!: THREE.MeshBasicMaterial;
  goalMesh!: THREE.Mesh;
  bodies: { mesh: THREE.Mesh; body: any }[] = [];
  input = { forward: false, backward: false, left: false, right: false };
  win: boolean = false;
  key: THREE.Mesh | null = null;
  scene!: THREE.Scene;

  onSceneLeave?: (targetScene: Scene) => void;
  onSaveGame?: () => void;

  async init(scene: THREE.Scene): Promise<void> {
    this.AmmoLib = await loadAmmo();
    const { physicsWorld } = createPhysicsWorld(this.AmmoLib);
    this.physicsWorld = physicsWorld;
    this.scene = scene;

    // Ground
    const groundSize = 50;
    const groundGeometry = new THREE.BoxGeometry(groundSize, 1, groundSize);

    const groundMesh = new THREE.Mesh(
      groundGeometry,
      ThemeFacade.getAsset<THREE.Material>("ground_Material"),
    );


    groundMesh.position.set(0, -0.5, 0);
    groundMesh.receiveShadow = true;
    scene.add(groundMesh);

    // Ground (Ammo)
    const groundHalf = new this.AmmoLib.btVector3(
      groundSize / 2,
      0.5,
      groundSize / 2,
    );
    const groundPos = new this.AmmoLib.btVector3(0, -0.5, 0);
    const ground = createBoxBody(this.AmmoLib, groundHalf, groundPos, 0);
    this.physicsWorld.addRigidBody(ground.body);

    this.createPlayer();

    this.makeBarrier(0, 0.25, -1);
    this.makeBarrier(0, 0.25, 1);
    this.makeBarrier(-1, 0.25, 0);
    this.makeBarrier(1, 0.25, 0);

    this.makeGoal(0, 0.1, 0, scene);
  }

  createPlayer() {
    const size = 0.5;

    const geometry = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 5, 0);
    this.scene.add(mesh);

    const halfExtents = new this.AmmoLib.btVector3(
      size / 2,
      size / 2,
      size / 2,
    );
    const position = new this.AmmoLib.btVector3(0, 5, 0);
    const bodyObj = createBoxBody(this.AmmoLib, halfExtents, position, 1);

    this.physicsWorld.addRigidBody(bodyObj.body);

    this.playerMesh = mesh;
    this.playerMaterial = material;
    this.playerBody = bodyObj.body;

    this.bodies.push({ mesh, body: bodyObj.body });
  }

  makeBarrier(posX: number, posY: number, posZ: number) {
    const size = { x: 1, y: 0.5, z: 1 };
    const halfExtents = new this.AmmoLib.btVector3(
      size.x / 2,
      size.y / 2,
      size.z / 2,
    );
    const position = new this.AmmoLib.btVector3(posX, posY, posZ);
    const barrier = createBoxBody(this.AmmoLib, halfExtents, position, 0);
    this.physicsWorld.addRigidBody(barrier.body);

    const boxGeometry = new THREE.BoxGeometry(size.x, size.y, size.z);
    //const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const boxMesh = new THREE.Mesh(boxGeometry, ThemeFacade.getAsset<THREE.Material>("cube_Material"));
    boxMesh.position.set(posX, posY, posZ);
    this.scene.add(boxMesh);
    this.bodies.push({ mesh: boxMesh, body: barrier.body });
  }

  makeGoal(posX: number, posY: number, posZ: number, scene: THREE.Scene) {
    const size = { x: 1, y: 0.5, z: 1 };
    const halfExtents = new this.AmmoLib.btVector3(
      size.x / 2,
      size.y / 2,
      size.z / 2,
    );
    const position = new this.AmmoLib.btVector3(posX, posY, posZ);
    const goal = createBoxBody(this.AmmoLib, halfExtents, position, 0);
    this.physicsWorld.addRigidBody(goal.body);

    const boxGeometry = new THREE.BoxGeometry(size.x, size.y, size.z);
    const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(posX, posY, posZ);
    this.goalMesh = boxMesh;
    scene.add(boxMesh);
    this.bodies.push({ mesh: boxMesh, body: goal.body });
  }

  handleMovement = (event: KeyboardEvent) => {
    switch (event.code) {
      case "KeyW":
        this.input.forward = true;
        break;
      case "KeyS":
        this.input.backward = true;
        break;
      case "KeyA":
        this.input.left = true;
        break;
      case "KeyD":
        this.input.right = true;
        break;
    }
  };

  handleMovementUp = (event: KeyboardEvent) => {
    switch (event.code) {
      case "KeyW":
        this.input.forward = false;
        break;
      case "KeyS":
        this.input.backward = false;
        break;
      case "KeyA":
        this.input.left = false;
        break;
      case "KeyD":
        this.input.right = false;
        break;
    }
  };

  handleSceneLeave = async (event: KeyboardEvent) => {
    switch (event.code) {
      case "KeyG":
        this.onSceneLeave?.(new Scene2());
        break;
    }
  };

  onEnter(): void {
    window.addEventListener("keydown", this.handleMovement);
    window.addEventListener("keyup", this.handleMovementUp);
    window.addEventListener("keydown", this.handleSceneLeave);
  }

  onExit(): void {
    window.removeEventListener("keydown", this.handleMovement);
    window.removeEventListener("keyup", this.handleMovementUp);
    window.removeEventListener("keydown", this.handleSceneLeave);
  }

  update(delta: number) {
    this.applyMovement();
    this.physicsWorld.stepSimulation(delta, 10);
    this.updateMotion();

    this.checkWinCondition();
  }

  updateMotion() {
    const transform = new this.AmmoLib.btTransform();

    for (const obj of this.bodies) {
      const motionState = obj.body.getMotionState();
      if (!motionState) continue;

      motionState.getWorldTransform(transform);

      const origin = transform.getOrigin();
      const rotation = transform.getRotation();

      obj.mesh.position.set(origin.x(), origin.y(), origin.z());
      obj.mesh.quaternion.set(
        rotation.x(),
        rotation.y(),
        rotation.z(),
        rotation.w(),
      );
    }
  }

  checkWinCondition() {
    if (this.win) return;

    const playerX = this.playerMesh.position.x;
    const playerY = this.playerMesh.position.y;
    const playerZ = this.playerMesh.position.z;

    const goalX = this.goalMesh.position.x;
    const goalY = this.goalMesh.position.y;
    const goalZ = this.goalMesh.position.z;

    const distanceToGoal = Math.sqrt(
      (playerX - goalX) ** 2 + (playerY - goalY) ** 2 + (playerZ - goalZ) ** 2,
    );

    if (distanceToGoal < 0.5) {
      this.win = true;
      this.playerMaterial.color.setHex(0x00ff00);
      this.spawnKey();
    }
  }

  spawnKey() {
    const geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    const material = new THREE.MeshBasicMaterial({ color: 0x4169e1 });

    this.key = new THREE.Mesh(geometry, material);

    this.key.position.set(0, 2, 0);
    this.key.userData.type = "Key";
    this.scene.add(this.key);
  }

  applyMovement() {
    const body = this.playerBody;
    if (!body) return;

    const impulse = new this.AmmoLib.btVector3(0, 0, 0);
    const moveSpeed = 0.5;

    if (this.input.forward) {
      impulse.op_add(new this.AmmoLib.btVector3(0, moveSpeed, 0));
    }
    if (this.input.backward) {
      impulse.op_add(new this.AmmoLib.btVector3(0, -moveSpeed, 0));
    }
    if (this.input.left) {
      impulse.op_add(new this.AmmoLib.btVector3(-moveSpeed, 0, 0));
    }
    if (this.input.right) {
      impulse.op_add(new this.AmmoLib.btVector3(moveSpeed, 0, 0));
    }

    body.applyCentralImpulse(impulse);
  }

  onClick(hitObject: THREE.Object3D): void {
    if (hitObject.userData.type == "Key") {
      this.scene.remove(hitObject);
      Inventory.addItem("Key", 1);
      this.onSaveGame?.();
    }
  }
}
