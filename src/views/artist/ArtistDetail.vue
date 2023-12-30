<template>
  <div class="artist-detail p-5" v-if="artistDetail">
    <Info :artist-detail="artistDetail" />
    <el-tabs v-model="tab" class="mt-3">
      <el-tab-pane lazy label="精选" name="choice">精选 </el-tab-pane>
      <el-tab-pane lazy :label="`歌曲 ${artistDetail.artist.musicSize}`" name="music">
        <Songs :id="id" />
      </el-tab-pane>
      <el-tab-pane lazy :label="`专辑 ${artistDetail.artist.albumSize}`" name="album">
        <AlbumItem :id="id" />
      </el-tab-pane>
      <el-tab-pane lazy :label="`视频 ${artistDetail.artist.mvSize}`" name="mv">
        <Video :id="id" />
      </el-tab-pane>
      <el-tab-pane lazy label="详情" name="desc"> <Desc :id="id" /> </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ArtistDetail } from '@/models/artist_detail'
import { useArtistDetail } from '@/utils/api'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import Info from '@/views/artist/Info.vue'
import Songs from '@/views/artist/Songs.vue'
import AlbumItem from '@/views/artist/AlbumItem.vue'
import Video from '@/views/artist/Video.vue'
import Desc from '@/views/artist/Desc.vue'

const route = useRoute()
const id = Number(route.query.id)
const artistDetail = ref<ArtistDetail>()
const tab = ref('music')
onMounted(async () => {
  artistDetail.value = await useArtistDetail(id)
})
</script>

<style scoped lang="scss">
.artist-detail {
  .el-tabs__nav-wrap::after {
    height: 0;
  }

  .el-tabs__header {
    @apply m-0;
  }
}
</style>
