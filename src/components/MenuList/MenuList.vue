<template>
  <div>
    <Header :title="title" :showBasket="showBasket" :toPage="toPage"></Header>
    <ul>
      <li v-for="d in data" style="list-style-type: none;margin: 18px;">
        <div @click="detail(d)" style="height: 160px;overflow: hidden;;background-size: 100%;background-position:center" :style="{backgroundImage: 'url(' +d.albums[0]+ ')'}">
        </div >
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
        data: []
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
    },
    methods: {
      detail: function (d) {
        this.$router.push({
          path: '/detail',
          name: 'detail',
          params: {
            dataObj: d
          }
        })
      },
    },
  }
</script>

<style>
.tags{
  width: 200px;
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow:hidden;
  font-size: 14px;
  text-align: left;
  color: #e3e3e3
}
</style>
