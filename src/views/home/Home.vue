<!--
 * @Description: 
 * @Author: lhl
 * @Date: 2019-08-14 16:37:55
 * @LastEditors: lhl
 * @LastEditTime: 2019-08-16 17:56:36
 -->
<template>
  <el-container
    :class="{'change-big':boxchange,'hide-aside':hideAside}"
    :style="{height:pageHeight}"
  >
    <el-header>
      <v-headermenu ref="header"></v-headermenu>
    </el-header>
    <el-container class="home-body" :style="{height:containerHeight}">
      <el-aside width="200px">
        <v-asidemenu ref="aside"></v-asidemenu>
      </el-aside>
      <el-main :style="{height:containerHeight}">
        <div class="main-head-container">
          <div class="tag-div" v-show="isShowTagdiv">
            <span class="el-icon-arrow-left" v-show="isLong" @click="goLeft"></span>
            <div
              class="main-head"
              :style="{paddingLeft:paddingleft,paddingRight:paddingright,left:goleft,right:goright}"
            >
              <div>
                <el-tag
                  v-for="(tag,index) in tags"
                  :key="tag.id"
                  :class="{'active':curMenuId == tag.id}"
                  @click.native="goThisPage(tag)"
                >
                  <span>{{tag.title}}</span>
                  <i @click.stop="handleClose(tag,index)" class="iconfont offer-icon-guanbi"></i>
                </el-tag>
              </div>
            </div>
            <span class="el-icon-arrow-right" v-show="isLong" @click="goRight"></span>
          </div>
          <div class="tag-action" v-show="tags.length" :class="{'is-transparent':!isShowTagdiv}">
            <span>
              <el-dropdown>
                <i class="iconfont offer-icon-more_android_light" style="font-weight: bold;"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="closeOtherTag" v-show="isShowTagdiv">
                    <span>关闭其它标签</span>
                  </el-dropdown-item>
                  <el-dropdown-item @click.native="hiddenTagDiv">
                    <span>{{isShowTagdiv?'隐藏标签栏':'显示标签栏'}}</span>
                  </el-dropdown-item>
                  <el-dropdown-item @click.native="hiddenAsideDiv" v-if="!this.boxchange">
                    <span>{{hideAside?'显示侧边菜单':'隐藏侧边菜单'}}</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </span>
          </div>
        </div>
        <div class="main-page">
          <div :style="{height:mainHeight}">
            <transition>
              <!-- exclude表示不被缓存的组件，值为组件的name -->
              <keep-alive>
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
import HeaderMenu from '../header/Header-Menu.vue';
import AsideMenu from '../aside/Aside-Menu.vue';

export default {
  name: 'home',
  data() {
    return {
      clientH: '', //网页可视区高度
      pageHeight: 'auto',//网页可视区高度
      containerHeight: 'auto',//内容区高度，使得body不出现滚动条，只有目录和内容区可以出现滚动条
      mainHeight: 'auto', //页面内容的高度
      boxchange: false,
      hideAside: false,
      showArray: ['0'], //展开的index
      tags: [],
      len: 0, //一个标签的宽度
      isLong: false,
      paddingleft: '10px',
      paddingright: '10px',
      goleft: 0,//向左偏移的距离
      goright: 0,//向右偏移的距离
      curMenuId: '', //当前点击的菜单目录的id==激活标签的id
      curMenuType: '', //一级菜单的 类型标志单词，从headermenu组件中获取
      isShowTagdiv: true, //是否显示标签栏
      isNoClickTag: true, //是否不点击标签
      oldTimestamp: 0,
    }
  },
  components: {
    'v-headermenu': HeaderMenu,
    'v-asidemenu': AsideMenu,
  },
  computed: {
    switchAside() {
      return this.$store.state.globalVarFunction.isHideAside;
    },
  },
  methods: {
    setCurtagPosition(tag) {
      // 当点击左侧菜单时
      // 如果标签栏的长度，超过包裹的div的宽度，让最新点击的且之前没有点击的滑动出来显示在最右侧，
      // 如果最新点击的，是已经点击过的，且不在视野内，则滑动到中央
      if (document.querySelectorAll('.el-tag').length > 0) {

        let leftW = 0, curTagW = 0, isHas = false;
        // 如果点击的菜单，对应的标签，是已经被点击过的
        // 如果该标签位置大于标签栏div，则移到中间，
        // 否则设置left=0
        for (let i = this.tags.length - 1; i >= 0; i--) {
          if (this.tags[i].id == tag.id && i != this.tags.length - 1) {
            isHas = true;
            leftW = document.querySelectorAll('.el-tag')[i].offsetLeft;
            curTagW = document.querySelectorAll('.el-tag')[i].offsetWidth;
            if ((leftW + curTagW) > this.divW - 30) {
              this.goleft = -(leftW - this.divW / 2) - 30 + 'px';
            } else {
              this.goleft = 0;
            }
            break;
          }
        }

        //新增的标签，或点击的标签位于最后一个
        //则 该标签的位置如果大于标签栏div，则位于标签栏div的最后，否则不变
        if (!isHas) {
          leftW = document.querySelectorAll('.el-tag')[this.tags.length - 1].offsetLeft;
          curTagW = document.querySelectorAll('.el-tag')[this.tags.length - 1].offsetWidth;
          if ((leftW + curTagW) > this.divW - 30) {
            this.goleft = -(leftW - this.divW + curTagW + 30) + 'px';
          } else {
            this.goleft = 0;
          }
        }
      }

    },
    handleClose(tag, index) {
      //删除标签的同时，点击并显示该标签前一个标签页
      let curtag = '';
      let curMenuId = this.curMenuId;
      let clickindex = '';
      if (tag.id == curMenuId) {
        //删除的标签，是当前活跃的标签
        this.isNoClickTag = false;
        let index = '';
        if (this.tags.indexOf(tag) > 0) {
          //删除的标签，不是第一个标签
          if (this.tags.indexOf(tag) != this.tags.length - 1) {
            //删除的标签，不是最后一个标签
            index = this.tags.indexOf(tag) + 1;
            clickindex = this.tags.indexOf(tag) + 1;

          } else {
            //删除的标签，是最后一个标签
            index = this.tags.length - 2;
            clickindex = this.tags.indexOf(tag) - 1;

          }
        } else if (this.tags.indexOf(tag) == 0 && this.tags.length > 1) {
          //删除的标签，是第一个标签，且后面还有标签
          index = 0;
          clickindex = this.tags.indexOf(tag) + 1;

        }

        curtag = this.tags[index];
      } else {
        //删除的标签，不是当前活跃的标签
        for (let i = 0; i < this.tags.length; i++) {
          if (this.tags[i].id == curMenuId) {
            curtag = this.tags[i];
          }
        }

      }

      this.isShowSlide(this.tags.indexOf(tag));
      //删除标签页
      this.tags.splice(this.tags.indexOf(tag), 1);

      if (tag.id == curMenuId && this.tags.length != 0) {
        //如果删除的标签，是当前活跃的标签，则点击当前标签的左边或右边的标签
        setTimeout(() => {
          document.querySelectorAll('.el-tag>span')[clickindex].click();
        }, 100);
      }

      //如果标签页全部删除，则显示第一个菜单作为标签页
      if (this.tags.length == 0) {
        document.querySelector('.el-menu-item').click();
      } else {
        localStorage.setItem('activetagmenu', JSON.stringify(curtag));//设置当前活跃的标签缓存，下次进入页面时，显示该活跃标签
        localStorage.setItem('tagmenu', JSON.stringify(this.tags));//设置标签缓存，下次进入页面时，显示缓存
      }
      this.curMenuId = curtag.id;
    },
    goThisPage(tag) {
      //点击标签页，显示该标签页内容
      /**
      *
      *如果点击的标签，属于当前一级菜单，则正常点击
      *否则，先切换到对应的一级菜单，再点击目标二级菜单
      *设置当前处于活跃状态菜单的id
      */
      //防止多次点击 间隔时间不少于500ms；
      let curTimestamp = new Date().getTime();
      if (this.oldTimestamp > 0 && curTimestamp - this.oldTimestamp < 500) {
        this.oldTimestamp = new Date().getTime();
        return;
      }
      this.oldTimestamp = new Date().getTime();

      this.$refs.aside.switchTargetMenu(tag); //aside组件方法。切换一级菜单，然后定位到目标二级菜单

      // this.$refs.aside.showSlide(tag.index.split('-')[0]);
    },
    isShowSlide(index) {
      //是否显示移动标签的 左右 箭头
      let w = 0;
      for (let i = document.querySelectorAll('.el-tag').length - 1; i >= 0; i--) {
        if (index != i) {
          w += document.querySelectorAll('.el-tag')[i].offsetWidth;
        }
      }
      if (w > this.divW) {
        this.isLong = true;
        this.paddingleft = "20px";
        this.paddingright = "20px";
      } else {
        this.isLong = false;
      }
    },
    goLeft() {
      //将标签左移
      let w = 0;
      for (let i = document.querySelectorAll('.el-tag').length - 1; i >= 0; i--) {
        w += document.querySelectorAll('.el-tag')[i].offsetWidth;
      }
      if (w - this.divW < Math.abs(parseInt(this.goleft))) {
        //如果如果一个标签已经移动到末尾的位置，则不允许再左移；
        return;
      }
      this.goleft = (document.querySelector('.main-head').offsetLeft - 30) + 'px';
    },
    goRight() {
      //将标签右移
      if (parseInt(this.goleft) >= 0) {
        return;
      }
      this.goleft = (document.querySelector('.main-head').offsetLeft + 30) + 'px';
    },
    closeOtherTag() {
      //关闭其它标签
      let tags = this.tags;
      let curtag = {};
      let newtags = [];
      for (let i = 0; i < tags.length; i++) {
        if (tags[i].id == this.curMenuId) {
          curtag = tags[i];
        }
      }
      newtags.push(curtag)
      this.tags = newtags;
      localStorage.setItem('tagmenu', JSON.stringify(this.tags));//设置标签缓存，下次进入页面时，显示缓存
      this.goleft = 0;
      this.isLong = false;
    },
    hiddenTagDiv() {
      //隐藏标签栏
      let clientH = this.clientH;
      this.isShowTagdiv = !this.isShowTagdiv;
      if (this.isShowTagdiv) {
        //有标签栏
        if (this.boxchange) {
          //全屏
          this.containerHeight = this.clientH + 'px';
          this.mainHeight = (this.clientH - 52) + 'px';
        } else {
          //非全屏
          this.mainHeight = (this.clientH - 112) + 'px';
        }
      } else {
        //没有标签栏
        this.containerHeight = this.clientH + 'px';
        if (this.boxchange) {
          //全屏
          this.mainHeight = (this.clientH - 12) + 'px';
        } else {
          //非全屏
          this.mainHeight = (this.clientH - 72) + 'px';
        }
      }

      this.setTableHeight();
    },
    hiddenAsideDiv() {
      //是否隐藏侧边菜单
      this.hideAside = !this.hideAside;
      if (this.hideAside) {
        sessionStorage.setItem('hideaside', 'T');
      } else {
        sessionStorage.setItem('hideaside', 'F');
      }
    },
    setTableHeight() {
      let clientH = this.clientH;
      if (this.isShowTagdiv) {
        //有标签栏
        if (this.boxchange) {
          //全屏
          let tableHeightFullTag = clientH - 150;// 全屏、有标签栏时 表格的固定高度
          this.$store.commit('setTableHeightFullTag', tableHeightFullTag);
        } else {
          //非全屏
          let tableHeightNofullTag = clientH - 210;// 非全屏、有标签栏时 表格的固定高度
          this.$store.commit('setTableHeightNofullTag', tableHeightNofullTag);
        }
      } else {
        //没有标签栏
        if (this.boxchange) {
          //全屏
          let tableHeightFullNotag = clientH - 110;// 全屏、没有标签栏时 表格的固定高度
          this.$store.commit('setTableHeightFullNotag', tableHeightFullNotag);
        } else {
          //非全屏
          let tableHeightNofullNotag = clientH - 170;// 非全屏、没有标签栏时 表格的固定高度
          this.$store.commit('setTableHeightNofullNotag', tableHeightNofullNotag);
        }
      }
    },
  },
  created() {
    let clientH = document.documentElement.clientHeight;
    this.clientH = clientH;
    this.containerHeight = (clientH - 60) + 'px';
    this.pageHeight = clientH + 'px';
    this.mainHeight = (clientH - 110) + 'px';

    //缓存 main部分所需高度 table所需高度
    this.$store.commit('setClientHeight', clientH);

    if (localStorage.getItem('isFullscreen')) {
      this.boxchange = localStorage.getItem('isFullscreen') == 'T' ? true : false;
      if (this.boxchange) {
        this.containerHeight = this.clientH + 'px';
        this.mainHeight = (this.clientH - 52) + 'px';
      } else {
        this.mainHeight = (this.clientH - 112) + 'px';
      }
    }

    if (sessionStorage.getItem('hideaside') && sessionStorage.getItem('hideaside') == 'T') {
      this.hideAside = true;
    } else {
      this.hideAside = false;
    }

    this.setTableHeight();
  },
  beforeMount() {

  },
  mounted() {
    //如果菜单目录的标签历史缓存存在，则显示，并切换到标签最后一个的对应页面
    if (localStorage.getItem('tagmenu') && localStorage.getItem('activetagmenu')) {
      this.tags = JSON.parse(localStorage.getItem('tagmenu'));
      let activetagmenu = JSON.parse(localStorage.getItem('activetagmenu'));
      //保存当前活跃状态的标签的id
      this.curMenuId = activetagmenu.id;
      this.$refs.aside.changeTitle(activetagmenu);
    } else {
      this.$refs.aside.initCurmenu();//页面首次渲染，初始化显示被选中的菜单
    }

    this.divW = document.querySelector('.main-head-container').offsetWidth;//tag栏的总宽度
    setTimeout(function () {
      this.isShowSlide();
    }.bind(this), 200)
  },
  watch: {
    switchAside(val, oldval) {
      //全局切换 是否页面全屏
      if (val == 'T') {
        this.hideAside = true;
        sessionStorage.setItem('hideaside', 'T');
      } else if (val == 'F') {
        this.hideAside = false;
        sessionStorage.setItem('hideaside', 'F');
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-container {
  overflow: hidden;
}
.el-header {
  color: #fff;
  height: 60px;
  line-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1002;
  // background-color: #fff;
  transition: all 0.5s cubic-bezier(0.78, 0.02, 0.2, 1), z-index 0.12s 0.12s;
  // box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  width: 100%;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  background: linear-gradient(to left,rgba(1, 170, 237, 1), rgba(82, 183, 109, 1)) !important;
}
.change-big {
  .el-header {
    top: -80px;
  }
  .el-aside {
    left: -200px;
  }
  .el-main {
    padding-left: 0;
    top: 0;
  }
}
.hide-aside {
  .el-aside {
    left: -200px;
  }
  .el-main {
    padding-left: 0;
  }
}

.el-aside,
.el-main {
  color: #303133;
  position: absolute;
  top: 60px;
  left: 0;
  text-align: left;
  height: 100%;
}
.el-aside {
  transition: all 0.5s cubic-bezier(0.78, 0.02, 0.2, 1), z-index 0.12s 0.12s;
  background: rgb(48, 65, 86);
  z-index: 10001;
}
.el-main {
  padding-left: 200px;
  padding-right: 0;
  padding-top: 0;
  background-color: #fff;
  width: 100%;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.78, 0.02, 0.2, 1), z-index 0.12s 0.12s;
  position: relative;
  padding-bottom: 0;
  .tag-div {
    overflow: hidden;
    height: 40px;
    line-height: 40px;
    // border-bottom: solid 1px #ccc;
    // box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 2;
    &:hover {
      .el-icon-arrow-left,
      .el-icon-arrow-right {
        display: initial;
      }
    }
    .el-icon-arrow-left,
    .el-icon-arrow-right {
      display: none;
      width: 16px;
      height: 30px;
      line-height: 30px;
      font-weight: bold;
      cursor: pointer;
      margin-top: 5px;
      background-color: #eee;
      cursor: pointer;
      text-align: center;
      position: relative;
      z-index: 10;
    }
    .el-icon-arrow-left {
      position: absolute;
      top: 0;
      left: 0;
    }
    .el-icon-arrow-right {
      position: absolute;
      top: 0;
      right: 25px;
    }
    .main-head {
      width: 9999px;
      background: #f7f8f9;
      position: absolute;
      top: 0;
      left: 20px;
      z-index: 9;
      -webkit-transition: all 0.5s ease;
      -moz-transition: all 0.5s ease;
      -ms-transition: all 0.5s ease;
      -o-transition: all 0.5s ease;
      transition: all 0.5s ease;
      .el-tag {
        margin-right: 2px;
        cursor: pointer;
        moz-user-select: -moz-none;
        -moz-user-select: none;
        -o-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    }
  }
  .tag-action {
    position: absolute;
    top: 0;
    right: 0;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    width: 25px;
    background: #f7f8f9;
    color: $textColor2;
    z-index: 2;
    padding-left: 2px;
    &.is-transparent {
      background: transparent;
    }
    i {
      cursor: pointer;
      &:hover {
        color: red;
      }
    }
  }
  .main-page {
    position: relative;
    padding: 6px;
    width: 100%;
    height: 100%;
    background: #edf0f4;
    overflow: hidden;
    > div {
      background: #fff;
      border-radius: 6px;
      overflow: auto;
      width: 100%;
    }
  }
}
</style>
<style type="text/css" lang="scss">
.home-body {
  position: relative;
  .el-menu {
    border: none;
  }
}
.main-head-container {
  .el-tag {
    background: #f7f8f9;
    height: 40px;
    line-height: 40px;
    border-left: 0;
    border-right: solid 0 #ddd;
    border-top: 0;
    border-bottom: 0;
    border-radius: 0;
    color: $mainColor;
    margin-right: 0 !important;
    font-size: 13px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      right: 0;
      top: 10px;
      width: 1px;
      height: 20px;
      background: #ddd;
    }
    .offer-icon-guanbi {
      right: 2px;
      width: 5px;
      opacity: 0;
      font-size: 14px;
      font-weight: bold;
    }
    &.active {
      span {
        border-bottom: solid 1px rgba(30, 159, 255, 1);
        color: rgba(30, 159, 255, 1);
      }
    }
    > span {
      display: inline-block;
      height: 30px;
      line-height: 30px;
      padding: 0 5px;
      color: #606266;
    }
    &:hover {
      span {
        color: rgba(30, 159, 255, 1);
      }
      .offer-icon-guanbi {
        opacity: 1;
        color: #eb4747;
        background: transparent;
      }
    }
  }
}
.change-big {
  &:hover {
    .box-recovery {
      display: block !important;
    }
  }
}
</style>
