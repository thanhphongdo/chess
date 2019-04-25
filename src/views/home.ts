import { Component, Vue } from 'vue-property-decorator';
import template from './home.vue';
import { Enums } from '../shared/enum';
import { Map } from '../core/map';
import {
    Bishop, Defender, Knight, Ship, Soldier, Tank
} from '../core/chessman/index';

let logo = require('@/assets/images/tk_a.png');

declare let Snap: any;
let cellSize = Enums.CELL_SIZE;

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
        let app: any = Snap('#svg');
        let map = new Map(app);
        setTimeout(() => {
            map.draw();
            setTimeout(() => {
                console.log(logo);
                // map.app.image(logo, 50, 50, 50, 50)
                let bi = new Bishop(map, 2, 2, Enums.FACTION_A, { fill: 'yellow' });
                let de = new Defender(map, 3, 2, Enums.FACTION_A, { fill: 'yellow' });
                let kn = new Knight(map, 4, 2, Enums.FACTION_A, { fill: 'yellow' });
                let sh = new Ship(map, 5, 2, Enums.FACTION_A, { fill: 'yellow' });
                let so = new Soldier(map, 6, 2, Enums.FACTION_A, { fill: 'yellow' });
                let tk = new Tank(map, 7, 2, Enums.FACTION_A, { fill: 'yellow' });
                bi.draw();
                de.draw();
                kn.draw();
                sh.draw();
                so.draw();
                tk.draw();
                (window as any).bi = bi;
            }, 100);
            (window as any).map = map;
        }, 10);
    }
}
