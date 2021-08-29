import Vue from 'vue'
import Router from 'vue-router'

import login from '@/views/login/login'
import test from "@/views/test/test";

Vue.use(Router)

const routes = [

    // 登录页面
    {
        path: '/',
        component: login
    },

    // 测试页面
    {
        path: '/test',
        component: test
    }



]

export default new Router({

    // 去掉url中的#
    mode: 'history',

    routes

})

