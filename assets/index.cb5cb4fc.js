import{u as g,D as h,d as x}from"./app.05faa1ef.js";import{d as y,u as $,r,o as i,n as k,w as c,f as a,e,t as o,g as n,b as w,F as D,q as B}from"./vendor.ba77496e.js";import{u as C}from"./documents.23cf6091.js";import{u as F}from"./models.4e6cc1b0.js";const N={class:"card"},V={class:"text-xl"},b={class:"text-lighter"},v={class:"text-light"},z=y({setup(T){g("button.files");const m=C(),_=F(),p=[...m,..._],{t}=$();return(q,E)=>{const f=x,u=r("router-link"),d=r("masonry-wall");return i(),k(d,{items:p,"ssr-columns":1,"column-width":300,gap:16,class:"text-sm"},{default:c(({item:s})=>[a(u,{to:`/files/${s.type}/${s.name}`,class:"no-underline"},{default:c(()=>{var l;return[e("div",N,[e("span",V,o(n(t)(`files.${s.type}.${s.name}.title`)),1),e("span",b,[a(f,{date:s.date,format:(l=s.dateFormat)!=null?l:"default"},null,8,["date","format"]),s.language?(i(),w(D,{key:0},[a(h),e("span",null,o(n(t)(s.language)),1)],64)):B("",!0)]),e("span",v,o(n(t)(`files.${s.type}.${s.name}.description`)),1)])]}),_:2},1032,["to"])]),_:1})}}});export{z as default};