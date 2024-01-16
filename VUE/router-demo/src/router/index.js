import VueRouter from "vue-router";
import Vue from 'vue'
import Discover from '@/components/Discover.vue'
import Friends from '@/components/Friends.vue'
import My from '@/components/My.vue'

// 将 VueRouter 设置为 Vue 的插件
Vue.use(VueRouter)

const routes = new VueRouter({
    // 注意这里是routes不是router,指定hash属性与组件的对应关系
    routes: [
        {path: '/discover', component: Discover},
        {path: '/friends', component: Friends},
        {path: '/my', component: My}

    ]
})

// 将 router 对象导出后需要在 main.js 中导入使用
export default routes