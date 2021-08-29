import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/login/submit',
        method: 'post',
        data
    })
}

export function getCaptcha() {

    return request({
        url: '/register/test',
        method: 'get'
    })

}

// 调用测试接口
export function testAPI() {

    return request({
        url: '/kaptcha/getCode',
        method: 'get'
    })

}

