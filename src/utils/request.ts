import axios from 'axios'
//@ts-ignore
import { ElMessage } from 'element-plus/es/components/index.js'

//创建axios实例，可以进行配置
const request = axios.create({
    //基础路径
    baseURL: import.meta.env.VITE_APP_BASE_API, //基础路径上会携带/api
    timeout: 5000, //超时时间
})
//添加请求响应拦截器
request.interceptors.request.use((config) => {
    config.headers.token = '123'
    return config
})
request.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        let message = ''
        const status = error.response.status
        switch (status) {
            case 401:
                message = 'TOKEN过期'
                break
            case 403:
                message = '无权访问'
                break
            case 404:
                message = '请求地址错误'
                break
            case 500:
                message = '服务器出现问题'
                break
            default:
                message = '网络出现问题'
                break
        }
        //提示错误信息
        ElMessage({
            type: 'error',
            message,
        })
        return Promise.reject(error)
    },
)
export default request
