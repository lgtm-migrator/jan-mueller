import{d as r,q as l,m as f,z as i,o as p,b as d,g as h,x as _}from"./vendor.a58c09b2.js";import{u as v}from"./app.7d96f0cc.js";import{u as b}from"./documents.23cf6091.js";var o={};const j=["src"],k=r({props:{name:null},setup(c){const n=c,{name:e}=l(n),a=f(()=>`/static/files/documents/${e.value}.pdf`),u=_(),m=b();return i(e,s=>{m.find(t=>t.name===s)===void 0&&u.push("/files")},{immediate:!0}),v(`files.documents.${e.value}.title`),(s,t)=>(p(),d("embed",{src:h(a),class:"w-full h-full"},null,8,j))}});typeof o=="function"&&o(k);export{k as default};
