<!--
 * @Description: 
 * @Author: lhl
 * @Date: 2019-08-14 16:37:55
 * @LastEditors: lhl
 * @LastEditTime: 2019-08-14 16:37:55
 -->
<template>
  <div class="format-box">
    <h2 style="text-align: center;">
      <span>
        <router-link tag="i" to="/home">
          <el-tooltip class="item" effect="dark" content="点击进入主页" placement="top-start">
            <img style="width: 22px;margin-right: 10px;cursor: pointer;" :src="require('@/assets/logo.png')">
          </el-tooltip>
        </router-link>
        业务逻辑说明文档
      </span>
      <router-link tag="a" to="/doc/webstandard" style="color:gray;border-bottom: solid 1px gray;font-size: 12px;margin-left: 20px;">→ 前端架构、规范、组织结构文档</router-link>
    </h2>
    <div>
      <h3>目录和页面参考说明</h3>
      <div>
        <ul>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'format',
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
    //computed比较适合对多个变量或者对象进行处理后返回一个结果值，也就是数多个变量中的某一个值发生了变化则我们监控的这个值也就会发生变化
    //computed用来监控自己定义的变量，该变量不在data里面声明(但和data定义的变量相关联，直接在computed里面定义

  },
  beforeCreate() {
    //在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。

  },
  created() {
    //数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。

  },
  beforeMount() {
    //相关的 render 函数（模板）首次被调用

  },
  mounted() {
    //el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。

  },
  beforeUpdate() {
    //数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。

  },
  updated() {
    //由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。 
    //当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
    //然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。 
    //该钩子在服务器端渲染期间不被调用。

  },
  beforeDestroy() {
    //实例销毁之前调用。在这一步，实例仍然完全可用。

  },
  destroyed() {
    //调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。

  },
  watch: {
    // watch主要用于监控vue实例的变化，它监控的变量当然必须在data里面声明才可以，它可以监控一个变量，也可以是一个对象，且只能监控整个对象或单个变量;

  }
}
</script>
<style scoped lang="scss">
.format-box {
  padding: 20px;
}
</style>