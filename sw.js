if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>r(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(i.map((e=>u[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Appearance-8d857556.js",revision:null},{url:"assets/AppearanceHeader-30fbeced.js",revision:null},{url:"assets/backArrow-e948f912.js",revision:null},{url:"assets/deleteNotAtHome-ed4ea853.js",revision:null},{url:"assets/index-cfb3af6b.js",revision:null},{url:"assets/index-e8d2f9cf.css",revision:null},{url:"assets/Record-e38cf42a.js",revision:null},{url:"assets/RecordHeader-b7691eb8.js",revision:null},{url:"assets/Return-894df542.js",revision:null},{url:"assets/ReturnHeader-0708e352.js",revision:null},{url:"assets/Write-aab61bbf.js",revision:null},{url:"assets/WriteHeader-482b68c9.js",revision:null},{url:"index.html",revision:"c36b9f72ac622ff8f1c8fe2992bb7291"},{url:"registerSW.js",revision:"f908c20d42cfde829a345adfd7b39b6f"},{url:"assets/manifest-icon-192.maskable.png",revision:"611782a089f4c2f4072fa72480cffb21"},{url:"assets/manifest-icon-512.maskable.png",revision:"e03797c6c4d4357e84d458f7dc062e16"},{url:"manifest.webmanifest",revision:"bbc5b10125209be132c907c023185bd4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
