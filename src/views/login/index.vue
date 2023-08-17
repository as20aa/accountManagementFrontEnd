<template>
    <el-form :model="form" label-width="120px" ref="formRef">
        <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm(formRef)" round>登录</el-button>
            <el-button @click="resetForm(formRef)" round>重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script setup lang="ts">
import {reactive} from 'vue'
import type {FormInstance} from 'element-plus'
import type { AccountVO } from '@/api/authenrication/index.ts' // you should use {} to import when you don't provide the export default
import { login } from '@/api/authenrication/index.ts'

const form = reactive({
    name: '',
    password: ''
})

const submitForm = (formEl: FormInstance | undefined) => {
    const accountVO: AccountVO = {
        phone: form.name,
        pwd: form.password,
    }
    login(accountVO).then((resp)=>{//you must have the then operation, this request will not pendings
        // 识别是否为200的响应码
        if(resp.status === 200) {
            console.log('login successed!')
            // jump to the dashboard
        }
        // if login success, just jump to the dashboard view
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    form.name = ''
    form.password = ''
}
</script>