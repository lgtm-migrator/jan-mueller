(window.webpackJsonp=window.webpackJsonp||[]).push([[16,8,14],{510:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return f}));var o=n(130),r={text:"mdi-home",to:o.c.home.to},c={text:o.c.blog.title,to:o.c.blog.to},l={text:o.c.projects.title,to:o.c.projects.to},d={text:o.c.about.title,to:o.c.about.to};function f(t,e){return{text:t.title,to:Object(o.a)(t,e).path}}},512:function(t,e,n){var content=n(519);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("e998d72e",content,!0,{sourceMap:!1})},518:function(t,e,n){"use strict";n(512)},519:function(t,e,n){var o=n(16)(!1);o.push([t.i,".link-container{width:100%;display:flex;justify-content:space-between}.link-container a{display:flex;align-items:center;color:unset!important;font-size:1.25rem;font-weight:700;text-decoration:none}.link-container a .v-icon+span,.link-container a span+.v-icon{margin-left:.25rem}.link-container a:hover span{text-decoration:underline}",""]),t.exports=o},523:function(t,e,n){"use strict";function o(t){var e,n;return(null!==(n=null===(e=t.tags)||void 0===e?void 0:e.length)&&void 0!==n?n:0)>0}n.d(e,"a",(function(){return o}))},525:function(t,e,n){"use strict";n.r(e);var o=n(44),r=Object(o.defineComponent)({props:{prev:{type:Object,default:void 0},next:{type:Object,default:void 0}}}),c=(n(518),n(47)),l=n(60),d=n.n(l),f=n(211),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"link-container"},[t.prev?n("NuxtLink",{attrs:{to:t.prev.path}},[n("v-icon",{domProps:{textContent:t._s("mdi-chevron-left")}}),t._v(" "),n("span",[t._v(t._s(t.prev.title))])],1):n("span"),t._v(" "),t.next?n("NuxtLink",{attrs:{to:t.next.path}},[n("span",[t._v(t._s(t.next.title))]),t._v(" "),n("v-icon",{domProps:{textContent:t._s("mdi-chevron-right")}})],1):n("span")],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VIcon:f.a})},535:function(t,e,n){"use strict";n.r(e);var o=n(44),r=Object(o.defineComponent)({props:{document:{type:Object,required:!0}}}),c=n(47),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",[n("h2",[t._v("Content")]),t._v(" "),n("ul",t._l(t.document.toc,(function(link){return n("li",{key:link.id},[n("NuxtLink",{attrs:{to:"#"+link.id},domProps:{textContent:t._s(link.text)}})],1)})),0)]),t._v(" "),n("p")])}),[],!1,null,null,null);e.default=component.exports},559:function(t,e,n){"use strict";n.r(e);var o=n(15),r=n(19),c=(n(64),n(44)),l=n(523),d=n(130),f=n(510),v=Object(c.defineComponent)({asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,l,f,v,m,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.$content,c=t.params,e.next=3,r("en/blog/",c.slug).fetch();case 3:return l=e.sent,e.next=6,r("en/blog").only(["title","path"]).sortBy("createdAt","asc").surround(c.slug).fetch();case 6:return f=e.sent,v=Object(o.a)(f,2),m=v[0],_=v[1],e.abrupt("return",{post:l,prev:Object(d.a)(m,n.i18n.locale),next:Object(d.a)(_,n.i18n.locale)});case 11:case"end":return e.stop()}}),e)})))()},mounted:function(){this.$store.commit("setTitle",d.c.blog.title),this.$store.commit("setBreadcrumbs",[f.d,f.b,Object(f.c)(this.post,this.$i18n.locale)])},methods:{hasTags:l.a}}),m=n(47),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-container"},[n("article",[n("h1",[t._v(t._s(t.post.title))]),t._v(" "),n("p",[t._v("Last update: "+t._s(t.$d(new Date(t.post.updatedAt),"long")))]),t._v(" "),t.hasTags(t.post)?n("p",[t._v("Tags: "+t._s(t.post.tags.join(", ")))]):t._e(),t._v(" "),t.post.toc.length>0?n("table-of-contents",{attrs:{document:t.post}}):t._e(),t._v(" "),n("nuxt-content",{attrs:{document:t.post}})],1),t._v(" "),n("document-switcher",{attrs:{prev:t.prev,next:t.next}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TableOfContents:n(535).default,DocumentSwitcher:n(525).default})}}]);