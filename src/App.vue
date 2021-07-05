<template>
  <Header />
  <div class="main-outer">
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    name: 'app',
    components: {
      Header,
    },
  }
</script>

<style>
  .main-outer {
    flex: 1;
  }
</style>