import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
import managers from './modules/managers';
import orders from './modules/orders';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    orders,
    managers,
  },
});
