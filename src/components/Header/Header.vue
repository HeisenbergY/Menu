<template>
  <div>
    <x-header style="background:none;" :left-options="{backText: ''}" :title="title">
      <a slot="right" v-if="showBasket">
        <router-link :to="toPage">
          <i class="icon-bag">
          </i>
        </router-link>
      </a>
      <a slot="right" v-else>
        <i class="icon-bag" @click="showBag">
        </i>
      </a>
    </x-header>
    <div>
      <div v-transfer-dom>
        <alert v-model="show" :title="('操作')" @on-show="onShow" @on-hide="onHide"> {{ ('ok!') }}
        </alert>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {XHeader, Alert, TransferDomDirective as TransferDom} from 'vux'

  export default {
    props: {
      title: {
        type: String
      },
      toPage: {
        type: String
      },
      showBasket: {
        type: Boolean
      }
    },
    directives: {
      TransferDom
    },
    components: {
      XHeader,
      Alert
    },
    data() {
      return {
        show: false,
      }
    },
    methods: {
      onHide() {
        console.log('on hide')
      },
      onShow() {
        console.log('on show')
      },
      showBag: function () {
        this.show = true;
      }
    }
  }
</script>

<style>
  @import "../../common/css/icon-font.css";

  .vux-header .vux-header-title {
    color: #ccc !important;
  }
</style>
