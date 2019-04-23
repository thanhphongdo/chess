import { Cell } from './cell';
import { Enums } from '../shared/enum';

export class Map {
    public app: any;

    public cellList: Array<Cell>;

    private cellSize: number = Enums.CELL_SIZE;

    constructor(app: any) {
        this.app = app;
        this.cellList = [];
    }

    drawMap() {
        let self = this;
        let appWidth = this.app.node.width.baseVal.value;
        let appHeight = this.app.node.height.baseVal.value;

        for (let i = 0; i <= 15; i++) {
            let lineH = this.app.line(0, this.cellSize * i, appWidth, this.cellSize * i);
            lineH.attr({
                stroke: Enums.MAP_LINE_COLOR,
                strokeWidth: 1
            });

            let lineV = this.app.line(this.cellSize * i, 0, this.cellSize * i, appHeight);
            lineV.attr({
                stroke: Enums.MAP_LINE_COLOR,
                strokeWidth: 1
            });
        }
        for (let i = 0; i < 15; i++) {
            for (let j = 0; j < 15; j++) {
                let cellObj = new Cell(this.app, j, i, { stroke: '#123456', strokeWidth: 1, fill: Enums.MAP_COLOR });
                cellObj.hover((cell: Cell) => {
                    cell.cell.attr({ opacity: Enums.CELL_HOVER_OPACITY });
                });
                cellObj.mouseout((cell: Cell) => {
                    cell.cell.attr({ opacity: Enums.MAP_OPACITY });
                });
                self.cellList.push(cellObj);
            }
        }
        self.cellList.filter(item => (item.x >= 12 && item.y <= 2) || (item.x <= 2 && item.y >= 12)).forEach((item) => {
            item.setAttr({
                fill: Enums.CITY_COLOR
            });
        });

        self.cellList.filter(item => item.name == '14_0' || item.name == '0_14').forEach((item) => {
            item.setAttr({
                fill: Enums.CAPITAL_COLOR
            });
        });

        self.cellList.filter(item => (item.x <= 1 && item.y == 9) || (item.x == 5 && item.y >= 13) || (item.x == 9 && item.y <= 1) || (item.x >= 13 && item.y == 5)).forEach((item) => {
            item.setAttr({
                fill: Enums.WALL_COLOR
            });
        });

        self.cellList.filter(item => ((item.y == 10 || item.y == 11) && item.x >= 4 && item.x <= 8)
                || ((item.y == 3 || item.y == 4) && item.x >= 6 && item.x <= 10)
                || (item.x == 6 && item.y >= 5 && item.y <= 7)
                || (item.x == 8 && item.y >= 7 && item.y <= 9)
                || (item.x == 7 && item.y == 7)).forEach((item) => {
            item.setAttr({
                fill: Enums.RIVER_COLOR
            });
        });

        self.cellList.filter(item => (item.x >= 11 && item.x <= 13 && item.y >= 9 && item.y <= 13) || (item.x >= 1 && item.x <= 3 && item.y >= 1 && item.y <= 5)).forEach((item) => {
            item.setAttr({
                fill: Enums.FOREST_COLOR
            });
        });
    }
}