<!--
 * @Description: 
 * @Author: lhl
 * @Date: 2019-08-14 16:37:55
 * @LastEditors: lhl
 * @LastEditTime: 2019-08-14 16:37:55
 -->
<template>
  <!-- 页面顶部横线加载进度条 -->
  <div class="loading-box" v-show="isShowLoading">
    <el-progress :stroke-width="3" :percentage="num" type="line" :show-text="false" :status="color"></el-progress>
  </div>
</template>

<script>
export default {
  name: 'editor',
  data() {
    return {
      color: 'success',
      num: 0,
      timer: '',
      reqIsSuccess: false,
      isShowLoading: false,
      loseTime: 1000, //结束后，进度条消失时间
    }
  },
  props: {

  },
  computed: {
    getLoadingStatue() {
      //是否开始进度条加载
      return this.$store.state.loadingline.isStartLoading;
    },
    setColor() {
      //根据请求返回状态，显示绿色进度条还是红色进度条
      return this.$store.state.loadingline.loadingStatue;
    }
  },
  methods: {
    startRunStep() {
      // 开始 加载进度条 重置所有数据
      // 如果加载到90，请求还没有返回成功，则清除timer，进度条停留在90的位置，等候后面设置
      this.num = 0;
      this.color = 'success';
      this.isShowLoading = true;
      let count = 10;
      this.timer = setInterval(function () {
        count--;
        if (count <= 1) {
          count = 1;
        }
        if (this.num >= 90 && count === 1) {
          count -= count * 4 / 5
        }
        this.num = this.num + count;
        if (this.num >= 99) {
          clearInterval(this.timer);
        }
      }.bind(this), 200)
    },
    reqError() {
      // 如果接受到请求失败的标志，则进度条进展到100，并且进度条颜色为红色，2秒后进度条消失；
      clearInterval(this.timer);
      this.num = 100;
      this.color = 'exception';
      setTimeout(function () {
        clearInterval(this.timer);
        this.isShowLoading = false;
      }.bind(this), this.loseTime)
      this.$store.commit('resetLoadingStatus');
    },
    reqSuccess() {
      //如果接受到请求成功的标志，则进度条进展到100，并且进度条颜色为绿色，2秒后进度条消失；
      clearInterval(this.timer);
      this.num = 100;
      this.color = 'success';
      setTimeout(function () {
        clearInterval(this.timer);
        this.isShowLoading = false;
      }.bind(this), this.loseTime)
      //
      this.$store.commit('resetLoadingStatus');
    },
  },
  mounted() {

  },
  watch: {
    getLoadingStatue() {
      let bool = this.$store.state.loadingline.isStartLoading;
      if (bool) {
        this.startRunStep();
      }
    },
    setColor() {
      let color = this.$store.state.loadingline.loadingStatue;
      if (color === 'success') {
        this.color = 'success';
        this.reqSuccess();
      } else if (color == 'error') {
        this.color = 'error';
        this.reqError();
      }
    }
  },
}
</script>
<style scoped lang="scss">
.loading-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999999;
}
</style>
<style lang="scss">
.loading-box {
  .el-progress-bar__inner,
  .el-progress-bar__outer {
    border-radius: 0;
  }
  .el-progress-bar__outer {
    background: transparent;
  }
  .el-progress.is-exception .el-progress-bar__inner {
    background-color: #ff4500;
  }
}
</style>