<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMenuStore } from '@/stores'
import { menus } from '@/router/menu'

const router = useRouter()
const menuStore = useMenuStore()

const layoutSideWidth = computed(() => {
  if (!menuStore.isCollapse) {
    return '256px'
  } else {
    return '80px'
  }
})
const activeIndex = ref('2')

const handleSelect = (path: string) => {
  router.push({ name: path })
}
</script>

<template>
  <div
    class="flex flex-col h-full aside"
    :style="{
      width: layoutSideWidth,
    }"
  >
    <div class="w-full flex justify-center items-center aside-logo">
      <img class="logo-img" src="@/assets/logo.png" />
      <div v-if="!menuStore.isCollapse" class="ml-2 text-white text-2xl font-bold">Yunyi Admin</div>
    </div>
    <div class="flex-1">
      <el-menu
        :collapse="menuStore.isCollapse"
        :collapse-transition="false"
        :default-active="activeIndex"
        @select="handleSelect"
        class="w-full h-full menu"
      >
        <template v-for="m in menus">
          <!-- 有子菜单的情况 -->
          <el-sub-menu
            v-if="m.children && m.children.length"
            :key="'sub-' + m.path"
            :index="m.path"
          >
            <template #title>
              <el-icon v-if="m.meta?.icon">
                <component :is="m.meta.icon"></component>
              </el-icon>
              <span>{{ m.meta?.title }}</span>
            </template>

            <el-menu-item v-for="child in m.children" :key="child.path" :index="child.path">
              <el-icon v-if="child.meta?.icon">
                <component :is="child.meta.icon"></component>
              </el-icon>
              <span>{{ child.meta?.title }}</span>
            </el-menu-item>
          </el-sub-menu>

          <!-- 没有子菜单的情况 -->
          <el-menu-item v-else :key="m.name" :index="m.name">
            <el-icon v-if="m.meta?.icon" color="#fff">
              <component :is="m.meta.icon"></component>
            </el-icon>
            <span>{{ m.meta!.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<style scoped lang="scss">
.aside {
  width: 256px;
  background-color: #191a23;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);

  .aside-logo {
    border-bottom: 1px solid #101117;
    background: #191a23;
    height: 63px;

    .logo-img {
      height: 40px;
      width: 57px;
    }
  }

  .menu {
    --el-menu-text-color: #ffffffb2;
    --el-menu-bg-color: #191a23;
    --el-menu-active-color: #fff;
    --el-menu-hover-bg-color: #191a23;
    border-right: none;

    .is-active {
      background-color: #2d8cf0;
    }

    :deep(.is-opened) {
      background-color: #191a23 !important;
    }
  }
}
</style>
