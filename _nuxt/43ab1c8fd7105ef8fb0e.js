(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(t,e,n){"use strict";var r=n(42);n.n(r).a},136:function(t,e,n){(t.exports=n(29)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},137:function(t,e,n){"use strict";var r=n(43);n.n(r).a},138:function(t,e,n){(t.exports=n(29)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""])},141:function(t,e,n){"use strict";var r=n(44);n.n(r).a},142:function(t,e,n){e=t.exports=n(29)(!1);var r=n(91),o=r(n(143)),c=r(n(144)),f=r(n(145));e.push([t.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;scrollbar-color:#1e6995 #eee;scrollbar-width:thin}*,:after,:before{box-sizing:border-box;margin:0;padding:0}@font-face{font-family:Ikaros-Regular;src:url("+o+")}@font-face{font-family:Jaapokki-Regular;src:url("+c+")}@font-face{font-family:Jaapokki-Regular;src:url("+f+")}.button--blue{display:inline-block;border-radius:4px;border:1px solid #387ca5;color:#387ca5;text-decoration:none;padding:10px 30px;transition:.2s}.button--blue:hover{color:#fff;background-color:#387ca5}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px;transition:.2s}.button--grey:hover{color:#fff;background-color:#35495e}html::-webkit-scrollbar{width:.3em;height:.3em}html::-webkit-scrollbar-track-piece{background:#eee}html::-webkit-scrollbar-thumb{background:#1e6995}",""])},143:function(t,e,n){t.exports=n.p+"fonts/098c789.otf"},144:function(t,e,n){t.exports=n.p+"fonts/bf89b1e.otf"},145:function(t,e,n){t.exports=n.p+"fonts/bc09aa8.otf"},146:function(t,e,n){"use strict";n.r(e);n(59),n(68),n(71);var r=n(23),o=(n(37),n(102),n(4)),c=(n(73),n(75),n(78),n(41),n(80),n(56),n(79),n(107),n(119),n(0)),f={},l=(n(120),n(121),n(122),n(124),n(126),n(127),n(130),n(132),n(5));function h(t){c.a.config.errorHandler&&c.a.config.errorHandler(t)}function d(t,e){if(e||!t.options.__hasNuxtData){var n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){var data=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),Object(l.a)({},data,e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function m(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function x(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function v(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function y(t){return Promise.all(v(t,function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=m(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}},t)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function w(t){return _.apply(this,arguments)}function _(){return(_=Object(o.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e);case 2:return t.abrupt("return",Object(l.a)({},e,{meta:x(e).map(function(t,n){return Object(l.a)({},t.options.meta,(e.matched[n]||{}).meta)})}));case 3:case"end":return t.stop()}},t)}))).apply(this,arguments)}function k(t,e){return C.apply(this,arguments)}function C(){return(C=Object(o.a)(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,path,n){if(t){e.context._redirected=!0;var o=Object(r.a)(path);if("number"==typeof t||"undefined"!==o&&"object"!==o||(n=path||{},path=t,o=Object(r.a)(path),t=302),"object"===o&&(path=e.router.resolve(path).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=P(path,n),window.location.replace(path),new Error("ERR_REDIRECT");e.context.next({path:path,query:n,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=9;break}return t.next=8,w(n.route);case 8:e.context.route=t.sent;case 9:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=15;break}return t.next=14,w(n.from);case 14:e.context.from=t.sent;case 15:case"end":return t.stop()}},t)}))).apply(this,arguments)}function $(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,data){t&&e.error(t),n(data=data||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function R(base,t){var path=window.location.pathname;return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),decodeURI(path||"/")+window.location.search+window.location.hash)}function E(t,e){return function(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"===Object(r.a)(t[i])&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){for(var path="",data=n||{},o=r||{},c=o.pretty?S:encodeURIComponent,f=0;f<t.length;f++){var l=t[f];if("string"!=typeof l){var h=data[l.name||"pathMatch"],d=void 0;if(null==h){if(l.optional){l.partial&&(path+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(Array.isArray(h)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var m=0;m<h.length;m++){if(d=c(h[m]),!e[f].test(d))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(d)+"`");path+=(0===m?l.prefix:l.delimiter)+d}}else{if(d=l.asterisk?encodeURI(h).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):c(h),!e[f].test(d))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+d+'"');path+=l.prefix+d}}else path+=l}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",f=e&&e.delimiter||"/";for(;null!=(n=T.exec(t));){var l=n[0],h=n[1],d=n.index;if(path+=t.slice(c,d),c=d+l.length,h)path+=h[1];else{var m=t[c],x=n[2],v=n[3],y=n[4],w=n[5],_=n[6],k=n[7];path&&(r.push(path),path="");var C=null!=x&&null!=m&&m!==x,$="+"===_||"*"===_,R="?"===_||"*"===_,E=n[2]||f,pattern=y||w;r.push({name:v||o++,prefix:x||"",delimiter:E,optional:R,repeat:$,partial:C,asterisk:!!k,pattern:pattern?A(pattern):k?".*":"[^"+N(E)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e))}function O(t,e){var n={},r=Object(l.a)({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function j(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return Object(l.a)({},t,{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var T=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function S(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function N(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function A(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function P(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,c=t.split("/"),f=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");return 2===(c=path.split("#")).length&&(path=c[0],o=c[1]),f+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(f+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),f+=o?"#"+o:""}var L=n(86),D=n.n(L),M=n(58),I=function(){return n.e(2).then(n.bind(null,210)).then(function(t){return t.default||t})};c.a.use(M.a),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",function(){window.history.scrollRestoration="auto"}),window.addEventListener("load",function(){window.history.scrollRestoration="manual"}));var z=function(t,e,n){var r=!1;return t.matched.length<2&&t.matched.every(function(t){return!1!==t.components.default.options.scrollToTop})?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var U=n(87),B=n.n(U),J=Object(l.a)({},B.a,{name:"NoSsr"}),F={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render:function(t,e){var n=e.parent,data=e.data,r=e.props;data.nuxtChild=!0;for(var o=n,c=n.$nuxt.nuxt.transitions,f=n.$nuxt.nuxt.defaultTransition,l=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&l++,n=n.$parent;data.nuxtChildDepth=l;var h=c[l]||f,d={};H.forEach(function(t){void 0!==h[t]&&(d[t]=h[t])});var m={};K.forEach(function(t){"function"==typeof h[t]&&(m[t]=h[t].bind(o))});var x=m.beforeEnter;m.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),x)return x.call(o,t)};var v=[t("router-view",data)];return r.keepAlive&&(v=[t("keep-alive",{props:r.keepAliveProps},v)]),t("transition",{props:d,on:m},v)}},H=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],K=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],Q={name:"NuxtError",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},G=(n(135),n(16)),V=Object(G.a)(Q,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,X={name:"Nuxt",components:{NuxtChild:F,NuxtError:V},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||E(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},beforeCreate:function(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render:function(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},W={name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},Y=(n(137),Object(G.a)(W,void 0,void 0,!1,null,null,null).exports),Z=(n(139),n(141),{_default:Object(G.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("nuxt")],1)},[],!1,null,null,null).exports}),tt={head:{title:"OpenDevUFCG",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"OpenDevUFCG Portal"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,e){var n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:function(){return{isOnline:!0,layout:null,layoutName:""}},beforeCreate:function(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){c.a.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline:function(){return!this.isOnline}},methods:{refreshOnlineStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&Z["_"+t]||(t="default"),this.layoutName=t,this.layout=Z["_"+t],this.layout},loadLayout:function(t){return t&&Z["_"+t]||(t="default"),Promise.resolve(Z["_"+t])}},components:{NuxtLoading:Y}},et=n(11),nt=n(45),ot=n(88),it=n(89);et.a.autoAddCss=!1,et.c.add(ot.a),et.c.add(it.a),c.a.component("font-awesome-icon",nt.a),c.a.component("font-awesome-layers",nt.b),c.a.component("font-awesome-layers-text",nt.c);var at=n(90),st=n.n(at),ut=function(t){return ct.apply(this,arguments)};function ct(){return(ct=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=e.app.router,r={dev:!0,debug:{},id:"UA-120241684-2"},c.a.use(st.a,Object(l.a)({},{router:n},r));case 3:case"end":return t.stop()}},t)}))).apply(this,arguments)}c.a.component(J.name,J),c.a.component(F.name,F),c.a.component("NChild",F),c.a.component(X.name,X),c.a.use(D.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var pt={name:"page",mode:"out-in",appear:!0,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function ft(){return(ft=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,r,o,f,path,h;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new M.a({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:z,routes:[{path:"/",component:I,name:"index"}],fallback:!1});case 2:return n=t.sent,r=Object(l.a)({router:n,nuxt:{defaultTransition:pt,transitions:[pt],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},pt,{name:t}):Object.assign({},pt,t):pt}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,t=t?j(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},tt),o=e?e.next:function(t){return r.router.push(t)},e?f=n.resolve(e.url).route:(path=R(n.options.base),f=n.resolve(path).route),t.next=8,k(r,{route:f,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 8:h=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";c.a[n]||(c.a[n]=!0,c.a.use(function(){c.a.prototype.hasOwnProperty(t)||Object.defineProperty(c.a.prototype,t,{get:function(){return this.$root.$options[t]}})}))},t.next=12;break;case 12:if("function"!=typeof ut){t.next=16;break}return t.next=16,ut(r.context,h);case 16:t.next=19;break;case 19:return t.abrupt("return",{app:r,router:n});case 20:case"end":return t.stop()}},t)}))).apply(this,arguments)}var lt=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},ht=window.IntersectionObserver&&new window.IntersectionObserver(function(t){t.forEach(function(t){var e=t.intersectionRatio,link=t.target;e<=0||link.__prefetch()})}),mt={name:"NuxtLink",extends:c.a.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}},mounted:function(){this.noPrefetch||lt(this.observe,{timeout:2e3})},beforeDestroy:function(){this.__observed&&(ht.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe:function(){ht&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetch.bind(this),ht.observe(this.$el),this.__observed=!0)},shouldPrefetch:function(){return this.getPrefetchComponents().length>0},canPrefetch:function(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents:function(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map(function(t){return t.components.default}).filter(function(t){return"function"==typeof t&&!t.options&&!t.__prefetched})},prefetch:function(){if(this.canPrefetch()){ht.unobserve(this.$el);var t=this.getPrefetchComponents(),e=!0,n=!1,r=void 0;try{for(var o,c=t[Symbol.iterator]();!(e=(o=c.next()).done);e=!0){var f=o.value;try{f(),f.__prefetched=!0}catch(t){}}}catch(t){n=!0,r=t}finally{try{e||null==c.return||c.return()}finally{if(n)throw r}}}}}};c.a.component(mt.name,mt),c.a.component("NLink",mt);var xt,vt,gt=[],yt=window.__NUXT__||{};Object.assign(c.a.config,{silent:!0,performance:!1});var bt=c.a.config.errorHandler||console.error;function wt(t,e,n){var r=function(component){var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];return option.apply(void 0,n)}return option}(component,"transition",e,n)||{};return"string"==typeof t?{name:t}:t};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function _t(t,e,n){return kt.apply(this,arguments)}function kt(){return(kt=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,f,l,h=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!xt.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?O(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,y(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return h._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=23;break;case 12:if(t.prev=12,t.t0=t.catch(4),c=t.t0||{},f=c.statusCode||c.status||c.response&&c.response.status||500,l=c.message||"",!/^Loading chunk (\d)+ failed\./.test(l)){t.next=20;break}return window.location.reload(!0),t.abrupt("return");case 20:this.error({statusCode:f,message:l}),this.$nuxt.$emit("routeChanged",e,n,c),r();case 23:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function Ct(t,e){return yt.serverRendered&&e&&d(t,e),t._Ctor=t,t}function $t(t,e,n){var r=this,o=[],c=!1;if(void 0!==n&&(o=[],(n=m(n)).options.middleware&&(o=o.concat(n.options.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof f[t]&&(c=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),f[t])}),!c)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():$(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function Rt(t,e,n){return Et.apply(this,arguments)}function Et(){return(Et=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,f,l,m,v,y,w,_,C,R,O,j,T,S,N,A=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return gt=e===n?[]:x(n,o=[]).map(function(t,i){return E(n.matched[o[i]].path)(n.params)}),c=!1,f=function(path){n.path===path.path&&A.$loading.finish&&A.$loading.finish(),n.path!==path.path&&A.$loading.pause&&A.$loading.pause(),c||(c=!0,r(path))},t.next=7,k(xt,{route:e,from:n,next:f.bind(this)});case 7:if(this._dateLastError=xt.nuxt.dateErr,this._hadError=!!xt.nuxt.err,(m=x(e,l=[])).length){t.next=25;break}return t.next=14,$t.call(this,m,xt.context);case 14:if(!c){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof V.layout?V.layout(xt.context):V.layout);case 18:return v=t.sent,t.next=21,$t.call(this,m,xt.context,v);case 21:if(!c){t.next=23;break}return t.abrupt("return");case 23:return xt.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return m.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(wt(m,e,n)),t.prev=27,t.next=30,$t.call(this,m,xt.context);case 30:if(!c){t.next=32;break}return t.abrupt("return");case 32:if(!xt.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(y=m[0].options.layout)&&(y=y(xt.context)),t.next=38,this.loadLayout(y);case 38:return y=t.sent,t.next=41,$t.call(this,m,xt.context,y);case 41:if(!c){t.next=43;break}return t.abrupt("return");case 43:if(!xt.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:w=!0,t.prev=46,_=!0,C=!1,R=void 0,t.prev=50,O=m[Symbol.iterator]();case 52:if(_=(j=O.next()).done){t.next=64;break}if("function"==typeof(T=j.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,T.options.validate(xt.context);case 58:if(w=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:_=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),C=!0,R=t.t0;case 70:t.prev=70,t.prev=71,_||null==O.return||O.return();case 73:if(t.prev=73,!C){t.next=76;break}throw R;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(w){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(m.map(function(t,i){if(t._path=E(e.matched[l[i]].path)(e.params),t._dataRefresh=!1,A._pathChanged&&A._queryChanged||t._path!==gt[i])t._dataRefresh=!0;else if(!A._pathChanged&&A._queryChanged){var n=t.options.watchQuery;!0===n?t._dataRefresh=!0:Array.isArray(n)&&(t._dataRefresh=n.some(function(t){return A._diffQuery[t]}))}if(!A._hadError&&A._isMounted&&!t._dataRefresh)return Promise.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,c=!!t.options.fetch,f=o&&c?30:45;if(o){var h=$(t.options.asyncData,xt.context).then(function(e){d(t,e),A.$loading.increase&&A.$loading.increase(f)});r.push(h)}if(A.$loading.manual=!1===t.options.loading,c){var p=t.options.fetch(xt.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){A.$loading.increase&&A.$loading.increase(f)}),r.push(p)}return Promise.all(r)}));case 89:c||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(S=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,S));case 97:return gt=[],h(S),"function"==typeof(N=V.layout)&&(N=N(xt.context)),t.next=103,this.loadLayout(N);case 103:this.error(S),this.$nuxt.$emit("routeChanged",e,n,S),r();case 106:case"end":return t.stop()}},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function Ot(t,e){v(t,function(t,e,n,o){return"object"!==Object(r.a)(t)||t.options||((t=c.a.extend(t))._Ctor=t,n.components[o]=t),t})}function jt(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?V.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(xt.context)),this.setLayout(e)}function Tt(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||c.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=x(t,e);r.forEach(function(t,i){if(t&&t.constructor._dataRefresh&&o[i]===t.constructor&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var n in e)c.a.set(t.$data,n,e[n])}}),jt.call(n,t)})}function St(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),vt.afterEach(function(e,n){c.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function Nt(){return(Nt=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,r,f;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return xt=e.app,vt=e.router,t.next=4,Promise.all((path=void 0,path=R((l=vt).options.base,l.options.mode),v(l.match(path),function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r,o,c){var f;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return f=Ct(m(e),yt.data?yt.data[c]:null),r.components[o]=f,t.abrupt("return",f);case 7:case"end":return t.stop()}},t)}));return function(e,n,r,o,c){return t.apply(this,arguments)}}())));case 4:if(n=t.sent,r=new c.a(xt),f=function(){r.$mount("#__nuxt"),c.a.nextTick(function(){St(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(wt(n,vt.currentRoute)),gt=vt.currentRoute.matched.map(function(t){return E(t.path)(vt.currentRoute.params)})),r.$loading={},yt.error&&r.error(yt.error),vt.beforeEach(_t.bind(r)),vt.beforeEach(Rt.bind(r)),vt.afterEach(Ot),vt.afterEach(Tt.bind(r)),!yt.serverRendered){t.next=18;break}return f(),t.abrupt("return");case 18:Rt.call(r,vt.currentRoute,vt.currentRoute,function(path){if(!path)return Ot(vt.currentRoute,vt.currentRoute),jt.call(r,vt.currentRoute),void f();vt.push(path,function(){return f()},function(t){if(!t)return f();bt(t)})});case 19:case"end":return t.stop()}var l,path},t)}))).apply(this,arguments)}(function(t){return ft.apply(this,arguments)})().then(function(t){return Nt.apply(this,arguments)}).catch(function(t){t.message="[nuxt] Error while mounting app: "+t.message,bt(t)})},42:function(t,e,n){var content=n(136);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("b675d82e",content,!0,{sourceMap:!1})},43:function(t,e,n){var content=n(138);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("17cfdfa9",content,!0,{sourceMap:!1})},44:function(t,e,n){var content=n(142);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("132df51d",content,!0,{sourceMap:!1})},92:function(t,e,n){t.exports=n(146)}},[[92,3,1,4]]]);