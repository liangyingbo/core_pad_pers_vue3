import{g as ae,h as ze,r as Je,o as C,a as _,c as Ve,w as $e,f as B,F as ce,j as ue,d as We,t as ve}from"./projectDemo-191401a7.js";function Se(e,t){return function(){return e.apply(t,arguments)}}const{toString:Re}=Object.prototype,{getPrototypeOf:ee}=Object,te=(e=>t=>{const n=Re.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>te(t)===e),z=e=>t=>typeof t===e,{isArray:P}=Array,D=z("undefined");function Ke(e){return e!==null&&!D(e)&&e.constructor!==null&&!D(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Oe=A("ArrayBuffer");function Ge(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Oe(e.buffer),t}const Xe=z("string"),g=z("function"),Ae=z("number"),ne=e=>e!==null&&typeof e=="object",Qe=e=>e===!0||e===!1,k=e=>{if(te(e)!=="object")return!1;const t=ee(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ye=A("Date"),Ze=A("File"),et=A("Blob"),tt=A("FileList"),nt=e=>ne(e)&&g(e.pipe),rt=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Re.call(e)===t||g(e.toString)&&e.toString()===t)},st=A("URLSearchParams"),ot=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function L(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),P(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let c;for(r=0;r<o;r++)c=i[r],t.call(null,e[c],c,e)}}function Te(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const ge=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ne=e=>!D(e)&&e!==ge;function X(){const{caseless:e}=Ne(this)&&this||{},t={},n=(r,s)=>{const i=e&&Te(t,s)||s;k(t[i])&&k(r)?t[i]=X(t[i],r):k(r)?t[i]=X({},r):P(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&L(arguments[r],n);return t}const it=(e,t,n,{allOwnKeys:r}={})=>(L(t,(s,i)=>{n&&g(s)?e[i]=Se(s,n):e[i]=s},{allOwnKeys:r}),e),at=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ct=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ut=(e,t,n,r)=>{let s,i,o;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!c[o]&&(t[o]=e[o],c[o]=!0);e=n!==!1&&ee(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},lt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},ft=e=>{if(!e)return null;if(P(e))return e;let t=e.length;if(!Ae(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},dt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ee(Uint8Array)),pt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},ht=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},mt=A("HTMLFormElement"),yt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),le=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Et=A("RegExp"),xe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};L(n,(s,i)=>{t(s,i,e)!==!1&&(r[i]=s)}),Object.defineProperties(e,r)},wt=e=>{xe(e,(t,n)=>{if(g(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(g(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},bt=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return P(e)?r(e):r(String(e).split(t)),n},St=()=>{},Rt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),W="abcdefghijklmnopqrstuvwxyz",fe="0123456789",Pe={DIGIT:fe,ALPHA:W,ALPHA_DIGIT:W+W.toUpperCase()+fe},Ot=(e=16,t=Pe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function At(e){return!!(e&&g(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Tt=e=>{const t=new Array(10),n=(r,s)=>{if(ne(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=P(r)?[]:{};return L(r,(o,c)=>{const d=n(o,s+1);!D(d)&&(i[c]=d)}),t[s]=void 0,i}}return r};return n(e,0)},a={isArray:P,isArrayBuffer:Oe,isBuffer:Ke,isFormData:rt,isArrayBufferView:Ge,isString:Xe,isNumber:Ae,isBoolean:Qe,isObject:ne,isPlainObject:k,isUndefined:D,isDate:Ye,isFile:Ze,isBlob:et,isRegExp:Et,isFunction:g,isStream:nt,isURLSearchParams:st,isTypedArray:dt,isFileList:tt,forEach:L,merge:X,extend:it,trim:ot,stripBOM:at,inherits:ct,toFlatObject:ut,kindOf:te,kindOfTest:A,endsWith:lt,toArray:ft,forEachEntry:pt,matchAll:ht,isHTMLForm:mt,hasOwnProperty:le,hasOwnProp:le,reduceDescriptors:xe,freezeMethods:wt,toObjectSet:bt,toCamelCase:yt,noop:St,toFiniteNumber:Rt,findKey:Te,global:ge,isContextDefined:Ne,ALPHABET:Pe,generateString:Ot,isSpecCompliantForm:At,toJSONObject:Tt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ce=m.prototype,_e={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{_e[e]={value:e}});Object.defineProperties(m,_e);Object.defineProperty(Ce,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,i)=>{const o=Object.create(Ce);return a.toFlatObject(e,o,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),m.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const gt=null;function Q(e){return a.isPlainObject(e)||a.isArray(e)}function Fe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function de(e,t,n){return e?e.concat(t).map(function(s,i){return s=Fe(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function Nt(e){return a.isArray(e)&&!e.some(Q)}const xt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function J(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,R){return!a.isUndefined(R[h])});const r=n.metaTokens,s=n.visitor||l,i=n.dots,o=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,h,R){let b=f;if(f&&!R&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Nt(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(b=a.toArray(f)))return h=Fe(h),b.forEach(function(j,Me){!(a.isUndefined(j)||j===null)&&t.append(o===!0?de([h],Me,i):o===null?h:h+"[]",u(j))}),!1}return Q(f)?!0:(t.append(de(R,h,i),u(f)),!1)}const p=[],w=Object.assign(xt,{defaultVisitor:l,convertValue:u,isVisitable:Q});function y(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(b,N){(!(a.isUndefined(b)||b===null)&&s.call(t,b,a.isString(N)?N.trim():N,h,w))===!0&&y(b,h?h.concat(N):[N])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function pe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function re(e,t){this._pairs=[],e&&J(e,this,t)}const Be=re.prototype;Be.append=function(t,n){this._pairs.push([t,n])};Be.toString=function(t){const n=t?function(r){return t.call(this,r,pe)}:pe;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Pt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function De(e,t,n){if(!t)return e;const r=n&&n.encode||Pt,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new re(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Ct{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const he=Ct,Le={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},_t=typeof URLSearchParams<"u"?URLSearchParams:re,Ft=FormData,Bt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Dt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),S={isBrowser:!0,classes:{URLSearchParams:_t,FormData:Ft,Blob},isStandardBrowserEnv:Bt,isStandardBrowserWebWorkerEnv:Dt,protocols:["http","https","file","blob","url","data"]};function Lt(e,t){return J(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Ut(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function jt(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Ue(e){function t(n,r,s,i){let o=n[i++];const c=Number.isFinite(+o),d=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,d?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!c):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=jt(s[o])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Ut(r),s,n,0)}),n}return null}const kt={"Content-Type":void 0};function qt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const V={transitional:Le,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Ue(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Lt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return J(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),qt(t)):t}],transformResponse:[function(t){const n=this.transitional||V.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(o)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){V.headers[t]={}});a.forEach(["post","put","patch"],function(t){V.headers[t]=a.merge(kt)});const se=V,Ht=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),It=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&Ht[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},me=Symbol("internals");function F(e){return e&&String(e).trim().toLowerCase()}function q(e){return e===!1||e==null?e:a.isArray(e)?e.map(q):String(e)}function Mt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function zt(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function v(e,t,n,r){if(a.isFunction(r))return r.call(this,t,n);if(a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Jt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Vt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class ${constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(c,d,u){const l=F(d);if(!l)throw new Error("header name must be a non-empty string");const p=a.findKey(s,l);(!p||s[p]===void 0||u===!0||u===void 0&&s[p]!==!1)&&(s[p||d]=q(c))}const o=(c,d)=>a.forEach(c,(u,l)=>i(u,l,d));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!zt(t)?o(It(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=F(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Mt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=F(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||v(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=F(o),o){const c=a.findKey(r,o);c&&(!n||v(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||v(this,this[i],i,t))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=q(s),delete n[i];return}const c=t?Jt(i):String(i).trim();c!==i&&delete n[i],n[c]=q(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[me]=this[me]={accessors:{}}).accessors,s=this.prototype;function i(o){const c=F(o);r[c]||(Vt(s,o),r[c]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}$.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods($.prototype);a.freezeMethods($);const O=$;function K(e,t){const n=this||se,r=t||n,s=O.from(r.headers);let i=r.data;return a.forEach(e,function(c){i=c.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function je(e){return!!(e&&e.__CANCEL__)}function U(e,t,n){m.call(this,e==null?"canceled":e,m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(U,m,{__CANCEL__:!0});function $t(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Wt=S.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,c){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(i)&&d.push("path="+i),a.isString(o)&&d.push("domain="+o),c===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function vt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Kt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ke(e,t){return e&&!vt(t)?Kt(e,t):t}const Gt=S.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const c=a.isString(o)?s(o):o;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function Xt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Qt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(d){const u=Date.now(),l=r[i];o||(o=u),n[s]=d,r[s]=u;let p=i,w=0;for(;p!==s;)w+=n[p++],p=p%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),u-o<t)return;const y=l&&u-l;return y?Math.round(w*1e3/y):void 0}}function ye(e,t){let n=0;const r=Qt(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,c=i-n,d=r(c),u=i<=o;n=i;const l={loaded:i,total:o,progress:o?i/o:void 0,bytes:c,rate:d||void 0,estimated:d&&o&&u?(o-i)/d:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const Yt=typeof XMLHttpRequest<"u",Zt=Yt&&function(e){return new Promise(function(n,r){let s=e.data;const i=O.from(e.headers).normalize(),o=e.responseType;let c;function d(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(s)&&(S.isStandardBrowserEnv||S.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(y+":"+f))}const l=ke(e.baseURL,e.url);u.open(e.method.toUpperCase(),De(l,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function p(){if(!u)return;const y=O.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),h={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:y,config:e,request:u};$t(function(b){n(b),d()},function(b){r(b),d()},h),u=null}if("onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(p)},u.onabort=function(){u&&(r(new m("Request aborted",m.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Le;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,u)),u=null},S.isStandardBrowserEnv){const y=(e.withCredentials||Gt(l))&&e.xsrfCookieName&&Wt.read(e.xsrfCookieName);y&&i.set(e.xsrfHeaderName,y)}s===void 0&&i.setContentType(null),"setRequestHeader"in u&&a.forEach(i.toJSON(),function(f,h){u.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),o&&o!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",ye(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",ye(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=y=>{u&&(r(!y||y.type?new U(null,e,u):y),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const w=Xt(l);if(w&&S.protocols.indexOf(w)===-1){r(new m("Unsupported protocol "+w+":",m.ERR_BAD_REQUEST,e));return}u.send(s||null)})},H={http:gt,xhr:Zt};a.forEach(H,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}});const en={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?H[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(H,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:H};function G(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new U(null,e)}function Ee(e){return G(e),e.headers=O.from(e.headers),e.data=K.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),en.getAdapter(e.adapter||se.adapter)(e).then(function(r){return G(e),r.data=K.call(e,e.transformResponse,r),r.headers=O.from(r.headers),r},function(r){return je(r)||(G(e),r&&r.response&&(r.response.data=K.call(e,e.transformResponse,r.response),r.response.headers=O.from(r.response.headers))),Promise.reject(r)})}const we=e=>e instanceof O?e.toJSON():e;function x(e,t){t=t||{};const n={};function r(u,l,p){return a.isPlainObject(u)&&a.isPlainObject(l)?a.merge.call({caseless:p},u,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(u,l,p){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u,p)}else return r(u,l,p)}function i(u,l){if(!a.isUndefined(l))return r(void 0,l)}function o(u,l){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function c(u,l,p){if(p in t)return r(u,l);if(p in e)return r(void 0,u)}const d={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c,headers:(u,l)=>s(we(u),we(l),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(l){const p=d[l]||s,w=p(e[l],t[l],l);a.isUndefined(w)&&p!==c||(n[l]=w)}),n}const qe="1.3.2",oe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{oe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const be={};oe.transitional=function(t,n,r){function s(i,o){return"[Axios v"+qe+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,c)=>{if(t===!1)throw new m(s(o," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!be[o]&&(be[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,c):!0}};function tn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const c=e[i],d=c===void 0||o(c,i,e);if(d!==!0)throw new m("option "+i+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+i,m.ERR_BAD_OPTION)}}const Y={assertOptions:tn,validators:oe},T=Y.validators;let M=class{constructor(t){this.defaults=t,this.interceptors={request:new he,response:new he}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=x(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Y.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),s!==void 0&&Y.assertOptions(s,{encode:T.function,serialize:T.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&a.merge(i.common,i[n.method]),o&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete i[f]}),n.headers=O.concat(o,i);const c=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,c.unshift(h.fulfilled,h.rejected))});const u=[];this.interceptors.response.forEach(function(h){u.push(h.fulfilled,h.rejected)});let l,p=0,w;if(!d){const f=[Ee.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,u),w=f.length,l=Promise.resolve(n);p<w;)l=l.then(f[p++],f[p++]);return l}w=c.length;let y=n;for(p=0;p<w;){const f=c[p++],h=c[p++];try{y=f(y)}catch(R){h.call(this,R);break}}try{l=Ee.call(this,y)}catch(f){return Promise.reject(f)}for(p=0,w=u.length;p<w;)l=l.then(u[p++],u[p++]);return l}getUri(t){t=x(this.defaults,t);const n=ke(t.baseURL,t.url);return De(n,t.params,t.paramsSerializer)}};a.forEach(["delete","get","head","options"],function(t){M.prototype[t]=function(n,r){return this.request(x(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,c){return this.request(x(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}M.prototype[t]=n(),M.prototype[t+"Form"]=n(!0)});const I=M;class ie{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(c=>{r.subscribe(c),i=c}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,c){r.reason||(r.reason=new U(i,o,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ie(function(s){t=s}),cancel:t}}}const nn=ie;function rn(e){return function(n){return e.apply(null,n)}}function sn(e){return a.isObject(e)&&e.isAxiosError===!0}const Z={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Z).forEach(([e,t])=>{Z[t]=e});const on=Z;function He(e){const t=new I(e),n=Se(I.prototype.request,t);return a.extend(n,I.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return He(x(e,s))},n}const E=He(se);E.Axios=I;E.CanceledError=U;E.CancelToken=nn;E.isCancel=je;E.VERSION=qe;E.toFormData=J;E.AxiosError=m;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=rn;E.isAxiosError=sn;E.mergeConfig=x;E.AxiosHeaders=O;E.formToJSON=e=>Ue(a.isHTMLForm(e)?new FormData(e):e);E.HttpStatusCode=on;E.default=E;const an=E;class cn{constructor(t){this.instance=an.create(t),this.interceptors()}interceptors(){this.interceptorsRequest(),this.interceptorsResponse()}request(t){return new Promise(async(n,r)=>{try{const s=await this.instance.request(t);n(s)}catch(s){r(s)}})}interceptorsRequest(){this.instance.interceptors.request.use(t=>t,t=>Promise.reject(t))}interceptorsResponse(){this.instance.interceptors.response.use(t=>t,t=>Promise.reject(t))}}const Ie=new cn({baseURL:"http://localhost:3000",timeout:1e3,headers:{}});function un(){return Ie.request({url:"/test"})}function ln(){return Ie.request({url:"/imgs"})}const fn=B("h1",null,"demo",-1),dn=["src"],mn={__name:"demo",setup(e){const t=ae(null),n=ae([]);return ze(async()=>{const r=await un(),s=await ln();t.value=r.data,n.value=s.data,console.log(t.value),console.log(n.value)}),(r,s)=>{const i=Je("van-button");return C(),_("div",null,[Ve(i,{type:"primary",onClick:s[0]||(s[0]=o=>r.$router.go(-1))},{default:$e(()=>[We("返回")]),_:1}),fn,B("div",null,[B("ul",null,[(C(!0),_(ce,null,ue(t.value,(o,c)=>(C(),_("li",{key:c},ve(o),1))),128))]),B("ul",null,[(C(!0),_(ce,null,ue(n.value,(o,c)=>(C(),_("li",{key:c},[B("img",{src:o.src,class:"w-full h-60",alt:""},null,8,dn)]))),128))])])])}}};export{mn as default};