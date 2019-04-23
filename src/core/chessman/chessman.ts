import { Enums } from '../../shared/enum';
import { Map } from '../map';

export class Chessman {
    public map: Map;

    public x: number;

    public y: number;

    public attr?: number;

    public name: string;

    public faction: string;

    private cellSize: number = Enums.CELL_SIZE;

    public image: any;

    public chessman: any;

    public background: any;

    constructor(map: Map, x: number, y: number, name: string, faction: string, attr?: any) {
        this.map = map;
        this.x = x;
        this.y = y;
        this.name = name;
        this.image = require(`@/assets/images/${name}_${faction}.png`);
        this.faction = faction;
        this.attr = attr;
    }

    draw() {
        let snapX = this.x * this.cellSize;
        let snapY = this.y * this.cellSize;
        this.background = this.map.app.circle(snapX + this.cellSize / 2, snapY + this.cellSize / 2, this.cellSize / 2 - 4).attr({ fill: 'yellow' });
        this.chessman = this.map.app.image(this.image, snapX, snapY, this.cellSize, this.cellSize).attr(this.attr || {});
    }
}
