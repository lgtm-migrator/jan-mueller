(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{640:function(t,e,n){"use strict";n.r(e);var r=n(33),o=Object(r.b)({props:{href:{type:String,required:!0},icon:{type:String,required:!0},name:{type:String,required:!0},color:{type:String,default:void 0}}}),c=n(25),l=n(30),m=n.n(l),f=n(310),h=n(208),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{staticClass:"ma-0",attrs:{rel:"noopener",icon:"",large:"",height:"48",width:"48",target:"_blank","aria-label":t.name,color:t.color,href:t.href}},[n("v-icon",{class:{"text--primary":!t.color},attrs:{large:""},domProps:{textContent:t._s(t.icon)}})],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:f.a,VIcon:h.a})},656:function(t,e,n){"use strict";n.r(e);var r=n(33),o=Object(r.b)({data:function(){return{accounts:[{name:"GitHub",href:"https://github.com/DerYeger",icon:"mdi-github"},{name:"NPM",href:"https://www.npmjs.com/~yeger",icon:"mdi-npm",color:"#CB0000"},{name:"XING",href:"https://www.xing.com/profile/Jan_Mueller1092/cv",icon:"mdi-xing",color:"#006566"},{name:"ArtStation",href:"https://www.artstation.com/deryeger",icon:"mdi-artstation",color:"#00AFEB"}]}}}),c=n(25),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"responsive-list"},t._l(t.accounts,(function(t,e){return n("account-link",{key:e,attrs:{name:t.name,icon:t.icon,href:t.href,color:t.color}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AccountLink:n(640).default})}}]);