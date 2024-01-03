<template>
  <div>
    <Title title="推荐电台" :hasRight="true" />
    <div class="grid grid-flow-row grid-cols-3 lg:grid-cols-6 gap-5">
      <div
        v-for="item in personalizedDjProgram"
        :key="item.id"
        @click="
          router.push({
            name: Pages.djDetail,
            query: {
              id: item.id
            }
          })
        "
      >
        <CoverPlay :pic-url="item.picUrl" :name="item.name" :play-count="0" />
        <div class="truncate text-xs mt-2">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from '@/components/common/Title.vue'
import { onMounted, toRefs } from 'vue'
import CoverPlay from '@/components/common/CoverPlay.vue'
import { useDJStore } from '@/stores/dj'
import { useRouter } from 'vue-router'
import { Pages } from '@/router/pages'

const router = useRouter()

const { personalizedDjProgram } = toRefs(useDJStore())

const { getPersonalizedDjProgram } = useDJStore()

const log = (id) => {
  console.log(id)
}

onMounted(() => {
  getPersonalizedDjProgram()
})
</script>

<style scoped lang="scss"></style>
