(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2],{255:function(e,t,n){var content=n(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(75).default)("d36f56cc",content,!0,{sourceMap:!1})},256:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={api_url:"https://icanhazdadjoke.com"}},257:function(e,t,n){"use strict";n(255)},258:function(e,t,n){var r=n(74)(!1);r.push([e.i,".joke{padding:1rem;border:1px dotted #ccc;background:#fff;margin:1rem 0}",""]),e.exports=r},259:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(9),o=(n(58),n(76),n(256)),c={methods:{fetchJokeById:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$http){t.next=5;break}return n={headers:{Accept:"application/json"}},t.next=4,e.$http.get("".concat(o.a.api_url,"/j/").concat(e.$route.params.id),n);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))()},searchJokes:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$http){t.next=5;break}return n={headers:{Accept:"application/json"}},t.next=4,e.$http.get("".concat(o.a.api_url,"/search"),n);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))()}}}},262:function(e,t,n){"use strict";n.r(t);var r={name:"Joke",props:["joke","id"]},o=(n(257),n(31)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nuxt-link",{attrs:{to:"jokes/"+e.id}},[n("div",{staticClass:"joke"},[n("p",[e._v(e._s(e.joke))])])])}),[],!1,null,null,null);t.default=component.exports},268:function(e,t,n){"use strict";n.r(t);var r=n(9),o=(n(58),n(262)),c=n(259),d=n(256),l={mixins:[c.a],components:{Joke:o.default},data:function(){return{jokes:[],content:""}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,t.prev=1,r={headers:{Accept:"application/json"}},t.next=5,n.$get("".concat(d.a.api_url,"/search"),r);case 5:if(!(o=t.sent)){t.next=8;break}return t.abrupt("return",{content:o.results[0].joke,jokes:o.results});case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))()},head:function(){return{title:"Dad jokes",meta:[{hid:"description",name:"description",content:this.content},{property:"og:site_name",content:"Realade"},{hid:"og:type",property:"og:type",content:"website"},{hid:"og:url",property:"og:url",content:"https://bobross.com"},{hid:"og:title",property:"og:title",content:"My Amazing Blog on The Joy of Painting"},{hid:"og:description",property:"og:description",content:this.content},{hid:"og:image",property:"og:image",content:"https://cityntownstorage.blob.core.windows.net/cityntown-dev-images/6180de837d77212e01deda8a%2FNanga-Parbat--Hiking_21122021104922320_Large.jpg"},{property:"og:image:width",content:"740"},{property:"og:image:height",content:"300"}]}}},f=n(31),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.jokes?n("div",e._l(e.jokes,(function(e){return n("Joke",{key:e.id,attrs:{id:e.id,joke:e.joke}})})),1):e._e()}),[],!1,null,null,null);t.default=component.exports}}]);