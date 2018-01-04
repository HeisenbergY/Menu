<template>
  <div>
    <x-header style="background:none;" :left-options="{backText: ''}" :title="title">
      <router-link :to="toPage" slot="right" v-if="showBasket">
        <i class="icon-bag"></i>
        <span class="tip" v-if="count>0" :class="{'tip-active':changeCount}">{{count}}</span>
      </router-link>
      <a slot="right" v-else>
        <i class="icon-bag" @click="showBag"></i>
        <span v-if="count>0" class="tip" :class="{'tip-active':changeCount}">
          {{count}}
        </span>
      </a>
    </x-header>
    <div>
      <div v-transfer-dom>
        <actionsheet v-model="show" :menus="actionSheetMenu" theme="android" @on-click-menu="click">
        </actionsheet>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {Actionsheet,XHeader, TransferDomDirective as TransferDom} from 'vux'

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
      },
      count: {
        type: Number,
        default: 0
      },
    },
    directives: {
      TransferDom
    },
    components: {
      XHeader,
      Actionsheet
    },
    data() {
      return {
        show: false,
        changeCount: false,
        actionSheetMenu: {
          clear: '清空菜篮子',
          merge: '合并菜篮子',
        },
      }
    },
    methods: {
      empty: function () {
        localStorage.arr="";
      },
      showBag: function () {
        this.show = true;
      },
      click (key) {
        if(key==='clear'){
          localStorage.arr="";
          //TODO:使用子组件向父组件传值的方法解决该问题
          window.location.reload();
        }
        if(key==='merge'){
          alert('敬请期待!');
        }
      },
    },
    watch: {
      count(val, oldVal) {
        if (val !== oldVal) {
          this.changeCount = true;
          let that = this;
          setTimeout(function () {
            that.changeCount = false;
          }, 500)
        } else {
          this.changeCount = false;
        }
      }
    }
  }
</script>

<style>
  @import "../../common/css/icon-font.css";

  .vux-header .vux-header-title {
    color: #ccc !important;
  }

  .tip {
    position: absolute;
    top: -5px;
    left: 20px;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    background: #69BDE6;
    color: #fff;
    display: inline-block;
    line-height: 18px;
    border: none;
    transform: scale(1);
  }

  .tip-active {
    transition: all 0.5s;
    transform: scale(0.8);
  }
</style>
