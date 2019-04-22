import { Component, Vue } from 'vue-property-decorator';
import template from './home.vue';
import { Enums } from '../shared/enum';

declare let Snap: any;
let cellSize = Enums.CELL_SIZE;

@Component({
    mixins: [template],
    components: {
    }
})
export default class Home extends Vue {
    public cellList: Array<Cell> = [];
    data() {
        return {
            cellList: []
        }
    }
    mounted() {
        let self = this;
        setTimeout(() => {
            let app: any = Snap('#svg');
            let appWidth = app.node.width.baseVal.value;
            let appHeight = app.node.height.baseVal.value;

            for (let i = 0; i <= 15; i++) {
                let lineH = app.line(0, cellSize * i, appWidth, cellSize * i);
                lineH.attr({
                    stroke: Enums.MAP_LINE_COLOR,
                    strokeWidth: 1
                });

                let lineV = app.line(cellSize * i, 0, cellSize * i, appHeight);
                lineV.attr({
                    stroke: Enums.MAP_LINE_COLOR,
                    strokeWidth: 1
                });
            }
            for (let i = 0; i < 15; i++) {
                for (let j = 0; j < 15; j++) {
                    let cellObj = new Cell(app, j, i, { stroke: '#123456', strokeWidth: 1, fill: Enums.MAP_COLOR });
                    cellObj.hover((cell: Cell) => {
                        cell.cell.attr({ opacity: Enums.CELL_HOVER_OPACITY });
                    });
                    cellObj.mouseout((cell: Cell) => {
                        cell.cell.attr({ opacity: Enums.MAP_OPACITY });
                    });
                    self.cellList.push(cellObj);
                }
            }
            self.cellList.filter(item => {
                return (item.x >= 12 && item.y <= 2) || (item.x <= 2 && item.y >= 12);
            }).forEach(item => {
                item.setAttr({
                    fill: Enums.CITY_COLOR
                });
            });

            self.cellList.filter(item => {
                return item.name == '14_0' || item.name == '0_14';
            }).forEach(item => {
                item.setAttr({
                    fill: Enums.CAPITAL_COLOR
                });
            });

            self.cellList.filter(item => {
                return (item.x <= 1 && item.y == 9) || (item.x == 5 && item.y >= 13) || (item.x == 9 && item.y <= 1) || (item.x >= 13 && item.y == 5);
            }).forEach(item => {
                item.setAttr({
                    fill: Enums.WALL_COLOR
                });
            });

            self.cellList.filter(item => {
                return ((item.y == 10 || item.y == 11) && item.x >= 4 && item.x <= 8) ||
                    ((item.y == 3 || item.y == 4) && item.x >= 6 && item.x <= 10) ||
                    (item.x == 6 && item.y >= 5 && item.y <= 7) ||
                    (item.x == 8 && item.y >= 7 && item.y <= 9) ||
                    (item.x == 7 && item.y == 7);
            }).forEach(item => {
                item.setAttr({
                    fill: Enums.RIVER_COLOR
                });
            });

            self.cellList.filter(item => {
                return (item.x >= 11 && item.x <= 13 && item.y >= 9 && item.y <= 13) || (item.x >= 1 && item.x <= 3 && item.y >= 1 && item.y <= 5);
            }).forEach(item => {
                item.setAttr({
                    fill: Enums.FOREST_COLOR
                });
            });
        }, 100);
    }
}

export class Cell {
    public app: any;

    public x: number;

    public y: number;

    public attr?: number;

    public cell: any;

    public name: string;

    constructor(app: any, x: number, y: number, attr?: any) {
        this.app = app;
        this.x = x;
        this.y = y;
        this.name = x + '_' + y;
        this.attr = this.attr;
        this.draw(x, y, attr);
    }

    draw(x: number, y: number, attr: any) {
        let snapX = x * cellSize;
        let snapY = y * cellSize;
        this.cell = this.app.rect(snapX, snapY, cellSize, cellSize, 0, 0).attr(attr);
    }

    setAttr(attr: any) {
        this.cell.attr(attr);
    }

    hover(callback: Function) {
        let self = this;
        this.cell.hover(() => {
            callback(self);
        });
    }

    mouseout(callback: Function) {
        let self = this;
        this.cell.mouseout(() => {
            callback(self);
        });
    }
}
