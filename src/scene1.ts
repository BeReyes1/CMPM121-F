import * as THREE from "three";
import loadAmmo from "./physics/ammo-loader";
import { createPhysicsWorld } from "./physics/world";
import { createBoxBody } from "./physics/body-factory";
import type { Scene } from "./types/scene";
import { Inventory } from "./types/gamestate";
import { Scene2 } from "./scene2";
import { ThemeFacade } from "./types/themeFacade";
import type { Box } from "./main";

export class Scene1 implements Scene {
  physicsWorld: any;
  AmmoLib: any;
  playerMesh!: THREE.Mesh;
  playerBody!: any;
  goalMesh!: THREE.Mesh;
  bodies: { mesh: THREE.Mesh; body: any }[] = [];
  barrierMaterial: THREE.Material =
    ThemeFacade.getAsset<THREE.Material>("barrier_Material");
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

    //#region Ground
    const groundParams: Box = {
      posX: 0,
      posY: 0,
      posZ: 0,
      sizeX: 20,
      sizeY: 1,
      sizeZ: 20,
      mass: 0,
      color: ThemeFacade.getAsset<THREE.Material>("ground_Material"),
      collide: true,
    };
    this.makeBox(groundParams);
    //#endregion Ground

    //#region Walls
    const wallParams: Box[] = [
      {
        posX: 0,
        posY: 1,
        posZ: 10,
        sizeX: 20,
        sizeY: 1,
        sizeZ: 1,
        mass: 0,
        color: this.barrierMaterial,
        collide: true,
      },
      {
        posX: 0,
        posY: 1,
        posZ: -10,
        sizeX: 20,
        sizeY: 1,
        sizeZ: 1,
        mass: 0,
        color: this.barrierMaterial,
        collide: true,
      },
      {
        posX: 10,
        posY: 1,
        posZ: 0,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 21,
        mass: 0,
        color: this.barrierMaterial,
        collide: true,
      },
      {
        posX: -10,
        posY: 1,
        posZ: 0,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 21,
        mass: 0,
        color: this.barrierMaterial,
        collide: true,
      },
    ];
    wallParams.forEach((wall) => {
      this.makeBox(wall);
    });
    //#endregion Walls

    this.createPlayer();
    this.makeGoal();
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
    if (boxParams.mass > 0) this.playerBody = barrier.body;
    if (boxParams.collide) this.physicsWorld.addRigidBody(barrier.body);
    const boxMesh = new THREE.Mesh(boxGeometry, boxParams.color);
    boxMesh.position.set(boxParams.posX, boxParams.posY, boxParams.posZ);
    this.scene.add(boxMesh);
    this.bodies.push({ mesh: boxMesh, body: barrier.body });
    return boxMesh;
  }
  //#endregion Make Box

  //#region Player
  /*
  playerParams: Box = {
    posX: 0,
    posY: 5,
    posZ: 0,
    sizeX: 0.5,
    sizeY: 0.5,
    sizeZ: 0.5,
    mass: 1,
    color: new THREE.MeshBasicMaterial({ color: 0x0080ff }),
    collide: true,
  };
  */

  createPlayer() {
    //this.playerMesh = this.makeBox(this.playerParams);

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
      posX: 0,
      posY: 0.1,
      posZ: 0,
      sizeX: 1,
      sizeY: 1,
      sizeZ: 1,
      mass: 0,
      color: new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
      collide: true,
    };
    this.goalMesh = this.makeBox(goalParams);
  }
  //#endregion Goal

  //#region Key
  keyParams: Box = {
    posX: 8,
    posY: 1,
    posZ: 0,
    sizeX: 0.3,
    sizeY: 0.5,
    sizeZ: 0.3,
    mass: 0,
    color: new THREE.MeshBasicMaterial({ color: 0xffff54 }),
    collide: false,
  };

  spawnKey() {
    this.key = this.makeBox(this.keyParams);
    this.key.userData.type = "Key";
  }
  //#endregion Key

  //#region key collision
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
    if (!this.win && this.isNear(this.playerMesh, this.goalMesh, 0.5)) {
      this.win = true;
      this.spawnKey();
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
  //#endregion key collision

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
  // TO-DO: remove once event collision is in
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

    // TO-DO: remove once event collision is in
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
