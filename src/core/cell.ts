import { Enums } from '../shared/enum';

export class Cell {
    public app: any;

    public x: number;

    public y: number;

    public attr?: number;

    public cell: any;

    public name: string;

    private cellSize: number = Enums.CELL_SIZE;

    constructor(app: any, x: number, y: number, attr?: any) {
        this.app = app;
        this.x = x;
        this.y = y;
        this.name = `${x}_${y}`;
        this.attr = this.attr;
        this.draw(x, y, attr);
    }

    draw(x: number, y: number, attr: any) {
        let snapX = x * this.cellSize;
        let snapY = y * this.cellSize;
        this.cell = this.app.rect(snapX, snapY, this.cellSize, this.cellSize, 0, 0).attr(attr);
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
