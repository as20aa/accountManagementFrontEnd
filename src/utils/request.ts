/**request.ts use to send request to the backend */
import axios from 'axios'

const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,// the baseUrl which we send the request
    timeout: 5000
})

console.log(import.meta.env.VITE_BASE_URL)//这里的环境变量出现读取不到的问题
console.log(import.meta.env.MODE)
console.log(import.meta.env.BASE_URL)
console.log(import.meta.env.VITE_HI)

/**request拦截器 */
request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';// only useful when the request is post
    return config
}, error => {
    return Promise.reject(error) // error process
})

/***response处理器*/
request.interceptors.response.use(response => {//use this to process the responce code, which can implement a messsage
    // box when get some error
    return response.data
})

export default request