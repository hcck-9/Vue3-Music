export interface MvUrl {
  id: number
  url: string
  r: number
  size: number
  md5: string
  code: number
  expi: number
  fee: number
  MvFee: number
  st: number
  promotionVo?: any
  msg: string
}

interface MvBRS {
  size: number
  br: number
  point: number
}

interface MvArtist {
  id: number
  name: string
  img1v1Url: string
  followed: boolean
}

interface VideoGroup {
  id: number
  name: string
  type: number
}

export interface MvDetail {
  id: number
  name: string
  artistId: number
  artistName: string
  briefDesc: string
  desc?: string
  cover: string
  coverId_str: string
  coverId: number
  playCount: number
  subCount: number
  shareCount: number
  commentCount: number
  duration: number
  nType: number
  publishTime: string
  price?: null | unknown
  brs: MvBRS[]
  artists: MvArtist[]
  commentThreadId: string
  videoGroup: VideoGroup[]
}
