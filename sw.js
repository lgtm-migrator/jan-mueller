if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const u=e=>l(e,n),o={module:{uri:n},exports:a,require:u};s[n]=Promise.all(i.map((e=>o[e]||u(e)))).then((e=>(r(...e),a)))}}define(["./workbox-c1760cce"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"7ca8fff637569035745cd309262a7d9d"},{url:"about.html",revision:"28415c1a795116823eef2c4f9598a082"},{url:"assets/_...all_.9723e6e1.js",revision:null},{url:"assets/_name_.1a14bae1.js",revision:null},{url:"assets/_name_.f355e05a.js",revision:null},{url:"assets/404.e0803c56.js",revision:null},{url:"assets/about.37867960.js",revision:null},{url:"assets/about.ec7ba547.css",revision:null},{url:"assets/app.60b5dcfd.js",revision:null},{url:"assets/app.924f8dbf.css",revision:null},{url:"assets/documents.23cf6091.js",revision:null},{url:"assets/fullscreen.74d8c783.js",revision:null},{url:"assets/index.b4273847.js",revision:null},{url:"assets/index.d4376ee2.js",revision:null},{url:"assets/models.4e6cc1b0.js",revision:null},{url:"assets/route-block.b5bad31b.js",revision:null},{url:"assets/virtual_pwa-register.80a10119.js",revision:null},{url:"assets/vue-masonry-wall.4ec50bb9.css",revision:null},{url:"assets/vue-masonry-wall.de9754ed.js",revision:null},{url:"blog.html",revision:"b172623569f558ddcc3cb75204f4bcad"},{url:"blog/vue-masonry-wall.html",revision:"9215f81ba72a5b5568f46318eb030fd5"},{url:"files.html",revision:"bea3972cef2546e6656e429ad034460f"},{url:"files/documents/bachelor-thesis.html",revision:"173c237c3635e1cac9a1cacbaa5e53f7"},{url:"files/documents/koffee.html",revision:"9f02ab90e18c2940a7e67f0ef721651f"},{url:"files/documents/threadsafe-data-structures.html",revision:"d435940207e1411adf1ef9f21f8bf6c0"},{url:"files/models/an-26.html",revision:"bc084f8e5b0379390962e0d217042e7c"},{url:"index.html",revision:"f094d713e2c8bf56f7fc471d781ab963"},{url:"favicon.svg",revision:"9e2c532e29c032e303f1988b75f07ef4"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"9e2c532e29c032e303f1988b75f07ef4"},{url:"pwa-192x192.png",revision:"c93bea5e8af3aafcdf9f6c91d57b8c72"},{url:"pwa-512x512.png",revision:"9cf5c46aab8b8c44a9ffb2ca99612b98"},{url:"manifest.webmanifest",revision:"9b408f06a5c8fd5b4fa6c3888bae3eae"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
