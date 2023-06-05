<script setup lang="ts">
import { onMounted } from 'vue'
import { reqLogin } from './api/user'
onMounted(() => {
    reqLogin({ username: 'admin', password: '111111' })
})
const a = 1
console.log(a)
</script>
<template>
    <h1>
        <el-button type="primary">Primary</el-button>
    </h1>
    <svg-icon name="phone" color="pink" width="100px" height="100px"></svg-icon>
</template>
<style scoped lang="scss"></style>
