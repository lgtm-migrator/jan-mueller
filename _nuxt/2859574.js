(window.webpackJsonp=window.webpackJsonp||[]).push([[1,26],{636:function(t,e,r){var content=r(647);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("b908a1a8",content,!0,{sourceMap:!1})},638:function(t,e,r){var content=r(639);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("7132a15d",content,!0,{sourceMap:!1})},639:function(t,e,r){var o=r(17)(!1);o.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=o},646:function(t,e,r){"use strict";r(636)},647:function(t,e,r){var o=r(17)(!1);o.push([t.i,".tag-list{margin-top:0}.tag-list .tag-chip{margin-right:.5rem;margin-top:0;padding:0!important;min-width:unset!important}.tag-list .tag-chip span{opacity:1!important}",""]),t.exports=o},648:function(t,e){t.exports=function(component,t){var e="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(e.directives=component.exports.options.directives),e.directives=e.directives||{},t)e.directives[i]=e.directives[i]||t[i]}},652:function(t,e,r){"use strict";function o(t){var e,r;return(null!==(r=null===(e=t.tags)||void 0===e?void 0:e.length)&&void 0!==r?r:0)>0}r.d(e,"a",(function(){return o}))},655:function(t,e,r){"use strict";r.r(e);var o=r(38),n=(r(247),r(26)),l=Object(n.b)({props:{tags:{type:Array,required:!0},small:{type:Boolean,default:!1}},computed:{sortedTags:function(){return Object(o.a)(this.tags).sort()}}}),c=(r(646),r(21)),d=r(30),v=r.n(d),f=r(325),m=r(648),h=r.n(m),w=r(92),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"responsive-list tag-list"},t._l(t.sortedTags,(function(e,o){return r("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],key:o,staticClass:"tag-chip",attrs:{small:t.small,plain:"",color:"secondary"}},[t._v("\n    #"+t._s(e)+"\n  ")])})),1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:f.a}),h()(component,{Ripple:w.a})},662:function(t,e,r){"use strict";r(8),r(7),r(11),r(13),r(10),r(14);var o=r(2),n=(r(638),r(23));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=n.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},663:function(t,e,r){"use strict";var o=r(145),n=r(63),l=r(6),c=r(12);e.a=Object(l.a)(o.a,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},664:function(t,e,r){var map={"./code-blurry.webp":623,"./vue-masonry-wall/masonry.webp":624};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=664},668:function(t,e,r){var map={"./an-26/thumbnail.webp":627,"./apollo/thumbnail.webp":628,"./cyk-algorithm/thumbnail.webp":629,"./cyk-visualizer/thumbnail.webp":630,"./finwa/home.webp":631,"./finwa/overview.webp":632,"./finwa/thumbnail.webp":633,"./koffee/thumbnail.webp":634,"./refunk/thumbnail.webp":635};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=668},669:function(t,e,r){var content=r(682);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("b2a1be7c",content,!0,{sourceMap:!1})},672:function(t,e,r){"use strict";r(338);var o=r(0);e.a=Object(o.h)("spacer","div","v-spacer")},673:function(t,e,r){"use strict";r.r(e);var o=r(26),n=r(652),l=Object(o.b)({props:{blogPost:{type:Object,required:!0},small:{type:Boolean,default:!1}},methods:{hasTags:n.a}}),c=r(21),d=r(30),v=r.n(d),f=r(597),m=r(596),h=r(662),w=r(663),_=r(184),y=r(220),x=r(645),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[o("v-card",{class:n?"secondary--text":"text",attrs:{to:t.blogPost.path,elevation:n?6:2}},[t.blogPost.image?o("v-img",{attrs:{src:r(664)("./"+t.blogPost.image),"aspect-ratio":16/9,"max-height":t.small?"6rem":"8rem"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[o("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[o("v-progress-circular",{attrs:{indeterminate:"",color:"primary","aria-label":t.$t("misc.loading")}})],1)]},proxy:!0}],null,!0)}):t._e(),t._v(" "),o("v-card-title",{staticClass:"text-h5",staticStyle:{"word-break":"normal"}},[t._v("\n      "+t._s(t.blogPost.title)+"\n    ")]),t._v(" "),o("v-card-subtitle",[o("i",[t._v("\n        "+t._s(t.$d(new Date(t.blogPost.createdAt),"short"))+" ·\n        "+t._s(t.blogPost.readingTime)+"\n      ")])]),t._v(" "),o("v-divider",{directives:[{name:"show",rawName:"v-show",value:!t.small,expression:"!small"}],staticClass:"mx-4"}),t._v(" "),o("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!t.small,expression:"!small"}]},[t._v("\n      "+t._s(t.blogPost.description)+"\n      "),t.hasTags(t.blogPost)?o("tag-list",{staticClass:"mt-2",attrs:{tags:t.blogPost.tags,small:""}}):t._e()],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports;v()(component,{TagList:r(655).default}),v()(component,{VCard:f.a,VCardSubtitle:m.b,VCardText:m.c,VCardTitle:m.d,VDivider:h.a,VHover:w.a,VImg:_.a,VProgressCircular:y.a,VRow:x.a})},676:function(t,e,r){"use strict";r.r(e);var o=r(53),n=r(26),l=Object(n.b)({props:{project:{type:Object,required:!0},small:{type:Boolean,default:!1}},data:function(){return{mdiGithub:o.k,mdiTelevisionPlay:o.s}}}),c=r(21),d=r(30),v=r.n(d),f=r(597),m=r(596),h=r(662),w=r(663),_=r(217),y=r(184),x=r(220),j=r(645),k=r(672),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[o("v-card",{staticClass:"project-card",class:n?"secondary--text":"text",attrs:{to:t.project.path,elevation:n?6:2}},[t.project.thumbnail?o("v-img",{attrs:{src:r(668)("./"+t.project.thumbnail),"aspect-ratio":2,contain:"contain","max-height":t.small?"6rem":"8rem"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[o("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[o("v-progress-circular",{attrs:{indeterminate:"",color:"primary","aria-label":t.$t("misc.loading")}})],1)]},proxy:!0}],null,!0)}):t._e(),t._v(" "),o("v-card-title",{staticClass:"text-h5 card-title",staticStyle:{"word-break":"normal"}},[t._v("\n      "+t._s(t.project.title)+"\n      "),o("v-spacer",{staticStyle:{"min-width":"1rem"}}),t._v(" "),o("div",[t.project.repository||t.project.repositories&&t.project.repositories.length>0?o("v-icon",{attrs:{small:""}},[t._v("\n          "+t._s(t.mdiGithub)+"\n        ")]):t._e(),t._v(" "),t.project.demo?o("v-icon",{attrs:{small:""}},[t._v("\n          "+t._s(t.mdiTelevisionPlay)+"\n        ")]):t._e()],1)],1),t._v(" "),o("v-divider",{directives:[{name:"show",rawName:"v-show",value:!t.small,expression:"!small"}],staticClass:"mx-4"}),t._v(" "),o("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!t.small,expression:"!small"}]},[t._v(t._s(t.project.description))])],1)]}}])})}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCard:f.a,VCardText:m.c,VCardTitle:m.d,VDivider:h.a,VHover:w.a,VIcon:_.a,VImg:y.a,VProgressCircular:x.a,VRow:j.a,VSpacer:k.a})},681:function(t,e,r){"use strict";r(669)},682:function(t,e,r){var o=r(17),n=r(683),l=r(640),c=o(!1),d=n(l);c.push([t.i,".wave__body[data-v-234ff8a3],.wave__bottom[data-v-234ff8a3],.wave__top[data-v-234ff8a3]{background-color:var(--wave-color)}.wave__body[data-v-234ff8a3]{width:100%}.wave__bottom[data-v-234ff8a3],.wave__top[data-v-234ff8a3]{-webkit-animation:scroll-data-v-234ff8a3 calc(3600s/var(--wave-speed-multiplier)) cubic-bezier(.13,.28,.95,.79) infinite;animation:scroll-data-v-234ff8a3 calc(3600s/var(--wave-speed-multiplier)) cubic-bezier(.13,.28,.95,.79) infinite;height:65px;-webkit-mask-image:url("+d+");mask-image:url("+d+");-webkit-mask-position:var(--wave-offset) 0;mask-position:var(--wave-offset) 0;-webkit-mask-repeat:repeat-x;mask-repeat:repeat-x;-webkit-mask-size:3440px 65px;mask-size:3440px 65px;width:100%;z-index:0}.wave__top[data-v-234ff8a3]{margin-bottom:-1px;transform:rotate(180deg)}.wave__bottom[data-v-234ff8a3]{margin-top:-1px}@-webkit-keyframes scroll-data-v-234ff8a3{0%{-webkit-mask-position:var(--wave-offset) 0;mask-position:var(--wave-offset) 0}to{-webkit-mask-position:-200000px 0;mask-position:-200000px 0}}@keyframes scroll-data-v-234ff8a3{0%{-webkit-mask-position:var(--wave-offset) 0;mask-position:var(--wave-offset) 0}to{-webkit-mask-position:-200000px 0;mask-position:-200000px 0}}",""]),t.exports=c},683:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},686:function(t,e,r){var content=r(710);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("5932813e",content,!0,{sourceMap:!1})},693:function(t,e,r){"use strict";r.r(e);r(27);var o=r(26),n=Object(o.b)({props:{color:{type:String,default:"rgba(47, 73, 94, 1)"},offsetTop:{type:Number,default:0},offsetBottom:{type:Number,default:256},speedMultiplier:{type:Number,default:1}}}),l=(r(681),r(21)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wave",style:{"--wave-color":t.color,"--wave-speed-multiplier":t.speedMultiplier}},[r("div",{staticClass:"wave__top",style:{"--wave-offset":t.offsetTop+"px"}}),t._v(" "),r("div",{staticClass:"wave__body"},[t._t("default")],2),t._v(" "),r("div",{staticClass:"wave__bottom",style:{"--wave-offset":t.offsetBottom+"px"}})])}),[],!1,null,"234ff8a3",null);e.default=component.exports},709:function(t,e,r){"use strict";r(686)},710:function(t,e,r){var o=r(17)(!1);o.push([t.i,"h2[data-v-2d1646dd]{margin-bottom:.25em}#blog[data-v-2d1646dd],#projects[data-v-2d1646dd]{display:flex;flex-direction:column;align-items:center}#blog>h1[data-v-2d1646dd],#projects>h1[data-v-2d1646dd]{color:#fff}#blog>.card-row[data-v-2d1646dd],#projects>.card-row[data-v-2d1646dd]{display:flex;width:100%}#blog>.card-row>*[data-v-2d1646dd],#projects>.card-row>*[data-v-2d1646dd]{width:33.33333%;height:-webkit-fit-content;height:fit-content;height:-moz-fit-content}#blog>.card-row>*+*[data-v-2d1646dd],#projects>.card-row>*+*[data-v-2d1646dd]{margin-left:.75rem}@media only screen and (max-width:600px){#blog>.card-row[data-v-2d1646dd],#projects>.card-row[data-v-2d1646dd]{flex-direction:column}#blog>.card-row>*[data-v-2d1646dd],#projects>.card-row>*[data-v-2d1646dd]{width:100%}#blog>.card-row>*+*[data-v-2d1646dd],#projects>.card-row>*+*[data-v-2d1646dd]{margin-left:0;margin-top:.75rem}}#blog .v-btn[data-v-2d1646dd],#projects .v-btn[data-v-2d1646dd]{margin-top:1rem;width:-webkit-fit-content;width:fit-content;width:-moz-fit-content}",""]),t.exports=o},727:function(t,e,r){"use strict";r.r(e);r(43);var o=r(26),n=r(53),l=r(144),c=Object(o.b)({props:{projects:{type:Array,required:!0},blogPosts:{type:Array,required:!0}},data:function(){return{mdiArrowRight:n.a,routes:l.c}},computed:{displayedProjects:function(){return this.projects.slice(0,3)},displayedBlogPosts:function(){return this.blogPosts.slice(0,3)}}}),d=(r(709),r(21)),v=r(30),f=r.n(v),m=r(325),h=r(217),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("wave",{staticClass:"mb-4",attrs:{"offset-top":-64,"offset-bottom":320,color:t.$vuetify.theme.currentTheme.secondary,"speed-multiplier":.7}},[r("wave",{attrs:{color:t.$vuetify.theme.currentTheme.accent,"speed-multiplier":.5}},[r("container",{staticClass:"d-block",attrs:{"bound-width":""}},[r("section",{attrs:{id:"projects"}},[r("h1",{staticClass:"text-center"},[t._v(t._s(t.$t(t.routes.projects.title)))]),t._v(" "),r("div",{staticClass:"card-row"},t._l(t.displayedProjects,(function(t){return r("project-card",{key:t.slug,attrs:{project:t,small:""}})})),1),t._v(" "),r("v-btn",{attrs:{to:t.localePath(t.routes.projects.to),color:"white",text:"","x-large":""}},[t._v("\n          "+t._s(t.$t("misc.all-projects"))+"\n          "),r("v-icon",{staticClass:"ml-1"},[t._v(t._s(t.mdiArrowRight))])],1)],1),t._v(" "),r("section",{staticClass:"mt-12",attrs:{id:"blog"}},[r("h1",{staticClass:"text-center"},[t._v(t._s(t.$t(t.routes.blog.title)))]),t._v(" "),r("div",{staticClass:"card-row"},t._l(t.displayedBlogPosts,(function(t){return r("blog-post-card",{key:t.slug,attrs:{"blog-post":t,small:""}})})),1),t._v(" "),r("v-btn",{attrs:{to:t.localePath(t.routes.blog.to),color:"white",text:"","x-large":""}},[t._v("\n          "+t._s(t.$t("misc.all-posts"))+"\n          "),r("v-icon",{staticClass:"ml-1"},[t._v(t._s(t.mdiArrowRight))])],1)],1)])],1)],1)}),[],!1,null,"2d1646dd",null);e.default=component.exports;f()(component,{ProjectCard:r(676).default,BlogPostCard:r(673).default,Container:r(340).default,Wave:r(693).default}),f()(component,{VBtn:m.a,VIcon:h.a})}}]);