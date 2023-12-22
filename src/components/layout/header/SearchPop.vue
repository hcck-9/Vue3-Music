<template>
  <el-popover popper-style="max-width:auto;padding:0;" width="250px">
    <template #reference>
      <el-input
        v-model="input2"
        clearable
        placeholder="搜索音乐、MV、歌单"
        @input="searchInput"
        :prefix-icon="Search"
      />
    </template>
  </el-popover>
</template>

<script setup lang="ts">
import { Search } from '@icon-park/vue-next'
import { ref } from 'vue'
// 防抖动函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法
import { debounce } from 'lodash'

const suggest = () => {}
const input2 = ref('')
const searchInput = debounce((value: string | number) => suggest(), 500, { maxWait: 1000 })
</script>

<style scoped lang="scss">
:deep(.el-input__prefix-inner) {
  font-size: 14px;
}
</style>
