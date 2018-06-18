/* eslint-disable no-param-reassign */
import Vue from 'vue';

const initialState = {};

const getters = {
};

const actions = {
  async fetchOrders({ commit }) {
    const data = await import('../../../static/orders.json');

    data.forEach(order => commit('setOrder', { id: order.id, data: order }));
  },
  postNewOrder({ commit }, order) {
    commit('addOrder', order);
  },
  removeOrder({ commit }, id) {
    commit('removeOrder', id);
  },
};

const mutations = {
  addOrder(state, order) {
    state = Object.assign(state, { [order.id]: order });
  },
  setOrder(state, { id, data }) {
    Vue.set(state, id, data);
  },
  removeOrder(state, id) {
    Vue.delete(state, id);
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
