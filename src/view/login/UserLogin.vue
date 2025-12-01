<script setup lang="ts">
import { reactive } from 'vue'

const loginForm = reactive({
  username: "",
  password: ""
})
</script>

<template>
  <div>
    <el-card>
      <el-form label-width="auto" style="max-width: 500px">
        <el-form-item label="用户名">
           <el-input v-model="loginForm.username" />
        </el-form-item>

        <el-form-item label="密码">
           <el-input v-model="loginForm.password" type="password"/>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>


<style scoped lang="scss"></style>
