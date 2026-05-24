import {TileType} from "../Enums/TileType";
import {IPosition} from "../Interface/IPosition";

class Tile{
    public constructor(public type: TileType, public position: IPosition) {
    }
}

export default Tile;