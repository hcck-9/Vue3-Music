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
