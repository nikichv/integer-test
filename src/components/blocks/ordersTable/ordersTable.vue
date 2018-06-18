<template>
  <div class="table-responsive-sm">
    <table class="table table-striped table-bordered">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th
          scope="col"
          :class="['table__th', getHeadingClass('name')]"
          @click.stop="sortTable({ key: 'name' })"
        >Product</th>
        <th
          scope="col"
          :class="['table__th', getHeadingClass('urgent')]"
          @click.stop="sortTable({ key: 'urgent' })"
        >Urgent</th>
        <th
          scope="col"
          :class="['table__th', getHeadingClass('userID')]"
          @click.stop="sortTable({ key: 'userID' })"
        >Manager</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>
      <tbody>
      <template v-for="(order, index) in data">
        <tr :key="order.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ order.name }}</td>
          <td>{{ order.urgent }}</td>
          <td>{{ order.userID }}</td>
          <td>
            <button
              class="btn btn-danger"
              type="button"
              @click="$emit('remove', { id: order.id })"
            >Remove
            </button>
          </td>
        </tr>
      </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'orders-table',
  data() {
    return {
      sortBy: 'name',
      ascending: true,
      data: [],
    };
  },
  watch: {
    orders: {
      handler(value) {
        this.data = Object.values(value);
        this.sortTable({ key: this.sortBy, ascending: this.ascending });
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    sortTable({ key, ascending }) {
      /**
       * If we didn't set order explicitly look on sorting key change
       * If same - change sorting order, if not - keep old value
       * @type {boolean}
       */
      if (typeof ascending !== 'undefined') {
        this.ascending = ascending;
      } else {
        this.ascending = this.sortBy === key
          ? !this.ascending
          : this.ascending;
      }

      this.sortBy = key;
      this.data = this.data
        .slice()
        .sort((a, b) => {
          if (this.ascending) {
            return a[key] > b[key] ? 1 : -1;
          }
          return a[key] < b[key] ? 1 : -1;
        });
    },
    /**
     * Returns CSS classes to set triangle after th inner text on active column
     * @param {string} key
     * @return {string}
     */
    getHeadingClass(key) {
      if (this.sortBy === key) {
        if (this.ascending) {
          return 'table__th table__th--asc';
        }
        return 'table__th table__th--desc';
      }
      return 'table__th';
    },
  },
  computed: {
    ...mapState({
      orders: state => state.orders,
    }),
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/_settings.scss";
  @import "~bootstrap/scss/tables";

  .table td,
  .table th {
    vertical-align: middle;
  }

  .table__th {
    white-space: nowrap;
    cursor: pointer;

    &:hover::after {
      opacity: 1;
    }

    &::after {
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 6.5px 8px 6.5px;
      border-color: transparent transparent #919191 transparent;
      margin-left: 5px;
      opacity: 0;
      transition: opacity .2s ease;
    }

    &.table__th--asc::after {
      opacity: 1;
    }

    &.table__th--desc::after {
      opacity: 1;
      border-width: 8px 6.5px 0 6.5px;
      border-color: #919191 transparent transparent transparent;
    }
  }
</style>
