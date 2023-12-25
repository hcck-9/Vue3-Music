import instance from '@/utils/http'

import type { SearchHotDetail, SearchSuggest } from '@/models/search'
import { UserProfile } from '@/models/user'
import { SongUrl } from '@/models/songUrl'
import { Song } from '@/models/song'
import { Banner } from '@/models/banner'
import { Personalized, PersonalizedMv, PersonalizedNewSong } from '@/models/personalized'

// 手机登录
export async function useLogin(phone: string, password: string) {
  return await instance.get<{
    code: number
    cookie: string
    token: string
    profile: UserProfile
  }>('login/cellphone', { phone: phone, password: password })
}

// 获取歌曲地址
export async function useSongUrl(id: number) {
  const { data } = await instance.get<{ data: SongUrl[] }>('/song/url', { id: id })
  return data.first()
}

// 获取歌曲详情
export async function useSongDetail(id: number) {
  const { songs } = await instance.get<{ songs: Song[] }>('/song/detail', { ids: id })
  return songs.first()
}

// 获取轮播图 banner
export async function useBanner() {
  const { banners } = await instance.get<{ banners: Banner[] }>('/banner', { type: 1 })
  return banners
}

// 获取热门推荐歌曲
export async function useSearchHotDetail() {
  const { data } = await instance.get<{ data: SearchHotDetail[] }>('/search/hot/detail')
  return data
}

// 根据关键词搜索歌曲
export async function useSearchSuggest(keywords: string) {
  const { result } = await instance.get<{ result: SearchSuggest }>('/search/suggest', {
    keywords: keywords
  })
  return result
}

// 获取专属歌单歌曲
export async function usePersonalized() {
  const { result } = await instance.get<{ result: Personalized[] }>('/personalized')
  return result
}

// 获取推荐新音乐歌曲
export async function usePersonalizedNewSong() {
  const { result } = await instance.get<{ result: PersonalizedNewSong[] }>('/personalized/newsong')
  return result
}

// 获取推荐MV
export async function usePersonalizedMv() {
  const { result } = await instance.get<{ result: PersonalizedMv[] }>('/personalized/mv')
  return result
}
