// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import ElementUI from "element-ui"
import App from "./App.vue"
import router from "./router" //挂载路由
import store from "./vuex"
import i18n from "./i18n/i18n"
import globalPlugin from "./utils/global"
import permission from "./directive/permission/button"
import NProgress from "nprogress"
import axios from 'axios' //引入axios

import "nprogress/nprogress.css"
import "element-ui/lib/theme-chalk/index.css"
import "@/assets/iconfont/iconfont.css"
import "font-awesome/css/font-awesome.css"
import "@/router/permission"

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(globalPlugin)
Vue.use(permission)

NProgress.inc(0.2)
NProgress.configure({ easing: "ease", speed: 500, showSpinner: false })

/* 想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象 */
new Vue({
  el: "#app", //挂载到index.html
  router,
  store,
  i18n,
  render: h => h(App),
  components: {App},
  template: "<App/>"
})

// hfuujg