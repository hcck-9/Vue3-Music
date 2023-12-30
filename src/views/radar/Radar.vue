<template>
  <div class="px-5 min-w-[880px]">
    <div class="grid grid-flow-row sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-5 mt-5">
      <div
        v-for="category in DJCategoryList.slice(0, DJCategoryList.length - 1)"
        :key="category.id"
        class="flex flex-col items-center overflow-hidden cursor-pointer"
        :class="{
          active: category.id === pageData.type
        }"
        @click="typeChange(category.id)"
      >
        <img :src="category.pic96x96Url" alt="" class="w-12 h-12 img-style" />
        <span class="text-xs text-main">{{ category.name }}</span>
      </div>
    </div>
    <div class="mt-5">
      <div v-if="pageData.top">
        <DjCategoryTopList />
      </div>
      <div v-else>
        <DjProgramList />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, toRefs } from 'vue'
import { useDJStore } from '@/stores/dj'
import DjProgramList from '@/views/radar/DjProgramList.vue'
import DjCategoryTopList from '@/views/radar/DjCategoryTopList.vue'

const { DJCategoryList } = toRefs(useDJStore())
const { getDJCategoryList, getDJNewExcellentList, getDJCategoryPopularRadioList } = useDJStore()

const pageData = reactive({
  init: false,
  loading: false,
  more: false,
  page: 1,
  limit: 30,
  type: 0,
  top: true
})

const typeChange = (type: number) => {
  if (pageData.type === type) return
  console.log(type)
  pageData.top = false
  pageData.type = type
  getDJNewExcellentList(pageData.type)
  getDJCategoryPopularRadioList(pageData.type, pageData.limit, pageData.page)
}

onMounted(async () => {
  await getDJCategoryList()
})
</script>

<style scoped lang="scss">
.img-style {
  transform: translateY(-60px);
  filter: drop-shadow(#8b8b8b 0 60px);
}

.active {
  .img-style {
    transform: translateY(-60px);
    filter: drop-shadow(rgb(52 211 153) 0 60px);
  }
  span {
    @apply text-emerald-400;
  }
}
</style>

<!-- 电台 - 类型 /dj/catelist-->
<!-- router-view -->
<!-- 包括 -->
<!-- 电台 - 节目榜  /dj/program/toplist-->
<!-- 电台 - 付费精品  /dj/toplist/pay-->

<!-- 根据推荐类型 分类推荐 /dj/recommend/type?type=2001 得到 最热电台排行榜 /dj/radio/hot?cateId=2001-->
