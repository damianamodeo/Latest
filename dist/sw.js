if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>i(e,t),f={module:{uri:t},exports:c,require:o};s[t]=Promise.all(n.map((e=>f[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-cb4c500d.css",revision:null},{url:"assets/index-ec0c6f25.js",revision:null},{url:"index.html",revision:"988ed14897824cea40fb82eb20ef39ab"},{url:"registerSW.js",revision:"f908c20d42cfde829a345adfd7b39b6f"},{url:"assets/manifest-icon-192.maskable.png",revision:"611782a089f4c2f4072fa72480cffb21"},{url:"assets/manifest-icon-512.maskable.png",revision:"e03797c6c4d4357e84d458f7dc062e16"},{url:"manifest.webmanifest",revision:"bbc5b10125209be132c907c023185bd4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
