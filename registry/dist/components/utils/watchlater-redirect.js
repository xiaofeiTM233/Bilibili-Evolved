!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/watchlater-redirect"]=t():e["utils/watchlater-redirect"]=t()}(globalThis,(()=>(()=>{var e,t,o={517:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=517,e.exports=t},346:e=>{"use strict";e.exports="将稍后再看的链接重定向为普通播放网址.\n- `重定向页面`: 对稍后再看列表页面里的链接重定向.\n- `重定向顶栏`: 对 `自定义顶栏` 里的稍后再看链接重定向.\n"},952:e=>{"use strict";e.exports=coreApis.componentApis.video.watchlater},391:e=>{"use strict";e.exports=coreApis.observer},200:e=>{"use strict";e.exports=coreApis.spinQuery}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={exports:{}};return o[e](n,n.exports,i),n.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var n=Object.create(null);i.r(n);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>o[e]));return a.default=()=>o,i.d(n,a),n},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";i.d(n,{component:()=>e});const e=(0,coreApis.componentApis.define.defineComponentMetadata)({name:"watchlaterRedirect",displayName:"稍后再看重定向",entry:async e=>{let{settings:t}=e;if(t.options.page){const{select:e}=await Promise.resolve().then(i.t.bind(i,200,23)),{childList:t}=await Promise.resolve().then(i.t.bind(i,391,23)),{getWatchlaterList:o}=await Promise.resolve().then(i.t.bind(i,952,23)),r=await o(!0),n=await e(".watch-later-list .list-box > span");if(!n)return;const a=(e,t)=>{try{const o=r[t],{bvid:i,cid:n,pages:a}=o,s=a.find((e=>e.cid===n))?.page??1,c=s>1?`https://www.bilibili.com/video/${i}?p=${s}`:`https://www.bilibili.com/video/${i}`,l=e.querySelector(".av-pic");l.target="_blank",l.href=c;const p=e.querySelector(".av-about .t");p.target="_blank",p.href=c}catch(o){console.error(`[watchlater redirect] error at index ${t}`,e,o)}},s=()=>{n.querySelectorAll(".av-item").forEach(a)};t(n,(e=>{e.forEach((e=>{e.removedNodes.forEach((e=>{if(e instanceof HTMLElement&&!e.classList.contains("itemlist-move")){const t=parseInt(dq(e,".key").textContent)-1;console.log("remove index",t),r.splice(t,1)}}))})),s()}))}},options:{page:{displayName:"重定向页面",defaultValue:!0},navbar:{displayName:"重定向顶栏",defaultValue:!0}},urlInclude:["https://www.bilibili.com/watchlater/#/list"],tags:[componentsTags.utils,componentsTags.video],commitHash:"9f070c73e61a5a2bfc8c2eb68cd802a3c4f8d1e0",coreVersion:"2.8.12",description:(()=>{const e=i(517);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(i.t.bind(i,346,17)).then((e=>e.default))}})()})})(),n=n.component})()));