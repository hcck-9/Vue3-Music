<template>
  <Swiper slides-per-group-auto slides-per-view="auto" :grab-cursor="true">
    <SwiperSlide v-for="banner in banners" :key="banner.bannerId">
      <img :src="banner.pic" class="banner-image" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import { useCommonStore } from '@/stores/common'
import { usePlayerStore } from '@/stores/player'
import type { Banner } from '@/models/banner'
import { onMounted, toRefs } from 'vue'

const { banners } = toRefs(useCommonStore())
const { getBanners } = useCommonStore()

onMounted(async () => {
  await getBanners()
})

const { play } = usePlayerStore()
</script>

<style scoped lang="scss">
.swiper {
  @apply -mx-2.5;
  .swiper-slide {
    @apply w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4 px-2.5;
  }
}

.banner-image {
  @apply rounded-lg cursor-pointer transition-all object-cover;
  @apply hover:shadow hover:opacity-80;
}
</style>
