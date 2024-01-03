import{ao as ge,s as Ne,a8 as Ce,h as M,M as X,r as C,d as R,n as Y,m as oe,p as le,x as re,y as B,J as Te,g as D,k as F,o as ie,U as Pe,G as v,O as Se,z as Q,f as we,j as Ee,S as $e,am as xe,l as Be,v as Oe,q as ke}from"./index-Xoaj6-Zc.js";import{d as U,e as Z,t as ee,u as K,_ as ce,E as L,I as Re,J as ze,o as Ae,y as Me,p as ae,c as Fe,P as se,w as Ie,Q as Le}from"./base-O0zJ9wQI.js";import{m as ue,a as de,e as Ve,f as De,E as V}from"./typescript-qWkfPxeU.js";import{U as be}from"./event-vOXeFsAk.js";import{f as Ue}from"./vnode-lSe6AG77.js";import{u as Ke}from"./index-pfbji-wY.js";const k=e=>ge(e),qe=(e,n,d)=>Ue(e.subTree).filter(t=>{var o;return Ce(t)&&((o=t.type)==null?void 0:o.name)===n&&!!t.component}).map(t=>t.component.uid).map(t=>d[t]).filter(t=>!!t),je=(e,n)=>{const d={},T=Ne([]);return{children:T,addChild:o=>{d[o.uid]=o,T.value=qe(e,n,d)},removeChild:o=>{delete d[o],T.value=T.value.filter($=>$.uid!==o)}}},q=Symbol("tabsRootContextKey"),He=U({tabs:{type:Z(Array),default:()=>ue([])}}),ve="ElTabBar",Je=M({name:ve}),We=M({...Je,props:He,setup(e,{expose:n}){const d=e,T=D(),i=X(q);i||ee(ve,"<el-tabs><el-tab-bar /></el-tabs>");const t=K("tabs"),o=C(),$=C(),b=()=>{let f=0,m=0;const c=["top","bottom"].includes(i.props.tabPosition)?"width":"height",l=c==="width"?"x":"y",O=l==="x"?"left":"top";return d.tabs.every(E=>{var a,S;const _=(S=(a=T.parent)==null?void 0:a.refs)==null?void 0:S[`tab-${E.uid}`];if(!_)return!1;if(!E.active)return!0;f=_[`offset${k(O)}`],m=_[`client${k(c)}`];const w=window.getComputedStyle(_);return c==="width"&&(d.tabs.length>1&&(m-=Number.parseFloat(w.paddingLeft)+Number.parseFloat(w.paddingRight)),f+=Number.parseFloat(w.paddingLeft)),!1}),{[c]:`${m}px`,transform:`translate${k(l)}(${f}px)`}},h=()=>$.value=b();return R(()=>d.tabs,async()=>{await Y(),h()},{immediate:!0}),de(o,()=>h()),n({ref:o,update:h}),(f,m)=>(oe(),le("div",{ref_key:"barRef",ref:o,class:re([B(t).e("active-bar"),B(t).is(B(i).props.tabPosition)]),style:Te($.value)},null,6))}});var Ge=ce(We,[["__file","tab-bar.vue"]]);const Qe=U({panes:{type:Z(Array),default:()=>ue([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),Xe={tabClick:(e,n,d)=>d instanceof Event,tabRemove:(e,n)=>n instanceof Event},ne="ElTabNav",Ye=M({name:ne,props:Qe,emits:Xe,setup(e,{expose:n,emit:d}){const T=D(),i=X(q);i||ee(ne,"<el-tabs><tab-nav /></el-tabs>");const t=K("tabs"),o=Ve(),$=De(),b=C(),h=C(),f=C(),m=C(),c=C(!1),l=C(0),O=C(!1),E=C(!0),a=F(()=>["top","bottom"].includes(i.props.tabPosition)?"width":"height"),S=F(()=>({transform:`translate${a.value==="width"?"X":"Y"}(-${l.value}px)`})),_=()=>{if(!b.value)return;const r=b.value[`offset${k(a.value)}`],u=l.value;if(!u)return;const s=u>r?u-r:0;l.value=s},w=()=>{if(!b.value||!h.value)return;const r=h.value[`offset${k(a.value)}`],u=b.value[`offset${k(a.value)}`],s=l.value;if(r-s<=u)return;const g=r-s>u*2?s+u:r-u;l.value=g},z=async()=>{const r=h.value;if(!c.value||!f.value||!b.value||!r)return;await Y();const u=f.value.querySelector(".is-active");if(!u)return;const s=b.value,g=["top","bottom"].includes(i.props.tabPosition),N=u.getBoundingClientRect(),y=s.getBoundingClientRect(),x=g?r.offsetWidth-y.width:r.offsetHeight-y.height,P=l.value;let p=P;g?(N.left<y.left&&(p=P-(y.left-N.left)),N.right>y.right&&(p=P+N.right-y.right)):(N.top<y.top&&(p=P-(y.top-N.top)),N.bottom>y.bottom&&(p=P+(N.bottom-y.bottom))),p=Math.max(p,0),l.value=Math.min(p,x)},I=()=>{var r;if(!h.value||!b.value)return;e.stretch&&((r=m.value)==null||r.update());const u=h.value[`offset${k(a.value)}`],s=b.value[`offset${k(a.value)}`],g=l.value;s<u?(c.value=c.value||{},c.value.prev=g,c.value.next=g+s<u,u-g<s&&(l.value=u-s)):(c.value=!1,g>0&&(l.value=0))},pe=r=>{const u=r.code,{up:s,down:g,left:N,right:y}=V;if(![s,g,N,y].includes(u))return;const x=Array.from(r.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),P=x.indexOf(r.target);let p;u===N||u===s?P===0?p=x.length-1:p=P-1:P<x.length-1?p=P+1:p=0,x[p].focus({preventScroll:!0}),x[p].click(),te()},te=()=>{E.value&&(O.value=!0)},j=()=>O.value=!1;return R(o,r=>{r==="hidden"?E.value=!1:r==="visible"&&setTimeout(()=>E.value=!0,50)}),R($,r=>{r?setTimeout(()=>E.value=!0,50):E.value=!1}),de(f,I),ie(()=>setTimeout(()=>z(),0)),Pe(()=>I()),n({scrollToActiveTab:z,removeFocus:j}),R(()=>e.panes,()=>T.update(),{flush:"post",deep:!0}),()=>{const r=c.value?[v("span",{class:[t.e("nav-prev"),t.is("disabled",!c.value.prev)],onClick:_},[v(L,null,{default:()=>[v(Re,null,null)]})]),v("span",{class:[t.e("nav-next"),t.is("disabled",!c.value.next)],onClick:w},[v(L,null,{default:()=>[v(ze,null,null)]})])]:null,u=e.panes.map((s,g)=>{var N,y,x,P;const p=s.uid,H=s.props.disabled,J=(y=(N=s.props.name)!=null?N:s.index)!=null?y:`${g}`,W=!H&&(s.isClosable||e.editable);s.index=`${g}`;const he=W?v(L,{class:"is-icon-close",onClick:A=>d("tabRemove",s,A)},{default:()=>[v(Ae,null,null)]}):null,ye=((P=(x=s.slots).label)==null?void 0:P.call(x))||s.props.label,_e=!H&&s.active?0:-1;return v("div",{ref:`tab-${p}`,class:[t.e("item"),t.is(i.props.tabPosition),t.is("active",s.active),t.is("disabled",H),t.is("closable",W),t.is("focus",O.value)],id:`tab-${J}`,key:`tab-${p}`,"aria-controls":`pane-${J}`,role:"tab","aria-selected":s.active,tabindex:_e,onFocus:()=>te(),onBlur:()=>j(),onClick:A=>{j(),d("tabClick",s,J,A)},onKeydown:A=>{W&&(A.code===V.delete||A.code===V.backspace)&&d("tabRemove",s,A)}},[ye,he])});return v("div",{ref:f,class:[t.e("nav-wrap"),t.is("scrollable",!!c.value),t.is(i.props.tabPosition)]},[r,v("div",{class:t.e("nav-scroll"),ref:b},[v("div",{class:[t.e("nav"),t.is(i.props.tabPosition),t.is("stretch",e.stretch&&["top","bottom"].includes(i.props.tabPosition))],ref:h,style:S.value,role:"tablist",onKeydown:pe},[e.type?null:v(Ge,{ref:m,tabs:[...e.panes]},null),u])])])}}}),Ze=U({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:Z(Function),default:()=>!0},stretch:Boolean}),G=e=>we(e)||Fe(e),et={[be]:e=>G(e),tabClick:(e,n)=>n instanceof Event,tabChange:e=>G(e),edit:(e,n)=>["remove","add"].includes(n),tabRemove:e=>G(e),tabAdd:()=>!0},tt=M({name:"ElTabs",props:Ze,emits:et,setup(e,{emit:n,slots:d,expose:T}){var i,t;const o=K("tabs"),{children:$,addChild:b,removeChild:h}=je(D(),"ElTabPane"),f=C(),m=C((t=(i=e.modelValue)!=null?i:e.activeName)!=null?t:"0"),c=async(a,S=!1)=>{var _,w,z;if(!(m.value===a||ae(a)))try{await((_=e.beforeLeave)==null?void 0:_.call(e,a,m.value))!==!1&&(m.value=a,S&&(n(be,a),n("tabChange",a)),(z=(w=f.value)==null?void 0:w.removeFocus)==null||z.call(w))}catch{}},l=(a,S,_)=>{a.props.disabled||(c(S,!0),n("tabClick",a,_))},O=(a,S)=>{a.props.disabled||ae(a.props.name)||(S.stopPropagation(),n("edit",a.props.name,"remove"),n("tabRemove",a.props.name))},E=()=>{n("edit",void 0,"add"),n("tabAdd")};return Ke({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},F(()=>!!e.activeName)),R(()=>e.activeName,a=>c(a)),R(()=>e.modelValue,a=>c(a)),R(m,async()=>{var a;await Y(),(a=f.value)==null||a.scrollToActiveTab()}),Se(q,{props:e,currentName:m,registerPane:b,unregisterPane:h}),T({currentName:m}),()=>{const a=d.addIcon,S=e.editable||e.addable?v("span",{class:o.e("new-tab"),tabindex:"0",onClick:E,onKeydown:z=>{z.code===V.enter&&E()}},[a?Q(d,"addIcon"):v(L,{class:o.is("icon-plus")},{default:()=>[v(Me,null,null)]})]):null,_=v("div",{class:[o.e("header"),o.is(e.tabPosition)]},[S,v(Ye,{ref:f,currentName:m.value,editable:e.editable,type:e.type,panes:$.value,stretch:e.stretch,onTabClick:l,onTabRemove:O},null)]),w=v("div",{class:o.e("content")},[Q(d,"default")]);return v("div",{class:[o.b(),o.m(e.tabPosition),{[o.m("card")]:e.type==="card",[o.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[_,w]:[w,_]])}}}),at=U({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),st=["id","aria-hidden","aria-labelledby"],fe="ElTabPane",nt=M({name:fe}),ot=M({...nt,props:at,setup(e){const n=e,d=D(),T=Ee(),i=X(q);i||ee(fe,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const t=K("tab-pane"),o=C(),$=F(()=>n.closable||i.props.closable),b=se(()=>{var l;return i.currentName.value===((l=n.name)!=null?l:o.value)}),h=C(b.value),f=F(()=>{var l;return(l=n.name)!=null?l:o.value}),m=se(()=>!n.lazy||h.value||b.value);R(b,l=>{l&&(h.value=!0)});const c=$e({uid:d.uid,slots:T,props:n,paneName:f,active:b,index:o,isClosable:$});return ie(()=>{i.registerPane(c)}),xe(()=>{i.unregisterPane(c.uid)}),(l,O)=>B(m)?Be((oe(),le("div",{key:0,id:`pane-${B(f)}`,class:re(B(t).b()),role:"tabpanel","aria-hidden":!B(b),"aria-labelledby":`tab-${B(f)}`},[Q(l.$slots,"default")],10,st)),[[Oe,B(b)]]):ke("v-if",!0)}});var me=ce(ot,[["__file","tab-pane.vue"]]);const bt=Ie(tt,{TabPane:me}),vt=Le(me);export{vt as E,bt as a};