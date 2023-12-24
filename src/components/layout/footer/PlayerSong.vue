<template>
  <div class="flex player-song">
    <img class="w-11 h-11 rounded" :src="song.al?.picUrl || OpticalDisk" alt="" />
    <div class="ml-2 text-xs flex flex-col justify-between">
      <div>
        <div
          v-if="songUrl.freeTrialInfo?.end > 0"
          class="bg-red-500 text-xs text-white rounded px-0.5 scale-75"
        >
          试听
        </div>
        <span>{{ song.name || '开源云音乐' }}</span>
        <span class="ml-2 text-dc"> - {{ song.ar?.first().name || '小天' }}</span>
      </div>
      <div class="flex gap-x-3 text-main">
        <IconPark
          :icon="Like"
          size="18"
          :stroke-width="3"
          class="text-slate-400 hover-text"
          title="添加到我喜欢"
        />
        <IconPark
          :icon="DownTwo"
          size="18"
          :stroke-width="3"
          class="text-slate-400 hover-text"
          title="下载该歌曲"
        />
        <IconPark
          :icon="MoreTwo"
          size="18"
          :stroke-width="3"
          class="text-slate-400 hover-text"
          title="更多"
        />
        <el-badge :value="undefined" :max="999" class="badge">
          <IconPark
            :icon="Comment"
            size="18"
            :stroke-width="3"
            class="text-slate-400 hover-text"
            title="评论"
          />
        </el-badge>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import IconPark from '@/components/common/IconPark.vue'
import { Like, DownTwo, MoreTwo, Comment } from '@icon-park/vue-next'
import { OpticalDisk } from '@/assets/img'
import { usePlayerStore } from '@/stores/player'

const { song, songUrl } = toRefs(usePlayerStore())
</script>

<style lang="scss">
.player-song {
  .badge {
    .el-badge__content {
      @apply scale-75 left-1 bg-stone-100 text-slate-500 bg-opacity-80 right-auto;
      @apply dark:bg-stone-900;
    }
  }
}
</style>
