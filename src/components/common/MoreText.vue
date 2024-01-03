<template>
  <div class="leading-5">
    <span v-if="props.hasTag" class="outline mr-2">{{ props.tag }}</span>
    <template v-if="show">
      <span v-if="!isShow">{{ text.substring(0, end) }}...</span>
      <span v-else>{{ text }}...</span>
      <span class="ml-5 text-gray-700 hover-text" @click="isShow = !isShow"
        >[{{ isShow ? '收起' : '详情' }}]</span
      >
    </template>
    <template v-else>{{ text }}</template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
const isShow = ref(false)

const props = defineProps<{
  text: string
  end: number
  hasTag: boolean
  tag?: string
}>()
if (props.text && props.text.length > props.end) {
  show.value = true
}
</script>

<style scoped lang="scss">
.outline {
  color: rgb(52 211 153);
  border-color: rgb(52 211 153);
}
</style>
