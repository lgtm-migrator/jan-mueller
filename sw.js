if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const u=s=>l(s,n),o={module:{uri:n},exports:a,require:u};e[n]=Promise.all(i.map((s=>o[s]||u(s)))).then((s=>(r(...s),a)))}}define(["./workbox-6cd28afd"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"7f5ca301e4d03560595d2342c8cae21c"},{url:"about.html",revision:"eaa7b6fe0ad5cd556a558b30511dfdb3"},{url:"assets/_...all_.22635cc5.css",revision:null},{url:"assets/_...all_.d873cf69.js",revision:null},{url:"assets/_name_.68523423.js",revision:null},{url:"assets/_name_.90ef3f90.js",revision:null},{url:"assets/_name_.e649fdac.css",revision:null},{url:"assets/_name_.f29536ad.css",revision:null},{url:"assets/404.456c2cf3.css",revision:null},{url:"assets/404.60695588.js",revision:null},{url:"assets/about.24483a21.js",revision:null},{url:"assets/about.ad82cab4.css",revision:null},{url:"assets/app.4bd68da1.css",revision:null},{url:"assets/app.d85cf3dd.js",revision:null},{url:"assets/documents.23cf6091.js",revision:null},{url:"assets/fullscreen.a5da88bb.css",revision:null},{url:"assets/fullscreen.c57f2994.js",revision:null},{url:"assets/index.2c73eb90.js",revision:null},{url:"assets/index.50a1faca.js",revision:null},{url:"assets/index.82469284.css",revision:null},{url:"assets/models.4e6cc1b0.js",revision:null},{url:"assets/vendor.2bb7bc31.js",revision:null},{url:"assets/virtual_pwa-register.3deeaaee.js",revision:null},{url:"assets/vue-masonry-wall.329072b8.css",revision:null},{url:"assets/vue-masonry-wall.5309289d.js",revision:null},{url:"blog.html",revision:"3d9c3c858fd2f55db8baf53bee254284"},{url:"blog/vue-masonry-wall.html",revision:"2d5ad0d90dff1b0d1380742508063e98"},{url:"files.html",revision:"333417b8d56ea1f82b31869b7c0e86bf"},{url:"files/documents/bachelor-thesis.html",revision:"394b3bc6db8e1e26ad26a8751afb22ae"},{url:"files/documents/koffee.html",revision:"4f42f394ce7ea38f3ad91061a65e7fa1"},{url:"files/documents/threadsafe-data-structures.html",revision:"2e4686e202229394e16537bf018f409d"},{url:"files/models/an-26.html",revision:"eda4419b3803ee9bce404779297f66dd"},{url:"index.html",revision:"04ff87220ea843c7dc5ecd975d168e0a"},{url:"favicon.svg",revision:"9e2c532e29c032e303f1988b75f07ef4"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"9e2c532e29c032e303f1988b75f07ef4"},{url:"pwa-192x192.png",revision:"c93bea5e8af3aafcdf9f6c91d57b8c72"},{url:"pwa-512x512.png",revision:"9cf5c46aab8b8c44a9ffb2ca99612b98"},{url:"manifest.webmanifest",revision:"9b408f06a5c8fd5b4fa6c3888bae3eae"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
