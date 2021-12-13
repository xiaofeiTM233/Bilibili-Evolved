!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["touch/player-gestures"]=t():e["touch/player-gestures"]=t()}(self,(function(){return function(){var e,t,n={620:function(e,t,n){"use strict";n.r(t),n.d(t,{setBrightness:function(){return s}});const s=(e,t)=>{let n=t;n<0&&(n=0),e.style.filter=`brightness(${n})`}},931:function(e,t,n){"use strict";let s;n.d(t,{q:function(){return s}}),function(e){e.Fast="高速",e.Medium="中速",e.Slow="低速"}(s||(s={}))},99:function(e,t,n){"use strict";n.r(t),n.d(t,{setProgress:function(){return s}});const s=(e,t)=>{let n=t;n>e.duration?n=e.duration:n<0&&(n=0),unsafeWindow.player.seek(n,e.paused)}},39:function(e,t,n){"use strict";n.r(t),n.d(t,{SwipeAction:function(){return a},Swiper:function(){return c}});var s=coreApis.settings,i=n(931);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o=(e,t)=>{const n=(e=>{let t=0,n=0,s=e;for(;s&&!Number.isNaN(s.offsetLeft)&&!Number.isNaN(s.offsetTop);)t+=s.offsetLeft-s.scrollLeft,n+=s.offsetTop-s.scrollTop,s=s.offsetParent;return{x:t,y:n}})(t);return{x:(e.touches[0].pageX-n.x)/t.clientWidth,y:(e.touches[0].pageY-n.y)/t.clientHeight,width:t.clientWidth,height:t.clientHeight}};class a extends EventTarget{constructor(e){super(),this.element=e,r(this,"minSwipeDistance",(0,s.getComponentSettings)("touchPlayerGestures").options.swiperDistance),r(this,"startPosition",null),r(this,"lastAction",null),e.addEventListener("touchstart",(()=>{this.dispatchEvent(new CustomEvent("start"))})),e.addEventListener("touchend",(()=>{this.dispatchEvent(new CustomEvent("end",{detail:this.lastAction})),this.lastAction=null}))}startAction(e,t,n){if("vertical"===e)if(this.startPosition.x<.5){const e=Math.round(200*(t-this.minSwipeDistance)/(1.5*n.height))/100;this.dispatchEvent(new CustomEvent("brightness",{detail:e})),this.lastAction={type:"brightness",brightness:e}}else{const e=Math.round(200*(t-this.minSwipeDistance)/(1.5*n.height))/100;this.dispatchEvent(new CustomEvent("volume",{detail:e})),this.lastAction={type:"volume",volume:e}}else if("horizontal"===e)if(n.y<1/3&&(n.x<.1||n.x>.9))this.dispatchEvent(new CustomEvent("cancel")),this.lastAction=null;else{let e=0;e=this.startPosition.y<1/3?.05:this.startPosition.y>=1/3&&this.startPosition.y<=2/3?.2:1;const n={.05:i.q.Slow,.2:i.q.Medium,1:i.q.Fast};if(t>0){const s=(t-this.minSwipeDistance)*e;this.dispatchEvent(new CustomEvent("progress",{detail:{mode:n[e],progress:s}})),this.lastAction={type:"progress",seconds:s}}else{const s=(t+this.minSwipeDistance)*e;this.dispatchEvent(new CustomEvent("progress",{detail:{mode:n[e],progress:s}})),this.lastAction={type:"progress",seconds:s}}}}}class c{constructor(e){r(this,"onTouchStart",null),r(this,"onTouchEnd",null),r(this,"direction",null),r(this,"action",void 0),r(this,"xDown",void 0),r(this,"yDown",void 0),this.action=new a(e),e.addEventListener("touchstart",(t=>{this.xDown=t.touches[0].clientX,this.yDown=t.touches[0].clientY,this.onTouchStart?.(t),this.action.startPosition=o(t,e)})),e.addEventListener("touchmove",(t=>{if(!this.xDown||!this.yDown||!t.cancelable)return;const n=t.touches[0].clientX,s=t.touches[0].clientY,i=o(t,e),r=this.xDown-n,a=this.yDown-s;this.direction?"vertical"===this.direction?this.action.startAction(this.direction,a,i):"horizontal"===this.direction&&this.action.startAction(this.direction,-r,i):this.direction=Math.abs(r)>Math.abs(a)?"horizontal":"vertical",t.preventDefault()}),{passive:!1}),e.addEventListener("touchend",(e=>{this.xDown=null,this.yDown=null,this.direction=null,this.onTouchEnd?.(e),this.action.startPosition=null}))}}},977:function(e,t,n){"use strict";n.r(t),n.d(t,{syncVolumeUI:function(){return s},setVolume:function(){return i}});const s=e=>{unsafeWindow.player?.volume(e)},i=async(e,t)=>{let n=t;n>1?n=1:n<0&&(n=0),e.volume=n}},777:function(e,t,n){var s=n(645)((function(e){return e[1]}));s.push([e.id,".gesture-preview {\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.8);\n  font-size: 16px;\n  border-radius: 8px;\n  width: 100%;\n  height: 100%;\n  max-width: 400px;\n  max-height: 150px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%) scale(0.95);\n  opacity: 0;\n  transition: 0.2s ease-out;\n  display: flex;\n  flex-direction: column;\n  z-index: 11;\n  padding: 4px 6px;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n.gesture-preview.opened {\n  transform: translateX(-50%) translateY(-50%) scale(1);\n  opacity: 1;\n}\n.gesture-preview-content {\n  display: flex;\n  align-items: center;\n  grid-gap: 0;\n  gap: 0;\n  justify-content: space-between;\n  flex: 1 0 auto;\n}\n.gesture-preview-content .brightness,\n.gesture-preview-content .volume {\n  position: relative;\n  flex: 0 0 auto;\n  margin: 0 12px;\n}\n.gesture-preview-content .brightness .label,\n.gesture-preview-content .volume .label {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  grid-gap: 0;\n  gap: 0;\n}\n.gesture-preview-content .brightness .label .name,\n.gesture-preview-content .volume .label .name {\n  color: #aaa;\n  margin-bottom: 6px;\n}\n.gesture-preview-content .progress {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  grid-gap: 0;\n  gap: 0;\n  flex: 1 0 auto;\n  align-self: flex-end;\n}\n.gesture-preview-content .progress .videoshot {\n  height: 70px;\n  width: 120px;\n  margin-bottom: 8px;\n  border-radius: 4px;\n}\n.gesture-preview-content .progress .name {\n  color: #aaa;\n  padding: 4px 6px;\n  margin-bottom: 6px;\n}\n.gesture-preview-content .progress .progress-label {\n  margin-bottom: 12px;\n}\n.gesture-preview-content .progress .preview {\n  display: flex;\n  align-items: center;\n  grid-gap: 0;\n  gap: 0;\n  margin-bottom: 6px;\n}\n.gesture-preview-content .progress .preview .diff {\n  color: var(--theme-color);\n  margin-right: 6px;\n}\n.gesture-preview-content .progress .preview .seek-mode {\n  padding: 4px 6px;\n  border-radius: 4px;\n  background-color: rgba(136,136,136,0.26667);\n}",""]),e.exports=s},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,s){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var i={};if(s)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var o=this[r][0];null!=o&&(i[o]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);s&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:function(e,t,n){"use strict";var s,i=function(){return void 0===s&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
s=Boolean(window&&document&&document.all&&!window.atob)),s},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function a(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},s=[],i=0;i<e.length;i++){var r=e[i],c=t.base?r[0]+t.base:r[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var p=a(u),d={css:r[1],media:r[2],sourceMap:r[3]};-1!==p?(o[p].references++,o[p].updater(d)):o.push({identifier:u,updater:g(d,t),references:1}),s.push(u)}return s}function l(e){var t=document.createElement("style"),s=e.attributes||{};if(void 0===s.nonce){var i=n.nc;i&&(s.nonce=i)}if(Object.keys(s).forEach((function(e){t.setAttribute(e,s[e])})),"function"==typeof e.insert)e.insert(t);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,p=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,s){var i=n?"":s.media?"@media ".concat(s.media," {").concat(s.css,"}"):s.css;if(e.styleSheet)e.styleSheet.cssText=p(t,i);else{var r=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(r,o[t]):e.appendChild(r)}}function h(e,t,n){var s=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}var v=null,f=0;function g(e,t){var n,s,i;if(t.singleton){var r=f++;n=v||(v=l(t)),s=d.bind(null,n,r,!1),i=d.bind(null,n,r,!0)}else n=l(t),s=h.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var s=0;s<n.length;s++){var i=a(n[s]);o[i].references--}for(var r=c(e,t),l=0;l<n.length;l++){var u=a(n[l]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=r}}}},332:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gesture-preview",class:{opened:e.opened}},[n("div",{staticClass:"gesture-preview-content"},[n("div",{staticClass:"brightness"},[n("ProgressRing",{attrs:{size:100,progress:100*e.preview.brightness}}),e._v(" "),n("div",{staticClass:"label"},[n("div",{staticClass:"name"},[e._v("\n          亮度\n        ")]),e._v(" "),n("div",{staticClass:"value"},[e._v("\n          "+e._s(e._f("percent")(e.preview.brightness))+"\n        ")])])],1),e._v(" "),n("div",{staticClass:"progress"},[n("div",{staticClass:"videoshot",style:e.videoshotStyle}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:null!==e.preview.progress,expression:"preview.progress !== null"}],staticClass:"preview"},[e.progressNaN?e._e():n("div",{staticClass:"diff"},[e._v("\n          "+e._s(e._f("progressDiff")(e.preview.progress-e.store.progress))+"\n        ")]),e._v(" "),n("div",{staticClass:"seek-mode"},[e._v("\n          "+e._s(e.progressNaN?"取消调整":e.preview.seekMode)+"\n        ")])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:null===e.preview.progress,expression:"preview.progress === null"}],staticClass:"name"},[e._v("\n        进度\n      ")]),e._v(" "),n("div",{staticClass:"progress-label"},[e._v("\n        "+e._s(e._f("progress")(e.progressValid?e.preview.progress:e.store.progress))+"\n      ")])]),e._v(" "),n("div",{staticClass:"volume"},[n("ProgressRing",{attrs:{size:100,progress:100*e.preview.volume}}),e._v(" "),n("div",{staticClass:"label"},[n("div",{staticClass:"name"},[e._v("\n          音量\n        ")]),e._v(" "),n("div",{staticClass:"value"},[e._v("\n          "+e._s(e._f("percent")(e.preview.volume))+"\n        ")])])],1)]),e._v(" "),n("div",{staticClass:"progress-bar"},[n("ProgressBar",{attrs:{progress:e.progressValid?e.preview.progress:e.store.progress,max:e.video.duration}})],1)])};s._withStripped=!0;var i=coreApis.ui,r=n(109),o=coreApis.utils.formatters,a=n(931);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class l{constructor(){c(this,"aid",unsafeWindow.aid),c(this,"cid",unsafeWindow.cid),c(this,"viewWidth",120),c(this,"viewHeight",70),c(this,"cidData",null),c(this,"blocked",!1),c(this,"workingPromise",null)}async getVideoshot(e){if(!this.aid||!this.cid||this.blocked)return null;if(this.workingPromise)return this.workingPromise;const{getJson:t}=await Promise.resolve().then(n.t.bind(n,663,23));if(!this.cidData){this.workingPromise=t(`https://api.bilibili.com/x/player/videoshot?aid=${this.aid}&cid=${this.cid}&index=1`);const n=await this.workingPromise;return this.workingPromise=null,-412===n.code?(this.blocked=!0,null):(this.cidData=n.data,this.getVideoshot(e))}const s=this.cidData,i=s.index;let r=1;for(let t=i.length-1;t>0;t--)if(e>=i[t]){r=t;break}const o=s.image;if(null===o)return null;const a=s.img_x_len??10,c=s.img_y_len??10,l=a*this.viewWidth,u=c*this.viewHeight,p=this.viewWidth,d=this.viewHeight,h=-(r-1)%100%a*p,v=-Math.floor((r-1)%100/c)*d;return{backgroundImage:`url(${o[Math.floor(r/100)]})`,backgroundPosition:`${h}px ${v}px`,backgroundSize:`${l}px ${u}px`}}}var u=n(977);const p=(e,t,n=1,s=0)=>{const i=e+t;return i>n?n:i<s?s:i};var d=Vue.extend({components:{ProgressRing:i.ProgressRing,ProgressBar:i.ProgressBar},filters:{percent:o.formatPercent,progress:e=>(0,o.formatDuration)(e,1),progressDiff:e=>`${e>0?"+":"-"}${(e=>{e=Math.abs(e);const t=Math.floor(e/3600),n=Math.floor((e-3600*t)/60),s=e-3600*t-60*n;let i=`${(0,r.fixed)(s)}秒`;return n>0&&(i=`${n}分${i}`),t>0&&(i=`${t}时${i}`),i})(e)}`},data(){const e={progress:0,brightness:1,volume:.66};return{opened:!1,video:dq("video"),videoshot:new l,videoshotStyle:{},store:e,preview:{...e,progress:null,seekMode:a.q.Fast}}},computed:{progressNaN(){return Number.isNaN(this.preview.progress)},progressNull(){return null===this.preview.progress},progressValid(){return!this.progressNaN&&!this.progressNull}},methods:{sync(){const e=dq("video");this.video=e,this.store.volume=e.volume,this.store.progress=e.currentTime,this.store.brightness=(()=>{if(e.style.filter){const t=e.style.filter.match(/brightness\((.+)\)/);return t?parseFloat(t[1]):1}return 1})(),this.preview={...this.preview,...this.store,progress:null}},startPreview({brightness:e,volume:t,progress:n}){if(this.opened=!0,void 0!==n){this.preview.progress=p(this.store.progress,n,this.video.duration);this.videoshot.getVideoshot(this.preview.progress).then((e=>{this.videoshotStyle=e}))}else void 0!==e?this.preview.brightness=p(this.store.brightness,e,1/0):void 0!==t&&(this.preview.volume=p(this.store.volume,t)),this.apply({brightness:e,volume:t})},cancelPreview(){this.preview.progress=NaN},endPreview(){unsafeWindow.touchGestureDebug||(this.opened=!1),this.store.volume!==this.preview.volume&&(0,u.syncVolumeUI)(this.preview.volume),Number.isNaN(this.preview.progress)?this.preview.progress=null:this.store.progress!==this.preview.progress&&null!==this.preview.progress&&this.apply({progress:this.preview.progress})},async apply({brightness:e,volume:t,progress:s}){const i=this.video;if(i)if(void 0!==e){const{setBrightness:e}=await Promise.resolve().then(n.bind(n,620));e(i,this.preview.brightness)}else if(void 0!==t){const{setVolume:e}=await Promise.resolve().then(n.bind(n,977));e(i,this.preview.volume)}else if(void 0!==s){const{setProgress:e}=await Promise.resolve().then(n.bind(n,99));e(i,s)}}}}),h=n(379),v=n.n(h),f=n(777),g=n.n(f),m={insert:"head",singleton:!1};v()(g(),m),g().locals;var w=function(e,t,n,s,i,r,o,a){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),s&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=c):i&&(c=a?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,c):[c]}return{exports:e,options:l}}(d,s,[],!1,null,null,null);w.options.__file="registry/lib/components/touch/player-gestures/GesturePreview.vue";var b=w.exports},663:function(e){"use strict";e.exports=coreApis.ajax},156:function(e){"use strict";e.exports=coreApis.observer},109:function(e){"use strict";e.exports=coreApis.utils}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={id:e,exports:{}};return n[e](r,r.exports,i),r.exports}i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(n,s){if(1&s&&(n=this(n)),8&s)return n;if("object"==typeof n&&n){if(4&s&&n.__esModule)return n;if(16&s&&"function"==typeof n.then)return n}var r=Object.create(null);i.r(r);var o={};e=e||[null,t({}),t([]),t(t)];for(var a=2&s&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){o[e]=function(){return n[e]}}));return o.default=function(){return n},i.d(r,o),r},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){"use strict";i.d(r,{component:function(){return n}});var e=coreApis.utils.urls,t=coreApis.componentApis.video.playerAgent;const n={name:"touchPlayerGestures",displayName:"播放器触摸手势",enabledByDefault:navigator.maxTouchPoints>0,tags:[componentsTags.touch],description:{"zh-CN":"为播放器启用触摸手势支持:\n- 左右滑动可调整进度\n- 上下滑动可调整音量\n- 进度调整可在左上角和右上角取消\n- 进度调整时在不同位置滑动, 可以使用3档不同的灵敏度."},entry:async()=>{const{videoChange:e}=await Promise.resolve().then(i.t.bind(i,156,23));e((async()=>{if(!await t.playerAgent.query.video.element())return;let e;if(!dq(".gesture-preview")){const n=await Promise.resolve().then(i.bind(i,332)),{mountVueComponent:s}=await Promise.resolve().then(i.t.bind(i,109,23));e=s(n),t.playerAgent.query.video.subtitle.sync()?.insertAdjacentElement("beforebegin",e.$el)}const{Swiper:n}=await Promise.resolve().then(i.bind(i,39)),s=new n(t.playerAgent.query.video.container.sync());s.action.addEventListener("start",(()=>{e.sync()})),s.action.addEventListener("cancel",(()=>{e.cancelPreview()})),s.action.addEventListener("end",(()=>{e.endPreview()})),["volume","brightness"].forEach((t=>{s.action.addEventListener(t,(n=>{e.startPreview({[t]:n.detail})}))})),s.action.addEventListener("progress",(t=>{const{progress:n,mode:s}=t.detail;e.preview.seekMode=s,e.startPreview({progress:n})}))}))},urlInclude:e.playerUrls,options:{swiperDistance:{displayName:"手势触发最小距离",defaultValue:10,hidden:!0}},commitHash:"2acf9c591c1b55e3ef8e8e20becca001a39dc13f"}}(),r=r.component}()}));