<template>
  <Component
    :is="icon"
    :theme="theme"
    :size="size"
    :spin="spin"
    :fill="fill"
    :strokeLinecap="strokeLinecap"
    :strokeLinejoin="strokeLinejoin"
    :strokeWidth="strokeWidth"
  >
  </Component>
</template>

<script setup lang="ts">
import type { Icon } from '@icon-park/vue-next/lib/runtime'

defineProps<{
  icon: Icon
  theme?: 'outline' | 'filled' | 'two-tone' | 'multi-color'
  size?: number | string
  // 图标是否应该旋转
  spin?: boolean
  // 表示图标的填充颜色
  fill?: string | string[]
  // 绘制路径时线条末端的形状
  strokeLinecap?: 'butt' | 'round' | 'square'
  // 绘制路径时应用于线条交汇点的形状
  strokeLinejoin?: 'miter' | 'round' | 'bevel'
  // 表示图标的线条宽度
  strokeWidth?: number
}>()
</script>

<style scoped lang="scss"></style>
