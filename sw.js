if(!self.define){let s,e={};const l=(l,a)=>(l=new URL(l+".js",a).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(a,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let n={};const u=s=>l(s,r),o={module:{uri:r},exports:n,require:u};e[r]=Promise.all(a.map((s=>o[s]||u(s)))).then((s=>(i(...s),n)))}}define(["./workbox-6cd28afd"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"06d3a1efc55beb7ba8604a99ad3ca0e2"},{url:"about.html",revision:"2ba0b9b31fbbefdd817b52f4f642a75a"},{url:"assets/_...all_.83f4da1f.css",revision:null},{url:"assets/_...all_.da593bb3.js",revision:null},{url:"assets/_name_.4c4fe1c0.css",revision:null},{url:"assets/_name_.68753007.js",revision:null},{url:"assets/_name_.7560ea4d.js",revision:null},{url:"assets/_name_.d4bafe98.css",revision:null},{url:"assets/404.2b7a8886.css",revision:null},{url:"assets/404.3a1a1bd2.js",revision:null},{url:"assets/about.548fc3cf.js",revision:null},{url:"assets/about.c63a76a9.css",revision:null},{url:"assets/app.a2249b52.js",revision:null},{url:"assets/app.fe60a681.css",revision:null},{url:"assets/documents.23cf6091.js",revision:null},{url:"assets/fullscreen.8fc82dbb.css",revision:null},{url:"assets/fullscreen.ca5ca218.js",revision:null},{url:"assets/index.4172b1de.js",revision:null},{url:"assets/index.4b759c43.js",revision:null},{url:"assets/index.bb6a74d7.css",revision:null},{url:"assets/models.4e6cc1b0.js",revision:null},{url:"assets/route-block.b5bad31b.js",revision:null},{url:"assets/vendor.df706fd8.js",revision:null},{url:"assets/virtual_pwa-register.3deeaaee.js",revision:null},{url:"assets/vue-masonry-wall.4e54e8dc.js",revision:null},{url:"assets/vue-masonry-wall.7c66e0a1.css",revision:null},{url:"blog.html",revision:"a0d617d93e5d772f5bb07bbc32f8559f"},{url:"blog/vue-masonry-wall.html",revision:"4c904806b2f3f1ce7d624d6254e2c9ee"},{url:"files.html",revision:"3247cadc4c9b4515ea4d4093ec9336ca"},{url:"files/documents/bachelor-thesis.html",revision:"53192296d401d863b4d26ec6ab5487ae"},{url:"files/documents/koffee.html",revision:"6a846e2f8a75d91a9c6687101f379a1b"},{url:"files/documents/threadsafe-data-structures.html",revision:"afb36a6de3b4cf958a621022d373d459"},{url:"files/models/an-26.html",revision:"61aaa525f7c35dc3649aaefccf268bee"},{url:"index.html",revision:"923902d7d209b2282fb97032f4ff2626"},{url:"favicon.svg",revision:"9e2c532e29c032e303f1988b75f07ef4"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"9e2c532e29c032e303f1988b75f07ef4"},{url:"pwa-192x192.png",revision:"c93bea5e8af3aafcdf9f6c91d57b8c72"},{url:"pwa-512x512.png",revision:"9cf5c46aab8b8c44a9ffb2ca99612b98"},{url:"manifest.webmanifest",revision:"9b408f06a5c8fd5b4fa6c3888bae3eae"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
