!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/player-shadow"]=t():e["style/player-shadow"]=t()}(self,(function(){return function(){var e,t,n={255:function(e,t,n){var o=n(355)((function(e){return e[1]}));o.push([e.id,"#bilibili-player,\n#bilibili-player.mini-player::before {\n  box-shadow: 0px 2px 8px 0px var(--theme-color-30) !important;\n}\nbody.dark #bilibili-player,\nbody.dark #bilibili-player.mini-player::before {\n  box-shadow: 0px 2px 8px 0px var(--theme-color-20) !important;\n}\n\n#bilibili-player-placeholder,\n.bpx-player-container {\n  box-shadow: none !important;\n}",""]),e.exports=o},355:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var p=[].concat(e[c]);o&&r[p[0]]||(n&&(p[2]?p[2]="".concat(n," and ").concat(p[2]):p[2]=n),t.push(p))}},t}},392:function(e,t,n){var o=n(255);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={id:e,exports:{}};return n[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var c=2&o&&n;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((function(e){a[e]=function(){return n[e]}}));return a.default=function(){return n},r.d(i,a),i},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return n}});var e=coreApis.componentApis.define,t=coreApis.utils.urls;const n=(0,e.defineComponentMetadata)({name:"playerShadow",displayName:"播放器投影",entry:none,instantStyles:[{name:"playerShadow",style:()=>Promise.resolve().then(r.t.bind(r,392,23))}],tags:[componentsTags.style,componentsTags.video],description:{"zh-CN":"为播放器添加主题色投影."},urlInclude:t.allVideoUrls,commitHash:"ba6514ba8f27293d0fdaf472cddd0201bb135982",coreVersion:"2.4.1"})}(),i=i.component}()}));