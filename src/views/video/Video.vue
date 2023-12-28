<template>
  <div class="p-5 video-page">
    <div class="flex justify-between items-center">
      <el-popover placement="bottom-start" popper-style="padding:0;" width="60%" trigger="hover">
        <template #reference>
          <button class="button-outline px-5">
            <span class="mr-2">全部视频</span>
            <IconPark :icon="Right" />
          </button>
        </template>
        <div>
          <div class="text-xl pt-5 pl-5 hover-text" @click="idChange(0)">全部视频</div>
          <div class="h-96 py-5 pl-5">
            <el-scrollbar>
              <div class="text-xs grid grid-flow-row grid-cols-5 gap-5">
                <div
                  class="hover-text"
                  :class="{ 'text-active': pageData.id === videoTag.id }"
                  v-for="videoTag in videoGroup"
                  :key="videoTag.id"
                  @click="idChange(videoTag.id)"
                >
                  {{ videoTag.name }}
                </div>
              </div>
            </el-scrollbar>
          </div>
        </div>
      </el-popover>
      <div class="text-xs flex gap-x-4">
        <div
          class="hover-text"
          @click="idChange(item.id)"
          :class="{ 'text-active': pageData.id === item.id }"
          v-for="item in videoGroup.slice(0, 8)"
          :key="item.id"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="grid grid-flow-row grid-cols-3 gap-5 mt-5">
      <div v-for="({ data }, index) in videoList" :key="index">
        <CoverPlay :pic-url="data.coverUrl" video />
        <div class="text-xs mt-3 truncate">{{ data.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Right } from '@icon-park/vue-next'
import IconPark from '@/components/common/IconPark.vue'
import { onMounted, reactive, ref, toRefs } from 'vue'
import { useVideoStore } from '@/stores/video'
import { Video } from '@/models/video'
import { useVideoGroup } from '@/utils/api'

const { videoGroup } = toRefs(useVideoStore())
const { getVideoGroup } = useVideoStore()

const pageData = reactive({
  page: 1,
  id: 0
})

const videoList = ref<Video[]>([])

const getData = async () => {
  videoList.value = await useVideoGroup(pageData.id, pageData.page - 1)
}

const idChange = (id: number) => {
  if (id === pageData.id) return
  console.log(id)
  pageData.id = id
  pageData.page = 1
  getData()
}

onMounted(() => {
  getVideoGroup()
  getData()
})
</script>

<style scoped lang="scss"></style>
