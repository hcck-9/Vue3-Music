import{e as s,R as r,T as a,k as c,o as i,i as u,j as d,C as l}from"./base-9Z_h2vHL.js";import{k as m,y as p,g as f,M as I}from"./index-Xc3Yzc2G.js";const j=s([String,Object,Function]),x={Close:i},v={validating:r,success:a,error:c},o={prefix:Math.floor(Math.random()*1e4),current:0},C=Symbol("elIdInjection"),y=()=>f()?I(C,o):o,K=t=>{const e=y();!u&&e===o&&d("IdInjection",`Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);const n=l();return m(()=>p(t)||`${n.value}-id-${e.prefix}-${e.current++}`)},h=Symbol("formContextKey"),k=Symbol("formItemContextKey");export{x as C,v as V,y as a,h as b,k as f,j as i,K as u};
