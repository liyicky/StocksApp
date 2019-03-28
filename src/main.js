import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import { store } from './store/store'
import { routes } from './routes';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

Vue.http.options.root = 'https://vuejs-stock-trader-538bb.firebaseio.com/';

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
