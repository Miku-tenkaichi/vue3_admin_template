//引入全局组件
import SvgIcon from './SvgIcon/index.vue'
//全局对象
const allGlobalComponent: any = { SvgIcon }
export default {
    install(app: any) {
        //注册全部全局组件
        Object.keys(allGlobalComponent).forEach((key) => {
            app.component(key, allGlobalComponent[key])
        })
    },
}
