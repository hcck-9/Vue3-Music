<template>
  <div class="flex flex-col items-center pt-2">
    <div>
      <el-slider
        v-model="volume"
        vertical
        height="150px"
        :max="100"
        :min="0"
        size="small"
        :show-tooltip="false"
        :disabled="muted"
        @input="setVolume"
      />
    </div>
    <div class="text-sm mt-3">{{ volume }}</div>
    <div class="mt-2">
      <IconPark
        :icon="muted ? VolumeMute : VolumeSmall"
        size="16"
        theme="filled"
        class="hover-text"
        @click="toggleMuted"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { VolumeMute, VolumeSmall } from '@icon-park/vue-next'
import { toRefs } from 'vue'
import { usePlayerStore } from '@/stores/player'
import IconPark from '@/components/common/IconPark.vue'

const { volume, muted, toggleMuted, setVolume } = toRefs(usePlayerStore())
</script>

<style scoped lang="scss">
.el-popover.el-popper {
  min-width: auto;
}
</style>
