import request from '@/utils/request'

// 调用登录接口
export function login(data) {
    return request({
        url: '/login/submit',
        method: 'post',
        data
    })
}

// 调用验证码接口
export function getCaptchaData() {

    return request({
        url: '/kaptcha/getCode',
        method: 'get'
    })

}

// 调用新增用户接口
export function addUserAPI(data) {
    return request({
        url: '/user/add',
        method: 'post',
        data
    })
}

// 调用测试接口
export function testAPI() {

    return request({
        url: '/kaptcha/getCode',
        method: 'get'
    })

}

// 调用test/test01接口
export function requestToTest() {
    return request({
        url: '/test/test01',
        method: 'get'
    })

}

