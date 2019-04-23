import { Component, Vue } from 'vue-property-decorator';
import template from './home.vue';
import { Enums } from '../shared/enum';
import { Map } from '../core/map';
import { Chessman } from '../core/chessman';
var logo = require('@/assets/images/tk_a.png');

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
                let chessman = new Chessman(app, 2, 2, 'bi', 'a', {fill: 'yellow'});
                chessman.draw();
            }, 100);
            (window as any).map = map;
        }, 10);
    }
}
