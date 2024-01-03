import"./base-O0zJ9wQI.js";import{a as $,E as S}from"./el-tab-pane-dKVYv1Cz.js";import{h,p as l,A as e,G as s,y as d,I as j,m as o,a0 as g,r as u,k as F,q as f,F as k,Y as L,B as V,C as y,a9 as A,ag as I,a5 as M,o as N}from"./index-Xoaj6-Zc.js";import{E as z}from"./el-avatar-p16kzAcp.js";import{M as B}from"./MoreText-QHZDISvy.js";import{a as m}from"./IconPark-kA3EyymD.js";import{F as C}from"./Fm-IflMZJrm.js";import{P}from"./PlayOne-pXSikgQA.js";import{L as q}from"./PlayTwo-kcNdCeme.js";import{M as T,S as J}from"./SongListItem-i74VdzkS.js";import{I as U}from"./api-RBkkRLth.js";import{u as O}from"./player-CKD4TmQn.js";import{E as G}from"./el-button-j9s8UcJh.js";import"./typescript-qWkfPxeU.js";import"./event-vOXeFsAk.js";import"./vnode-lSe6AG77.js";import"./index-pfbji-wY.js";import"./use-form-item-46Sa5dNx.js";import"./index-IxXeaCDS.js";import"./constants-pVGxzQxR.js";const R={class:"flex items-stretch"},Y=["src"],H={class:"pl-5 py-1 flex flex-col justify-between"},K={class:"flex"},Q={class:"font-bold text-2xl"},W={class:"flex items-center pt-3 pb-2 text-dc text-xs"},X={class:"ml-2 text-sm"},Z={class:"text-xs text-gray-500 leading-normal"},ee={class:"flex items-center gap-x-2 mt-5 justify-self-stretch"},te=e("span",null,"播放全部",-1),se={class:"w-32 button-outline button-sm"},oe=e("span",null,"收藏",-1),ae={class:"button-outline button-sm w-8"},le=h({__name:"Info",props:{djDetail:{type:Object,required:!0},playAll:{type:Function,required:!1}},setup(p){return(t,a)=>{const n=z;return o(),l("div",R,[e("img",{src:t.djDetail.coverUrl,alt:"",class:"w-40 h-40 object-cover rounded-xl flex-shrink-0"},null,8,Y),e("div",H,[e("div",null,[e("div",K,[s(m,{icon:d(C),class:"mr-1 py-1",size:"22"},null,8,["icon"]),e("div",Q,j(t.djDetail.name),1)]),e("div",W,[s(n,{size:"small",src:t.djDetail.dj.avatarUrl,round:""},null,8,["src"]),e("span",X,j(t.djDetail.dj.nickname),1)]),e("div",Z,[s(B,{text:t.djDetail.description,end:90,hasTag:!0,tag:t.djDetail.categoryName},null,8,["text","tag"])])]),e("div",ee,[e("button",{class:"w-32 button-outline button",onClick:a[0]||(a[0]=(...i)=>t.playAll&&t.playAll(...i))},[s(m,{icon:d(P),class:"mr-1",size:"22"},null,8,["icon"]),te]),e("button",se,[s(m,{icon:d(q),class:"mr-1",size:"18"},null,8,["icon"]),oe]),e("button",ae,[s(m,{icon:d(T)},null,8,["icon"])])])])])}}}),ne=g(le,[["__file","E:/code/2023-暑期/5-vue/1-demo/vue3-music/src/views/dj/Info.vue"]]),ie={key:0,class:"mt-2"},re=I('<div class="flex text-xs text-gray-400 py-2"><div class="flex-auto">歌曲</div><div class="w-1/4">歌手</div><div class="w-1/4">专辑</div><div class="w-20">时长</div></div>',1),ce=[re],ue={key:1,class:"text-sm"},de={key:2,class:"mt-5 text-xs text-gray-400 text-center"},me={key:3,class:"flex justify-center py-5"},pe=h({__name:"SongsList",props:{songs:{type:Array,required:!0}},setup(p){const t=p,a=u(10),n=u(1),i=F(()=>n.value-t.songs.length/a.value>=0),r=()=>{n.value=n.value+1};return(c,x)=>{const _=G;return o(),l(k,null,[c.songs.length?(o(),l("div",ie,[...ce])):f("v-if",!0),c.songs.length?(o(),l("div",ue,[(o(!0),l(k,null,L(c.songs.slice(0,a.value*n.value),v=>(o(),V(J,{key:v.id,song:v,"show-ar-name":"","show-al-name":"",dj:!0},null,8,["song"]))),128))])):(o(),l("div",de,"暂无歌曲")),c.songs.length>a.value&&!i.value?(o(),l("div",me,[s(_,{link:"",class:"text-center w-full",onClick:r},{default:y(()=>[A("加载更多")]),_:1})])):f("v-if",!0)],64)}}}),_e=g(pe,[["__file","E:/code/2023-暑期/5-vue/1-demo/vue3-music/src/views/dj/SongsList.vue"]]),ve={class:"playlist"},fe={key:0,class:"p-5"},ye=h({__name:"DJDetail",setup(p){const t=M(),a=u("tracks"),n=Number(t.query.id),i=u(),r=u([]),{pushPlayList:c,play:x}=O(),_=()=>{c(!0,...r.value),x(r.value.first().id)};return N(async()=>{i.value=await U(n),r.value=i.value.songs}),(v,b)=>{const D=S,w=$;return o(),l("div",ve,[i.value?(o(),l("div",fe,[s(ne,{djDetail:i.value,"play-all":()=>_()},null,8,["djDetail","play-all"]),s(w,{modelValue:a.value,"onUpdate:modelValue":b[0]||(b[0]=E=>a.value=E),class:"mt-3"},{default:y(()=>[s(D,{lazy:"",label:`歌曲 ${r.value.length}`,name:"tracks"},{default:y(()=>[s(_e,{songs:r.value},null,8,["songs"])]),_:1},8,["label"])]),_:1},8,["modelValue"])])):f("v-if",!0)])}}}),Ce=g(ye,[["__file","E:/code/2023-暑期/5-vue/1-demo/vue3-music/src/views/dj/DJDetail.vue"]]);export{Ce as default};