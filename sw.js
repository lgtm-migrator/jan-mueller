if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const u=s=>l(s,n),o={module:{uri:n},exports:a,require:u};e[n]=Promise.all(i.map((s=>o[s]||u(s)))).then((s=>(r(...s),a)))}}define(["./workbox-6cd28afd"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"6655b2852712149dce62b445a0dfbc1a"},{url:"about.html",revision:"40e91b02ae4e5898567af24f933710d8"},{url:"assets/_...all_.83f4da1f.css",revision:null},{url:"assets/_...all_.ed88e7fe.js",revision:null},{url:"assets/_name_.00a4f716.js",revision:null},{url:"assets/_name_.4c4fe1c0.css",revision:null},{url:"assets/_name_.d4bafe98.css",revision:null},{url:"assets/_name_.d63cc566.js",revision:null},{url:"assets/404.2b7a8886.css",revision:null},{url:"assets/404.305f238c.js",revision:null},{url:"assets/about.1ce17530.js",revision:null},{url:"assets/about.c63a76a9.css",revision:null},{url:"assets/app.1753c418.js",revision:null},{url:"assets/app.fe60a681.css",revision:null},{url:"assets/documents.23cf6091.js",revision:null},{url:"assets/fullscreen.3f993e89.js",revision:null},{url:"assets/fullscreen.8fc82dbb.css",revision:null},{url:"assets/index.19ff7b67.js",revision:null},{url:"assets/index.a8de26b5.js",revision:null},{url:"assets/index.bb6a74d7.css",revision:null},{url:"assets/models.4e6cc1b0.js",revision:null},{url:"assets/vendor.df706fd8.js",revision:null},{url:"assets/virtual_pwa-register.3deeaaee.js",revision:null},{url:"assets/vue-masonry-wall.4e54e8dc.js",revision:null},{url:"assets/vue-masonry-wall.7c66e0a1.css",revision:null},{url:"blog.html",revision:"63f5a94d48b15da798b0dc6ead05b5d8"},{url:"blog/vue-masonry-wall.html",revision:"c1cabf10d9e24515790c7f9762b3f930"},{url:"files.html",revision:"698566ae0c2bcdbae1155b410dd4a3f2"},{url:"files/documents/bachelor-thesis.html",revision:"4c0d378436553eecd38a7076afaca50c"},{url:"files/documents/koffee.html",revision:"c3896cbd57fc45c578c7adf2d5d61f08"},{url:"files/documents/threadsafe-data-structures.html",revision:"b71b54d500c787b427bef966142a5f9b"},{url:"files/models/an-26.html",revision:"f06b72350302d11685160aa35d2e2c54"},{url:"index.html",revision:"e8da82ed861175ddaaa4ba769272335a"},{url:"favicon.svg",revision:"9e2c532e29c032e303f1988b75f07ef4"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"9e2c532e29c032e303f1988b75f07ef4"},{url:"pwa-192x192.png",revision:"c93bea5e8af3aafcdf9f6c91d57b8c72"},{url:"pwa-512x512.png",revision:"9cf5c46aab8b8c44a9ffb2ca99612b98"},{url:"manifest.webmanifest",revision:"9b408f06a5c8fd5b4fa6c3888bae3eae"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
