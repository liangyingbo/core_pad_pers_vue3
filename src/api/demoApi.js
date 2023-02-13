/**
 * 测试请求是否能发成功
 */

import http from '@/plugins/axios'

function demoHttp() {
    return http.request({
        url: "/test"
    })
}

function getImgs(){
    return http.request({
        url:"/imgs"
    })
}

export { demoHttp ,getImgs}
