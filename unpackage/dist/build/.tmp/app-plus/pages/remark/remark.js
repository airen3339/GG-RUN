(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/remark/remark"],{"418b":function(e,t,n){},"4a5e":function(e,t,n){"use strict";var a=n("418b"),r=n.n(a);r.a},"585e":function(e,t,n){"use strict";n.r(t);var a=n("68ea"),r=n("e4fb");for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("4a5e");var c,o=n("f0c5"),i=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);t["default"]=i.exports},"68ea":function(e,t,n){"use strict";var a,r=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return a}))},a31c:function(e,t,n){"use strict";(function(e){n("7207"),n("921b");a(n("66fd"));var t=a(n("585e"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},e4fb:function(e,t,n){"use strict";n.r(t);var a=n("e9fd"),r=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=r.a},e9fd:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLoad:function(){e.getStorageSync("remark")&&(this.remarkDetail=e.getStorageSync("remark"))},data:function(){return{remarkDetail:""}},methods:{submit:function(){e.setStorageSync("remark",this.remarkDetail),e.navigateBack({delta:1})}}};t.default=n}).call(this,n("6e42")["default"])}},[["a31c","common/runtime","common/vendor"]]]);