import Game from './Core/Game';
import GameMap from "./Core/GameMap";
import {TileType} from "./Enums/TileType";

const game = new Game();
const gameMap = new GameMap(TileType.SPAWN, {row: 10, col: 10});
const gameMap2 = new GameMap(TileType.BASE, {row: 10, col: 10});

console.log("Spawn Tiles: ",gameMap.getSpawn());
console.log("Base Tiles: ",gameMap2.getSpawn());
console.log("Tile:", gameMap.getTile(1, 2))


game.start();


setTimeout(()=>{
    game.stop();
}, 5000)