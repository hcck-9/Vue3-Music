import{e as i,f as r,g as l}from"./api-RBkkRLth.js";import{Z as u,r as s}from"./index-Xc3Yzc2G.js";const f=u("music",()=>{const e=s([]),n=async()=>{e.value.length||(e.value=await i())},t=s([]),o=async()=>{t.value.length||(t.value=await r())},a=s([]);return{personalized:e,getPersonalized:n,personalizedNewSong:t,getPersonalizedNewSong:o,topListDetailData:a,getTopListDetailData:async()=>{a.value.length||(a.value=await l())}}});export{f as u};