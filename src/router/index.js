import Vue from 'vue';
import Router from 'vue-router';

const managers = () => import('@/components/pages/managers').then(m => m.default || m.pageManagers);
const manager = () => import('@/components/pages/managers').then(m => m.default || m.pageManager);
const orders = () => import('@/components/pages/orders').then(m => m.default || m);
const newOrder = () => import('@/components/pages/newOrder').then(m => m.default || m);

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      redirect: '/managers',
    },
    {
      path: '/managers',
      name: 'managers',
      component: managers,
      children: [
        {
          path: ':id',
          name: 'manager',
          component: manager,
        },
      ],
    },
    {
      path: '/orders',
      name: 'orders',
      component: orders,
    },
    {
      path: '/new-order',
      name: 'newOrder',
      component: newOrder,
    },
  ],
});
