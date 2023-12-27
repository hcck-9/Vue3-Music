import instance from '@/utils/http'

import type { SearchHotDetail, SearchSuggest } from '@/models/search'
import { UserProfile } from '@/models/user'
import { SongUrl } from '@/models/songUrl'
import { Song } from '@/models/song'
import { Banner } from '@/models/banner'
import {
  PersonalizedDjProgram,
  Personalized,
  PersonalizedMv,
  PersonalizedNewSong
} from '@/models/personalized'
import { PersonalizedPrivateContent } from '@/models/video'
import { DJPersonalizedRecommend, DJTodayPreferred } from '@/models/dj'
import { TopListDetail } from '@/models/toplist_detail'
import { Artist } from '@/models/artist'
import { PlayListDetail, PlaylistHighqualityTag } from '@/models/playlist'
import { AlbumHotNewProduct, AlbumLanguageStyle } from '@/models/album'

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

// 获取 common 轮播图 banner
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

// 获取推荐DJ
export async function usePersonalizedDjProgram() {
  const { result } = await instance.get<{ result: PersonalizedDjProgram[] }>(
    '/personalized/djprogram'
  )
  return result
}

// 获取独家放送歌曲
export async function usePersonalizedPrivateContentList(limit: number = 10, offset: number = 0) {
  const { result } = await instance.get<{ result: PersonalizedPrivateContent[] }>(
    '/personalized/privatecontent/list',
    {
      limit: limit,

      offset: offset
    }
  )
  return result
}

// 获取DJ轮播图 banner
export async function useDJBanner() {
  const { data } = await instance.get<{ data: Banner[] }>('/dj/banner')
  return data
}

// 获取DJ 个性化推荐
export async function useDJPersonalizedRecommened() {
  const { data } = await instance.get<{ data: DJPersonalizedRecommend[] }>(
    '/dj/personalize/recommend'
  )
  return data
}

// 获取DJ 今日优选
export async function useDJTodayPreferred() {
  const { data } = await instance.get<{ data: DJTodayPreferred[] }>('/dj/today/perfered')
  return data
}
useTopListDetail

// 获取榜单内容摘要
export async function useTopListDetail() {
  const { list } = await instance.get<{ list: TopListDetail[] }>('/toplist/detail')
  return list
}

// 获取歌手列表
export async function useArtistList(pageData: {
  type: number
  area: number
  initial: string
  limit: number
  page: number
}) {
  const { artists } = await instance.get<{ artists: Artist[] }>('/artist/list', {
    type: pageData.type,
    area: pageData.area,
    initial: pageData.initial,
    limit: pageData.limit,
    offset: (pageData.page - 1) * pageData.limit
  })
  return artists
}

// 获取分类歌单精选标签数据
export async function usePlaylistHighqualityTags() {
  const { tags } = await instance.get<{ tags: PlaylistHighqualityTag[] }>(
    '/playlist/highquality/tags'
  )
  return tags
}

// 获取分类歌单精选标签对应歌曲列表
export async function useTopPlaylistHighquality(params?: {
  cat: string
  limit?: number
  before?: number
}) {
  return await instance.get<{
    playlists: PlayListDetail[]
    total: number
    more: boolean
    lasttime: number
  }>('/top/playlist/highquality', params)
}

// 获取热门新碟数据
export async function useHotNewAlbum() {
  const { products } = await instance.get<{ products: AlbumHotNewProduct[] }>('/album/list', {
    limit: 10
  })
  return products
}

// 根据语种风格获取全部新碟
export async function useAllNewAlbun(pageData: { area: string; limit: number; page: number }) {
  const { albumProducts, hasNextPage } = await instance.get<{
    albumProducts: AlbumLanguageStyle[]
    hasNextPage: boolean
  }>('/album/list/style', {
    area: pageData.area,
    limit: pageData.limit,
    offset: (pageData.page - 1) * pageData.limit
  })
  return { albumProducts, hasNextPage }
}
