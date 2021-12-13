!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/image-exporter"]=t():e["utils/image-exporter"]=t()}(self,(function(){return function(){"use strict";var e={505:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var o=function(){var e=this,t=e.$createElement;return(e._self._c||t)("DefaultWidget",{attrs:{name:"导出图片",icon:"mdi-export",disabled:e.busy},on:{click:function(t){return e.exportImages()}}})};o._withStripped=!0;var r=n(663),i=n(508),s=coreApis.settings,a=n(141),c=n(109),l=coreApis.utils.log,u=n(129),d=coreApis.ui;var f=function(e,t,n,o,r,i,s,a){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):r&&(c=a?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:l}}(Vue.extend({components:{DefaultWidget:d.DefaultWidget},data:()=>({busy:!1}),methods:{async exportImages(){const{columnFormat:e}=(0,s.getComponentSettings)("imageExporter").options,t=a.Toast.info("下载中...","导出图片");this.busy=!0;try{const n=[],o=dq(".banner-image .card-image__image"),s=(0,c.retrieveImageUrl)(o);s&&(n.push({...s,name:`${(0,u.formatTitle)(e,!1,{n:"1"})}${s.extension}`}),console.log(o,s,n));if(dqa('.article-content .img-box img:not([class*="cut-off-"])').forEach((t=>{const o=(0,c.retrieveImageUrl)(t);o&&n.push({...o,name:`${(0,u.formatTitle)(e,!1,{n:(n.length+1).toString()})}${o.extension}`})})),0===n.length)return void a.Toast.info("此页面没有检测到任何可导出图片.","图片导出");let l=0;const d=await Promise.all(n.map((async({url:e})=>{const o=await(0,r.getBlob)(e);return l++,t.message=`下载中... (${l}/${n.length})`,o}))),f=new i.DownloadPackage;d.forEach(((e,t)=>f.add(n[t].name,e))),await f.emit(`${(0,u.formatTitle)(e,!1,{n:""})}.zip`)}catch(e){(0,l.logError)(e)}finally{this.busy=!1,t.dismiss()}}}}),o,[],!1,null,null,null);f.options.__file="registry/lib/components/utils/image-exporter/Widget.vue";var m=f.exports},663:function(e){e.exports=coreApis.ajax},508:function(e){e.exports=coreApis.download},141:function(e){e.exports=coreApis.toast},129:function(e){e.exports=coreApis.utils.title},109:function(e){e.exports=coreApis.utils}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){n.d(o,{component:function(){return l}});var e=n(109),t=coreApis.utils.urls,r=coreApis.componentApis.feeds.api,i=n(663),s=n(508),a=n(141),c=n(129);const l={name:"imageExporter",displayName:"图片批量导出",description:{"zh-CN":"可以批量导出某个地方的图片, 目前支持动态和专栏.\n\n动态文件名变量:\n- `user`: 用户名\n- `id`: 动态 ID\n- `n`: 第 n 张图\n\n专栏文件名变量:\n- `title`: 专栏标题\n- `n`: 第 n 张图"},tags:[componentsTags.feeds,componentsTags.utils],entry:async n=>{await(async({settings:{options:n}})=>{if(!t.feedsUrls.some((t=>(0,e.matchUrlPattern)(t))))return;(0,r.forEachFeedsCard)({added:t=>{(0,r.addMenuItem)(t,{className:"image-export",text:"导出图片",action:async()=>{const o=[];if(dqa(t.element,".main-content img, .main-content .img-content").forEach((t=>{const n=(0,e.retrieveImageUrl)(t);n&&!o.some((({url:e})=>e===n.url))&&o.push(n)})),0===o.length)return void a.Toast.info("此条动态没有检测到任何图片.","导出图片");const r=a.Toast.info("下载中...","导出图片");let l=0;const u=await Promise.all(o.map((async({url:e})=>{const t=await(0,i.getBlob)(e);return l++,r.message=`下载中... (${l}/${o.length})`,t}))),d=new s.DownloadPackage,{feedFormat:f}=n;u.forEach(((e,n)=>{const r={user:t.username,id:t.id,n:(n+1).toString()};d.add(`${(0,c.formatTitle)(f,!1,r)}${o[n].extension}`,e)})),r.dismiss();const m={user:t.username,id:t.id,n:""};await d.emit(`${(0,c.formatTitle)(f,!1,m)}.zip`)}})}})})(n)},widget:{condition:()=>t.columnUrls.some((t=>(0,e.matchUrlPattern)(t))),component:()=>Promise.resolve().then(n.bind(n,505)).then((e=>e.default))},urlInclude:[...t.feedsUrls,...t.columnUrls],options:{columnFormat:{defaultValue:"[title][ - n]",displayName:"专栏图片命名格式"},feedFormat:{defaultValue:"[user][ - id][ - n]",displayName:"动态图片命名格式"}},commitHash:"2acf9c591c1b55e3ef8e8e20becca001a39dc13f"}}(),o=o.component}()}));