(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/news"],{"0c23":function(e,n,t){},8652:function(e,n,t){"use strict";(function(e,r){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t("4795"));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){return f(e)||c(e)||s(e)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,n){if(e){if("string"===typeof e)return l(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(e,n):void 0}}function c(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function f(e){if(Array.isArray(e))return l(e)}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function d(e,n,t,r,a,i,o){try{var u=e[i](o),s=u.value}catch(c){return void t(c)}u.done?n(s):Promise.resolve(s).then(r,a)}function h(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){d(i,r,a,o,u,"next",e)}function u(e){d(i,r,a,o,u,"throw",e)}o(void 0)}))}}var g={data:function(){return{scrollList:["全部消息","活动福利","业务须知"],currentIndex:0,ajaxIndex:"",pageNum:0,hasFlag:!0,newsList:[],msgContent:[],readerFlag:""}},onLoad:function(){this.initNewsList()},onUnload:function(){},onShow:function(){e.removeStorageSync("newRichContent")},onPullDownRefresh:function(){var n=this;setTimeout((function(){n.pageNum=0,n.hasFlag=!0,n.newsList=[],n.msgContent=[],n.initNewsList(),n.initReadNews(),e.stopPullDownRefresh()}),1e3)},methods:{goTonewsRich:function(n,t){r("log",t," at pages\\news\\news.vue:65"),e.setStorageSync("newRichContent",t),e.navigateTo({url:"./newsRich?title="+n})},handleCurrentIndex:function(e){this.currentIndex=e,0==this.currentIndex?this.ajaxIndex="":1==this.currentIndex?this.ajaxIndex=0:2==this.currentIndex&&(this.ajaxIndex=1),this.newsList=[],this.msgContent=[],this.pageNum=0,this.hasFlag=!0,this.initNewsList()},initNewsList:function(){var e=this;return h(a.default.mark((function n(){var t,r;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.hasFlag){n.next=2;break}return n.abrupt("return");case 2:return e.pageNum=++e.pageNum,n.next=5,e.$fetch(e.$api.msgList,{msgType:e.ajaxIndex,pageNum:e.pageNum,pageSize:12},"POST","FORM");case 5:for(t=n.sent,r=0;r<t.rows.length;r++)e.msgContent.push(t.rows[r].content);e.newsList=[].concat(o(e.newsList),o(t.rows)),e.newsList.length&&(e.newsList.forEach((function(n){n.content=e.filterHTMLTag(n.content)})),e.readerFlag=e.newsList[0].id),e.hasFlag=12*e.pageNum<t.total,e.initReadNews();case 11:case"end":return n.stop()}}),n)})))()},filterHTMLTag:function(e){e=e.replace(/<\/?[^>]*>/g,"");return e=e.replace(/[|]*\n/,""),e=e.replace(/&npsp;/gi,""),e},initReadNews:function(){var e=this;return h(a.default.mark((function n(){var t;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(""===e.readerFlag){n.next=5;break}return n.next=3,e.$fetch(e.$api.bindUserMsg,{msgId:e.readerFlag},"POST","FORM");case 3:t=n.sent,r("log",t," at pages\\news\\news.vue:125");case 5:case"end":return n.stop()}}),n)})))()}},onReachBottom:function(){this.hasFlag&&this.initNewsList()}};n.default=g}).call(this,t("6e42")["default"],t("0de9")["default"])},"8aa2":function(e,n,t){"use strict";t.r(n);var r=t("8652"),a=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=a.a},b6a8:function(e,n,t){"use strict";(function(e){t("7207"),t("921b");r(t("66fd"));var n=r(t("e5fb"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},cce3:function(e,n,t){"use strict";var r=t("0c23"),a=t.n(r);a.a},e5fb:function(e,n,t){"use strict";t.r(n);var r=t("fe75"),a=t("8aa2");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("cce3");var o,u=t("f0c5"),s=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);n["default"]=s.exports},fe75:function(e,n,t){"use strict";var r={"uni-load-more":function(){return t.e("components/uni-load-more/uni-load-more").then(t.bind(null,"f373"))}},a=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return r}))}},[["b6a8","common/runtime","common/vendor"]]]);