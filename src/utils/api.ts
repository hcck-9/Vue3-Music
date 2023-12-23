import instance from '@/utils/http'

import type { SearchHotDetail, SearchSuggest } from '@/models/search'
import { UserProfile } from '@/models/user'

// 手机登录
export async function useLogin(phone: string, password: string) {
  return await instance.get<{
    code: number
    cookie: string
    token: string
    profile: UserProfile
  }>('login/cellphone', { phone: phone, password: password })
}

// 获取热门推荐歌曲
export async function useSearchHotDetail() {
  const { data } = await instance.get<{ data: SearchHotDetail[] }>('search/hot/detail')
  return data
}

// 根据关键词搜索歌曲
export async function useSearchSuggest(keywords: string) {
  const { result } = await instance.get<{ result: SearchSuggest }>('search/suggest', {
    keywords: keywords
  })
  return result
}
