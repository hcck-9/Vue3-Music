<template>
  <div class="grid grid-flow-row grid-cols-8 2xl:grid-cols-12 gap-2.5">
    <div class="button-dc" @click="catClick('全部')">全部</div>
    <div class="button-dc" v-for="tag in tags" :key="tag.id" @click="catClick(tag.name)">
      {{ tag.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { PlaylistHighqualityTag } from '@/models/playlist'
import { usePlaylistHighqualityTags } from '@/utils/api'
import { onMounted, ref } from 'vue'

const tags = ref<PlaylistHighqualityTag[]>()

const emit = defineEmits<{
  (e: 'catChange', cat: string): void
}>()

const catClick = (tag: string) => {
  emit('catChange', tag)
}

onMounted(async () => {
  tags.value = await usePlaylistHighqualityTags()
})
</script>

<style scoped lang="scss"></style>
