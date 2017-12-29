<template>
  <div id="app">
    <router-view/>
    <foot></foot>
  </div>
</template>

<script>
  import foot from 'components/foot/foot';

  export default {
    components: {
      foot,
    },
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
