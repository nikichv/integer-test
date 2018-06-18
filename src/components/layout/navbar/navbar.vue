<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link
            :to="{ name: 'managers' }"
            class="nav-link"
          >Managers</router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'orders' }"
            class="nav-link"
          >Orders</router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'newOrder' }"
            class="nav-link"
          >New order</router-link>
        </li>
      </ul>
      <div class="d-flex align-items-center mt-2">
        <img
          :src="user.photo"
          alt="user profile pic"
          class="nav-userpic"
        >
        <span class="ml-2">Logged in as {{ user.name }}</span>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'navbar',
  computed: {
    ...mapState({
      user: state => state.user,
    }),
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/_settings.scss";
  @import "~bootstrap/scss/navbar";

  .navbar .navbar-nav .nav-link.router-link-active {
    color: #3169ff;
  }

  .nav-userpic {
    width: 50px;
    height:  50px;

    border-radius: 100%;
  }
</style>
