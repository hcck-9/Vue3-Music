export interface AlbumHotNewProduct {
  newAlbum: boolean
  albumId: number
  albumName: string
  artistName: string
  price: number
  customPriceConfig: any
  coverUrl: string
  pubTime: number
  productId: number
  saleNum: number
  topfans: any
  albumType: number
  saleType: number
  area: number
  artistType: number
  status: number
}

export interface AlbumLanguageStyle {
  albumId: number
  albumName: string
  artistName: string
  artistNames: string[]
  price: number
  customPriceConfig: any // 根据实际情况定义
  coverUrl: string
  saleNum: number
}
import type { Artist } from '@/models/artist'

export interface Album {
  songs: any[]
  paid: boolean
  onSale: boolean
  mark: number
  blurPicUrl: string
  companyId: number
  alias: string[]
  artists: Artist[]
  copyrightId: number
  picId: number
  artist: Artist
  publishTime: number
  company: string
  briefDesc: string
  picUrl: string
  commentThreadId: string
  pic: number
  tags: string
  description: string
  status: number
  subType: string
  name: string
  id: number
  type: string
  size: number
  picId_str: string
}
