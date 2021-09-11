// 引入axios库
import axios from 'axios'
import {getToken} from "@/utils/auth";

// 创建axios实例
const service =axios.create({

    // 'baseURL' 将自动加在 'url'
    baseURL: 'http://localhost:8080',

    // 'timeout' 指定请求超时的毫秒数，如果请求话费了超过 'timeout' 的时间，请求将被中断
    timeout: 10000
})

// 创建请求拦截器
service.interceptors.request.use(config => {

    if (getToken()) {
        config.headers['Authorization'] = 'Bearer ' + getToken()
    }

    return config;

})


export default service
