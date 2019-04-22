import { Component, Vue } from 'vue-property-decorator';
import template from './home.vue';

let var Snap: any;
let cellSize = 40;

@Component({
    mixins: [template],
    components: {
    },
    data() {
        return {
        };
    },
    destroyed() {
    }
})
export default class Home extends Vue {
    mounted() {
        let app: any = Snap('#svg');
        let appWidth = app.node.width.baseVal.value;
        let appHeight = app.node.height.baseVal.value;
        let cellList = [];

        // function Cell(x: number, y: number, attr: any) {
        //     var self = this;
        //     this.x = x;
        //     this.y = y;
        //     this.attr = attr;
        //     this.draw = function (x, y, attr) {
        //         var snapX = (x == null ? self.x : x) * cellSize;
        //         var snapY = (y == null ? self.y : y) * cellSize;
        //         self.cell = app.rect(snapX, snapY, cellSize, cellSize, 0, 0).attr(self.attr);
        //     }
        //     this.hover = function (callback) {
        //         self.cell.hover(function (eIn, eOut, cIn, cOut) {
        //             callback(self);
        //         })
        //     }
        //     this.mouseout = function (callback) {
        //         self.cell.mouseout(function () {
        //             callback(self);
        //         })
        //     }
        //     this.draw(this.x, this.y, this.attr);
        // }

        // for (var i = 0; i <= 16; i++) {
        //     var lineH = app.line(0, cellSize * i, appWidth, cellSize * i);
        //     lineH.attr({
        //         stroke: "#000",
        //         strokeWidth: 1
        //     });

        //     var lineV = app.line(cellSize * i, 0, cellSize * i, appHeight);
        //     lineV.attr({
        //         stroke: "#000",
        //         strokeWidth: 1
        //     });
        // }
        // for (var i = 0; i < 15; i++) {
        //     for (var j = 0; j < 15; j++) {
        //         var cellObj = new Cell(j, i, { stroke: '#123456', 'strokeWidth': 1, fill: 'red' });
        //         cellObj.hover(function (cell) {
        //             cell.cell.attr({ opacity: 0.5 });
        //         });
        //         cellObj.mouseout(function (cell) {
        //             cell.cell.attr({ opacity: 1 });
        //         });
        //         cellList.push(cellObj);
        //     }
        // }
    }
}

export class Cell {
    public app: any;

    public x?: number;

    public y?: number;

    public attr?: number;

    public cell: any;

    constructor(app: any, x: number, y: number, attr?: any) { }

    draw(x: number, y: number, attr: any) {
        let snapX = x * cellSize;
        let snapY = y * cellSize;
        this.cell = this.app.rect(snapX, snapY, cellSize, cellSize, 0, 0).attr(attr);
    }

    hover(callback: Function) {
        this.cell.hover(() => {
            callback(self);
        });
    }

    mouseout(callback: Function) {
        this.cell.hover(() => {
            callback(self);
        });
    }
}
