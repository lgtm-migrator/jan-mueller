(window.webpackJsonp=window.webpackJsonp||[]).push([[34,26],{629:function(t,e,n){"use strict";function r(title,t){var e="".concat(title," · Jan Müller");return[{hid:"description",name:"description",content:t},{hid:"twitter:title",name:"twitter:title",content:e},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image:alt",name:"twitter:image:alt",content:e},{hid:"og:title",property:"og:title",content:e},{hid:"og:description",property:"og:description",content:t},{hid:"og:image:alt",property:"og:image:alt",content:e}]}n.d(e,"a",(function(){return r}))},685:function(t,e,n){"use strict";n.r(e);n(8),n(7),n(11),n(13),n(9),n(14);var r=n(2),o=(n(240),n(52));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={setup:function(t,e){var n={color:"red",icon:o.t,major:!1,title:"timeline.award.title"},r={color:"secondary",icon:o.c},c={color:"primary",icon:o.r},m={href:"https://www.uni-kassel.de/",text:"misc.university-of-kassel"};return{timelineItems:[l(l({},r),{},{title:"timeline.intern",date:new Date("2015-07-13"),endDate:new Date("2015-07-31"),major:!1,link:{href:"https://www.manserv.com/",text:"Management Services Helwig Schmitt GmbH"},text:"misc.software-engineer"}),l(l({},c),{},{title:"timeline.abitur",date:new Date("2016-06-03"),major:!0,link:{href:"https://www.wgkassel.de/",text:"Wilhelmsgymnasium Kassel"}}),l(l({},n),{},{date:new Date("2016-06-31"),link:{href:"https://www.dpg-physik.de/auszeichnungen/dpg-preise/abiturpreis",text:"misc.details"},text:"timeline.award.dpg"}),l(l({},c),{},{title:"timeline.university.begin",date:new Date("2016-10-01"),major:!1,link:m,text:"timeline.university.bsc-text"}),l(l({},r),{},{title:"timeline.tutor.title",date:new Date("2017-11-01"),endDate:new Date("2018-02-31"),major:!1,text:"timeline.tutor.first"}),l(l({},n),{},{date:new Date("2018-07-09"),major:!1,text:"timeline.award.algods"}),l(l({},r),{},{title:"timeline.tutor.title",date:new Date("2019-04-01"),endDate:new Date("2019-07-31"),major:!1,text:"timeline.tutor.second"}),l(l({},r),{},{title:"timeline.tutor.title",date:new Date("2019-05-01"),endDate:new Date("2019-07-31"),major:!1,text:"timeline.tutor.third"}),l(l({},r),{},{title:"timeline.intern",date:new Date("2020-11-01"),endDate:new Date("2020-12-31"),major:!1,link:{href:"https://www.yatta.de/en/start/",text:"Yatta Solutions GmbH"},text:"misc.software-engineer"}),l(l({},c),{},{title:"timeline.university.degree-bsc",date:new Date("2021-03-31"),major:!0,link:m}),l(l({},c),{},{title:"timeline.university.begin",date:new Date("2021-10-01"),major:!1,link:{href:"https://www.tuwien.at/en/",text:"TU Wien"},text:"timeline.university.msc-text"}),l(l({},r),{},{title:"timeline.working-student",date:new Date("2021-10-01"),major:!0,link:{href:"https://senacor.com/",text:"Senacor Technologies AG"},text:"misc.software-engineer"})].sort((function(t,e){return e.date.getTime()-t.date.getTime()}))}}},d=m,w=n(21),f=n(30),h=n.n(f),v=n(589),y=n(588),j=n(699),x=n(637),_=n(718),D=n(719),component=Object(w.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticStyle:{width:"100%"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",[n("h1",{staticClass:"text-center"},[t._v("\n        "+t._s(t.$t("timeline.title"))+"\n      ")]),t._v(" "),n("v-timeline",{staticClass:"ml-n7 ml-sm-0",attrs:{dense:t.$vuetify.breakpoint.xsOnly}},t._l(t.timelineItems,(function(e,r){return n("v-timeline-item",{key:r,attrs:{small:!e.major,color:e.color,icon:e.icon,right:t.$vuetify.breakpoint.xsOnly,"fill-dot":""}},[n("v-card",[n("v-card-title",{staticStyle:{"word-break":"keep-all"}},[t._v("\n              "+t._s(t.$t(e.title))+"\n            ")]),t._v(" "),n("v-card-subtitle",[n("i",[n("span",[t._v("\n                  "+t._s(t.$d(e.date,"short"))+"\n                ")]),t._v(" "),e.endDate?[n("span",{staticClass:"mx-1"},[t._v("–")]),t._v(" "),n("span",[t._v("\n                    "+t._s(t.$d(e.endDate,"short"))+"\n                  ")])]:t._e(),t._v(" "),e.link?[n("span",{staticClass:"mx-1"},[t._v("·")]),t._v(" "),n("a",{staticStyle:{"font-size":"0.875rem"},attrs:{href:e.link,target:"_blank",rel:"noopener"}},[t._v("\n                    "+t._s(t.$t(e.link.text))+"\n                  ")])]:t._e()],2)]),t._v(" "),e.text?n("v-card-text",[t._v("\n              "+t._s(t.$t(e.text))+"\n            ")]):t._e()],1)],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VCard:v.a,VCardSubtitle:y.b,VCardText:y.c,VCardTitle:y.d,VCol:j.a,VRow:x.a,VTimeline:_.a,VTimelineItem:D.a})},725:function(t,e,n){"use strict";n.r(e);var r=n(38),o=n(16),c=(n(68),n(27)),l=n(139),meta=n(629),m=Object(c.b)({layout:"uncontained",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app.i18n.locale,e.next=3,t.$content("".concat(n,"/home")).sortBy("part").fetch();case 3:return r=e.sent,e.next=6,t.$content("".concat(n,"/projects")).sortBy("title").fetch();case 6:return o=e.sent,e.next=9,t.$content("/en/blog").sortBy("date","asc").fetch();case 9:return c=e.sent,e.abrupt("return",{paragraphs:r,projects:Object(l.b)(o,n),blogPosts:Object(l.b)(c,n)});case 11:case"end":return e.stop()}}),e)})))()},head:function(){var title=this.$t(l.c.home.title),t=this.$t("meta.description");return{title:title,meta:Object(r.a)(Object(meta.a)(title,t))}},mounted:function(){this.$store.commit("setBreadcrumbs",[])}}),d=n(21),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("container",{attrs:{"bound-width":""}},[n("about-me-section",{attrs:{paragraphs:t.paragraphs}})],1),t._v(" "),n("wave-section",{attrs:{projects:t.projects,"blog-posts":t.blogPosts}}),t._v(" "),n("container",{attrs:{"bound-width":""}},[n("timeline-section")],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AboutMeSection:n(715).default,Container:n(333).default,WaveSection:n(716).default,TimelineSection:n(685).default})}}]);