<template>
  <div id="app">
    <navbar class="py-3"/>
    <router-view class="py-5"/>
    <h1 class="text-center pt-5">Welcome to dimension C-137</h1>
    <p class="text-center">Click on links above</p>
  </div>
</template>

<script>
import navbar from '@/components/layout/navbar';

export default {
  name: 'App',
  components: {
    navbar,
  },
};
</script>

<style lang="scss">
  @import "@/assets/styles/main.scss";
</style>
