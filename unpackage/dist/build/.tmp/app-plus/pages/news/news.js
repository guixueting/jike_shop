(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/news"],{1182:function(t,n,e){},"341d":function(t,n,e){"use strict";(function(t,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=r(e("a34a")),a=e("cc5c");function r(t){return t&&t.__esModule?t:{default:t}}function o(t,n,e,i,u,a,r){try{var o=t[a](r),s=o.value}catch(c){return void e(c)}o.done?n(s):Promise.resolve(s).then(i,u)}function s(t){return function(){var n=this,e=arguments;return new Promise(function(i,u){var a=t.apply(n,e);function r(t){o(a,i,u,r,s,"next",t)}function s(t){o(a,i,u,r,s,"throw",t)}r(void 0)})}}var c=function(){return e.e("components/uni-ui/uni-list/uni-list").then(e.bind(null,"17e5"))},f=function(){return e.e("components/uni-ui/uni-list-item/uni-list-item").then(e.bind(null,"1a4c"))},l={data:function(){return{newsList:[]}},onLoad:function(){this.getNewsList()},methods:{getNewsList:function(){var n=s(u.default.mark(function n(){var e;return u.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,a.myRequestGet)("/api/getnewslist");case 2:e=n.sent,this.newsList=e.message,console.log(t(this.newsList," at pages\\news\\news.vue:36"));case 5:case"end":return n.stop()}},n,this)}));function e(){return n.apply(this,arguments)}return e}(),goDetail:function(t){i.navigateTo({url:"/pages/newsdetail/newsdetail?id=".concat(t.id)})}},components:{uniList:c,uniListItem:f}};n.default=l}).call(this,e("0de9")["default"],e("6e42")["default"])},"69d8":function(t,n,e){"use strict";var i=e("1182"),u=e.n(i);u.a},"6c35":function(t,n,e){"use strict";e.r(n);var i=e("341d"),u=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=u.a},"907d":function(t,n,e){"use strict";e.r(n);var i=e("d0e8"),u=e("6c35");for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);e("69d8");var r=e("2877"),o=Object(r["a"])(u["default"],i["a"],i["b"],!1,null,null,null);n["default"]=o.exports},a22b:function(t,n,e){"use strict";(function(t){e("8181"),e("921b");i(e("66fd"));var n=i(e("907d"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},d0e8:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.newsList,function(n,e){var i=t._f("formatDate")(n.add_time);return{$orig:t.__get_orig(n),f0:i}}));t.$mp.data=Object.assign({},{$root:{l0:e}})},u=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return u})}},[["a22b","common/runtime","common/vendor"]]]);