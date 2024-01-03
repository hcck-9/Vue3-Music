import instance from '@/utils/http'

import type { SearchHotDetail, SearchSuggest } from '@/models/search'
import { UserProfile } from '@/models/user'
import { SongUrl } from '@/models/songUrl'
import { Song } from '@/models/song'
import { Banner } from '@/models/banner'
import type {
  PersonalizedDjProgram,
  Personalized,
  PersonalizedMv,
  PersonalizedNewSong
} from '@/models/personalized'
import type { PersonalizedPrivateContent, Video, VideoGroup } from '@/models/video'
import type {
  DJCategory,
  DJPersonalizedRecommend,
  DJTodayPreferred,
  DJHotRankItem,
  DJRadioPaidPremium,
  DJNewExcellent,
  Program
} from '@/models/dj'
import type { TopListDetail } from '@/models/toplist_detail'
import type { Artist, Mv } from '@/models/artist'
import type { PlayListDetail, PlaylistHighqualityTag } from '@/models/playlist'
import type { Album, AlbumHotNewProduct, AlbumLanguageStyle } from '@/models/album'
import type { ArtistDesc, ArtistDetail } from '@/models/artist_detail'
import type { PlayListComment } from '@/models/comment'
import type { MvDetail, MvUrl } from '@/models/mv'

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

// 获取视频标签列表
export async function useVideoGroupList() {
  const { data } = await instance.get<{ data: VideoGroup[] }>('/video/group/list')
  return data
}

// 依据 ID 获取 部分 或者 全部 视频
export async function useVideoGroup(id?: number, offset?: number) {
  const { datas } = await instance.get<{ datas: Video[] }>(
    id ? '/video/group' : '/video/timeline/all',
    {
      id: id,
      offset: offset
    }
  )
  return datas
}

// radar 获取DJ分类类别
export async function useDJCategory() {
  const { categories } = await instance.get<{ categories: DJCategory[] }>('/dj/catelist')
  return categories
}

// radar 获取DJ节目排行榜
export async function useDJTopList() {
  const { toplist } = await instance.get<{ toplist: DJHotRankItem[] }>('/dj/program/toplist')
  return toplist
}

// radar 获取DJ 电台 - 付费精品
export async function useDJRadioPaidPremium() {
  const {
    data: { list }
  } = await instance.get<{
    data: { list: DJRadioPaidPremium[] }
  }>('/dj/toplist/pay')
  return list
}

// radar 获取DJ节目排行榜
export async function useDJNewExcellent(type: number) {
  const { djRadios } = await instance.get<{ djRadios: DJNewExcellent[] }>('/dj/recommend/type', {
    type: type
  })
  return djRadios
}

// radar 获取DJ节目排行榜
export async function useDJCategoryPopularRadio(type: number, limit: number, page: number) {
  const { djRadios } = await instance.get<{ djRadios: DJNewExcellent[] }>('/dj/radio/hot', {
    cateId: type,
    limit: limit,
    offset: (page - 1) * limit
  })
  return djRadios
}

// artistDetail 获取歌手详情 id
export async function useArtistDetail(id: number) {
  const { data } = await instance.get<{ data: ArtistDetail }>('/artist/detail', {
    id: id
  })
  return data
}

// song 获取歌手全部歌曲
export async function useArtistSongs(
  id: number,
  order: string = 'time',
  limit: number = 10,
  offset: number = 0
) {
  return await instance.get<{ songs: Song[] }>('/artist/songs', {
    id: id,
    order: order,
    limit: limit,
    offset: offset
  })
}

// song 获取歌手全部专辑
export async function useArtistAlbum(id: number, limit: number = 10, offset: number = 0) {
  return await instance.get<{ hotAlbums: Album[] }>('/artist/album', {
    id: id,
    limit: limit,
    offset: offset
  })
}

// song 获取歌手全部视频
export async function useArtistMv(id: number, limit: number = 10, offset: number = 0) {
  return await instance.get<{ mvs: Mv[] }>('/artist/mv', {
    id: id,
    limit: limit,
    offset: offset
  })
}

// song 获取歌手全部描述
export async function useArtistDesc(id: number) {
  return await instance.get<ArtistDesc>('/artist/desc', {
    id: id
  })
}

// playlist 获取歌单详情，包括获取所有的歌曲
export async function usePlayListDetail(id: number, s: number = 8) {
  const { playlist } = await instance.get<{ playlist: PlayListDetail }>('/playlist/detail', {
    id: id,
    s: s
  })

  return playlist
}

// playlist 获取歌单详情所有的歌曲
export async function usePlayListTrackAll(id: number) {
  const { songs } = await instance.get<{ songs: Song[] }>('/playlist/track/all', {
    id: id
  })

  return songs
}

// playlist 获取歌单评论
export async function usePlayListComment(id: number, limit: number = 20, page: number = 1) {
  const { comments, total, more } = await instance.get<{
    comments: PlayListComment[]
    total: number
    more: boolean
  }>('/comment/playlist', {
    id: id,
    limit: limit,
    offset: (page - 1) * limit
  })

  return {
    comments,
    total,
    more
  }
}

// albumDetail 获取专辑评论
export async function useAlbumComment(id: number, limit: number = 20, page: number = 1) {
  const { comments, total, more } = await instance.get<{
    comments: PlayListComment[]
    total: number
    more: boolean
  }>('/comment/album', {
    id: id,
    limit: limit,
    offset: (page - 1) * limit
  })

  return {
    comments,
    total,
    more
  }
}

// mvDetail 获取mv地址
export async function useMvUrl(id: number) {
  const { data } = await instance.get<{ data: MvUrl }>('/mv/url', {
    id: id
  })

  return data
}

// mvDetail 获取mv详情
export async function useMvDetail(id: number) {
  const { data } = await instance.get<{ data: MvDetail }>('/mv/detail', {
    mvid: id
  })
  return data
}

// djDetail 获取dj详情
export async function useDJDetail(id: number) {
  const { program } = await instance.get<{ program: Program }>('/dj/program/detail', {
    id: id
  })
  return program
}

// 获取专辑信息
export async function useAlbum(id: number) {
  const { album, songs } = await instance.get<{ album: Album; songs: Song[] }>('album', { id: id })

  return { album, songs }
}
