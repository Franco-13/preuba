if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const d=e=>n(e,r),l={module:{uri:r},exports:o,require:d};s[r]=Promise.all(i.map((e=>l[e]||d(e)))).then((e=>(t(...e),o)))}}define(["./workbox-1ea6f077"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BPNvh9l1.js",revision:null},{url:"assets/index-kQJbKSsj.css",revision:null},{url:"index.html",revision:"91b76e2233dcd08d5b6602b7fbdc25ee"},{url:"registerSW.js",revision:"c8335a7d0ac842e8135696bed444d221"},{url:"manifest.webmanifest",revision:"13db0de353ce8562da96e362d999147d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/\/.*\.(?:js|css|html|json|png|jpg|jpeg|svg|gif|woff|woff2|ttf)$/,new e.NetworkFirst({cacheName:"assets-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:600})]}),"GET")}));
