(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var o={name:"AppHeader"},r=(n(237),n(28)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("div",{staticClass:"jokes-title"},[n("nuxt-link",{attrs:{to:"/"}},[n("h1",{staticClass:"title"},[e._v("Dad jokes")])])],1),e._v(" "),n("div",{staticClass:"menu"},[n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/"}},[e._v("Home")])],1),e._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/jokes"}},[e._v("Jokes")])],1),e._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/about"}},[e._v("About")])],1)])])])}),[],!1,null,null,null);t.default=component.exports},129:function(e,t,n){"use strict";var o=n(25),r=(n(16),n(182)),c=n.n(r),l=n(2),d=l.a.prototype.$http=c.a.create({headers:{Accept:"application/json","Content-Type":"application/json"}});l.a.config.productionTip=!1,d.defaults.timeout=5e5,d.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),d.interceptors.response.use((function(e){return 200===e.status||201===e.status?Promise.resolve(e):Promise.reject(e)}),(function(e){if(e&&"object"===Object(o.a)(e)&&e.hasOwnProperty("status")&&e.response.status){switch(e.response.status){case 401:console.log("session expired");break;case 403:break;case 404:console.log("Resource/Page/API not exist")}return Promise.reject(e)}return Promise.reject(e)}))},168:function(e,t,n){var content=n(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(72).default)("9f342564",content,!0,{sourceMap:!1})},185:function(e,t,n){"use strict";var o={components:{AppHeader:n(125).default}},r=n(28),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("AppHeader"),e._v(" "),n("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{AppHeader:n(125).default})},186:function(e,t,n){n(187),e.exports=n(188)},235:function(e,t,n){var content=n(236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(72).default)("f52d43e0",content,!0,{sourceMap:!1})},236:function(e,t,n){var o=n(71)(!1);o.push([e.i,"body{background:rgba(0,0,0,.01961)}.card{background:#fff;border:1px solid transparent;padding:0 16px;box-shadow:0 0 1px rgb(0 0 1)}a.nuxt-link-exact-active{background-color:#fff!important;color:#000!important}",""]),e.exports=o},237:function(e,t,n){"use strict";n(168)},238:function(e,t,n){var o=n(71)(!1);o.push([e.i,"header{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;padding:1rem;border-bottom:1px dotted #ccc;background:#000}.header .title{font-size:3rem;color:#526488}.header ul{display:flex;list-style-type:none;margin:0;padding:0}.menu a{display:inline-block;background:#333;padding:10px 23px;text-decoration:none;color:#fff;margin-right:.5rem}",""]),e.exports=o}},[[186,9,1,10]]]);