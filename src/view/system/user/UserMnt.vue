<script setup lang="ts">
import { ref } from 'vue'

const data = ref([
  {
    username: 'Tom',
    state: '正常',
    createAt: '2025-10-01',
  },
])
</script>

<template>
  <div>
    <el-card class="w-full">
      <div>
        <el-button type="primary">添加用户</el-button>
        <el-button type="danger">批量删除</el-button>
      </div>
      <el-table :data="data" class="mt-2">
        <el-table-column type="selection" width="55" />
        <el-table-column prop="username" label="用户码" width="180" />
        <el-table-column prop="state" label="状态" width="180" />
        <el-table-column prop="createAt" label="创建时间" width="180" />
        <el-table-column fixed="right" label="操作" min-width="120">
          <template #default>
            <el-button link type="primary" size="small"> Detail </el-button>
            <el-button link type="primary" size="small">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<style scoped lang="scss"></style>
