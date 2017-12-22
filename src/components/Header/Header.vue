
<template>
  <div>
    <x-header style="background:none;" :left-options="{backText: ''}">本周流行菜谱
      <a slot="right" @click="showBag"><i class="icon-bag"></i></a>
    </x-header>
    <div>
      <div v-transfer-dom>
        <alert v-model="show" :title="('恭喜')" @on-show="onShow" @on-hide="onHide"> {{ ('Your Message is sent successfully~') }}</alert>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import { XHeader, Alert,TransferDomDirective as TransferDom } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader,
      Alert
    },
    data () {
      return {
        show: false
      }
    },
    methods:{
      onHide () {
        console.log('on hide')
      },
      onShow () {
        console.log('on show')
      },
      showBag:function () {
        this.show = true;
      }
    }
  }
</script>

<style>
  @import "../../common/css/icon-font.css";
 .vux-header .vux-header-title{
   color: #ccc !important;
 }
</style>
