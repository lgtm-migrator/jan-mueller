if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let n={};const c=e=>l(e,a),u={module:{uri:a},exports:n,require:c};s[a]=Promise.all(i.map((e=>u[e]||c(e)))).then((e=>(r(...e),n)))}}define(["./workbox-c1760cce"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"370d862ba6ffca3a0ee25909e5a91f93"},{url:"about.html",revision:"4f1f1ba0088ec4eef1d57a97102e4e24"},{url:"assets/_...all_.6cbb352c.js",revision:null},{url:"assets/_name_.c3ac1faf.js",revision:null},{url:"assets/_name_.e68c6004.js",revision:null},{url:"assets/404.6f093df8.js",revision:null},{url:"assets/about.857dcf7d.js",revision:null},{url:"assets/about.dce30e9a.css",revision:null},{url:"assets/app.002f52fe.css",revision:null},{url:"assets/app.43dc8bba.js",revision:null},{url:"assets/documents.23cf6091.js",revision:null},{url:"assets/fullscreen.5c68859c.js",revision:null},{url:"assets/index.639c23d4.js",revision:null},{url:"assets/index.b62c0f5c.js",revision:null},{url:"assets/models.4e6cc1b0.js",revision:null},{url:"assets/route-block.b5bad31b.js",revision:null},{url:"assets/virtual_pwa-register.80a10119.js",revision:null},{url:"assets/vue-masonry-wall.9cb51d4f.js",revision:null},{url:"blog.html",revision:"ce4d71e97e7206ba8a20abba13037be2"},{url:"blog/vue-masonry-wall.html",revision:"6ab816586cd69ba2092bbd25b73d67e0"},{url:"files.html",revision:"d802dc59f53c5177d8f8aa905f182c33"},{url:"files/documents/bachelor-thesis.html",revision:"0b71dda1693a7b3b8f9818db56f224bd"},{url:"files/documents/koffee.html",revision:"cc1bc3a5de11313189aff75456ede0d8"},{url:"files/documents/threadsafe-data-structures.html",revision:"1e37d3db00dec40f9067430ccf8abc6d"},{url:"files/models/an-26.html",revision:"9f40443679567845f3ca8b379d987fa1"},{url:"index.html",revision:"bcec3136ce73a3d047a136a7a35b3eef"},{url:"favicon.svg",revision:"9e2c532e29c032e303f1988b75f07ef4"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"9e2c532e29c032e303f1988b75f07ef4"},{url:"pwa-192x192.png",revision:"c93bea5e8af3aafcdf9f6c91d57b8c72"},{url:"pwa-512x512.png",revision:"9cf5c46aab8b8c44a9ffb2ca99612b98"},{url:"manifest.webmanifest",revision:"9b408f06a5c8fd5b4fa6c3888bae3eae"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
