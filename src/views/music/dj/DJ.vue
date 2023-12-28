<template>
  <Banner type="dj" />
  <TodayPreferred />
  <DJPersonalizedRecommend />
</template>

<!-- 今日优选 -->
<script setup lang="ts">
import Banner from '@/components/common/Banner.vue'
import DJPersonalizedRecommend from '@/views/music/dj/DJPersonalizedRecommend.vue'
import TodayPreferred from '@/views/music/dj/TodayPreferred.vue'
</script>

<style scoped lang="scss"></style>
