<template>
  <div class="px-5">
    <h1 class="text-3xl font-bold pt-8 pb-4">推荐</h1>
    <Banner type="common" slidesPerView="auto" />
    <Personalized />
    <PersonalizedNewSong />
    <Mv />
    <DjProgram />
  </div>
</template>

<script setup lang="ts">
import Banner from '@/components/common/Banner.vue'
import Personalized from '@/views/discover/Personalized.vue'
import PersonalizedNewSong from '@/views/discover/PersonalizedNewSong.vue'
import Mv from '@/views/discover/Mv.vue'
import DjProgram from '@/views/discover/DjProgram.vue'
</script>

<style scoped lang="scss"></style>
