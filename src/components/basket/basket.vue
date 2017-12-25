<template>
  <Header :title="title" :toPage="toPage"></Header>
</template>

<script type="text/ecmascript-6">
  import Header from 'components/Header/Header';

  export default {
    data() {
      return {
        title: "菜篮子",
        showBasket: false,
        toPage:"",
      }
    },
    components: {
      Header,
    }
  }
</script>

<style>

</style>
