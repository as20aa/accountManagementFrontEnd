/**request.ts use to send request to the backend */
import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

type Result<T> = {
    code:number;
    message: string;
    data: T;
};

// 导出request类
export class Request {
    instance: AxiosInstance;
    baseConfig: AxiosRequestConfig = { baseURL: import.meta.env.VITE_BASE_URL, timeout: 6000};
    constructor(config: AxiosRequestConfig) {
        // 使用axios.create来创建axios实例
        this.instance = axios.create(Object.assign(this.baseConfig, config));

        this.instance.interceptors.request.use(
            (config) => {
                return config;
            },
            (err: any) => {
                return Promise.reject(err)
            }
        );

        this.instance.interceptors.response.use(
            (res: AxiosResponse) => {
                console.log(res)
                return res;
            },
            (err: any) => {
                let message = ''
                switch(err.response.status) {
                    case 400:
                        message='请求错误(400)'
                        break
                    case 401:
                        message='未授权，请重新登录'
                        break
                    deafult:
                        message = '连接出错'
                }
                return Promise.reject(err.response)
            }
        );
    }

    // 定义请求方法
    public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
        return this.instance.request(config)
    }

    public get<T = any>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<Result<T>>> {
        return this.instance.get(url, config)
    }

    public post<T = any>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<Result<T>>> {
        return this.instance.post(url, data, config)
    }

    public put<T = any>(
        url: string,
        data?:any,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<Result<T>>>{
        return this.instance.put(url, data, config)
    }

    public delete<T = any>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<Result<T>>>{
        return this.instance.delete(url, config)
    }
}


//导出默认的实例
export default new Request({})