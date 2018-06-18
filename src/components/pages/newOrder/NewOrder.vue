<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-6">
        <form>
          <div class="form-group">
            <label for="productName">Product Name</label>
            <input
              v-model="formData.name"
              type="text"
              class="form-control"
              id="productName"
              aria-describedby="emailHelp"
              placeholder="Enter name"
            >
            <small id="emailHelp" class="form-text text-muted">Type here whatever you want</small>
          </div>
          <div class="form-group form-check">
            <input
              v-model="formData.urgent"
              type="checkbox"
              class="form-check-input"
              id="productUrgent"
            >
            <label class="form-check-label" for="productUrgent">Mark order as urgent</label>
          </div>
          <div class="form-group">
            <label for="userName">Order assigned to</label>
            <input
              v-model="assignLabel"
              type="text"
              class="form-control"
              id="userName"
              placeholder="Password"
              disabled
            >
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            @click.prevent="saveOrder"
          >Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

const formData = {
  name: '',
  urgent: 0,
};

export default {
  name: 'page-new-order',
  data() {
    return {
      formData: Object.assign({}, formData),
    };
  },
  methods: {
    ...mapActions({
      postNewOrder: 'orders/postNewOrder',
    }),
    saveOrder() {
      const { id } = this.user;
      /**
       * dummy "unique" order id
       * @type {number}
       */
      const orderID = Date.now();
      this.postNewOrder({ id: orderID, userID: id, ...this.formData });
      this.formData = Object.assign({}, formData);
    },
  },
  computed: {
    ...mapState({
      user: state => state.user,
    }),

    assignLabel() {
      return `${this.user.name} (you)`;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/_settings.scss";
  @import "~bootstrap/scss/_forms.scss";
</style>
