__NUXT_JSONP__("/de/projects/graph-editor", (function(a,b,c,d,e,f,g,h,i,j,k,l,m){return {data:[{project:{slug:f,description:"Simple editor for directed graphs, built with D3.js.",title:g,repository:f,demo:h,toc:[{id:i,depth:2,text:j}],body:{type:"root",children:[{type:b,tag:e,props:{},children:[{type:a,value:"My bachelor thesis required an interactive graph editor.\nBased on that implementation I created a stripped down demonstration tool.\nI removed domain specific features, like adding labels to nodes and links, and ported it from Angular to Vue."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Getting cross-browser touch controls to work was quite difficult, because of wildly different behaviour for some events.\nEven though I relied on "},{type:b,tag:d,props:{},children:[{type:a,value:"PointerEvent"}]},{type:a,value:" for creating links, mouse and touch interaction resulted in events firing for different DOM elements.\nIn particular, touch input always provided the same elements for both "},{type:b,tag:d,props:{},children:[{type:a,value:"pointerdown"}]},{type:a,value:" and "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:".\nThis happened regardless of the actual element "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" should have provided and did not match the behavior of mouse inputs."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The solution I came up with was to use separate events for mouse and touch input.\nIn addition, touch events now check for intersections between nodes and the pointer to handle the creating of links."}]},{type:a,value:c},{type:b,tag:"h2",props:{id:i},children:[{type:b,tag:"a",props:{ariaHidden:"true",href:"#demo",tabIndex:-1},children:[{type:b,tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:j}]},{type:a,value:c},{type:b,tag:"iframe",props:{src:h,title:g,width:"100%",height:"500px",frameBorder:"0"},children:[]}]},dir:"\u002Fen\u002Fprojects",path:"\u002Fen\u002Fprojects\u002Fgraph-editor",extension:".md",createdAt:l,updatedAt:l},prev:m,next:m}],fetch:{},mutations:[]}}("text","element","\n","code","p","graph-editor","Graph Editor","https:\u002F\u002Fgraph.yeger.eu","demo","Demo","pointerup","2021-03-29T17:37:59.181Z",void 0)));