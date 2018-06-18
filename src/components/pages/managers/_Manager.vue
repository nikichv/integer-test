<template>
  <div>
    <template v-if="!currentManager">
      <h2>We're sorry, but manager with such id doesn't exist</h2>
      <p>Pick another one from the list</p>
    </template>
    <template v-else>
      <h2>Manager Info</h2>
      <div class="row">
        <div class="col-12">
          <div class="card" style="width: 18rem;">
            <img
              :src="currentManager.photo"
              :alt="`${currentManager.name} profile pic`"
              class="card-img-top"
            >
            <div class="card-body">
              <h5 class="card-title">{{ currentManager.name }}</h5>
              <p>Current orders: </p>
              <ul class="list-group list-group-flush">
                <template v-for="order in currentManagerOrders">
                  <li
                    :key="order.id"
                    class="list-group-item"
                  >{{ order.name }}</li>
                </template>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'page-manager',
  data() {
    return {
      componentManager: '',
    };
  },
  methods: {
    showManager() {
      // console.log(id);
    },
  },
  computed: {
    ...mapState({
      managers: state => state.managers,
      orders: state => state.orders,
    }),

    currentManager() {
      return this.managers[this.$route.params.id] || null;
    },

    currentManagerOrders() {
      if (this.currentManager) {
        return Object.values(this.orders).filter(({ userID }) => userID === this.currentManager.id);
      }
      return [];
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/_settings.scss";
  @import "~bootstrap/scss/card";

  .card-img-top {
    background: burlywood;
    min-height: 286px;
  }
</style>
