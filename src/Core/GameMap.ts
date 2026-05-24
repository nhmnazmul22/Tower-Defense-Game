import {TileType} from "../Enums/TileType";
import Tile from "./Tile";
import {IPosition} from "../Interface/IPosition";

class GameMap {
    private tiles: Tile[][] = [];

    public constructor(private tileType: TileType, private layout: IPosition) {
        this.buildLayout();
    }

    private buildLayout(){
        for (let row = 1; row <= this.layout.row; row++) {
            this.tiles[row] = [];
            for (let col = 1; col <= this.layout.col; col++) {
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