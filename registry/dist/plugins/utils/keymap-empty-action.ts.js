!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/keymap-empty-action.ts"]=t():e["utils/keymap-empty-action.ts"]=t()}(self,(function(){return function(){"use strict";var e={d:function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{plugin:function(){return n}});const n={name:"keymap.actions.empty",displayName:"快捷键扩展 - 无动作",description:'在快捷键的动作列表里添加一个 "无动作", 将按键绑定到这个上面就可以阻止原有的快捷键行为.',setup:e=>{let{addData:t}=e;t("keymap.actions",(e=>{e.empty={displayName:"无动作",prevent:!0,run:none}})),t("keymap.presets",(e=>{e.empty=""}))},commitHash:"ba6514ba8f27293d0fdaf472cddd0201bb135982",coreVersion:"2.4.1"};return t=t.plugin}()}));