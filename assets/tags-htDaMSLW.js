import{d as N,o as s,c as k,h as n,t as _,a0 as j,a1 as A,j as D,u as E,a as H,H as I,Z as O,ac as U,q as S,C as W,v as Z,a3 as G,$ as J,m as K,b as c,w as t,f as i,a2 as M,e,n as Q,F as X,r as Y,z as ee,g as te,U as se}from"./app-_hr3V41C.js";import{_ as ae,a as ne}from"./SakuraPostCollapse.vue_vue_type_style_index_0_lang-CnYGpJwO.js";import{_ as oe}from"./SakuraPageHeader-D1nDS45h.js";import"./SakuraDate.vue_vue_type_script_setup_true_lang-FaO4XTB6.js";const re={"inline-flex":"",my:"2",p:"1",class:"post-tag cursor-pointer items-baseline leading-4"},le={"inline-flex":""},ce={"inline-flex":"",text:"xs"},ie=N({__name:"SakuraLayoutPostTag",props:{title:{},count:{}},setup(x){return(o,p)=>(s(),k("span",re,[n("span",le,"#"+_(o.title),1),n("span",ce,"["+_(o.count)+"]",1)]))}}),ue={class:"yun-text-light",text:"center",p:"2"},me={class:"justify-center items-end",flex:"~ wrap",gap:"1"},ye={__name:"tags",setup(x){var v;j([A({"@type":"CollectionPage"})]);const o=D(),p=E(),f=H(),{t:g}=I(),r=O(),{tags:d,getTagStyle:b}=U({primary:(v=f.value.colors)==null?void 0:v.primary}),l=S(()=>o.query.tag||""),w=W(),T=S(()=>w.postList.filter(a=>a.tags?typeof a.tags=="string"?a.tags===l.value:a.tags.includes(l.value):!1)),y=Z(),{show:$}=G(y);function P(u){p.push({query:{tag:u}}),$()}const L=J(r);return(u,a)=>{const V=oe,B=ie,h=K("RouterView"),R=ae,q=ne,z=se;return s(),c(z,null,{default:t(()=>[i(h,null,{default:t(({Component:F})=>[(s(),c(M(F),null,{"main-header":t(()=>[i(V,{title:e(L)||e(g)("menu.tags"),"sub-title":l.value,icon:e(r).icon||"i-ri-tag-line",color:e(r).color,cover:e(r).cover},null,8,["title","sub-title","icon","color","cover"])]),"main-content":t(()=>[n("div",{class:Q(e(f).animation&&"element-slide-up")},[n("div",ue,_(e(g)("counter.tags",Array.from(e(d)).length)),1),n("div",me,[(s(!0),k(X,null,Y(Array.from(e(d)).sort(),([m,C])=>(s(),c(B,{key:m,title:m,count:C.count,style:ee(e(b)(C.count)),onClick:_e=>P(m.toString())},null,8,["title","count","style","onClick"]))),128))]),i(h)],2)]),"main-nav-before":t(()=>[l.value?(s(),c(q,{key:0,ref_key:"collapse",ref:y,m:"t-4",w:"full"},{default:t(()=>[i(R,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:T.value},null,8,["posts"])]),_:1},512)):te("v-if",!0)]),_:2},1024))]),_:1})]),_:1})}}};export{ye as default};
