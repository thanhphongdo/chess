import { Component, Vue } from 'vue-property-decorator';
import template from './home.vue';

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
export default class Home extends Vue { }
