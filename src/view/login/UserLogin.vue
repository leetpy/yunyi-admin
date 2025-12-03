<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import { Lock, User } from '@element-plus/icons-vue'

const ruleFormRef = ref<FormInstance>()

interface LoginRuleForm {
  username: string
  password: string
}

const loginForm = reactive<LoginRuleForm>({
  username: 'admin',
  password: 'admin',
})

const rules = reactive<FormRules<LoginRuleForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在3-20个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入登录密码', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在3-20个字符', trigger: 'blur' },
  ],
})

// 表单提交交验
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      await handleLogin()
    } else {
      console.log('error submit!', fields)
    }
  })
}

const router = useRouter()

const handleLogin = async () => {
  await router.push({ name: 'home' })
}
</script>

<template>
  <div class="h-full flex flex-col justify-center items-center">
    <div class="w-96">
      <div class="text-2xl">后台管理系统</div>
      <el-form
        class="mt-8"
        ref="ruleFormRef"
        :rules="rules"
        :model="loginForm"
        label-width="auto"
        style="max-width: 500px"
      >
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" :prefix-icon="User" />
        </el-form-item>

        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" :prefix-icon="Lock" />
        </el-form-item>

        <el-form-item>
          <el-button class="w-96" type="primary" @click="submitForm(ruleFormRef)"> 登录 </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
