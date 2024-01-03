import{k as t,g as m,M as r,y as v,r as c,O as C,o as K,d as x,t as F,am as j}from"./index-Xc3Yzc2G.js";import{z as k,u as w,m as N,j as P,S as h}from"./base-9Z_h2vHL.js";import{u as E,a as G,d as O,l as Z,z as L,k as I}from"./index-7MvDZnRv.js";import{b as z,f as b,u as R}from"./constants-ylLUDuoU.js";const U=["","default","small","large"],g=s=>{const e=m();return t(()=>{var o,u;return(u=(o=e==null?void 0:e.proxy)==null?void 0:o.$props)==null?void 0:u[s]})},$=k({type:String,values:U,required:!1}),y=Symbol("size"),q=()=>{const s=r(y,{});return t(()=>v(s.size)||"")},S=Symbol(),p=c();function _(s,e=void 0){const o=m()?r(S,p):p;return s?t(()=>{var u,l;return(l=(u=o.value)==null?void 0:u[s])!=null?l:e}):o}function A(s,e){const o=_(),u=w(s,t(()=>{var n;return((n=o.value)==null?void 0:n.namespace)||N})),l=E(t(()=>{var n;return(n=o.value)==null?void 0:n.locale})),a=G(t(()=>{var n;return((n=o.value)==null?void 0:n.zIndex)||O})),i=t(()=>{var n;return v(e)||((n=o.value)==null?void 0:n.size)||""});return B(t(()=>v(o)||{})),{ns:u,locale:l,zIndex:a,size:i}}const B=(s,e,o=!1)=>{var u;const l=!!m(),a=l?_():void 0,i=(u=e==null?void 0:e.provide)!=null?u:l?C:void 0;if(!i){P("provideGlobalConfig","provideGlobalConfig() can only be used inside setup().");return}const n=t(()=>{const d=v(s);return a!=null&&a.value?D(a.value,d):d});return i(S,n),i(Z,t(()=>n.value.locale)),i(h,t(()=>n.value.namespace)),i(L,t(()=>n.value.zIndex)),i(y,{size:t(()=>n.value.size||"")}),(o||!p.value)&&(p.value=n.value),n},D=(s,e)=>{var o;const u=[...new Set([...I(s),...I(e)])],l={};for(const a of u)l[a]=(o=e[a])!=null?o:s[a];return l},H=(s,e={})=>{const o=c(void 0),u=e.prop?o:g("size"),l=e.global?o:q(),a=e.form?{size:void 0}:r(z,void 0),i=e.formItem?{size:void 0}:r(b,void 0);return t(()=>u.value||v(s)||(i==null?void 0:i.size)||(a==null?void 0:a.size)||l.value||"")},Q=s=>{const e=g("disabled"),o=r(z,void 0);return t(()=>e.value||v(s)||(o==null?void 0:o.disabled)||!1)},V=()=>{const s=r(z,void 0),e=r(b,void 0);return{form:s,formItem:e}},X=(s,{formItemContext:e,disableIdGeneration:o,disableIdManagement:u})=>{o||(o=c(!1)),u||(u=c(!1));const l=c();let a;const i=t(()=>{var n;return!!(!s.label&&e&&e.inputIds&&((n=e.inputIds)==null?void 0:n.length)<=1)});return K(()=>{a=x([F(s,"id"),o],([n,d])=>{const f=n??(d?void 0:R().value);f!==l.value&&(e!=null&&e.removeInputId&&(l.value&&e.removeInputId(l.value),!(u!=null&&u.value)&&!d&&f&&e.addInputId(f)),l.value=f)},{immediate:!0})}),j(()=>{a&&a(),e!=null&&e.removeInputId&&l.value&&e.removeInputId(l.value)}),{isLabeledByFormItem:i,inputId:l}};export{V as a,X as b,H as c,Q as d,_ as e,U as f,A as g,$ as u};