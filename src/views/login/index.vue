<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
//引入用户store
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
//获取路由器
let useStore = useUserStore()
const $router = useRouter()
//加载效果
let loading = ref(false)
let loginForm = reactive({ username: 'admin', password: '111111' })
//登录按钮
const login = async () => {
    loading.value = true
    try {
        await useStore.userLogin(loginForm)
        $router.push('/')
        ElNotification({
            type: 'success',
            message: '登陆成功',
        })
        loading.value = false
    } catch (error) {
        ElNotification({
            type: 'error',
            message: (error as Error).message,
        })
        loading.value = false
    }
}
</script>
<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login-form">
                    <h1>Hello</h1>
                    <h2>欢迎</h2>
                    <el-form-item>
                        <el-input
                            :prefix-icon="User"
                            v-model="loginForm.username"
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input
                            type="password"
                            :prefix-icon="Lock"
                            v-model="loginForm.password"
                            show-password
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button
                            :loading="loading"
                            class="login_btn"
                            type="primary"
                            @click="login"
                        >
                            登录
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<style scoped lang="scss">
.login_container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;

    .login-form {
        position: relative;
        width: 80%;
        top: 30vh;
        background: url('@/assets/images/login_form.png') no-repeat;
        background-size: cover;
        padding: 40px;

        h1 {
            color: white;
            font-size: 40px;
        }

        h2 {
            color: white;
            font-size: 20px;
            margin: 20px 0;
        }

        .login_btn {
            width: 100%;
        }
    }
}
</style>
