(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/jyf-Parser/index"],{"23cf":function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}))},3654:function(t,e,n){"use strict";n.r(e);var o=n("23cf"),i=n("c233");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("c922");var a,s=n("f0c5"),u=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=u.exports},"813a":function(t,e,n){},"9c68":function(t,e,n){"use strict";(function(t){function o(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=i(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,a=!0,s=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return a=t.done,t},e:function(t){s=!0,r=t},f:function(){try{a||null==o.return||o.return()}finally{if(s)throw r}}}}function i(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,s=function(){n.e("components/jyf-Parser/trees").then(function(){return resolve(n("b31d"))}.bind(null,n)).catch(n.oe)},u=n("b9b3"),c=!0,l={name:"parser",data:function(){return{nodes:[],showAnimation:{},loadVideo:!1}},components:{trees:s},props:{html:{type:null,default:""},autocopy:{type:Boolean,default:!0},autopause:{type:Boolean,default:!0},autopreview:{type:Boolean,default:!0},autosetTitle:{type:Boolean,default:!0},imgMode:{type:String,default:"default"},lazyLoad:{type:Boolean,default:!1},selectable:{type:Boolean,default:!1},tagStyle:{type:Object,default:function(){return{}}},showWithAnimation:{type:Boolean,default:!1},animationDuration:{type:Number,default:400}},mounted:function(){this.execHtml(this.html),this.videoContext=[]},methods:{execHtml:function(e){var n=this,o={};if(this.showWithAnimation&&(o=t.createAnimation({duration:this.animationDuration,timingFunction:"ease"}).opacity(1).step().export()),e)if("string"==typeof e)u(e,this.tagStyle,this.imgMode).then((function(e){n.loadVideo=!1,n.nodes=e.nodes,n.showAnimation=o,n.imgList=e.imgList,a&&(n.document=new a("nodes",e.nodes,n)),e.title&&n.autosetTitle&&t.setNavigationBarTitle({title:e.title}),n.$emit("parser",e),n.ready()})).catch((function(t){n.$emit("error",{source:"parse",errMsg:t})}));else if(e.constructor==Array)this.showAnimation=o,this.imgList=[],this.loadVideo=!1,a&&(this.document=new a("html",e,this)),this.ready();else if("object"==typeof e){if(!e.nodes||e.nodes.constructor!=Array){if(e.name&&e.children&&e.attrs||"text"==e.type)return;return void this.$emit("error",{source:"parse",errMsg:"传入的nodes数组格式不正确！应该传入的类型是array，实际传入的类型是："+typeof e.nodes})}this.showAnimation=o,this.imgList=e.imgList||[],this.loadVideo=!1,a&&(this.document=new a("html.nodes",e.nodes,this)),e.title&&this.autosetTitle&&t.setNavigationBarTitle({title:e.title}),this.ready()}else this.$emit("error",{source:"parse",errMsg:"错误的html类型："+typeof e});else this.nodes=[]},getContext:function(e){var n,i=this,r=o(e);try{var a=function(){var e=n.value,r=!1;if(!e.nodes)return{v:i.getContext(e.$children)};var a,s=o(e.nodes);try{for(s.s();!(a=s.n()).done;){var u=a.value;"img"!=u.name||r?"video"==u.name&&i.videoContext.push({id:u.attrs.id,context:t.createVideoContext(u.attrs.id,e)}):(r=!0,e.lazyLoad&&c?(e._observer=t.createIntersectionObserver(e),e._observer.relativeToViewport({top:1e3,bottom:1e3}).observe(".img",(function(t){e.imgLoad=!0,e._observer.disconnect(),e._observer=null}))):e.imgLoad=!0)}}catch(l){s.e(l)}finally{s.f()}i.getContext(e.$children)};for(r.s();!(n=r.n()).done;){var s=a();if("object"===typeof s)return s.v}}catch(u){r.e(u)}finally{r.f()}},ready:function(){var e=this;this.$nextTick((function(){t.createSelectorQuery().in(e).select(".contain").boundingClientRect((function(t){e.$emit("ready",t)})).exec(),e.getContext(e.$children),setTimeout((function(){e.loadVideo=!0}),3e3)}))}},watch:{html:function(t){this.execHtml(t)}}};e.default=l}).call(this,n("6e42")["default"])},c233:function(t,e,n){"use strict";n.r(e);var o=n("9c68"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},c922:function(t,e,n){"use strict";var o=n("813a"),i=n.n(o);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/jyf-Parser/index-create-component',
    {
        'components/jyf-Parser/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("3654"))
        })
    },
    [['components/jyf-Parser/index-create-component']]
]);
