<!--
 * @Description: 
 * @Author: lhl
 * @Date: 2019-08-14 16:37:55
 * @LastEditors: lhl
 * @LastEditTime: 2019-08-16 19:04:48
 -->
<template>
  <div class="login-container fullscreen">
    <!-- 背景特性粒子 -->
    <vue-particles
      color="#fefefe"
      :particleOpacity="0.3"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#eee"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.1"
      :linesDistance="100"
      :moveSpeed="2"
      :hoverEffect="false"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="particle fullscreen"
    ></vue-particles>

    <!-- 登录框 -->
    <div class="login-box">
      <div class="login-contain">
        <div class="login-logo">
          <p></p>
          <h1>offer-manage</h1>
        </div>
        <div class="login-username" :class="{ active: showitem == 0 }">
          <p @keyup.enter="goLogin">
            <el-input
              placeholder="请输入用户名"
              prefix-icon="offer-icon-yonghu iconfont"
              @keyup.native="trimUserName"
              v-model="username"
            ></el-input>
            <el-tooltip
              class="item"
              effect="dark"
              content="记住用户名"
              placement="right"
            >
              <span @click="rememberUserName" :class="{ active: issavename }">
                <i class="iconfont offer-icon-gou"></i>
              </span>
            </el-tooltip>
          </p>
          <p @keyup.enter="goLogin">
            <el-input
              placeholder="请输入登录密码"
              prefix-icon="offer-icon-suo iconfont"
              maxlength="18"
              type="password"
              @keyup.native="trimPwd"
              v-model="password"
            ></el-input>
            <el-tooltip
              class="item"
              effect="dark"
              content="记住用户名 和 密码"
              placement="right"
            >
              <span @click="rememberUser" :class="{ active: issaveuser }">
                <i class="iconfont offer-icon-gou"></i>
              </span>
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="dark"
              content="忘记密码了？"
              placement="right"
            >
              <span class="question" @click="forgetPwd">
                <i class="iconfont offer-icon-question1"></i>
              </span>
            </el-tooltip>
          </p>
          <p>
            <el-button
              :style="{ width: '100%', fontSize: '16px' }"
              class="login"
              @click="goLogin"
              :loading="usernameloading"
            >
              <span style="font-size: 18px;">登录</span>
            </el-button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "admin",
      password: "123456",
      issavename: false,
      issaveuser: false,
      issavephone: false,
      issavenum: false,
      showitem: 0, //显示哪一个登录方式
      userphone: "",
      num: "",
      numtext: "发送验证码",
      usernameloading: false,
      oldTimestamp: 0 //上一次点击登录的时间戳
    };
  },
  components: {},
  methods: {
    trimUserName() {
      //检查用户名中是否为空格，如果为空，则清除空格
      this.username = this.$trimAll(this.username);
    },
    trimPwd() {
      //检查密码输入是否有空格，如果为空，则清除空格
      this.password = this.$trimAll(this.password);
    },
    trimNum() {
      //检查验证码输入是否有空格，如果为空，则清除空格
      //只保留数字
      this.num = this.$number(this.num);
      this.num = this.$trimAll(this.num);
    },
    trimUserPhone() {
      //检查手机号输入是否有空格，如果为空，则清除空格
      //只保留数字
      this.userphone = this.$number(this.userphone);
      this.userphone = this.$trimAll(this.userphone);
    },
    checkUserName() {
      //校验用户名
      let bool = false;
      if (!this.username) {
        this.$message({
          message: "请输入用户名!",
          customClass: "login-tips",
          showClose: true,
          center: true,
          type: "warning"
        });
        return bool;
      }
      bool = true;
      return bool;
    },
    rememberUserName() {
      //缓存用户名
      if (localStorage.getItem("rememberUserName")) {
        localStorage.removeItem("rememberUserName");
        this.$message({
          message: "已清除保存的用户名!",
          customClass: "login-tips",
          showClose: true,
          center: true,
          type: "warning"
        });
        this.issavename = false;
        return;
      }

      let bool = this.checkUserName();
      if (!bool) {
        return;
      }

      this.issavename = true;
      this.$message({
        message: "已记住用户名!",
        customClass: "login-tips",
        showClose: true,
        center: true,
        type: "success"
      });
      localStorage.setItem("rememberUserName", this.username);
    },
    checkUser() {
      //校验用户名和密码
      let bool = false;
      if (!this.username) {
        this.$message({
          message: "请输入用户名!",
          customClass: "login-tips",
          showClose: true,
          center: true,
          type: "warning"
        });
        return bool;
      }
      if (!this.password) {
        this.$message({
          message: "请输入密码!",
          customClass: "login-tips",
          showClose: true,
          center: true,
          type: "warning"
        });
        return bool;
      } else if (!/[a-zA-Z\d_\!@#\$%\^\&\*\.]$/.test(this.password)) {
        this.$message({
          message: "请输入字母、或数字、或下划线组成的合法密码!",
          customClass: "login-tips",
          showClose: true,
          center: true,
          type: "warning"
        });
        return bool;
      }

      bool = true;
      return bool;
    },
    rememberUser() {
      //缓存用户名、密码
      if (localStorage.getItem("rememberUser")) {
        localStorage.removeItem("rememberUser");
        this.$message({
          message: "已清除保存的用户名和密码!",
          customClass: "login-tips",
          showClose: true,
          center: true,
          type: "warning"
        });
        this.issaveuser = false;
        return;
      }

      let bool = this.checkUser();
      if (!bool) {
        return;
      }

      this.issaveuser = true;
      this.$message({
        message: "已记住用户名和密码!",
        customClass: "login-tips",
        showClose: true,
        center: true,
        type: "success"
      });
      let user = {
        username: this.username,
        password: this.password
      };
      localStorage.setItem("rememberUser", JSON.stringify(user));
    },
    forgetPwd() {
      //忘记密码提示
      this.$message({
        message: "忘记密码了？请联系管理员!",
        customClass: "login-tips",
        showClose: true,
        center: true,
        type: "warning"
      });
    },
    goLogin() {
      //用户名--登录操作
      let bool = false;
      bool = this.checkUserName();
      if (!bool) {
        return;
      }
      bool = this.checkUser();
      if (!bool) {
        return;
      }

      //防止多次点击 间隔时间不少于2秒；
      let curTimestamp = new Date().getTime();
      if (this.oldTimestamp > 0 && curTimestamp - this.oldTimestamp < 2000) {
        this.oldTimestamp = new Date().getTime();
        return;
      }
      this.oldTimestamp = new Date().getTime();

      //如果已经缓存了，则在登录时，更新缓存，保持最新的用户名和密码缓存；
      if (localStorage.getItem("rememberUserName")) {
        localStorage.setItem("rememberUserName", this.username);
      }
      if (localStorage.getItem("rememberUser")) {
        let user = {
          username: this.username,
          password: this.password
        };
        localStorage.setItem("rememberUser", JSON.stringify(user));
      }

      //开始用户名登录操作
      //登录请求
      this.usernameloading = true;

      //如果之前有缓存用户，或者密码的习惯，则对这个浏览器保存这种习惯，
      let rememberUserName = "",
        rememberUser = "";
      if (localStorage.getItem("rememberUserName")) {
        rememberUserName = localStorage.getItem("rememberUserName");
      }
      if (localStorage.getItem("rememberUser")) {
        rememberUser = localStorage.getItem("rememberUser");
      }

      if (localStorage.getItem("userName") != this.username) {
        localStorage.clear();
        rememberUserName &&
          localStorage.setItem("rememberUserName", rememberUserName);
        rememberUser && localStorage.setItem("rememberUser", rememberUser);
      }

      this.usernameloading = false;
      // this.$store.commit('setToken',res.datas.token);//设置token
      ////设置一级菜单  此时由于一级菜单目录数据来源于登录接口，所以用vuex缓存不合理，因为一刷新vuex就不存在了
      // this.$store.commit('setOneLevelMenu',res.datas.menus);
      let data = {
        username:this.username,
        role:1,
        token:'token'
      };
      localStorage.setItem("hasLogin", true);
      localStorage.setItem("userName", this.username);
      sessionStorage.setItem("userInfo", JSON.stringify(data));
      this.$router.replace({ path: "/home" });
    }
  },
  computed: {},
  created() {
    //如果之前缓存了用户名和密码，则首次渲染页面时，显示缓存的数据
    if (localStorage.getItem("rememberUser")) {
      this.issaveuser = true;
      this.username = JSON.parse(localStorage.getItem("rememberUser")).username;
      this.password = JSON.parse(localStorage.getItem("rememberUser")).password;
    } else if (localStorage.getItem("rememberUserName")) {
      this.issavename = true;
      this.username = JSON.parse(
        localStorage.getItem("rememberUserName")
      ).username;
    }
  },
  beforemount() {},
  mounted() {},
  watch: {}
};
</script>
<style scoped lang="scss">
.login-container {
  background-color: #0a1f5c;
  background: radial-gradient(circle at 10% 30%, #197fe6, #05192e);
  .login-box {
    .login-contain {
      width: 400px;
      height: 400px;
      position: absolute;
      top: 36%;
      left: 50%;
      margin-top: -200px;
      margin-left: -200px;

      .login-logo {
        height: 200px;
        text-align: center;
        > p {
          width: 100px;
          height: 100px;
          background: url("../../assets/logo.png") no-repeat center;
          background-size: contain;
          margin: 0 auto;
          border-radius: 50%;
          overflow: hidden;
        }
        h1 {
          color: #fff;
          font-size: 27px;
          font-weight: bold;
          margin-top: 10px;
        }
        h2 {
          font-size: 16px;
          margin: 0;
          color: rgba(255, 255, 255, 0.5);
        }
      }
      .login-username {
        width: 350px;
        opacity: 0;
        position: absolute;
        bottom: -200px;
        left: 20px;
        visibility: hidden;
        z-index: 0;
        transition: all 0.5s cubic-bezier(0.78, 0.02, 0.2, 1),
          z-index 0.12s 0.12s;
        &.active {
          bottom: 0;
          opacity: 1;
          visibility: visible;
          z-index: 1;
        }
        p {
          position: relative;
          > span {
            position: absolute;
            right: 10px;
            top: 6px;
            width: 26px;
            height: 26px;
            line-height: 26px;
            background: rgba(0, 255, 128, 0.4);
            border-radius: 50%;
            z-index: 10;
            text-align: center;
            cursor: pointer;
            transition: all 0.5s cubic-bezier(0.78, 0.02, 0.2, 1),
              z-index 0.12s 0.12s;
            &:nth-of-type(1) {
              &:hover {
                background: rgba(0, 255, 128, 0.8);
                i:hover {
                  color: rgba(250, 250, 250, 0.8);
                }
              }
              &.active {
                background: rgba(0, 255, 128, 0.8);
                i {
                  color: rgba(250, 250, 250, 0.8);
                }
              }
            }
            &.question {
              background: rgba(0, 255, 128, 0.7);
              right: -36px;
              .offer-icon-question1 {
                color: rgba(250, 250, 250, 0.8);
              }
              &:hover,
              &.active {
                background: rgba(0, 255, 128, 0.8);
                .offer-icon-question1 {
                  color: rgba(250, 250, 250, 0.9);
                }
              }
            }
            &.num {
              width: auto;
              padding: 0 10px;
              color: #fff;
              opacity: 0.5;
              border-radius: 13px;
              font-size: 14px;
              font-weight: bold;
              &:hover,
              &.active {
                opacity: 0.9;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<style type="text/css" lang="scss">
.login-container {
  p {
    .offer-icon-yonghu,
    .offer-icon-suo,
    .offer-icon-shouji {
      color: rgba(250, 250, 250, 0.8);
      font-size: 18px;
      margin-left: 10px;
      font-weight: bold;
    }
  }
  .offer-icon-gou {
    font-size: 16px;
    color: rgba(250, 250, 250, 0.4);
    font-weight: bold;
    transition: all 0.5s cubic-bezier(0.78, 0.02, 0.2, 1), z-index 0.12s 0.12s;
  }
  .el-input--prefix {
    box-shadow: inset 1px 1px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 40px;
    color: #fff;
    line-height: 40px;
    font-size: 16px;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    border: none;
    margin-bottom: 8px;
    .el-input__inner {
      color: #fff;
      float: left;
      text-align: center;
    }
    .el-input__inner::placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
  }
  .el-button {
    box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.3) inset,
      1px 1px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.5s cubic-bezier(0.78, 0.02, 0.2, 1), z-index 0.12s 0.12s;
    color: rgba(255, 255, 255, 0.8);
    background-color: rgba(25, 230, 128, 0.6);
    border: none;
    cursor: pointer;
    height: 40px;
    width: 100%;
    line-height: 38px;
    padding: 0 10px;
    border-radius: 20px;
    font-size: 20px;
    &:hover {
      background-color: rgba(71, 235, 139, 0.8);
      color: #ffffff;
    }
  }
  .el-input__inner {
    border: none;
    background: transparent;
    outline: none;
  }
}
.login-tips {
  box-shadow: inset 1px 1px 10px rgba(0, 0, 0, 0.1);
  height: 40px;
  width: 350px;
  color: #fff;
  line-height: 40px;
  font-size: 16px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
}
</style>