/**
 * 
 * 封装axios，统一拦截、loading加载图、返回状态显示；
 * 
 * 
 */

'use strict';

import Vue from 'vue'
import axios from 'axios'
import store from '../store/index'

var qs = require('querystring');
//决定是否过滤URL中的/api

let isProduct = process.env.NODE_ENV == 'development' ? false : true;//线上环境还是本地环境

Vue.prototype.$axios = axios.create({
  baseURL: '',
  timeout: 20000, //超时设置
  transformRequest: [function (data) {
    return data;
  }],
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理
    return data;
  }]
});

/**
 *
 * 1.发送json格式数据：
 *   {"Content-type": "application/json; charset=utf-8"}
 *   JSON.stringify(data)
 * 2.发送表单数据：
 *   {"Content-type": "application/x-www-form-urlencoded; charset=utf-8"}
 *   data:{
 *     key:value
 *   }
 * 3.发送纯文本（默认值）：
 *   {"Content-type": "text/plain; charset=utf-8"}
 * 4.发送html文本：
 *   {"Content-type": "text/html; charset=utf-8"}
 * 5.上传文件：
 *   { "Content-Type": "multipart/form-data" }
 *
 *
 */


Vue.prototype.$http = function (option) {
  store.commit('openLoading');

  //更改headers请求格式
  this.$axios.defaults.headers.post['Content-Type'] = option.headers ? option.headers : "application/x-www-form-urlencoded; charset=utf-8";
  // this.$axios.defaults.headers.delete['Content-Type'] = option.headers?option.headers:"application/json; charset=utf-8";
  if (option.responseType == 'file') {
    this.$axios.defaults.responseType = 'arraybuffer';
  } else {
    delete this.$axios.defaults.responseType;
  }

  if (option.url.indexOf('/login') == -1) {
    // this.$axios.defaults.headers.common['token'] = JSON.parse(localStorage.getItem('userInfo')).data.token;
    // this.$axios.defaults.headers.common['Authorization'] = JSON.parse(sessionStorage.getItem('userInfo')).token;
    this.$axios.defaults.headers.common['Token'] = JSON.parse(sessionStorage.getItem('userInfo')).token;
  } else {
    // delete this.$axios.defaults.headers.common['token'];
    delete this.$axios.defaults.headers.common['Authorization'];
  }


  let data = option.data;
  if (option.headers && option.headers.indexOf('application/json') > -1) {
    data = JSON.stringify(data);
  } else {
    data = qs.stringify(data);
  }


  let url = '';
  if ((option.method && option.method.toLowerCase() == 'get') || (option.method && option.method.toLowerCase() == 'delete')) {
    url = option.url + '?' + this.$getStrSort(option.data);
  } else {
    url = option.url;
  }

  //noservices表示url是否需要处理
  this.$axios({
    method: option.method ? option.method : 'post',
    url: option.noservices ? url : (isProduct ? url : '/api' + url),
    data: data,
    dataType: option.dataType ? option.dataType : "json",
  }).then(obj => {
    let datas = '';
    if (option.responseType == 'file' || (typeof obj.data == 'string' && !JSON.parse(obj.data).code)) {
      //数据流
      option.success && option.success(obj.data);
      store.commit('closeLoading', 'success');
      return;
    }
    switch (JSON.parse(obj.data).code) {
      case '0000':
        //请求成功
        if (obj.data) {
          datas = JSON.parse(obj.data);
        }
        option.success && option.success(datas);
        store.commit('closeLoading', 'success');
        break;
      case '5001':
        //请求成功，返回警告
        if (obj.data) {
          datas = JSON.parse(obj.data);
        }
        store.commit('closeLoading', 'error');
        if (option.error) {
          option.error(JSON.parse(obj.data));
        } else {
          this.$message({
            message: JSON.parse(obj.data).msg + ' 即将退出登录！',
            showClose: true,
            center: true,
            type: 'warning'
          });
          setTimeout(() => {
            this.$loginOut();
          }, 2000)
        }
        break;
      default:
        //请求不成功
        option.error ? option.error(JSON.parse(obj.data)) : this.$message({
          message: JSON.parse(obj.data).data.message,
          showClose: true,
          center: true,
          type: 'error'
        });
        store.commit('closeLoading', 'error');
        break;
    }
    //消除loading
    setTimeout(function () {
      if (document.getElementsByClassName('el-loading-mask')[0]) {
        for (let i = 0; i < document.getElementsByClassName('el-loading-mask').length; i++) {
          document.getElementsByClassName('el-loading-mask')[i].style.display = 'none';
        }
      }
    }, 1000);

  }).catch(err => {
    if (err.code == "ECONNABORTED" && err.config.url.indexOf('/login') == -1) {
      this.$message({
        type: 'warning',
        showClose: true,
        message: '请求超时'
      });
    } else if (err.response && err.response.status && err.config.url.indexOf('/login') == -1) {
      switch (Number(err.response.status)) {
        case 400:
          this.$message({
            type: 'warning',
            showClose: true,
            message: '请求无效！'
          });
          break;
        case 401:
          //token超时
          this.$message({
            type: 'warning',
            showClose: true,
            message: '登录超时，已自动退出登录！'
          });
          this.$loginOut();
          break;
        case 404:
          this.$message({
            type: 'error',
            showClose: true,
            message: '没找到该接口，请联系管理员'
          });
          break;
        case 500:
          if (err.response.message && err.response.message.indexOf('Read timed out') > -1) {
            this.$message({
              type: 'error',
              showClose: true,
              message: '编码超时'
            });
          } else {
            this.$message({
              type: 'error',
              showClose: true,
              message: '非常抱歉，请求接口服务出错了'
            });
          }
          break;
        case 504:
          this.$message({
            type: 'error',
            showClose: true,
            message: '非常抱歉，服务已断开'
          });
          break;
        default:
          if (err.response && err.response.errorCode == '3300') {
            this.$message({
              type: 'error',
              showClose: true,
              message: '网关超时'
            });
          } else {
            option.error ? option.error(err.message ? err.message : err) : console.error(err.message);
          }
      }
    } else {
      //给登录接口用，因为登录接口提示框不一样
      option.error ? option.error(err) : console.error(err.message);
    }

    //消除loading
    setTimeout(function () {
      if (document.getElementsByClassName('el-loading-mask')[0]) {
        for (let i = 0; i < document.getElementsByClassName('el-loading-mask').length; i++) {
          document.getElementsByClassName('el-loading-mask')[i].style.display = 'none';
        }
      }
    }, 1000);

    store.commit('closeLoading', 'error');

  })
};


/**
 *
 *   多请求axios
 *   请求都完成后，再运行func函数；
 *
 *   arr:为返回请求结果的函数组成的数组
 *   func:为全部请求结束后，执行的函数
 *
 */
//如果我们需用在两个接口同时完成后在执行一些逻辑,我们可以使用axios.all处理并发请求:
// Vue.prototype.$httpAll = function(arr,func){
//   this.$axios.all(arr)
//     .then(axios.spread(func));
// }
/**
 *
 *  请求例子：
 *   function getUserAccount() {
 *     return axios.get('/user/12345');
 *   }
 *
 *   function getUserPermissions() {
 *     return axios.get('/user/12345/permissions');
 *   }
 *
 *   this.$httpAll([getUserAccount(),getUserPermissions()],function(acct, perms){
 *       console.log()
 *   });
 *
 */


// http request 拦截器
// 加Authorization
// let instance = Vue.prototype.$axios;
// instance.interceptors.request.use(
//     config => {
//         if (localStorage.getItem('hasLogin')) {
// 如果登录成功后，所有的请求，一律判断是否存在Authorization，如果存在的话，则每个http header都加上Authorization
//         config.headers.Authorization = `Authorization ${JSON.parse(localStorage.getItem('userInfo')).data.Authorization}`;
//     }
//     return config;
// },
// err => {
//     return Promise.reject(err);
// });

// http response 拦截器
// instance.interceptors.response.use(
//     response => {
//         return response;
//     },
//     error => {
//         if (error.response) {
//             switch (error.response.status) {
//                 case 401:
//                     // 返回 401 清除Authorization信息并跳转到登录页面
//                     localStorage.removeItem('hasLogin');
//                     router.replace({
//                         path: '/login'
//                     })
//             }
//         }
//         return Promise.reject(error.response.data)   // 返回接口返回的错误信息
//     }
// );
//