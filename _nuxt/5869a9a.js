(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return M})),n.d(e,"a",(function(){return d}));n(8),n(6),n(10),n(12),n(7),n(13);var r=n(2);n(43),n(63),n(34),n(68),n(25);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={home:{title:"home.title",to:"/",icon:"mdi-home"},projects:{title:"projects.title",to:"/projects",icon:"mdi-code-tags"},blog:{title:"blog.title",to:"/blog",icon:"mdi-pen"},about:{title:"about.title",to:"/about",icon:"mdi-file-document"}};function M(t,e){var n="en"===e?"/":"/".concat(e,"/");return t.map((function(t){return c(c({},t),{},{path:t.path.replace("/en/",n)})}))}function d(t,e){if(null!==t){var n="en"===e?"/":"/".concat(e,"/");return c(c({},t),{},{path:t.path.replace("/en/",n)})}}},175:function(t,e,n){var map={"./avatar-lazy.webp":503,"./avatar.jpg":504,"./avatar.webp":505,"./icons/android.svg":294,"./icons/angular.svg":295,"./icons/css.svg":296,"./icons/d3.svg":297,"./icons/docker.svg":298,"./icons/git.svg":299,"./icons/gradle.svg":300,"./icons/haskell.svg":301,"./icons/html.svg":302,"./icons/influxdb.svg":303,"./icons/java.svg":304,"./icons/javascript.svg":305,"./icons/kotlin.svg":306,"./icons/ktor.svg":307,"./icons/mongodb.svg":308,"./icons/nginx.svg":309,"./icons/nodejs.svg":310,"./icons/nuxtjs.svg":311,"./icons/postgresql.svg":312,"./icons/react.svg":313,"./icons/rxjs.svg":314,"./icons/sass.svg":315,"./icons/spring.svg":316,"./icons/typescript.svg":317,"./icons/vue.svg":318,"./logo.svg":290};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=175},177:function(t,e,n){"use strict";n.r(e);var r=n(22),o=Object(r.defineComponent)({props:{name:{type:String,required:!0},icon:{type:String,required:!0},href:{type:String,required:!0}}}),c=(n(517),n(16)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"svg-icon",attrs:{rel:"noopener",href:t.href,target:"_blank","aria-label":t.name}},[r("abbr",{attrs:{title:t.name}},[r("img",{attrs:{src:n(516)("./"+t.icon+".svg"),alt:"logo"}})])])}),[],!1,null,"4cb67224",null);e.default=component.exports},218:function(t,e,n){"use strict";n.r(e);var r=n(42),o=n(21),c=(n(25),n(210),n(34),n(67),n(22)),l=n(137),M=Object(c.defineComponent)({data:function(){return{results:[],query:""}},computed:{currentLocale:function(){return this.$i18n.locale}},watch:{currentLocale:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.updateSearchResults(e.query,t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()},query:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.updateSearchResults(t,e.currentLocale);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()}},methods:{updateSearchResults:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(t){o.next=3;break}return n.results=[],o.abrupt("return");case 3:return o.t0=l.b,o.t1=[],o.t2=r.a,o.next=8,n.$content("en/blog",{deep:!0}).only(["title","path"]).search("title",t).sortBy("title","asc").limit(4).fetch();case 8:return o.t3=o.sent,o.t4=(0,o.t2)(o.t3),o.t5=r.a,o.next=13,n.$content("en/projects",{deep:!0}).only(["title","path"]).search("title",t).sortBy("title","asc").limit(4).fetch();case 13:o.t6=o.sent,o.t7=(0,o.t5)(o.t6),o.t8=o.t1.concat.call(o.t1,o.t4,o.t7),o.t9=e,n.results=(0,o.t0)(o.t8,o.t9);case 18:case"end":return o.stop()}}),o)})))()}}}),d=(n(427),n(16)),v=n(26),m=n.n(v),I=n(224),f=n(129),j=n(77),N=n(548),x=n(547),component=Object(d.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"offset-y":"",bottom:"",rounded:"xl","open-on-click":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({staticClass:"search-input",attrs:{filled:"",dense:"",rounded:"","hide-details":"auto","prepend-inner-icon":"mdi-magnify",placeholder:t.$t("actions.search")},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}},"v-text-field",o,!1),r))]}}])},[t._v(" "),t.results.length>0?n("v-list",t._l(t.results,(function(e){return n("v-list-item",{key:e.path,attrs:{to:e.path,width:"100%"},on:{click:function(e){e.stopPropagation(),t.query=""}}},[n("v-list-item-title",[t._v(t._s(e.title))])],1)})),1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VList:I.a,VListItem:f.a,VListItemTitle:j.b,VMenu:N.a,VTextField:x.a})},219:function(t,e,n){"use strict";n.r(e);var r=n(22),o=Object(r.defineComponent)({data:function(){return{logo:n(290)}}}),c=(n(474),n(16)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"link-container"},[n("nuxt-link",{staticClass:"icon-link",attrs:{to:t.localePath("/")}},[n("img",{attrs:{src:t.logo,alt:"logo"}})])],1)}),[],!1,null,"55d843ce",null);e.default=component.exports},220:function(t,e,n){"use strict";n.r(e);n(43);var r=n(22),o=Object(r.defineComponent)({computed:{breadcrumbs:function(){var t=this,e=this.$i18n.locale,n=this.$store.state.breadcrumbs;return n.length<2?[]:n.map((function(r,o){return{text:r.text,to:t.localePath(r.to,e),disabled:o>=n.length-1}}))}}}),c=(n(476),n(16)),l=n(26),M=n.n(l),d=n(551),v=n(337),m=n(225),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-breadcrumbs",{attrs:{items:t.breadcrumbs,nuxt:"true",large:""},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",{domProps:{textContent:t._s("mdi-chevron-right")}})]},proxy:!0},{key:"item",fn:function(e){var r=e.item;return[n("v-breadcrumbs-item",{attrs:{to:r.to,disabled:r.disabled,exact:!0}},[r.text.startsWith("mdi-")?n("v-icon",{staticClass:"text--primary",domProps:{textContent:t._s(r.text)}}):[t._v("\n        "+t._s(t.$t(r.text))+"\n      ")]],2)]}}])})}),[],!1,null,null,null);e.default=component.exports;M()(component,{VBreadcrumbs:d.a,VBreadcrumbsItem:v.a,VIcon:m.a})},221:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(85),c=Object(r.defineComponent)({computed:Object(o.c)(["useDarkTheme"]),watch:{useDarkTheme:function(t){this.$vuetify.theme.dark=t}},mounted:function(){this.$store.commit("loadTheme")},methods:Object(o.b)(["toggleTheme"])}),l=n(16),M=n(26),d=n.n(M),v=n(338),m=n(225),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{icon:"","aria-label":t.$t(t.useDarkTheme?"actions.use-light-theme":"actions.use-dark-theme")},on:{click:function(e){return t.toggleTheme()}}},[n("v-icon",{domProps:{textContent:t._s(t.useDarkTheme?"mdi-brightness-5":"mdi-brightness-2")}})],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VIcon:m.a})},222:function(t,e,n){"use strict";n.r(e);var r=n(22),o=Object(r.defineComponent)({data:function(){return{locales:[{code:"de",name:"DE"},{code:"en",name:"EN"}]}}}),c=n(16),l=n(26),M=n.n(l),d=n(338),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.locales,(function(e){return n("v-btn",{key:e.code,staticClass:"ma-1",attrs:{text:"",to:t.switchLocalePath(e.code),"x-small":t.$vuetify.breakpoint.xs,small:t.$vuetify.breakpoint.smAndUp}},[t._v("\n    "+t._s(e.name)+"\n  ")])})),1)}),[],!1,null,null,null);e.default=component.exports;M()(component,{VBtn:d.a})},223:function(t,e,n){"use strict";n.r(e);var r={props:{src:{type:String,required:!0},lazySrc:{type:String,default:void 0},alt:{type:String,required:!0}},methods:{imgSrc:function(){try{return n(175)("./".concat(this.src))}catch(t){return null}},lazyImgSrc:function(){try{return n(175)("./".concat(this.lazySrc))}catch(t){return null}}}},o=n(16),c=n(26),l=n.n(c),M=n(185),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-img",{attrs:{src:t.imgSrc(),"lazy-src":t.lazyImgSrc(),alt:t.alt}})}),[],!1,null,null,null);e.default=component.exports;l()(component,{VImg:M.a})},234:function(t,e,n){"use strict";var r=n(1),o=n(340);r.default.use(o.a)},235:function(t,e,n){"use strict";n.r(e);var r=n(22),o=Object(r.defineComponent)({props:{prev:{type:Object,default:void 0},next:{type:Object,default:void 0}}}),c=(n(514),n(16)),l=n(26),M=n.n(l),d=n(225),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"link-container"},[t.prev?n("NuxtLink",{staticClass:"mr-4",attrs:{to:t.prev.path}},[n("v-icon",{domProps:{textContent:t._s("mdi-chevron-left")}}),t._v(" "),n("span",[t._v(t._s(t.prev.title))])],1):n("span"),t._v(" "),t.next?n("NuxtLink",{staticStyle:{"text-align":"right"},attrs:{to:t.next.path}},[n("span",[t._v(t._s(t.next.title))]),t._v(" "),n("v-icon",{domProps:{textContent:t._s("mdi-chevron-right")}})],1):n("span")],1)}),[],!1,null,null,null);e.default=component.exports;M()(component,{VIcon:d.a})},239:function(t,e,n){"use strict";function r(t){var e,n;return(null!==(n=null===(e=t.tags)||void 0===e?void 0:e.length)&&void 0!==n?n:0)>0}n.d(e,"a",(function(){return r}))},240:function(t,e,n){"use strict";n.r(e);var r=n(22),o=Object(r.defineComponent)({props:{href:{type:String,required:!0},icon:{type:String,required:!0},name:{type:String,required:!0},color:{type:String,default:void 0}}}),c=n(16),l=n(26),M=n.n(l),d=n(338),v=n(225),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{rel:"noopener",icon:"","x-large":"",target:"_blank","aria-label":t.name,color:t.color,href:t.href}},[n("v-icon",{class:t.color?"":"text--primary",domProps:{textContent:t._s(t.icon)}})],1)}),[],!1,null,null,null);e.default=component.exports;M()(component,{VBtn:d.a,VIcon:v.a})},241:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(239),c=Object(r.defineComponent)({props:{blogPost:{type:Object,required:!0}},methods:{hasTags:o.a}}),l=n(16),M=n(26),d=n.n(M),v=n(229),m=n(70),I=n(543),f=n(544),j=n(185),N=n(228),x=n(545),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[r("v-card",{class:o?"primary--text":"text",attrs:{to:t.blogPost.path,elevation:o?12:2}},[t.blogPost.image?r("v-img",{attrs:{src:n(175)("./"+t.blogPost.image),"aspect-ratio":2,"max-height":"8rem"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]},proxy:!0}],null,!0)}):t._e(),t._v(" "),r("v-card-title",[t._v(t._s(t.blogPost.title))]),t._v(" "),r("v-card-subtitle",[t._v(t._s(t.$d(new Date(t.blogPost.createdAt),"long")))]),t._v(" "),t.hasTags(t.blogPost)?[r("v-divider",{staticClass:"mx-4"}),t._v(" "),r("v-card-text",[t._v("\n        "+t._s(t.$t("misc.tags"))+": "+t._s(t.blogPost.tags.join(", "))+"\n      ")])]:t._e()],2)]}}])})}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:v.a,VCardSubtitle:m.a,VCardText:m.b,VCardTitle:m.c,VDivider:I.a,VHover:f.a,VImg:j.a,VProgressCircular:N.a,VRow:x.a})},242:function(t,e,n){"use strict";n.r(e);var r=n(22),o=Object(r.defineComponent)({props:{href:{type:String,required:!0},color:{type:String,default:"primary"}}}),c=n(16),l=n(26),M=n.n(l),d=n(338),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-btn",{staticClass:"mb-4",attrs:{rel:"noopener",text:"","aria-label":t.$t("actions.view-demo"),href:t.href,target:"_blank",color:t.color}},[t._v("\n  "+t._s(t.$t("actions.view-demo"))+"\n")])}),[],!1,null,null,null);e.default=component.exports;M()(component,{VBtn:d.a})},243:function(t,e,n){"use strict";n.r(e);var r=n(22),o=Object(r.defineComponent)({props:{project:{type:Object,required:!0}}}),c=n(16),l=n(26),M=n.n(l),d=n(229),v=n(70),m=n(544),I=n(185),f=n(228),j=n(545),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[r("v-card",{class:o?"primary--text":"text",attrs:{to:t.project.path,elevation:o?12:2}},[t.project.image?r("v-img",{attrs:{src:n(175)("./"+t.project.image),"aspect-ratio":2,"max-height":"8rem"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]},proxy:!0}],null,!0)}):t._e(),t._v(" "),r("v-card-title",[t._v(t._s(t.project.title))]),t._v(" "),r("v-card-subtitle",[t._v(t._s(t.project.description))])],1)]}}])})}),[],!1,null,null,null);e.default=component.exports;M()(component,{VCard:d.a,VCardSubtitle:v.a,VCardTitle:v.c,VHover:m.a,VImg:I.a,VProgressCircular:f.a,VRow:j.a})},244:function(t,e,n){"use strict";n.r(e);n(25);var r=n(22),o=Object(r.defineComponent)({props:{repository:{type:String,required:!0},account:{type:String,default:"DerYeger"}},computed:{href:function(){return"https://github.com/".concat(this.account,"/").concat(this.repository)},repoCardSrc:function(){return"https://github-readme-stats.vercel.app/api/pin/?border_radius=4&username=DerYeger&repo="+this.repository}}}),c=n(16),l=n(26),M=n.n(l),d=n(338),v=n(225),m=n(548),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"offset-y":"",bottom:"","open-on-hover":"",rounded:"4"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mb-4 text--primary",attrs:{rel:"noopener",text:"","aria-label":t.$t("actions.view-on")+" GitHub",href:t.href,target:"_blank"}},"v-btn",o,!1),r),[t._v("\n      "+t._s(t.$t("actions.view-on"))+"\n      "),n("v-icon",{staticClass:"ml-2",domProps:{textContent:t._s("fab fa-github")}})],1)]}}])},[t._v(" "),n("a",{attrs:{rel:"noopener",href:t.href,target:"_blank"}},[n("img",{staticStyle:{display:"block"},attrs:{src:t.repoCardSrc,alt:"Repository card"}})])])}),[],!1,null,null,null);e.default=component.exports;M()(component,{VBtn:d.a,VIcon:v.a,VMenu:m.a})},245:function(t,e,n){"use strict";n.r(e);var r=n(22),o=Object(r.defineComponent)({props:{document:{type:Object,required:!0}}}),c=n(16),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",[n("h2",[t._v("Content")]),t._v(" "),n("ul",t._l(t.document.toc,(function(link){return n("li",{key:link.id},[n("NuxtLink",{attrs:{to:"#"+link.id},domProps:{textContent:t._s(link.text)}})],1)})),0)]),t._v(" "),n("p")])}),[],!1,null,null,null);e.default=component.exports},246:function(t,e,n){"use strict";n.r(e);n(506);var r=n(16),o=n(26),c=n.n(o),l=n(227),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("v-avatar",{staticClass:"avatar elevation-6",attrs:{size:"100%",width:"100%"}},[e("asset-image",{attrs:{src:"avatar.webp","lazy-src":"avatar-lazy.webp",alt:"Jan"}})],1)}),[],!1,null,"fa383f2e",null);e.default=component.exports;c()(component,{AssetImage:n(223).default}),c()(component,{VAvatar:l.a})},283:function(t,e,n){var content=n(416);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("3516dfcf",content,!0,{sourceMap:!1})},285:function(t,e,n){var content=n(426);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("348f598e",content,!0,{sourceMap:!1})},286:function(t,e,n){var content=n(428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("d5c3f998",content,!0,{sourceMap:!1})},290:function(t,e,n){t.exports=n.p+"img/logo.7275089.svg"},291:function(t,e,n){var content=n(475);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("70a9b8a6",content,!0,{sourceMap:!1})},292:function(t,e,n){var content=n(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("f66ccd5e",content,!0,{sourceMap:!1})},294:function(t,e,n){t.exports=n.p+"img/android.9ec5547.svg"},295:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aAogICAgZmlsbD0iI0M0NDczQSIKICAgIGQ9Ik01Mi44NjQgNjRoMjMuMjhsLTEyLjM3NS0yNS44Nzd6TTYzLjgxIDEuMDI2bC01OS4yNTcgMjAuODU0IDkuMzYzIDc3LjYzNyA0OS45NTcgMjcuNDU3IDUwLjIxNC0yNy44MjggOS4zNi03Ny42MzUtNTkuNjM3LTIwLjQ4NXptLTE1Ljc2NiA3My45NzRsLTcuMjY1IDE4LjE3Ni0xMy41ODEuMDU2IDM2LjYwOC04MS4wNzktLjA3LS4xNTNoLS4wNjRsLjAwMS0uMTMzLjA2My4xMzNoLjE0MTAwMDAwMDAwMDAwMDAxbC4xMjMtLjI3NHYuMjc0aC0uMTI0bC0uMDY5LjE1MyAzOC4xODkgODEuNDE3LTEzLjA3NC0uMjg3LTguMDQyLTE4LjU4LTE3LjE3My4wODIiCiAgLz4KPC9zdmc+Cg=="},296:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aAogICAgZmlsbD0iIzE1NzJCNiIKICAgIGQ9Ik0xOC44MTQgMTE0LjEyM2wtMTAuMDU0LTExMi43NzFoMTEwLjQ4bC0xMC4wNjQgMTEyLjc1NC00NS4yNDMgMTIuNTQzLTQ1LjExOS0xMi41MjZ6IgogIC8+CiAgPHBhdGgKICAgIGZpbGw9IiMzM0E5REMiCiAgICBkPSJNNjQuMDAxIDExNy4wNjJsMzYuNTU5LTEwLjEzNiA4LjYwMS05Ni4zNTRoLTQ1LjE2djEwNi40OXoiCiAgLz4KICA8cGF0aAogICAgZmlsbD0iI2ZmZiIKICAgIGQ9Ik02NC4wMDEgNTEuNDI5aDE4LjMwMmwxLjI2NC0xNC4xNjNoLTE5LjU2NnYtMTMuODMxaDM0LjY4MTk5OTk5OTk5OTk5NWwtLjMzMiAzLjcxMS0zLjQgMzguMTE0aC0zMC45NXYtMTMuODMxeiIKICAvPgogIDxwYXRoCiAgICBmaWxsPSIjRUJFQkVCIgogICAgZD0iTTY0LjA4MyA4Ny4zNDlsLS4wNjEuMDE4LTE1LjQwMy00LjE1OS0uOTg1LTExLjAzMWgtMTMuODgybDEuOTM3IDIxLjcxNyAyOC4zMzEgNy44NjMuMDYzLS4wMTh2LTE0LjM5eiIKICAvPgogIDxwYXRoCiAgICBmaWxsPSIjZmZmIgogICAgZD0iTTgxLjEyNyA2NC42NzVsLTEuNjY2IDE4LjUyMi0xNS40MjYgNC4xNjR2MTQuMzlsMjguMzU0LTcuODU4LjIwOC0yLjMzNyAyLjQwNi0yNi44ODFoLTEzLjg3NnoiCiAgLz4KICA8cGF0aAogICAgZmlsbD0iI0VCRUJFQiIKICAgIGQ9Ik02NC4wNDggMjMuNDM1djEzLjgzMTAwMDAwMDAwMDAwMWgtMzMuNDA3OTk5OTk5OTk5OTk0bC0uMjc3LTMuMTA4LS42My03LjAxMi0uMzMxLTMuNzExaDM0LjY0NnpNNjQuMDAxIDUxLjQzMXYxMy44MzEwMDAwMDAwMDAwMDFoLTE1LjIwOWwtLjI3Ny0zLjEwOC0uNjMxLTcuMDEyLS4zMy0zLjcxMWgxNi40NDd6IgogIC8+Cjwvc3ZnPgo="},297:function(t,e,n){t.exports=n.p+"img/d3.eea2058.svg"},298:function(t,e,n){t.exports=n.p+"img/docker.f891e7b.svg"},299:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aAogICAgZmlsbD0iI0YzNEYyOSIKICAgIGQ9Ik0xMjQuNzM3IDU4LjM3OGwtNTUuMTE2LTU1LjExNGMtMy4xNzItMy4xNzQtOC4zMi0zLjE3NC0xMS40OTcgMGwtMTEuNDQ0IDExLjQ0NiAxNC41MTggMTQuNTE4YzMuMzc1LTEuMTM5IDcuMjQzLS4zNzUgOS45MzIgMi4zMTQgMi43MDMgMi43MDYgMy40NjEgNi42MDcgMi4yOTQgOS45OTNsMTMuOTkyIDEzLjk5M2MzLjM4NS0xLjE2NyA3LjI5Mi0uNDEzIDkuOTk0IDIuMjk1IDMuNzggMy43NzcgMy43OCA5LjkgMCAxMy42NzktMy43OCAzLjc4LTkuOTAxIDMuNzgtMTMuNjgzIDAtMi44NDItMi44NDQtMy41NDUtNy4wMTktMi4xMDUtMTAuNTIxbC0xMy4wNDgtMTMuMDQ4LS4wMDIgMzQuMzQxYy45MjIuNDU1IDEuNzkxIDEuMDYzIDIuNTU5IDEuODI4IDMuNzc4IDMuNzc3IDMuNzc4IDkuODk4IDAgMTMuNjgzLTMuNzc5IDMuNzc3LTkuOTA0IDMuNzc3LTEzLjY3OSAwLTMuNzc4LTMuNzg0LTMuNzc4LTkuOTA1IDAtMTMuNjgzLjkzNC0uOTMzIDIuMDE0LTEuNjM4IDMuMTY3LTIuMTF2LTM0LjY1OWMtMS4xNTMtLjQ3Mi0yLjIzMS0xLjE3Mi0zLjE2Ny0yLjExMS0yLjg2Mi0yLjg2LTMuNTUxLTcuMDYtMi4wODMtMTAuNTc2bC0xNC4zMTMtMTQuMzEzLTM3Ljc5MiAzNy43OWMtMy4xNzUgMy4xNzctMy4xNzUgOC4zMjUgMCAxMS41bDU1LjExNyA1NS4xMTRjMy4xNzQgMy4xNzQgOC4zMiAzLjE3NCAxMS40OTkgMGw1NC44NTgtNTQuODU4YzMuMTc0LTMuMTc2IDMuMTc0LTguMzI3LS4wMDEtMTEuNTAxeiIKICAvPgo8L3N2Zz4K"},300:function(t,e,n){t.exports=n.p+"img/gradle.c08a452.svg"},301:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aAogICAgZmlsbD0iIzQ2M0I2MyIKICAgIGQ9Ik0wLDExMC4yTDMwLjEsNjVMMCwxOS45aDIyLjZMNTIuNyw2NWwtMzAuMSw0NS4xSDB6IgogIC8+CiAgPHBhdGgKICAgIGZpbGw9IiM1RTUxODciCiAgICBkPSJNMzAuMSwxMTAuMkw2MC4yLDY1TDMwLjEsMTkuOWgyMi42bDYwLjIsOTAuM0g5MC40TDcxLjUsODEuOWwtMTguOCwyOC4ySDMwLjF6IgogIC8+CiAgPHBhdGgKICAgIGZpbGw9IiM5MDRGOEMiCiAgICBkPSJtMTAyLjkgODMuOC0xMC0xNS4xaDM1LjF2MTUuMWgtMjUuMXptLTE1LjEtMjIuNS0xMC0xNS4xaDUwLjJ2MTUuMWgtNDAuMnoiCiAgLz4KPC9zdmc+Cg=="},302:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aAogICAgZmlsbD0iI0U0NEQyNiIKICAgIGQ9Ik0xOS4wMzcgMTEzLjg3NmwtMTAuMDA1LTExMi4yMTVoMTA5LjkzNmwtMTAuMDE2IDExMi4xOTgtNDUuMDE5IDEyLjQ4eiIKICAvPgogIDxwYXRoCiAgICBmaWxsPSIjRjE2NTI5IgogICAgZD0iTTY0IDExNi44bDM2LjM3OC0xMC4wODYgOC41NTktOTUuODc4aC00NC45Mzd6IgogIC8+CiAgPHBhdGgKICAgIGZpbGw9IiNFQkVCRUIiCiAgICBkPSJNNjQgNTIuNDU1aC0xOC4yMTJsLTEuMjU4LTE0LjA5NGgxOS40N3YtMTMuNzYyaC0zNC41MTFsLjMzIDMuNjkyIDMuMzgyIDM3LjkyN2gzMC43OTl6TTY0IDg4LjE5OGwtLjA2MS4wMTctMTUuMzI3LTQuMTQtLjk3OS0xMC45NzVoLTEzLjgxN2wxLjkyOCAyMS42MDkgMjguMTkzIDcuODI2LjA2My0uMDE3eiIKICAvPgogIDxwYXRoCiAgICBmaWxsPSIjZmZmIgogICAgZD0iTTYzLjk1MiA1Mi40NTV2MTMuNzYzaDE2Ljk0N2wtMS41OTcgMTcuODQ5LTE1LjM1IDQuMTQzdjE0LjMxOWwyOC4yMTUtNy44Mi4yMDctMi4zMjUgMy4yMzQtMzYuMjMzLjMzNS0zLjY5NmgtMy43MDh6TTYzLjk1MiAyNC41OTl2MTMuNzYyaDMzLjI0NGwuMjc2LTMuMDkyLjYyOC02Ljk3OC4zMjktMy42OTJ6IgogIC8+Cjwvc3ZnPgo="},303:function(t,e,n){t.exports=n.p+"img/influxdb.087de1b.svg"},304:function(t,e,n){t.exports=n.p+"img/java.a05d843.svg"},305:function(t,e,n){t.exports=n.p+"img/javascript.7afecef.svg"},306:function(t,e,n){t.exports=n.p+"img/kotlin.c3aee6a.svg"},307:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwLCAwLCAyNTQsIDI1NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICBpZD0iR3JhZGllbnRfMSIKICAgICAgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiCiAgICAgIHgxPSIwIgogICAgICB5MT0iNjAuMTA0IgogICAgICB4Mj0iMCIKICAgICAgeTI9IjI5OS4xMDYiCiAgICAgIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMC43MDcsIC0wLjcwNywgMC43MDcsIDAuNzA3LCAwLCAwKSIKICAgID4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDBCMEZGIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuMTY1IiBzdG9wLWNvbG9yPSIjMDBBRUZGIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuNDk5IiBzdG9wLWNvbG9yPSIjOTU1RkY5IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuNzYyIiBzdG9wLWNvbG9yPSIjRTg3MzUzIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjg5MDAiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8ZyBpZD0iSW1hZ2UiPgogICAgPHBhdGgKICAgICAgZD0iTTAsODUgTDg1LDAgTDI1NCwxNjkgTDE2OSwyNTQgTDAsODUgeiIKICAgICAgZmlsbD0idXJsKCNHcmFkaWVudF8xKSIKICAgIC8+CiAgICA8cGF0aCBkPSJNODQsODUgTDE3MCw4NSBMMTcwLDE2OSBMODQsMTY5IEw4NCw4NSB6IiBmaWxsPSIjMDAwMDAwIiAvPgogIDwvZz4KPC9zdmc+Cg=="},308:function(t,e,n){t.exports=n.p+"img/mongodb.b54a675.svg"},309:function(t,e,n){t.exports=n.p+"img/nginx.e0c436a.svg"},310:function(t,e,n){t.exports=n.p+"img/nodejs.89e237e.svg"},311:function(t,e,n){t.exports=n.p+"img/nuxtjs.8450f9e.svg"},312:function(t,e,n){t.exports=n.p+"img/postgresql.b619f85.svg"},313:function(t,e,n){t.exports=n.p+"img/react.4955bc9.svg"},314:function(t,e,n){t.exports=n.p+"img/rxjs.a13a770.svg"},315:function(t,e,n){t.exports=n.p+"img/sass.1447a82.svg"},316:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiAgPHBhdGggZD0iTTU4LjIgMy4zNjVhMjkuNTAzIDI5LjUwMyAwIDAgMS0zLjQxOSA2LjA2NEEzMi4wOTQgMzIuMDk0IDAgMSAwIDkuOTY1IDU1LjM3MmwxLjE4NiAxLjA0N2EzMi4wOCAzMi4wOCAwIDAgMCA1Mi42Ny0yMi4yNTNjLjg3NS04LjE3LTEuNTI0LTE4LjUxLTUuNjItMzAuOHpNMTQuNTMgNTUuNTU4YTIuNzQ0IDIuNzQ0IDAgMSAxLS40MDQtMy44NTcgMi43NDQgMi43NDQgMCAwIDEgLjQwNCAzLjg1N3ptNDMuNTM4LTkuNjFjLTcuOTIgMTAuNTUtMjQuODMgNi45OS0zNS42NzIgNy41MDIgMCAwLTEuOTIyLjExMy0zLjg1Ny40MyAwIDAgLjczLS4zMSAxLjY2My0uNjYzIDcuNjE0LTIuNjUgMTEuMjEzLTMuMTYgMTUuODM4LTUuNTQgOC43MDgtNC40MjcgMTcuMzIyLTE0LjEyMiAxOS4xMTItMjQuMi0zLjMxMyA5LjY5NS0xMy4zNzMgMTguMDMyLTIyLjUzIDIxLjQxOC02LjI3NiAyLjMxMy0xNy42MTQgNC41NjYtMTcuNjE0IDQuNTY2bC0uNDU3LS4yNDVjLTcuNzE0LTMuNzUtNy45NTItMjAuNDU3IDYuMDc3LTI1Ljg0NSA2LjE0My0yLjM2NiAxMi4wMi0xLjA2NyAxOC42NTQtMi42NSA3LjA4NC0xLjY4MyAxNS4yOC02Ljk5IDE4LjYxNS0xMy45MTYgMy43MyAxMS4wOCA4LjIyNCAyOC40MjIuMTY2IDM5LjE1eiIgZmlsbD0iIzY4YmQ0NSIvPgo8L3N2Zz4K"},317:function(t,e,n){t.exports=n.p+"img/typescript.0d4f1de.svg"},318:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aAogICAgZD0ibS0yLjMxMjVlLTggOC45MzM3IDQ5Ljg1NCAwLjE1ODYgMTQuMTY3IDI0LjQ3IDE0LjQzMi0yNC40NyA0OS41NDctMC4xNTc3LTYzLjgzNCAxMTAuMTR6bTEyNi45OCAwLjYzNzQtMjQuMzYgMC4wMjA3LTM4LjQ3NiA2Ni4wNTItMzguNDUzLTY2LjA1Mi0yNC43NDktMC4wMTk0IDYzLjIxMSAxMDcuODl6bS0yNS4xNDktMC4wMDgtMjIuNzQ1IDAuMTY3NThsLTE1LjA1MyAyNC42NDctMTQuODE3LTI0LjY0Ny0yMi43OTQtMC4xNjc5IDM3LjczMSA2NC40NzZ6TTI1Ljk5NyA5LjM5MjlsMjMuMDAyIDAuMDA4N00yNS45OTcgOS4zOTI5bDIzLjAwMiAwLjAwODciCiAgICBmaWxsPSJub25lIgogIC8+CiAgPHBhdGgKICAgIGQ9Im0yNS45OTcgOS4zOTI5IDIzLjAwMiAwLjAwODdsMTUuMDM2IDI0Ljk1OCAxNC45ODMtMjQuOTU2IDIyLjk4Mi0wLjAwNTctMzcuODUgNjUuNjU1eiIKICAgIGZpbGw9IiMzNTQ5NWUiCiAgLz4KICA8cGF0aAogICAgZD0ibTAuOTEwNjggOS41Njg2IDI1LjA2Ni0wLjE3MTEgMzguMTUxIDY1LjY1OCAzNy44NTItNjUuNjU0IDI1LjExIDAuMDI2My02Mi45NjYgMTA4LjA2eiIKICAgIGZpbGw9IiM0MWI4ODMiCiAgLz4KPC9zdmc+Cg=="},319:function(t,e,n){var content=n(507);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("20442a92",content,!0,{sourceMap:!1})},320:function(t,e,n){var content=n(515);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("e998d72e",content,!0,{sourceMap:!1})},321:function(t,e,n){var content=n(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("04ae45f1",content,!0,{sourceMap:!1})},332:function(t,e,n){"use strict";n.r(e);var r=n(22),o=Object(r.defineComponent)({props:{elements:{type:Array,required:!0}}}),c=n(16),l=n(26),M=n.n(l),d=n(546),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"response-list"},t._l(t.elements,(function(element,e){return n("v-chip",{key:e,staticClass:"program-chip"},[t._v("\n    "+t._s(element)+"\n  ")])})),1)}),[],!1,null,null,null);e.default=component.exports;M()(component,{VChip:d.a})},333:function(t,e,n){"use strict";n.r(e);var r=n(16),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"responsive-list"},[n("icon-link",{attrs:{name:"Kotlin",icon:"kotlin",href:"https://kotlinlang.org/"}}),t._v(" "),n("icon-link",{attrs:{name:"Java",icon:"java",href:"https://java.com/"}}),t._v(" "),n("icon-link",{attrs:{name:"Haskell",icon:"haskell",href:"https://www.haskell.org/"}}),t._v(" "),n("icon-link",{attrs:{name:"TypeScript",icon:"typescript",href:"https://www.typescriptlang.org/"}}),t._v(" "),n("icon-link",{attrs:{name:"JavaScript",icon:"javascript",href:"https://www.javascript.com/"}}),t._v(" "),n("icon-link",{attrs:{name:"HTML",icon:"html",href:"https://www.w3.org/"}}),t._v(" "),n("icon-link",{attrs:{name:"CSS",icon:"css",href:"https://www.w3.org/"}}),t._v(" "),n("icon-link",{attrs:{name:"Sass & SCSS",icon:"sass",href:"https://sass-lang.com/"}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconLink:n(177).default})},334:function(t,e,n){"use strict";n.r(e);var r=n(16),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"responsive-list"},[n("icon-link",{attrs:{name:"Android Jetpack",icon:"android",href:"https://developer.android.com/jetpack"}}),t._v(" "),n("icon-link",{attrs:{name:"Angular",icon:"angular",href:"https://angular.io/"}}),t._v(" "),n("icon-link",{attrs:{name:"D3.js",icon:"d3",href:"https://d3js.org/"}}),t._v(" "),n("icon-link",{attrs:{name:"Docker",icon:"docker",href:"https://www.docker.com/"}}),t._v(" "),n("icon-link",{attrs:{name:"Git",icon:"git",href:"https://git-scm.com/"}}),t._v(" "),n("icon-link",{attrs:{name:"Gradle",icon:"gradle",href:"https://gradle.org/"}}),t._v(" "),n("icon-link",{attrs:{name:"InfluxDB",icon:"influxdb",href:"https://www.influxdata.com/"}}),t._v(" "),n("icon-link",{attrs:{name:"Ktor",icon:"ktor",href:"https://ktor.io/"}}),t._v(" "),n("icon-link",{attrs:{name:"MongoDB",icon:"mongodb",href:"https://www.mongodb.com/"}}),t._v(" "),n("icon-link",{attrs:{name:"NGINX",icon:"nginx",href:"https://www.nginx.com/"}}),t._v(" "),n("icon-link",{attrs:{name:"Node.js",icon:"nodejs",href:"https://nodejs.org/"}}),t._v(" "),n("icon-link",{attrs:{name:"NuxtJS",icon:"nuxtjs",href:"https://nuxtjs.org/"}}),t._v(" "),n("icon-link",{attrs:{name:"PostgreSQL",icon:"postgresql",href:"https://www.postgresql.org/"}}),t._v(" "),n("icon-link",{attrs:{name:"React",icon:"react",href:"https://reactjs.org/"}}),t._v(" "),n("icon-link",{attrs:{name:"RxJs",icon:"rxjs",href:"https://rxjs-dev.firebaseapp.com/"}}),t._v(" "),n("icon-link",{attrs:{name:"Spring",icon:"spring",href:"https://spring.io/"}}),t._v(" "),n("icon-link",{attrs:{name:"Vue",icon:"vue",href:"https://vuejs.org/"}}),t._v(" "),n("div",{staticStyle:{display:"flex","align-items":"center"}},[t._v("\n      "+t._s(t.$t("misc.and-more"))+"\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconLink:n(177).default})},345:function(t,e,n){"use strict";n(171);var r=n(22),o=n(85),c=n(137),l=Object(r.defineComponent)({data:function(){return{drawer:!1,items:Object.values(c.c)}},head:function(){return{title:this.$t(this.$store.state.title),htmlAttrs:{lang:this.$i18n.locale},meta:[{hid:"description",name:"description",content:this.$t("meta.description")}]}},computed:Object(o.c)(["title","breadcrumbs"])}),M=(n(425),n(16)),d=n(26),v=n.n(d),m=n(538),I=n(550),f=n(539),j=n(552),N=n(540),x=n(225),h=n(224),C=n(129),T=n(226),D=n(77),y=n(541),L=n(549),A=n(542),component=Object(M.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{clipped:!0,fixed:"",app:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,(function(e,i){return n("v-list-item",{key:i,attrs:{to:t.localePath(e.to),router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(t.$t(e.title))}})],1)],1)})),1),t._v(" "),n("v-list-item",{staticClass:"source-link-container"},[n("a",{attrs:{rel:"noopener",href:"https://github.com/DerYeger/jan-mueller",target:"_blank"}},[t._v("\n        Website Source Code\n      ")])])],1),t._v(" "),n("v-app-bar",{attrs:{"clipped-left":!0,fixed:"",app:"",dark:""}},[n("v-app-bar-nav-icon",{attrs:{"aria-label":t.$t(t.drawer?"actions.close-menu":"actions.open-menu")},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-spacer"),t._v(" "),n("content-search"),t._v(" "),n("v-spacer"),t._v(" "),n("logo")],1),t._v(" "),n("v-main",[t.breadcrumbs.length>0?n("breadcrumbs"):t._e(),t._v(" "),n("v-container",{staticClass:"page-container"},[n("nuxt")],1)],1),t._v(" "),n("v-footer",{attrs:{app:"",dark:""}},[n("span",{style:t.$vuetify.breakpoint.xs?"font-size: 0.8rem":""},[t._v("\n      © "+t._s((new Date).getFullYear())+", Jan Müller\n    ")]),t._v(" "),n("v-spacer"),t._v(" "),n("theme-toggle"),t._v(" "),n("v-spacer"),t._v(" "),n("language-toggle")],1)],1)}),[],!1,null,"7338e518",null);e.a=component.exports;v()(component,{ContentSearch:n(218).default,Logo:n(219).default,Breadcrumbs:n(220).default,ThemeToggle:n(221).default,LanguageToggle:n(222).default}),v()(component,{VApp:m.a,VAppBar:I.a,VAppBarNavIcon:f.a,VContainer:j.a,VFooter:N.a,VIcon:x.a,VList:h.a,VListItem:C.a,VListItemAction:T.a,VListItemContent:D.a,VListItemTitle:D.b,VMain:y.a,VNavigationDrawer:L.a,VSpacer:A.a})},354:function(t,e,n){n(355),t.exports=n(356)},415:function(t,e,n){"use strict";n(283)},416:function(t,e,n){var r=n(14)(!1);r.push([t.i,"h1[data-v-7267baae]{font-size:20px}",""]),t.exports=r},421:function(t,e,n){var content=n(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("736e5d00",content,!0,{sourceMap:!1})},422:function(t,e,n){var r=n(14)(!1);r.push([t.i,'html{overflow-y:auto!important}h1,h2,h3,h4,h5,h6{font-family:"Bitter",serif!important;line-height:1.2}h1{font-size:clamp(2.5rem,3vw,3rem);margin-bottom:1rem}h2{font-size:clamp(2rem,2vw,2.5rem);margin-bottom:.5rem}h3{font-size:clamp(1.5rem,1.5vw,2rem);margin-bottom:.25rem}.page-container{display:flex;justify-content:center}@media(min-width:1024px){.page-container{width:64rem}}.article-container{width:100%}article .nuxt-content .nuxt-content-highlight{position:relative}article .nuxt-content .nuxt-content-highlight+p{margin-top:1rem}article .nuxt-content .nuxt-content-highlight code{all:unset!important}article .nuxt-content .nuxt-content-highlight pre{border-radius:.25rem}article .nuxt-content .nuxt-content-highlight .filename{position:absolute;right:0;top:0;z-index:1;margin-right:.5rem;margin-top:.25rem;font-weight:300;font-size:.875rem;color:#c3cee3}article .nuxt-content .nuxt-content-highlight,article .nuxt-content .v-image,article .nuxt-content video{margin-bottom:1rem}.masonry-wall{width:100%}.responsive-list{display:flex;flex-direction:row;flex-wrap:wrap;margin-top:-1rem}.responsive-list>*{margin-top:1rem}.responsive-list>:not(:last-child){margin-right:1rem}.svg-icon{font-size:0}',""]),t.exports=r},425:function(t,e,n){"use strict";n(285)},426:function(t,e,n){var r=n(14)(!1);r.push([t.i,".source-link-container[data-v-7338e518]{position:fixed;bottom:0;left:0;right:0;font-size:.8rem}.source-link-container a[data-v-7338e518]{color:unset;text-decoration:none;width:100%;text-align:center}",""]),t.exports=r},427:function(t,e,n){"use strict";n(286)},428:function(t,e,n){var r=n(14)(!1);r.push([t.i,".search-input{max-width:16rem}",""]),t.exports=r},474:function(t,e,n){"use strict";n(291)},475:function(t,e,n){var r=n(14)(!1);r.push([t.i,".link-container[data-v-55d843ce]{width:48px;height:48px;margin-right:-12px}img[data-v-55d843ce]{width:36px;height:36px;margin:6px}",""]),t.exports=r},476:function(t,e,n){"use strict";n(292)},477:function(t,e,n){var r=n(14)(!1);r.push([t.i,".v-breadcrumbs--large li .v-icon,.v-breadcrumbs li .v-icon{font-size:24px}.v-breadcrumbs--large a,.v-breadcrumbs a{font-weight:700}.v-breadcrumbs--large a:not(.v-breadcrumbs__item--disabled),.v-breadcrumbs a:not(.v-breadcrumbs__item--disabled){color:unset}",""]),t.exports=r},502:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o}));var r=function(){return{title:"home.title",useDarkTheme:!0,breadcrumbs:[]}},o={setTitle:function(t,title){t.title=title},setBreadcrumbs:function(t,e){t.breadcrumbs=e},loadTheme:function(t){var e=localStorage.getItem("useDarkTheme");null===e&&localStorage.setItem("useDarkTheme",String(t.useDarkTheme)),t.useDarkTheme=e!==String(!1)},toggleTheme:function(t){t.useDarkTheme=!t.useDarkTheme,localStorage.setItem("useDarkTheme",String(t.useDarkTheme))}}},503:function(t,e,n){t.exports=n.p+"img/avatar-lazy.ad13bb4.webp"},504:function(t,e,n){t.exports=n.p+"img/avatar.8367908.jpg"},505:function(t,e,n){t.exports=n.p+"img/avatar.80a6f54.webp"},506:function(t,e,n){"use strict";n(319)},507:function(t,e,n){var r=n(14)(!1);r.push([t.i,'.avatar[data-v-fa383f2e]:after{content:"";display:block;padding-bottom:100%}',""]),t.exports=r},514:function(t,e,n){"use strict";n(320)},515:function(t,e,n){var r=n(14)(!1);r.push([t.i,".link-container{width:100%;display:flex;justify-content:space-between}.link-container a{display:flex;align-items:center;color:unset!important;font-size:clamp(1rem,2vw,1.25rem);font-weight:700;text-decoration:none}.link-container a .v-icon+span,.link-container a span+.v-icon{margin-left:.25rem}.link-container a:hover span{text-decoration:underline}",""]),t.exports=r},516:function(t,e,n){var map={"./android.svg":294,"./angular.svg":295,"./css.svg":296,"./d3.svg":297,"./docker.svg":298,"./git.svg":299,"./gradle.svg":300,"./haskell.svg":301,"./html.svg":302,"./influxdb.svg":303,"./java.svg":304,"./javascript.svg":305,"./kotlin.svg":306,"./ktor.svg":307,"./mongodb.svg":308,"./nginx.svg":309,"./nodejs.svg":310,"./nuxtjs.svg":311,"./postgresql.svg":312,"./react.svg":313,"./rxjs.svg":314,"./sass.svg":315,"./spring.svg":316,"./typescript.svg":317,"./vue.svg":318};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=516},517:function(t,e,n){"use strict";n(321)},518:function(t,e,n){var r=n(14)(!1);r.push([t.i,"img[data-v-4cb67224]{width:36px;height:36px}",""]),t.exports=r},94:function(t,e,n){"use strict";var r=n(22),o=Object(r.defineComponent)({layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}}),c=(n(415),n(16)),l=n(26),M=n.n(l),d=n(538),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"7267baae",null);e.a=component.exports;M()(component,{VApp:d.a})}},[[354,8,1,9]]]);