import { Component, Vue } from 'vue-property-decorator';
import template from './home.vue';
import { Enums } from '../shared/enum';
import { Map } from '../core/map';
import {
    Bishop, Defender, Knight, Ship, Soldier, Tank
} from '../core/chessman/index';

declare let SVG: any;

@Component({
    mixins: [template],
    components: {
    }
})
export default class Home extends Vue {
    data() {
        return {
            cellList: []
        };
    }

    mounted() {
        let self = this;
        let app: any = SVG('svg').size(16 * Enums.CELL_SIZE, 16 * Enums.CELL_SIZE);
        let map = new Map(app);
        setTimeout(() => {
            map.draw();
            setTimeout(() => {
                let dea1 = new Defender(map, 0, 13, Enums.FACTION_A, { fill: Enums.FACTION_A_COLOR });
                dea1.draw()
                let dea2 = new Defender(map, 2, 15, Enums.FACTION_A, { fill: Enums.FACTION_A_COLOR });
                dea2.draw();

                let sha1 = new Ship(map, 6, 12, Enums.FACTION_A, { fill: Enums.FACTION_A_COLOR });
                sha1.draw();
                let sha2 = new Ship(map, 8, 11, Enums.FACTION_A, { fill: Enums.FACTION_A_COLOR });
                sha2.draw();

                let soa1 = new Soldier(map, 2, 10, Enums.FACTION_A, { fill: Enums.FACTION_A_COLOR });
                soa1.draw();
                let soa2 = new Soldier(map, 4, 10, Enums.FACTION_A, { fill: Enums.FACTION_A_COLOR });
                soa2.draw();
                let soa3 = new Soldier(map, 6, 10, Enums.FACTION_A, { fill: Enums.FACTION_A_COLOR });
                soa3.draw();
                let soa4 = new Soldier(map, 9, 10, Enums.FACTION_A, { fill: Enums.FACTION_A_COLOR });
                soa4.draw();
                let soa5 = new Soldier(map, 11, 10, Enums.FACTION_A, { fill: Enums.FACTION_A_COLOR });
                soa5.draw();
                let soa6 = new Soldier(map, 13, 10, Enums.FACTION_A, { fill: Enums.FACTION_A_COLOR });
                soa6.draw();

                let kna1 = new Knight(map, 3, 11, Enums.FACTION_A, { fill: Enums.FACTION_A_COLOR });
                kna1.draw();
                let kna2 = new Knight(map, 10, 11, Enums.FACTION_A, { fill: Enums.FACTION_A_COLOR });
                kna2.draw();

                let bia1 = new Bishop(map, 12, 12, Enums.FACTION_A, { fill: Enums.FACTION_A_COLOR });
                bia1.draw();
                let bia2 = new Bishop(map, 14, 12, Enums.FACTION_A, { fill: Enums.FACTION_A_COLOR });
                bia2.draw();
                // let kna = new Knight(map, 4, 2, Enums.FACTION_A, { fill: Enums.FACTION_A_COLOR });
                // let sha = new Ship(map, 5, 2, Enums.FACTION_A, { fill: Enums.FACTION_A_COLOR });
                // let soa = new Soldier(map, 6, 2, Enums.FACTION_A, { fill: Enums.FACTION_A_COLOR });
                let tka1 = new Tank(map, 4, 13, Enums.FACTION_A, { fill: Enums.FACTION_A_COLOR });
                tka1.draw();
                let tka2 = new Tank(map, 11, 13, Enums.FACTION_A, { fill: Enums.FACTION_A_COLOR });
                tka2.draw();
                // bia.draw();
                // dea1.draw();
                // kna.draw();
                // sha.draw();
                // soa.draw();

                let bib = new Bishop(map, 2, 4, Enums.FACTION_B, { fill: Enums.FACTION_B_COLOR });
                let deb = new Defender(map, 3, 4, Enums.FACTION_B, { fill: Enums.FACTION_B_COLOR });
                let knb = new Knight(map, 4, 4, Enums.FACTION_B, { fill: Enums.FACTION_B_COLOR });
                let shb = new Ship(map, 5, 4, Enums.FACTION_B, { fill: Enums.FACTION_B_COLOR });
                let sob = new Soldier(map, 6, 4, Enums.FACTION_B, { fill: Enums.FACTION_B_COLOR });
                let tkb = new Tank(map, 7, 4, Enums.FACTION_B, { fill: Enums.FACTION_B_COLOR });
                bib.draw();
                deb.draw();
                knb.draw();
                shb.draw();
                sob.draw();
                tkb.draw();
                // (window as any).bi = bi;
            }, 100);
            (window as any).map = map;
        }, 10);
    }
}
