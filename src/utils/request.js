// 引入axios库
import axios from 'axios'

//创建axios实例
const service =axios.create({

    //'baseURL' 将自动加在 'url'
    baseURL: 'http://localhost:8080',

    //'timeout' 指定请求超时的毫秒数，如果请求话费了超过 'timeout' 的时间，请求将被中断
    timeout: 10000,


})


export default service
