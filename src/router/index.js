import Vue from 'vue'
import Router from 'vue-router'
import MenuList from 'components/MenuList/MenuList';
import basket from 'components/basket/basket';
import detail from 'components/detail/detail';
Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/list',
      name: 'list',
      component: MenuList
    },
    {
      path: '/basket',
      name: 'basket',
      component: basket
    }
  ],
  linkActiveClass: 'active'
});
router.push('/list');
export default router;
