<template>
  <div>
    <Title title="独家放送" :hasRight="true" />
    <div class="grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-5">
      <div v-for="item in personalizedPrivateContent" :key="item.id">
        <CoverPlay :pic-url="item.sPicUrl" :name="item.name" video />
        <div class="truncate text-xs mt-2">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from '@/components/common/Title.vue'
import { onMounted, toRefs } from 'vue'
import CoverPlay from '@/components/common/CoverPlay.vue'
import { useVideoStore } from '@/stores/video'
import { useRouter } from 'vue-router'
const router = useRouter()

const { personalizedPrivateContent } = toRefs(useVideoStore())

const { getPersonalizedPrivateContent } = useVideoStore()

onMounted(() => {
  getPersonalizedPrivateContent()
})
</script>

<style scoped lang="scss"></style>
