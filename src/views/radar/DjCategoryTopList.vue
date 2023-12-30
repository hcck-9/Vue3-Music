<template>
  <div class="grid grid-cols-2 gap-20 px-10">
    <DJHotOrPremiumList :title="'节目排行榜'" :hot="true" class="col-span-1" />
    <DJHotOrPremiumList :title="'付费精品'" :hot="false" class="col-span-1" />
  </div>
</template>

<script setup lang="ts">
import DJHotOrPremiumList from '@/views/radar/DJHotOrPremiumList.vue'
</script>

<style scoped lang="scss"></style>
