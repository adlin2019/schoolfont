import Vue from 'vue'
import Router from 'vue-router'

import login from '@/views/login/login'
import test from "@/views/test/test"
import index from "@/views/index/index"
import addUser from "@/views/test/addUser";

Vue.use(Router)

const routes = [

    // 登录页面
    {
        path: '/',
        component: login
    },

    // 测试页面1
    {
        path: '/test',
        component: test
    },

    // 测试页面2
    {
        path: '/addUser',
        component: addUser
    },

    // 主体页面
    {
        path: '/index',
        component: index
    }



]

export default new Router({

    // 去掉url中的#
    mode: 'history',

    routes

})

