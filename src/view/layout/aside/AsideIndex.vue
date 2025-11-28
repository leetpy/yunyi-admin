<script setup lang="ts">
import { computed, ref } from 'vue'
import { useMenuStore } from '@/stores'

const menuStore = useMenuStore()

const layoutSideWidth = computed(() => {
  if (!menuStore.isCollapse) {
    return '256px'
  } else {
    return '80px'
  }
})
const activeIndex = ref('2')
</script>

<template>
  <div
    class="flex flex-col h-full aside"
    :style="{
      width: layoutSideWidth,
    }"
  >
    <div class="w-full flex justify-center items-center aside-logo">
      <div></div>
      <div v-if="!menuStore.isCollapse" class="text-white text-xl font-bold">Yunyi Admin</div>
    </div>
    <div class="flex-1">
      <el-menu
        :collapse="menuStore.isCollapse"
        :collapse-transition="false"
        :default-active="activeIndex"
        class="w-full h-full menu"
      >
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
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
  }
}
</style>
