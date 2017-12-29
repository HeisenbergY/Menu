<template>
  <div class="detail">
    <Header :title="title" :toPage="toPage"></Header>
    <div class="bg" :style="{backgroundImage: 'url(' +data.albums[0]+ ')'}">
    </div>
    <div class="title">{{data.title}}</div>
    <div class="tag">标签:{{data.tags|splitTags}}</div>
    <div style="margin:0 18px">
      <div style="overflow: hidden">
        <div style="float: left;margin-top: 10px">
          <img src="./avatar.jpg" style="border-radius: 50%;width: 50px"/>
        </div>
        <div style="float: left;margin: 15px">
          <div style="margin-bottom: 1px">作者</div>
          <div>Once</div>
        </div>
      </div>
      <div class="intro">{{data.imtro}}</div>
      <div style="overflow: hidden;margin: 20px 0;font-size: 18px">
        <div style="float: left;font-weight: bold">用料</div>
        <div style="float: right">
          <a style="color: orangered;">丢进篮子</a>
        </div>
      </div>
      <div v-for="m in material" style="margin: 15px 0;font-size: 18px">
        <hr style="color: #FCFCFC;margin-bottom: 15px"/>
        <div style="overflow: hidden">
          <div style="float: left;">{{m[0]}}</div>
          <div style="float: right;">{{m[1]}}</div>
        </div>
      </div>
      <hr style="clear: both;color: #FCFCFC;margin-top: 10px"/>
      <div>
        <div v-for="(d, i) in data.steps">
          <div style="text-align: left;font-size: 16px;margin: 10px 0;font-weight: bold">步骤  {{i+1}}</div>
          <img :src="d.img" style="width: 100%;"/>
          <div style="text-align: left;margin: 10px 0;font-size: 14px;line-height: 25px">{{d.step|cleanStepText}}</div>
          <hr/>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from 'components/Header/Header';

  export default {
    data() {
      return {
        title: "开始做",
        showBasket: true,
        toPage: "",
        data: this.$route.params.dataObj,
        material: []
      }
    },
    components: {
      Header,
    },
    methods: {},
    filters: {
      splitTags: function (val) {
        val = val.split(';');
        if (val[1]) {
          return val[0] + ' | ' + val[1];
        }
        return val[0];
      },
      cleanStepText: function (val) {
        val = val.split('.');
        return val[1];
      }
    },
    created() {
      let d = this.data.ingredients;
      d = d.split(';');
      for (let i = 0; i < d.length; i++) {
        let tmp = [], tmd;
        tmd = d[i].split(',');
        tmp.push(tmd[0], tmd[1]);
        this.material.push(tmp);
      }
    }
  }
</script>

<style>
  .detail .bg {
    height: 250px;
    overflow: hidden;
    background-size: 100%;
    background-position: center;
  }

  .detail .intro {
    font-size: 16px;
    margin-top: 10px;
    text-align: left;
    text-indent: 2rem;
    line-height: 25px
  }

  .detail .tag {
    font-size: 16px;
    font-weight: bold;
    margin: 10px;
    color: #e3e3e3;
  }

  .detail .title {
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
  }
</style>
