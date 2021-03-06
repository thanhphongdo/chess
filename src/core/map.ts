import { Cell } from './cell';
import { Enums } from '../shared/enum';
import { Chessman } from './chessman';
import { HistoryItemInterface } from './interface';

export class Map {
    public app: any;

    public cellList: Array<Cell>;

    public chessmanList: Array<Chessman>;

    private cellSize: number = Enums.CELL_SIZE;

    public step: number = 0;

    public history: Array<HistoryItemInterface>;

    constructor(app: any) {
        this.app = app;
        this.cellList = [];
        this.chessmanList = [];
        this.history = [];
    }

    draw() {
        let self = this;
        let appWidth = this.app.node.width.baseVal.value;
        let appHeight = this.app.node.height.baseVal.value;

        for (let i = 0; i <= 16; i++) {
            let lineH = this.app.line(0, this.cellSize * i, appWidth, this.cellSize * i).stroke({
                width: 1
            });

            let lineV = this.app.line(this.cellSize * i, 0, this.cellSize * i, appHeight).stroke({
                width: 1
            });

            if (i == 8) {
                lineH.stroke({ color: 'red' });
                lineV.stroke({ color: 'red' });
            }
        }

        for (let i = 0; i < 16; i++) {
            for (let j = 0; j < 16; j++) {
                let cellObj = new Cell(this.app, j, i, { fill: Enums.MAP_COLOR });
                cellObj.mouseover((cell: Cell) => {
                    cell.cell.attr({ opacity: Enums.CELL_HOVER_OPACITY });
                });
                cellObj.mouseout((cell: Cell) => {
                    cell.cell.attr({ opacity: Enums.MAP_OPACITY });
                });
                if (i < 7) cellObj.faction = Enums.FACTION_B;
                if (i > 7) cellObj.faction = Enums.FACTION_A;
                self.cellList.push(cellObj);
            }
        }
        self.cellList.filter(item => (item.x >= 12 && item.y <= 3) || (item.x <= 3 && item.y >= 12)).forEach((item) => {
            item.setAttr({
                fill: Enums.CITY_COLOR
            });
            item.mapType = Enums.MAP_CITY;
        });

        self.cellList.filter(item => item.name == '15_0' || item.name == '0_15').forEach((item) => {
            item.setAttr({
                fill: Enums.CAPITAL_COLOR
            });
            item.mapType = Enums.MAP_CAPITAL;
        });

        self.cellList.filter(item => (item.x <= 1 && item.y == 9) || (item.x == 6 && item.y >= 14) || (item.x == 9 && item.y <= 1) || (item.x >= 14 && item.y == 6)).forEach((item) => {
            item.setAttr({
                fill: Enums.WALL_COLOR
            });
            item.mapType = Enums.MAP_WALL;
        });

        self.cellList.filter(item => ((item.y == 11 || item.y == 12) && item.x >= 5 && item.x <= 9)
            || ((item.y == 3 || item.y == 4) && item.x >= 6 && item.x <= 10)
            || (item.x == 7 && item.y >= 5 && item.y <= 8)
            || (item.x == 8 && item.y >= 7 && item.y <= 10)).forEach((item) => {
                item.setAttr({
                    fill: Enums.RIVER_COLOR
                });
                item.mapType = Enums.MAP_RIVER;
            });

        self.cellList.filter(item => (item.x >= 12 && item.x <= 14 && item.y >= 10 && item.y <= 14) || (item.x >= 1 && item.x <= 3 && item.y >= 1 && item.y <= 5)).forEach((item) => {
            item.setAttr({
                fill: Enums.FOREST_COLOR
            });
            item.mapType = Enums.MAP_FOREST;
        });
    }

    getCellByName(name: string) {
        let cells = this.cellList.filter(item => item.name == name);
        if (cells && cells.length) return cells[0];
        return null;
    }

    getCellByCoor(x: number, y: number) {
        let cells = this.cellList.filter(item => item.x == x && item.y == y);
        if (cells && cells.length) return cells[0];
        return null;
    }

    getCellByCondition(condition: (cell: Cell) => boolean) {
        return this.cellList.filter(item => condition(item));
    }

    addHistory(chessman: Chessman) {
        this.step++;
        this.history.push({
            time: new Date().getTime(),
            step: this.step,
            chessman,
            x: chessman.x,
            y: chessman.y,
            faction: chessman.faction
        });
    }

    getHistoryBystep(step: number) {
        let historyItems = this.history.filter(item => item.step == step);
        if (historyItems && historyItems.length) return historyItems[0];
        return null;
    }
}
