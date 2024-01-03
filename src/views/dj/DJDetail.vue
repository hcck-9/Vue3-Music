<template>
  <div class="playlist">
    <div class="p-5" v-if="djDetail">
      <Info :djDetail="djDetail" :play-all="() => playAll()" />
      <el-tabs v-model="tab" class="mt-3">
        <el-tab-pane lazy :label="`歌曲 ${songs.length}`" name="tracks">
          <SongList :songs="songs" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Program } from '@/models/dj'
import Info from '@/views/dj/Info.vue'
import { useDJDetail } from '@/utils/api'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { usePlayerStore } from '@/stores/player'
import type { Song } from '@/models/song'
import SongList from '@/views/dj/SongsList.vue'
const route = useRoute()
const tab = ref('tracks')

const id = Number(route.query.id)
const djDetail = ref<Program>()
const songs = ref<Song[]>([])

const { pushPlayList, play } = usePlayerStore()

const playAll = () => {
  pushPlayList(true, ...songs.value)
  play(songs.value.first().id)
}

onMounted(async () => {
  djDetail.value = await useDJDetail(id)
  songs.value = djDetail.value.songs
})
</script>

<style scoped lang="scss"></style>
