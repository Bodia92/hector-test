(()=>{var e,t,r,i,n={348:(e,t,r)=>{"use strict";r.d(t,{fp:()=>k,A7:()=>A,rS:()=>w,KN:()=>P,IV:()=>T,$X:()=>E});var i=/iPhone/i,n=/iPod/i,o=/iPad/i,a=/\biOS-universal(?:.+)Mac\b/i,s=/\bAndroid(?:.+)Mobile\b/i,u=/Android/i,l=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,c=/Silk/i,d=/Windows Phone/i,f=/\bWindows(?:.+)ARM\b/i,p=/BlackBerry/i,g=/BB10/i,v=/Opera Mini/i,m=/\b(CriOS|Chrome)(?:.+)Mobile/i,h=/Mobile(?:.+)Firefox\b/i,b=function(e){return void 0!==e&&"MacIntel"===e.platform&&"number"==typeof e.maxTouchPoints&&e.maxTouchPoints>1&&"undefined"==typeof MSStream};var w=function(e){return!(!e&&0!==e)&&0!==e.length};function y(e,t){var r;return function(){for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];r&&clearTimeout(r),r=setTimeout((function(){t.apply(void 0,n),r=null}),e)}}var S=function(){return"ontouchstart"in window||window.navigator.maxTouchPoints>0||window.navigator.msMaxTouchPoints>0},k=function(){var e=function(e){var t={userAgent:"",platform:"",maxTouchPoints:0};e||"undefined"==typeof navigator?"string"==typeof e?t.userAgent=e:e&&e.userAgent&&(t={userAgent:e.userAgent,platform:e.platform,maxTouchPoints:e.maxTouchPoints||0}):t={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0};var r=t.userAgent,w=r.split("[FBAN");void 0!==w[1]&&(r=w[0]),void 0!==(w=r.split("Twitter"))[1]&&(r=w[0]);var y=function(e){return function(t){return t.test(e)}}(r),S={apple:{phone:y(i)&&!y(d),ipod:y(n),tablet:!y(i)&&(y(o)||b(t))&&!y(d),universal:y(a),device:(y(i)||y(n)||y(o)||y(a)||b(t))&&!y(d)},amazon:{phone:y(l),tablet:!y(l)&&y(c),device:y(l)||y(c)},android:{phone:!y(d)&&y(l)||!y(d)&&y(s),tablet:!y(d)&&!y(l)&&!y(s)&&(y(c)||y(u)),device:!y(d)&&(y(l)||y(c)||y(s)||y(u))||y(/\bokhttp\b/i)},windows:{phone:y(d),tablet:y(f),device:y(d)||y(f)},other:{blackberry:y(p),blackberry10:y(g),opera:y(v),firefox:y(h),chrome:y(m),device:y(p)||y(g)||y(v)||y(h)||y(m)},any:!1,phone:!1,tablet:!1};return S.any=S.apple.device||S.android.device||S.windows.device||S.other.device,S.phone=S.apple.phone||S.android.phone||S.windows.phone,S.tablet=S.apple.tablet||S.android.tablet||S.windows.tablet,S}(),t=e.apple.phone,r=e.android.phone,w=e.seven_inch;if(t||r||w||S()){var y=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(y,"px"))}};function x(e){return e instanceof Function}var P=function(e){if(e||x(e)){var t=function(){e()};window.addEventListener("resize",y(15,t)),t()}},T=function(e){if(e||x(e)){var t=function(){e(window.pageYOffset)};window.addEventListener("scroll",y(15,t)),t()}},A=function(e){(e||x(e))&&document.addEventListener("DOMContentLoaded",e)},E=function(e){(e||x(e))&&window.addEventListener("load",e)}},980:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i={id:"arrow-usage",viewBox:"0 0 13 8",url:"/images/sprite/sprite.svg#arrow-usage",toString:function(){return this.url}}},183:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i={id:"card-usage",viewBox:"0 0 29.45 24.81",url:"/images/sprite/sprite.svg#card-usage",toString:function(){return this.url}}},142:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i={id:"close-usage",viewBox:"0 0 40 40",url:"/images/sprite/sprite.svg#close-usage",toString:function(){return this.url}}},706:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i={id:"decor-usage",viewBox:"0 0 116 134",url:"/images/sprite/sprite.svg#decor-usage",toString:function(){return this.url}}},848:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i={id:"email-usage",viewBox:"0 0 25 17",url:"/images/sprite/sprite.svg#email-usage",toString:function(){return this.url}}},922:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i={id:"facebook-usage",viewBox:"0 0 519.25 800",url:"/images/sprite/sprite.svg#facebook-usage",toString:function(){return this.url}}},941:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i={id:"heart-usage",viewBox:"0 0 28 25",url:"/images/sprite/sprite.svg#heart-usage",toString:function(){return this.url}}},975:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i={id:"instagram-usage",viewBox:"0 0 23 24",url:"/images/sprite/sprite.svg#instagram-usage",toString:function(){return this.url}}},881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i={id:"phone-usage",viewBox:"0 0 24 24",url:"/images/sprite/sprite.svg#phone-usage",toString:function(){return this.url}}},724:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i={id:"search-usage",viewBox:"0 0 25 25",url:"/images/sprite/sprite.svg#search-usage",toString:function(){return this.url}}},74:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i={id:"telegram-usage",viewBox:"0 0 46.43 40.63",url:"/images/sprite/sprite.svg#telegram-usage",toString:function(){return this.url}}},685:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i={id:"user-usage",viewBox:"0 0 20.86 25",url:"/images/sprite/sprite.svg#user-usage",toString:function(){return this.url}}},436:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i={id:"viber-usage",viewBox:"0 0 52.83 55.71",url:"/images/sprite/sprite.svg#viber-usage",toString:function(){return this.url}}},492:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i={id:"whatsapp-usage",viewBox:"0 0 24 24",url:"/images/sprite/sprite.svg#whatsapp-usage",toString:function(){return this.url}}},325:(e,t,r)=>{var i={"./arrow.svg":980,"./card.svg":183,"./close.svg":142,"./decor.svg":706,"./email.svg":848,"./facebook.svg":922,"./heart.svg":941,"./instagram.svg":975,"./phone.svg":881,"./search.svg":724,"./telegram.svg":74,"./user.svg":685,"./viber.svg":436,"./whatsapp.svg":492};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=o,e.exports=n,n.id=325},488:(e,t,r)=>{var i={"./":[957,554,957],"./index":[957,554,957],"./index.js":[957,554,957],"./ui":[76,76],"./ui.js":[76,76]};function n(e){if(!r.o(i,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],n=t[0];return Promise.all(t.slice(1).map(r.e)).then((()=>r(n)))}n.keys=()=>Object.keys(i),n.id=488,e.exports=n}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e](r,r.exports,a),r.exports}a.m=n,a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>"js/"+e+".js",a.miniCssF=e=>"css/"+e+".css",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="glivera-webpack-template:",a.l=(r,i,n,o)=>{if(e[r])e[r].push(i);else{var s,u;if(void 0!==n)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+n){s=d;break}}s||(u=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+n),s.src=r),e[r]=[i];var f=(t,i)=>{s.onerror=s.onload=null,clearTimeout(p);var n=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(i))),t)return t(i)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e+"../"})(),r=e=>new Promise(((t,r)=>{var i=a.miniCssF(e),n=a.p+i;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var n=(a=r[i]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(n===e||n===t))return a}var o=document.getElementsByTagName("style");for(i=0;i<o.length;i++){var a;if((n=(a=o[i]).getAttribute("data-href"))===e||n===t)return a}})(i,n))return t();((e,t,r,i)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)r();else{var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,n.parentNode.removeChild(n),i(u)}},n.href=t,document.head.appendChild(n)})(e,n,t,r)})),i={143:0},a.f.miniCss=(e,t)=>{i[e]?t.push(i[e]):0!==i[e]&&{957:1}[e]&&t.push(i[e]=r(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))},(()=>{var e={143:0};a.f.j=(t,r)=>{var i=a.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var n=new Promise(((r,n)=>i=e[t]=[r,n]));r.push(i[2]=n);var o=a.p+a.u(t),s=new Error;a.l(o,(r=>{if(a.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",s.name="ChunkLoadError",s.type=n,s.request=o,i[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var i,n,[o,s,u]=r,l=0;if(o.some((t=>0!==e[t]))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(u)u(a)}for(t&&t(r);l<o.length;l++)n=o[l],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunkglivera_webpack_template=self.webpackChunkglivera_webpack_template||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";var e=a(348);Math.PI;const t=function(){(0,e.KN)((function(){(0,e.fp)()})),(0,e.fp)()};function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(o=n.key,a=void 0,a=function(e,t){if("object"!==r(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===r(a)?a:String(a)),n)}var o,a}var n,o=function(){function r(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),this.$htmlTag=document.querySelector("html"),this.pageName=this.$htmlTag.dataset.templateName&&this.$htmlTag.dataset.templateName.length>0?this.$htmlTag.dataset.templateName:null,this.init=this.init.bind(this),this.init()}var n,o,s;return n=r,(o=[{key:"importPage",value:function(){this.pageName&&null!==this.pageName&&a(488)("./".concat(this.pageName)).then((function(e){(0,e.default)()})).catch((function(e){console.error("Failed to load page, check data-template-name at root if correct"),console.dir(e,e.stack)}))}},{key:"init",value:function(){var r=this;t(),(0,e.$X)((function(){document.body.classList.add("body--loaded")})),setTimeout((function(){r.importPage()}),0)}}])&&i(n.prototype,o),s&&i(n,s),Object.defineProperty(n,"prototype",{writable:!1}),r}();["color: #fff","background: #cf8e1f"].join(";");(n=a(325)).keys().forEach(n),(0,e.A7)((function(){new o}))})()})();