<template>
  <div class="wrap" style="width: 100%">
    <div class="foot" @click="chnageRed($event)">
      <span class="button"><i class="fa fa-heart-o"></i> 收藏</span>
      <span class="button"><i class="fa fa-edit"></i> 加菜单</span>
      <span class="button"><i class="fa fa-folder-o"></i> 传作品</span>
    </div>
    <div class="block"></div>
  </div>
</template>

<script  type="text/ecmascript-6">
  export default {
    methods: {
      chnageRed: function ($event) {
        let nodes=$event.currentTarget.childNodes;
        for(let i=0;i<nodes.length;i++){
          if(nodes[i].tagName!=="SPAN"){
            continue;
          }
          if(nodes[i]===$event.target){
            nodes[i].style.color='red';
          }else {
            nodes[i].style.color='';
          }
        }
      },
    },
  }
</script>

<style>
  .foot{
    height: 50px;
    width: 100%;
    border-top: 1px solid #e3e3e3;
    position: fixed;
    bottom: 0;
    display: flex;
    background: aliceblue;
  }
.foot span{
  display: inline-block;
  height: 50px;
  flex: 1;
  line-height: 50px;
}
  .block{
    height: 48px;
    width: 100%;
  }
</style>
