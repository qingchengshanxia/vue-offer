import Vue from 'vue'
import Router from 'vue-router'

//非登录路由
const Login = () => import('@/views/login/Login')
const Register = () => import('@/views/register/Register');
const Silingsi = () => import('@/views/components/404');

//主路由
const Home = () => import('@/views/home/Home');
const Common = () => import('@/views/home/Common');

//文档路由
const ElementUIFormat = () => import('@/views/doc/ElementUIFormat');
const Design = () => import('@/views/doc/Design');
const WebStandard = () => import('@/views/doc/WebStandard');


// 去掉header和aside的登录页面路由
const Duli = () => import('@/views/home/independent/duli');


Vue.use(Router);

let router = new Router({
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/silingsi',
      name: 'silingsi',
      component: Silingsi
    },
    //首页栏目--菜单 路由
    {
      path: '/home',
      name: 'home',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        title: '首页',
        icon: 'iconfont offer-icon-home1',
        id: '1',
        bool: '',
        level: 1
      },
      component: Home,
      redirect: '/home/shouye',
      children: [
        {
          path: 'shouye',
          name: 'shouye',
          meta: {
            requireAuth: true,
            title: '首页',
            icon: 'iconfont offer-icon-list',
            id: '1-1',
            bool: '',
            level: 2,
            permission: [1],
            url: '/home/shouye'
          },
          component: () => import('@/views/home/module-shouye/shouye'),
          children: []
        },
        { path: '*', component: Silingsi }
      ]
    },
    //联盟管理
    {
      path: '/lianmeng',
      name: 'lianmeng',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        title: '联盟',
        icon: 'iconfont offer-icon-lianmeng',
        id: '2',
        bool: '',
        level: 1,
      },
      component: Home,
      redirect: '/lianmeng/lianmengadmin',
      children: [
        {
          path: 'lianmengadmin',
          name: 'lianmengadmin',
          meta: {
            requireAuth: true,
            title: '联盟管理',
            icon: 'iconfont offer-icon-lianmengguanli',
            id: '2-1',
            bool: '',
            level: 2,
            permission: [1],
            url: '/lianmeng/lianmengadmin'
          },
          component: () => import('@/views/home/module-lianmeng/lianmengadmin'),
          children: []
        },
        { path: '*', component: Silingsi }
      ]
    },
    //路径管理
    {
      path: '/lujing',
      name: 'lujing',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        title: '路径',
        icon: 'iconfont offer-icon-urlguanli',
        id: '3',
        bool: '',
        level: 1,
      },
      component: Home,
      redirect: '/lujing/lujingadmin',
      children: [
        {
          path: 'lujingadmin',
          name: 'lujingadmin',
          meta: {
            requireAuth: true,
            title: '路径管理',
            icon: 'iconfont offer-icon-dizhi',
            id: '3-1',
            bool: '',
            level: 2,
            permission: [1],
            url: '/lujing/lujingadmin'
          },
          component: () => import('@/views/home/module-lujing/lujingadmin'),
          children: []
        },
        { path: '*', component: Silingsi }
      ]
    },
    //offer管理
    {
      path: '/offer',
      name: 'offer',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        title: 'offer',
        icon: 'iconfont offer-icon--offer',
        id: '4',
        bool: '',
        level: 1,
      },
      component: Home,
      redirect: '/offer/offeradmin',
      children: [
        {
          path: 'offeradmin',
          name: 'offeradmin',
          meta: {
            requireAuth: true,
            title: 'offer管理',
            icon: 'iconfont offer-icon-bangong',
            id: '4-1',
            bool: '',
            level: 2,
            permission: [1],
            url: '/offer/offeradmin'
          },
          component: () => import('@/views/home/module-offer/offeradmin'),
          children: []
        },
        { path: '*', component: Silingsi }
      ]
    },
    //用户管理
    {
      path: '/yonghu',
      name: 'yonghu',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        title: '用户',
        icon: 'iconfont offer-icon-yonghu1',
        id: '5',
        bool: '',
        level: 1,
      },
      component: Home,
      redirect: '/yonghu/yonghuadmin',
      children: [
        {
          path: 'yonghuadmin',
          name: 'yonghuadmin',
          meta: {
            requireAuth: true,
            title: '用户管理',
            icon: 'iconfont offer-icon-yonghu',
            id: '5-1',
            bool: '',
            level: 2,
            permission: [1],
            url: '/yonghu/yonghuadmin'
          },
          component: () => import('@/views/home/module-yonghu/yonghuadmin'),
          children: []
        },
        { path: '*', component: Silingsi }
      ]
    },
    {
      path: '/common',
      name: 'common',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Common,
      children: [
        {
          path: 'independent/duli',
          name: 'duli',
          meta: {
            requireAuth: true,
          },
          component: Duli
        },
        { path: '*', component: Silingsi }
      ]
    },
    {
      path: '/doc/elementuiformat',
      name: 'elementuiformat',
      component: ElementUIFormat
    },
    {
      path: '/doc/design',
      name: 'design',
      component: Design
    },
    {
      path: '/doc/webstandard',
      name: 'webstandard',
      component: WebStandard
    },
    { path: '*', component: Silingsi },
  ]
})

//登录拦截
router.beforeEach((to, from, next) => {
  if (JSON.parse(sessionStorage.getItem("userInfo")) && to.meta.permission && !to.meta.permission.includes(Number(JSON.parse(sessionStorage.getItem("userInfo")).role))) {
    //如果登录账户没有某个权限的页面，则输入该页面地址返回404；
    let url = to.fullPath.split("/")[1];
    if (url) {
      next({
        path: url + "/*"
      });
    } else {
      next({
        path: "/silingsi"
      });
    }
  }
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.matched.length === 0) {
    //如果未匹配到路由
    if (from.path) {
      next({ path: from.path });
    } else {
      next("/login");
    }
    //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else if (to.meta.requireAuth) {
    //是否存在登录的标志
    if (localStorage.getItem("hasLogin")) {
      next();
    } else {
      next({
        path: "/login"
      });
    }
  } else {
    next();
  }
});
export default router;
