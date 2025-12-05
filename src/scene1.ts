import * as THREE from "three";
import loadAmmo from "./physics/ammo-loader";
import { createPhysicsWorld } from "./physics/world";
import { createBoxBody } from "./physics/body-factory";
import type { Scene } from "./types/scene";
import { Inventory } from "./types/gamestate";
import { Scene2 } from "./scene2";
import { ThemeFacade } from "./types/themeFacade";
import type { Box } from "./main";

//#region Implement Scene1
export class Scene1 implements Scene {
  physicsWorld: any;
  AmmoLib: any;
  playerMesh!: THREE.Mesh;
  playerBody!: any;
  playerMaterial!: THREE.MeshBasicMaterial;
  goalMesh!: THREE.Mesh;
  bodies: { mesh: THREE.Mesh; body: any }[] = [];
  //#region Boxes
  boxParams: Box[] = [
    {
      posX: 0,
      posY: 1,
      posZ: 10,
      sizeX: 20,
      sizeY: 1,
      sizeZ: 1,
      color: ThemeFacade.getAsset<THREE.Material>("barrier_Material"),
      collide: true,
    },
    {
      posX: 0,
      posY: 1,
      posZ: -10,
      sizeX: 20,
      sizeY: 1,
      sizeZ: 1,
      color: ThemeFacade.getAsset<THREE.Material>("barrier_Material"),
      collide: true,
    },
    {
      posX: 10,
      posY: 1,
      posZ: 0,
      sizeX: 1,
      sizeY: 1,
      sizeZ: 21,
      color: ThemeFacade.getAsset<THREE.Material>("barrier_Material"),
      collide: true,
    },
    {
      posX: -10,
      posY: 1,
      posZ: 0,
      sizeX: 1,
      sizeY: 1,
      sizeZ: 21,
      color: ThemeFacade.getAsset<THREE.Material>("barrier_Material"),
      collide: true,
    },
  ];
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
    //#endregion

    //#region Ground
    const groundSize = 20;
    const groundGeometry = new THREE.BoxGeometry(groundSize, 1, groundSize);

    const groundMesh = new THREE.Mesh(
      groundGeometry,
      ThemeFacade.getAsset<THREE.Material>("ground_Material"),
    );

    groundMesh.position.set(0, 0, 0);
    groundMesh.receiveShadow = true;
    scene.add(groundMesh);

    // Ground (Ammo)
    const groundHalf = new this.AmmoLib.btVector3(
      groundSize / 2,
      0.5,
      groundSize / 2,
    );
    const groundPos = new this.AmmoLib.btVector3(0, 0, 0);
    const ground = createBoxBody(this.AmmoLib, groundHalf, groundPos, 0);
    this.physicsWorld.addRigidBody(ground.body);
    this.bodies.push({ mesh: groundMesh, body: ground.body });

    this.createPlayer();

    this.boxParams.forEach((box) => {
      this.makeBox(box);
    });

    this.makeGoal(0, 0.1, 0);
  }
  //#endregion

  //#region Player
  createPlayer() {
    const size = 0.5;

    const geometry = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshBasicMaterial({ color: 0x0080ff });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 5, 0);
    this.scene.add(mesh);

    const halfExtents = new this.AmmoLib.btVector3(
      size / 2,
      size / 2,
      size / 2,
    );
    const position = new this.AmmoLib.btVector3(0, 0, 0);
    const bodyObj = createBoxBody(this.AmmoLib, halfExtents, position, 1);

    this.physicsWorld.addRigidBody(bodyObj.body);

    this.playerMesh = mesh;
    this.playerMaterial = material;
    this.playerBody = bodyObj.body;

    this.bodies.push({ mesh, body: bodyObj.body });
  }
  //#endregion

  //#region Boxes/Walls
  makeBox(boxParams: Box) {
    const halfExtents = new this.AmmoLib.btVector3(
      boxParams.sizeX,
      boxParams.sizeY,
      boxParams.sizeZ,
    );
    const position = new this.AmmoLib.btVector3(
      boxParams.posX,
      boxParams.posY,
      boxParams.posZ,
    );
    const barrier = createBoxBody(this.AmmoLib, halfExtents, position, 0);
    this.physicsWorld.addRigidBody(barrier.body);

    const boxGeometry = new THREE.BoxGeometry(
      boxParams.sizeX,
      boxParams.sizeY,
      boxParams.sizeZ,
    );
    const boxMesh = new THREE.Mesh(boxGeometry, boxParams.color);
    boxMesh.position.set(boxParams.posX, boxParams.posY, boxParams.posZ);
    this.scene.add(boxMesh);
    if (boxParams.collide)
      this.bodies.push({ mesh: boxMesh, body: barrier.body });
  }
  //#endregion

  //#region Goal
  makeGoal(posX: number, posY: number, posZ: number) {
    const size = { x: 1, y: 1, z: 1 };
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
    this.scene.add(boxMesh);
    this.bodies.push({ mesh: boxMesh, body: goal.body });
  }
  //#endregion

  //#region Key
  spawnKey() {
    const geometry = new THREE.BoxGeometry(0.3, 0.5, 0.3);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff54 });

    this.key = new THREE.Mesh(geometry, material);

    this.key.position.set(8, 1, 0);
    this.key.userData.type = "Key";
    this.scene.add(this.key);
  }
  //#endregion

  //#region Functions
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

  // TO-DO: remove once proper scene switching works
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

  // TO-DO: remove once event collision is in
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
      //this.playerMaterial.color.setHex(0x00ff00);
      this.spawnKey();
    }
  }

  applyMovement() {
    const body = this.playerBody;
    if (!body) return;

    const impulse = new this.AmmoLib.btVector3(0, 0, 0);
    const moveSpeed = 0.5;

    if (this.input.forward) {
      impulse.op_add(new this.AmmoLib.btVector3(0, 0, -moveSpeed));
    }
    if (this.input.backward) {
      impulse.op_add(new this.AmmoLib.btVector3(0, 0, moveSpeed));
    }
    if (this.input.left) {
      impulse.op_add(new this.AmmoLib.btVector3(-moveSpeed, 0, 0));
    }
    if (this.input.right) {
      impulse.op_add(new this.AmmoLib.btVector3(moveSpeed, 0, 0));
    }

    // fix control loss
    if (!body.isActive()) body.setActivationState(1);
    body.applyCentralImpulse(impulse);
  }

  // TO-DO: change to on collision
  onClick(hitObject: THREE.Object3D): void {
    if (hitObject.userData.type == "Key") {
      this.scene.remove(hitObject);
      Inventory.addItem("Key", 1);
      this.onSaveGame?.();
    }
  }
}
