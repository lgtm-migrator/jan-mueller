(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{576:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return v}));var n=r(602),o=r(0),c=Object(o.g)("v-card__actions"),l=Object(o.g)("v-card__subtitle"),d=Object(o.g)("v-card__text"),v=Object(o.g)("v-card__title");n.a},602:function(t,e,r){"use strict";r(8),r(7),r(11),r(13),r(9),r(14);var n=r(2),o=(r(26),r(176),r(616),r(237)),c=r(238),l=r(87),d=r(6);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},605:function(t,e,r){t.exports=r.p+"img/thumbnail.6f52022.webp"},606:function(t,e,r){t.exports=r.p+"img/thumbnail.f9291b0.webp"},607:function(t,e,r){t.exports=r.p+"img/thumbnail.9afdfaa.webp"},608:function(t,e,r){t.exports=r.p+"img/thumbnail.c816a22.webp"},609:function(t,e,r){t.exports=r.p+"img/home.d7d1571.webp"},610:function(t,e,r){t.exports=r.p+"img/overview.fce9f08.webp"},611:function(t,e,r){t.exports=r.p+"img/thumbnail.680ce37.webp"},612:function(t,e,r){t.exports=r.p+"img/thumbnail.f1bf695.webp"},613:function(t,e,r){t.exports=r.p+"img/thumbnail.3e0fcc5.webp"},616:function(t,e,r){var content=r(617);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("e23b7040",content,!0,{sourceMap:!1})},617:function(t,e,r){var n=r(18)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},618:function(t,e,r){var content=r(619);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("7132a15d",content,!0,{sourceMap:!1})},619:function(t,e,r){var n=r(18)(!1);n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=n},632:function(t,e,r){"use strict";r(7),r(11),r(13),r(14);var n=r(2),o=(r(40),r(53),r(24),r(8),r(34),r(67),r(222),r(23),r(42),r(223),r(224),r(225),r(226),r(227),r(228),r(229),r(230),r(231),r(232),r(233),r(234),r(235),r(50),r(9),r(323),r(1)),c=r(85),l=r(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],f=["start","end","center"];function m(t,e){return h.reduce((function(r,n){return r[t+Object(l.u)(n)]=e(),r}),{})}var x=function(t){return[].concat(f,["baseline","stretch"]).includes(t)},_=m("align",(function(){return{type:String,default:null,validator:x}})),y=function(t){return[].concat(f,["space-between","space-around"]).includes(t)},w=m("justify",(function(){return{type:String,default:null,validator:y}})),O=function(t){return[].concat(f,["space-between","space-around","stretch"]).includes(t)},j=m("alignContent",(function(){return{type:String,default:null,validator:O}})),k={align:Object.keys(_),justify:Object.keys(w),alignContent:Object.keys(j)},P={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,r){var n=P[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var C=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:v(v(v({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:x}},_),{},{justify:{type:String,default:null,validator:y}},w),{},{alignContent:{type:String,default:null,validator:O}},j),render:function(t,e){var r=e.props,data=e.data,o=e.children,l="";for(var d in r)l+=String(r[d]);var v=C.get(l);return v||function(){var t,e;for(e in v=[],k)k[e].forEach((function(t){var n=r[t],o=S(e,t,n);o&&v.push(o)}));v.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),C.set(l,v)}(),t(r.tag,Object(c.a)(data,{staticClass:"row",class:v}),o)}})},641:function(t,e,r){"use strict";r(8),r(7),r(11),r(13),r(9),r(14);var n=r(2),o=(r(618),r(22));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},642:function(t,e,r){"use strict";var n=r(140),o=r(64),c=r(6),l=r(12);e.a=Object(c.a)(n.a,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(l.c)("v-hover should only contain a single element",this),element)):(Object(l.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},651:function(t,e,r){"use strict";r(325);var n=r(0);e.a=Object(n.g)("spacer","div","v-spacer")},652:function(t,e,r){var map={"./an-26/thumbnail.webp":605,"./apollo/thumbnail.webp":606,"./cyk-algorithm/thumbnail.webp":607,"./cyk-visualizer/thumbnail.webp":608,"./finwa/home.webp":609,"./finwa/overview.webp":610,"./finwa/thumbnail.webp":611,"./koffee/thumbnail.webp":612,"./refunk/thumbnail.webp":613};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=652},662:function(t,e,r){"use strict";r.r(e);var n=r(52),o=r(29),c=Object(o.b)({props:{project:{type:Object,required:!0}},data:function(){return{mdiGithub:n.i,mdiTelevisionPlay:n.p}}}),l=r(25),d=r(31),v=r.n(d),h=r(602),f=r(576),m=r(641),x=r(642),_=r(210),y=r(174),w=r(213),O=r(632),j=r(651),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[n("v-card",{staticClass:"project-card",class:o?"primary--text":"text",attrs:{to:t.project.path,elevation:o?6:2}},[t.project.thumbnail?n("v-img",{attrs:{src:r(652)("./"+t.project.thumbnail),"aspect-ratio":"2",contain:"contain","max-height":"16rem"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]},proxy:!0}],null,!0)}):t._e(),t._v(" "),n("v-card-title",{staticClass:"text-h5 card-title",staticStyle:{"word-break":"normal"}},[t._v("\n      "+t._s(t.project.title)+"\n      "),n("v-spacer",{staticStyle:{"min-width":"1rem"}}),t._v(" "),n("div",[t.project.repository||t.project.repositories&&t.project.repositories.length>0?n("v-icon",{attrs:{small:""}},[t._v("\n          "+t._s(t.mdiGithub)+"\n        ")]):t._e(),t._v(" "),t.project.demo?n("v-icon",{attrs:{small:""}},[t._v("\n          "+t._s(t.mdiTelevisionPlay)+"\n        ")]):t._e()],1)],1),t._v(" "),n("v-divider",{staticClass:"mx-4"}),t._v(" "),n("v-card-text",[t._v(t._s(t.project.description))])],1)]}}])})}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCard:h.a,VCardText:f.c,VCardTitle:f.d,VDivider:m.a,VHover:x.a,VIcon:_.a,VImg:y.a,VProgressCircular:w.a,VRow:O.a,VSpacer:j.a})}}]);