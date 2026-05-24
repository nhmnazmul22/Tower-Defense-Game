import {TileType} from "../Enums/TileType.js";
import {IPosition} from "../Interface/IPosition.js";

class Tile{
    public constructor(public type: TileType, public position: IPosition) {
    }
}

export default Tile;