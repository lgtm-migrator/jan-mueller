(window.webpackJsonp=window.webpackJsonp||[]).push([[1,25],{628:function(t,e,r){var content=r(639);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("b908a1a8",content,!0,{sourceMap:!1})},630:function(t,e,r){var content=r(631);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("7132a15d",content,!0,{sourceMap:!1})},631:function(t,e,r){var o=r(17)(!1);o.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=o},638:function(t,e,r){"use strict";r(628)},639:function(t,e,r){var o=r(17)(!1);o.push([t.i,".tag-list{margin-top:0}.tag-list .tag-chip{margin-right:.5rem;margin-top:0;padding:0!important;min-width:unset!important}.tag-list .tag-chip span{opacity:1!important}",""]),t.exports=o},640:function(t,e){t.exports=function(component,t){var e="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(e.directives=component.exports.options.directives),e.directives=e.directives||{},t)e.directives[i]=e.directives[i]||t[i]}},644:function(t,e,r){"use strict";function o(t){var e,r;return(null!==(r=null===(e=t.tags)||void 0===e?void 0:e.length)&&void 0!==r?r:0)>0}r.d(e,"a",(function(){return o}))},647:function(t,e,r){"use strict";r.r(e);var o=r(38),n=(r(240),r(27)),l=Object(n.b)({props:{tags:{type:Array,required:!0},small:{type:Boolean,default:!1}},computed:{sortedTags:function(){return Object(o.a)(this.tags).sort()}}}),d=(r(638),r(21)),c=r(30),v=r.n(c),f=r(318),m=r(640),h=r.n(m),w=r(91),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"responsive-list tag-list"},t._l(t.sortedTags,(function(e,o){return r("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],key:o,staticClass:"tag-chip",attrs:{small:t.small,plain:"",color:"secondary"}},[t._v("\n    #"+t._s(e)+"\n  ")])})),1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:f.a}),h()(component,{Ripple:w.a})},654:function(t,e,r){"use strict";r(8),r(7),r(11),r(13),r(9),r(14);var o=r(2),n=(r(630),r(23));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=n.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:d({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:d({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},655:function(t,e,r){"use strict";var o=r(140),n=r(63),l=r(6),d=r(12);e.a=Object(l.a)(o.a,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(d.c)("v-hover should only contain a single element",this),element)):(Object(d.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},656:function(t,e,r){var map={"./code-blurry.webp":615,"./vue-masonry-wall/masonry.webp":616};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=656},660:function(t,e,r){var map={"./an-26/thumbnail.webp":619,"./apollo/thumbnail.webp":620,"./cyk-algorithm/thumbnail.webp":621,"./cyk-visualizer/thumbnail.webp":622,"./finwa/home.webp":623,"./finwa/overview.webp":624,"./finwa/thumbnail.webp":625,"./koffee/thumbnail.webp":626,"./refunk/thumbnail.webp":627};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=660},661:function(t,e,r){var content=r(674);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("20fb18d9",content,!0,{sourceMap:!1})},664:function(t,e,r){"use strict";r(331);var o=r(0);e.a=Object(o.g)("spacer","div","v-spacer")},665:function(t,e,r){"use strict";r.r(e);var o=r(27),n=r(644),l=Object(o.b)({props:{blogPost:{type:Object,required:!0},small:{type:Boolean,default:!1}},methods:{hasTags:n.a}}),d=r(21),c=r(30),v=r.n(c),f=r(589),m=r(588),h=r(654),w=r(655),_=r(175),y=r(214),x=r(637),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[o("v-card",{class:n?"secondary--text":"text",attrs:{to:t.blogPost.path,elevation:n?6:2}},[t.blogPost.image?o("v-img",{attrs:{src:r(656)("./"+t.blogPost.image),"aspect-ratio":16/9,"max-height":t.small?"6rem":"8rem"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[o("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[o("v-progress-circular",{attrs:{indeterminate:"",color:"primary","aria-label":t.$t("misc.loading")}})],1)]},proxy:!0}],null,!0)}):t._e(),t._v(" "),o("v-card-title",{staticClass:"text-h5",staticStyle:{"word-break":"normal"}},[t._v("\n      "+t._s(t.blogPost.title)+"\n    ")]),t._v(" "),o("v-card-subtitle",[o("i",[t._v("\n        "+t._s(t.$d(new Date(t.blogPost.createdAt),"short"))+" ·\n        "+t._s(t.blogPost.readingTime)+"\n      ")])]),t._v(" "),o("v-divider",{directives:[{name:"show",rawName:"v-show",value:!t.small,expression:"!small"}],staticClass:"mx-4"}),t._v(" "),o("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!t.small,expression:"!small"}]},[t._v("\n      "+t._s(t.blogPost.description)+"\n      "),t.hasTags(t.blogPost)?o("tag-list",{staticClass:"mt-2",attrs:{tags:t.blogPost.tags,small:""}}):t._e()],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports;v()(component,{TagList:r(647).default}),v()(component,{VCard:f.a,VCardSubtitle:m.b,VCardText:m.c,VCardTitle:m.d,VDivider:h.a,VHover:w.a,VImg:_.a,VProgressCircular:y.a,VRow:x.a})},668:function(t,e,r){"use strict";r.r(e);var o=r(52),n=r(27),l=Object(n.b)({props:{project:{type:Object,required:!0},small:{type:Boolean,default:!1}},data:function(){return{mdiGithub:o.k,mdiTelevisionPlay:o.s}}}),d=r(21),c=r(30),v=r.n(c),f=r(589),m=r(588),h=r(654),w=r(655),_=r(211),y=r(175),x=r(214),j=r(637),k=r(664),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[o("v-card",{staticClass:"project-card",class:n?"secondary--text":"text",attrs:{to:t.project.path,elevation:n?6:2}},[t.project.thumbnail?o("v-img",{attrs:{src:r(660)("./"+t.project.thumbnail),"aspect-ratio":2,contain:"contain","max-height":t.small?"6rem":"8rem"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[o("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[o("v-progress-circular",{attrs:{indeterminate:"",color:"primary","aria-label":t.$t("misc.loading")}})],1)]},proxy:!0}],null,!0)}):t._e(),t._v(" "),o("v-card-title",{staticClass:"text-h5 card-title",staticStyle:{"word-break":"normal"}},[t._v("\n      "+t._s(t.project.title)+"\n      "),o("v-spacer",{staticStyle:{"min-width":"1rem"}}),t._v(" "),o("div",[t.project.repository||t.project.repositories&&t.project.repositories.length>0?o("v-icon",{attrs:{small:""}},[t._v("\n          "+t._s(t.mdiGithub)+"\n        ")]):t._e(),t._v(" "),t.project.demo?o("v-icon",{attrs:{small:""}},[t._v("\n          "+t._s(t.mdiTelevisionPlay)+"\n        ")]):t._e()],1)],1),t._v(" "),o("v-divider",{directives:[{name:"show",rawName:"v-show",value:!t.small,expression:"!small"}],staticClass:"mx-4"}),t._v(" "),o("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!t.small,expression:"!small"}]},[t._v(t._s(t.project.description))])],1)]}}])})}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCard:f.a,VCardText:m.c,VCardTitle:m.d,VDivider:h.a,VHover:w.a,VIcon:_.a,VImg:y.a,VProgressCircular:x.a,VRow:j.a,VSpacer:k.a})},673:function(t,e,r){"use strict";r(661)},674:function(t,e,r){var o=r(17),n=r(675),l=r(632),d=o(!1),c=n(l);d.push([t.i,".wave__body[data-v-89d1b10a],.wave__bottom[data-v-89d1b10a],.wave__top[data-v-89d1b10a]{background-color:var(--wave-color)}.wave__body[data-v-89d1b10a]{width:100%}.wave__bottom[data-v-89d1b10a],.wave__top[data-v-89d1b10a]{-webkit-animation:scroll-data-v-89d1b10a calc(3600s/var(--wave-speed-multiplier)) cubic-bezier(.13,.28,.95,.79) infinite;animation:scroll-data-v-89d1b10a calc(3600s/var(--wave-speed-multiplier)) cubic-bezier(.13,.28,.95,.79) infinite;height:65px;-webkit-mask-image:url("+c+");mask-image:url("+c+");-webkit-mask-position:var(--wave-offset) 0;mask-position:var(--wave-offset) 0;-webkit-mask-repeat:repeat-x;mask-repeat:repeat-x;-webkit-mask-size:3440px 65px;mask-size:3440px 65px;width:100%;z-index:0}.wave__top[data-v-89d1b10a]{margin-bottom:-1px;transform:rotate(180deg)}.wave__bottom[data-v-89d1b10a]{margin-top:-1px}@-webkit-keyframes scroll-data-v-89d1b10a{0%{-webkit-mask-position:var(--wave-offset) 0;mask-position:var(--wave-offset) 0}to{-webkit-mask-position:-200000px 0;mask-position:-200000px 0}}@keyframes scroll-data-v-89d1b10a{0%{-webkit-mask-position:var(--wave-offset) 0;mask-position:var(--wave-offset) 0}to{-webkit-mask-position:-200000px 0;mask-position:-200000px 0}}",""]),t.exports=d},675:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},678:function(t,e,r){var content=r(701);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("5932813e",content,!0,{sourceMap:!1})},684:function(t,e,r){"use strict";r.r(e);r(28);var o=r(27),n=Object(o.b)({props:{color:{type:String,default:"rgba(47, 73, 94, 1)"},offsetTop:{type:Number,default:0},offsetBottom:{type:Number,default:256},speedMultiplier:{type:Number,default:1}}}),l=(r(673),r(21)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wave",style:{"--wave-color":t.color,"--wave-speed-multiplier":t.speedMultiplier}},[r("div",{staticClass:"wave__top",style:{"--wave-offset":t.offsetTop+"px"}}),t._v(" "),r("div",{staticClass:"wave__body"},[t._t("default")],2),t._v(" "),r("div",{staticClass:"wave__bottom",style:{"--wave-offset":t.offsetBottom+"px"}})])}),[],!1,null,"89d1b10a",null);e.default=component.exports},700:function(t,e,r){"use strict";r(678)},701:function(t,e,r){var o=r(17)(!1);o.push([t.i,"h2[data-v-2d1646dd]{margin-bottom:.25em}#blog[data-v-2d1646dd],#projects[data-v-2d1646dd]{display:flex;flex-direction:column;align-items:center}#blog>h1[data-v-2d1646dd],#projects>h1[data-v-2d1646dd]{color:#fff}#blog>.card-row[data-v-2d1646dd],#projects>.card-row[data-v-2d1646dd]{display:flex;width:100%}#blog>.card-row>*[data-v-2d1646dd],#projects>.card-row>*[data-v-2d1646dd]{width:33.33333%;height:-webkit-fit-content;height:fit-content;height:-moz-fit-content}#blog>.card-row>*+*[data-v-2d1646dd],#projects>.card-row>*+*[data-v-2d1646dd]{margin-left:.75rem}@media only screen and (max-width:600px){#blog>.card-row[data-v-2d1646dd],#projects>.card-row[data-v-2d1646dd]{flex-direction:column}#blog>.card-row>*[data-v-2d1646dd],#projects>.card-row>*[data-v-2d1646dd]{width:100%}#blog>.card-row>*+*[data-v-2d1646dd],#projects>.card-row>*+*[data-v-2d1646dd]{margin-left:0;margin-top:.75rem}}#blog .v-btn[data-v-2d1646dd],#projects .v-btn[data-v-2d1646dd]{margin-top:1rem;width:-webkit-fit-content;width:fit-content;width:-moz-fit-content}",""]),t.exports=o},716:function(t,e,r){"use strict";r.r(e);r(42);var o=r(27),n=r(52),l=r(139),d=Object(o.b)({props:{projects:{type:Array,required:!0},blogPosts:{type:Array,required:!0}},data:function(){return{mdiArrowRight:n.a,routes:l.c}},computed:{displayedProjects:function(){return this.projects.slice(0,3)},displayedBlogPosts:function(){return this.blogPosts.slice(0,3)}}}),c=(r(700),r(21)),v=r(30),f=r.n(v),m=r(318),h=r(211),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("wave",{staticClass:"mb-4",attrs:{"offset-top":-64,"offset-bottom":320,color:t.$vuetify.theme.currentTheme.secondary,"speed-multiplier":.7}},[r("wave",{attrs:{color:t.$vuetify.theme.currentTheme.accent,"speed-multiplier":.5}},[r("container",{staticClass:"d-block",attrs:{"bound-width":""}},[r("section",{attrs:{id:"projects"}},[r("h1",{staticClass:"text-center"},[t._v(t._s(t.$t(t.routes.projects.title)))]),t._v(" "),r("div",{staticClass:"card-row"},t._l(t.displayedProjects,(function(t){return r("project-card",{key:t.slug,attrs:{project:t,small:""}})})),1),t._v(" "),r("v-btn",{attrs:{to:t.localePath(t.routes.projects.to),color:"white",text:"","x-large":""}},[t._v("\n          "+t._s(t.$t("misc.all-projects"))+"\n          "),r("v-icon",{staticClass:"ml-1"},[t._v(t._s(t.mdiArrowRight))])],1)],1),t._v(" "),r("section",{staticClass:"mt-12",attrs:{id:"blog"}},[r("h1",{staticClass:"text-center"},[t._v(t._s(t.$t(t.routes.blog.title)))]),t._v(" "),r("div",{staticClass:"card-row"},t._l(t.displayedBlogPosts,(function(t){return r("blog-post-card",{key:t.slug,attrs:{"blog-post":t,small:""}})})),1),t._v(" "),r("v-btn",{attrs:{to:t.localePath(t.routes.blog.to),color:"white",text:"","x-large":""}},[t._v("\n          "+t._s(t.$t("misc.all-posts"))+"\n          "),r("v-icon",{staticClass:"ml-1"},[t._v(t._s(t.mdiArrowRight))])],1)],1)])],1)],1)}),[],!1,null,"2d1646dd",null);e.default=component.exports;f()(component,{ProjectCard:r(668).default,BlogPostCard:r(665).default,Container:r(333).default,Wave:r(684).default}),f()(component,{VBtn:m.a,VIcon:h.a})}}]);