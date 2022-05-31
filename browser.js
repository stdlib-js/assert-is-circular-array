// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).isCircularArray=t()}(this,(function(){"use strict";function r(r){var t=r.default;if("function"==typeof t){var e=function(){return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var t=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var e=function(){return t&&"symbol"==typeof Symbol.toStringTag},n=Object.prototype.toString,o=n;var i=function(r){return o.call(r)},u=Object.prototype.hasOwnProperty;var f=function(r,t){return null!=r&&u.call(r,t)},c="function"==typeof Symbol?Symbol.toStringTag:"",a=f,l=c,p=n;var s=i,v=function(r){var t,e,n;if(null==r)return p.call(r);e=r[l],t=a(r,l);try{r[l]=void 0}catch(t){return p.call(r)}return n=p.call(r),t?r[l]=e:delete r[l],n},y=e()?v:s,b=y;var g=Array.isArray?Array.isArray:function(r){return"[object Array]"===b(r)};var d=function(r){return Object.keys(Object(r))},m=d;var h=function(){return function(){return 2!==(m(arguments)||"").length}(1,2)},j=void 0!==Object.keys,_=y;var O,w=function(r){return"[object Arguments]"===_(r)},S=w;O=function(){return S(arguments)}();var P=O,E="function"==typeof Object.defineProperty?Object.defineProperty:null;var I=function(){try{return E({},"x",{}),!0}catch(r){return!1}},T=Object.defineProperty,A=Object.prototype,k=A.toString,N=A.__defineGetter__,x=A.__defineSetter__,V=A.__lookupGetter__,B=A.__lookupSetter__;var G=function(r,t,e){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===k.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(V.call(r,t)||B.call(r,t)?(n=r.__proto__,r.__proto__=A,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&N&&N.call(r,t,e.get),u&&x&&x.call(r,t,e.set),r},L=T,C=G,F=I()?L:C;var X=function(r,t,e){F(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},Y=X;var M=function(r){return"string"==typeof r},D=String.prototype.valueOf;var H=y,R=function(r){try{return D.call(r),!0}catch(r){return!1}},W=e();var z=function(r){return"object"==typeof r&&(r instanceof String||(W?R(r):"[object String]"===H(r)))},q=M,J=z;var K=Y,Q=function(r){return q(r)||J(r)},U=z;K(Q,"isPrimitive",M),K(Q,"isObject",U);var Z=Q;var $=function(r){return"number"==typeof r},rr=Number,tr=rr.prototype.toString;var er=y,nr=rr,or=function(r){try{return tr.call(r),!0}catch(r){return!1}},ir=e();var ur=function(r){return"object"==typeof r&&(r instanceof nr||(ir?or(r):"[object Number]"===er(r)))},fr=$,cr=ur;var ar=Y,lr=function(r){return fr(r)||cr(r)},pr=ur;ar(lr,"isPrimitive",$),ar(lr,"isObject",pr);var sr=lr;var vr=function(r){return r!=r},yr=sr.isPrimitive,br=vr;var gr=function(r){return yr(r)&&br(r)},dr=sr.isObject,mr=vr;var hr=function(r){return dr(r)&&mr(r.valueOf())},jr=gr,_r=hr;var Or=Y,wr=function(r){return jr(r)||_r(r)},Sr=hr;Or(wr,"isPrimitive",gr),Or(wr,"isObject",Sr);var Pr=wr,Er=Number.POSITIVE_INFINITY,Ir=rr.NEGATIVE_INFINITY,Tr=Math.floor;var Ar=function(r){return Tr(r)===r},kr=Er,Nr=Ir,xr=Ar;var Vr=function(r){return r<kr&&r>Nr&&xr(r)},Br=sr.isPrimitive,Gr=Vr;var Lr=function(r){return Br(r)&&Gr(r)},Cr=sr.isObject,Fr=Vr;var Xr=function(r){return Cr(r)&&Fr(r.valueOf())},Yr=Lr,Mr=Xr;var Dr=Y,Hr=function(r){return Yr(r)||Mr(r)},Rr=Xr;Dr(Hr,"isPrimitive",Lr),Dr(Hr,"isObject",Rr);var Wr,zr=Hr,qr=Object.prototype.propertyIsEnumerable;Wr=!qr.call("beep","0");var Jr=Z,Kr=Pr.isPrimitive,Qr=zr.isPrimitive,Ur=qr,Zr=Wr;var $r=function(r,t){var e;return null!=r&&(!(e=Ur.call(r,t))&&Zr&&Jr(r)?!Kr(t=+t)&&Qr(t)&&t>=0&&t<r.length:e)},rt=$r,tt=f,et=rt,nt=g,ot=Ar;var it=P?w:function(r){return null!==r&&"object"==typeof r&&!nt(r)&&"number"==typeof r.length&&ot(r.length)&&r.length>=0&&r.length<=4294967295&&tt(r,"callee")&&!et(r,"callee")},ut=it,ft=d,ct=Array.prototype.slice;var at=function(r){return ut(r)?ft(ct.call(r)):ft(r)},lt=g;var pt=function(r){return null!==r&&"object"==typeof r};Y(pt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!lt(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(pt));var st=pt;var vt=rt((function(){}),"prototype"),yt=!rt({toString:null},"toString"),bt=Ar;var gt=Pr,dt=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&bt(r.length)&&r.length>=0&&r.length<=9007199254740991},mt=Z.isPrimitive,ht=zr.isPrimitive;var jt=function(r,t,e){var n,o;if(!dt(r)&&!mt(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!ht(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(gt(t)){for(;o<n;o++)if(gt(r[o]))return o}else for(;o<n;o++)if(r[o]===t)return o;return-1},_t=jt,Ot=/./,wt=r(Object.freeze({__proto__:null,default:()=>window}))(),St=wt.document&&wt.document.childNodes,Pt=Int8Array,Et=Ot,It=St,Tt=Pt;var At=function(){return"function"==typeof Et||"object"==typeof Tt||"function"==typeof It};var kt=function(){return/^\s*function\s*([^(]*)/i},Nt=kt;Y(Nt,"REGEXP",kt());var xt=st;var Vt=y,Bt=Nt.REGEXP,Gt=function(r){return xt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Lt=function(r){var t,e,n;if(("Object"===(e=Vt(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Bt.exec(n.toString()))return t[1]}return Gt(r)?"Buffer":e},Ct=Lt;var Ft=Lt;var Xt=function(r){var t;return null===r?"null":"object"===(t=typeof r)?Ct(r).toLowerCase():t},Yt=function(r){return Ft(r).toLowerCase()},Mt=At()?Yt:Xt;var Dt,Ht=function(r){return r.constructor&&r.constructor.prototype===r},Rt="undefined"==typeof window?void 0:window,Wt=f,zt=_t,qt=Mt,Jt=Ht,Kt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Qt=Rt;Dt=function(){var r;if("undefined"===qt(Qt))return!1;for(r in Qt)try{-1===zt(Kt,r)&&Wt(Qt,r)&&null!==Qt[r]&&"object"===qt(Qt[r])&&Jt(Qt[r])}catch(r){return!0}return!1}();var Ut="undefined"!=typeof window,Zt=Dt,$t=Ht,re=Ut;var te=st,ee=f,ne=it,oe=vt,ie=yt,ue=function(r){if(!1===re&&!Zt)return $t(r);try{return $t(r)}catch(r){return!1}},fe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var ce=d,ae=at,le=function(r){var t,e,n,o,i,u,f;if(o=[],ne(r)){for(f=0;f<r.length;f++)o.push(f.toString());return o}if("string"==typeof r){if(r.length>0&&!ee(r,"0"))for(f=0;f<r.length;f++)o.push(f.toString())}else{if(!1===(n="function"==typeof r)&&!te(r))return o;e=oe&&n}for(i in r)e&&"prototype"===i||!ee(r,i)||o.push(String(i));if(ie)for(t=ue(r),f=0;f<fe.length;f++)u=fe[f],t&&"constructor"===u||!ee(r,u)||o.push(String(u));return o},pe=j?h()?ae:ce:le;function se(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)}function ve(r,t){var e;for(e=0;e<r.length;e++)if(r[e]===t)return!0;return!1}function ye(r,t){var e,n,o;if(t.push(r),0===(e=pe(r)).length)return!1;for(o=0;o<e.length;o++)if(se(n=r[e[o]])&&(ve(t,n)||ye(n,t)))return!0;return t.pop(r),!1}var be=g,ge=function(r){return!!se(r)&&ye(r,[])};return function(r){return!!be(r)&&ge(r)}}));
//# sourceMappingURL=browser.js.map
