//PERSISTENT DATA ACROSS SCENES
export const GameState = {
  inventory: {} as Record<string, InventoryItem>,
  levelKeys: {} as Record<string, boolean>,
};

export class Inventory {
  static getGameStateInventory() {
    return GameState.inventory;
  }

  static setGameStateInventory(inventory: Record<string, InventoryItem>) {
    GameState.inventory = inventory;
  }

  static addItem(itemName: string, quantity: number = 1) {
    if (!GameState.inventory[itemName]) {
      GameState.inventory[itemName] = { quantity: 0 };
    }

    GameState.inventory[itemName].quantity += quantity;
  }

  static removeItem(itemName: string, quantity: number = 1) {
    if (GameState.inventory[itemName]) {
      GameState.inventory[itemName].quantity -= quantity;
      if (GameState.inventory[itemName].quantity <= 0) {
        delete GameState.inventory[itemName];
      }
    }
  }

  static hasItem(name: string, quantity: number = 1): boolean {
    return GameState.inventory[name]?.quantity >= quantity;
  }
}

type InventoryItem = {
  quantity: number;
  //max?
};

export class LevelKeys {
  static getGameStateKeys(): Record<string, boolean> {
    return GameState.levelKeys;
  }

  static getAll(): Record<string, boolean> {
    return GameState.levelKeys;
  }

  static setAll(keys: Record<string, boolean>) {
    GameState.levelKeys = keys || {};
  }

  static setKey(key: string, value: boolean = true) {
    GameState.levelKeys[key] = value;
  }

  static hasKey(key: string): boolean {
    return !!GameState.levelKeys[key];
  }

  static removeKey(key: string) {
    delete GameState.levelKeys[key];
  }
}
