/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},ic=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},zr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,h=r>>2,l=(r&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(f=64)),s.push(n[h],n[l],n[f],n[g])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(qr(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ic(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const l=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||u==null||l==null)throw new rc;const f=r<<2|a>>4;if(s.push(f),u!==64){const g=a<<4&240|u>>2;if(s.push(g),l!==64){const S=u<<6&192|l;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class rc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oc=function(e){const t=qr(e);return zr.encodeByteArray(t,!0)},on=function(e){return oc(e).replace(/\./g,"")},ac=function(e){try{return zr.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=()=>cc().__FIREBASE_DEFAULTS__,hc=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},lc=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ac(e[1]);return t&&JSON.parse(t)},Gr=()=>{try{return uc()||hc()||lc()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},dc=e=>{var t,n;return(n=(t=Gr())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},fc=e=>{const t=dc(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},pc=()=>{var e;return(e=Gr())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[on(JSON.stringify(n)),on(JSON.stringify(o)),a].join(".")}function yc(){try{return typeof indexedDB=="object"}catch{return!1}}function vc(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="FirebaseError";class Xt extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=wc,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kr.prototype.create)}}class Kr{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?Ec(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Xt(i,a,s)}}function Ec(e,t){return e.replace(Tc,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const Tc=/\{\$([^}]+)}/g;function ms(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(ji(r)&&ji(o)){if(!ms(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ji(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(e){return e&&e._delegate?e._delegate:e}class ve{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new gc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Sc(t))try{this.getOrInitializeService({instanceIdentifier:St})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=St){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=St){return this.instances.has(t)}getOptions(t=St){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Cc(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=St){return this.component?this.component.multipleInstances?t:St:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cc(e){return e===St?void 0:e}function Sc(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Ic(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(_||(_={}));const Dc={debug:_.DEBUG,verbose:_.VERBOSE,info:_.INFO,warn:_.WARN,error:_.ERROR,silent:_.SILENT},Ac=_.INFO,_c={[_.DEBUG]:"log",[_.VERBOSE]:"log",[_.INFO]:"info",[_.WARN]:"warn",[_.ERROR]:"error"},Nc=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=_c[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Hr{constructor(t){this.name=t,this._logLevel=Ac,this._logHandler=Nc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in _))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Dc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,_.DEBUG,...t),this._logHandler(this,_.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,_.VERBOSE,...t),this._logHandler(this,_.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,_.INFO,...t),this._logHandler(this,_.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,_.WARN,...t),this._logHandler(this,_.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,_.ERROR,...t),this._logHandler(this,_.ERROR,...t)}}const kc=(e,t)=>t.some(n=>e instanceof n);let qi,zi;function Rc(){return qi||(qi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xc(){return zi||(zi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wr=new WeakMap,ys=new WeakMap,Qr=new WeakMap,ts=new WeakMap,qs=new WeakMap;function Mc(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(yt(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Wr.set(n,e)}).catch(()=>{}),qs.set(t,e),t}function Lc(e){if(ys.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});ys.set(e,t)}let vs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ys.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Qr.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Oc(e){vs=e(vs)}function Pc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(es(this),t,...n);return Qr.set(s,t.sort?t.sort():[t]),yt(s)}:xc().includes(e)?function(...t){return e.apply(es(this),t),yt(Wr.get(this))}:function(...t){return yt(e.apply(es(this),t))}}function Fc(e){return typeof e=="function"?Pc(e):(e instanceof IDBTransaction&&Lc(e),kc(e,Rc())?new Proxy(e,vs):e)}function yt(e){if(e instanceof IDBRequest)return Mc(e);if(ts.has(e))return ts.get(e);const t=Fc(e);return t!==e&&(ts.set(e,t),qs.set(t,e)),t}const es=e=>qs.get(e);function Vc(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=yt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(yt(o.result),c.oldVersion,c.newVersion,yt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Uc=["get","getKey","getAll","getAllKeys","count"],Bc=["put","add","delete","clear"],ns=new Map;function Gi(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ns.get(t))return ns.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=Bc.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Uc.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return ns.set(t,r),r}Oc(e=>({...e,get:(t,n,s)=>Gi(t,n)||e.get(t,n,s),has:(t,n)=>!!Gi(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jc(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function jc(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ws="@firebase/app",Ki="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=new Hr("@firebase/app"),qc="@firebase/app-compat",zc="@firebase/analytics-compat",Gc="@firebase/analytics",Kc="@firebase/app-check-compat",Hc="@firebase/app-check",Wc="@firebase/auth",Qc="@firebase/auth-compat",Yc="@firebase/database",Xc="@firebase/database-compat",Jc="@firebase/functions",Zc="@firebase/functions-compat",tu="@firebase/installations",eu="@firebase/installations-compat",nu="@firebase/messaging",su="@firebase/messaging-compat",iu="@firebase/performance",ru="@firebase/performance-compat",ou="@firebase/remote-config",au="@firebase/remote-config-compat",cu="@firebase/storage",uu="@firebase/storage-compat",hu="@firebase/firestore",lu="@firebase/firestore-compat",du="firebase",fu="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es="[DEFAULT]",pu={[ws]:"fire-core",[qc]:"fire-core-compat",[Gc]:"fire-analytics",[zc]:"fire-analytics-compat",[Hc]:"fire-app-check",[Kc]:"fire-app-check-compat",[Wc]:"fire-auth",[Qc]:"fire-auth-compat",[Yc]:"fire-rtdb",[Xc]:"fire-rtdb-compat",[Jc]:"fire-fn",[Zc]:"fire-fn-compat",[tu]:"fire-iid",[eu]:"fire-iid-compat",[nu]:"fire-fcm",[su]:"fire-fcm-compat",[iu]:"fire-perf",[ru]:"fire-perf-compat",[ou]:"fire-rc",[au]:"fire-rc-compat",[cu]:"fire-gcs",[uu]:"fire-gcs-compat",[hu]:"fire-fst",[lu]:"fire-fst-compat","fire-js":"fire-js",[du]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new Map,Ts=new Map;function gu(e,t){try{e.container.addComponent(t)}catch(n){Rt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function cn(e){const t=e.name;if(Ts.has(t))return Rt.debug(`There were multiple attempts to register component ${t}.`),!1;Ts.set(t,e);for(const n of an.values())gu(n,e);return!0}function mu(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vt=new Kr("app","Firebase",yu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ve("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=fu;function Yr(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Es,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw vt.create("bad-app-name",{appName:String(i)});if(n||(n=pc()),!n)throw vt.create("no-options");const r=an.get(i);if(r){if(ms(n,r.options)&&ms(s,r.config))return r;throw vt.create("duplicate-app",{appName:i})}const o=new bc(i);for(const c of Ts.values())o.addComponent(c);const a=new vu(n,s,o);return an.set(i,a),a}function Eu(e=Es){const t=an.get(e);if(!t&&e===Es)return Yr();if(!t)throw vt.create("no-app",{appName:e});return t}function $t(e,t,n){var s;let i=(s=pu[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Rt.warn(a.join(" "));return}cn(new ve(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu="firebase-heartbeat-database",Iu=1,we="firebase-heartbeat-store";let ss=null;function Xr(){return ss||(ss=Vc(Tu,Iu,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(we)}}}).catch(e=>{throw vt.create("idb-open",{originalErrorMessage:e.message})})),ss}async function Cu(e){try{return(await Xr()).transaction(we).objectStore(we).get(Jr(e))}catch(t){if(t instanceof Xt)Rt.warn(t.message);else{const n=vt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Rt.warn(n.message)}}}async function Hi(e,t){try{const s=(await Xr()).transaction(we,"readwrite");return await s.objectStore(we).put(t,Jr(e)),s.done}catch(n){if(n instanceof Xt)Rt.warn(n.message);else{const s=vt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rt.warn(s.message)}}}function Jr(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=1024,bu=30*24*60*60*1e3;class Du{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _u(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=bu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wi(),{heartbeatsToSend:n,unsentEntries:s}=Au(this._heartbeatsCache.heartbeats),i=on(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Wi(){return new Date().toISOString().substring(0,10)}function Au(e,t=Su){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Qi(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qi(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _u{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yc()?vc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Cu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Qi(e){return on(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(e){cn(new ve("platform-logger",t=>new $c(t),"PRIVATE")),cn(new ve("heartbeat",t=>new Du(t),"PRIVATE")),$t(ws,Ki,e),$t(ws,Ki,"esm2017"),$t("fire-js","")}Nu("");var ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,zs=zs||{},I=ku||self;function un(){}function _n(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function xe(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Ru(e){return Object.prototype.hasOwnProperty.call(e,is)&&e[is]||(e[is]=++xu)}var is="closure_uid_"+(1e9*Math.random()>>>0),xu=0;function Mu(e,t,n){return e.call.apply(e.bind,arguments)}function Lu(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Q(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Q=Mu:Q=Lu,Q.apply(null,arguments)}function We(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function K(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function It(){this.s=this.s,this.o=this.o}var Ou=0;It.prototype.s=!1;It.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Ou!=0)&&Ru(this)};It.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Zr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Gs(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Yi(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(_n(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function Y(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};var Pu=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{I.addEventListener("test",un,t),I.removeEventListener("test",un,t)}catch{}return e}();function hn(e){return/^[\s\xa0]*$/.test(e)}var Xi=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function rs(e,t){return e<t?-1:e>t?1:0}function Nn(){var e=I.navigator;return e&&(e=e.userAgent)?e:""}function rt(e){return Nn().indexOf(e)!=-1}function Ks(e){return Ks[" "](e),e}Ks[" "]=un;function Fu(e){var t=Bu;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Vu=rt("Opera"),zt=rt("Trident")||rt("MSIE"),to=rt("Edge"),Is=to||zt,eo=rt("Gecko")&&!(Nn().toLowerCase().indexOf("webkit")!=-1&&!rt("Edge"))&&!(rt("Trident")||rt("MSIE"))&&!rt("Edge"),Uu=Nn().toLowerCase().indexOf("webkit")!=-1&&!rt("Edge");function no(){var e=I.document;return e?e.documentMode:void 0}var ln;t:{var os="",as=function(){var e=Nn();if(eo)return/rv:([^\);]+)(\)|;)/.exec(e);if(to)return/Edge\/([\d\.]+)/.exec(e);if(zt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Uu)return/WebKit\/(\S+)/.exec(e);if(Vu)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(as&&(os=as?as[1]:""),zt){var cs=no();if(cs!=null&&cs>parseFloat(os)){ln=String(cs);break t}}ln=os}var Bu={};function $u(){return Fu(function(){let e=0;const t=Xi(String(ln)).split("."),n=Xi("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=rs(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||rs(i[2].length==0,r[2].length==0)||rs(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var Cs;if(I.document&&zt){var Ji=no();Cs=Ji||parseInt(ln,10)||void 0}else Cs=void 0;var ju=Cs;function Ee(e,t){if(Y.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(eo){t:{try{Ks(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:qu[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ee.X.h.call(this)}}K(Ee,Y);var qu={2:"touch",3:"pen",4:"mouse"};Ee.prototype.h=function(){Ee.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),zu=0;function Gu(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=i,this.key=++zu,this.ba=this.ea=!1}function kn(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Hs(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function so(e){const t={};for(const n in e)t[n]=e[n];return t}const Zi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function io(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<Zi.length;r++)n=Zi[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Rn(e){this.src=e,this.g={},this.h=0}Rn.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=bs(e,t,s,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new Gu(t,this.src,r,!!s,i),t.ea=n,e.push(t)),t};function Ss(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=Zr(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(kn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function bs(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==s)return i}return-1}var Ws="closure_lm_"+(1e6*Math.random()|0),us={};function ro(e,t,n,s,i){if(s&&s.once)return ao(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)ro(e,t[r],n,s,i);return null}return n=Xs(n),e&&e[Me]?e.N(t,n,xe(s)?!!s.capture:!!s,i):oo(e,t,n,!1,s,i)}function oo(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=xe(i)?!!i.capture:!!i,a=Ys(e);if(a||(e[Ws]=a=new Rn(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Ku(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Pu||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(uo(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ku(){function e(n){return t.call(e.src,e.listener,n)}const t=Hu;return e}function ao(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)ao(e,t[r],n,s,i);return null}return n=Xs(n),e&&e[Me]?e.O(t,n,xe(s)?!!s.capture:!!s,i):oo(e,t,n,!0,s,i)}function co(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)co(e,t[r],n,s,i);else s=xe(s)?!!s.capture:!!s,n=Xs(n),e&&e[Me]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=bs(r,n,s,i),-1<n&&(kn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ys(e))&&(t=e.g[t.toString()],e=-1,t&&(e=bs(t,n,s,i)),(n=-1<e?t[e]:null)&&Qs(n))}function Qs(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Me])Ss(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(uo(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Ys(t))?(Ss(n,e),n.h==0&&(n.src=null,t[Ws]=null)):kn(e)}}}function uo(e){return e in us?us[e]:us[e]="on"+e}function Hu(e,t){if(e.ba)e=!0;else{t=new Ee(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&Qs(e),e=n.call(s,t)}return e}function Ys(e){return e=e[Ws],e instanceof Rn?e:null}var hs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xs(e){return typeof e=="function"?e:(e[hs]||(e[hs]=function(t){return e.handleEvent(t)}),e[hs])}function j(){It.call(this),this.i=new Rn(this),this.P=this,this.I=null}K(j,It);j.prototype[Me]=!0;j.prototype.removeEventListener=function(e,t,n,s){co(this,e,t,n,s)};function z(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new Y(t,e);else if(t instanceof Y)t.target=t.target||e;else{var i=t;t=new Y(s,e),io(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Qe(o,s,!0,t)&&i}if(o=t.g=e,i=Qe(o,s,!0,t)&&i,i=Qe(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=Qe(o,s,!1,t)&&i}j.prototype.M=function(){if(j.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)kn(n[s]);delete e.g[t],e.h--}}this.I=null};j.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};j.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Qe(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ss(e.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Js=I.JSON.stringify;function Wu(){var e=fo;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Qu{constructor(){this.h=this.g=null}add(t,n){const s=ho.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var ho=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Yu,e=>e.reset());class Yu{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Xu(e){I.setTimeout(()=>{throw e},0)}function lo(e,t){Ds||Ju(),As||(Ds(),As=!0),fo.add(e,t)}var Ds;function Ju(){var e=I.Promise.resolve(void 0);Ds=function(){e.then(Zu)}}var As=!1,fo=new Qu;function Zu(){for(var e;e=Wu();){try{e.h.call(e.g)}catch(n){Xu(n)}var t=ho;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}As=!1}function xn(e,t){j.call(this),this.h=e||1,this.g=t||I,this.j=Q(this.lb,this),this.l=Date.now()}K(xn,j);m=xn.prototype;m.ca=!1;m.R=null;m.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),z(this,"tick"),this.ca&&(Zs(this),this.start()))}};m.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Zs(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}m.M=function(){xn.X.M.call(this),Zs(this),delete this.g};function ti(e,t,n){if(typeof e=="function")n&&(e=Q(e,n));else if(e&&typeof e.handleEvent=="function")e=Q(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:I.setTimeout(e,t||0)}function po(e){e.g=ti(()=>{e.g=null,e.i&&(e.i=!1,po(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class th extends It{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:po(this)}M(){super.M(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Te(e){It.call(this),this.h=e,this.g={}}K(Te,It);var tr=[];function go(e,t,n,s){Array.isArray(n)||(n&&(tr[0]=n.toString()),n=tr);for(var i=0;i<n.length;i++){var r=ro(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function mo(e){Hs(e.g,function(t,n){this.g.hasOwnProperty(n)&&Qs(t)},e),e.g={}}Te.prototype.M=function(){Te.X.M.call(this),mo(this)};Te.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Mn(){this.g=!0}Mn.prototype.Aa=function(){this.g=!1};function eh(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function nh(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Ut(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+ih(e,n)+(s?" "+s:"")})}function sh(e,t){e.info(function(){return"TIMEOUT: "+t})}Mn.prototype.info=function(){};function ih(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Js(n)}catch{return t}}var Ot={},er=null;function Ln(){return er=er||new j}Ot.Pa="serverreachability";function yo(e){Y.call(this,Ot.Pa,e)}K(yo,Y);function Ie(e){const t=Ln();z(t,new yo(t))}Ot.STAT_EVENT="statevent";function vo(e,t){Y.call(this,Ot.STAT_EVENT,e),this.stat=t}K(vo,Y);function Z(e){const t=Ln();z(t,new vo(t,e))}Ot.Qa="timingevent";function wo(e,t){Y.call(this,Ot.Qa,e),this.size=t}K(wo,Y);function Le(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){e()},t)}var On={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Eo={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ei(){}ei.prototype.h=null;function nr(e){return e.h||(e.h=e.i())}function To(){}var Oe={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ni(){Y.call(this,"d")}K(ni,Y);function si(){Y.call(this,"c")}K(si,Y);var _s;function Pn(){}K(Pn,ei);Pn.prototype.g=function(){return new XMLHttpRequest};Pn.prototype.i=function(){return{}};_s=new Pn;function Pe(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new Te(this),this.O=rh,e=Is?125:void 0,this.T=new xn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Io}function Io(){this.i=null,this.g="",this.h=!1}var rh=45e3,Ns={},dn={};m=Pe.prototype;m.setTimeout=function(e){this.O=e};function ks(e,t,n){e.K=1,e.v=Vn(pt(t)),e.s=n,e.P=!0,Co(e,null)}function Co(e,t){e.F=Date.now(),Fe(e),e.A=pt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),Ro(n.i,"t",s),e.C=0,n=e.l.H,e.h=new Io,e.g=Jo(e.l,n?t:null,!e.s),0<e.N&&(e.L=new th(Q(e.La,e,e.g),e.N)),go(e.S,e.g,"readystatechange",e.ib),t=e.H?so(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Ie(),eh(e.j,e.u,e.A,e.m,e.U,e.s)}m.ib=function(e){e=e.target;const t=this.L;t&&lt(e)==3?t.l():this.La(e)};m.La=function(e){try{if(e==this.g)t:{const h=lt(this.g);var t=this.g.Ea();const l=this.g.aa();if(!(3>h)&&(h!=3||Is||this.g&&(this.h.h||this.g.fa()||or(this.g)))){this.I||h!=4||t==7||(t==8||0>=l?Ie(3):Ie(2)),Fn(this);var n=this.g.aa();this.Y=n;e:if(So(this)){var s=or(this.g);e="";var i=s.length,r=lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bt(this),le(this);var o="";break e}this.h.i=new I.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,nh(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!hn(a)){var u=a;break e}}u=null}if(n=u)Ut(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Rs(this,n);else{this.i=!1,this.o=3,Z(12),bt(this),le(this);break t}}this.P?(bo(this,h,o),Is&&this.i&&h==3&&(go(this.S,this.T,"tick",this.hb),this.T.start())):(Ut(this.j,this.m,o,null),Rs(this,o)),h==4&&bt(this),this.i&&!this.I&&(h==4?Wo(this.l,this):(this.i=!1,Fe(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Z(12)):(this.o=0,Z(13)),bt(this),le(this)}}}catch{}finally{}};function So(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function bo(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=oh(e,n),i==dn){t==4&&(e.o=4,Z(14),s=!1),Ut(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Ns){e.o=4,Z(15),Ut(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Ut(e.j,e.m,i,null),Rs(e,i);So(e)&&i!=dn&&i!=Ns&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Z(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),hi(t),t.K=!0,Z(11))):(Ut(e.j,e.m,n,"[Invalid Chunked Response]"),bt(e),le(e))}m.hb=function(){if(this.g){var e=lt(this.g),t=this.g.fa();this.C<t.length&&(Fn(this),bo(this,e,t),this.i&&e!=4&&Fe(this))}};function oh(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?dn:(n=Number(t.substring(n,s)),isNaN(n)?Ns:(s+=1,s+n>t.length?dn:(t=t.substr(s,n),e.C=s+n,t)))}m.cancel=function(){this.I=!0,bt(this)};function Fe(e){e.V=Date.now()+e.O,Do(e,e.O)}function Do(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Le(Q(e.gb,e),t)}function Fn(e){e.B&&(I.clearTimeout(e.B),e.B=null)}m.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(sh(this.j,this.A),this.K!=2&&(Ie(),Z(17)),bt(this),this.o=2,le(this)):Do(this,this.V-e)};function le(e){e.l.G==0||e.I||Wo(e.l,e)}function bt(e){Fn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Zs(e.T),mo(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Rs(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||xs(n.h,e))){if(!e.J&&xs(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)gn(n),$n(n);else break t;ui(n),Z(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Le(Q(n.cb,n),6e3));if(1>=Lo(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Dt(n,11)}else if((e.J||n.g==e)&&gn(n),!hn(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const h=u[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const l=u[4];l!=null&&(n.Ca=l,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=e.g;if(g){const S=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(S){var r=s.h;r.g||S.indexOf("spdy")==-1&&S.indexOf("quic")==-1&&S.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(ii(r,r.h),r.h=null))}if(s.D){const C=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(s.za=C,R(s.F,s.D,C))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=Xo(s,s.H?s.ka:null,s.V),o.J){Oo(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Fn(a),Fe(a)),s.g=o}else Ko(s);0<n.i.length&&jn(n)}else u[0]!="stop"&&u[0]!="close"||Dt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Dt(n,7):ci(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Ie(4)}catch{}}function ah(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(_n(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function ch(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(_n(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Ao(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(_n(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=ch(e),s=ah(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var _o=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function _t(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof _t){this.h=t!==void 0?t:e.h,fn(this,e.j),this.s=e.s,this.g=e.g,pn(this,e.m),this.l=e.l,t=e.i;var n=new Ce;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),sr(this,n),this.o=e.o}else e&&(n=String(e).match(_o))?(this.h=!!t,fn(this,n[1]||"",!0),this.s=ce(n[2]||""),this.g=ce(n[3]||"",!0),pn(this,n[4]),this.l=ce(n[5]||"",!0),sr(this,n[6]||"",!0),this.o=ce(n[7]||"")):(this.h=!!t,this.i=new Ce(null,this.h))}_t.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ue(t,ir,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ue(t,ir,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(ue(n,n.charAt(0)=="/"?dh:lh,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ue(n,ph)),e.join("")};function pt(e){return new _t(e)}function fn(e,t,n){e.j=n?ce(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function pn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function sr(e,t,n){t instanceof Ce?(e.i=t,gh(e.i,e.h)):(n||(t=ue(t,fh)),e.i=new Ce(t,e.h))}function R(e,t,n){e.i.set(t,n)}function Vn(e){return R(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ce(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ue(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,hh),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function hh(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var ir=/[#\/\?@]/g,lh=/[#\?:]/g,dh=/[#\?]/g,fh=/[#\?@]/g,ph=/#/g;function Ce(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ct(e){e.g||(e.g=new Map,e.h=0,e.i&&uh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=Ce.prototype;m.add=function(e,t){Ct(this),this.i=null,e=Jt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function No(e,t){Ct(e),t=Jt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ko(e,t){return Ct(e),t=Jt(e,t),e.g.has(t)}m.forEach=function(e,t){Ct(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};m.oa=function(){Ct(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};m.W=function(e){Ct(this);let t=[];if(typeof e=="string")ko(this,e)&&(t=t.concat(this.g.get(Jt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};m.set=function(e,t){return Ct(this),this.i=null,e=Jt(this,e),ko(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Ro(e,t,n){No(e,t),0<n.length&&(e.i=null,e.g.set(Jt(e,t),Gs(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function Jt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function gh(e,t){t&&!e.j&&(Ct(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(No(this,s),Ro(this,i,n))},e)),e.j=t}var mh=class{constructor(t,n){this.h=t,this.g=n}};function xo(e){this.l=e||yh,I.PerformanceNavigationTiming?(e=I.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(I.g&&I.g.Ga&&I.g.Ga()&&I.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yh=10;function Mo(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Lo(e){return e.h?1:e.g?e.g.size:0}function xs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ii(e,t){e.g?e.g.add(t):e.h=t}function Oo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}xo.prototype.cancel=function(){if(this.i=Po(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Po(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Gs(e.i)}function ri(){}ri.prototype.stringify=function(e){return I.JSON.stringify(e,void 0)};ri.prototype.parse=function(e){return I.JSON.parse(e,void 0)};function vh(){this.g=new ri}function wh(e,t,n){const s=n||"";try{Ao(e,function(i,r){let o=i;xe(i)&&(o=Js(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function Eh(e,t){const n=new Mn;if(I.Image){const s=new Image;s.onload=We(Ye,n,s,"TestLoadImage: loaded",!0,t),s.onerror=We(Ye,n,s,"TestLoadImage: error",!1,t),s.onabort=We(Ye,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=We(Ye,n,s,"TestLoadImage: timeout",!1,t),I.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Ye(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function Ve(e){this.l=e.ac||null,this.j=e.jb||!1}K(Ve,ei);Ve.prototype.g=function(){return new Un(this.l,this.j)};Ve.prototype.i=function(e){return function(){return e}}({});function Un(e,t){j.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=oi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}K(Un,j);var oi=0;m=Un.prototype;m.open=function(e,t){if(this.readyState!=oi)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Se(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||I).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ue(this)),this.readyState=oi};m.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Se(this)),this.g&&(this.readyState=3,Se(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Fo(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function Fo(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}m.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ue(this):Se(this),this.readyState==3&&Fo(this)}};m.Va=function(e){this.g&&(this.response=this.responseText=e,Ue(this))};m.Ua=function(e){this.g&&(this.response=e,Ue(this))};m.ga=function(){this.g&&Ue(this)};function Ue(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Se(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Se(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Un.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Th=I.JSON.parse;function L(e){j.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Vo,this.K=this.L=!1}K(L,j);var Vo="",Ih=/^https?$/i,Ch=["POST","PUT"];m=L.prototype;m.Ka=function(e){this.L=e};m.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():_s.g(),this.C=this.u?nr(this.u):nr(_s),this.g.onreadystatechange=Q(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){rr(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=I.FormData&&e instanceof I.FormData,!(0<=Zr(Ch,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{$o(this),0<this.B&&((this.K=Sh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Q(this.qa,this)):this.A=ti(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){rr(this,r)}};function Sh(e){return zt&&$u()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}m.qa=function(){typeof zs<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,z(this,"timeout"),this.abort(8))};function rr(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Uo(e),Bn(e)}function Uo(e){e.D||(e.D=!0,z(e,"complete"),z(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,z(this,"complete"),z(this,"abort"),Bn(this))};m.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Bn(this,!0)),L.X.M.call(this)};m.Ha=function(){this.s||(this.F||this.v||this.l?Bo(this):this.fb())};m.fb=function(){Bo(this)};function Bo(e){if(e.h&&typeof zs<"u"&&(!e.C[1]||lt(e)!=4||e.aa()!=2)){if(e.v&&lt(e)==4)ti(e.Ha,0,e);else if(z(e,"readystatechange"),lt(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(_o)[1]||null;if(!i&&I.self&&I.self.location){var r=I.self.location.protocol;i=r.substr(0,r.length-1)}s=!Ih.test(i?i.toLowerCase():"")}n=s}if(n)z(e,"complete"),z(e,"success");else{e.m=6;try{var o=2<lt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",Uo(e)}}finally{Bn(e)}}}}function Bn(e,t){if(e.g){$o(e);const n=e.g,s=e.C[0]?un:null;e.g=null,e.C=null,t||z(e,"ready");try{n.onreadystatechange=s}catch{}}}function $o(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(I.clearTimeout(e.A),e.A=null)}function lt(e){return e.g?e.g.readyState:0}m.aa=function(){try{return 2<lt(this)?this.g.status:-1}catch{return-1}};m.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Th(t)}};function or(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Vo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}m.Ea=function(){return this.m};m.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function jo(e){let t="";return Hs(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function ai(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=jo(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):R(e,t,n))}function oe(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function qo(e){this.Ca=0,this.i=[],this.j=new Mn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=oe("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=oe("baseRetryDelayMs",5e3,e),this.bb=oe("retryDelaySeedMs",1e4,e),this.$a=oe("forwardChannelMaxRetries",2,e),this.ta=oe("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new xo(e&&e.concurrentRequestLimit),this.Fa=new vh,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}m=qo.prototype;m.ma=8;m.G=1;function ci(e){if(zo(e),e.G==3){var t=e.U++,n=pt(e.F);R(n,"SID",e.I),R(n,"RID",t),R(n,"TYPE","terminate"),Be(e,n),t=new Pe(e,e.j,t,void 0),t.K=2,t.v=Vn(pt(n)),n=!1,I.navigator&&I.navigator.sendBeacon&&(n=I.navigator.sendBeacon(t.v.toString(),"")),!n&&I.Image&&(new Image().src=t.v,n=!0),n||(t.g=Jo(t.l,null),t.g.da(t.v)),t.F=Date.now(),Fe(t)}Yo(e)}function $n(e){e.g&&(hi(e),e.g.cancel(),e.g=null)}function zo(e){$n(e),e.u&&(I.clearTimeout(e.u),e.u=null),gn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&I.clearTimeout(e.m),e.m=null)}function jn(e){Mo(e.h)||e.m||(e.m=!0,lo(e.Ja,e),e.C=0)}function bh(e,t){return Lo(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Le(Q(e.Ja,e,t),Qo(e,e.C)),e.C++,!0)}m.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Pe(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=so(r),io(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Go(this,i,t),n=pt(this.F),R(n,"RID",e),R(n,"CVER",22),this.D&&R(n,"X-HTTP-Session-Id",this.D),Be(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(jo(r)))+"&"+t:this.o&&ai(n,this.o,r)),ii(this.h,i),this.Ya&&R(n,"TYPE","init"),this.O?(R(n,"$req",t),R(n,"SID","null"),i.Z=!0,ks(i,n,null)):ks(i,n,t),this.G=2}}else this.G==3&&(e?ar(this,e):this.i.length==0||Mo(this.h)||ar(this))};function ar(e,t){var n;t?n=t.m:n=e.U++;const s=pt(e.F);R(s,"SID",e.I),R(s,"RID",n),R(s,"AID",e.T),Be(e,s),e.o&&e.s&&ai(s,e.o,e.s),n=new Pe(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Go(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),ii(e.h,n),ks(n,s,t)}function Be(e,t){e.ia&&Hs(e.ia,function(n,s){R(t,s,n)}),e.l&&Ao({},function(n,s){R(t,s,n)})}function Go(e,t,n){n=Math.min(e.i.length,n);var s=e.l?Q(e.l.Ra,e.l,e):null;t:{var i=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const h=i[c].g;if(u-=r,0>u)r=Math.max(0,i[c].h-100),a=!1;else try{wh(h,o,"req"+u+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function Ko(e){e.g||e.u||(e.Z=1,lo(e.Ia,e),e.A=0)}function ui(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Le(Q(e.Ia,e),Qo(e,e.A)),e.A++,!0)}m.Ia=function(){if(this.u=null,Ho(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Le(Q(this.eb,this),e)}};m.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Z(10),$n(this),Ho(this))};function hi(e){e.B!=null&&(I.clearTimeout(e.B),e.B=null)}function Ho(e){e.g=new Pe(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=pt(e.sa);R(t,"RID","rpc"),R(t,"SID",e.I),R(t,"CI",e.L?"0":"1"),R(t,"AID",e.T),R(t,"TYPE","xmlhttp"),Be(e,t),e.o&&e.s&&ai(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Vn(pt(t)),n.s=null,n.P=!0,Co(n,e)}m.cb=function(){this.v!=null&&(this.v=null,$n(this),ui(this),Z(19))};function gn(e){e.v!=null&&(I.clearTimeout(e.v),e.v=null)}function Wo(e,t){var n=null;if(e.g==t){gn(e),hi(e),e.g=null;var s=2}else if(xs(e.h,t))n=t.D,Oo(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=Ln(),z(s,new wo(s,n)),jn(e)}else Ko(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(s==1&&bh(e,t)||s==2&&ui(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Dt(e,5);break;case 4:Dt(e,10);break;case 3:Dt(e,6);break;default:Dt(e,2)}}}function Qo(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Dt(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=Q(e.kb,e);n||(n=new _t("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||fn(n,"https"),Vn(n)),Eh(n.toString(),s)}else Z(2);e.G=0,e.l&&e.l.va(t),Yo(e),zo(e)}m.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Z(2)):(this.j.info("Failed to ping google.com"),Z(1))};function Yo(e){if(e.G=0,e.la=[],e.l){const t=Po(e.h);(t.length!=0||e.i.length!=0)&&(Yi(e.la,t),Yi(e.la,e.i),e.h.i.length=0,Gs(e.i),e.i.length=0),e.l.ua()}}function Xo(e,t,n){var s=n instanceof _t?pt(n):new _t(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),pn(s,s.m);else{var i=I.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new _t(null,void 0);s&&fn(r,s),t&&(r.g=t),i&&pn(r,i),n&&(r.l=n),s=r}return n=e.D,t=e.za,n&&t&&R(s,n,t),R(s,"VER",e.ma),Be(e,s),s}function Jo(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new L(new Ve({jb:!0})):new L(e.ra),t.Ka(e.H),t}function Zo(){}m=Zo.prototype;m.xa=function(){};m.wa=function(){};m.va=function(){};m.ua=function(){};m.Ra=function(){};function mn(){if(zt&&!(10<=Number(ju)))throw Error("Environmental error: no available transport.")}mn.prototype.g=function(e,t){return new et(e,t)};function et(e,t){j.call(this),this.g=new qo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!hn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!hn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Zt(this)}K(et,j);et.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Z(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Xo(e,null,e.V),jn(e)};et.prototype.close=function(){ci(this.g)};et.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Js(e),e=n);t.i.push(new mh(t.ab++,e)),t.G==3&&jn(t)};et.prototype.M=function(){this.g.l=null,delete this.j,ci(this.g),delete this.g,et.X.M.call(this)};function ta(e){ni.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}K(ta,ni);function ea(){si.call(this),this.status=1}K(ea,si);function Zt(e){this.g=e}K(Zt,Zo);Zt.prototype.xa=function(){z(this.g,"a")};Zt.prototype.wa=function(e){z(this.g,new ta(e))};Zt.prototype.va=function(e){z(this.g,new ea)};Zt.prototype.ua=function(){z(this.g,"b")};mn.prototype.createWebChannel=mn.prototype.g;et.prototype.send=et.prototype.u;et.prototype.open=et.prototype.m;et.prototype.close=et.prototype.close;On.NO_ERROR=0;On.TIMEOUT=8;On.HTTP_ERROR=6;Eo.COMPLETE="complete";To.EventType=Oe;Oe.OPEN="a";Oe.CLOSE="b";Oe.ERROR="c";Oe.MESSAGE="d";j.prototype.listen=j.prototype.N;L.prototype.listenOnce=L.prototype.O;L.prototype.getLastError=L.prototype.Oa;L.prototype.getLastErrorCode=L.prototype.Ea;L.prototype.getStatus=L.prototype.aa;L.prototype.getResponseJson=L.prototype.Sa;L.prototype.getResponseText=L.prototype.fa;L.prototype.send=L.prototype.da;L.prototype.setWithCredentials=L.prototype.Ka;var Dh=function(){return new mn},Ah=function(){return Ln()},ls=On,_h=Eo,Nh=Ot,cr={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},kh=Ve,Xe=To,Rh=L;const ur="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}W.UNAUTHENTICATED=new W(null),W.GOOGLE_CREDENTIALS=new W("google-credentials-uid"),W.FIRST_PARTY=new W("first-party-uid"),W.MOCK_USER=new W("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let te="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=new Hr("@firebase/firestore");function hr(){return xt.logLevel}function y(e,...t){if(xt.logLevel<=_.DEBUG){const n=t.map(li);xt.debug(`Firestore (${te}): ${e}`,...n)}}function gt(e,...t){if(xt.logLevel<=_.ERROR){const n=t.map(li);xt.error(`Firestore (${te}): ${e}`,...n)}}function yn(e,...t){if(xt.logLevel<=_.WARN){const n=t.map(li);xt.warn(`Firestore (${te}): ${e}`,...n)}}function li(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e="Unexpected state"){const t=`FIRESTORE (${te}) INTERNAL ASSERTION FAILED: `+e;throw gt(t),new Error(t)}function x(e,t){e||E()}function D(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends Xt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class xh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(W.UNAUTHENTICATED))}shutdown(){}}class Mh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Lh{constructor(t){this.t=t,this.currentUser=W.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Nt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Nt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Nt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(x(typeof s.accessToken=="string"),new na(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return x(t===null||typeof t=="string"),new W(t)}}class Oh{constructor(t,n,s){this.h=t,this.l=n,this.m=s,this.type="FirstParty",this.user=W.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Ph{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Oh(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(W.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Fh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vh{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const s=r=>{r.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(x(typeof n.token=="string"),this.T=n.token,new Fh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Uh(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function N(e,t){return e<t?-1:e>t?1:0}function Gt(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new v(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new v(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new v(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new v(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return $.fromMillis(Date.now())}static fromDate(t){return $.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new $(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?N(this.nanoseconds,t.nanoseconds):N(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.timestamp=t}static fromTimestamp(t){return new T(t)}static min(){return new T(new $(0,0))}static max(){return new T(new $(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t,n,s){n===void 0?n=0:n>t.length&&E(),s===void 0?s=t.length-n:s>t.length-n&&E(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return be.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof be?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class M extends be{construct(t,n,s){return new M(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new v(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new M(n)}static emptyPath(){return new M([])}}const Bh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class J extends be{construct(t,n,s){return new J(t,n,s)}static isValidIdentifier(t){return Bh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),J.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new J(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new v(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new v(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new v(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new v(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new J(n)}static emptyPath(){return new J([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(M.fromString(t))}static fromName(t){return new w(M.fromString(t).popFirst(5))}static empty(){return new w(M.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&M.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return M.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new M(t.slice()))}}function $h(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=T.fromTimestamp(s===1e9?new $(n+1,0):new $(n,s));return new wt(i,w.empty(),t)}function jh(e){return new wt(e.readTime,e.key,-1)}class wt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new wt(T.min(),w.empty(),-1)}static max(){return new wt(T.max(),w.empty(),-1)}}function qh(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=w.comparator(e.documentKey,t.documentKey),n!==0?n:N(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==zh)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&E(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new p((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):p.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):p.reject(n)}static resolve(t){return new p((n,s)=>{n(t)})}static reject(t){return new p((n,s)=>{s(t)})}static waitFor(t){return new p((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(t){let n=p.resolve(!1);for(const s of t)n=n.next(i=>i?p.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new p((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;n(t[u]).next(h=>{o[u]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(t,n){return new p((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function $e(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}fi.ct=-1;function je(e){return e==null}function vn(e){return e===0&&1/e==-1/0}function Kh(e){return typeof e=="number"&&Number.isInteger(e)&&!vn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ee(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ia(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t,n){this.comparator=t,this.root=n||q.EMPTY}insert(t,n){return new G(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,q.BLACK,null,null))}remove(t){return new G(this.comparator,this.root.remove(t,this.comparator).copy(null,null,q.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Je(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Je(this.root,t,this.comparator,!1)}getReverseIterator(){return new Je(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Je(this.root,t,this.comparator,!0)}}class Je{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class q{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s??q.RED,this.left=i??q.EMPTY,this.right=r??q.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new q(t??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return q.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return q.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,q.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw E();const t=this.left.check();if(t!==this.right.check())throw E();return t+(this.isRed()?0:1)}}q.EMPTY=null,q.RED=!0,q.BLACK=!1;q.EMPTY=new class{constructor(){this.size=0}get key(){throw E()}get value(){throw E()}get color(){throw E()}get left(){throw E()}get right(){throw E()}copy(e,t,n,s,i){return this}insert(e,t,n){return new q(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.comparator=t,this.data=new G(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new dr(this.data.getIterator())}getIteratorFrom(t){return new dr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof V)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new V(this.comparator);return n.data=t,n}}class dr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.fields=t,t.sort(J.comparator)}static empty(){return new st([])}unionWith(t){let n=new V(J.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new st(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Gt(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Hh("Invalid base64 string: "+i):i}}(t);return new X(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new X(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return N(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}X.EMPTY_BYTE_STRING=new X("");const Wh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Et(e){if(x(!!e),typeof e=="string"){let t=0;const n=Wh.exec(e);if(x(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:P(e.seconds),nanos:P(e.nanos)}}function P(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Kt(e){return typeof e=="string"?X.fromBase64String(e):X.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function oa(e){const t=e.mapValue.fields.__previous_value__;return ra(t)?oa(t):t}function De(e){const t=Et(e.mapValue.fields.__local_write_time__.timestampValue);return new $(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t,n,s,i,r,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ae{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ae("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ae&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Mt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ra(e)?4:Yh(e)?9007199254740991:10:E()}function ot(e,t){if(e===t)return!0;const n=Mt(e);if(n!==Mt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return De(e).isEqual(De(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Et(s.timestampValue),o=Et(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Kt(s.bytesValue).isEqual(Kt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return P(s.geoPointValue.latitude)===P(i.geoPointValue.latitude)&&P(s.geoPointValue.longitude)===P(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return P(s.integerValue)===P(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=P(s.doubleValue),o=P(i.doubleValue);return r===o?vn(r)===vn(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Gt(e.arrayValue.values||[],t.arrayValue.values||[],ot);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(lr(r)!==lr(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ot(r[a],o[a])))return!1;return!0}(e,t);default:return E()}}function _e(e,t){return(e.values||[]).find(n=>ot(n,t))!==void 0}function Ht(e,t){if(e===t)return 0;const n=Mt(e),s=Mt(t);if(n!==s)return N(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return N(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=P(i.integerValue||i.doubleValue),a=P(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return fr(e.timestampValue,t.timestampValue);case 4:return fr(De(e),De(t));case 5:return N(e.stringValue,t.stringValue);case 6:return function(i,r){const o=Kt(i),a=Kt(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=N(o[c],a[c]);if(u!==0)return u}return N(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=N(P(i.latitude),P(r.latitude));return o!==0?o:N(P(i.longitude),P(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Ht(o[c],a[c]);if(u)return u}return N(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===Ze.mapValue&&r===Ze.mapValue)return 0;if(i===Ze.mapValue)return 1;if(r===Ze.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const l=N(a[h],u[h]);if(l!==0)return l;const f=Ht(o[a[h]],c[u[h]]);if(f!==0)return f}return N(a.length,u.length)}(e.mapValue,t.mapValue);default:throw E()}}function fr(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return N(e,t);const n=Et(e),s=Et(t),i=N(n.seconds,s.seconds);return i!==0?i:N(n.nanos,s.nanos)}function Wt(e){return Ms(e)}function Ms(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=Et(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Kt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,w.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Ms(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Ms(s.fields[a])}`;return r+"}"}(e.mapValue):E();var t,n}function Ls(e){return!!e&&"integerValue"in e}function pi(e){return!!e&&"arrayValue"in e}function pr(e){return!!e&&"nullValue"in e}function gr(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ds(e){return!!e&&"mapValue"in e}function de(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ee(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=de(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=de(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Yh(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.value=t}static empty(){return new tt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!ds(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=de(n)}setAll(t){let n=J.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=de(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());ds(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ot(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];ds(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){ee(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new tt(de(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t,n,s,i,r,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new B(t,0,T.min(),T.min(),T.min(),tt.empty(),0)}static newFoundDocument(t,n,s,i){return new B(t,1,n,T.min(),s,i,0)}static newNoDocument(t,n){return new B(t,2,n,T.min(),T.min(),tt.empty(),0)}static newUnknownDocument(t,n){return new B(t,3,n,T.min(),T.min(),tt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(T.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=tt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=T.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof B&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new B(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(t,n){this.position=t,this.inclusive=n}}function mr(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=w.comparator(w.fromName(o.referenceValue),n.key):s=Ht(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function yr(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ot(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t,n="asc"){this.field=t,this.dir=n}}function Xh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{}class F extends aa{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new Zh(t,n,s):n==="array-contains"?new nl(t,s):n==="in"?new sl(t,s):n==="not-in"?new il(t,s):n==="array-contains-any"?new rl(t,s):new F(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new tl(t,s):new el(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ht(n,this.value)):n!==null&&Mt(this.value)===Mt(n)&&this.matchesComparison(Ht(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return E()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class at extends aa{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new at(t,n)}matches(t){return ca(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function ca(e){return e.op==="and"}function ua(e){return Jh(e)&&ca(e)}function Jh(e){for(const t of e.filters)if(t instanceof at)return!1;return!0}function Os(e){if(e instanceof F)return e.field.canonicalString()+e.op.toString()+Wt(e.value);if(ua(e))return e.filters.map(t=>Os(t)).join(",");{const t=e.filters.map(n=>Os(n)).join(",");return`${e.op}(${t})`}}function ha(e,t){return e instanceof F?function(n,s){return s instanceof F&&n.op===s.op&&n.field.isEqual(s.field)&&ot(n.value,s.value)}(e,t):e instanceof at?function(n,s){return s instanceof at&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&ha(r,s.filters[o]),!0):!1}(e,t):void E()}function la(e){return e instanceof F?function(t){return`${t.field.canonicalString()} ${t.op} ${Wt(t.value)}`}(e):e instanceof at?function(t){return t.op.toString()+" {"+t.getFilters().map(la).join(" ,")+"}"}(e):"Filter"}class Zh extends F{constructor(t,n,s){super(t,n,s),this.key=w.fromName(s.referenceValue)}matches(t){const n=w.comparator(t.key,this.key);return this.matchesComparison(n)}}class tl extends F{constructor(t,n){super(t,"in",n),this.keys=da("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class el extends F{constructor(t,n){super(t,"not-in",n),this.keys=da("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function da(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>w.fromName(s.referenceValue))}class nl extends F{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return pi(n)&&_e(n.arrayValue,this.value)}}class sl extends F{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&_e(this.value.arrayValue,n)}}class il extends F{constructor(t,n){super(t,"not-in",n)}matches(t){if(_e(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!_e(this.value.arrayValue,n)}}class rl extends F{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!pi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>_e(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function vr(e,t=null,n=[],s=[],i=null,r=null,o=null){return new ol(e,t,n,s,i,r,o)}function gi(e){const t=D(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Os(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),je(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Wt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Wt(s)).join(",")),t.ft=n}return t.ft}function mi(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Xh(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!ha(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!yr(e.startAt,t.startAt)&&yr(e.endAt,t.endAt)}function Ps(e){return w.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function al(e,t,n,s,i,r,o,a){return new qn(e,t,n,s,i,r,o,a)}function yi(e){return new qn(e)}function wr(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function cl(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ul(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function hl(e){return e.collectionGroup!==null}function jt(e){const t=D(e);if(t.dt===null){t.dt=[];const n=ul(t),s=cl(t);if(n!==null&&s===null)n.isKeyField()||t.dt.push(new fe(n)),t.dt.push(new fe(J.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new fe(J.keyField(),r))}}}return t.dt}function mt(e){const t=D(e);if(!t.wt)if(t.limitType==="F")t.wt=vr(t.path,t.collectionGroup,jt(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of jt(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new fe(r.field,o))}const s=t.endAt?new wn(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new wn(t.startAt.position,t.startAt.inclusive):null;t.wt=vr(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.wt}function Fs(e,t,n){return new qn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function zn(e,t){return mi(mt(e),mt(t))&&e.limitType===t.limitType}function fa(e){return`${gi(mt(e))}|lt:${e.limitType}`}function Vs(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>la(s)).join(", ")}]`),je(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Wt(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Wt(s)).join(",")),`Target(${n})`}(mt(e))}; limitType=${e.limitType})`}function Gn(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):w.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of jt(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=mr(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,jt(n),s)||n.endAt&&!function(i,r,o){const a=mr(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,jt(n),s))}(e,t)}function ll(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function pa(e){return(t,n)=>{let s=!1;for(const i of jt(e)){const r=dl(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function dl(e,t,n){const s=e.field.isKeyField()?w.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Ht(a,c):E()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return E()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ee(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return ia(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=new G(w.comparator);function Tt(){return fl}const ga=new G(w.comparator);function he(...e){let t=ga;for(const n of e)t=t.insert(n.key,n);return t}function pl(e){let t=ga;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function At(){return pe()}function ma(){return pe()}function pe(){return new ne(e=>e.toString(),(e,t)=>e.isEqual(t))}const gl=new V(w.comparator);function A(...e){let t=gl;for(const n of e)t=t.add(n);return t}const ml=new V(N);function ya(){return ml}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vn(t)?"-0":t}}function wa(e){return{integerValue:""+e}}function yl(e,t){return Kh(t)?wa(t):va(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this._=void 0}}function vl(e,t,n){return e instanceof En?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof Ne?Ea(e,t):e instanceof ke?Ta(e,t):function(s,i){const r=El(s,i),o=Er(r)+Er(s._t);return Ls(r)&&Ls(s._t)?wa(o):va(s.serializer,o)}(e,t)}function wl(e,t,n){return e instanceof Ne?Ea(e,t):e instanceof ke?Ta(e,t):n}function El(e,t){return e instanceof Tn?Ls(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class En extends Kn{}class Ne extends Kn{constructor(t){super(),this.elements=t}}function Ea(e,t){const n=Ia(t);for(const s of e.elements)n.some(i=>ot(i,s))||n.push(s);return{arrayValue:{values:n}}}class ke extends Kn{constructor(t){super(),this.elements=t}}function Ta(e,t){let n=Ia(t);for(const s of e.elements)n=n.filter(i=>!ot(i,s));return{arrayValue:{values:n}}}class Tn extends Kn{constructor(t,n){super(),this.serializer=t,this._t=n}}function Er(e){return P(e.integerValue||e.doubleValue)}function Ia(e){return pi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Tl(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Ne&&s instanceof Ne||n instanceof ke&&s instanceof ke?Gt(n.elements,s.elements,ot):n instanceof Tn&&s instanceof Tn?ot(n._t,s._t):n instanceof En&&s instanceof En}(e.transform,t.transform)}class nt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new nt}static exists(t){return new nt(void 0,t)}static updateTime(t){return new nt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function nn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Hn{}function Ca(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new vi(e.key,nt.none()):new qe(e.key,e.data,nt.none());{const n=e.data,s=tt.empty();let i=new V(J.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Pt(e.key,s,new st(i.toArray()),nt.none())}}function Il(e,t,n){e instanceof qe?function(s,i,r){const o=s.value.clone(),a=Ir(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Pt?function(s,i,r){if(!nn(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Ir(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Sa(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function ge(e,t,n,s){return e instanceof qe?function(i,r,o,a){if(!nn(i.precondition,r))return o;const c=i.value.clone(),u=Cr(i.fieldTransforms,a,r);return c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof Pt?function(i,r,o,a){if(!nn(i.precondition,r))return o;const c=Cr(i.fieldTransforms,a,r),u=r.data;return u.setAll(Sa(i)),u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(i,r,o){return nn(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function Tr(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Gt(n,s,(i,r)=>Tl(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class qe extends Hn{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pt extends Hn{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Sa(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Ir(e,t,n){const s=new Map;x(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,wl(o,a,n[i]))}return s}function Cr(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,vl(r,o,t))}return s}class vi extends Hn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ba extends Hn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Il(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=ge(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=ge(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=ma();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=Ca(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(T.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),A())}isEqual(t){return this.batchId===t.batchId&&Gt(this.mutations,t.mutations,(n,s)=>Tr(n,s))&&Gt(this.baseMutations,t.baseMutations,(n,s)=>Tr(n,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O,b;function Dl(e){switch(e){default:return E();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function Da(e){if(e===void 0)return gt("GRPC error has no .code"),d.UNKNOWN;switch(e){case O.OK:return d.OK;case O.CANCELLED:return d.CANCELLED;case O.UNKNOWN:return d.UNKNOWN;case O.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case O.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case O.INTERNAL:return d.INTERNAL;case O.UNAVAILABLE:return d.UNAVAILABLE;case O.UNAUTHENTICATED:return d.UNAUTHENTICATED;case O.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case O.NOT_FOUND:return d.NOT_FOUND;case O.ALREADY_EXISTS:return d.ALREADY_EXISTS;case O.PERMISSION_DENIED:return d.PERMISSION_DENIED;case O.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case O.ABORTED:return d.ABORTED;case O.OUT_OF_RANGE:return d.OUT_OF_RANGE;case O.UNIMPLEMENTED:return d.UNIMPLEMENTED;case O.DATA_LOSS:return d.DATA_LOSS;default:return E()}}(b=O||(O={}))[b.OK=0]="OK",b[b.CANCELLED=1]="CANCELLED",b[b.UNKNOWN=2]="UNKNOWN",b[b.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",b[b.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",b[b.NOT_FOUND=5]="NOT_FOUND",b[b.ALREADY_EXISTS=6]="ALREADY_EXISTS",b[b.PERMISSION_DENIED=7]="PERMISSION_DENIED",b[b.UNAUTHENTICATED=16]="UNAUTHENTICATED",b[b.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",b[b.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",b[b.ABORTED=10]="ABORTED",b[b.OUT_OF_RANGE=11]="OUT_OF_RANGE",b[b.UNIMPLEMENTED=12]="UNIMPLEMENTED",b[b.INTERNAL=13]="INTERNAL",b[b.UNAVAILABLE=14]="UNAVAILABLE",b[b.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return tn}static getOrCreateInstance(){return tn===null&&(tn=new wi),tn}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let tn=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const i=new Map;return i.set(t,ze.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Wn(T.min(),i,ya(),Tt(),A())}}class ze{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new ze(s,n,A(),A(),A())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t,n,s,i){this.It=t,this.removedTargetIds=n,this.key=s,this.Tt=i}}class Aa{constructor(t,n){this.targetId=t,this.Et=n}}class _a{constructor(t,n,s=X.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Sr{constructor(){this.At=0,this.Rt=Dr(),this.vt=X.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(t){t.approximateByteSize()>0&&(this.Pt=!0,this.vt=t)}Ct(){let t=A(),n=A(),s=A();return this.Rt.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:E()}}),new ze(this.vt,this.bt,t,n,s)}xt(){this.Pt=!1,this.Rt=Dr()}Nt(t,n){this.Pt=!0,this.Rt=this.Rt.insert(t,n)}kt(t){this.Pt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class Al{constructor(t){this.Ft=t,this.Bt=new Map,this.Lt=Tt(),this.qt=br(),this.Ut=new V(N)}Kt(t){for(const n of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(n,t.Tt):this.Qt(n,t.key,t.Tt);for(const n of t.removedTargetIds)this.Qt(n,t.key,t.Tt)}zt(t){this.forEachTarget(t,n=>{const s=this.jt(n);switch(t.state){case 0:this.Wt(n)&&s.Dt(t.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(t.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(t.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(t.resumeToken));break;default:E()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.Wt(i)&&n(i)})}Jt(t){var n;const s=t.targetId,i=t.Et.count,r=this.Yt(s);if(r){const o=r.target;if(Ps(o))if(i===0){const a=new w(o.path);this.Qt(s,a,B.newNoDocument(a,T.min()))}else x(i===1);else{const a=this.Zt(s);a!==i&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=wi.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:t.Et.count}))}}}Xt(t){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Ps(a.target)){const c=new w(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,B.newNoDocument(c,t))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=A();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(t));const i=new Wn(t,n,this.Ut,this.Lt,s);return this.Lt=Tt(),this.qt=br(),this.Ut=new V(N),i}Gt(t,n){if(!this.Wt(t))return;const s=this.te(t,n.key)?2:0;this.jt(t).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(t))}Qt(t,n,s){if(!this.Wt(t))return;const i=this.jt(t);this.te(t,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(t)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(t){this.Bt.delete(t)}Zt(t){const n=this.jt(t).Ct();return this.Ft.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.jt(t).Ot()}jt(t){let n=this.Bt.get(t);return n||(n=new Sr,this.Bt.set(t,n)),n}ee(t){let n=this.qt.get(t);return n||(n=new V(N),this.qt=this.qt.insert(t,n)),n}Wt(t){const n=this.Yt(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}Yt(t){const n=this.Bt.get(t);return n&&n.Vt?null:this.Ft.ne(t)}Ht(t){this.Bt.set(t,new Sr),this.Ft.getRemoteKeysForTarget(t).forEach(n=>{this.Qt(t,n,null)})}te(t,n){return this.Ft.getRemoteKeysForTarget(t).has(n)}}function br(){return new G(w.comparator)}function Dr(){return new G(w.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Nl=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),kl=(()=>({and:"AND",or:"OR"}))();class Rl{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function In(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Na(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function xl(e,t){return In(e,t.toTimestamp())}function dt(e){return x(!!e),T.fromTimestamp(function(t){const n=Et(t);return new $(n.seconds,n.nanos)}(e))}function Ei(e,t){return function(n){return new M(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function ka(e){const t=M.fromString(e);return x(La(t)),t}function Cn(e,t){return Ei(e.databaseId,t.path)}function me(e,t){const n=ka(t);if(n.get(1)!==e.databaseId.projectId)throw new v(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new v(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new w(Ra(n))}function Us(e,t){return Ei(e.databaseId,t)}function Ml(e){const t=ka(e);return t.length===4?M.emptyPath():Ra(t)}function Sn(e){return new M(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ra(e){return x(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Ar(e,t,n){return{name:Cn(e,t),fields:n.value.mapValue.fields}}function Ll(e,t){return"found"in t?function(n,s){x(!!s.found),s.found.name,s.found.updateTime;const i=me(n,s.found.name),r=dt(s.found.updateTime),o=s.found.createTime?dt(s.found.createTime):T.min(),a=new tt({mapValue:{fields:s.found.fields}});return B.newFoundDocument(i,r,o,a)}(e,t):"missing"in t?function(n,s){x(!!s.missing),x(!!s.readTime);const i=me(n,s.missing),r=dt(s.readTime);return B.newNoDocument(i,r)}(e,t):E()}function Ol(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:E()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(x(u===void 0||typeof u=="string"),X.fromBase64String(u||"")):(x(u===void 0||u instanceof Uint8Array),X.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?d.UNKNOWN:Da(c.code);return new v(u,c.message||"")}(o);n=new _a(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=me(e,s.document.name),r=dt(s.document.updateTime),o=s.document.createTime?dt(s.document.createTime):T.min(),a=new tt({mapValue:{fields:s.document.fields}}),c=B.newFoundDocument(i,r,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new sn(u,h,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=me(e,s.document),r=s.readTime?dt(s.readTime):T.min(),o=B.newNoDocument(i,r),a=s.removedTargetIds||[];n=new sn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=me(e,s.document),r=s.removedTargetIds||[];n=new sn([],r,i,null)}else{if(!("filter"in t))return E();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new bl(i),o=s.targetId;n=new Aa(o,r)}}return n}function Pl(e,t){let n;if(t instanceof qe)n={update:Ar(e,t.key,t.value)};else if(t instanceof vi)n={delete:Cn(e,t.key)};else if(t instanceof Pt)n={update:Ar(e,t.key,t.data),updateMask:zl(t.fieldMask)};else{if(!(t instanceof ba))return E();n={verify:Cn(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof En)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ne)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ke)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Tn)return{fieldPath:r.field.canonicalString(),increment:o._t};throw E()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:xl(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:E()}(e,t.precondition)),n}function Fl(e,t){return{documents:[Us(e,t.path)]}}function Vl(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Us(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Us(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return Ma(at.create(c,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:Ft(h.field),direction:$l(h.dir)}}(u))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,u){return c.useProto3Json||je(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function Ul(e){let t=Ml(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){x(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let r=[];n.where&&(r=function(h){const l=xa(h);return l instanceof at&&ua(l)?l.getFilters():[l]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new fe(Vt(l.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,je(l)?null:l}(n.limit));let c=null;n.startAt&&(c=function(h){const l=!!h.before,f=h.values||[];return new wn(f,l)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const l=!h.before,f=h.values||[];return new wn(f,l)}(n.endAt)),al(t,i,o,r,a,"F",c,u)}function Bl(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return E()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function xa(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Vt(t.unaryFilter.field);return F.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Vt(t.unaryFilter.field);return F.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Vt(t.unaryFilter.field);return F.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Vt(t.unaryFilter.field);return F.create(r,"!=",{nullValue:"NULL_VALUE"});default:return E()}}(e):e.fieldFilter!==void 0?function(t){return F.create(Vt(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return E()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return at.create(t.compositeFilter.filters.map(n=>xa(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return E()}}(t.compositeFilter.op))}(e):E()}function $l(e){return _l[e]}function jl(e){return Nl[e]}function ql(e){return kl[e]}function Ft(e){return{fieldPath:e.canonicalString()}}function Vt(e){return J.fromServerFormat(e.fieldPath)}function Ma(e){return e instanceof F?function(t){if(t.op==="=="){if(gr(t.value))return{unaryFilter:{field:Ft(t.field),op:"IS_NAN"}};if(pr(t.value))return{unaryFilter:{field:Ft(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(gr(t.value))return{unaryFilter:{field:Ft(t.field),op:"IS_NOT_NAN"}};if(pr(t.value))return{unaryFilter:{field:Ft(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ft(t.field),op:jl(t.op),value:t.value}}}(e):e instanceof at?function(t){const n=t.getFilters().map(s=>Ma(s));return n.length===1?n[0]:{compositeFilter:{op:ql(t.op),filters:n}}}(e):E()}function zl(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function La(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,n,s,i,r=T.min(),o=T.min(),a=X.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new kt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(t){this.se=t}}function Kl(e){const t=Ul({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Fs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){this.He=new Wl}addToCollectionParentIndex(t,n){return this.He.add(n),p.resolve()}getCollectionParents(t,n){return p.resolve(this.He.getEntries(n))}addFieldIndex(t,n){return p.resolve()}deleteFieldIndex(t,n){return p.resolve()}getDocumentsMatchingTarget(t,n){return p.resolve(null)}getIndexType(t,n){return p.resolve(0)}getFieldIndexes(t,n){return p.resolve([])}getNextCollectionGroupToUpdate(t){return p.resolve(null)}getMinOffset(t,n){return p.resolve(wt.min())}getMinOffsetFromCollectionGroup(t,n){return p.resolve(wt.min())}updateCollectionGroup(t,n,s){return p.resolve()}updateIndexEntries(t,n){return p.resolve()}}class Wl{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new V(M.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new V(M.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t){this.Rn=t}next(){return this.Rn+=2,this.Rn}static vn(){return new Qt(0)}static bn(){return new Qt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(){this.changes=new ne(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,B.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?p.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(s!==null&&ge(s.mutation,i,st.empty(),$.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,A()).next(()=>s))}getLocalViewOfDocuments(t,n,s=A()){const i=At();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=he();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=At();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,A()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=Tt();const o=pe(),a=pe();return n.forEach((c,u)=>{const h=s.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof Pt)?r=r.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),ge(h.mutation,u,h.mutation.getFieldMask(),$.now())):o.set(u.key,st.empty())}),this.recalculateAndSaveOverlays(t,r).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var l;return a.set(u,new Yl(h,(l=o.get(u))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=pe();let i=new G((o,a)=>o-a),r=A();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||st.empty();h=a.applyToLocalView(u,h),s.set(c,h);const l=(i.get(a.batchId)||A()).add(c);i=i.insert(a.batchId,l)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,l=ma();h.forEach(f=>{if(!r.has(f)){const g=Ca(n.get(f),s.get(f));g!==null&&l.set(f,g),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,l))}return p.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return w.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):hl(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):p.resolve(At());let a=-1,c=r;return o.next(u=>p.forEach(u,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),r.get(h)?p.resolve():this.remoteDocumentCache.getEntry(t,h).next(f=>{c=c.insert(h,f)}))).next(()=>this.populateOverlays(t,u,r)).next(()=>this.computeViews(t,c,u,A())).next(h=>({batchId:a,changes:pl(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new w(n)).next(s=>{let i=he();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=he();return this.indexManager.getCollectionParents(t,i).next(o=>p.forEach(o,a=>{const c=function(u,h){return new qn(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((h,l)=>{r=r.insert(h,l)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,i))).next(r=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,B.newInvalidDocument(u)))});let o=he();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&ge(u.mutation,c,st.empty(),$.now()),Gn(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t){this.serializer=t,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(t,n){return p.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:dt(s.createTime)}),p.resolve()}getNamedQuery(t,n){return p.resolve(this.Xn.get(n))}saveNamedQuery(t,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:Kl(s.bundledQuery),readTime:dt(s.readTime)}}(n)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(){this.overlays=new G(w.comparator),this.ts=new Map}getOverlay(t,n){return p.resolve(this.overlays.get(n))}getOverlays(t,n){const s=At();return p.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.re(t,n,r)}),p.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.ts.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(s)),p.resolve()}getOverlaysForCollection(t,n,s){const i=At(),r=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return p.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new G((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=r.get(u.largestBatchId);h===null&&(h=At(),r=r.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=At(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return p.resolve(a)}re(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(s.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Sl(n,s));let r=this.ts.get(n);r===void 0&&(r=A(),this.ts.set(n,r)),this.ts.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.es=new V(U.ns),this.ss=new V(U.rs)}isEmpty(){return this.es.isEmpty()}addReference(t,n){const s=new U(t,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.us(new U(t,n))}cs(t,n){t.forEach(s=>this.removeReference(s,n))}hs(t){const n=new w(new M([])),s=new U(n,t),i=new U(n,t+1),r=[];return this.ss.forEachInRange([s,i],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(t=>this.us(t))}us(t){this.es=this.es.delete(t),this.ss=this.ss.delete(t)}fs(t){const n=new w(new M([])),s=new U(n,t),i=new U(n,t+1);let r=A();return this.ss.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new U(t,0),s=this.es.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class U{constructor(t,n){this.key=t,this.ds=n}static ns(t,n){return w.comparator(t.key,n.key)||N(t.ds,n.ds)}static rs(t,n){return N(t.ds,n.ds)||w.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new V(U.ns)}checkEmpty(t){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Cl(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new U(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,n){return p.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.ys(s),r=i<0?0:i;return p.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new U(n,0),i=new U(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([s,i],o=>{const a=this.gs(o.ds);r.push(a)}),p.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new V(N);return n.forEach(i=>{const r=new U(i,0),o=new U(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{s=s.add(a.ds)})}),p.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;w.isDocumentKey(r)||(r=r.child(""));const o=new U(new w(r),0);let a=new V(N);return this._s.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.ds)),!0)},o),p.resolve(this.ps(a))}ps(t){const n=[];return t.forEach(s=>{const i=this.gs(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){x(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return p.forEach(n.mutations,i=>{const r=new U(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this._s=s})}En(t){}containsKey(t,n){const s=new U(n,0),i=this._s.firstAfterOrEqual(s);return p.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,p.resolve()}Is(t,n){return this.ys(t)}ys(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}gs(t){const n=this.ys(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(t){this.Ts=t,this.docs=new G(w.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return p.resolve(s?s.document.mutableCopy():B.newInvalidDocument(n))}getEntries(t,n){let s=Tt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():B.newInvalidDocument(i))}),p.resolve(s)}getDocumentsMatchingQuery(t,n,s,i){let r=Tt();const o=n.path,a=new w(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||qh(jh(h),s)<=0||(i.has(h.key)||Gn(n,h))&&(r=r.insert(h.key,h.mutableCopy()))}return p.resolve(r)}getAllFromCollectionGroup(t,n,s,i){E()}Es(t,n){return p.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new nd(this)}getSize(t){return p.resolve(this.size)}}class nd extends Ql{constructor(t){super(),this.Jn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(t,i)):this.Jn.removeEntry(s)}),p.waitFor(n)}getFromCache(t,n){return this.Jn.getEntry(t,n)}getAllFromCache(t,n){return this.Jn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(t){this.persistence=t,this.As=new ne(n=>gi(n),mi),this.lastRemoteSnapshotVersion=T.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Ti,this.targetCount=0,this.bs=Qt.vn()}forEachTarget(t,n){return this.As.forEach((s,i)=>n(i)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.Rs)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),p.resolve()}Sn(t){this.As.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.bs=new Qt(n),this.highestTargetId=n),t.sequenceNumber>this.Rs&&(this.Rs=t.sequenceNumber)}addTargetData(t,n){return this.Sn(n),this.targetCount+=1,p.resolve()}updateTargetData(t,n){return this.Sn(n),p.resolve()}removeTargetData(t,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),p.waitFor(r).next(()=>i)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,n){const s=this.As.get(n)||null;return p.resolve(s)}addMatchingKeys(t,n,s){return this.vs.os(n,s),p.resolve()}removeMatchingKeys(t,n,s){this.vs.cs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),p.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.vs.hs(n),p.resolve()}getMatchingKeysForTargetId(t,n){const s=this.vs.fs(n);return p.resolve(s)}containsKey(t,n){return p.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(t,n){this.Ps={},this.overlays={},this.Vs=new fi(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=t(this),this.Ds=new sd(this),this.indexManager=new Hl,this.remoteDocumentCache=function(s){return new ed(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new Gl(n),this.xs=new Jl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Zl,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Ps[t.toKey()];return s||(s=new td(n,this.referenceDelegate),this.Ps[t.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(t,n,s){y("MemoryPersistence","Starting transaction:",t);const i=new rd(this.Vs.next());return this.referenceDelegate.Ns(),s(i).next(r=>this.referenceDelegate.ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Os(t,n){return p.or(Object.values(this.Ps).map(s=>()=>s.containsKey(t,n)))}}class rd extends Gh{constructor(t){super(),this.currentSequenceNumber=t}}class Ii{constructor(t){this.persistence=t,this.$s=new Ti,this.Ms=null}static Fs(t){return new Ii(t)}get Bs(){if(this.Ms)return this.Ms;throw E()}addReference(t,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),p.resolve()}removeReference(t,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),p.resolve()}markPotentiallyOrphaned(t,n){return this.Bs.add(n.toString()),p.resolve()}removeTarget(t,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Bs.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Ns(){this.Ms=new Set}ks(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Bs,s=>{const i=w.fromPath(s);return this.Ls(t,i).next(r=>{r||n.removeEntry(i,T.min())})}).next(()=>(this.Ms=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ls(t,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(t){return 0}Ls(t,n){return p.or([()=>p.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Os(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Vi=s,this.Si=i}static Di(t,n){let s=A(),i=A();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Ci(t,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(){this.Ci=!1}initialize(t,n){this.xi=t,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(t,n,s,i){return this.Ni(t,n).next(r=>r||this.ki(t,n,i,s)).next(r=>r||this.Oi(t,n))}Ni(t,n){if(wr(n))return p.resolve(null);let s=mt(n);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Fs(n,null,"F"),s=mt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=A(...r);return this.xi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.$i(n,a);return this.Mi(n,u,o,c.readTime)?this.Ni(t,Fs(n,null,"F")):this.Fi(t,u,n,c)}))})))}ki(t,n,s,i){return wr(n)||i.isEqual(T.min())?this.Oi(t,n):this.xi.getDocuments(t,s).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,s,i)?this.Oi(t,n):(hr()<=_.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Vs(n)),this.Fi(t,o,n,$h(i,-1)))})}$i(t,n){let s=new V(pa(t));return n.forEach((i,r)=>{Gn(t,r)&&(s=s.add(r))}),s}Mi(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(t,n){return hr()<=_.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",Vs(n)),this.xi.getDocumentsMatchingQuery(t,n,wt.min())}Fi(t,n,s,i){return this.xi.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(t,n,s,i){this.persistence=t,this.Bi=n,this.serializer=i,this.Li=new G(N),this.qi=new ne(r=>gi(r),mi),this.Ui=new Map,this.Ki=t.getRemoteDocumentCache(),this.Ds=t.getTargetCache(),this.xs=t.getBundleCache(),this.Gi(s)}Gi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Xl(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Li))}}function cd(e,t,n,s){return new ad(e,t,n,s)}async function Oa(e,t){const n=D(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Gi(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=A();for(const u of i){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of r){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function Pa(e){const t=D(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ds.getLastRemoteSnapshotVersion(n))}function ud(e,t){const n=D(e),s=t.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];t.targetChanges.forEach((h,l)=>{const f=i.get(l);if(!f)return;a.push(n.Ds.removeMatchingKeys(r,h.removedDocuments,l).next(()=>n.Ds.addMatchingKeys(r,h.addedDocuments,l)));let g=f.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(l)?g=g.withResumeToken(X.EMPTY_BYTE_STRING,T.min()).withLastLimboFreeSnapshotVersion(T.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),i=i.insert(l,g),function(S,C,k){return S.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(f,g,h)&&a.push(n.Ds.updateTargetData(r,g))});let c=Tt(),u=A();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(hd(r,o,t.documentUpdates).next(h=>{c=h.zi,u=h.ji})),!s.isEqual(T.min())){const h=n.Ds.getLastRemoteSnapshotVersion(r).next(l=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return p.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.Li=i,r))}function hd(e,t,n){let s=A(),i=A();return n.forEach(r=>s=s.add(r)),t.getEntries(e,s).next(r=>{let o=Tt();return n.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(T.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{zi:o,ji:i}})}function ld(e,t){const n=D(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ds.getTargetData(s,t).next(r=>r?(i=r,p.resolve(i)):n.Ds.allocateTargetId(s).next(o=>(i=new kt(t,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Li.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(t,s.targetId)),s})}async function Bs(e,t,n){const s=D(e),i=s.Li.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$e(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Li=s.Li.remove(t),s.qi.delete(i.target)}function _r(e,t,n){const s=D(e);let i=T.min(),r=A();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const h=D(a),l=h.qi.get(u);return l!==void 0?p.resolve(h.Li.get(l)):h.Ds.getTargetData(c,u)}(s,o,mt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,t,n?i:T.min(),n?r:A())).next(a=>(dd(s,ll(t),a),{documents:a,Wi:r})))}function dd(e,t,n){let s=e.Ui.get(t)||T.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Ui.set(t,s)}class Nr{constructor(){this.activeTargetIds=ya()}tr(t){this.activeTargetIds=this.activeTargetIds.add(t)}er(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class fd{constructor(){this.Br=new Nr,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Br.tr(t),this.Lr[t]||"not-current"}updateQueryState(t,n,s){this.Lr[t]=n}removeLocalQueryTarget(t){this.Br.er(t)}isLocalQueryTarget(t){return this.Br.activeTargetIds.has(t)}clearQueryState(t){delete this.Lr[t]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(t){return this.Br.activeTargetIds.has(t)}start(){return this.Br=new Nr,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{qr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(t){this.zr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.zr)t(0)}Qr(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.zr)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let en=null;function fs(){return en===null?en=268435456+Math.round(2147483648*Math.random()):en++,"0x"+en.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(t){this.Wr=t.Wr,this.Hr=t.Hr}Jr(t){this.Yr=t}Zr(t){this.Xr=t}onMessage(t){this.eo=t}close(){this.Hr()}send(t){this.Wr(t)}no(){this.Yr()}so(t){this.Xr(t)}io(t){this.eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H="WebChannelConnection";class yd extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.ro=n+"://"+t.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(t,n,s,i,r){const o=fs(),a=this.ao(t,n);y("RestConnection",`Sending RPC '${t}' ${o}:`,a,s);const c={};return this.ho(c,i,r),this.lo(t,a,c,s).then(u=>(y("RestConnection",`Received RPC '${t}' ${o}: `,u),u),u=>{throw yn("RestConnection",`RPC '${t}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}fo(t,n,s,i,r,o){return this.co(t,n,s,i,r)}ho(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+te,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}ao(t,n){const s=gd[t];return`${this.ro}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,n,s,i){const r=fs();return new Promise((o,a)=>{const c=new Rh;c.setWithCredentials(!0),c.listenOnce(_h.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ls.NO_ERROR:const h=c.getResponseJson();y(H,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(h)),o(h);break;case ls.TIMEOUT:y(H,`RPC '${t}' ${r} timed out`),a(new v(d.DEADLINE_EXCEEDED,"Request time out"));break;case ls.HTTP_ERROR:const l=c.getStatus();if(y(H,`RPC '${t}' ${r} failed with status:`,l,"response text:",c.getResponseText()),l>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const S=function(C){const k=C.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(k)>=0?k:d.UNKNOWN}(g.status);a(new v(S,g.message))}else a(new v(d.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new v(d.UNAVAILABLE,"Connection failed."));break;default:E()}}finally{y(H,`RPC '${t}' ${r} completed.`)}});const u=JSON.stringify(i);y(H,`RPC '${t}' ${r} sending request:`,i),c.send(n,"POST",u,s,15)})}wo(t,n,s){const i=fs(),r=[this.ro,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Dh(),a=Ah(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new kh({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=r.join("");y(H,`Creating RPC '${t}' stream ${i}: ${u}`,c);const h=o.createWebChannel(u,c);let l=!1,f=!1;const g=new md({Wr:C=>{f?y(H,`Not sending because RPC '${t}' stream ${i} is closed:`,C):(l||(y(H,`Opening RPC '${t}' stream ${i} transport.`),h.open(),l=!0),y(H,`RPC '${t}' stream ${i} sending:`,C),h.send(C))},Hr:()=>h.close()}),S=(C,k,ct)=>{C.listen(k,ut=>{try{ct(ut)}catch(ht){setTimeout(()=>{throw ht},0)}})};return S(h,Xe.EventType.OPEN,()=>{f||y(H,`RPC '${t}' stream ${i} transport opened.`)}),S(h,Xe.EventType.CLOSE,()=>{f||(f=!0,y(H,`RPC '${t}' stream ${i} transport closed`),g.so())}),S(h,Xe.EventType.ERROR,C=>{f||(f=!0,yn(H,`RPC '${t}' stream ${i} transport errored:`,C),g.so(new v(d.UNAVAILABLE,"The operation could not be completed")))}),S(h,Xe.EventType.MESSAGE,C=>{var k;if(!f){const ct=C.data[0];x(!!ct);const ut=ct,ht=ut.error||((k=ut[0])===null||k===void 0?void 0:k.error);if(ht){y(H,`RPC '${t}' stream ${i} received error:`,ht);const ie=ht.status;let re=function(sc){const $i=O[sc];if($i!==void 0)return Da($i)}(ie),Bi=ht.message;re===void 0&&(re=d.INTERNAL,Bi="Unknown error status: "+ie+" with message "+ht.message),f=!0,g.so(new v(re,Bi)),h.close()}else y(H,`RPC '${t}' stream ${i} received:`,ct),g.io(ct)}}),S(a,Nh.STAT_EVENT,C=>{C.stat===cr.PROXY?y(H,`RPC '${t}' stream ${i} detected buffering proxy`):C.stat===cr.NOPROXY&&y(H,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.no()},0),g}}function ps(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(e){return new Rl(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Ws=t,this.timerId=n,this._o=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,n-s);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),t())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(t,n,s,i,r,o,a,c){this.Ws=t,this.bo=s,this.Po=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Si(t,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(t){this.Bo(),this.stream.send(t)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(t,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,t!==4?this.Co.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(gt(n.toString()),gt("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const t=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Vo===n&&this.Ko(s,i)},s=>{t(()=>{const i=new v(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(i)})})}Ko(t,n){const s=this.Uo(this.Vo);this.stream=this.Qo(t,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{s(()=>this.Go(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wd extends vd{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}Qo(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.Co.reset();const n=Ol(this.serializer,t),s=function(i){if(!("targetChange"in i))return T.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?T.min():r.readTime?dt(r.readTime):T.min()}(t);return this.listener.zo(n,s)}jo(t){const n={};n.database=Sn(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;return o=Ps(a)?{documents:Fl(i,a)}:{query:Vl(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Na(i,r.resumeToken):r.snapshotVersion.compareTo(T.min())>0&&(o.readTime=In(i,r.snapshotVersion.toTimestamp())),o}(this.serializer,t);const s=Bl(this.serializer,t);s&&(n.labels=s),this.Fo(n)}Wo(t){const n={};n.database=Sn(this.serializer),n.removeTarget=t,this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new v(d.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.co(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new v(d.UNKNOWN,i.toString())})}fo(t,n,s,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new v(d.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class Td{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(t){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.uu("Offline")))}set(t){this.hu(),this.su=0,t==="Online"&&(this.ru=!1),this.uu(t)}uu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}cu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(gt(n),this.ru=!1):y("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{s.enqueueAndForget(async()=>{Ke(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=D(a);c.du.add(4),await Ge(c),c.mu.set("Unknown"),c.du.delete(4),await Yn(c)}(this))})}),this.mu=new Td(s,i)}}async function Yn(e){if(Ke(e))for(const t of e.wu)await t(!0)}async function Ge(e){for(const t of e.wu)await t(!1)}function Fa(e,t){const n=D(e);n.fu.has(t.targetId)||(n.fu.set(t.targetId,t),Ai(n)?Di(n):se(n).No()&&bi(n,t))}function Va(e,t){const n=D(e),s=se(n);n.fu.delete(t),s.No()&&Ua(n,t),n.fu.size===0&&(s.No()?s.$o():Ke(n)&&n.mu.set("Unknown"))}function bi(e,t){e.gu.Ot(t.targetId),se(e).jo(t)}function Ua(e,t){e.gu.Ot(t),se(e).Wo(t)}function Di(e){e.gu=new Al({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.fu.get(t)||null}),se(e).start(),e.mu.ou()}function Ai(e){return Ke(e)&&!se(e).xo()&&e.fu.size>0}function Ke(e){return D(e).du.size===0}function Ba(e){e.gu=void 0}async function Cd(e){e.fu.forEach((t,n)=>{bi(e,t)})}async function Sd(e,t){Ba(e),Ai(e)?(e.mu.au(t),Di(e)):e.mu.set("Unknown")}async function bd(e,t,n){if(e.mu.set("Online"),t instanceof _a&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.fu.delete(o),s.gu.removeTarget(o))}(e,t)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Rr(e,s)}else if(t instanceof sn?e.gu.Kt(t):t instanceof Aa?e.gu.Jt(t):e.gu.zt(t),!n.isEqual(T.min()))try{const s=await Pa(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.gu.Xt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.fu.get(c);u&&i.fu.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.fu.get(a);if(!c)return;i.fu.set(a,c.withResumeToken(X.EMPTY_BYTE_STRING,c.snapshotVersion)),Ua(i,a);const u=new kt(c.target,a,1,c.sequenceNumber);bi(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await Rr(e,s)}}async function Rr(e,t,n){if(!$e(t))throw t;e.du.add(1),await Ge(e),e.mu.set("Offline"),n||(n=()=>Pa(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.du.delete(1),await Yn(e)})}async function xr(e,t){const n=D(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=Ke(n);n.du.add(3),await Ge(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.du.delete(3),await Yn(n)}async function Dd(e,t){const n=D(e);t?(n.du.delete(2),await Yn(n)):t||(n.du.add(2),await Ge(n),n.mu.set("Unknown"))}function se(e){return e.yu||(e.yu=function(t,n,s){const i=D(t);return i.nu(),new wd(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Jr:Cd.bind(null,e),Zr:Sd.bind(null,e),zo:bd.bind(null,e)}),e.wu.push(async t=>{t?(e.yu.Oo(),Ai(e)?Di(e):e.mu.set("Unknown")):(await e.yu.stop(),Ba(e))})),e.yu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new _i(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $a(e,t){if(gt("AsyncQueue",`${t}: ${e}`),$e(e))return new v(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||w.comparator(n.key,s.key):(n,s)=>w.comparator(n.key,s.key),this.keyedMap=he(),this.sortedSet=new G(this.comparator)}static emptySet(t){return new qt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof qt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new qt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.Iu=new G(w.comparator)}track(t){const n=t.doc.key,s=this.Iu.get(n);s?t.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,t):t.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Iu=this.Iu.remove(n):t.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:t.doc}):E():this.Iu=this.Iu.insert(n,t)}Tu(){const t=[];return this.Iu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Yt{constructor(t,n,s,i,r,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Yt(t,n,qt.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&zn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(){this.Eu=void 0,this.listeners=[]}}class _d{constructor(){this.queries=new ne(t=>fa(t),zn),this.onlineState="Unknown",this.Au=new Set}}async function Nd(e,t){const n=D(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Ad),i)try{r.Eu=await n.onListen(s)}catch(o){const a=$a(o,`Initialization of query '${Vs(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.Ru(n.onlineState),r.Eu&&t.vu(r.Eu)&&Ni(n)}async function kd(e,t){const n=D(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Rd(e,t){const n=D(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Eu=i}}s&&Ni(n)}function xd(e,t,n){const s=D(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function Ni(e){e.Au.forEach(t=>{t.next()})}class Md{constructor(t,n,s){this.query=t,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Yt(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Pu?this.Su(t)&&(this.bu.next(t),n=!0):this.Du(t,this.onlineState)&&(this.Cu(t),n=!0),this.Vu=t,n}onError(t){this.bu.error(t)}Ru(t){this.onlineState=t;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,t)&&(this.Cu(this.Vu),n=!0),n}Du(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Su(t){if(t.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(t){t=Yt.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Pu=!0,this.bu.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(t){this.key=t}}class qa{constructor(t){this.key=t}}class Ld{constructor(t,n){this.query=t,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=A(),this.mutatedKeys=A(),this.Ku=pa(t),this.Gu=new qt(this.Ku)}get Qu(){return this.Lu}zu(t,n){const s=n?n.ju:new Mr,i=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,l)=>{const f=i.get(h),g=Gn(this.query,l)?l:null,S=!!f&&this.mutatedKeys.has(f.key),C=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;f&&g?f.data.isEqual(g.data)?S!==C&&(s.track({type:3,doc:g}),k=!0):this.Wu(f,g)||(s.track({type:2,doc:g}),k=!0,(c&&this.Ku(g,c)>0||u&&this.Ku(g,u)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),k=!0):f&&!g&&(s.track({type:1,doc:f}),k=!0,(c||u)&&(a=!0)),k&&(g?(o=o.add(g),r=C?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Gu:o,ju:s,Mi:a,mutatedKeys:r}}Wu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const r=t.ju.Tu();r.sort((u,h)=>function(l,f){const g=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return E()}};return g(l)-g(f)}(u.type,h.type)||this.Ku(u.doc,h.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,r.length!==0||c?{snapshot:new Yt(this.query,t.Gu,i,r,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Mr,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.Uu;this.Uu=A(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return t.forEach(s=>{this.Uu.has(s)||n.push(new qa(s))}),this.Uu.forEach(s=>{t.has(s)||n.push(new ja(s))}),n}Xu(t){this.Lu=t.Wi,this.Uu=A();const n=this.zu(t.documents);return this.applyChanges(n,!0)}tc(){return Yt.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Od{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Pd{constructor(t){this.key=t,this.ec=!1}}class Fd{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new ne(a=>fa(a),zn),this.ic=new Map,this.rc=new Set,this.oc=new G(w.comparator),this.uc=new Map,this.cc=new Ti,this.ac={},this.hc=new Map,this.lc=Qt.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function Vd(e,t){const n=Gd(e);let s,i;const r=n.sc.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const o=await ld(n.localStore,mt(t));n.isPrimaryClient&&Fa(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Ud(n,t,s,a==="current",o.resumeToken)}return i}async function Ud(e,t,n,s,i){e.dc=(l,f,g)=>async function(S,C,k,ct){let ut=C.view.zu(k);ut.Mi&&(ut=await _r(S.localStore,C.query,!1).then(({documents:re})=>C.view.zu(re,ut)));const ht=ct&&ct.targetChanges.get(C.targetId),ie=C.view.applyChanges(ut,S.isPrimaryClient,ht);return Or(S,C.targetId,ie.Yu),ie.snapshot}(e,l,f,g);const r=await _r(e.localStore,t,!0),o=new Ld(t,r.Wi),a=o.zu(r.documents),c=ze.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",i),u=o.applyChanges(a,e.isPrimaryClient,c);Or(e,n,u.Yu);const h=new Od(t,n,o);return e.sc.set(t,h),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),u.snapshot}async function Bd(e,t){const n=D(e),s=n.sc.get(t),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter(r=>!zn(r,t))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Bs(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Va(n.remoteStore,s.targetId),$s(n,s.targetId)}).catch(di)):($s(n,s.targetId),await Bs(n.localStore,s.targetId,!0))}async function za(e,t){const n=D(e);try{const s=await ud(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.uc.get(r);o&&(x(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?x(o.ec):i.removedDocuments.size>0&&(x(o.ec),o.ec=!1))}),await Ka(n,s,t)}catch(s){await di(s)}}function Lr(e,t,n){const s=D(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.sc.forEach((r,o)=>{const a=o.view.Ru(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=D(r);a.onlineState=o;let c=!1;a.queries.forEach((u,h)=>{for(const l of h.listeners)l.Ru(o)&&(c=!0)}),c&&Ni(a)}(s.eventManager,t),i.length&&s.nc.zo(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function $d(e,t,n){const s=D(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.uc.get(t),r=i&&i.key;if(r){let o=new G(w.comparator);o=o.insert(r,B.newNoDocument(r,T.min()));const a=A().add(r),c=new Wn(T.min(),new Map,new V(N),o,a);await za(s,c),s.oc=s.oc.remove(r),s.uc.delete(t),ki(s)}else await Bs(s.localStore,t,!1).then(()=>$s(s,t,n)).catch(di)}function $s(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ic.get(t))e.sc.delete(s),n&&e.nc.wc(s,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.hs(t).forEach(s=>{e.cc.containsKey(s)||Ga(e,s)})}function Ga(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);n!==null&&(Va(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),ki(e))}function Or(e,t,n){for(const s of n)s instanceof ja?(e.cc.addReference(s.key,t),jd(e,s)):s instanceof qa?(y("SyncEngine","Document no longer in limbo: "+s.key),e.cc.removeReference(s.key,t),e.cc.containsKey(s.key)||Ga(e,s.key)):E()}function jd(e,t){const n=t.key,s=n.path.canonicalString();e.oc.get(n)||e.rc.has(s)||(y("SyncEngine","New document in limbo: "+n),e.rc.add(s),ki(e))}function ki(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new w(M.fromString(t)),s=e.lc.next();e.uc.set(s,new Pd(n)),e.oc=e.oc.insert(n,s),Fa(e.remoteStore,new kt(mt(yi(n.path)),s,2,fi.ct))}}async function Ka(e,t,n){const s=D(e),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,t,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const h=Ci.Di(c.targetId,u);r.push(h)}}))}),await Promise.all(o),s.nc.zo(i),await async function(a,c){const u=D(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>p.forEach(c,l=>p.forEach(l.Vi,f=>u.persistence.referenceDelegate.addReference(h,l.targetId,f)).next(()=>p.forEach(l.Si,f=>u.persistence.referenceDelegate.removeReference(h,l.targetId,f)))))}catch(h){if(!$e(h))throw h;y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const l=h.targetId;if(!h.fromCache){const f=u.Li.get(l),g=f.snapshotVersion,S=f.withLastLimboFreeSnapshotVersion(g);u.Li=u.Li.insert(l,S)}}}(s.localStore,r))}async function qd(e,t){const n=D(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const s=await Oa(n.localStore,t);n.currentUser=t,function(i,r){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new v(d.CANCELLED,r))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Ka(n,s.Qi)}}function zd(e,t){const n=D(e),s=n.uc.get(t);if(s&&s.ec)return A().add(s.key);{let i=A();const r=n.ic.get(t);if(!r)return i;for(const o of r){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function Gd(e){const t=D(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=za.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=zd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=$d.bind(null,t),t.nc.zo=Rd.bind(null,t.eventManager),t.nc.wc=xd.bind(null,t.eventManager),t}class Pr{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Qn(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return cd(this.persistence,new od,t.initialUser,this.serializer)}createPersistence(t){return new id(Ii.Fs,this.serializer)}createSharedClientState(t){return new fd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Kd{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Lr(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=qd.bind(null,this.syncEngine),await Dd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new _d}createDatastore(t){const n=Qn(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new yd(i));var i;return function(r,o,a,c){return new Ed(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>Lr(this.syncEngine,a,0),o=kr.D()?new kr:new pd,new Id(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,c,u){const h=new Fd(s,i,r,o,a,c);return u&&(h.fc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=D(t);y("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Ge(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.gc(this.observer.next,t)}error(t){this.observer.error?this.gc(this.observer.error,t):gt("Uncaught Error in snapshot listener:",t.toString())}yc(){this.muted=!0}gc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new v(d.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(s,i){const r=D(s),o=Sn(r.serializer)+"/documents",a={documents:i.map(l=>Cn(r.serializer,l))},c=await r.fo("BatchGetDocuments",o,a,i.length),u=new Map;c.forEach(l=>{const f=Ll(r.serializer,l);u.set(f.key.toString(),f)});const h=[];return i.forEach(l=>{const f=u.get(l.toString());x(!!f),h.push(f)}),h}(this.datastore,t);return n.forEach(s=>this.recordVersion(s)),n}set(t,n){this.write(n.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,n){try{this.write(n.toMutation(t,this.preconditionForUpdate(t)))}catch(s){this.lastWriteError=s}this.writtenDocs.add(t.toString())}delete(t){this.write(new vi(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(n=>{t.delete(n.key.toString())}),t.forEach((n,s)=>{const i=w.fromPath(s);this.mutations.push(new ba(i,this.precondition(i)))}),await async function(n,s){const i=D(n),r=Sn(i.serializer)+"/documents",o={writes:s.map(a=>Pl(i.serializer,a))};await i.co("Commit",r,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let n;if(t.isFoundDocument())n=t.version;else{if(!t.isNoDocument())throw E();n=T.min()}const s=this.readVersions.get(t.key.toString());if(s){if(!n.isEqual(s))throw new v(d.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),n)}precondition(t){const n=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&n?n.isEqual(T.min())?nt.exists(!1):nt.updateTime(n):nt.none()}preconditionForUpdate(t){const n=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&n){if(n.isEqual(T.min()))throw new v(d.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return nt.updateTime(n)}return nt.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(t,n,s,i,r){this.asyncQueue=t,this.datastore=n,this.options=s,this.updateFunction=i,this.deferred=r,this.Vc=s.maxAttempts,this.Co=new Si(this.asyncQueue,"transaction_retry")}run(){this.Vc-=1,this.Sc()}Sc(){this.Co.Ao(async()=>{const t=new Wd(this.datastore),n=this.Dc(t);n&&n.then(s=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(s)}).catch(i=>{this.Cc(i)}))}).catch(s=>{this.Cc(s)})})}Dc(t){try{const n=this.updateFunction(t);return!je(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Cc(t){this.Vc>0&&this.xc(t)?(this.Vc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Sc(),Promise.resolve()))):this.deferred.reject(t)}xc(t){if(t.name==="FirebaseError"){const n=t.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!Dl(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=W.UNAUTHENTICATED,this.clientId=sa.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{y("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(y("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=$a(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function gs(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Oa(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Fr(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Jd(e);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>xr(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>xr(t.remoteStore,r)),e._onlineComponents=t}function Xd(e){return e.name==="FirebaseError"?e.code===d.FAILED_PRECONDITION||e.code===d.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Jd(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await gs(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Xd(n))throw n;yn("Error using user provided cache. Falling back to memory cache: "+n),await gs(e,new Pr)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await gs(e,new Pr);return e._offlineComponents}async function Ha(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await Fr(e,e._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await Fr(e,new Kd))),e._onlineComponents}function Zd(e){return Ha(e).then(t=>t.datastore)}async function Vr(e){const t=await Ha(e),n=t.eventManager;return n.onListen=Vd.bind(null,t.syncEngine),n.onUnlisten=Bd.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(e,t,n){if(!n)throw new v(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ef(e,t,n,s){if(t===!0&&s===!0)throw new v(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Br(e){if(!w.isDocumentKey(e))throw new v(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ri(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":E()}function ye(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new v(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ri(e);throw new v(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new v(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new v(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,ef("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $r({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new v(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new v(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $r(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new xh;switch(n.type){case"firstParty":return new Ph(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new v(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Ur.get(t);n&&(y("ComponentProvider","Removing Datastore"),Ur.delete(t),n.terminate())}(this),Promise.resolve()}}function nf(e,t,n,s={}){var i;const r=(e=ye(e,xi))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&yn("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=W.MOCK_USER;else{o=mc(s.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new v(d.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new W(c)}e._authCredentials=new Mh(new na(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Re(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new it(this.firestore,t,this._key)}}class Xn{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Xn(this.firestore,t,this._query)}}class Re extends Xn{constructor(t,n,s){super(t,n,yi(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new it(this.firestore,null,new w(t))}withConverter(t){return new Re(this.firestore,t,this._path)}}function Af(e,t,...n){if(e=ft(e),arguments.length===1&&(t=sa.A()),tf("doc","path",t),e instanceof xi){const s=M.fromString(t,...n);return Br(s),new it(e,null,new w(s))}{if(!(e instanceof it||e instanceof Re))throw new v(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(M.fromString(t,...n));return Br(s),new it(e.firestore,e instanceof Re?e.converter:null,new w(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Si(this,"async_queue_retry"),this.qc=()=>{const n=ps();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const t=ps();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Uc(),this.Kc(t)}enterRestrictedMode(t){if(!this.Oc){this.Oc=!0,this.Bc=t||!1;const n=ps();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(t){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Nt;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.kc.push(t),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(t){if(!$e(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(t){const n=this.Nc.then(()=>(this.Fc=!0,t().catch(s=>{this.Mc=s,this.Fc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw gt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(t,n,s){this.Uc(),this.Lc.indexOf(t)>-1&&(n=0);const i=_i.createAndSchedule(this,t,n,s,r=>this.Qc(r));return this.$c.push(i),i}Uc(){this.Mc&&E()}verifyOperationInProgress(){}async zc(){let t;do t=this.Nc,await t;while(t!==this.Nc)}jc(t){for(const n of this.$c)if(n.timerId===t)return!0;return!1}Wc(t){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.zc()})}Hc(t){this.Lc.push(t)}Qc(t){const n=this.$c.indexOf(t);this.$c.splice(n,1)}}function jr(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class bn extends xi{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new sf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Qa(this),this._firestoreClient.terminate()}}function rf(e,t){const n=typeof e=="object"?e:Eu(),s=typeof e=="string"?e:t||"(default)",i=mu(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=fc("firestore");r&&nf(i,...r)}return i}function Wa(e){return e._firestoreClient||Qa(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Qa(e){var t,n,s;const i=e._freezeSettings(),r=function(o,a,c,u){return new Qh(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Yd(e._authCredentials,e._appCheckCredentials,e._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Lt(X.fromBase64String(t))}catch(n){throw new v(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Lt(X.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new v(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new J(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new v(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new v(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return N(this._lat,t._lat)||N(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=/^__.*__$/;class af{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Pt(t,this.data,this.fieldMask,n,this.fieldTransforms):new qe(t,this.data,n,this.fieldTransforms)}}class Ya{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Pt(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Xa(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw E()}}class Oi{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(t){return new Oi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Zc({path:s,ta:!1});return i.ea(t),i}na(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Zc({path:s,ta:!1});return i.Jc(),i}sa(t){return this.Zc({path:void 0,ta:!0})}ia(t){return Dn(t,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let t=0;t<this.path.length;t++)this.ea(this.path.get(t))}ea(t){if(t.length===0)throw this.ia("Document fields must not be empty");if(Xa(this.Yc)&&of.test(t))throw this.ia('Document fields cannot begin and end with "__"')}}class cf{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||Qn(t)}ua(t,n,s,i=!1){return new Oi({Yc:t,methodName:n,oa:s,path:J.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uf(e){const t=e._freezeSettings(),n=Qn(e._databaseId);return new cf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function hf(e,t,n,s,i,r={}){const o=e.ua(r.merge||r.mergeFields?2:0,t,n,i);Pi("Data must be an object, but it was:",o,s);const a=Ja(s,o);let c,u;if(r.merge)c=new st(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const l of r.mergeFields){const f=js(t,l,n);if(!o.contains(f))throw new v(d.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);tc(h,f)||h.push(f)}c=new st(h),u=o.fieldTransforms.filter(l=>c.covers(l.field))}else c=null,u=o.fieldTransforms;return new af(new tt(a),c,u)}class He extends Mi{_toFieldTransform(t){if(t.Yc!==2)throw t.Yc===1?t.ia(`${this._methodName}() can only appear at the top level of your update data`):t.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof He}}function lf(e,t,n,s){const i=e.ua(1,t,n);Pi("Data must be an object, but it was:",i,s);const r=[],o=tt.empty();ee(s,(c,u)=>{const h=Fi(t,c,n);u=ft(u);const l=i.na(h);if(u instanceof He)r.push(h);else{const f=Zn(u,l);f!=null&&(r.push(h),o.set(h,f))}});const a=new st(r);return new Ya(o,a,i.fieldTransforms)}function df(e,t,n,s,i,r){const o=e.ua(1,t,n),a=[js(t,s,n)],c=[i];if(r.length%2!=0)throw new v(d.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(js(t,r[f])),c.push(r[f+1]);const u=[],h=tt.empty();for(let f=a.length-1;f>=0;--f)if(!tc(u,a[f])){const g=a[f];let S=c[f];S=ft(S);const C=o.na(g);if(S instanceof He)u.push(g);else{const k=Zn(S,C);k!=null&&(u.push(g),h.set(g,k))}}const l=new st(u);return new Ya(h,l,o.fieldTransforms)}function Zn(e,t){if(Za(e=ft(e)))return Pi("Unsupported field value:",t,e),Ja(e,t);if(e instanceof Mi)return function(n,s){if(!Xa(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ta&&t.Yc!==4)throw t.ia("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Zn(o,s.sa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=ft(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return yl(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=$.fromDate(n);return{timestampValue:In(s.serializer,i)}}if(n instanceof $){const i=new $(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:In(s.serializer,i)}}if(n instanceof Li)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Lt)return{bytesValue:Na(s.serializer,n._byteString)};if(n instanceof it){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ei(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${Ri(n)}`)}(e,t)}function Ja(e,t){const n={};return ia(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ee(e,(s,i)=>{const r=Zn(i,t.Xc(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Za(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof $||e instanceof Li||e instanceof Lt||e instanceof it||e instanceof Mi)}function Pi(e,t,n){if(!Za(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ri(n);throw s==="an object"?t.ia(e+" a custom object"):t.ia(e+" "+s)}}function js(e,t,n){if((t=ft(t))instanceof Jn)return t._internalPath;if(typeof t=="string")return Fi(e,t);throw Dn("Field path arguments must be of type string or ",e,!1,void 0,n)}const ff=new RegExp("[~\\*/\\[\\]]");function Fi(e,t,n){if(t.search(ff)>=0)throw Dn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Jn(...t.split("."))._internalPath}catch{throw Dn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Dn(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new v(d.INVALID_ARGUMENT,a+e+c)}function tc(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new pf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(ec("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pf extends An{data(){return super.data()}}function ec(e,t){return typeof t=="string"?Fi(e,t):t instanceof Jn?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new v(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nc{convertValue(t,n="none"){switch(Mt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return P(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Kt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw E()}}convertObject(t,n){const s={};return ee(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new Li(P(t.latitude),P(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=oa(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(De(t));default:return null}}convertTimestamp(t){const n=Et(t);return new $(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=M.fromString(t);x(La(s));const i=new Ae(s.get(1),s.get(3)),r=new w(s.popFirst(5));return i.isEqual(n)||gt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}class yf extends nc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Lt(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new it(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Vi extends An{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new rn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(ec("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class rn extends Vi{data(t={}){return super.data(t)}}class vf{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Bt(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new rn(this._firestore,this._userDataWriter,s.key,s,new Bt(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new v(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new rn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Bt(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new rn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Bt(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:wf(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wf(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return E()}}class Ui extends nc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Lt(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new it(this.firestore,null,n)}}function _f(e,...t){var n,s,i;e=ft(e);let r={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||jr(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(jr(t[o])){const l=t[o];t[o]=(n=l.next)===null||n===void 0?void 0:n.bind(l),t[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),t[o+2]=(i=l.complete)===null||i===void 0?void 0:i.bind(l)}let c,u,h;if(e instanceof it)u=ye(e.firestore,bn),h=yi(e._key.path),c={next:l=>{t[o]&&t[o](Ef(u,e,l))},error:t[o+1],complete:t[o+2]};else{const l=ye(e,Xn);u=ye(l.firestore,bn),h=l._query;const f=new Ui(u);c={next:g=>{t[o]&&t[o](new vf(u,f,l,g))},error:t[o+1],complete:t[o+2]},gf(e._query)}return function(l,f,g,S){const C=new Hd(S),k=new Md(f,C,g);return l.asyncQueue.enqueueAndForget(async()=>Nd(await Vr(l),k)),()=>{C.yc(),l.asyncQueue.enqueueAndForget(async()=>kd(await Vr(l),k))}}(Wa(u),h,a,c)}function Ef(e,t,n){const s=n.docs.get(t._key),i=new Ui(e);return new Vi(e,i,t._key,s,new Bt(n.hasPendingWrites,n.fromCache),t.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf={maxAttempts:5};function ae(e,t){if((e=ft(e)).firestore!==t)throw new v(d.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If extends class{constructor(t,n){this._firestore=t,this._transaction=n,this._dataReader=uf(t)}get(t){const n=ae(t,this._firestore),s=new yf(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return E();const r=i[0];if(r.isFoundDocument())return new An(this._firestore,s,r.key,r,n.converter);if(r.isNoDocument())return new An(this._firestore,s,n._key,null,n.converter);throw E()})}set(t,n,s){const i=ae(t,this._firestore),r=mf(i.converter,n,s),o=hf(this._dataReader,"Transaction.set",i._key,r,i.converter!==null,s);return this._transaction.set(i._key,o),this}update(t,n,s,...i){const r=ae(t,this._firestore);let o;return o=typeof(n=ft(n))=="string"||n instanceof Jn?df(this._dataReader,"Transaction.update",r._key,n,s,i):lf(this._dataReader,"Transaction.update",r._key,n),this._transaction.update(r._key,o),this}delete(t){const n=ae(t,this._firestore);return this._transaction.delete(n._key),this}}{constructor(t,n){super(t,n),this._firestore=t}get(t){const n=ae(t,this._firestore),s=new Ui(this._firestore);return super.get(t).then(i=>new Vi(this._firestore,s,n._key,i._document,new Bt(!1,!1),n.converter))}}function Nf(e,t,n){e=ye(e,bn);const s=Object.assign(Object.assign({},Tf),n);return function(i){if(i.maxAttempts<1)throw new v(d.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),function(i,r,o){const a=new Nt;return i.asyncQueue.enqueueAndForget(async()=>{const c=await Zd(i);new Qd(i.asyncQueue,c,o,r,a).run()}),a.promise}(Wa(e),i=>t(new If(e,i)),s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(){return new He("deleteField")}(function(e,t=!0){(function(n){te=n})(wu),cn(new ve("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new bn(new Lh(n.getProvider("auth-internal")),new Vh(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new v(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ae(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),$t(ur,"3.10.0",e),$t(ur,"3.10.0","esm2017")})();var Cf="firebase",Sf="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t(Cf,Sf,"app");const bf={apiKey:"AIzaSyCwGMjrdMDxItBfYJkwuzIUuekqY1QAc_k",authDomain:"theocratic-software.firebaseapp.com",projectId:"theocratic-software",storageBucket:"theocratic-software.appspot.com",messagingSenderId:"441138730087",appId:"1:441138730087:web:9877f590cadb16467af0c2",measurementId:"G-KHGDKVZKNR"};Yr(bf);const Rf=rf();export{kf as P,Nf as b,_f as c,Rf as f,Af as r};
