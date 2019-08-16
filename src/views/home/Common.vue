<!--
 * @Description: 
 * @Author: lhl
 * @Date: 2019-08-14 16:37:55
 * @LastEditors: lhl
 * @LastEditTime: 2019-08-14 17:55:36
 -->
<template>
  <!-- 不需要 header和aside需要登录的页面 -->
  <el-container>
    <el-container class="common-box">
      <el-main>
        <div class="main-page">
          <div>
            <transition>
              <!-- exclude表示不被缓存的组件，值为组件的name -->
              <keep-alive exclude="">
                <router-view></router-view>
              </keep-alive>
            </transition>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'common',
  data() {
    return {

    }
  },
  props: [],
  components: {

  },
  methods: {

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
.common-box {
}
</style>
