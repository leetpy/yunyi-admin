<script setup lang="ts">
import AsideIndex from './aside/AsideIndex.vue'
import HeaderIndex from './header/HeaderIndex.vue'
</script>

<template>
  <div class="flex w-full h-full">
    <!-- left menu -->
    <div class="aside">
      <aside-index />
    </div>

    <!-- content part -->
    <div class="flex flex-col w-full">
      <header-index />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
