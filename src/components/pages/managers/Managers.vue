<template>
  <div>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-4">
          <div class="list-group">
            <template v-for="manager in managers">
              <router-link
                :to="{ name: 'manager', params: { id: manager.id } }"
                :key="manager.id"
                class="list-group-item list-group-item-action"
              >{{ manager.name }}</router-link>
            </template>
          </div>
        </div>
        <div class="col-12 col-lg-4 mt-3 mt-lg-0">
          <template v-if="$route.name !== 'manager'">
            <div class="d-flex align-items-center h-100">
              <h2 class="text-center mx-auto w-75">Select manager from list to open his profile</h2>
            </div>
          </template>
          <template v-else>
            <router-view/>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'page-managers',
  data() {
    return {
    };
  },
  methods: {
    ...mapActions({
      fetchManagers: 'managers/fetchManagersList',
      fetchOrders: 'orders/fetchOrders',
    }),
  },
  computed: {
    ...mapState({
      managers: state => state.managers,
      order: state => state.orders,
    }),
  },
  created() {
    this.fetchManagers();

    // Prevent json re-fetch
    if (Object.keys(this.orders).length === 0) {
      this.fetchOrders();
    }
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/_settings.scss";
  @import "~bootstrap/scss/_list-group.scss";
</style>
