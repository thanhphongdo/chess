import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// const Snap = require('snapsvg/dist/snap.svg.js');
const Snap = require(`imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg-min.js`);

(window as any).Snap = Snap;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
