# Devlog #1 - 11/14/2025

## Roles:

Reece will be the _Tools Lead_ for this project. She will look at and select the necessary tools to facilitate the processes of source control and automated deployment of our game to the web. When needed, she will help team members set up and configure these systems on their machines. She will also look into tools to help with development such as linters and auto-formatting tools.

Beckham will be the _Engine Lead_. He is resourceful due to having various experiences in other engines. As a result he is able to figure out how to solve problems through constant experimentation. He’s had experience in handling big projects which should be helpful for keeping the codebase organized. He’s also taught students how to use various engines in the past.

Kimi is the _Design Lead_. With her art experience, she will be responsible for establishing the art direction of the game. This will go in tandem with the creative direction of the game. This includes what kind of feelings or fantasy the game is trying to depict. She will also manipulate the HTML to give the game the appropriate UI based on the direction of the game, as well as creating new assets with Procreate.

Vivian will be the _Testing Lead_. They will handle testing in various ways. One way is using Copilot to organize any problems in the code. Another is actually testing the game. This will be done via solo playtests but also finding others to playtest as well. This will be done a couple of times a week to make sure the codebase is constantly organized.

## Main Creation Tools:

### Language and Libraries

While we are not committed to a particular engine, we plan to use TypeScript or JavaScript due to our familiarity with using the language. We will be using the Three.js library to render 3D graphics and enable physics in our game. We will also be including HTML as a support piece for marking up the browser page and creation of UI elements. If we decide down the line that we need to save any data, we’ll be looking to save them in a JSON file for use.

### Tools

We will be using [GitHub Codespaces](https://github.com/features/codespaces) as our IDE since we’ve already been working in the space for our assignments. The [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) extension available in Codespaces also eases the difficulty of remote collaboration by allowing for remote pair programming. For art, we will be using [Procreate](https://procreate.com/) to create original, hand-drawn assets. We plan to use the [Three.js](http://Three.js) editor for building 3D scenes, and [Blender](https://www.blender.org/) for modeling/rendering any custom 3D assets as needed. For sound design, we will use [Reaper](https://www.reaper.fm/) to edit any necessary audio files for our game.

### AI Usage

We’ll use Github Copilot’s autocomplete features on our code during development, as well as agent mode to review our code for smells and potential solutions. The use of these tools is intended to quicken the speed of development and produce higher-quality code that is easier to read and understand.

## Outlook

### What is your team hoping to accomplish that other teams might not attempt?

We are hoping to create a playable game mechanic that can be expanded upon. We hope that what we create in this project can be used as a framework for future physics-based puzzles that we may encounter in the future.

### What do you anticipate being the hardest or riskiest part of the project?

The most difficult part of this project would probably be implementing physics in TypeScript, as it is mostly a language that handles 2D and web creation. Working in a language that each team member is familiar with makes it easier for each of us to understand, debug, and contribute, but the language has its own limitations as a 3D engine.

### What are you hoping to learn by approaching the project with the tools and materials you selected above?

We would like to gain more experience using GitHub Codespaces together. We’ve done it before in section but now we’ll be collaborating for a full project. This will be a good opportunity to learn how to use libraries in TypeScript due to the wide range of possibilities that are made available with Three.js such as 3D graphics and physics.

---

# Devlog #2 - 11/21/2025

## Requirements

### Platform

We are using the web via TypeScript. However, we are using a modified version of TypeScript as certain things had to be done to bypass the strict type to allow our .js libraries to work. TypeScript doesn’t come with native 3D support so anything in that capacity must be imported. Our project setup is different from the ones used in the past class projects.

### Third-party 3D Rendering Library

We are using Three.js as our third-party 3D rendering library. This allows our scene to be in 3D. Three.js allows things like making cubes. It also comes with features that we wrote in code, like a clock which behaves as a timer. Another is orbiting controls which are common in 3D engines.

### Third-party Physics Library

We are using ammo.js as our third-party physics simulation library. This allows the use of a physics world. We can set objects to have rigidbodies which can do various things such as colliding with other objects. It also allows us to use forces like gravity or our own custom forces.

### Simple Physics-based Puzzle

The initial playable prototype has a simple physics-based puzzle requiring the player to move a cube into a goal area. A condition check that will detect when the player cube hits the goal.

### Player Controls

The player is able to exert control over the game through WASD controls which apply a force in their assigned direction. W/S moves the player along the Y axis, and A/D moves the player along on the X axis.

### Visual Win/Loss States

The player cube starts red, then turns green once the player completes the puzzle.

### Pre-commit Automation

The codebase uses Prettier as before-commit automation which consistently formats our code for us. A linting program was attempted although it doesn’t seem to work anymore. We’ll look into fixing the program or using another one, but for now, we’re settling with just autoformatting.

### Post-push Automation

We used GitHub Actions to automatically push our changes and deploy our project to GitHub Pages. This method requires us to remove all errors of the code before deployment. Otherwise, it will not push. There were a few moments where we kept unused imports, preventing the page from getting updated and re-published until those errors were resolved.

## Reflection

Most of our time was spent trying to understand the library enough to meet the requirements for this initial version. We had trouble trying to detect collisions with ammo.js, so we might be looking into using a different physics library. Beckham did most of the engines and tools work on his own this week, so we'll properly discuss a schedule and assign tasks for this coming week to prevent this kind of build up from happening again. (Thank you and sorry, Beckham!)

---

# Devlog #3 - 11/30/2025

## Requirements

### 3D Rendering and Physics

The game uses the same libraries for 3D rendering and physics simulation, which were Three.js and Ammo.js respectively. Both were imported and used to build and display our scenes and the objects within them.

### Switching Scenes

The player is able to switch scenes by pressing the G key. This invokes an event that the main scene will read and switch scenes accordingly. The scene is reloaded. The system is robust enough to allow switching scenes in a different way such as going to a location.

### Object Interaction

The player can click on objects to interact with them. We currently have a key represented by a blue cube, which can be clicked on and placed into inventory. This effect is achieved through raycasting. The current scene will handle the necessary interactions.

### Carrying Inventory Across Scenes

Player inventory is stored as persistent data in a const `Object` called `GameState`. `GameState` currently has a single property which holds items in an array called inventory. When a key is in inventory and the player changes scenes, the player carries their inventory over into the next scene.

### Physics-based Puzzle → Progression

The player completes a physics based puzzle where the player tries to land on a target point. The player applies movement to the cube via forces. When the player succeeds, a key appears which can be clicked on and interacted with. Clicking the key places it into the player's inventory, and is necessary to beat the game in its current state.

### Win/Loss State

The player succeeds when they land the cube on the target area. The cube turns green on hitting the goal, and a key appears above the goal for the player to click on and store in inventory.

### Conclusive Game End

When the player collects the key and brings it to scene 2, they will receive a page popup that reads “You Win!” They need the key for the popup to show.

## Reflection

We had a meeting to discuss next steps for our project and designated tasks for F2 and F3 in the coming week. We have a clearer direction for where we want our game to head, and what each of our roles should be. Beckham and I will continue working on building each level; Kimi will help out with the additional features for F3 as needed, as well as making assets; Vivian will also help with the additional features, playtesting, and debugging. We've identified which bugs need fixing, as well as which four additional features we would like to implement for F3: unlimited undo, save system, visual themes, and i18n/l8n.

---

# Devlog #4 - 12/04/2025

## Requirements

### Continuous Inventory

We chose continuous inventory since we already had a working inventory system, so this seemed easy to implement.
The inventory system relies on a public `Inventory` class. It holds the functions `addItem()` and `removeItem()` which adds/removes quantities of `InventoryItems`. `InventoryItem` is a defined type that holds a number stored as `quantity`. This allows our inventory to carry an item with an associated quantity, such as coins. We used `Inventory` to store coins at a float value, and level keys with trivial value in the player's inventory.

### Save System

We chose the save system because we had familiarity with it from D3.
There are three functions related to this feature, which we kept in `main.ts`: `saveGame()`, `loadGame()`, and `newGame()`. `saveGame()` saves the player’s inventory to the localStorage API. This allows `loadGame()` to access it and set the inventory to the saved one when loading the current save. Each scene could access these functions by firing an event which allowed `main.ts` to read the event and save the game. We probably could have turned this system into its own public class but this is what we made in the given time.

### Visual Themes

We chose to implement visual themes as we thought it would add some polish to our project.
The light/dark mode of assets was created using the **Facade pattern**. The `ThemeFacade` class keeps track of the user’s screen and fires an event when the theme is changed to light/dark. Assets that need to use the script call `getAsset()` and pass in the appropriate key name. The keys are defined in a `Record` named `ThemeAssets`, used to access the appropriate assets types depending on the current theme. The `Record` is generic as it takes a type `T` which allows Objects to define materials or textures instead of just one type. This method of switching themes allowed us to easily swap out themes for our title and end screens, both of which have separate, custom assets for each theme.

### i18n/l8n

We chose to implement this feature because internationalization and localization seemed like a fun challenge to tackle. Additionally, we would be allowing our game to a wider audience which is a positive. We’ve implemented language support for English, Japanese, and Arabic. These settings can be changed through the title screen menu.
Localization was implemented via the `Localization` class in `localization.ts`. `Localization` holds a `Record` with a unique type `Language` which holds one of our three languages. We have a JSON file with a key and the three languages that text will be in. Then, all we needed to do is call the localization script with the key we want to either get the translated text with `getText()`, or to set the language with `setLanguage()`. In `main.ts`, a variable for the text must be initialized and calls the `getLanguage()` function, which references the translations listed in the JSON file.

## Reflection

We pivoted from unlimited undo to continuous inventory since it was closer to our inventory system and thus easier to implement than creating an entirely new undo system from scratch. The other three systems went pretty smoothly so a pivot was never considered. There were a few things that we couldn't accomplish. We couldn't get many custom assets in the actual game itself other than the title screen and end animation. We also couldn't do much playtesting due to features taking time to implement. However, we were able to fix a few bugs that we found from playtesting ourselves during the game's development, such as loss of control after 3 seconds of inactivity, level select not syncing with the current game save, and collectibles not collecting on collision. Other bugs could not be fixed, such as occasionally slowed player movement due to unknown causes, and the coin bodies not disappearing on collision.

---

# Credits

### Art by

Kimberly Jeung at [kljeung](https://github.com/kljeung)

### Programming and Design by

Beckham Reyes at [BeReyes1](https://github.com/BeReyes1)<br>
Reece Talaro at [RTalaro](https://github.com/RTalaro)<br>
Kimberly Jeung at [kljeung](https://github.com/kljeung)<br>
Vivian Allen at [GabrielJAllen](https://github.com/GabrielJAllen)<br>

---

# Dev Commands

### Run in browser:

npm run dev

### Formatting automation:

npx prettier . --write
