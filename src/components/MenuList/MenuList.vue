<template>
  <div>
    <Header :title="title" :showBasket="showBasket" :toPage="toPage" :count="count"></Header>
    <ul>
      <li v-for="d in data" style="list-style-type: none;margin: 18px;">
        <div @click="toDetail(d)"
             style="height: 160px;overflow: hidden;;background-size: 100%;background-position:center"
             :style="{backgroundImage: 'url(' +d.albums[0]+ ')'}">
        </div>
        <div style="overflow: hidden">
          <div style="float: left;">
            <div style="margin: 10px 0;font-size: 16px;font-weight: bold;text-align: left">{{d.title}}</div>
            <div class="tags">{{d.tags}}</div>
          </div>
          <div style="float: right;margin-top: 10px">
            <img src="./avatar.jpg" style="border-radius: 50%;width: 50px"/>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from 'components/Header/Header';

  export default {
    data() {
      return {
        title: "本周菜单精选",
        toPage: "basket",
        showBasket: true,
        data: [],
        count: 0
      }
    },
    components: {
      Header,
    },
    created() {
      this.$http.get('/api/week').then((res) => {
        res = res.body.data.data;
        this.data = res;
      });

      if (localStorage.getItem("arr")) {
        this.count = JSON.parse(localStorage.getItem("arr")).length;
      }
    },
    methods: {
      toDetail:function(d){
        localStorage.setItem("dataObj", JSON.stringify(d));
        this.$router.push('/detail');
      }
    },
  }
</script>

<style scoped>
  .tags {
    width: 200px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 14px;
    text-align: left;
    color: #e3e3e3
  }
</style>
