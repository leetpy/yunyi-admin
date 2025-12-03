<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref<HTMLDivElement>()
let chart: echarts.ECharts | null = null

// 可监听的数据（示例）
const data = [120, 200, 150, 80, 70, 110, 130]

// 图表配置项
const option = {
  tooltip: {},
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: { type: 'value' },
  series: [
    {
      data,
      type: 'bar',
    },
  ],
}

onMounted(() => {
  if (chartRef.value) {
    chart = echarts.init(chartRef.value)

    chart.setOption(option)

    // ⭐ 自动跟随容器大小变化
    window.addEventListener('resize', resizeChart)
  }
})

// 自动适配大小
const resizeChart = () => {
  chart?.resize()
}

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeChart)
  chart?.dispose()
})
</script>

<template>
  <div>
    <div class="w-full flex flex-col bg-white shadow hover:shadow-lg">
      <div class="h-8 flex items-center">
        <div class="h-full">最近1小时访问情况</div>
      </div>
      <el-divider />
      <div ref="chartRef" class="flex-1" style="width: 100%; height: 400px"></div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
