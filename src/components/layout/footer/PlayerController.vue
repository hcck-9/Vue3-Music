<template>
  <div class="flex items-center justify-center gap-x-3">
    <IconPark
      :icon="loopType === 0 ? PlayOnce : loopType === 1 ? LoopOnce : ShuffleOne"
      size="20"
      :stroke-width="3"
      class="hover-text"
      @click="toggleLoop"
    />
    <IconPark :icon="GoStart" size="28" theme="filled" class="hover-text" @click="prev" />
    <IconPark
      :icon="isPause ? Play : PauseOne"
      size="45"
      theme="filled"
      class="hover-text text-emerald-400"
      @click="togglePlay"
    />
    <IconPark :icon="GoEnd" size="28" theme="filled" class="hover-text" @click="next" />
    <el-popover placement="top" width="150px">
      <template #reference>
        <IconPark :icon="VolumeSmall" size="20" :stroke-width="3" class="hover-text" />
      </template>
      <PlayerVolumeSlider />
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import {
  Play,
  PauseOne,
  LoopOnce,
  ShuffleOne,
  PlayOnce,
  GoEnd,
  GoStart,
  VolumeSmall
} from '@icon-park/vue-next'
import IconPark from '@/components/common/IconPark.vue'
import { usePlayerStore } from '@/stores/player'
import { toRefs } from 'vue'
import PlayerVolumeSlider from '@/components/layout/footer/PlayerVolumeSlider.vue'

const { loopType, isPause, toggleLoop, next, prev, togglePlay } = toRefs(usePlayerStore())
</script>

<style scoped lang="scss"></style>
