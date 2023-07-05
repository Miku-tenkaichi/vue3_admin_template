import { defineStore } from 'pinia'
//引入接口
import { reqLogin } from '@/api/user'
//引入数据类型
import type { loginForm } from '@/api/user/type'
const useUserStore = defineStore('User', {
    state: () => {
        return {
            token: localStorage.getItem('TOKEN'),
        }
    },
    actions: {
        //用户登录
        async userLogin(data: loginForm) {
            const result: any = await reqLogin(data)
            if (result.code == 200) {
                this.token = result.data.token
                localStorage.setItem('TOKEN', result.data.token)
                //async返回成功的promise
                return 'ok'
            } else {
                return Promise.reject(new Error(result.data.message))
            }
        },
    },
    getters: {},
})
export default useUserStore
