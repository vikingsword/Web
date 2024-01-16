import VueRouter from "vue-router";
import Vue from 'vue'
import Discover from '@/components/Discover.vue'
import Friends from '@/components/Friends.vue'
import My from '@/components/My.vue'

// 将 VueRouter 设置为 Vue 的插件
Vue.use(VueRouter)

const router = new VueRouter({
    router: [
        {path: '/discover', component: Discover},
        {path: '/friends', component: Friends},
        {path: '/my', component: My}

    ]
})