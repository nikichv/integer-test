<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-4">
        <orders-table @remove="ordersTableRemoveCallback($event)"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import OrdersTable from '@/components/blocks/ordersTable';

export default {
  name: 'page-orders',
  components: { OrdersTable },
  methods: {
    ...mapActions({
      fetchOrders: 'orders/fetchOrders',
      removeOrder: 'orders/removeOrder',
    }),
    ordersTableRemoveCallback({ id }) {
      this.removeOrder(id);
    },
  },
  computed: {
    ...mapState({
      orders: state => state.orders,
    }),
  },
  created() {
    // Prevent json re-fetch
    if (Object.keys(this.orders).length === 0) {
      this.fetchOrders();
    }
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/_settings.scss";
  @import "~bootstrap/scss/_forms.scss";
</style>
