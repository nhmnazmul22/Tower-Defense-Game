import {TileType} from "../Enums/TileType.js";
import Tile from "./Tile.js";
import {IPosition} from "../Interface/IPosition.js";

class GameMap {
    private tiles: Tile[][] = [];

    public constructor(private tileType: TileType, private layout: IPosition) {
        this.buildLayout();
    }

    private buildLayout(){
        for (let row = 0; row < this.layout.row; row++) {
            this.tiles[row] = [];
            for (let col = 0; col < this.layout.col; col++) {
                this.tiles[row][col] = new Tile(this.tileType, {row, col});
            }
        }
    }

    public getTile(row:number, col: number){
        return this.tiles[row][col];
    }

    public getSpawn(){
        return this.tiles.filter((rows)=>{
            return rows.find((col)=>{
                return col.type === TileType.SPAWN;
            })
        })
    }

    public getBase(){
        return this.tiles.filter((rows)=>{
            return rows.find((col)=>{
                return col.type === TileType.BASE;
            })
        })
    }
}

export default GameMap;