(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{624:function(t,e,n){"use strict";function o(title,t){var e="".concat(title," · Jan Müller");return[{hid:"description",name:"description",content:t},{hid:"twitter:title",name:"twitter:title",content:e},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image:alt",name:"twitter:image:alt",content:e},{hid:"og:title",property:"og:title",content:e},{hid:"og:description",property:"og:description",content:t},{hid:"og:image:alt",property:"og:image:alt",content:e}]}n.d(e,"a",(function(){return o}))},627:function(t,e,n){"use strict";n.d(e,"e",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"f",(function(){return d})),n.d(e,"d",(function(){return m})),n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return h}));var o=n(52),r=n(139),c={text:r.c.home.title,to:r.c.home.to,icon:o.j},l={text:r.c.blog.title,to:r.c.blog.to},d={text:r.c.projects.title,to:r.c.projects.to},m={text:r.c.documents.title,to:r.c.documents.to},f={text:r.c.about.title,to:r.c.about.to};function h(t,e){return{text:t.title,to:Object(r.a)(t,e).path}}},713:function(t,e,n){"use strict";n.r(e);var o=n(38),r=n(16),c=(n(68),n(27)),l=n(659),d=n(627),m=n(139),meta=n(624),f=Object(c.b)({asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("en/blog").without(["body","bodyText","toc"]).sortBy("createdAt","desc").fetch();case 2:return n=e.sent,e.abrupt("return",{posts:Object(m.b)(n,t.app.i18n.locale)});case 4:case"end":return e.stop()}}),e)})))()},head:function(){var title=this.$t(m.c.blog.title),t=this.$t("meta.description");return{title:title,meta:Object(o.a)(Object(meta.a)(title,t))}},mounted:function(){this.$store.commit("setBreadcrumbs",[d.e,d.b])},methods:{hasTags:l.a}}),h=n(21),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("masonry-wall",{staticClass:"px-3 pb-3",attrs:{items:t.posts,"ssr-columns":1,"column-width":300,padding:24},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.item;return[n("blog-post-card",{attrs:{"blog-post":e}})]}}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogPostCard:n(678).default})}}]);