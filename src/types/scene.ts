import * as THREE from "three";

export interface Scene {
  init(scene: THREE.Scene): Promise<void>; //put all spawn logic here
  onEnter(): void; //when the scene starts, usually put events here
  onExit(): void; //when scene exits, usually unsubscribe from events
  update(delta: number): void; //anything that needs to happen every frame like physics
  onClick(hitObject: THREE.Object3D): void; //when something is clicked
  onSceneLeave?: (targetScene: Scene) => void; //when leaving the scene invoke event w/ scene
  onSaveGame?: () => void; //when to save the game
}
