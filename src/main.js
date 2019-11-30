import Vue from 'vue';
import App from './App.vue';
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import store from './store/store'
import VueApexCharts from 'vue-apexcharts'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
 import Temperatura from './pages/Temperatura.vue'
 import Vlaznost from './pages/Vlaznost.vue'
 import Vjetar from './pages/Vjetar.vue'
 import Padavina from './pages/Padavina.vue'
 import WindDirection from './pages/WindDirection.vue'


Vue.use(Buefy);

Vue.component('apexchart', VueApexCharts)

Vue.component('temperatura',Temperatura)
Vue.component('vlaznost',Vlaznost)
Vue.component('vjetar',Vjetar)
Vue.component('padavina',Padavina)
Vue.component('smjerVjetra',WindDirection)


Vue.use(BootstrapVue)

Vue.config.productionTip = false;

Vue.use(NowUiKit);


new Vue({
  created () {
    AOS.init(),
    AOS.refresh();

  },
  router,
  store,
  render: h => h(App)
}).$mount('#app');

let loader = null;
function hideLoader(){
   // destroy previous
     if(loader) {
         loader.hide();
         loader = null;
    }
}

function showLoader(){
     hideLoader();
     loader = Vue.$loading.show()
}

router.beforeEach((to, from, next)=>{

  if (to.name) {
      showLoader();
   }
   next()
})
router.afterEach((to, from)=>{

setTimeout(() => {
   loader.hide()
    },800)
  // store.commit('setLoading', false)
})
