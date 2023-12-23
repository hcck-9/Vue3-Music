<template>
  <el-popover
    popper-style="max-width:auto;padding:0;"
    width="250px"
    v-model:visible="showSearchView"
    trigger="click"
  >
    <template #reference>
      <el-input
        placeholder="搜索音乐、MV、歌单"
        :prefix-icon="Search"
        v-model="searchKeyword"
        @input="searchInput"
        @blur="showSearchView = false"
      />
    </template>
    <div class="h-96">
      <el-scrollbar>
        <div class="pb-2.5">
          <div v-if="showHot">
            <div class="pt-2 pb-1.5 px-2.5">热门搜索</div>
            <div>
              <div
                v-for="(item, index) in searchHot"
                :key="item.searchWord"
                class="py-2.5 px-1.5 hover-text cursor-pointer flex justify-between items-center text-xs"
                @click="hotClick(item.searchWord)"
              >
                <div>
                  <span class="mr-1">{{ index + 1 }}.</span>
                  <span>{{ item.searchWord }}</span>
                </div>
                <div class="text-red-300 text-xs">{{ item.score.numberFormat() }}</div>
              </div>
            </div>
          </div>
          <div v-else>
            <SearchSuggest />
          </div>
        </div>
      </el-scrollbar>
    </div>
  </el-popover>
</template>

<script setup lang="ts">
import { Search } from '@icon-park/vue-next'
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSearchStore } from '@/stores/search'
import { SearchHotDetail } from '@/models/search'
import { useSearchHotDetail } from '@/utils/api'
// 防抖动函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法
import { debounce } from 'lodash'
import SearchSuggest from '@/components/layout/header/SearchSuggest.vue'

const { showSearchView, searchKeyword, showHot } = storeToRefs(useSearchStore())
const { suggest } = useSearchStore()

const searchInput = debounce((value: string | number) => suggest(), 500, { maxWait: 1000 })

const hotClick = (text: string) => {
  searchKeyword.value = text
  suggest()
  showSearchView.value = true
}

const searchHot = ref(<SearchHotDetail[]>[])
onMounted(async () => {
  searchHot.value = await useSearchHotDetail()
})
</script>

<style scoped lang="scss">
:deep(.el-input__prefix-inner) {
  font-size: 14px;
}
</style>
