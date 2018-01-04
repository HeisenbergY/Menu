<template>
  <div>
    <Header :title="title" :toPage="toPage" :count="count"></Header>
    <div v-if="!data">
      <div style="margin: 45% auto;width:90%">
        <h1 style="margin-bottom: 30px;">再也不会忘记要买葱了</h1>
        <h4>将用料丢进篮子,每次去超市就不会忘记买需要买的东西了</h4>
      </div>
    </div>
    <div v-else>
      <div v-for="(d) in data" style="margin: 15px 0;font-size: 16px">
        <div v-for="(v,k) in d">
          <div style="margin: 0 18px;background: white">
            <h4 style="font-size: 18px;text-align: left;margin-bottom: 20px;">{{k}}</h4>
            <div v-for="r in v">
              <div style="overflow: hidden;margin: 10px 0">
                <div style="float: left;">{{r[0]}}</div>
                <div style="float: right;">{{r[1]}}</div>
              </div>
            </div>
          </div>
          <div style="height: 20px; background: #e3e3e3;margin: 20px 0;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from 'components/Header/Header';

  export default {
    props: {
      material: {
        type: Object
      }
    },
    data() {
      return {
        title: "菜篮子",
        showBasket: false,
        toPage: "",
        data: "",
        count: 0
      }
    },
    components: {
      Header,
    },
    created() {
      if (localStorage.getItem("arr")) {
        this.data = JSON.parse(localStorage.getItem("arr"));
        this.count = this.data.length;
        /*for(let i=0;i<data.length;i++){
          for(let key in data){

          }
        }*/

      }
    }
  }
</script>

<style>

</style>
