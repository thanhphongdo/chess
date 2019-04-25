import { Enums } from '../../shared/enum';
import { Map } from '../map';
import { HistoryItemInterface } from '../interface';
import { Cell } from '../cell';

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

    public history: Array<HistoryItemInterface>;

    constructor(map: Map, x: number, y: number, name: string, faction: string, attr?: any) {
        this.map = map;
        this.x = x;
        this.y = y;
        this.name = name;
        this.image = require(`@/assets/images/${name}_${faction}.png`);
        this.faction = faction;
        this.attr = attr;
        this.history = [];
    }

    draw() {
        let snapX = this.x * this.cellSize + 3;
        let snapY = this.y * this.cellSize + 3;
        this.background = this.map.app.circle(this.cellSize - 6).move(snapX, snapY).attr(this.attr);
        this.chessman = this.map.app.image(this.image, this.cellSize, this.cellSize).move(snapX, snapY).attr(this.attr || {});
    }

    move(x: number, y: number) {
        let moveTime: number = 70 * Math.sqrt(Math.pow(this.cellSize * (x - this.x), 2) + Math.pow(this.cellSize * (y - this.y), 2)) / this.cellSize;
        if (moveTime > 500) moveTime = 500;
        this.x = x;
        this.y = y;
        let snapX = this.x * this.cellSize;
        let snapY = this.y * this.cellSize;
        this.background.animate(moveTime, (pos: any) => (-Math.cos(pos * Math.PI) / 2) + 0.5).move(snapX + 3, snapY + 3);
        this.chessman.animate(moveTime, (pos: any) => (-Math.cos(pos * Math.PI) / 2) + 0.5).move(snapX, snapY);
        let time = new Date().getTime();
        this.map.addHistory(this);
        this.history.push({
            time: new Date().getTime(),
            chessman: this,
            step: this.map.step,
            x: this.x,
            y: this.y,
            faction: this.faction
        });
    }

    getAllowMoveCell() {
        let self = this;
        let distance = 3;
        let currentCell = (self.map.getCellByCoor(self.x, self.y) as Cell);
        if (currentCell.mapType == Enums.MAP_FOREST || currentCell.mapType == Enums.MAP_RIVER) {
            distance = 2;
        }
        if (currentCell.faction != self.faction && (currentCell.mapType == Enums.MAP_CITY || currentCell.mapType == Enums.MAP_CAPITAL)) {
            distance = 1;
        }
        let allowList = self.map.cellList.filter(item => {
            if (item.x == self.x && item.y == self.y) return false;
            return (item.x == self.x && item.y <= self.y + 3 && item.y >= self.y - distance) ||
                (item.y == self.y && item.x <= self.x + 3 && item.x >= self.x - distance);
        });

    }
}
