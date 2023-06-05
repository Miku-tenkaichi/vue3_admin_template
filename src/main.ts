import { createApp } from 'vue'
import App from '@/App.vue'
//引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//配置element-plus国际化
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)

app.use(ElementPlus, {
    locale: zhCn,
})
//svg插件配置
import 'virtual:svg-icons-register'

//引入自定义插件对象
import globalComponent from '@/components'
//安装自定义插件
app.use(globalComponent)

//引入全局样式
import '@/styles/index.scss'

app.mount('#app')
