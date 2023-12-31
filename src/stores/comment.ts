import type { PlayListComment } from '@/models/comment'
import { usePlayListComment } from '@/utils/api'
import { defineStore } from 'pinia'

export const useCommentStore = defineStore('comment', {
  state: () => {
    return {
      playlistCommentList: [] as PlayListComment[],
      playlistCommentCount: 0,
      more: false,
      loading: false
    }
  },
  actions: {
    async getPlaylistCommentList(id: number, limit: number = 20, page: number = 1) {
      this.loading = true
      try {
        const { comments, total, more } = await usePlayListComment(id, limit, page)
        if (page === 1) {
          this.playlistCommentList = comments
        } else {
          this.playlistCommentList.push(...comments)
        }
        this.loading = false
        this.playlistCommentCount = total
        this.more = more
      } catch (error) {}
    }
  }
})
