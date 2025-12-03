<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Fold } from '@element-plus/icons-vue'
import { useMenuStore } from '@/stores'

const route = useRoute()
const nickname = ref('Admin')

// 菜单折叠
const menuCollapse = () => {
  const menuStore = useMenuStore()
  menuStore.isCollapse = !menuStore.isCollapse
}

const defaultAvatar = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'

const breadcrumbList = computed(() => {
  return route.matched
    .filter((item) => item.meta.title && item.meta.breadcrumb !== false)
    .map((item) => ({
      ...item,
      // 可选：如果 path 是动态路由（如 /user/detail/123），保留原始 path
      path: item.path.includes(':') ? undefined : item.path,
    }))
})

// 退出登录
const handleLogout = () => {}
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
          <el-breadcrumb-item
            v-for="(item, index) in breadcrumbList"
            :key="index"
            :to="{ path: item.path }"
            replace
          >
            {{ item.meta.title }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>

    <!-- right -->
    <div>
      <!-- avatar -->
      <div class="h-full user-info">
        <el-dropdown ref="user-dropdown" style="margin-right: 30px">
          <div class="flex items-center">
            <el-avatar :src="defaultAvatar" />
            <span class="ml-2">{{ nickname }}</span>
          </div>

          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item icon="User">个人中心</el-dropdown-item>
              <el-dropdown-item icon="Setting">设置</el-dropdown-item>
              <el-dropdown-item icon="Guide" @click="handleLogout">退出登录</el-dropdown-item>
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
