(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{599:function(t,e,n){"use strict";function r(title,t){var image="https://jan-mueller.at/og-logo.png",e="".concat(title," · Jan Müller");return[{hid:"description",name:"description",content:t},{hid:"twitter:title",name:"twitter:title",content:e},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image",name:"twitter:image",content:image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:e},{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"},{hid:"twitter:site",name:"twitter:site",content:"@DerYeger"},{hid:"twitter:creator",name:"twitter:creator",content:"@DerYeger"},{hid:"og:title",property:"og:title",content:e},{hid:"og:description",property:"og:description",content:t},{hid:"og:image",property:"og:image",content:image},{hid:"og:image:secure_url",property:"og:image:secure_url",content:image},{hid:"og:image:alt",property:"og:image:alt",content:e}]}n.d(e,"a",(function(){return r}))},600:function(t,e,n){"use strict";n.d(e,"e",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"f",(function(){return l})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return m})),n.d(e,"c",(function(){return h}));var r=n(138),o={text:r.c.home.title,to:r.c.home.to,icon:"mdi-home"},c={text:r.c.blog.title,to:r.c.blog.to},l={text:r.c.projects.title,to:r.c.projects.to},d={text:r.c.documents.title,to:r.c.documents.to},m={text:r.c.about.title,to:r.c.about.to};function h(t,e){return{text:t.title,to:Object(r.a)(t,e).path}}},649:function(t,e,n){var content=n(667);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("587d63c7",content,!0,{sourceMap:!1})},666:function(t,e,n){"use strict";n(649)},667:function(t,e,n){var r=n(18)(!1);r.push([t.i,".about-article h1,.about-article h2{-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}",""]),t.exports=r},688:function(t,e,n){"use strict";n.r(e);var r=n(38),o=n(16),c=(n(75),n(33)),l=n(138),d=n(600),meta=n(599),m=Object(c.b)({asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("".concat(t.app.i18n.locale,"/about")).fetch();case 2:return n=e.sent,e.abrupt("return",{document:n});case 4:case"end":return e.stop()}}),e)})))()},head:function(){var title=this.$t(l.c.about.title),t=this.$t("meta.description");return{title:title,meta:Object(r.a)(Object(meta.a)(title,t))}},mounted:function(){this.$store.commit("setBreadcrumbs",[d.e,d.a])}}),h=(n(666),n(25)),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"justify-text about-article"},[n("nuxt-content",{attrs:{document:t.document}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);