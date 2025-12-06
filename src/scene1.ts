import * as THREE from "three";
import loadAmmo from "./physics/ammo-loader";
import { createPhysicsWorld } from "./physics/world";
import { createBoxBody } from "./physics/body-factory";
import type { Scene } from "./types/scene";
import { Inventory } from "./types/gamestate";
import { Scene2 } from "./scene2";
import { ThemeFacade } from "./types/themeFacade";
import type { Box } from "./main";
//import { Localization } from "./types/localization";

export class Scene1 implements Scene {
  physicsWorld: any;
  AmmoLib: any;
  playerMesh!: THREE.Mesh;
  playerBody!: any;
  goalMesh!: THREE.Mesh;
  bodies: { mesh: THREE.Mesh; body: any }[] = [];
  falseChests: THREE.Mesh[] = [];
  trueChest!: THREE.Mesh;
  input = { forward: false, backward: false, left: false, right: false };
  win: boolean = false;
  key: THREE.Mesh | null = null;
  scene!: THREE.Scene;
  uiText : any;

  onSceneLeave?: (targetScene: Scene) => void;
  onSaveGame?: () => void;

  async init(scene: THREE.Scene): Promise<void> {
    this.AmmoLib = await loadAmmo();
    const { physicsWorld } = createPhysicsWorld(this.AmmoLib);
    this.physicsWorld = physicsWorld;
    this.scene = scene;

    this.uiText = document.getElementById("ui-text")!;
    this.uiText.style.top = "";

    this.uiText.style.bottom = "20px";
  this.uiText.textContent = "WASD To Move";

    this.makeGround();
    this.makeWalls();
    this.makePlayer();
    this.makeGoal();
    this.makeFalseChests();
    this.makeTrueChest();
    this.makeKey();
  }

  //#region Make Box
  makeBox(boxParams: Box) {
    const halfExtents = new this.AmmoLib.btVector3(
      boxParams.sizeX / 2,
      boxParams.sizeY / 2,
      boxParams.sizeZ / 2,
    );
    const position = new this.AmmoLib.btVector3(
      boxParams.posX,
      boxParams.posY,
      boxParams.posZ,
    );
    const boxGeometry = new THREE.BoxGeometry(
      boxParams.sizeX,
      boxParams.sizeY,
      boxParams.sizeZ,
    );

    const barrier = createBoxBody(this.AmmoLib, halfExtents, position, 0);
    if (boxParams.collide) this.physicsWorld.addRigidBody(barrier.body);
    const boxMesh = new THREE.Mesh(boxGeometry, boxParams.color);
    boxMesh.position.set(boxParams.posX, boxParams.posY, boxParams.posZ);
    this.scene.add(boxMesh);
    this.bodies.push({ mesh: boxMesh, body: barrier.body });
    return boxMesh;
  }
  //#endregion Make Box

  //#region Ground
  makeGround() {
    const groundParams: Box = {
      posX: 0,
      posY: 0,
      posZ: 0,
      sizeX: 20,
      sizeY: 1,
      sizeZ: 20,
      color: ThemeFacade.getAsset<THREE.Material>("ground_Material"),
      collide: true,
    };
    this.makeBox(groundParams);
  }
  //#endregion Ground

  //#region Walls
  makeWalls() {
    const color: THREE.Material =
      ThemeFacade.getAsset<THREE.Material>("barrier_Material");
    const wallParams: Box[] = [
      {
        posX: 0,
        posY: 1,
        posZ: 10,
        sizeX: 20,
        sizeY: 1,
        sizeZ: 1,
        color: color,
        collide: true,
      },
      {
        posX: 0,
        posY: 1,
        posZ: -10,
        sizeX: 20,
        sizeY: 1,
        sizeZ: 1,
        color: color,
        collide: true,
      },
      {
        posX: 10,
        posY: 1,
        posZ: 0,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 21,
        color: color,
        collide: true,
      },
      {
        posX: -10,
        posY: 1,
        posZ: 0,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 21,
        color: color,
        collide: true,
      },
    ];
    wallParams.forEach((wall) => {
      this.makeBox(wall);
    });
  }
  //#endregion Walls

  //#region Player
  /*
  // use for refactoring player to makeBox but need to address issues controlling player
  // may need to do with mass which is 1 while all other boxes are 0
  playerParams: Box = {
    posX: 0,
    posY: 5,
    posZ: 0,
    sizeX: 0.5,
    sizeY: 0.5,
    sizeZ: 0.5,
    color: new THREE.MeshBasicMaterial({ color: 0x0080ff }),
    collide: true,
  };
  this.playerMesh = this.makeBox(this.playerParams);
  */

  makePlayer() {
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
    this.playerBody = bodyObj.body;

    this.bodies.push({ mesh, body: bodyObj.body });
  }
  //#endregion Player

  //#region Goal
  makeGoal() {
    const goalParams: Box = {
      posX: -3,
      posY: 0.1,
      posZ: -3,
      sizeX: 1,
      sizeY: 1,
      sizeZ: 1,
      color: new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
      collide: true,
    };
    this.goalMesh = this.makeBox(goalParams);
  }
  //#endregion Goal

  //#region False Chests
  makeFalseChests() {
    const color = new THREE.MeshBasicMaterial({ color: 0x7f6040 });
    const params: Box[] = [
      {
        posX: 0,
        posY: 1,
        posZ: 5,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
        color: color,
        collide: true,
      },
      {
        posX: 0,
        posY: 1,
        posZ: -5,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
        color: color,
        collide: true,
      },
      {
        posX: 5,
        posY: 1,
        posZ: 0,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
        color: color,
        collide: true,
      },
    ];

    params.forEach((chest) => {
      this.falseChests.push(this.makeBox(chest));
    });
  }

  private handleFalseChestEvent() {
    this.falseChests.forEach((chest) => {
      if (!this.win && this.isNear(this.playerMesh, chest, 1.0)) {
        const uiText = document.getElementById("ui-text")!;
        uiText.textContent = "No luck!";
        // TO-DO: insert "no luck!" text here
      }
    });
  }
  //#endregion False Chests

  //#region True Chest
  makeTrueChest() {
    const params: Box = {
      posX: -5,
      posY: 1,
      posZ: 0,
      sizeX: 1,
      sizeY: 1,
      sizeZ: 1,
      color: new THREE.MeshBasicMaterial({ color: 0x7f6040 }),
      collide: true,
    };
    this.trueChest = this.makeBox(params);
  }

  private handleTrueChestEvent() {
    if (!this.win && this.isNear(this.playerMesh, this.trueChest, 1.0)) {
      this.uiText.textContent = "Key acquired!";
      // TO-DO: insert "key acquired!" text here
      this.scene.add(this.key!);
    }
  }
  //#endregion True Chest

  //#region Key
  makeKey() {
    const keyParams: Box = {
      posX: 8,
      posY: 1,
      posZ: 0,
      sizeX: 0.3,
      sizeY: 0.5,
      sizeZ: 0.3,
      color: new THREE.MeshBasicMaterial({ color: 0xffff54 }),
      collide: false,
    };
    this.key = this.makeBox(keyParams);
    this.scene.remove(this.key);
    this.key.userData.type = "Key";
  }
  //#endregion Key

  //#region Key Collision
  private keyPickedUp = false;

  private pickupKey(hitObject: THREE.Object3D) {
    if (this.keyPickedUp) return;

    this.scene.remove(hitObject);
    this.key = null;
    this.keyPickedUp = true;

    Inventory.addItem("Key", 1);
    this.onSaveGame?.();
  }

  private handleGoalKeyEvents() {
    if (!this.keyPickedUp && this.isNear(this.playerMesh, this.goalMesh, 0.5)) {
      this.uiText.textContent = "Need a key!";
      console.log("need key");
      // TO-DO: if no key and on goal, insert "need a key!" text here
    }

    if (this.key && this.isNear(this.playerMesh, this.key, 0.5)) {
      this.pickupKey(this.key);
    }

    if (this.keyPickedUp && this.isNear(this.playerMesh, this.goalMesh, 1.0)) {
      this.handleSceneLeave();
    }
  }

  private isNear(
    a: THREE.Object3D,
    b: THREE.Object3D,
    threshold: number,
  ): boolean {
    return a.position.distanceTo(b.position) < threshold;
  }
  //#endregion Key Collision

  //#region Keybinds
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
  //#endregion Keybinds

  //#region Functions
  handleSceneLeave = () => {
    this.onSceneLeave?.(new Scene2());
  };

  onEnter(): void {
    window.addEventListener("keydown", this.handleMovement);
    window.addEventListener("keyup", this.handleMovementUp);
  }

  onExit(): void {
    window.removeEventListener("keydown", this.handleMovement);
    window.removeEventListener("keyup", this.handleMovementUp);
  }

  update(delta: number) {
    this.applyMovement();
    this.physicsWorld.stepSimulation(delta, 10);
    this.updateMotion();

    this.handleFalseChestEvent();
    this.handleTrueChestEvent();
    this.handleGoalKeyEvents();
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

  onCollect(hitObject: THREE.Object3D): void {
    if (hitObject.userData.type == "Key") {
      this.pickupKey(hitObject);
    }
  }
}
//#endregion Functions
