<template>
  <div class="flex h-14 items-center justify-between drag">
    <div class="flex pl-5 items-center">
      <IconPark :icon="Left" :size="iconSize" :stroke-width="2" class="icon-button" />
      <IconPark :icon="Right" :size="iconSize" :stroke-width="2" class="icon-button" />
      <div class="search no-drag ml-2">
        <SearchPop />
      </div>
    </div>
    <div>2</div>
  </div>
</template>

<script setup lang="ts">
//引入字体图标，首字母大写
import { Left, Right } from '@icon-park/vue-next'
import IconPark from '@/components/common/IconPark.vue'
import SearchPop from '@/components/layout/header/SearchPop.vue'

const iconSize = 22
</script>

<style scoped lang="scss">
.icon-button {
  @apply p-2 cursor-pointer;
  @apply hover:text-emerald-400;
}
.search {
  @apply text-xs;
  :deep(.el-input__wrapper) {
    @apply rounded-full text-xs bg-slate-100 dark:bg-stone-900;
  }
}
</style>
