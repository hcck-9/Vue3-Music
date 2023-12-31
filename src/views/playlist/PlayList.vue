<template>
  <div class="playlist">
    <div class="p-5" v-if="playlist">
      <Info :playlist="playlist" :play-all="() => playAll()" />
      <el-tabs v-model="tab" class="mt-3">
        <el-tab-pane lazy :label="`歌曲 ${songs.length}`" name="tracks">
          <SongList :songs="songs" />
        </el-tab-pane>
        <el-tab-pane lazy :label="`评论  ${playlistCommentCount}`" name="comments">
          <CommentList :id="id" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PlayListDetail } from '@/models/playlist'
import type { Song } from '@/models/song'
import { usePlayerStore } from '@/stores/player'
import { usePlayListDetail, usePlayListTrackAll } from '@/utils/api'
import Info from '@/views/playlist/Info.vue'
import SongList from '@/views/playlist/SongList.vue'
import CommentList from '@/views/playlist/CommentList.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCommentStore } from '@/stores/comment'
import { storeToRefs } from 'pinia'
const route = useRoute()

const tab = ref('tracks')

const playlist = ref<PlayListDetail>()
const songs = ref<Song[]>([])

const { pushPlayList, play } = usePlayerStore()
const { playlistCommentCount } = storeToRefs(useCommentStore())
const { getPlaylistCommentList } = useCommentStore()

const playAll = () => {
  pushPlayList(true, ...songs.value)
  play(songs.value.first().id)
}

const id: number = Number(route.query.id)

const getData = async () => {
  usePlayListDetail(id).then((res) => {
    playlist.value = res
  })
  usePlayListTrackAll(id).then((res) => {
    songs.value = res
  })
  await getPlaylistCommentList(id)
}
onMounted(getData)
</script>

<style scoped lang="scss">
.playlist {
  .el-tabs__nav-wrap::after {
    height: 0;
  }

  .el-tabs__header {
    @apply m-0;
  }
}
</style>
