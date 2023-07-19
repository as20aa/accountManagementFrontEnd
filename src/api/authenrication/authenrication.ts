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

/***response处理器*/
