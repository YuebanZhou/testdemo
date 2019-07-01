// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import { routes } from "./routers";

import axios from 'axios'
// 设置原型，全局使用
Vue.prototype.$axios=axios

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    // return { x: 0, y: 100 };//定位到指定位置
    // return {selector:'.btn'};//定位到类名为btn的元素
    // 记住当前位置
    /*if (savedPosition) {
      return savePosition;
    } else {
      return { x: 0, y: 0 };
    }*/
  }
});

// 全局守卫
/*router.beforeEach((to, from, next) => {
  // 判断是否登录
  if (to.path == "/login" || to.path == "/register") {
    next();
  } else {
    alert("请先登录");
    next('/login');
  }
});*/

// 后置钩子
/*router.afterEach((to,from)=>{
  alert("after each")
})*/

/* eslint-disable no-new */
new Vue({
  el: "#app",
  VueRouter,
  router,
  components: { App },
  template: "<App/>"
});
