<template>
  <div class="px-2">
    <div>
      <div class="flex">
        <img :src="imgUrl" alt="" class="w-14 h-14" />
        <textarea
          class="area ml-4 pl-2 pt-1.5 bg-view"
          placeholder="评论"
          :value="comments"
          @input="handleInput"
        />
        <div class="triangle">
          <div class="triangle_inner"></div>
        </div>
      </div>
      <div class="ml-16 px-2 flex justify-between mt-1">
        <IconPark :icon="SmilingFace" size="18" />
        <div>
          <span class="mr-1 text-xs">{{ 140 - comments.length }}</span>
          <el-divider direction="vertical" />
          <button class="button-sc text-sm">评论</button>
        </div>
      </div>
    </div>
    <div class="text-sm mt-2">
      <template v-for="comment in playlistCommentList" :key="comment.commentId">
        <CommentItem :comment="comment" />
      </template>
    </div>
    <div class="flex justify-center py-5" v-if="more">
      <el-button link class="text-center w-full" @click="loadMore" :loading="loading"
        >加载更多</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { SmilingFace } from '@icon-park/vue-next'
import { ref } from 'vue'
import IconPark from '@/components/common/IconPark.vue'
import { storeToRefs } from 'pinia'
import { useCommentStore } from '@/stores/comment'
import CommentItem from '@/components/common/CommentItem.vue'

const { playlistCommentList, more, loading } = storeToRefs(useCommentStore())
const { getPlaylistCommentList } = useCommentStore()

const page = ref(1)
const limit = ref(20)

const comments = ref<string>('')
const imgUrl = ref<string>(
  'https://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50'
)

// 处理输入事件
const handleInput = (event) => {
  if (comments.value.length >= 140) {
    // 如果已经达到限制长度，阻止继续输入
    event.preventDefault()
  }
}

const props = defineProps<{
  id: number
}>()

const loadMore = () => {
  getPlaylistCommentList(props.id, limit.value, page.value + 1)
}
</script>

<style scoped lang="scss">
.area {
  width: 100%;
  height: 50px;
  display: block;
  border: 1px solid #cdcdcd;
  line-height: 19px;
  box-sizing: content-box;
  resize: none;
  outline: none;
}
.triangle {
  margin: 0px;
  border-width: 10px;
  border-style: solid;
  border-color: transparent #cdcdcd transparent transparent;
  padding: 0px;
  width: 0px;
  height: 0px;
  position: absolute;
  top: 15px;
  left: 61px;
}
.triangle_inner {
  margin: 0px;
  border-width: 9px;
  border-style: solid;
  border-color: transparent white transparent transparent;
  padding: 0px;
  width: 0px;
  height: 0px;
  left: -7px;
  top: -9px;
  position: absolute;
}
.dark {
  .triangle_inner {
    border-color: transparent black transparent transparent;
  }
}
</style>
