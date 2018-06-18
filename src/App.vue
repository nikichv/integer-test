<template>
  <div id="app">
    <navbar class="py-3"/>
    <router-view class="py-5"/>
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
