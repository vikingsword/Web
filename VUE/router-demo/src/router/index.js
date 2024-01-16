import VueRouter from "vue-router";
import Vue from 'vue'
import Discover from '@/components/Discover.vue'
import Friends from '@/components/Friends.vue'
import My from '@/components/My.vue'
import TopList from '@/components/TopList'
import PlayList from '@/components/PlayList'
import Product from '@/components/Product'

// 将 VueRouter 设置为 Vue 的插件
Vue.use(VueRouter)

const routes = new VueRouter({
    // 注意这里是routes不是router,指定hash属性与组件的对应关系
    routes: [
        {path: '/', redirect: '/discover'},
        {
            path: '/discover', 
            component: Discover,
            children: [
                {path: 'toplist', component: TopList},
                {path: 'playlist', component: PlayList}
            ]
        },
        {path: '/friends', component: Friends},
        {
            path: '/my', 
            component: My,
            children: [
                // 加上 props = true 要以属性的方式去获取
                {path: ":id", component: Product, props:true}
            ]
        }

    ]
})

// 将 router 对象导出后需要在 main.js 中导入使用
export default routes