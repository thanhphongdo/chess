import { Component, Vue } from 'vue-property-decorator';
import template from './home.vue';
import { Enums } from '../shared/enum';
import { Map } from '../core/map';

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
            map.drawMap();
            (window as any).map = map;
        }, 10);
    }
}
