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
        let app: any = SVG('svg').size(750, 750);
        let map = new Map(app);
        setTimeout(() => {
            map.draw();
            setTimeout(() => {
                let bi = new Bishop(map, 2, 2, Enums.FACTION_A, { fill: Enums.FACTION_A_COLOR });
                let de = new Defender(map, 3, 2, Enums.FACTION_A, { fill: Enums.FACTION_A_COLOR });
                let kn = new Knight(map, 4, 2, Enums.FACTION_A, { fill: Enums.FACTION_A_COLOR });
                let sh = new Ship(map, 5, 2, Enums.FACTION_A, { fill: Enums.FACTION_A_COLOR });
                let so = new Soldier(map, 6, 2, Enums.FACTION_A, { fill: Enums.FACTION_A_COLOR });
                let tk = new Tank(map, 7, 2, Enums.FACTION_A, { fill: Enums.FACTION_A_COLOR });
                bi.draw();
                de.draw();
                kn.draw();
                sh.draw();
                so.draw();
                tk.draw();

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
                (window as any).bi = bi;
            }, 100);
            (window as any).map = map;
        }, 10);
    }
}
