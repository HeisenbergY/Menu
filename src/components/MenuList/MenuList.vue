<template>
  <div>
    <Header :title="title" :showBasket="showBasket" :toPage="toPage"></Header>
    <div>
      菜单列表
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from 'components/Header/Header';

  export default {
    data () {
      return {
        title:"本周菜单精选",
        toPage:"basket",
        showBasket:true
      }
    },
    components: {
      Header,
    }
  }
</script>

<style>

</style>
