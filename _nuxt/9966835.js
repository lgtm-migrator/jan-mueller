(window.webpackJsonp=window.webpackJsonp||[]).push([[36,20],{688:function(e,t,r){var content=r(716);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("6658a212",content,!0,{sourceMap:!1})},698:function(e,t,r){"use strict";r.r(t);var o=r(26),l=Object(o.b)({props:{src:{type:String,required:!0}}}),n=r(21),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("marmoset-viewer",{staticClass:"model-viewer elevation-6",attrs:{src:e.src,responsive:""}})}),[],!1,null,null,null);t.default=component.exports},715:function(e,t,r){"use strict";r(688)},716:function(e,t,r){var o=r(17)(!1);o.push([e.i,".logo-overlay{position:fixed;left:0;top:0}",""]),e.exports=o},741:function(e,t,r){"use strict";r.r(t);var o=r(26),l=Object(o.b)({layout:"empty",setup:function(){var e=Object(o.e)().params;return{src:Object(o.a)((function(){return"/models/".concat(e.value.slug,".mview")}))}}}),n=(r(715),r(21)),c=r(30),f=r.n(c),v=r(588),d=r(589),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{staticStyle:{overflow:"hidden"},attrs:{dark:""}},[r("v-main",{staticStyle:{"margin-bottom":"-1px"}},[r("model-viewer",{attrs:{src:e.src}}),e._v(" "),r("logo",{staticClass:"logo-overlay"})],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{ModelViewer:r(698).default,Logo:r(341).default}),f()(component,{VApp:v.a,VMain:d.a})}}]);