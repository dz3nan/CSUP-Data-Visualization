import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';


Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
        {
          path: '/',
          name: 'index',
          components: { default: Index},

        }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
