(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return f}));n(9),n(8),n(11),n(12),n(6),n(13);var r=n(2);n(38),n(65),n(31),n(66),n(23);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={home:{title:"home.title",to:"/",icon:"mdi-home"},projects:{title:"projects.title",to:"/projects",icon:"mdi-code-tags"},blog:{title:"blog.title",to:"/blog",icon:"mdi-blogger"},about:{title:"about.title",to:"/about",icon:"mdi-file-document"}};function d(t,e){var n="en"===e?"":"/".concat(e);return t.map((function(t){return c(c({},t),{},{path:t.path.replace("/en",n)})}))}function f(t,e){if(null!==t){var n="en"===e?"":"/".concat(e);return c(c({},t),{},{path:t.path.replace("/en",n)})}}},219:function(t,e,n){"use strict";var r=n(1),o=n(285);r.default.use(o.a)},260:function(t,e,n){var content=n(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("3516dfcf",content,!0,{sourceMap:!1})},262:function(t,e,n){var content=n(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("d5c3f998",content,!0,{sourceMap:!1})},266:function(t,e,n){var content=n(420);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("70a9b8a6",content,!0,{sourceMap:!1})},267:function(t,e,n){var content=n(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("f66ccd5e",content,!0,{sourceMap:!1})},268:function(t,e,n){var content=n(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("54027918",content,!0,{sourceMap:!1})},290:function(t,e,n){"use strict";n(148);var r=n(43),o=n(81),c=n(130),l=Object(r.defineComponent)({data:function(){return{drawer:!1,items:Object.values(c.c)}},head:function(){return{title:this.$t(this.$store.state.title)}},computed:Object(o.c)(["title","breadcrumbs"])}),d=n(47),f=n(59),m=n.n(f),h=n(473),v=n(481),x=n(474),_=n(483),y=n(475),k=n(211),w=n(210),O=n(123),j=n(212),V=n(74),T=n(476),$=n(480),C=n(477),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{clipped:!0,fixed:"",app:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,(function(e,i){return n("v-list-item",{key:i,attrs:{to:t.localePath(e.to),router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(t.$t(e.title))}})],1)],1)})),1)],1),t._v(" "),n("v-app-bar",{attrs:{"clipped-left":!0,fixed:"",app:"",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-spacer"),t._v(" "),n("content-search"),t._v(" "),n("v-spacer"),t._v(" "),n("logo")],1),t._v(" "),n("v-main",[t.breadcrumbs.length>0?n("breadcrumbs"):t._e(),t._v(" "),n("v-container",{staticClass:"page-container"},[n("nuxt")],1)],1),t._v(" "),n("v-footer",{attrs:{app:"",dark:""}},[n("span",[t._v("© "+t._s((new Date).getFullYear())+", Jan Müller")]),t._v(" "),n("v-spacer"),t._v(" "),n("theme-toggle"),t._v(" "),n("v-spacer"),t._v(" "),n("language-toggle")],1)],1)}),[],!1,null,null,null);e.a=component.exports;m()(component,{ContentSearch:n(458).default,Logo:n(459).default,Breadcrumbs:n(460).default,ThemeToggle:n(461).default,LanguageToggle:n(462).default}),m()(component,{VApp:h.a,VAppBar:v.a,VAppBarNavIcon:x.a,VContainer:_.a,VFooter:y.a,VIcon:k.a,VList:w.a,VListItem:O.a,VListItemAction:j.a,VListItemContent:V.a,VListItemTitle:V.b,VMain:T.a,VNavigationDrawer:$.a,VSpacer:C.a})},293:function(t,e,n){t.exports=n.p+"img/logo.7275089.svg"},301:function(t,e,n){n(302),t.exports=n(303)},362:function(t,e,n){"use strict";n(260)},363:function(t,e,n){var r=n(15)(!1);r.push([t.i,"h1[data-v-7267baae]{font-size:20px}",""]),t.exports=r},368:function(t,e,n){var content=n(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("736e5d00",content,!0,{sourceMap:!1})},369:function(t,e,n){var r=n(15)(!1);r.push([t.i,"html{overflow-y:auto!important}.page-container{display:flex;justify-content:center}@media(min-width:1024px){.page-container{width:64rem}}.article-container{width:100%}article{margin-bottom:3rem}article h1{font-size:3rem}article h2{margin-top:3rem}article .nuxt-content .nuxt-content-highlight{position:relative}article .nuxt-content .nuxt-content-highlight+p{margin-top:1rem}article .nuxt-content .nuxt-content-highlight code{all:unset!important}article .nuxt-content .nuxt-content-highlight pre{border-radius:.25rem}article .nuxt-content .nuxt-content-highlight .filename{position:absolute;right:0;top:0;z-index:1;margin-right:.5rem;margin-top:.25rem;font-weight:300;font-size:.875rem;color:#c3cee3}.masonry-wall{width:100%}",""]),t.exports=r},372:function(t,e,n){"use strict";n(262)},373:function(t,e,n){var r=n(15)(!1);r.push([t.i,".search-input{max-width:16rem}",""]),t.exports=r},419:function(t,e,n){"use strict";n(266)},420:function(t,e,n){var r=n(15)(!1);r.push([t.i,".link-container[data-v-55d843ce]{width:48px;height:48px;margin-right:-12px}img[data-v-55d843ce]{width:36px;height:36px;margin:6px}",""]),t.exports=r},421:function(t,e,n){"use strict";n(267)},422:function(t,e,n){var r=n(15)(!1);r.push([t.i,".v-breadcrumbs--large li .v-icon,.v-breadcrumbs li .v-icon{font-size:24px}.v-breadcrumbs--large a,.v-breadcrumbs a{font-weight:700}.v-breadcrumbs--large a:not(.v-breadcrumbs__item--disabled),.v-breadcrumbs a:not(.v-breadcrumbs__item--disabled){color:unset}",""]),t.exports=r},429:function(t,e,n){"use strict";n(268)},430:function(t,e,n){var r=n(15)(!1);r.push([t.i,".v-btn[data-v-22c6eec3]{margin:.25rem}",""]),t.exports=r},449:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o}));var r=function(){return{title:"home.title",useDarkTheme:!0,breadcrumbs:[]}},o={setTitle:function(t,title){t.title=title},setBreadcrumbs:function(t,e){t.breadcrumbs=e},loadTheme:function(t){var e=localStorage.getItem("useDarkTheme");null===e&&localStorage.setItem("useDarkTheme",String(t.useDarkTheme)),t.useDarkTheme=e!==String(!1)},toggleTheme:function(t){t.useDarkTheme=!t.useDarkTheme,localStorage.setItem("useDarkTheme",String(t.useDarkTheme))}}},458:function(t,e,n){"use strict";n.r(e);var r=n(36),o=n(19),c=(n(23),n(202),n(31),n(64),n(43)),l=n(130),d=Object(c.defineComponent)({data:function(){return{results:[],query:""}},computed:{currentLocale:function(){return this.$i18n.locale}},watch:{currentLocale:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.updateSearchResults(e.query,t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()},query:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.updateSearchResults(t,e.currentLocale);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()}},methods:{updateSearchResults:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(t){o.next=3;break}return n.results=[],o.abrupt("return");case 3:return o.t0=l.b,o.t1=[],o.t2=r.a,o.next=8,n.$content("en/blog",{deep:!0}).only(["title","path"]).search("title",t).sortBy("title","asc").limit(4).fetch();case 8:return o.t3=o.sent,o.t4=(0,o.t2)(o.t3),o.t5=r.a,o.next=13,n.$content("en/projects",{deep:!0}).only(["title","path"]).search("title",t).sortBy("title","asc").limit(4).fetch();case 13:o.t6=o.sent,o.t7=(0,o.t5)(o.t6),o.t8=o.t1.concat.call(o.t1,o.t4,o.t7),o.t9=e,n.results=(0,o.t0)(o.t8,o.t9);case 18:case"end":return o.stop()}}),o)})))()}}}),f=(n(372),n(47)),m=n(59),h=n.n(m),v=n(210),x=n(123),_=n(74),y=n(479),k=n(478),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"offset-y":"",bottom:"",rounded:"xl","open-on-click":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({staticClass:"search-input",attrs:{filled:"",dense:"",rounded:"","hide-details":"auto","prepend-inner-icon":"mdi-magnify",placeholder:t.$t("actions.search")},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}},"v-text-field",o,!1),r))]}}])},[t._v(" "),t.results.length>0?n("v-list",t._l(t.results,(function(e){return n("v-list-item",{key:e.path,attrs:{to:e.path,width:"100%"},on:{click:function(e){e.stopPropagation(),t.query=""}}},[n("v-list-item-title",[t._v(t._s(e.title))])],1)})),1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VList:v.a,VListItem:x.a,VListItemTitle:_.b,VMenu:y.a,VTextField:k.a})},459:function(t,e,n){"use strict";n.r(e);var r=n(43),o=Object(r.defineComponent)({data:function(){return{logo:n(293)}}}),c=(n(419),n(47)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"link-container"},[n("nuxt-link",{staticClass:"icon-link",attrs:{to:t.localePath("/")}},[n("img",{attrs:{src:t.logo,alt:"logo"}})])],1)}),[],!1,null,"55d843ce",null);e.default=component.exports},460:function(t,e,n){"use strict";n.r(e);n(38);var r=n(43),o=Object(r.defineComponent)({computed:{breadcrumbs:function(){var t=this,e=this.$i18n.locale,n=this.$store.state.breadcrumbs;return n.length<2?[]:n.map((function(r,o){return{text:r.text,to:t.localePath(r.to,e),disabled:o>=n.length-1}}))}}}),c=(n(421),n(47)),l=n(59),d=n.n(l),f=n(482),m=n(282),h=n(211),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-breadcrumbs",{attrs:{items:t.breadcrumbs,nuxt:"true",large:""},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",{domProps:{textContent:t._s("mdi-chevron-right")}})]},proxy:!0},{key:"item",fn:function(e){var r=e.item;return[n("v-breadcrumbs-item",{attrs:{to:r.to,disabled:r.disabled,exact:!0,color:"primary"}},[r.text.startsWith("mdi-")?n("v-icon",{domProps:{textContent:t._s(r.text)}}):[t._v("\n        "+t._s(t.$t(r.text))+"\n      ")]],2)]}}])})}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBreadcrumbs:f.a,VBreadcrumbsItem:m.a,VIcon:h.a})},461:function(t,e,n){"use strict";n.r(e);var r=n(43),o=n(81),c=Object(r.defineComponent)({computed:Object(o.c)(["useDarkTheme"]),watch:{useDarkTheme:function(t){this.$vuetify.theme.dark=t}},mounted:function(){this.$store.commit("loadTheme")},methods:Object(o.b)(["toggleTheme"])}),l=n(47),d=n(59),f=n.n(d),m=n(283),h=n(211),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.toggleTheme()}}},[n("v-icon",{domProps:{textContent:t._s(t.useDarkTheme?"mdi-brightness-5":"mdi-brightness-2")}})],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:m.a,VIcon:h.a})},462:function(t,e,n){"use strict";n.r(e);var r=n(43),o=Object(r.defineComponent)({data:function(){return{locales:[{code:"de",name:"DE"},{code:"en",name:"EN"}]}}}),c=(n(429),n(47)),l=n(59),d=n.n(l),f=n(283),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.locales,(function(e){return n("v-btn",{key:e.code,attrs:{to:t.switchLocalePath(e.code),text:"","x-small":t.$vuetify.breakpoint.xs,small:t.$vuetify.breakpoint.smAndUp}},[t._v("\n    "+t._s(e.name)+"\n  ")])})),1)}),[],!1,null,"22c6eec3",null);e.default=component.exports;d()(component,{VBtn:f.a})},94:function(t,e,n){"use strict";var r=n(43),o=Object(r.defineComponent)({layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}}),c=(n(362),n(47)),l=n(59),d=n.n(l),f=n(473),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"7267baae",null);e.a=component.exports;d()(component,{VApp:f.a})}},[[301,12,1,13]]]);