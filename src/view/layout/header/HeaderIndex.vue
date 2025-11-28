<script setup lang="ts">
import { ref } from 'vue'
import { Fold } from '@element-plus/icons-vue'
import { useMenuStore } from '@/stores'

const nickname = ref('Admin')

// 菜单折叠
const menuCollapse = () => {
  const menuStore = useMenuStore()
  menuStore.isCollapse = !menuStore.isCollapse
}

const defaultAvatar = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
</script>

<template>
  <div class="w-full bg-white flex items-center justify-between top-header">
    <!-- left -->
    <div class="flex items-center">
      <div>
        <el-button type="text" size="large" @click="menuCollapse">
          <el-icon color="black"><Fold /></el-icon>
        </el-button>
      </div>

      <div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">promotion management</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>

    <!-- right -->
    <div>
      <!-- avatar -->
      <div class="user-info">
        <el-dropdown ref="user-dropdown" style="margin-right: 30px">
          <div class="flex items-center">
            <el-avatar :src="defaultAvatar" />
            <span class="ml-2">{{ nickname }}</span>
          </div>

          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-header {
  height: 64px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.user-info {
  height: 100%;
  width: auto;
  padding: 0 12px;
  &:hover {
    background-color: #f8fafc88;
    border: none;
  }
}
</style>
