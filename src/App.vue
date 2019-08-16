<!--
 * @Description: 
 * @Author: lhl
 * @Date: 2019-08-14 16:18:40
 * @LastEditors: lhl
 * @LastEditTime: 2019-08-15 09:42:52
 -->
<template>
  <div id="app">
    <router-view v-if="isShowView&&isRouterAlive" />
    <div v-if="!isShowView" class="ie-tip">
      <h3>温馨提醒您：您的浏览器版本过低，为了提升你的体验，请升级你的浏览器</h3>
      <a target="_blank" href="http://browsehappy.osfipin.com/">点击此处升级</a>
    </div>
    <v-loadingline></v-loadingline>
  </div>
</template>

<script>
import LoadingLine from './views/components/Loading-Line.vue';
export default {
  name: 'App',
  provide() {
    //向其所有子孙后代注入一个依赖
    return {
      reload: this.reload,
    }
  },
  data() {
    return {
      isShowView: true,
      isRouterAlive: true,
    }
  },
  components: {
    'v-loadingline': LoadingLine,
  },
  methods: {
    reload() {
      // 刷新vue页面，但不刷新浏览器页面
      // 在子组件中，使用： this.reload()，即可刷新数据
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      })
    }
  },
  mounted() {
    //浏览器版本过低 提示升级
    if (!("WebSocket" in window && 2 === window.WebSocket.CLOSING)) {
      this.isShowView = false;
    } else {
      this.isShowView = true;
    }
  },
}
</script>

<style lang="scss" type="text/css">
@import url("./assets/styles/base.css");
@import url("./assets/styles/public.css");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .ie-tip {
    text-align: center;
    h3 {
      margin: 20px;
    }
    a {
      color: $mainColor;
    }
  }
}
</style>
