!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["style/hide/bangumi/sponsors"]=n():t["style/hide/bangumi/sponsors"]=n()}(self,(function(){return function(){var t,n,e={938:function(t,n,e){var o=e(645)((function(t){return t[1]}));o.push([t.id,"#sponsor_module, #paybar_module {\n  display: none !important;\n}",""]),t.exports=o},645:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},
// eslint-disable-next-line func-names
n.i=function(t,e,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var u=this[i][0];null!=u&&(r[u]=!0)}for(var c=0;c<t.length;c++){var f=[].concat(t[c]);o&&r[f[0]]||(e&&(f[2]?f[2]="".concat(e," and ").concat(f[2]):f[2]=e),n.push(f))}},n}},868:function(t,n,e){var o=e(938);t.exports="string"==typeof o?o:o.toString()}},o={};function r(t){var n=o[t];if(void 0!==n)return n.exports;var i=o[t]={id:t,exports:{}};return e[t](i,i.exports,r),i.exports}n=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},r.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var i=Object.create(null);r.r(i);var u={};t=t||[null,n({}),n([]),n(n)];for(var c=2&o&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(t){u[t]=function(){return e[t]}}));return u.default=function(){return e},r.d(i,u),i},r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return e}});var t=coreApis.componentApis.styledComponent,n=coreApis.utils.urls;const e={displayName:"隐藏番剧承包",tags:[componentsTags.style],...(0,t.toggleStyle)("hideBangumiSponsors",(()=>Promise.resolve().then(r.t.bind(r,868,23)))),urlInclude:n.bangumiUrls,description:{"zh-CN":"隐藏番剧页面下方的承包榜, 以及右边的承包按钮."}}}(),i=i.component}()}));