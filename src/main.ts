import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// const Snap = require('imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg-min.js');

// (window as any).Snap = Snap;

const SVG = require('svg.js/dist/svg.min.js');

(window as any).SVG = SVG;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
