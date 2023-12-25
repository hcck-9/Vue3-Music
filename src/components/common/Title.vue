<template>
  <div class="flex mt-2 py-2 text-xl items-center">
    <div>{{ title }}</div>
    <IconPark :icon="Right" size="25" :stroke-width="2" />
  </div>
</template>

<script setup lang="ts">
import { Right } from '@icon-park/vue-next'
import IconPark from '@/components/common/IconPark.vue'

defineProps<{
  title: string
}>()
</script>

<style scoped lang="scss"></style>
