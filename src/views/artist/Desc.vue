<template>
  <div v-loading="!artistDesc" style="min-height: 200px">
    <div class="text-xs leading-7 text-slate-500" v-if="artistDesc && artistDesc?.briefDesc">
      {{ artistDesc.briefDesc }}
    </div>
    <div
      v-if="artistDesc && artistDesc?.introduction?.length > 0"
      v-for="item in artistDesc?.introduction"
    >
      <div class="py-5 font-bold text-sm">{{ item.ti }}</div>
      <div
        class="text-xs text-slate-500 leading-7"
        style="white-space: pre-wrap"
        v-html="item.txt"
      />
    </div>
    <el-empty description="暂无数据" v-else />
  </div>
</template>

<script setup lang="ts">
import type { ArtistDesc } from '@/models/artist_detail'
import { useArtistDesc } from '@/utils/api'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps<{ id: number }>()

const artistDesc = ref<ArtistDesc>()

onMounted(async () => {
  artistDesc.value = await useArtistDesc(props.id)
})
</script>

<style scoped lang="scss"></style>
