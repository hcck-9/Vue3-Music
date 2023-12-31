export interface CommentUser {
  locationInfo?: any
  liveInfo?: any
  anonym: number
  commonIdentity?: any
  avatarUrl: string
  avatarDetail?: any
  userType: number
  followed: boolean
  mutual: boolean
  remarkName?: any
  socialUserId?: any
  vipRights?: VipRights
  nickname: string
  authStatus: number
  expertTags?: any
  experts?: any
  vipType: number
  userId: number
  target?: any
}

interface VipRights {
  associator: {
    vipCode: number
    rights: boolean
    iconUrl: string
  }
  musicPackage: {
    vipCode: number
    rights: boolean
    iconUrl: string
  }
  redplus?: any
  redVipAnnualCount: number
  redVipLevel: number
}

export interface PlayListComment {
  user: CommentUser
  beReplied: any[]
  pendantData?: any
  showFloorComment?: any
  status: number
  commentId: number
  content: string
  richContent?: any
  contentResource?: any
  time: number
  timeStr: string
  needDisplayTime: boolean
  likedCount: number
  expressionUrl?: any
  commentLocationType: number
  parentCommentId: number
  decoration?: Decoration
  repliedMark?: any
  grade?: any
  userBizLevels?: any
  ipLocation: IpLocation
  owner: boolean
  liked: boolean
}

interface Decoration {
  repliedByAuthorCount: number
}

interface IpLocation {
  ip?: any
  location: string
  userId?: any
}
