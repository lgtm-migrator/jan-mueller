if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const a=e=>l(e,n),u={module:{uri:n},exports:c,require:a};s[n]=Promise.all(i.map((e=>u[e]||a(e)))).then((e=>(r(...e),c)))}}define(["./workbox-c1760cce"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"627d79e1c6d59002c4dcb11da36b24fd"},{url:"about.html",revision:"f19cbc96c625939a17d645e72438b160"},{url:"assets/_...all_.806c3a34.js",revision:null},{url:"assets/_name_.0c750e8d.js",revision:null},{url:"assets/_name_.ceca2127.js",revision:null},{url:"assets/404.a012754c.js",revision:null},{url:"assets/about.a0db400f.js",revision:null},{url:"assets/about.ec7ba547.css",revision:null},{url:"assets/app.08e8345c.css",revision:null},{url:"assets/app.7d891bd9.js",revision:null},{url:"assets/documents.23cf6091.js",revision:null},{url:"assets/fullscreen.97cecb3c.js",revision:null},{url:"assets/index.956f49b3.js",revision:null},{url:"assets/index.9f48cda9.js",revision:null},{url:"assets/models.4e6cc1b0.js",revision:null},{url:"assets/route-block.b5bad31b.js",revision:null},{url:"assets/virtual_pwa-register.80a10119.js",revision:null},{url:"assets/vue-masonry-wall.4ec50bb9.css",revision:null},{url:"assets/vue-masonry-wall.6d874d52.js",revision:null},{url:"blog.html",revision:"b4678ac74a9b53b68e042f9073035c10"},{url:"blog/vue-masonry-wall.html",revision:"3d277ea404622828de524c3f97c30ef4"},{url:"files.html",revision:"ed39c75197d84c575f7ebec0919bcf21"},{url:"files/documents/bachelor-thesis.html",revision:"1778c3cc4041c4bef77828dffa147cb2"},{url:"files/documents/koffee.html",revision:"b650d099ce83338f31eab59e9d50fc21"},{url:"files/documents/threadsafe-data-structures.html",revision:"7067f7eab28f5caaf75d06dfc7d24203"},{url:"files/models/an-26.html",revision:"134734f8e04edd7d645457da285244ac"},{url:"index.html",revision:"c629f47916cb52d83ff2b963d177e34e"},{url:"favicon.svg",revision:"9e2c532e29c032e303f1988b75f07ef4"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"9e2c532e29c032e303f1988b75f07ef4"},{url:"pwa-192x192.png",revision:"c93bea5e8af3aafcdf9f6c91d57b8c72"},{url:"pwa-512x512.png",revision:"9cf5c46aab8b8c44a9ffb2ca99612b98"},{url:"manifest.webmanifest",revision:"9b408f06a5c8fd5b4fa6c3888bae3eae"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
