<template>
  <div class="flex mt-2 py-2 text-xl items-center">
    <div>{{ title }}</div>
    <IconPark :icon="Right" size="25" :stroke-width="2" v-if="hasRight" />
  </div>
</template>

<script setup lang="ts">
import { Right } from '@icon-park/vue-next'
import IconPark from '@/components/common/IconPark.vue'

defineProps<{
  title: string
  hasRight?: boolean
}>()
</script>

<style scoped lang="scss"></style>
