import axios from 'axios'

const request = axios.create({
    baseURL: '/api',
    timeout: 5000
})

/**request拦截器 */
request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    return config
}, error => {
    return Promise.reject(error)
})

/**response拦截器 */
request.interceptors.response.use(
    resposne => {
        let res = response.data
        //如果是返回文件
        if (response.config.responseType === 'blob') {
            return res
        }

        //兼容服务器返回的字符串
        if (typeof res === 'string') {
            res = res ? JSON.parse(res) : res
        }
        return res
    }, error => {
        console.log('err' + error)
        return Promise.reject(error)
    }
)

export default request