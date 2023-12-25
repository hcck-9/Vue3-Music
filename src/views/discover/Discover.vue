<template>
  <div class="px-5">
    <h1 class="text-3xl font-bold pt-8 pb-4">推荐</h1>
    <Banner />
    <Personalized />
    <PersonalizedNewSong />
    <Mv />
  </div>
</template>

<script setup lang="ts">
import Banner from '@/components/common/Banner.vue'
import Personalized from '@/views/discover/Personalized.vue'
import PersonalizedNewSong from '@/views/discover/PersonalizedNewSong.vue'
import Mv from '@/views/discover/Mv.vue'
</script>

<style scoped lang="scss"></style>
