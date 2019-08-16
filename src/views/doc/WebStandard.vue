<!--
 * @Description: 
 * @Author: lhl
 * @Date: 2019-08-14 16:37:55
 * @LastEditors: lhl
 * @LastEditTime: 2019-08-14 18:09:53
 -->
<template>
  <!-- 前端架构、开发规范、组织结构说明文档 -->
  <div class="webstandard-box">
    <h2 style="text-align: center;">
      <span>
        <router-link tag="i" to="/home">
          <el-tooltip class="item" effect="light" content="点击进入主页" placement="top-start">
            <img style="width: 22px;margin-right: 10px;cursor: pointer;" :src="require('@/assets/logo.png')">
          </el-tooltip>
        </router-link>
        前端架构、开发规范、组织结构说明文档
      </span>
      <router-link tag="a" to="/doc/elementuiformat" style="color:gray;border-bottom: solid 1px gray;font-size: 12px;margin-left: 20px;">→ elementUI使用规范文档</router-link>
    </h2>
    <!-- 右侧目录 -->
    <div class="doc-menu">
      <h4><span>文档目录</span><span class="menu-count">{{curid}} / {{menu.length}}</span></h4>
      <div id="menubox">
        <ul>
          <li v-for="(item,index) in menu" :class="{'active':curid==index+1}"><a href="javascript:void(0)" @click="goAnchor(item.url)">{{item.title}}</a></li>
        </ul>
      </div>
    </div>
    <!-- 正文内容 -->
    <div class="doc-word">
      <!--  规范目的 -->
      <p style="text-align: center;color:red;font-size: 12px;">（本规范一经确认, 开发人员必须遵守。如有不对, 可提出、讨论、新增、更改，欢迎大家一起贡献。）</p>
      <div id="anchor1">
        <h3>一：规范说明</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>规范的目的</h4>
            <div class="grey-block">
              <ul>
                <li>1、提高团队协作效率，统一开发规范的意见；</li>
                <li>2、规范、有序的代码，可读性高，可以减少合作开发者之间的沟通成本，减少分歧，和谐开发，让后人维护起来更方便；</li>
                <li>3、可以培养开发者养成编写规范代码的良好编程习惯；</li>
              </ul>
            </div>
          </div>
          <div>
            <h4>基本准则</h4>
            <div class="grey-block">
              <ul>
                <li>1、考虑兼容IE9+;</li>
                <li>2、对不直观变量、函数、以及复杂逻辑必须写<i class="underline">注释</i>；</li>
                <li>3、不得随意修改全局性的代码，定义全局变量、全局样式；</li>
                <li>4、提交svn时，应先更新再提交，且尽量在src文件夹下提交svn，避免提交一些个人配置文件，同时提交svn时必须写<i class="underline">注释说明</i>；</li>
                <li>5、未经同意，不得随意修改他人提交的代码，尤其是双方还在开发期间；</li>
                <li>6、当前项目可以使用es6，但不允许使用更高版本的js语法；</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 框架说明 -->
      <div id="anchor2">
        <h3>二、框架说明</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>前端框架启动步骤</h4>
            <div class="grey-block">
              <ul>
                <li>
                  <p>获取svn代码、安装依赖、启动：</p>
                  <div style="padding-left: 20px;">
                    <ul>
                      <li>1、从svn拉取前端代码；</li>
                      <li>2、确定电脑是否安装了npm，如果没安装，则到官网下载node安装，node自带了npm；（命令行中使用命令：npm -v，查看是否出现版本号，有表示安装了！）</li>
                      <li>3、打开命令行工具，cd到当前项目根目录下；</li>
                      <li>4、使用：npm install，安装项目所需依赖；如果安装太久，或者安装依赖失败，则使用：cnpm install（注意：如果没有安装淘宝镜像cnpm，则打开一个新的命令行，在命令行中全局安装，安装命令：npm install -g cnpm --registry=https://registry.npm.taobao.org）</li>
                      <li>5、依赖安装成功。如果是windows系统（如果是mac系统，则需要cd到项目根目录下，使用命令：npm run dev启动项目），直接点击根目录下的start.bat文件，即可启动项目，启动后出现提示：Your application is running here: http://localhost:9001，则表示项目启动成功，在浏览器中粘贴该地址(或粘贴：http://http://127.0.0.1:9001)即可看到该项目运行首页。</li>
                      <li>6、开始登录（<i @click="goAnchor('#anchor_login')" style="text-decoration: underline;color:blue;cursor: pointer;">登录查看这里</i>）</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4>前端框架架构介绍</h4>
            <div class="grey-block">
              <ul>
                <li>
                  <p>1、架构基本包含部分：</p>
                  <div style="padding-left: 20px;">
                    <ul>
                      <li>脚手架vue-cli</li>
                      <li>前端监控日志</li>
                      <li>单元测试工具</li>
                      <li>elementUI</li>
                      <li>icon 系统</li>
                      <li>公共组件components</li>
                      <li>公共函数utils</li>
                      <li>全局样式变量styles</li>
                      <li>复用功能mixins文件</li>
                      <li>全局指令directive</li>
                      <li>全局 filter</li>
                      <li>axios封装</li>
                      <li>vuex数据文件</li>
                      <li>页面路由store管理</li>
                      <li>全部url请求的api文件</li>
                      <li>权限菜单目录 menu.js</li>
                      <li>editor编辑器组件</li>
                      <li>地图组件</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <p>2、架构功能点：</p>
                  <div>
                    <ul style="padding-left: 20px;">
                      <li>标准的文件构建目录</li>
                      <li>集中控制的全局变量处理</li>
                      <li>公共组件、工具、样式库的建立</li>
                      <li>统一请求进度条控制</li>
                      <li>非登录端与登录端分离控制</li>
                      <li>axios封装成ajax的数据请求方式，支持跨域</li>
                      <li>可语言国际化</li>
                      <li>登录密码加密</li>
                      <li>sass工具快捷写css</li>
                      <li>阿里巴巴的iconfont支持</li>
                      <li>vue-animate动画效果支持</li>
                      <li>可mock模拟数据</li>
                      <li>elementUI组件系统</li>
                      <li>wangEditor富文本支持</li>
                      <li>强大灵活完善的菜单标签功能</li>
                      <li>全部页面一屏显示、无网页边缘滚动条</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <p>3、架构使用技术栈：</p>
                  <div>
                    <ul style="padding-left: 20px;">
                      <li>框架：vue2</li>
                      <li>搭建工具：vue-cli/npm/webpack/node</li>
                      <li>UI：elementUI</li>
                      <li>基础库：vuex/axios/vue-router</li>
                      <li>工具库：mock/vue-i18n/vue-animate/vue2-verify/js-md5</li>
                      <li>其它资源：es6/sass/iconfont/babel-polyfill</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 文件夹说明 -->
      <div id="anchor3">
        <h3>三、框架文件夹说明</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>前端架构文件夹结构一览</h4>
            <div class="grey-block">
              <ul>
                <li>
                  <pre>
                                        <code>
            ├── build                      // 构建相关
            ├── config                     // 配置相关
            ├── src                        // 源代码
            │   ├── api                    // 所有post/get请求地址
            │   ├── axios                  // 用来封装axios
            │   ├── assets                 // 主题 字体等静态资源
            │       ├── iconfont               // 阿里巴巴图标字体iconfont文件夹
            │       ├── images                 // 框架存放所有小图的地方
            │   ├── directive              // 全局指令
            │   ├── filtres                // 全局 filter
            │   ├── mixins                 // 全局复用 混合mixins
            │   ├── lang                   // 国际化 language (当前项目不用)
            │   ├── mock                   // 项目mock 模拟数据 (当前项目不用)
            │   ├── router                 // 路由
            │   ├── store                  // vuex全局数据管理
            │   ├── styles                 // 全局样式
            │       ├── base.css               // 全局重置样式
            │       ├── global.scss            // sass全局变量样式
            │   ├── utils                  // 全局公用方法
            │   ├── vendor                 // 公用vendor
            │   ├── views                  // 所有页面
            │       ├── aside                   // 二级菜单侧边栏
            │       ├── components              // 公共组件
            │       ├── doc                     // 中粮文档
            │       ├── footer                  // 公共脚部
            │       ├── header                  // 公共头部
            │       ├── home                    // 所有业务页面
            │           ├── home.vue                    // 所有页面的父组件
            │           ├── project-shouye              // 一级菜单"首页"下的页面
            │           ├── project-wuliuyunshu         // 一级菜单"物流运输"下的页面
            │           ├── project-fucaiguanli         // 一级菜单"服采管理"下的页面
            │           ├── project-wuliujiesuan        // 一级菜单"物流结算"下的页面
            │           ├── project-fenxibaobiao        // 一级菜单"分析报表"下的页面
            │           ├── project-peizhiguanli        // 一级菜单"配置管理"下的页面
            │       ├── login                   // 登录页面
            │       ├── register                // 注册页面
            │   ├── App.vue                // 入口页面
            │   ├── main.js                // 入口 加载组件 初始化等
            │   ├── menu.js                // 配置菜单
            │   ├── permission.js          // 权限管理
            ├── static                     // 第三方不打包资源(包括大图片、插件)
                ├── images                      // 大图片
                ├── lib                         // 插件资源
            ├── .babelrc                   // babel-loader 配置
            ├── eslintrc.js                // eslint 配置项
            ├── .gitignore                 // git 忽略项
            ├── favicon.ico                // favicon图标
            ├── index.html                 // html模板
            └── package.json               // package.json

            build 文件夹: 里面是对 webpack 开发和打包的相关设置，包括入口文件、输出文件、使用的模块等；
            config 文件夹: 主要是指定开发和打包中的静态资源路径、要压缩的文件类型、开发使用的端口号、开发使用虚拟服务器跨域请求 api 等。
            node_modules: 项目的依赖库；
            src 文件夹： 我们主要操作的地方，组件的增加修改等都在这个文件夹里操作，下文会有详细介绍；
            static 文件夹: 静态资源文件夹，放置不会变动的资源，直接被复制到最终的打包目录（默认是dist/static）下；
            .babelrc: 使用 babel 的配置文件，用来设置转码规则和插件；
            .editorconfig: 代码的规范文件，规定使用空格或 tab 缩进，缩进的长度是两位还是四位之类的代码风格，使用的话需要在编辑器里下载对应的插件；
            .eslintignore: 指定 eslint 忽略的文件；
            .eslintrc: 配置 eslint 的检测规则，强制按照规则书写代码；
            .gitignore: 指定 git 忽略的文件，所有 git 操作均不会对其生效；
            .postcssrc: 指定使用的 css 预编译器，里面默认配置了 autoprefixer ，自动补全浏览器前缀；
            favicon.ico: 浏览器标签页 title 旁边的小图标，这是需要我们自己粘贴过来的；
            index.html: 首页文件，项目运行的时候，会自动将我们在 src 文件夹里生成的组件插入这个文件里；
            LICENSE: 项目声明的 license；
            package-lock.json: 当 node_modules 或 package.json 发生变化时自动生成的文件。这个文件主要功能是确定当前安装的包的依赖，以便后续重新安装的时候生成相同的依赖，
                而忽略项目开发过程中有些依赖已经发生的更新；
            package.json: 指定项目开发和生成环境中需要使用的依赖库；
            README.md: 相当于是一个备注文件，对项目开发过程中需要注意的地方进行一些说明
            assets: 放置静态资源，包括公共的 css 文件、 js 文件、iconfont 字体文件、img 图片文件 以及其他资源类文件。之所以强调是公共的 css 文件，
                是因为要在组件的 css 标签里加入 ‘scoped‘ 标记，将其作用范围限制在此组件以及调用它的父级组件中，避免污染全局样式；
            components: 放置通用模块组件。项目里总会有一些复用的组件，例如弹出框、发送手机验证码、图片上传等，将它们作为通用组件，避免重复工作；
            http: 放置与后台 api 相关的文件。这里面有 axios 库的实例配置文件、使用配置的 axios 实例接入 api 获取数据的函数的集合的文件；
            mixins: 放置混合选项的文件。具体来说，相当于是公用函数的集合，在组件中引用时，可以作用于组件而不必书写重复的方法；
            pages: 放置主要页面的组件。例如登录页、用户信息页等。通常是这里的组件本身写入一些结构，再引入通用模块组件，形成完整的页面；
            router: 放置路由设置文件，指定路由对应的组件；
            store: 放置 vuex 需要的状态关联文件，设置公共的 state、mutations 等；
            App.vue: 入口组件，pages 里的组件会被插入此组件中，此组件再插入 index.html 文件里，形成单页面应用；
            main.js: 入口 js 文件，影响全局，作用是引入全局使用的库、公共的样式和方法、设置路由等。      
                                        </code>
                                    </pre>
                </li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 其它说明 -->
      <div id="anchor4">
        <h3>四、登录、axois请求说明</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4 id="anchor_login">登录说明</h4>
            <div class="grey-block">
              <ul>
                <li>首先，在项目更目录下的config/index.js文件中找到第14行，配置您的后台代码服务地址（支持跨域代理），比如：http://192.168.1.113:9000（192.168.1.113是后台代码运行电脑的ip，9000是端口）</li>
                <li>其次，输入登录账号：admin，密码：123456</li>
                <li>如果不正常登录，而是破解代码登录，将无法显示一级菜单，会自动退出登录，即使写了静态一级菜单，如果路径不对，则会让菜单历史标签系统完全紊乱，因此，建议按照正常步骤运行代码； </li>
              </ul>
            </div>
          </div>
          <div>
            <h4>axios请求——相关说明</h4>
            <div class="grey-block">
              <ul>
                <li>1，为了统一管理请求格式，以及请求控制，我们在main.js给axios请求作了一些封装；</li>
                <li>2，中粮后端项目，主要是post和get请求(提醒：后台大部分接口都可以用post或get请求，但我们建议写入数据接口一律必须使用post请求，只读数据接口不作规定)，基于此，我们暂时只考虑了这两种请求格式，并作了封装处理；</li>
                <li>3，axios发出的所有请求，我们都做了统一的loading顶部加载进度条，也就是说，在具体接口调用中，不需要再使用loading加载，当然个别接口除外，可定制特殊的loading加载；</li>
                <li></li>
                <li>
                  <p><b>单个请求--简洁版请求格式一览：</b></p>
                  <p>（登录接口）</p>
                  <pre>
                                        <code>
       （默认为post请求）                                 
        this.$http({
          url:'/api'+this.$api.system.login,    //是否必选：必选
          data:{                                //是否必选：必选
            userName:this.username,
            pwd:this.password  //目前传明文
          },
          success:function(res){                //是否必选：必选
              
          }.bind(this)
        })         
                                        </code>
                                    </pre>
                </li>
                <li>
                  <p><b>单个请求--完整版请求格式一览：</b></p>
                  <p>（登录接口）</p>
                  <pre>
                                        <code>
        this.$http({
          headers:'',                           //是否必选：否 （默认为：'application/x-www-form-urlencoded; charset=UTF-8'）
          method:'post',                        //是否必选：否 （默认为post请求）
          url:'/api'+this.$api.system.login,    //是否必选：必选
          data:{                                //是否必选：必选
            userName:this.username,
            pwd:this.password  //目前传明文
          },
          success:function(res){                //是否必选：必选
              
          }.bind(this),
          error:function(obj){                  //是否必选：否 （有统一的错误处理提示）
              //在这里，我们可以让开发者用自己的方式单独处理错误
          }.bind(this)
        })         

        headers请求头格式：
        /**
         *
         * 1.发送json格式数据：
         *   {"Content-type": "application/json; charset=utf-8"}
         *   data=url?key=val&key2=val2;

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

        注意：1、header格式填写，比如：header:'application/json; charset=utf-8'
             2、method:'post'中的post，可更改为get，即get请求，此时data数据格式也保持一样，我们会自动将data传参拼接到请求地址末尾；                          
             3、当header:'application/json; charset=utf-8'时，data格式也保持不变，我们将自动转换为字符串格式；
                                        </code>
                                    </pre>
                </li>
                <li>
                  <p><b>多个请求--简洁版请求格式一览：</b></p>
                  <p>（暂无）</p>
                  <pre>
                                        <code>                                    
                                        </code>
                                    </pre>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 文件、变量命名 -->
      <div id="anchor5">
        <h3>五、文件、变量命名</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>常见5种命名方法</h4>
            <div class="grey-block">
              <ul>
                <li>1）连写式命名法，如：helloworld </li>
                <li>2）中线命名法，如：hello-world</li>
                <li>3）下划线命名法，如：hello_world </li>
                <li>4）骆驼命名法，如：helloWorld</li>
                <li>5）帕斯卡命名法，如：HelloWorld</li>
                <li>6）全大写命名，如：HELLOWORLD</li>
              </ul>
            </div>
          </div>
          <div>
            <h4>文件夹、文件命名</h4>
            <div class="grey-block">
              <ul>
                <li>
                  <p>1.文件夹命名</p>
                  <div style="margin-left: 20px;">
                    <p>命名方式:中线命名法(kebab-case) </p>
                    <p>命名规范: 全英文命名，类型+对象描述的方式；</p>
                    <p><span style="border-bottom: solid 1px gray;">举例：common、project-haiyun(海运模块业务)</span></p>
                  </div>
                </li>
                <li>
                  <p>2.vue公共组件命名（即供引用组件）</p>
                  <div style="margin-left: 20px;">
                    <p>命名方式: 根据vue官方说明，单文件组件的文件名，应该是多单词、单词大写开头 (PascalCase)，或横线连接 (kebab-case)，这里，我们使用单词大写开头；</p>
                    <p>参考链接：https://cn.vuejs.org/v2/style-guide/#%E7%BB%84%E4%BB%B6%E6%96%87%E4%BB%B6-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90</p>
                    <p>命名规范: 全英文命名，类型+对象描述的方式 ；</p>
                    <p><span style="border-bottom: solid 1px gray;">举例：MyComponent.vue</span></p>
                  </div>
                </li>
                <li>
                  <p>3.vue非公共组件命名（即业务组件）</p>
                  <div style="margin-left: 20px;">
                    <p>命名方式: 当前项目对业务组件，我们统一采用‘全拼音小写命名’，清晰易懂，以应对繁多的业务组件页面，照顾所有开发者的英语水平; (首字母大写不利于一眼看懂拼音)</p>
                    <p>命名规范: 原型文件名全拼；</p>
                    <p><span style="border-bottom: solid 1px gray;">举例：zuchuanjihua.vue（租船计划汇总表）</span></p>
                  </div>
                </li>
                <li>
                  <p>4.js文件命名</p>
                  <div style="margin-left: 20px;">
                    <p>1.属于类的.js文件，除index.js外，使用‘帕斯卡命名法（PascalBase)'风格</p>
                    <p>2.其他类型的.js文件，使用kebab-case风格</p>
                    <p>3.属于Api的，统一加上Api后缀</p>
                  </div>
                </li>
                <li>
                  <p>5.less文件命名</p>
                  <div style="margin-left: 20px;">
                    <p>命名方式: 统一使用'中线命名法(kebab-case)'命名风格</p>
                    <p>命名规范: 全英文，类型+对象描述的方式</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4>变量、函数、常量、类的命令方式</h4>
            <div class="grey-block">
              <ul>
                <li>
                  <p>1.变量命名</p>
                  <div style="margin-left: 20px;">
                    <p>命名方式: 驼峰式命名</p>
                    <p>命名规范: 类型+对象描述的方式，如果没有明确的类型，就可以使前缀为名词；</p>
                    <p>举例：let count = 0; let btnShow = false;</p>
                  </div>
                </li>
                <li>
                  <p>2.函数命名</p>
                  <div style="margin-left: 20px;">
                    <p>命名方式: 驼峰方式 ( 构造函数使用帕斯卡命名法 )</p>
                    <p>命名规范: 前缀为动词</p>
                    <p>举例：function isShowBtn(){};</p>
                  </div>
                </li>
                <li>
                  <p>3.常量命名</p>
                  <div style="margin-left: 20px;">
                    <p>命名方式: 全部大写</p>
                    <p>命名规范: 使用大写字母和下划线来组合命名，下划线用以分割单词；</p>
                    <p>举例：let MAX_COUNT = 10; let URL = 'http://www.baidu.com';</p>
                  </div>
                </li>
                <li>
                  <p>4.类的成员命名</p>
                  <div style="margin-left: 20px;">
                    <p>公共属性和方法：同变量命名方式</p>
                    <p>私有属性和方法：前缀为下划线(_)后面跟公共属性和方法一样的命名方式</p>
                    <p>举例： </p>
                    <pre>
                                            <code>
        function Student(name) { 
            var _name = name; // 私有成员 

            // 公共方法 
            this.getName = function () { 
                return _name; 
            }

            // 公共方式
            this.setName = function (value) { 
                _name = value; 
            }
        }

        var st = new Student('tom');
            st.setName('jerry');
            console.log(st.getName()); // => jerry:
                                            </code>
                                        </pre>
                  </div>
                </li>
                <li>
                  <p></p>
                  <p></p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4>class的命名</h4>
            <div class="grey-block">
              <ul>
                <li>
                  <p>1. 颜色</p>
                  <p style="padding-left: 20px;">使用颜色的名称或者16进制代码,如 .red { color: red; }; .f60 { color: #f60; }; .ff8600 { color: #ff8600; }</p>
                </li>
                <li>
                  <p>2. 字体大小</p>
                  <p style="padding-left: 20px;">直接使用’font+字体大小’作为名称,如 .font12px { font-size: 12px; }; .font9pt {font-size: 9pt; }</p>
                </li>
                <li>
                  <p>3. 对齐样式</p>
                  <p style="padding-left: 20px;">使用对齐目标的英文名称,如 .left { float:left; }; .bottom { float:bottom; }</p>
                </li>
                <li>
                  <p>4. 标题栏样式</p>
                  <p style="padding-left: 20px;">使用’类别+功能’的方式命名,如 .barnews { }; .barproduct { }</p>
                </li>
                <li>
                  <p>5. 正常类名命名法</p>
                  <p style="padding-left: 20px;">使用’_’的方式命名，表示后面是前面的子代,如 .bar_news 表示news属于bar的子代</p>
                  <p style="padding-left: 20px;">使用’-’的方式命名，表示类型+描述,如 .bar-news </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 图片规范 -->
      <div id="anchor6">
        <h3>六、图片规范</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>图片命名</h4>
            <div class="grey-block">
              <ul>
                <li>
                  <p>1、使用小写英文、数字、_组合</p>
                  <p>（ 小写英文、数字、_组合：head.jpg、head_btn1.jpg; ）</p>
                </li>
                <li>
                  <p>2、使用纯拼音、不加下划线命名图片</p>
                  <p>（ 纯拼音、不加下划线：touxiang.jpg ）</p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4>图片存放位置</h4>
            <div class="grey-block">
              <p>解析点1：static中放置的静态资源文件就不会要走打包压缩格式化等流程，而是直接进入打包好的目录，直接上传至服务器。因为避免了压缩直接进行上传，在打包时会提高一定的效率，但是static中的资源文件由于没有进行压缩等操作，所以文件的体积也就相对于assets中打包后的文件提交较大点。</p>
              <p>解析点2：assets中存放的静态资源文件在项目打包时，也就是运行npm run build时会将assets中放置的静态资源文件进行打包上传，所谓打包简单点可以理解为压缩体积，代码格式化。而压缩后的静态资源文件最终也都会放置在static文件中跟着index.html一同上传至服务器</p>
              <p>下规范结论：</p>
              <p>1、大图片统一放入根目录下的static/文件夹下，此时，在static/下的文件都不会被Webpack处理，图片不会被base64转码；</p>
              <p>（引用方法：imgUrl = '/static/logo.png'）</p>
              <p>2、小图片统一放在src/assets，此时图片小于设定数值，就会被base64转码；</p>
              <p>（标签中引用方法：imgUrl = require('@/assets/logo.png')）</p>
              <p>（css中引用方法：background: url("../../assets/logo.png");）</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 注释规范 -->
      <div id="anchor7">
        <h3>七、注释规范</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>哪些需要写注释</h4>
            <div class="grey-block">
              <ul>
                <li>1、文件注释，在文件头部对文件的整体说明；</li>
                <li>2、不直观明了的变量；</li>
                <li>3、逻辑显复杂的函数，包括函数的功能、函数参数、返回值；</li>
                <li>4、层级多的对象；</li>
                <li>5、关联多的逻辑过程、步骤；</li>
                <li>6、CSS文件中对某些关键样式的注释；</li>
                <li>7、引入大家不知道的插件、组件、模块，需注释说明；</li>
              </ul>
            </div>
          </div>
          <div>
            <h4>注释书写标准</h4>
            <div class="grey-block">
              <ul>
                <li>
                  <p>1、块注释</p>
                  <p>（如果是函数的注释，注释应当写在函数内的第一行开始处）</p>
                  <pre>
                                        <code>
    /**
     * 方法说明  (必写)
     * @method 方法名 (可省略)
     * @param {参数类型} 参数名 参数说明 (可省略)
     * @return {返回值类型} 返回值说明 (可省略)
     */
                                        </code>
                                    </pre>
                </li>
                <li>
                  <p>2、行注释</p>
                  <pre>
                                        <code>
    // 这是注释说明
                                        </code>
                                    </pre>
                </li>
                <li>3、CSS注释统一使用：/* */</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>

    <v-gotop></v-gotop>
  </div>
</template>

<script>
import Gotop from "@/views/components/Go-Top.vue"

export default {
  name: 'webstandard',
  data() {
    return {
      curid: 1,
      isclickscroll: false, //避免点击目录时，与滚动事件冲突
      allmenuheight: [],//目录中所有菜单对应div的高度值；
      menu: [
        {
          title: '1. 规范说明',
          url: '#anchor1'
        },
        {
          title: '2. 框架说明',
          url: '#anchor2'
        },
        {
          title: '3. 框架文件夹说明',
          url: '#anchor3'
        },
        {
          title: '4. 登录、axois请求说明',
          url: '#anchor4'
        },
        {
          title: '5. 文件、变量命名',
          url: '#anchor5'
        },
        {
          title: '6. 图片规范',
          url: '#anchor6'
        },
        {
          title: '7. 注释规范',
          url: '#anchor7'
        },
      ],
    }
  },
  props: [],
  components: {
    "v-gotop": Gotop
  },
  methods: {
    goAnchor(selector) {
      //定位到锚点
      this.curid = selector.split('anchor')[1];
      var anchor = this.$el.querySelector(selector);
      document.body.scrollTop = anchor.offsetTop; //chrome
      document.documentElement.scrollTop = anchor.offsetTop;//firefox

      this.isclickscroll = true;
    },
    handleScroll() {
      //滚动页面，选中相应的菜单
      if (!this.isclickscroll) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let allmenuheight = this.allmenuheight;
        for (var i = 0; i < allmenuheight.length; i++) {
          if (i == 0 && scrollTop < allmenuheight[i].height) {
            this.curid = i + 1;
            break;
          } else if (i != allmenuheight.length - 1 && scrollTop >= allmenuheight[i].height && scrollTop < allmenuheight[i + 1].height) {
            this.curid = i + 1;
            break;
          } else if (i == allmenuheight.length - 1) {
            this.curid = i + 1;
          }
        }
      }
      this.isclickscroll = false;
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
  beforeMount() {
    //相关的 render 函数（模板）首次被调用

  },
  mounted() {
    //el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
    let menu = this.menu;
    let h = '';
    for (let i = 0; i < menu.length; i++) {
      h = this.$el.querySelector(menu[i].url).offsetTop;
      this.allmenuheight.push({
        index: i,
        height: h
      })
    }

    window.addEventListener('scroll', this.handleScroll);
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
    curid(cur, old) {
      let h = this.$el.querySelector('#menubox').scrollTop;
      if (cur > 6 && cur > old) {
        this.$el.querySelector('#menubox').scrollTop = h + (cur - old) * 30;
      } else if (cur < this.menu.length - 5 && cur < old) {
        h = (h - (old - cur) * 30) <= 0 ? 0 : (h - (old - cur) * 30);
        this.$el.querySelector('#menubox').scrollTop = h;
      }
    }
  }
}
</script>
<style scoped lang="scss">
h2 {
  margin-bottom: 20px;
  font-size: 20px;
}
h3 {
  margin-top: 60px;
  border-bottom: solid 1px #409eff;
  display: inline-block;
  font-size: 18px;
  color: #409eff;
}
h4 {
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 16px;
}
a {
  color: #303133;
}
.underline {
  border-bottom: solid 1px red;
  color: red;
  font-style: normal;
  margin: 0 5px;
}

.webstandard-box {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  font-weight: 400;
  padding: 20px;
  position: relative;

  // doc-menu
  .doc-menu {
    position: fixed;
    top: 20px;
    right: 20px;
    box-shadow: $shadowColor1;
    padding: 10px 20px 10px 10px;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    z-index: 1000;
    h4 {
      height: 30px;
      line-height: 30px;
      margin: 0;
      border-bottom: solid 1px #e4e7ed;
    }
    .menu-count {
      position: absolute;
      top: 10px;
      right: 20px;
      font-weight: normal;
      font-size: 14px;
      color: #909399;
    }
    > div {
      margin-top: 10px;
      height: 300px;
      overflow: auto;
      > ul {
        display: block;
        > li {
          display: block;
          padding-right: 20px;
          a {
            color: #606266;
            display: block;
            height: 30px;
            line-height: 30px;
            padding-left: 10px;
            padding-right: 10px;
            border-radius: 2px;
            &:hover {
              color: #303133;
              background: #eee;
            }
          }
          &.active {
            a {
              color: #303133;
              background: #eee;
            }
          }
        }
      }
    }
  }

  //doc-word
  .doc-word {
    .grey-block {
      background: #f5f5f5;
      border-radius: 4px;
      padding: 20px;
    }
    .demo-color-box {
      border-radius: 4px;
      padding: 20px;
      margin: 5px 0;
      height: 74px;
      box-sizing: border-box;
      color: #fff;
      font-size: 14px;
    }
    .text-bg-box {
      padding: 20px 60px;
      height: 74px;
      box-sizing: border-box;
      font-size: 14px;
      color: #fff;
    }
    .border-box {
      .text-bg-box {
        color: #303133;
      }
    }
    .bg-blue {
      background-color: #409eff;
    }
    .font-style {
      td {
        border-bottom: 1px solid #d8d8d8;
        padding: 15px 30px;
      }
    }
  }
}
</style>