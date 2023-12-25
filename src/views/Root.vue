<template>
  <div class="w-screen h-screen flex items-stretch overflow-hidden">
    <div class="w-56 h-screen flex-shrink-0">
      <Menu />
    </div>
    <div class="flex-1 flex flex-col">
      <div class="h-14">
        <Header />
      </div>
      <div class="flex-1 overflow-hidden">
        <el-scrollbar>
          <div class="container mx-auto">
            <router-view></router-view>
          </div>
        </el-scrollbar>
      </div>
      <div class="h-20">
        <Footer />
      </div>
    </div>
  </div>
  <PlayList />
</template>

<script setup lang="ts">
import Header from '@/components/layout/header/Header.vue'
import Footer from '@/components/layout/footer/Footer.vue'
import Menu from '@/components/layout/menu/Menu.vue'
import PlayList from '@/components/layout/playList/PlayList.vue'
import { usePlayerInit } from '@/stores/player'

usePlayerInit()
</script>

<style scoped lang="scss"></style>
