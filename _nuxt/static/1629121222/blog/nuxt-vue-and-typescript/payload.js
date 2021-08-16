__NUXT_JSONP__("/blog/nuxt-vue-and-typescript", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_){return {data:[{post:{slug:"nuxt-vue-and-typescript",description:"My early experiences and troubles with the creation of a blog using Nuxt Content.",title:"Nuxt, Vue and TypeScript",createdAt:"2021-03-17T00:00:00.000Z",tags:["Nuxt","Vue","TypeScript","Nuxt Content"],toc:[{id:F,depth:r,text:G},{id:H,depth:r,text:I},{id:J,depth:r,text:K},{id:L,depth:r,text:M}],body:{type:"root",children:[{type:b,tag:s,props:{id:F},children:[{type:b,tag:k,props:{href:"#routing",ariaHidden:t,tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:G}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"After following an "},{type:b,tag:k,props:{href:"https:\u002F\u002Fnuxtjs.org\u002Fblog\u002Fcreating-blog-with-nuxt-content",rel:[N,O,P],target:Q},children:[{type:a,value:"official guide"}]},{type:a,value:" to get started, I had weird issues with routing.\nMy problem was the following project structure:"}]},{type:a,value:e},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,R]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"├── pages\n│   ├── index.vue\n│   ├── blog.vue\n│   ├── blog\n│   │   └── _slug.vue\n"}]}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"When navigating from "},{type:b,tag:g,props:{},children:[{type:a,value:"\u002Fblog"}]},{type:a,value:" to e.g. "},{type:b,tag:g,props:{},children:[{type:a,value:"\u002Fblog\u002Fhello-world"}]},{type:a,value:", the route changed and the component was instantiated, but the DOM didn't change.\nAfter some trial and error I found an easy fix (which I should have discovered earlier to be fair):\nMoving "},{type:b,tag:g,props:{},children:[{type:a,value:"blog.vue"}]},{type:a,value:" to "},{type:b,tag:g,props:{},children:[{type:a,value:"\u002Fblog\u002Findex.vue"}]},{type:a,value:", as seen below."}]},{type:a,value:e},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,R]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"├── pages\n│   ├── index.vue\n│   ├── blog\n│   │   ├── index.vue\n│   │   └── _slug.vue\n"}]}]}]},{type:a,value:e},{type:b,tag:s,props:{id:H},children:[{type:b,tag:k,props:{href:"#problems-with-type-checking",ariaHidden:t,tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:I}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Even though I selected TypeScript in "},{type:b,tag:g,props:{},children:[{type:a,value:S}]},{type:a,value:", the generated code wasn't set up properly.\n("},{type:b,tag:"strong",props:{},children:[{type:a,value:"Update:"}]},{type:a,value:" The problem has been fixed in a new version of "},{type:b,tag:g,props:{},children:[{type:a,value:S}]},{type:a,value:".)\nFor one, the TypeScript dependency was missing in "},{type:b,tag:g,props:{},children:[{type:a,value:"package.json"}]},{type:a,value:".\nFurthermore, I replaced all "},{type:b,tag:g,props:{},children:[{type:a,value:"nuxt-ts"}]},{type:a,value:" commands with "},{type:b,tag:g,props:{},children:[{type:a,value:"nuxt"}]},{type:a,value:" since they were causing warnings.\nComponents declared as"}]},{type:a,value:e},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:c,props:{className:[x]},children:[{type:a,value:y}]},{type:b,tag:n,props:{className:[o,z]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:B}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:E}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"or"}]},{type:a,value:e},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:c,props:{className:[x]},children:[{type:a,value:y}]},{type:b,tag:n,props:{className:[o,z]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:T}]},{type:a,value:" Vue "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:U}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:"'vue'"}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:B}]},{type:a,value:" Vue"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:"extend"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:E}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:_}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"had issues with type checking, resulting in errors during static site generation.\nInstead, I had to use the composition API.\nSince I am using Nuxt 2.x.x I had to resort to the "},{type:b,tag:k,props:{href:"https:\u002F\u002Fcomposition-api.nuxtjs.org\u002F",rel:[N,O,P],target:Q},children:[{type:a,value:"Nuxt Composition API"}]},{type:a,value:X}]},{type:a,value:e},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:c,props:{className:[x]},children:[{type:a,value:y}]},{type:b,tag:n,props:{className:[o,z]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:T}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:" defineComponent "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:U}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:"'@nuxtjs\u002Fcomposition-api'"}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:B}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:"defineComponent"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:E}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:_}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:s,props:{id:J},children:[{type:b,tag:k,props:{href:"#styling-markdown-code-with-prism",ariaHidden:t,tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:K}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Turns out Vuetify's styles are colliding with Prism's.\nAn easy fix is to unset the styles of the affected code blocks."}]},{type:a,value:e},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:c,props:{className:[x]},children:[{type:a,value:"assets\u002Fstyle.scss"}]},{type:b,tag:n,props:{className:[o,"language-scss"]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,"selector"]},children:[{type:a,value:".nuxt-content-highlight code "}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:"\n    "},{type:b,tag:c,props:{className:[d,"property"]},children:[{type:a,value:"all"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:":"}]},{type:a,value:" unset "},{type:b,tag:c,props:{className:[d,"important"]},children:[{type:a,value:"!important"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:";"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:s,props:{id:L},children:[{type:b,tag:k,props:{href:"#opinion-and-conclusion",ariaHidden:t,tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:M}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"So far using Nuxt was a refreshing experience.\nThe possibility to iterate rather quickly compared to Angular is nice.\nBuild times and nearly instantaneous changes are awesome.\nThough opaque (and in some cases missing) error messages resulted in an avoidable and cumbersome roadblock.\nAfter building multiple websites using the Nuxt, Vue, and TypeScript stack and learning about most of its quirks, my opinion has shifted to the positive.\nThe speed of development and ease of UI development that comes with frameworks like Vuetify has resulted in a highly enjoyable experience."}]}]},dir:"\u002Fen\u002Fblog",path:"\u002Fen\u002Fblog\u002Fnuxt-vue-and-typescript",extension:".md",updatedAt:"2021-08-16T13:39:13.524Z",readingTime:"2 min read",bodyText:"\u003Ch2\u003ERouting\u003C\u002Fh2\u003E\n\u003Cp\u003EAfter following an \u003Ca href=\"https:\u002F\u002Fnuxtjs.org\u002Fblog\u002Fcreating-blog-with-nuxt-content\"\u003Eofficial guide\u003C\u002Fa\u003E to get started, I had weird issues with routing.\nMy problem was the following project structure:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003E├── pages\n│   ├── index.vue\n│   ├── blog.vue\n│   ├── blog\n│   │   └── _slug.vue\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EWhen navigating from \u003Ccode\u003E\u002Fblog\u003C\u002Fcode\u003E to e.g. \u003Ccode\u003E\u002Fblog\u002Fhello-world\u003C\u002Fcode\u003E, the route changed and the component was instantiated, but the DOM didn't change.\nAfter some trial and error I found an easy fix (which I should have discovered earlier to be fair):\nMoving \u003Ccode\u003Eblog.vue\u003C\u002Fcode\u003E to \u003Ccode\u003E\u002Fblog\u002Findex.vue\u003C\u002Fcode\u003E, as seen below.\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003E├── pages\n│   ├── index.vue\n│   ├── blog\n│   │   ├── index.vue\n│   │   └── _slug.vue\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2\u003EProblems with type checking\u003C\u002Fh2\u003E\n\u003Cp\u003EEven though I selected TypeScript in \u003Ccode\u003Ecreate-nuxt-app\u003C\u002Fcode\u003E, the generated code wasn't set up properly.\n(\u003Cstrong\u003EUpdate:\u003C\u002Fstrong\u003E The problem has been fixed in a new version of \u003Ccode\u003Ecreate-nuxt-app\u003C\u002Fcode\u003E.)\nFor one, the TypeScript dependency was missing in \u003Ccode\u003Epackage.json\u003C\u002Fcode\u003E.\nFurthermore, I replaced all \u003Ccode\u003Enuxt-ts\u003C\u002Fcode\u003E commands with \u003Ccode\u003Enuxt\u003C\u002Fcode\u003E since they were causing warnings.\nComponents declared as\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-ts[pages\u002Findex.vue]\"\u003Eexport default {\n  ...\n}\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003Eor\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-ts[pages\u002Findex.vue]\"\u003Eimport Vue from 'vue'\n\nexport default Vue.extend({\n  ...\n})\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003Ehad issues with type checking, resulting in errors during static site generation.\nInstead, I had to use the composition API.\nSince I am using Nuxt 2.x.x I had to resort to the \u003Ca href=\"https:\u002F\u002Fcomposition-api.nuxtjs.org\u002F\"\u003ENuxt Composition API\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-ts[pages\u002Findex.vue]\"\u003Eimport { defineComponent } from '@nuxtjs\u002Fcomposition-api'\n\nexport default defineComponent({\n  ...\n})\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2\u003EStyling Markdown code with Prism\u003C\u002Fh2\u003E\n\u003Cp\u003ETurns out Vuetify's styles are colliding with Prism's.\nAn easy fix is to unset the styles of the affected code blocks.\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-scss[assets\u002Fstyle.scss]\"\u003E.nuxt-content-highlight code {\n    all: unset !important;\n}\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2\u003EOpinion and conclusion\u003C\u002Fh2\u003E\n\u003Cp\u003ESo far using Nuxt was a refreshing experience.\nThe possibility to iterate rather quickly compared to Angular is nice.\nBuild times and nearly instantaneous changes are awesome.\nThough opaque (and in some cases missing) error messages resulted in an avoidable and cumbersome roadblock.\nAfter building multiple websites using the Nuxt, Vue, and TypeScript stack and learning about most of its quirks, my opinion has shifted to the positive.\nThe speed of development and ease of UI development that comes with frameworks like Vuetify has resulted in a highly enjoyable experience.\u003C\u002Fp\u003E\n"},prev:void 0,next:{slug:"vue-masonry-wall",title:"Masonry layout in Vue 3",path:"\u002Fblog\u002Fvue-masonry-wall"}}],fetch:{},mutations:[]}}("text","element","span","token","\n","punctuation","code","keyword"," ","p","a","div","nuxt-content-highlight","pre","line-numbers","{","}",2,"h2","true",-1,"icon","icon-link","filename","pages\u002Findex.vue","language-ts","export","default","\n  ","operator","...","routing","Routing","problems-with-type-checking","Problems with type checking","styling-markdown-code-with-prism","Styling Markdown code with Prism","opinion-and-conclusion","Opinion and conclusion","nofollow","noopener","noreferrer","_blank","language-text","create-nuxt-app","import","from","string","\n\n",".","function","(",")")));