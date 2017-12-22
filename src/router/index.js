import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import header from 'components/Header/Header';
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
    },
    {
      path: '/detail',
      name: 'detail',
      component: header
    },
    {
      path: '/list',
      name: 'list',
      component: header
    },
    {
      path: '/basket',
      name: 'basket',
      component: header
    }
  ],
  linkActiveClass: 'active'
});
router.push('/list');
export default router;
