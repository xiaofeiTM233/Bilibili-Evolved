!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["video/subtitle/download"]=e():t["video/subtitle/download"]=e()}(self,(function(){return function(){var t,e,n={335:function(t,e,n){"use strict";n.d(e,{mE:function(){return c}});var o=coreApis.ajax,i=n(391),r=n(674);const a=async()=>{const{SubtitleConverter:t,SubtitleSize:e,SubtitleLocation:o}=await Promise.resolve().then(n.bind(n,484)),{playerAgent:i}=await Promise.resolve().then(n.t.bind(n,833,23)),a=localStorage.getItem("bilibili_player_settings");if(!a)return[t.defaultConfig,""];const s=JSON.parse(a).subtitle,c=s.lan,l=(0,r.getFriendlyTitle)(!0),u={.6:e.VerySmall,.8:e.Small,1:e.Medium,1.3:e.Large,1.6:e.VeryLarge}[s.fontsize],d=s.color.toString(16),f=s.backgroundopacity,p={bc:o.BottomCenter,bl:o.BottomLeft,br:o.BottomRight,tc:o.TopCenter,tl:o.TopLeft,tr:o.TopRight}[s.position],g=i.query.video.element.sync();return[{title:l,height:g.videoHeight,width:g.videoWidth,color:d,location:p,opacity:f,size:u,boxPadding:1,boxMargin:32},c]},s=async(t,e)=>{const{VideoInfo:o}=await Promise.resolve().then(n.t.bind(n,77,23)),i=new o(t);return i.cid="string"==typeof e?parseInt(e):e,await i.fetchInfo(),i.subtitles},c=async function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{...lodash.pick(unsafeWindow,"aid","cid"),title:(0,r.getFriendlyTitle)(!0)};const{aid:c,cid:l}=e;if(!c||!l)throw new Error("未找到视频AID和CID");const u=await s(c,l);if(0===u.length)return i.Toast.info("当前视频没有字幕.","下载字幕",3e3),null;const[d,f]=await a(),p=u.find((t=>t.language===f))||u[0],g=await(0,o.getJson)(p.url),v=g.body;if("ass"===t){const{SubtitleConverter:t}=await Promise.resolve().then(n.bind(n,484)),o=new t({...d,title:e.title}),i=await o.convertToAss(v);return new Blob([i],{type:"text/ass"})}return new Blob([JSON.stringify(v)],{type:"text/json"})}},484:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e),n.d(e,{SubtitleConverter:function(){return a},SubtitleLocation:function(){return i},SubtitleSize:function(){return r}});const i={TopLeft:7,TopCenter:8,TopRight:9,BottomLeft:1,BottomCenter:2,BottomRight:3};let r;!function(t){t[t.VerySmall=1]="VerySmall",t[t.Small=2]="Small",t[t.Medium=3]="Medium",t[t.Large=4]="Large",t[t.VeryLarge=5]="VeryLarge"}(r||(r={}));class a{constructor(t){o(this,"config",void 0),this.config=Object.assign(a.defaultConfig,t)}async getAssMeta(){const{convertHexColorForStyle:t}=await Promise.resolve().then(n.t.bind(n,726,23)),e=t(this.config.color),o=t("#000000",this.config.opacity),r=[],a=(10*(this.config.size-3)+48)*this.config.height/720;console.log(a);for(const[t,n]of Object.entries(i))r.push(`Style: ${t},微软雅黑,${a},${e},${e},${o},${o},0,0,0,0,100,100,0,0,3,${this.config.boxPadding},0,${n},${this.config.boxMargin},${this.config.boxMargin},${this.config.boxMargin},0`);return`\n[Script Info]\n; Script generated by Bilibili Evolved Danmaku Converter\n; https://github.com/the1812/Bilibili-Evolved/\nTitle: ${this.config.title}\nScriptType: v4.00+\nPlayResX: ${this.config.width}\nPlayResY: ${this.config.height}\nTimer: 10.0000\nWrapStyle: 0\nScaledBorderAndShadow: no\n\n[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\n${r.join("\n")}\n\n[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text`.trim()}async convertToAss(t){const{convertTimeByEndTime:e,normalizeContent:o}=await Promise.resolve().then(n.t.bind(n,726,23));return`${await this.getAssMeta()}\n${t.map((t=>{const[n,r]=e(t.from,t.to);var a;return`Dialogue: 0,${n},${r},${a=this.config.location,Object.entries(i).filter((t=>{let[,e]=t;return e===a})).map((t=>{let[e]=t;return e})).shift()},,0,0,0,,${o(t.content)}`})).join("\n")}`}}o(a,"defaultConfig",void 0),a.defaultConfig={title:"",color:"#ffffff",width:1920,height:1080,size:r.Medium,opacity:.5,location:i.BottomCenter,boxPadding:1,boxMargin:32}},209:function(t,e,n){var o=n(355)((function(t){return t[1]}));o.push([t.id,".download-subtitle-config.download-video-config-section .be-dropdown {\n  text-transform: uppercase;\n}",""]),t.exports=o},355:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var i={};if(o)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);o&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},662:function(t,e,n){"use strict";var o,i=function(){return void 0===o&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function s(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},o=[],i=0;i<t.length;i++){var r=t[i],c=e.base?r[0]+e.base:r[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=s(u),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:m(f,e),references:1}),o.push(u)}return o}function l(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var a=r(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,d=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function f(t,e,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=d(e,i);else{var r=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function p(t,e,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var g=null,v=0;function m(t,e){var n,o,i;if(e.singleton){var r=v++;n=g||(g=l(e)),o=f.bind(null,n,r,!1),i=f.bind(null,n,r,!0)}else n=l(e),o=p.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var i=s(n[o]);a[i].references--}for(var r=c(t,e),l=0;l<n.length;l++){var u=s(n[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=r}}}},63:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"multiple-widgets"},[n("DefaultWidget",{attrs:{disabled:t.disabled,name:"下载字幕 (JSON)",icon:"subtitle"},on:{click:function(e){return t.download("json")}}}),t._v(" "),n("DefaultWidget",{attrs:{disabled:t.disabled,name:"下载字幕 (ASS)",icon:"subtitle"},on:{click:function(e){return t.download("ass")}}})],1)};o._withStripped=!0;var i=coreApis.pluginApis.data,r=n(648),a=coreApis.utils.log,s=n(674),c=coreApis.download,l=n(335);(0,i.addData)("ui.icons",(t=>{t.subtitle='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M4 4h14a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm5 5.5a1 1 0 100-2H6a2 2 0 00-2 2v3a2 2 0 002 2h3a1 1 0 000-2H7a1 1 0 01-1-1v-1a1 1 0 011-1h2zm8 0a1 1 0 000-2h-3a2 2 0 00-2 2v3a2 2 0 002 2h3a1 1 0 000-2h-2a1 1 0 01-1-1v-1a1 1 0 011-1h2z" fill-rule="evenodd"/></svg>'}));var u=Vue.extend({components:{DefaultWidget:r.DefaultWidget},data:()=>({disabled:!1}),methods:{async download(t){try{this.disabled=!0;const e=await(0,l.mE)(t);c.DownloadPackage.single(`${(0,s.getFriendlyTitle)(!0)}.${t}`,e)}catch(t){(0,a.logError)(t)}finally{this.disabled=!1}}}}),d=(0,n(769).Z)(u,o,[],!1,null,null,null);d.options.__file="registry/lib/components/video/subtitle/download/DownloadSubtitle.vue";var f=d.exports},751:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return g}});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"download-subtitle-config download-video-config-section"},[n("div",{staticClass:"download-video-config-item"},[n("div",{staticClass:"download-video-config-title"},[t._v("字幕:")]),t._v(" "),n("VDropdown",{attrs:{items:t.items},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n)+"\n      ")]}}]),model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1)])};o._withStripped=!0;var i=coreApis.settings,r=n(648);const a=(0,i.getComponentSettings)("downloadVideo").options;var s=Vue.extend({components:{VDropdown:r.VDropdown},data:()=>({type:a.subtitleType??"无",items:["无","ass","json"]}),computed:{enabled(){return"无"!==this.type}},watch:{type(t){a.subtitleType=t}}}),c=n(662),l=n.n(c),u=n(209),d=n.n(u),f={insert:"head",singleton:!1},p=(l()(d(),f),d().locals,(0,n(769).Z)(s,o,[],!1,null,null,null));p.options.__file="registry/lib/components/video/subtitle/download/Plugin.vue";var g=p.exports},769:function(t,e,n){"use strict";function o(t,e,n,o,i,r,a,s){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=c):i&&(c=s?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}n.d(e,{Z:function(){return o}})},726:function(t){"use strict";t.exports=coreApis.componentApis.video.assUtils},833:function(t){"use strict";t.exports=coreApis.componentApis.video.playerAgent},77:function(t){"use strict";t.exports=coreApis.componentApis.video.videoInfo},391:function(t){"use strict";t.exports=coreApis.toast},648:function(t){"use strict";t.exports=coreApis.ui},674:function(t){"use strict";t.exports=coreApis.utils.title}},o={};function i(t){var e=o[t];if(void 0!==e)return e.exports;var r=o[t]={id:t,exports:{}};return n[t](r,r.exports,i),r.exports}i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,{a:e}),e},e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},i.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var r=Object.create(null);i.r(r);var a={};t=t||[null,e({}),e([]),e(e)];for(var s=2&o&&n;"object"==typeof s&&!~t.indexOf(s);s=e(s))Object.getOwnPropertyNames(s).forEach((function(t){a[t]=function(){return n[t]}}));return a.default=function(){return n},i.d(r,a),r},i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return function(){"use strict";i.d(r,{component:function(){return s}});var t=coreApis.componentApis.define,e=coreApis.spinQuery,n=i(391),o=coreApis.utils.urls,a=i(335);const s=(0,t.defineComponentMetadata)({name:"downloadSubtitle",displayName:"下载字幕",description:{"zh-CN":"启用下载字幕支持, 在视频页面中可从功能面板里下载字幕."},tags:[componentsTags.video],entry:none,urlInclude:o.videoUrls,widget:{condition:e.hasVideo,component:()=>Promise.resolve().then(i.bind(i,63)).then((t=>t.default))},plugin:{displayName:"下载视频 - 下载字幕支持",setup:t=>{let{addData:e}=t;e("downloadVideo.assets",(async t=>{t.push({name:"downloadSubtitles",displayName:"下载字幕",getAssets:async(t,e)=>{const{type:o,enabled:i}=e;if(!i)return[];const r=n.Toast.info("获取字幕中...","下载字幕");let s=0;const c=await Promise.allSettled(t.map((async e=>{const n=await(0,a.mE)(o,e.input);return s++,r.message=`获取字幕中... (${s}/${t.length})`,{name:`${e.input.title}.${o}`,data:n}}))),l=c.filter((t=>"fulfilled"===t.status)),u=c.filter((t=>"rejected"===t.status));return r.message=`获取完成. 成功 ${l.length} 个, 失败 ${u.length} 个.`,l.map((t=>t.value))},component:()=>Promise.resolve().then(i.bind(i,751)).then((t=>t.default))})}))}},commitHash:"ba6514ba8f27293d0fdaf472cddd0201bb135982",coreVersion:"2.4.1"})}(),r=r.component}()}));