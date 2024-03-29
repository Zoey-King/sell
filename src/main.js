// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'

import '../mock/mock'

Vue.use(VueRouter)

const routes = [
    { path: '/goods', component: goods },
    { path: '/ratings', component: ratings },
    // { path: '/seller', component: goods }
]

const router = new VueRouter({
    routes: routes, // routers简写
    mode: 'history',
})

new Vue({
    el: '#app',
    router, // 注入到根实例中
    render: h => h(App)
})
