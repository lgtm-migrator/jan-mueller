if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let n={};const c=e=>l(e,a),u={module:{uri:a},exports:n,require:c};s[a]=Promise.all(i.map((e=>u[e]||c(e)))).then((e=>(r(...e),n)))}}define(["./workbox-c1760cce"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"6ca12079b1139925b9ece6b265cb1e78"},{url:"about.html",revision:"fae4671ebec249d4a65ef7fc5af060ee"},{url:"assets/_...all_.f7fbd622.js",revision:null},{url:"assets/_name_.0880dfef.js",revision:null},{url:"assets/_name_.a9d19841.js",revision:null},{url:"assets/404.a4c40627.js",revision:null},{url:"assets/about.dce30e9a.css",revision:null},{url:"assets/about.f2b9c1f6.js",revision:null},{url:"assets/app.56e49866.css",revision:null},{url:"assets/app.a2503258.js",revision:null},{url:"assets/documents.23cf6091.js",revision:null},{url:"assets/fullscreen.fe6db544.js",revision:null},{url:"assets/index.6ba3363d.js",revision:null},{url:"assets/index.cdcc8c40.js",revision:null},{url:"assets/models.4e6cc1b0.js",revision:null},{url:"assets/route-block.b5bad31b.js",revision:null},{url:"assets/virtual_pwa-register.80a10119.js",revision:null},{url:"assets/vue-masonry-wall.ee89d966.js",revision:null},{url:"blog.html",revision:"0f930b0bae863596289e2d7ef87a6427"},{url:"blog/vue-masonry-wall.html",revision:"1a5a42a798f93c0157c654436b2f693c"},{url:"files.html",revision:"a0ae0d7e1d729a06dc50cacda1d1f3fa"},{url:"files/documents/bachelor-thesis.html",revision:"821aacfd1cf1e8283c821310e9e30ba5"},{url:"files/documents/koffee.html",revision:"ebff21e62c9b8ae5c186c000b50c8835"},{url:"files/documents/threadsafe-data-structures.html",revision:"1e67faf33f7260683fc7e463073f8bfd"},{url:"files/models/an-26.html",revision:"59e2bf0eb5e124ba215acc7c04e86334"},{url:"index.html",revision:"b18f5a24223a25218c12ce8e1f6f2659"},{url:"favicon.svg",revision:"9e2c532e29c032e303f1988b75f07ef4"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"9e2c532e29c032e303f1988b75f07ef4"},{url:"pwa-192x192.png",revision:"c93bea5e8af3aafcdf9f6c91d57b8c72"},{url:"pwa-512x512.png",revision:"9cf5c46aab8b8c44a9ffb2ca99612b98"},{url:"manifest.webmanifest",revision:"9b408f06a5c8fd5b4fa6c3888bae3eae"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
