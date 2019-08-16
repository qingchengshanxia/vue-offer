<!--
 * @Description: 
 * @Author: lhl
 * @Date: 2019-08-14 16:37:55
 * @LastEditors: lhl
 * @LastEditTime: 2019-08-14 16:37:55
 -->
<template>
  <!-- 滚动至顶部、底部组件 -->
  <div class="gotop-box">
    <div v-if="isshowscrollbtn">
      <el-tooltip class="item" effect="dark" :content="text" placement="top-start">
        <div class="page-up" @click="scrollGo">
          <i :class="{'el-icon-caret-top':istop,'el-icon-caret-bottom':!istop}"></i>
        </div>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gotop',
  data() {
    return {
      toTopShow: false,
      scrollTop: 0,
      istop: false, // 控制按钮是向上还是向下；默认向下，点击滑到底部
      doch: 0,//页面高度
      docch: 0,//可视区高度
      clickstatus: true, //true 表示按钮当前处于向下待点击状态
      text: '',
      isscroll: false,//是否开始滚动
      isshowscrollbtn: false, //是否显示滚动按钮
    }
  },
  props: [],
  components: {

  },
  methods: {
    handleScroll() {
      //监听页面滚动
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      //当页面滚动至小于页面整高一半时，显示 向下滚动按钮
      //当页面滚动至大于页面整高一半时，显示 向上滚动按钮
      if (this.scrollTop < this.doch / 2) {
        this.istop = false;
        this.text = "滚动至底部";
      } else if (this.scrollTop > this.doch / 2) {
        this.istop = true;
        this.text = "滚动至顶部";
      }
    },
    scrollGo() {
      //点击滚动按钮
      if (this.isscroll) {
        //如果处于滚动中，则不作滚动处理
        return;
      }

      let timer1 = '';
      let timer2 = '';
      let ispeed = '', l = '';
      let h = '';//滚动高度

      this.toTopShow = false;
      this.isscroll = true;

      let scrollh = document.documentElement.scrollTop || document.body.scrollTop;
      let topOrBottom = (scrollh - (this.doch - this.docch) / 2) > 0 ? true : false;
      if (topOrBottom) {
        //向上滚
        this.clickstatus = false;
      } else {
        //向下滚
        this.clickstatus = true;
      }

      if (this.clickstatus) {
        //向下滚动
        timer1 = setInterval(() => {
          h = document.documentElement.scrollTop || document.body.scrollTop;
          if (h === this.doch - this.docch) {
            document.documentElement.scrollTop = document.body.scrollTop = this.doch;
            clearInterval(timer1);
            this.isscroll = false;
            return;
          }
          let dos = this.doch - (document.documentElement.scrollTop || document.body.scrollTop);
          ispeed = Math.round(dos / 5);
          l = ((h + ispeed) >= this.doch - this.docch) ? (this.doch - this.docch) : (h + ispeed);
          document.documentElement.scrollTop = document.body.scrollTop = l;

        }, 30)
      } else {
        //向上滚动
        timer2 = setInterval(() => {
          h = document.documentElement.scrollTop || document.body.scrollTop;
          if (h === 0) {
            clearInterval(timer2);
            this.isscroll = false;
            return;
          }

          ispeed = Math.round(h / 5);
          l = (h - ispeed) < 30 ? 0 : (h - ispeed);
          document.documentElement.scrollTop = document.body.scrollTop = l;
        }, 30)
      }
      this.clickstatus = !this.clickstatus;
    },
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
  beforemount() {
    //相关的 render 函数（模板）首次被调用

  },
  mounted() {
    //el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
    window.addEventListener('scroll', this.handleScroll, true);

    this.doch = document.documentElement.scrollHeight || document.body.scrollHeight; //页面高度
    this.docch = document.documentElement.clientHeight || document.body.clientHeight; //可视区高度

    if (this.istop) {
      //向上滚
      this.text = "滚动至顶部";
    } else {
      //向下滚
      this.text = "滚动至底部";
    }

    if (this.doch < 1000) {
      this.isshowscrollbtn = false;
    } else {
      this.isshowscrollbtn = true;
    }
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
    window.addEventListener('scroll', this.handleScroll, true);
  },
  watch: {
    // watch主要用于监控vue实例的变化，它监控的变量当然必须在data里面声明才可以，它可以监控一个变量，也可以是一个对象，且只能监控整个对象或单个变量;

  }
}
</script>
<style scoped lang="scss">
.gotop-box {
  .page-up {
    background-color: #109eff;
    position: fixed;
    right: 50px;
    bottom: 30px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
    opacity: 0.5;
    z-index: 10000;
    .el-icon-caret-top,
    .el-icon-caret-bottom {
      color: #fff;
      display: block;
      line-height: 40px;
      text-align: center;
      font-size: 24px;
    }
    p {
      display: none;
      text-align: center;
      color: #fff;
    }
    &:hover {
      opacity: 1;
    }
  }
}
</style>