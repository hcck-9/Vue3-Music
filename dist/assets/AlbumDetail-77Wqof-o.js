import"./base-O0zJ9wQI.js";import{a as k,E as A}from"./el-tab-pane-dKVYv1Cz.js";import{h as g,p as b,A as e,I as _,G as s,y as i,m as c,a0 as w,a5 as P,r as p,_ as j,o as D,C as u,q as E,F as I,Y as T,B as V}from"./index-Xoaj6-Zc.js";import{J as $}from"./api-RBkkRLth.js";import{M as z,S as B}from"./SongListItem-i74VdzkS.js";import{a as f}from"./IconPark-kA3EyymD.js";import{u as M}from"./player-CKD4TmQn.js";import{P as S}from"./PlayOne-pXSikgQA.js";import{L as q}from"./PlayTwo-kcNdCeme.js";import{u as h,C as F}from"./CommentList-7IixLV8g.js";import"./typescript-qWkfPxeU.js";import"./event-vOXeFsAk.js";import"./vnode-lSe6AG77.js";import"./index-pfbji-wY.js";import"./el-button-j9s8UcJh.js";import"./use-form-item-46Sa5dNx.js";import"./index-IxXeaCDS.js";import"./constants-pVGxzQxR.js";const N={class:"flex items-stretch"},H=["src"],O={class:"pl-5 flex flex-col justify-between py-1 flex-1"},R={class:"flex flex-col justify-between flex-1"},U={class:"text-2xl font-bold"},G={class:"flex items-center text-xs text-gray-600"},J={class:""},Y={class:"text-xs text-gray-500 leading-normal"},K={class:"justify-self-stretch mt-5 gap-x-2 flex items-center"},Q=e("span",null,"播放全部",-1),W={class:"w-32 button-outline"},X=e("span",null,"收藏",-1),Z={class:"button-outline w-8"},ee=g({__name:"Info",props:{album:{type:Object,required:!0},songList:{type:Array,required:!0}},setup(v){const{pushPlayList:m,play:n}=M(),l=()=>{console.log(123),m(!0,...t.songList),n(t.songList.first().id)},t=v;return(o,x)=>(c(),b("div",N,[e("img",{src:o.album.picUrl,alt:"",class:"w-44 h-44 object-cover rounded-xl flex-shrink-0"},null,8,H),e("div",O,[e("div",R,[e("div",U,_(o.album.name),1),e("div",G,[e("span",J,_(o.album.artist.name),1)]),e("div",Y,_(o.album.publishTime.toDate()),1)]),e("div",K,[e("button",{class:"w-32 button",onClick:l},[s(f,{icon:i(S),size:"22",class:"mr-1"},null,8,["icon"]),Q]),e("button",W,[s(f,{icon:i(q),size:"18",class:"mr-1"},null,8,["icon"]),X]),e("button",Z,[s(f,{icon:i(z)},null,8,["icon"])])])])]))}}),se=w(ee,[["__file","E:/code/2023-暑期/5-vue/1-demo/vue3-music/src/views/album/Info.vue"]]),te={key:0,class:"p-5"},oe=e("div",{class:"flex text-xs text-gray-400 py-2"},[e("div",{class:"flex-auto"},"歌曲"),e("div",{class:"w-1/3"},"歌手"),e("div",{class:"w-20"},"时长")],-1),ae=["innerHTML"],le=g({__name:"AlbumDetail",setup(v){const m=P(),n=Number(m.query.id),l=p(),t=p([]),o=p("songs"),{playlistCommentCount:x}=j(h()),{getPlaylistCommentList:L}=h();return D(async()=>{const{album:y,songs:r}=await $(n);await L(n),l.value=y,t.value=r}),(y,r)=>{const d=A,C=k;return l.value?(c(),b("div",te,[s(se,{album:l.value,songList:t.value},null,8,["album","songList"]),s(C,{class:"mt-3",modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=a=>o.value=a)},{default:u(()=>[s(d,{lazy:"",label:`歌曲 ${t.value.length}`,name:"songs"},{default:u(()=>[oe,(c(!0),b(I,null,T(t.value,a=>(c(),V(B,{key:a.id,song:a,"show-ar-name":"",dj:!1},null,8,["song"]))),128))]),_:1},8,["label"]),s(d,{lazy:"",label:`评论  ${i(x)}`,name:"comments"},{default:u(()=>[s(F,{id:i(n)},null,8,["id"])]),_:1},8,["label"]),s(d,{lazy:"",label:"专辑详情",name:"desc"},{default:u(()=>{var a;return[e("div",{class:"text-xs text-slate-500 leading-7",style:{"white-space":"pre-wrap"},innerHTML:(a=l.value)==null?void 0:a.description},null,8,ae)]}),_:1})]),_:1},8,["modelValue"])])):E("v-if",!0)}}}),Ce=w(le,[["__file","E:/code/2023-暑期/5-vue/1-demo/vue3-music/src/views/album/AlbumDetail.vue"]]);export{Ce as default};
