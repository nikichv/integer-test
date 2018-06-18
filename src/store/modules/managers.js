/* eslint-disable no-param-reassign */
import Vue from 'vue';

const initialState = {};

const getters = {
};

const actions = {
  async fetchManagersList({ commit }) {
    const data = await import('../../../static/managers.json');

    data.forEach(manager => commit('setManagerData', { data: manager, id: manager.id }));
  },
};

const mutations = {
  setManagerData(state, { data, id }) {
    Vue.set(state, id, data);
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
