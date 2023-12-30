<template>
  <div>
    <div class="flex justify-between items-end u-title">
      <Title :title="props.title" :hasRight="false" />
      <div class="flex items-center py-2 hover:underline text-main cursor-pointer text-xs">
        更多 >
      </div>
    </div>
    <div
      v-for="(item, index) in dataList.slice(0, 10)"
      :key="item.id"
      class="flex py-2 justify-between"
      :class="index % 2 == 0 ? 'bg-view' : 'bg-slate-50 dark:bg-neutral-800'"
    >
      <div class="flex">
        <div class="flex flex-col items-center w-10 text-center mt-1">
          <div class="text-sm text-slate-500">
            {{ index < 9 ? '0' + (index + 1) : index + 1 }}
          </div>
          <div
            class="flex items-center"
            v-if="item.lastRank !== -1"
            :class="
              item.lastRank === item.rank ? 'gray' : item.rank < item.lastRank ? 'red' : 'green'
            "
          >
            <IconPark
              :icon="
                item.lastRank === item.rank
                  ? Minus
                  : item.rank < item.lastRank
                    ? UpSmall
                    : DownSmall
              "
              :size="10"
            />
            <span class="text-size-10 px-0.5">{{ Math.abs(item.lastRank - item.rank) }}</span>
          </div>
          <span v-else class="text-green-400 text-size-10">new</span>
        </div>
        <div class="flex">
          <div class="flex">
            <img :src="item.picUrl" alt="" class="w-10 aspect-square object-cover bg-dc" />
            <div class="flex flex-col w-36 ml-3">
              <span class="truncate text-xs text-main leading-5">{{ item.name }}</span>
              <span class="truncate text-xs text-main text-color-gray">{{ item.creatorName }}</span>
            </div>
          </div>
        </div>
      </div>
      <span class="hot">
        <i :style="{ width: (item.score / score) * 100 + '%' }"></i>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UpSmall, DownSmall, Minus } from '@icon-park/vue-next'
import IconPark from '@/components/common/IconPark.vue'
import Title from '@/components/common/Title.vue'
import { useDJStore } from '@/stores/dj'
import { onMounted, ref, toRefs } from 'vue'
import { DJRadioPaidPremium } from '@/models/dj'

const props = defineProps<{
  hot: boolean
  title: string
}>()

const dataList = ref<DJRadioPaidPremium[]>([])

const score = ref(0)
const { DJTopList, DJRadioPaidPremiumList } = toRefs(useDJStore())
const { getDJTopList, getDJRadioPaidPremium } = useDJStore()

onMounted(async () => {
  if (props.hot) {
    await getDJTopList()
    score.value = DJTopList.value[0].score
    let number = 0
    for (const item of DJTopList.value) {
      const data = {
        id: item.program.id,
        rank: item.rank,
        lastRank: item.lastRank,
        score: item.score,
        name: item.program.mainSong.name,
        picUrl: item.program.coverUrl,
        creatorName: item.program.dj.brand
      }
      dataList.value.push(data)
      if (number++ > 10) break
    }
  } else {
    await getDJRadioPaidPremium()
    score.value = DJRadioPaidPremiumList.value[0].score
    dataList.value = DJRadioPaidPremiumList.value
  }
})
</script>

<style scoped lang="scss">
.u-title {
  height: 40px;
  border-bottom: 2px solid #94a3b8;
}
.text-size-10 {
  font-size: 10px;
}
.red {
  color: #da4545;
}
.gray {
  color: #94a3b8;
}
.green {
  @apply text-emerald-400;
}
.text-color-gray {
  @apply text-gray-400;
}

.hot {
  display: block;
  width: 100px;
  height: 8px;
  border-radius: 50px;
  background-color: #dedede;
  margin: 15px 15px 0 10px;
  i {
    display: block;
    height: 8px;
    border-radius: 50px;
    background-color: #c5c5c5;
  }
}
</style>
