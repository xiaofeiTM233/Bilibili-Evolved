!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["video/player/preserve-danmaku-input"]=n():e["video/player/preserve-danmaku-input"]=n()}(self,(function(){return function(){var e,n,t={15:function(e,n,t){var r=t(355)((function(e){return e[1]}));r.push([e.id,"@media screen and (max-width: 1200px) {\n  body.player-mode-webfullscreen .bpx-player-video-inputbar, body.player-fullscreen-fix .bpx-player-video-inputbar, body.player-full-win .bpx-player-video-inputbar,\nbody.player-mode-webfullscreen .bilibili-player-video-inputbar,\nbody.player-fullscreen-fix .bilibili-player-video-inputbar,\nbody.player-full-win .bilibili-player-video-inputbar {\n    display: flex !important;\n  }\n}",""]),e.exports=r},355:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
n.i=function(e,t,r){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(o[a]=!0)}for(var u=0;u<e.length;u++){var p=[].concat(e[u]);r&&o[p[0]]||(t&&(p[2]?p[2]="".concat(t," and ").concat(p[2]):p[2]=t),n.push(p))}},n}},710:function(e,n,t){var r=t(15);r&&r.__esModule&&(r=r.default),e.exports="string"==typeof r?r:r.toString()}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={id:e,exports:{}};return t[e](i,i.exports,o),i.exports}n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(t,r){if(1&r&&(t=this(t)),8&r)return t;if("object"==typeof t&&t){if(4&r&&t.__esModule)return t;if(16&r&&"function"==typeof t.then)return t}var i=Object.create(null);o.r(i);var a={};e=e||[null,n({}),n([]),n(n)];for(var u=2&r&&t;"object"==typeof u&&!~e.indexOf(u);u=n(u))Object.getOwnPropertyNames(u).forEach((function(e){a[e]=function(){return t[e]}}));return a.default=function(){return t},o.d(i,a),i},o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){"use strict";o.d(i,{component:function(){return r}});var e=coreApis.componentApis.define,n=coreApis.utils.urls;const t="preserveDanmakuInput",r=(0,e.defineComponentMetadata)({name:t,displayName:"强制保留弹幕发送栏",entry:none,instantStyles:[{name:t,style:()=>Promise.resolve().then(o.t.bind(o,710,23))}],tags:[componentsTags.style,componentsTags.video],description:{"zh-CN":"在视频播放器网页全屏时, 即使宽度过小也强制保留弹幕发送栏, 注意这可能导致右侧的功能按钮挤出边界."},urlInclude:n.playerUrls,commitHash:"ba6514ba8f27293d0fdaf472cddd0201bb135982",coreVersion:"2.4.1"})}(),i=i.component}()}));