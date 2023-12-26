<template>
  <Swiper slides-per-group-auto slides-per-view="auto" :grab-cursor="true">
    <SwiperSlide v-for="banner in AllBanner" :key="banner.targetId">
      <img :src="banner.pic" class="banner-image" @click="onClick(banner)" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import { useCommonStore } from '@/stores/common'
import { usePlayerStore } from '@/stores/player'
import type { Banner } from '@/models/banner'
import { onMounted, ref, toRefs } from 'vue'

const { banners, DJBanners } = toRefs(useCommonStore())
const { getBanners, getDJBanners } = useCommonStore()

const swiperConfig = ref({
  slidesPerView: 4 // 默认展示四个，可根据需要调整
})

const AllBanner = ref<Banner[]>([])
const props = defineProps<{
  type: 'dj' | 'common'
}>()

onMounted(async () => {
  if (props.type === 'dj') {
    await getDJBanners()
    AllBanner.value = DJBanners.value
  } else if (props.type === 'common') {
    await getBanners()
    AllBanner.value = banners.value
  }
})

const { play } = usePlayerStore()

const onClick = (banner: Banner) => {
  if (banner.targetType === 1) {
    play(banner.targetId)
  }
}
</script>

<style scoped lang="scss">
.swiper {
  @apply -mx-2.5;
  .swiper-slide {
    @apply w-full lg:w-1/2 xl:w-1/3 px-2.5;
  }
}

.banner-image {
  @apply rounded-lg cursor-pointer transition-all object-cover;
  @apply hover:shadow hover:opacity-80;
}
</style>
