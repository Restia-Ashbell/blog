import{d as P,u as K,j as x,q as b,v as A,H as R,a3 as N,x as T,m as q,o as a,c as i,h as m,t as C,e as s,F as h,r as V,a4 as U,b as d,w as p,g as B,f as _,a0 as j,a1 as D,C as F,Z as H,a as W,a5 as M,$ as O,a2 as Z,n as G,U as J}from"./app-_hr3V41C.js";import{_ as Q,a as X}from"./SakuraPostCollapse.vue_vue_type_style_index_0_lang-CnYGpJwO.js";import{_ as Y}from"./SakuraPageHeader-D1nDS45h.js";import"./SakuraDate.vue_vue_type_script_setup_true_lang-FaO4XTB6.js";const I={class:"category-list-item inline-flex items-center cursor-pointer"},ee={key:0,"i-ri-folder-add-line":""},te={key:1,style:{color:"var(--va-c-primary)"},"i-ri-folder-reduce-line":""},ae={key:0},oe=m("div",{"i-ri-file-text-line":""},null,-1),se={m:"l-1",font:"serif black"},ne=P({__name:"SakuraCategory",props:{parentKey:{},category:{},level:{},collapsable:{type:Boolean,default:!0}},setup(S){const f=S,c=K(),n=x(),g=b(()=>{const e=n.query.category||"";return Array.isArray(e)?[e]:e.split("/")}),u=A(f.collapsable),{t}=R(),{locale:y}=R();function $(e){const l=y.value==="zh-CN"?"zh":y.value;return e[`title_${l}`]?e[`title_${l}`]:e.title}const v=A(),{show:L}=N(v);function r(e){c.push({query:{category:e}}),L()}return T(()=>{const e=document.querySelector(".post-collapse-container");e&&(v.value=e)}),(e,l)=>{const k=q("SakuraCategory",!0),w=q("RouterLink");return a(),i(h,null,[m("li",I,[m("span",{class:"folder-action inline-flex",onClick:l[0]||(l[0]=o=>u.value=!u.value)},[u.value?(a(),i("div",ee)):(a(),i("div",te))]),m("span",{class:"category-name",m:"l-1",onClick:l[1]||(l[1]=o=>r(e.parentKey))},C(e.category.name==="Uncategorized"?s(t)("category.uncategorized"):e.category.name)+" ["+C(e.category.total)+"] ",1)]),u.value?B("v-if",!0):(a(),i("ul",ae,[(a(!0),i(h,null,V(e.category.children.values(),(o,z)=>(a(),i("li",{key:z,class:"post-list-item",m:"l-4"},[s(U)(o)?(a(),d(k,{key:0,"parent-key":e.parentKey?`${e.parentKey}/${o.name}`:o.name,category:o,collapsable:!g.value.includes(o.name)},null,8,["parent-key","category","collapsable"])):(a(),i(h,{key:1},[o.title?(a(),d(w,{key:0,to:o.path||"",class:"inline-flex items-center"},{default:p(()=>[oe,m("span",se,C($(o)),1)]),_:2},1032,["to"])):B("v-if",!0)],64))]))),128))]))],64)}}}),re=P({__name:"SakuraCategories",props:{categories:{},level:{default:0},collapsable:{type:Boolean,default:!0}},setup(S){const f=x(),c=b(()=>{const n=f.query.category||"";return Array.isArray(n)?[n]:n.split("/")});return(n,g)=>{const u=ne;return a(!0),i(h,null,V(n.categories.values(),t=>(a(),i("ul",{key:t.name,class:"category-list",m:"l-4"},[_(u,{"parent-key":t.name,category:t,level:n.level+1,collapsable:!c.value.includes(t.name)},null,8,["parent-key","category","level","collapsable"])]))),128)}}}),le={text:"center",class:"yun-text-light",p:"2"},me={__name:"categories",setup(S){j([D({"@type":"CollectionPage"})]);const f=F(),c=H(),n=W(),{t:g}=R(),u=x(),t=b(()=>u.query.category||""),y=M(),$=b(()=>f.postList.filter(r=>r.categories&&t.value!=="Uncategorized"?typeof r.categories=="string"?r.categories===t.value:r.categories.join("/").startsWith(t.value)&&r.categories[0]===t.value.split("/")[0]:!r.categories&&t.value==="Uncategorized"?r.categories===void 0:!1)),v=O(c);return(L,r)=>{const e=Y,l=re,k=q("RouterView"),w=Q,o=X,z=J;return a(),d(z,{class:"relative"},{default:p(()=>[_(k,null,{default:p(({Component:E})=>[(a(),d(Z(E),null,{"main-header":p(()=>[_(e,{title:s(v)||s(g)("menu.categories"),"sub-title":t.value,icon:s(c).icon||"i-ri-tag-line",color:s(c).color,cover:s(c).cover},null,8,["title","sub-title","icon","color","cover"])]),"main-content":p(()=>[m("div",{class:G(s(n).animation&&"element-slide-up")},[m("div",le,C(s(g)("counter.categories",Array.from(s(y).children).length)),1),_(l,{categories:s(y).children},null,8,["categories"]),_(k)],2)]),"main-nav-before":p(()=>[t.value?(a(),d(o,{key:0,class:"post-collapse-container",m:"t-4",w:"full"},{default:p(()=>[_(w,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:$.value},null,8,["posts"])]),_:1})):B("v-if",!0)]),_:2},1024))]),_:1})]),_:1})}}};export{me as default};
