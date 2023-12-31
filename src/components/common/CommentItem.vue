<template>
  <div class="flex py-3 border-top">
    <img :src="props.comment.user.avatarUrl" alt="" class="w-14 h-14 object-cover" />
    <div class="ml-3 w-full flex flex-col justify-between">
      <div class="text-xs">
        <span class="text-blue-400 cursor-pointer">{{ props.comment.user.nickname }}</span>
        : <span>{{ props.comment.content }}</span>
      </div>
      <div class="flex justify-between text-xs">
        <span>{{ convertTimestampToTime(props.comment.time) }} </span>
        <div class="flex items-center">
          <IconPark :icon="ThumbsUp" size="16" />
          <span v-if="props.comment.likedCount > 0" class="ml-1.5">
            {{ `(${props.comment.likedCount})` }}</span
          >
          <el-divider direction="vertical" />
          <span class="cursor-pointer">回复</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ThumbsUp } from '@icon-park/vue-next'
import type { PlayListComment } from '@/models/comment'
import { convertTimestampToTime } from '@/utils/number'
const props = defineProps<{
  comment: PlayListComment
}>()
</script>

<style scoped lang="scss">
.border-top {
  border-top: 1px dotted #ccc;
}
</style>
