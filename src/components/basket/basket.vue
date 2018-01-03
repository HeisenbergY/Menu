<template>
  <div>
    <Header :title="title" :toPage="toPage"></Header>
    <div v-if="inBasket">
      <div style="margin: 45% auto;width:90%">
        <h1 style="margin-bottom: 30px;">再也不会忘记要买葱了</h1>
        <h4>将用料丢进篮子,每次去超市就不会忘记买需要买的东西了</h4>
      </div>
    </div>
    <div v-else>
      <div v-for="m in material" style="margin: 15px 0;font-size: 18px">
        <hr style="color: #FCFCFC;margin-bottom: 15px"/>
        <div style="overflow: hidden">
          <div style="float: left;">{{m[0]}}</div>
          <div style="float: right;">{{m[1]}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from 'components/Header/Header';

  export default {
    props: {
      data: {
        type: Object
      },
      material: {
        type: Object
      },
      inBasket: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        title: "菜篮子",
        showBasket: false,
        toPage: "",
      }
    },
    components: {
      Header,
    }
  }
</script>

<style>

</style>
