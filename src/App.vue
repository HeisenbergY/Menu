<template>
  <div id="app">
    <!--TODO:添加切换页面的动画效果-->
    <transition name="jump">
      <router-view/>
    </transition>
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

  .jump-enter-active {
    transition: all .3s;
    opacity: 1;
  }

  .jump-leave-active {
    transition: all .3s;
    opacity: 1;
  }

  .jump-enter, .jump-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }
</style>
