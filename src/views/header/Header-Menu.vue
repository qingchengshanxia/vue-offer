<!--
 * @Description: 
 * @Author: lhl
 * @Date: 2019-08-14 16:37:55
 * @LastEditors: lhl
 * @LastEditTime: 2019-08-16 16:37:16
 -->
<template>
  <!-- 头部导航栏、一级导航栏 -->
  <div class="header-box">
    <h1 class="header-logo">
      <img :src="require('@/assets/logo.png')" />
      <span>offer-manage</span>
    </h1>
    <div class="header-menu"></div>
    <div class="header-person">
      <div>
        <div class="head-img">
          <el-dropdown trigger="click" placement="bottom">
            <span class="el-dropdown-link">
              <span class="clearfix" style="color:#fff;font-weight: normal;">
                <i></i>
                <i>{{ name }}</i>
              </span>
            </span>
            <el-dropdown-menu slot="dropdown" class="drop-menu">
              <el-dropdown-item>个人资料</el-dropdown-item>
              <el-dropdown-item>
                <i
                  class="iconfont icon-xiaoxi"
                  style="font-size: 13px;margin-right: 3px;"
                ></i
                >我的消息
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="doc-nav">
          <el-dropdown trigger="click" placement="bottom">
            <span class="el-dropdown-link">
              <i class="iconfont offer-icon-menu" style="color:#fff;"></i>
            </span>
            <el-dropdown-menu slot="dropdown" class="drop-menu">
              <el-dropdown-item @click.native="showDetail">
                <span>UI 细节统一规范</span>
              </el-dropdown-item>
              <el-dropdown-item @click.native="goPath('/doc/design')">
                <span>业务文档</span>
              </el-dropdown-item>
              <el-dropdown-item @click.native="goPath('/doc/elementuiformat')">
                <span>UI文档</span>
              </el-dropdown-item>
              <el-dropdown-item @click.native="goPath('/doc/webstandard')">
                <span>前端架构/规范文档</span>
              </el-dropdown-item>
              <el-dropdown-item divided @click.native="loginOut">
                <span style="font-size: 13px;">
                  <i
                    class="iconfont icon-dianyuan"
                    style="color:#ff4500;font-size: 13px;"
                  ></i>
                  退出登录
                </span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div style="margin-left: 12px;">
          <el-tooltip
            class="item"
            effect="light"
            :open-delay="500"
            :content="changeText"
            placement="left"
          >
            <span @click="switchBoxSize">
              <i class="iconfont offer-icon-frameexpand"></i>
            </span>
          </el-tooltip>
          <el-tooltip
            class="item"
            effect="light"
            :open-delay="1000"
            :content="changeText"
            placement="left"
          >
            <span
              v-show="changeText != '最大化'"
              @click="switchBoxSize"
              class="box-recovery"
            >
              <i class="iconfont offer-icon-suoxiao"></i>
            </span>
          </el-tooltip>
        </div>
      </div>
    </div>
    <el-dialog
      v-dialogDrag
      title="UI 细节统一规范"
      :visible.sync="detailVisible"
      :close-on-click-modal="false"
      :modal-append-to-body="false"
      width="80%"
    >
      <div class="detail-box">
        <v-detailstandard></v-detailstandard>
      </div>
    </el-dialog>
  </div>
</template>

<script>
const DetailStandard = () => import("../doc/detailStandard.vue");
export default {
  name: "headermenu",
  data() {
    return {
      name:
        sessionStorage.getItem("userInfo") &&
        JSON.parse(sessionStorage.getItem("userInfo")).username,
      changeText: "最大化",
      detailVisible: false
    };
  },
  components: {
    "v-detailstandard": DetailStandard
  },
  methods: {
    switchBoxSize() {
      let isFullscreen = "F";
      this.$parent.$parent.$parent.boxchange = !this.$parent.$parent.$parent
        .boxchange;
      if (this.$parent.$parent.$parent.boxchange) {
        this.changeText = "恢复默认大小";
        isFullscreen = "T";
      } else {
        this.changeText = "最大化";
        isFullscreen = "F";
      }
      this.$parent.$parent.$parent.isShowTagdiv = !this.$parent.$parent.$parent.isShowTagdiv;
      this.$parent.$parent.$parent.hiddenTagDiv();
      localStorage.setItem("isFullscreen", isFullscreen);
    },
    loginOut() {
      //退出登录
      this.$confirm("您将退出登录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$loginOut();
        })
        .catch(() => {});
    },
    showDetail() {
      //显示细节要求弹框
      this.detailVisible = true;
    },
    goPath(path) {
      this.$router.push({ path: path });
    }
  },
  beforeMount() {},
  mounted() {
    //首次进入页面，根据url地址，判断切换主菜单
  },
  watch: {
    // $route(to, from) {
    //   //监听路由变化  根据路由的菜单类型变化，切换到对应的一级菜单活跃状态
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header-box {
  .header-logo {
    width: 280px;
    position: absolute;
    top: 0;
    left: 10px;
    img {
      width: 42px;
      border-radius: 2px;
      margin-top: -5px;
    }
    span {
      margin-left: 12px;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
    }
  }
  .header-menu {
    position: absolute;
    left: 25%;
    top: 0;
    height: 100%;
  }
  .header-person {
    height: 60px;
    line-height: 60px;
    // background: $mainColor;
    position: absolute;
    top: 0;
    right: 20px;
    > div {
      margin-top: 10px;
      height: 40px;
      line-height: 40px;
      font-size: 13px;
      > div {
        float: left;
      }
      .icon-menu {
        font-size: 18px;
      }
      .head-img {
        span {
          cursor: pointer;
          font-weight: bold;
          height: 40px;
          line-height: 40px;
          display: block;
          i {
            display: block;
            float: left;
            &:nth-of-type(1) {
              width: 30px;
              height: 40px;
              margin-top: 2px;
              margin-right: 6px;
              background: url("../../assets/images/head.png") no-repeat center;
              background-size: contain;
            }
            &:nth-of-type(2) {
              @include ellipsis(120px);
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
      .doc-nav {
        padding: 0 6px;
        margin-left: 10px;
        border-radius: 6px;
      }
      .iconfont {
        cursor: pointer;
        &.offer-icon-frameexpand {
          font-weight: bold;
          color: #fff;
        }
      }
      .box-recovery {
        font-weight: bold;
        position: fixed;
        top: 0;
        right: 26px;
        background: $mainColor;
        color: #fff;
        z-index: 1000;
        display: block;
        width: 30px;
        height: 36px;
        line-height: 40px;
        text-align: center;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        display: none;
      }
    }
  }
  .detail-box {
    height: 480px;
    overflow: auto;
    > div {
      padding-bottom: 20px;
      padding-left: 10px;
      p {
        height: 36px;
        line-height: initial;
        margin: 0;
      }
    }
  }
}
</style>

