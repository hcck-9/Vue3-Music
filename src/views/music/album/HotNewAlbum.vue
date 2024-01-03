<template>
  <Title title="热门新碟" :hasRight="true" />
  <div class="grid grid-flow-row grid-cols-5 lg:grid-cols-10 gap-5">
    <div
      v-for="item in albumHotNew"
      :key="item.albumId"
      @click="router.push({ name: Pages.albumDetail, query: { id: item.albumId } })"
    >
      <CoverPlay :pic-url="item.coverUrl" />
      <div class="truncate text-sm text-main mt-2">{{ item.albumName }}</div>
      <div class="truncate text-xs text-main mt-2 text-dc">{{ item.artistName }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from '@/components/common/Title.vue'
import { onMounted, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useAlbumStore } from '@/stores/album'
const router = useRouter()
import { Pages } from '@/router/pages'

const { albumHotNew } = toRefs(useAlbumStore())

const { getAlbumHotNew } = useAlbumStore()

onMounted(() => {
  getAlbumHotNew()
})
</script>

<style scoped lang="scss"></style>
