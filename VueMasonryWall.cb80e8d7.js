import{d as W,t as S,r as C,o as z,a as F,w as b,b as u,c as v,F as $,e as M,n as x,u as g,f as N,g as O,h as T,i as R,j as V,k as j,l as A,m as E}from"./chunks/runtime-core.esm-bundler.a94ce0ef.js";const D=["data-index"],L=W({__name:"masonry-wall",props:{columnWidth:{default:400},items:null,gap:{default:0},rtl:{type:Boolean,default:!1},ssrColumns:{default:0}},emits:["redraw","redrawSkip"],setup(t,{emit:n}){const c=t,{columnWidth:d,items:a,gap:o,rtl:y,ssrColumns:m}=S(c),s=C([]),f=C();function _(){const e=Math.floor((f.value.getBoundingClientRect().width+o.value)/(d.value+o.value));return e>0?e:1}function k(e){return[...new Array(e)].map(()=>[])}if(m.value>0){const e=k(m.value);a.value.forEach((r,i)=>e[i%m.value].push(i)),s.value=e}async function B(e){if(e>=a.value.length)return;await O();const r=[...f.value.children];y.value&&r.reverse();const i=r.reduce((p,l)=>l.getBoundingClientRect().height<p.getBoundingClientRect().height?l:p);s.value[+i.dataset.index].push(e),await B(e+1)}async function h(e=!1){if(s.value.length===_()&&!e){n("redrawSkip");return}s.value=k(_());const r=window.scrollY;await B(0),window.scrollTo({top:r}),n("redraw")}const w=typeof ResizeObserver>"u"?void 0:new ResizeObserver(()=>h());return z(()=>{h(),w?.observe(f.value)}),F(()=>w?.unobserve(f.value)),b([a,y],()=>h(!0)),b([d,o],()=>h()),(e,r)=>(u(),v("div",{ref_key:"wall",ref:f,class:"masonry-wall",style:x({display:"flex",gap:`${g(o)}px`})},[(u(!0),v($,null,M(s.value,(i,p)=>(u(),v("div",{key:p,class:"masonry-column","data-index":p,style:x({display:"flex","flex-basis":"0px","flex-direction":"column","flex-grow":1,height:["-webkit-max-content","-moz-max-content","max-content"],gap:`${g(o)}px`})},[(u(!0),v($,null,M(i,l=>(u(),v("div",{key:l,class:"masonry-item"},[N(e.$slots,"default",{item:g(a)[l],index:l},()=>[T(R(g(a)[l]),1)])]))),128))],12,D))),128))],4))}}),U=(()=>{const t=L;return t.install=n=>{n.component("MasonryWall",t)},t})(),Y=W({components:{MasonryWall:U},data(){return{items:[50,75,75,100,50,50,75,150,125,175,50,100,125]}}}),q=(t,n)=>{const c=t.__vccOpts||t;for(const[d,a]of n)c[d]=a;return c};function G(t,n,c,d,a,o){const y=A("MasonryWall");return u(),V(y,{items:t.items,"ssr-columns":1,"column-width":100,gap:16},{default:j(({item:m,index:s})=>[E("div",{style:x({height:`${m}px`}),class:"card flex items-center justify-center"},R(s),5)]),_:1},8,["items"])}const I=q(Y,[["render",G]]);export{I as default};