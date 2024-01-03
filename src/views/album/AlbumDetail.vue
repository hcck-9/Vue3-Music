<template>
  <div class="p-5" v-if="albumData">
    <Info :album="albumData" :songList="songList" />
    <el-tabs class="mt-3" v-model="tab">
      <el-tab-pane lazy :label="`歌曲 ${songList.length}`" name="songs">
        <div class="flex text-xs text-gray-400 py-2">
          <div class="flex-auto">歌曲</div>
          <div class="w-1/3">歌手</div>
          <div class="w-20">时长</div>
        </div>
        <template v-for="song in songList" :key="song.id">
          <SongListItem :song="song" show-ar-name :dj="false" />
        </template>
      </el-tab-pane>
      <el-tab-pane lazy :label="`评论  ${playlistCommentCount}`" name="comments">
        <CommentList :id="id" />
      </el-tab-pane>
      <el-tab-pane lazy label="专辑详情" name="desc">
        <div
          class="text-xs text-slate-500 leading-7"
          style="white-space: pre-wrap"
          v-html="albumData?.description"
        ></div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import type { Album } from '@/models/album'
import type { Song } from '@/models/song'
import { useAlbum } from '@/utils/api'
import SongListItem from '@/components/common/SongListItem.vue'
import { onMounted, ref } from 'vue'
import Info from '@/views/album/Info.vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCommentStore } from '@/stores/comment'
import { usePlayerStore } from '@/stores/player'
import CommentList from '@/views/playlist/CommentList.vue'
const route = useRoute()
const id = Number(route.query.id)

const albumData = ref<Album>()
const songList = ref<Song[]>([])
const tab = ref('songs')

const { playlistCommentCount } = storeToRefs(useCommentStore())
const { getPlaylistCommentList } = useCommentStore()

onMounted(async () => {
  const { album, songs } = await useAlbum(id)
  await getPlaylistCommentList(id)
  albumData.value = album
  songList.value = songs
})
</script>

<style scoped lang="scss"></style>
