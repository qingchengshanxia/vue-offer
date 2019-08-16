<!--
 * @Description: 
 * @Author: lhl
 * @Date: 2019-08-14 16:37:55
 * @LastEditors: lhl
 * @LastEditTime: 2019-08-16 20:20:18
 -->
    
<template>
  <!-- 左侧边栏目录，一级目录下所属的二级目录 -->
  <div class="aside-box">
    <div class="search-box">
      <span>
        <el-input
          placeholder="搜索菜单"
          v-model="searchMenuVal"
          @keyup.native="searchMenu"
          @keyup.enter.native="goPath"
          @clear="searchMenu"
          size="small"
          clearable
        >
          <template slot="prepend">
            <i class="iconfont icon-guolvqi"></i>
          </template>
        </el-input>
      </span>
    </div>
    <div class="aside-menu">
      <el-menu
        :default-active="defaultAactiveIndex"
        :default-openeds="openeds"
        class="zl-aside-menu"
        :collapse="isCollapse"
        :unique-opened="true"
      >
        <!-- 一级 -->
        <el-submenu
          v-if="!!nav1.children.length"
          v-for="(nav1, index1) in menus"
          :index="switchString(nav1.meta.id)"
          :key="nav1.meta.id"
          :class="{ 'one-menu': true }"
        >
          <!-- 一级目录 -->
          <template slot="title">
            <span>
              <i :class="nav1.meta.icon"></i>
              <span slot="title">{{ nav1.meta.title }}</span>
            </span>
          </template>

          <!-- 二级 -->
          <div v-for="(nav2, index2) in nav1.children" :key="nav2.meta.id">
            <!--含有三级的二级 -->
            <el-submenu
              v-if="!!nav2.children.length"
              :index="switchString(nav2.meta.id)"
              :key="nav2.meta.id"
              :class="{ 'two-menu-group': true }"
            >
              <template slot="title">
                <span slot="title">
                  <i :class="nav2.meta.icon" class="iconfont"></i>
                  {{ nav2.meta.title }}
                </span>
              </template>

              <!-- 三级 -->
              <el-menu-item-group
                v-for="(nav3, index3) in nav2.children"
                :key="nav3.meta.id"
                class="three-menu"
              >
                <el-menu-item
                  :class="setonlyClass(nav3.meta.id)"
                  :index="switchString(nav3.meta.id)"
                  @click="changeTitle(nav3.meta)"
                >
                  <span :data-id="nav3.meta.id">
                    <i :class="nav3.meta.icon" class="iconfont"></i>
                    {{ nav3.meta.title }}
                  </span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!--不含三级的二级-->
            <el-menu-item-group v-else class="two-menu">
              <el-menu-item
                :class="setonlyClass(nav2.meta.id)"
                :index="switchString(nav2.meta.id)"
                @click="changeTitle(nav2.meta)"
              >
                <span :data-id="nav2.meta.id">
                  <i :class="nav2.meta.icon" class="iconfont"></i>
                  {{ nav2.meta.title }}
                </span>
              </el-menu-item>
            </el-menu-item-group>
          </div>
        </el-submenu>

        <!-- 只有一级菜单的 -->
        <el-menu-item
          v-for="(nav1, index1) in menus"
          v-if="!!!nav1.children.length"
          :index="switchString(nav1.meta.id)"
          :key="nav1.meta.id"
          :class="{ 'one-menu': true }"
          @click="changeTitle(nav1.meta, 1)"
        >
          <i :class="nav1.meta.icon"></i>
          <span slot="title">{{ nav1.meta.title }}</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
/**
 * 一级菜单和二级菜单分离设计：
 *
 * 是为了后面，根据一级菜单对应的二级菜单的权限，来显示权限内的菜单；
 *
 *
 */
// let menu = require('../../menu.js');
export default {
  name: "asidemenu",
  data() {
    return {
      defaultAactiveIndex: "", //默认打开的菜单的索引----必须是字符串
      openeds: ["0"], //展开菜单项的索引
      oldmenu: [], //所有的菜单
      isCollapse: false, //是否折叠
      searchMenuVal: "", //搜索关键字
      menus: [], //显示的菜单
      searchMenus: [] //搜索时的菜单
    };
  },
  props: [],
  inject: ["reload"],
  components: {},
  methods: {
    switchString(num) {
      //将 menu的index 标志改成字符串，不能用纯数字；
      return num + "-";
    },
    searchMenu() {
      let menus = this.oldmenu;
      let newmenu = [];
      if (this.searchMenuVal) {
        for (let i = 0; i < menus.length; i++) {
          if (menus[i].children && menus[i].children.length) {
            for (let j = 0; j < menus[i].children.length; j++) {
              if (
                menus[i].children[j].meta.title.indexOf(this.searchMenuVal) > -1
              ) {
                newmenu.push(menus[i].children[j]);
              }
            }
          }
        }
        this.menus = newmenu;
      } else {
        this.menus = this.oldmenu;
      }
    },
    goPath() {
      //搜索时，按下enter键，切换到搜索结果中的第一个页面；
      if (!this.searchMenuVal && !this.menus.length) {
        return;
      }
      this.changeTitle(this.menus[0].meta);
      this.searchMenuVal = "";
      this.searchMenu();
    },
    initCurmenu() {
      //页面首次渲染，初始化显示被选中的菜单
      this.defaultAactiveIndex = this.menus[0].children[0].id + "-"; //页面的id+'-'
      this.changeTitle(this.menus[0].children[0].meta);
    },
    switchTargetMenu(tag) {
      //点击标签项，切换对应菜单
      if (tag.id) {
        this.defaultAactiveIndex = tag.id + "-";
        this.changeTitle(tag);
      }
    },
    showSlide(index) {
      //父组件触发，展开菜单
      this.openeds = [index + ""];
    },
    changeTitle(item, type) {
      // 点击菜单目录、添加标签
      /**
       *
       * t:标题 url:跳转地址  id:菜单id
       *
       *
       * home标签页面跳转
       * 添加标签页面步骤：
       * ------1，在menu.js中需要存在带menu属性含有值路径的值；
       * ------2,添加标签页面的vue文件；
       * ------3，在router中添加路径；
       *
       */
      if (type == 1) {
        this.searchMenuVal = "";
        this.searchMenu();
      }
      if (this.$route.fullPath == item.url) {
        //如果点击同一个页面，则刷新页面
        // this.reload();
        // return;
      } else {
        this.$router.push({ path: item.url });
      }

      if (!item) {
        return;
      }
      let homedata = this.$parent.$parent.$parent.$parent; //Home组件中的数据
      if (!homedata) {
        return;
      }
      //如果添加标签超过50个，提示
      if (homedata.tags.length > 50) {
        this.$message({
          message:
            "您点击的菜单太多啦，请关闭部分标签再点击!（最多不超过50个）",
          showClose: true,
          center: true,
          type: "warning"
        });
        return;
      }

      let curtag = item;
      let isNotHave = true; //点击的菜单是否不存在于标签栏
      for (let i = 0; i < homedata.tags.length; i++) {
        if (homedata.tags[i].id == item.id) {
          isNotHave = false;
          break;
        }
      }
      if (isNotHave) {
        homedata.tags.push(curtag);
      }

      localStorage.setItem("activetagmenu", JSON.stringify(curtag)); //设置当前活跃的标签缓存，下次进入页面时，显示该活跃标签
      localStorage.setItem("tagmenu", JSON.stringify(homedata.tags)); //设置标签缓存，下次进入页面时，显示缓存
      homedata.curMenuId = item.id; //设置当前点击的二级菜单项的id，便于设定当前被处于活跃状态的标签

      this.defaultAactiveIndex = item.id + "-"; //设置活跃二级菜单
      setTimeout(() => {
        homedata.setCurtagPosition(curtag);
      }, 200);
    },
    setonlyClass(id) {
      //动态设置类名，便于通过该类名找到某菜单，从而被点击
      return "menu" + id;
    }
  },
  computed: {},
  beforeCreate() {},
  created() {
    //根据权限，生成菜单
    let user = JSON.parse(sessionStorage.getItem("userInfo"));
    let copyOrig = this.$router.options.routes;
    let newMenUArr = [],
      k,
      m = 0;
    for (let i = 0; i < copyOrig.length; i++) {
      if (copyOrig[i].children && copyOrig[i].meta) {
        newMenUArr[m] = {};
        for (let key in copyOrig[i]) {
          if (key != "children") {
            newMenUArr[m][key] = copyOrig[i][key];
          }
        }
        k = 0;
        newMenUArr[m].children = [];
        for (let j = 0; j < copyOrig[i].children.length; j++) {
          if (
            copyOrig[i].children[j].meta &&
            copyOrig[i].children[j].meta.permission &&
            copyOrig[i].children[j].meta.permission.includes(Number(user.role))
          ) {
            newMenUArr[m].children[k] = copyOrig[i].children[j];
            k++;
          }
        }
        m++;
      }
    }

    let newMenu = [];
    for (let i = 0; i < newMenUArr.length; i++) {
      if (
        newMenUArr[i].children &&
        newMenUArr[i].meta &&
        newMenUArr[i].children.length
      ) {
        newMenu.push(newMenUArr[i]);
      }
    }

    let finalMenu = [];
    for (let i = 0; i < newMenu.length; i++) {
      if (
        newMenu[i].children.length == 1 &&
        newMenu[i].children[0].children.length == 1
      ) {
        finalMenu.push(newMenu[i].children[0].children[0]);
      } else if (newMenu[i].children.length == 1) {
        finalMenu.push(newMenu[i].children[0]);
      } else {
        finalMenu.push(newMenu[i]);
      }
    }
    this.menus = finalMenu;
    this.oldmenu = finalMenu;
  },
  beforemount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  watch: {}
};
</script>

<style scoped lang="scss">
.aside-box {
  .search-box {
    transition: all 0.5s cubic-bezier(0.78, 0.02, 0.2, 1), z-index 0.12s 0.12s;
    height: 40px;
    line-height: 40px;
    background-color: transparent;
    // box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    z-index: 11;
    padding: 0 10px;
    position: relative;
    top: 0;
    left: 0;
    width: 200px;
    overflow: hidden;
    z-index: 1001;
    background: url("../../assets/images/searchbg.jpg") no-repeat center;
    background-size: cover;
    font-size: 14px;
    ::-webkit-input-placeholder {
      /* Chrome */
      color: #99abb4;
    }
    :-ms-input-placeholder {
      /* IE 10+ */
      color: #99abb4;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      color: #99abb4;
      opacity: 1;
    }
    :-moz-placeholder {
      /* Firefox 4 - 18 */
      color: #99abb4;
      opacity: 1;
    }
    .el-input {
      position: relative;
      z-index: 1;
      border-bottom: solid 1px #c6d2da;
    }
    .icon-guolvqi {
      color: #c0c4cb;
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(250, 250, 250, 0.7);
    }
  }
  &:hover {
    .aside-menu {
      overflow: auto !important;
    }
  }
  .aside-menu {
    position: relative;
    z-index: 1001;
  }
}
</style>
<style lang="scss">
.aside-box {
  i[class*="offer-icon"] {
    font-size: 17px;
    margin-right: 6px;
  }
  .search-box {
    .el-input-group__append,
    .el-input-group__prepend {
      background: transparent;
      border: 0;
      padding: 0 10px 0 0;
    }
    .el-input__inner {
      border: 0;
      padding: 0 10px;
    }
    .el-input__inner,
    .el-input-group__prepend {
      background: transparent;
    }
  }
  .one-menu {
    background: rgb(48, 65, 86);
    > .el-submenu__title {
      color: #fff;
      transition: all 0.3s;
      font-size: 14px;
    }
    color: #fff;
    &:hover {
      > .el-submenu__title {
        background: rgb(38, 52, 69);
      }
    }
    &.is-active.is-opened {
      > .el-submenu__title {
        // color: rgb(255, 208, 75);
        background: rgb(11, 62, 110);
        position: relative;
        &:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 4px;
          background: rgba(30, 159, 255, 1);
        }
      }
    }
    &.el-menu-item.is-active {
      background: rgb(11, 62, 110);
      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 4px;
        background: rgba(30, 159, 255, 1);
      }
    }
  }
  .two-menu {
    > div {
      padding-top: 0;
      padding-bottom: 0;
    }
    .el-menu-item {
      background: rgb(37, 62, 92);
      color: #fff;
      &:hover {
        background: rgb(18, 60, 100);
      }
    }
    li {
      font-size: 13px;
      i {
        font-size: 15px;
      }
    }
    .is-active {
      color: #409eff;
    }
  }
  .two-menu-group {
    background: rgb(31, 45, 61);
    > .el-submenu__title {
      color: #fff;
    }
    li {
      font-size: 13px;
      i {
        font-size: 15px;
      }
    }
    &:hover {
      > .el-submenu__title {
        background: rgb(0, 21, 40);
      }
    }
  }
  .three-menu {
    background: rgb(45, 65, 87);
    color: #fff;
    li {
      font-size: 13px;
      i {
        font-size: 15px;
      }
    }
    &:hover {
      background: rgb(1, 32, 61);
    }
  }
  .el-menu-item,
  .el-submenu__title {
    height: 42px;
    line-height: 42px;
  }
}
</style>
