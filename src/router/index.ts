import { createRouter, createWebHistory } from 'vue-router'
import { Pages } from '@/router/pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: Pages.home,
      component: () => import('@/views/Root.vue'),
      redirect: { name: Pages.discover },
      children: [
        {
          path: 'discover',
          name: Pages.discover,
          component: () => import('@/views/discover/Discover.vue'),
          meta: {
            menu: 'discover',
            keepAlive: true
          }
        },
        {
          path: 'music',
          name: Pages.music,
          component: () => import('@/views/music/Music.vue'),
          redirect: { name: Pages.picked },
          meta: {
            menu: 'music'
          },
          children: [
            {
              path: 'picked',
              name: Pages.picked,
              component: () => import('@/views/music/picked/Picked.vue'),
              meta: {
                menu: 'music',
                title: '精选',
                keepAlive: true
              }
            },
            {
              path: 'dj',
              name: Pages.dj,
              component: () => import('@/views/music/dj/DJ.vue'),
              meta: {
                menu: 'music',
                title: '有声电台',
                keepAlive: true
              }
            },
            {
              path: 'toplist',
              name: Pages.toplist,
              component: () => import('@/views/music/toplist/TopList.vue'),
              meta: {
                menu: 'music',
                title: '排行',
                keepAlive: true
              }
            },
            {
              path: 'artists',
              name: Pages.artists,
              component: () => import('@/views/music/artists/Artists.vue'),
              meta: {
                menu: 'music',
                title: '歌手',
                keepAlive: true
              }
            },
            {
              path: 'category',
              name: Pages.category,
              component: () => import('@/views/music/category/Category.vue'),
              meta: {
                menu: 'music',
                title: '分类歌单',
                keepAlive: true
              }
            },
            {
              path: 'album',
              name: Pages.album,
              component: () => import('@/views/music/album/Album.vue'),
              meta: {
                menu: 'music',
                title: '数字专辑',
                keepAlive: true
              }
            }
          ]
        },
        {
          path: 'video',
          name: Pages.video,
          component: () => import('@/views/video/Video.vue'),
          meta: {
            menu: 'video',
            keepAlive: true
          }
        },
        {
          path: 'radar',
          name: Pages.radar,
          component: () => import('@/views/radar/Radar.vue'),
          meta: {
            menu: 'radar'
          }
        },
        {
          path: 'playlist',
          name: Pages.playlist,
          component: () => import('@/views/playlist/PlayList.vue')
        },
        {
          path: 'artistDetail',
          name: Pages.artistDetail,
          component: () => import('@/views/artist/ArtistDetail.vue')
        },
        {
          path: 'mvDetail',
          name: Pages.mvDetail,
          component: () => import('@/views/mv/mvDetail.vue')
        },
        {
          path: 'djDetail',
          name: Pages.djDetail,
          component: () => import('@/views/dj/DJDetail.vue')
        },
        {
          path: 'albumDetail',
          name: Pages.albumDetail,
          component: () => import('@/views/album/AlbumDetail.vue')
        }
      ]
    }
  ]
})

export default router
