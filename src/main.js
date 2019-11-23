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
