if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const u=e=>l(e,n),o={module:{uri:n},exports:a,require:u};s[n]=Promise.all(i.map((e=>o[e]||u(e)))).then((e=>(r(...e),a)))}}define(["./workbox-c1760cce"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"9be0016d0cb8631d2eafd62b6e1e7878"},{url:"about.html",revision:"53384b6e639b94a9a6a18c349e896a3d"},{url:"assets/_...all_.fddc27de.js",revision:null},{url:"assets/_name_.2f5d4a97.js",revision:null},{url:"assets/_name_.d6afee9d.js",revision:null},{url:"assets/404.31e41f2f.js",revision:null},{url:"assets/about.d7c1c1ce.js",revision:null},{url:"assets/about.dce30e9a.css",revision:null},{url:"assets/app.002f52fe.css",revision:null},{url:"assets/app.d70e2878.js",revision:null},{url:"assets/documents.23cf6091.js",revision:null},{url:"assets/fullscreen.dda0d007.js",revision:null},{url:"assets/index.3a1ae4f6.js",revision:null},{url:"assets/index.ace8760f.js",revision:null},{url:"assets/models.4e6cc1b0.js",revision:null},{url:"assets/route-block.b5bad31b.js",revision:null},{url:"assets/virtual_pwa-register.80a10119.js",revision:null},{url:"assets/vue-masonry-wall.b909ac9d.js",revision:null},{url:"blog.html",revision:"f218fbd004662d0e9d06b078c2dbc332"},{url:"blog/vue-masonry-wall.html",revision:"c93e6b9ae2999e976d53492b03f20fc8"},{url:"files.html",revision:"ccc790abb25f38fdeb2f21572b58bddf"},{url:"files/documents/bachelor-thesis.html",revision:"e19b206103871b7d0d01e0b27842efad"},{url:"files/documents/koffee.html",revision:"e0648e062b420d11a7653f0bbe9d8102"},{url:"files/documents/threadsafe-data-structures.html",revision:"29c492cf4cca771e87d6c20b3e2ed932"},{url:"files/models/an-26.html",revision:"a6c145a1b33fb525d428e16258c82fa5"},{url:"index.html",revision:"9cefd10145aa9e16ecca7639c03f05b2"},{url:"favicon.svg",revision:"9e2c532e29c032e303f1988b75f07ef4"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"9e2c532e29c032e303f1988b75f07ef4"},{url:"pwa-192x192.png",revision:"c93bea5e8af3aafcdf9f6c91d57b8c72"},{url:"pwa-512x512.png",revision:"9cf5c46aab8b8c44a9ffb2ca99612b98"},{url:"manifest.webmanifest",revision:"9b408f06a5c8fd5b4fa6c3888bae3eae"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
