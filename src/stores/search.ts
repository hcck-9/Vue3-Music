import { defineStore } from 'pinia'
import type { SearchSuggest } from '@/models/search'
import { useSearchSuggest } from '@/utils/api'

export const useSearchStore = defineStore('search', {
  state: () => {
    return {
      showSearchView: false,
      searchKeyword: '',
      suggestData: {} as SearchSuggest
    }
  },
  getters: {
    showHot: (state) => {
      return state.searchKeyword == ''
    }
  },
  actions: {
    async suggest() {
      this.suggestData = await useSearchSuggest(this.searchKeyword)
      if (JSON.stringify(this.suggestData) === '{}') {
        this.showSearchView = false
      }
    },
    handleFocus() {
      if (!this.showHot && JSON.stringify(this.suggestData) === '{}') {
        this.showSearchView = false
      } else {
        this.showSearchView = true
      }
    }
  }
})
