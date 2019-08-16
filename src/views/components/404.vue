<!--
 * @Description: 
 * @Author: lhl
 * @Date: 2019-08-14 16:37:55
 * @LastEditors: lhl
 * @LastEditTime: 2019-08-14 17:56:26
 -->
<template>
  <!-- 404页面 -->
  <div class="silingsi-box">
    <div class="align">
      <div class="img">
        <img :src="require('../../assets/images/404.jpg')" alt="">
      </div>
      <div style="text-align: center;margin-top: 20px;">
        <el-button type="primary" plain size="small" @click="goHome" style="margin-right: 40px;">返回首页</el-button>
        <el-button type="primary" plain size="small" @click="goPrev">返回上一页</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'silingsi',
  data() {
    return {

    }
  },
  props: [],
  components: {

  },
  methods: {
    goHome() {
      this.$router.replace({ path: '/home/shouye/shouye' });
    },
    goPrev() {
      this.$router.go(-1);
    }
  },
  computed: {

  },
  beforeCreate() {

  },
  created() {

  },
  beforeMount() {

  },
  mounted() {

  },
  beforeUpdate() {

  },
  updated() {

  },
  beforeDestroy() {

  },
  destroyed() {

  },
  watch: {

  }
}
</script>
<style scoped lang="scss">
.silingsi-box {
  padding: 20px;
  .align {
    position: absolute;
    top: 10%;
    left: 20%;
    width: 60%;
    img {
      display: inline-block;
      width: 100%;
      max-width: 800px;
    }
  }
}
</style>