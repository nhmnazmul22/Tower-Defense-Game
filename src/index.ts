import Game from './Core/Game.js';
import GameMap from "./Core/GameMap.js";
import {TileType} from "./Enums/TileType.js";

const game = new Game();
const gameMap = new GameMap(TileType.SPAWN, {row: 2, col: 2});
const gameMap2 = new GameMap(TileType.BASE, {row: 2, col: 2});

console.log("Spawn Tiles: ",gameMap.getSpawn());
console.log("Base Tiles: ",gameMap2.getBase());
console.log("Tile:", gameMap.getTile(0, 1))


game.start();


setTimeout(()=>{
    game.stop();
}, 5000)