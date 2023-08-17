import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { Response } from '@/utils/response'


export class Request {
    instance: AxiosInstance
    baseConfig: AxiosRequestConfig = { baseURL: '/api', timeout: 6000}

    
    constructor(config: AxiosRequestConfig) {
        //使用axios.create创建实例
        this.instance = axios.create(Object.assign(this.baseConfig, config))

        // 创建请求拦截器
        this.instance.interceptors.request.use(
            (config) => {
                return config
            },
            (err: any) => {
                console.log(err)
                return Promise.reject(err)
            }
        )

        // 创建响应拦截器
        this.instance.interceptors.response.use(
            (res: AxiosResponse) => {
                return res;
            },
            (err: any) => {
                console.log(err)
                return Promise.reject(err)
            }
        )
    }
    
    // 创建常用的方法
    public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
        return this.instance.request(config)
    }

    public get<T = any>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<Response<T>>> {
        return this.instance.get(url, config)
    }

    public post<T = any>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig,
    ): Promise<AxiosResponse<Response<T>>> {
        return this.instance.post(url, data, config)
    }

    public put<T = any>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig,
    ): Promise<AxiosResponse<Response<T>>>{
        return this.instance. put(url, data, config)
    }

    public delete<T = any>(
        url:string,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<Response<T>>> {
        return this.instance.delete(url, config)
    }
        
}

// 导出默认的request实例
export default new Request({})