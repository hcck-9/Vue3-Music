<template>
  <div class="flex h-14 items-center justify-between drag">
    <div class="flex pl-5 items-center flex-shrink-0 mr-10">
      <IconPark :icon="Left" :size="iconSize" :stroke-width="2" class="icon-button" />
      <IconPark :icon="Right" :size="iconSize" :stroke-width="2" class="icon-button" />
      <div class="search no-drag ml-2">
        <SearchPop />
      </div>
    </div>
    <div class="flex mr-5 items-center flex-shrink-0">
      <UserInfo />
      <IconPark :icon="Mail" :stroke-width="2" class="icon-button" />
      <IconPark :icon="Platte" :stroke-width="2" class="icon-button" @click="changeThemeMode" />
      <IconPark :icon="Logout" :stroke-width="2" class="icon-button" @click="logout" />
    </div>
  </div>
</template>

<script setup lang="ts">
//引入字体图标，首字母大写
import { Left, Right, Mail, Platte, HamburgerButton, Logout } from '@icon-park/vue-next'
import IconPark from '@/components/common/IconPark.vue'
import SearchPop from '@/components/layout/header/SearchPop.vue'
import UserInfo from '@/components/layout/header/UserInfo.vue'
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

const { logout } = useUserStore()

const iconSize = 22

const mode = ref(false)

const changeThemeMode = () => {
  window.document.documentElement.setAttribute('class', mode.value ? 'dark' : 'light')

  mode.value = !mode.value
}
</script>

<style scoped lang="scss">
.icon-button {
  @apply p-2 cursor-pointer;
  @apply hover:text-emerald-400;
}
.search {
  @apply text-xs;
  :deep(.el-input__wrapper) {
    @apply rounded-full text-xs bg-slate-100 dark:bg-stone-900;
  }
}
</style>
