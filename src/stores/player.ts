import type { Song } from '@/models/song'
import type { SongUrl } from '@/models/songUrl'
import { useSongDetail, useSongUrl } from '@/utils/api'
import { defineStore, storeToRefs } from 'pinia'
import { onMounted, onUnmounted, watch } from 'vue'

const KEYS = {
  volume: 'PLAYER-VOLUME'
}

export const usePlayerStore = defineStore({
  id: 'player',
  state: () => {
    return {
      audio: new Audio(),
      // 循环模式 0 单曲循环 1 列表循环 2随机播放
      loopType: 0,
      // 音量
      volume: localStorage.getItem(KEYS.volume)?.toInt() || 60,
      // 播放列表,
      playList: [] as Song[],
      showPlayList: false,
      id: 0,
      url: '',
      songUrl: {} as SongUrl,
      song: {} as Song,
      // 是否播放中
      isPlaying: false,
      // 是否暂停
      isPause: true,
      // 是否正在拖动进度条
      sliderInput: false,
      // 是否播放结束
      ended: false,
      // 是否静音
      muted: false,
      // 当前播放时间
      currentTime: 0,
      // 总播放时长
      duration: 0
    }
  },
  getters: {
    playListCount: (state) => {
      return state.playList.length
    },
    thisIndex: (state) => {
      return state.playList.findIndex((song) => song.id === state.id)
    },
    nextSong(state): Song {
      const { thisIndex, playListCount } = this
      if (this.thisIndex === playListCount - 1) {
        return state.playList.first()
      } else {
        const nextIndex: number = thisIndex + 1
        return state.playList[nextIndex]
      }
    },
    prevSong(state): Song {
      const { thisIndex } = this
      if (this.thisIndex === 0) {
        return state.playList.last()
      } else {
        const prevIndex: number = thisIndex - 1
        return state.playList[prevIndex]
      }
    }
  },
  actions: {
    // 初始化
    init() {
      this.audio.volume = this.volume / 100
    },
    // 播放列表里面添加音乐
    pushPlayList(replace: boolean, ...list: Song[]) {
      if (replace) {
        this.playList = list
        return
      }
      list.forEach((song) => {
        if (
          this.playList.filter((s) => {
            return s.id === song.id
          }).length <= 0
        ) {
          this.playList.push(song)
        }
      })
    },
    // 清空播放列表
    clearPlayList() {
      this.songUrl = {} as SongUrl
      this.url = ''
      this.id = 0
      this.song = {} as Song
      this.isPause = false
      this.isPlaying = false
      this.sliderInput = false
      this.ended = false
      this.muted = false
      this.currentTime = 0
      this.playList = [] as Song[]
      this.showPlayList = false
      this.audio.load()
      setTimeout(() => {
        this.duration = 0
      }, 500)
    },
    // 播放歌曲
    async play(id: number) {
      if (id === this.id) return
      this.isPlaying = false
      const data = await useSongUrl(id)
      this.audio.src = data.url
      this.audio
        .play()
        .then((res) => {
          this.isPlaying = true
          this.isPause = false
          this.songUrl = data
          this.url = data.url
          this.id = id
          this.songDetail()
        })
        .catch((res) => {
          console.log(res)
        })
    },
    // 播放结束
    playEnd() {
      console.log('播放结束')
      switch (this.loopType) {
        case 0:
          this.rePlay()
          break
        case 1:
          this.next()
          break
        case 2:
          this.randomPlay()
          break
      }
    },
    // 获取歌曲详情
    async songDetail() {
      this.song = await useSongDetail(this.id)
      this.pushPlayList(false, this.song)
    },
    //重新播放
    rePlay() {
      setTimeout(() => {
        this.currentTime = 0
        this.audio.play()
      }, 1500)
    },
    //随机播放
    randomPlay() {
      this.play(this.playList.sample().id)
    },
    // 下一曲
    next() {
      if (this.loopType === 2) {
        this.randomPlay()
      } else {
        this.play(this.nextSong.id)
      }
    },
    // 上一曲
    prev() {
      this.play(this.prevSong.id)
    },
    // 播放/暂停
    togglePlay() {
      if (!this.song.id) return
      if (this.isPlaying) {
        this.audio.pause()
        this.isPause = true
      } else {
        this.audio.play()
        this.isPause = false
      }
      this.isPlaying = !this.isPlaying
    },
    // 切换循环
    toggleLoop() {
      this.loopType = ++this.loopType % 3
    },
    // 切换静音
    toggleMuted() {
      this.muted = !this.muted
      this.audio.muted = this.muted
    },
    // 设置音量
    setVolume(n: number) {
      n = n > 100 ? 100 : n
      n = n < 0 ? 0 : n
      this.volume = n
      this.audio.volume = n / 100
      localStorage.setItem(KEYS.volume, n.toString())
    },
    // 修改播放时间
    onSliderChange(val: number) {
      this.currentTime = val
      this.sliderInput = false
      this.audio.currentTime = val
    },
    // 播放时间拖动中
    onSliderInput(val: number) {
      this.sliderInput = true
    },
    // video 播放和暂停
    setPlay() {
      if (!this.song.id) return
      this.isPlaying = true
      this.audio.play()
      this.isPause = false
    },
    setPause() {
      if (!this.song.id) return
      this.isPlaying = false
      this.audio.pause()
      this.isPause = true
    },
    // 定时器
    interval() {
      if (this.isPlaying && !this.sliderInput) {
        this.currentTime = parseInt(this.audio.currentTime.toString())
        this.duration = parseInt(this.audio.duration.toString())
        this.ended = this.audio.ended
      }
    }
  }
})

export const usePlayerInit = () => {
  let timer: NodeJS.Timer
  const { init, playEnd, interval } = usePlayerStore()
  const { ended } = storeToRefs(usePlayerStore())

  // 监听播放结束
  watch(ended, (ended) => {
    if (!ended) return
    playEnd()
  })
  // 启动定时器
  onMounted(() => {
    init()
    console.log('启动定时器')
    timer = setInterval(interval, 1000)
  })
  // 清除定时器
  onUnmounted(() => {
    console.log('清除定时器')
    clearInterval(Number(timer))
  })
}
