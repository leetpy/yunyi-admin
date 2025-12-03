<script setup lang="ts">
import AsideIndex from './aside/AsideIndex.vue'
import HeaderIndex from './header/HeaderIndex.vue'
import BootomInfo from '@/components/footer/BottomInfo.vue'
</script>

<template>
  <div class="flex w-full h-full">
    <!-- left menu -->
    <div class="aside">
      <AsideIndex />
    </div>

    <!-- content part -->
    <div class="flex flex-col w-full bg-slate-50">
      <HeaderIndex />
      <router-view class="flex-1 p-4" />

      <BootomInfo />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
