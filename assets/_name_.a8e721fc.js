import{d as v,s as x,m as w,e as C,v as y,i as V,l as $,r as a,o as b,c as g,a as t,t as i,u as s,b as c,w as k}from"./app.cc2c36b0.js";import{u as B}from"./models.4e6cc1b0.js";import{b as r}from"./route-block.b5bad31b.js";const M={class:"flex flex-col h-full"},N={class:"text-center"},O={class:"text-center text-lighter"},R={class:"flex-1"},T=v({name:"[name]",props:{name:null},setup(m){const d=m,{name:e}=x(d),u=w(()=>`/static/files/models/${e.value}.mview`),f=C(),p=B();y(e,n=>{p.find(l=>l.name===n)===void 0&&f.push("/files")},{immediate:!0});const{t:o}=V();return $(`files.models.${e.value}.title`),(n,l)=>{const _=a("MarmosetViewer"),h=a("ClientOnly");return b(),g("div",M,[t("h1",N,i(s(o)(`files.models.${s(e)}.title`)),1),t("p",O,i(s(o)(`files.models.${s(e)}.description`)),1),t("div",R,[c(h,null,{default:k(()=>[c(_,{src:s(u),responsive:"",height:0},null,8,["src"])]),_:1})])])}}});typeof r=="function"&&r(T);export{T as default};
