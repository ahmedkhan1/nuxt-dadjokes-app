(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{256:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={api_url:"https://icanhazdadjoke.com"}},259:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(9),o=(r(58),r(76),r(256)),c={methods:{fetchJokeById:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$http){t.next=5;break}return r={headers:{Accept:"application/json"}},t.next=4,e.$http.get("".concat(o.a.api_url,"/j/").concat(e.$route.params.id),r);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))()},searchJokes:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$http){t.next=5;break}return r={headers:{Accept:"application/json"}},t.next=4,e.$http.get("".concat(o.a.api_url,"/search"),r);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))()}}}},260:function(e,t,r){var content=r(264);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(75).default)("624dac98",content,!0,{sourceMap:!1})},263:function(e,t,r){"use strict";r(260)},264:function(e,t,r){var n=r(74)(!1);n.push([e.i,".joke-card[data-v-2a196cd9]{border:1px solid transparent;background:#fff;padding:10px;margin:2px;box-shadow:0 0 1px rgb(0 0 0)}",""]),e.exports=n},269:function(e,t,r){"use strict";r.r(t);var n=r(9),o=(r(58),r(27),{scrollToTop:!0,mixins:[r(259).a],head:function(){return{title:"Dad jokes",meta:[{hid:"description",name:"description",content:"Best place for corny dad jokes"}]}},validate:function(e){var t=e.params;if(/^\d+$/.test(t.id))throw new Error("Under Construction!");return!0},data:function(){return{joke:null,noRecord:!1}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.noRecord=!1,t.next=4,e.fetchJokeById();case 4:(r=t.sent)&&r.data.status&&200===r.data.status?e.joke=r.data.joke:e.noRecord=!0,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}),c=(r(263),r(31)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"joke-card"},[e.joke?r("p",[e._v(e._s(e.joke))]):e.noRecord?r("p",[e._v("No record found")]):e._e()])}),[],!1,null,"2a196cd9",null);t.default=component.exports}}]);