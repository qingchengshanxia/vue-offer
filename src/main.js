// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

// import "babel-polyfill"
import Vuex from 'vuex'

import store from './store/index'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
import VueParticles from 'vue-particles'
import Base from './utils/base.js'  //引入封装公共方法
import './directive/directive.js'  //引入全局指令
import './axios/index.js'  //引入axios的封装
import router from './router'


import md5 from 'js-md5';


Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ElementUi)
Vue.use(VueParticles) //背景特性粒子
Vue.use(Base)

// require('./mock.js')

import filters from './filters/filters.js'
// 导出的是对象，可以直接通过 key 和 value 来获得过滤器的名和过滤器的方法
for (let key in filters) {
  Vue.filter(key, filters[key])
}

Vue.prototype.$md5 = md5;
Vue.config.productionTip = false; //阻止 vue 在启动时生成生产提示




/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



