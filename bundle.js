// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).isCircularArray=t()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var t=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var e=function(){return t&&"symbol"==typeof Symbol.toStringTag},n=Object.prototype.toString,o=n;var i=function(r){return o.call(r)},u=Object.prototype.hasOwnProperty;var f=function(r,t){return null!=r&&u.call(r,t)},c="function"==typeof Symbol?Symbol.toStringTag:"",a=f,l=c,p=n;var v=i,s=function(r){var t,e,n;if(null==r)return p.call(r);e=r[l],t=a(r,l);try{r[l]=void 0}catch(t){return p.call(r)}return n=p.call(r),t?r[l]=e:delete r[l],n},y=e()?s:v,b=y;var g=Array.isArray?Array.isArray:function(r){return"[object Array]"===b(r)};var d=function(r){return Object.keys(Object(r))},m=d;var h=function(){return function(){return 2!==(m(arguments)||"").length}(1,2)},j=void 0!==Object.keys,w=y;var _,O=function(r){return"[object Arguments]"===w(r)},S=O;_=function(){return S(arguments)}();var P=_,E="function"==typeof Object.defineProperty?Object.defineProperty:null;var I=function(){try{return E({},"x",{}),!0}catch(r){return!1}},T=Object.defineProperty,A=Object.prototype,k=A.toString,x=A.__defineGetter__,N=A.__defineSetter__,B=A.__lookupGetter__,V=A.__lookupSetter__;var F=function(r,t,e){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===k.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(B.call(r,t)||V.call(r,t)?(n=r.__proto__,r.__proto__=A,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&x&&x.call(r,t,e.get),u&&N&&N.call(r,t,e.set),r},G=T,L=F,M=I()?G:L;var C=function(r,t,e){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},X=C;var Y=function(r){return"string"==typeof r},D=String.prototype.valueOf;var H=y,R=function(r){try{return D.call(r),!0}catch(r){return!1}},W=e();var z=function(r){return"object"==typeof r&&(r instanceof String||(W?R(r):"[object String]"===H(r)))},U=Y,q=z;var J=X,K=function(r){return U(r)||q(r)},Q=z;J(K,"isPrimitive",Y),J(K,"isObject",Q);var Z=K;var $=function(r){return"number"==typeof r},rr=Number,tr=rr.prototype.toString;var er=y,nr=rr,or=function(r){try{return tr.call(r),!0}catch(r){return!1}},ir=e();var ur=function(r){return"object"==typeof r&&(r instanceof nr||(ir?or(r):"[object Number]"===er(r)))},fr=$,cr=ur;var ar=X,lr=function(r){return fr(r)||cr(r)},pr=ur;ar(lr,"isPrimitive",$),ar(lr,"isObject",pr);var vr=lr;var sr=function(r){return r!=r},yr=vr.isPrimitive,br=sr;var gr=function(r){return yr(r)&&br(r)},dr=vr.isObject,mr=sr;var hr=function(r){return dr(r)&&mr(r.valueOf())},jr=gr,wr=hr;var _r=X,Or=function(r){return jr(r)||wr(r)},Sr=hr;_r(Or,"isPrimitive",gr),_r(Or,"isObject",Sr);var Pr=Or,Er=Number.POSITIVE_INFINITY,Ir=rr.NEGATIVE_INFINITY,Tr=Math.floor;var Ar=function(r){return Tr(r)===r},kr=Er,xr=Ir,Nr=Ar;var Br=function(r){return r<kr&&r>xr&&Nr(r)},Vr=vr.isPrimitive,Fr=Br;var Gr=function(r){return Vr(r)&&Fr(r)},Lr=vr.isObject,Mr=Br;var Cr=function(r){return Lr(r)&&Mr(r.valueOf())},Xr=Gr,Yr=Cr;var Dr=X,Hr=function(r){return Xr(r)||Yr(r)},Rr=Cr;Dr(Hr,"isPrimitive",Gr),Dr(Hr,"isObject",Rr);var Wr,zr=Hr,Ur=Object.prototype.propertyIsEnumerable;Wr=!Ur.call("beep","0");var qr=Z,Jr=Pr.isPrimitive,Kr=zr.isPrimitive,Qr=Ur,Zr=Wr;var $r=function(r,t){var e;return null!=r&&(!(e=Qr.call(r,t))&&Zr&&qr(r)?!Jr(t=+t)&&Kr(t)&&t>=0&&t<r.length:e)},rt=$r,tt=f,et=rt,nt=g,ot=Ar;var it=P?O:function(r){return null!==r&&"object"==typeof r&&!nt(r)&&"number"==typeof r.length&&ot(r.length)&&r.length>=0&&r.length<=4294967295&&tt(r,"callee")&&!et(r,"callee")},ut=it,ft=d,ct=Array.prototype.slice;var at=function(r){return ut(r)?ft(ct.call(r)):ft(r)},lt=g;var pt=function(r){return null!==r&&"object"==typeof r};X(pt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!lt(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(pt));var vt=pt;var st=rt((function(){}),"prototype"),yt=!rt({toString:null},"toString"),bt=Ar;var gt=Pr,dt=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&bt(r.length)&&r.length>=0&&r.length<=9007199254740991},mt=Z.isPrimitive,ht=zr.isPrimitive;var jt=function(r,t,e){var n,o;if(!dt(r)&&!mt(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!ht(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(gt(t)){for(;o<n;o++)if(gt(r[o]))return o}else for(;o<n;o++)if(r[o]===t)return o;return-1},wt=jt,_t=/./;var Ot=function(r){return"boolean"==typeof r},St=Boolean.prototype.toString;var Pt=y,Et=function(r){try{return St.call(r),!0}catch(r){return!1}},It=e();var Tt=function(r){return"object"==typeof r&&(r instanceof Boolean||(It?Et(r):"[object Boolean]"===Pt(r)))},At=Ot,kt=Tt;var xt=X,Nt=function(r){return At(r)||kt(r)},Bt=Tt;xt(Nt,"isPrimitive",Ot),xt(Nt,"isObject",Bt);var Vt=Nt;var Ft=function(){return new Function("return this;")()},Gt="object"==typeof self?self:null,Lt="object"==typeof window?window:null,Mt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ct="object"==typeof Mt?Mt:null;module.exports=Ct;var Xt=Vt.isPrimitive,Yt=Ft,Dt=Gt,Ht=Lt,Rt=r(Object.freeze({__proto__:null}));var Wt=function(r){if(arguments.length){if(!Xt(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Yt()}if(Dt)return Dt;if(Ht)return Ht;if(Rt)return Rt;throw new Error("unexpected error. Unable to resolve global object.")},zt=Wt(),Ut=zt.document&&zt.document.childNodes,qt=Int8Array,Jt=_t,Kt=Ut,Qt=qt;var Zt=function(){return"function"==typeof Jt||"object"==typeof Qt||"function"==typeof Kt};var $t=function(){return/^\s*function\s*([^(]*)/i},re=$t;X(re,"REGEXP",$t());var te=vt;var ee=y,ne=re.REGEXP,oe=function(r){return te(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var ie=function(r){var t,e,n;if(("Object"===(e=ee(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=ne.exec(n.toString()))return t[1]}return oe(r)?"Buffer":e},ue=ie;var fe=ie;var ce=function(r){var t;return null===r?"null":"object"===(t=typeof r)?ue(r).toLowerCase():t},ae=function(r){return fe(r).toLowerCase()},le=Zt()?ae:ce;var pe,ve=function(r){return r.constructor&&r.constructor.prototype===r},se="undefined"==typeof window?void 0:window,ye=f,be=wt,ge=le,de=ve,me=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],he=se;pe=function(){var r;if("undefined"===ge(he))return!1;for(r in he)try{-1===be(me,r)&&ye(he,r)&&null!==he[r]&&"object"===ge(he[r])&&de(he[r])}catch(r){return!0}return!1}();var je="undefined"!=typeof window,we=pe,_e=ve,Oe=je;var Se=vt,Pe=f,Ee=it,Ie=st,Te=yt,Ae=function(r){if(!1===Oe&&!we)return _e(r);try{return _e(r)}catch(r){return!1}},ke=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var xe=d,Ne=at,Be=function(r){var t,e,n,o,i,u,f;if(o=[],Ee(r)){for(f=0;f<r.length;f++)o.push(f.toString());return o}if("string"==typeof r){if(r.length>0&&!Pe(r,"0"))for(f=0;f<r.length;f++)o.push(f.toString())}else{if(!1===(n="function"==typeof r)&&!Se(r))return o;e=Ie&&n}for(i in r)e&&"prototype"===i||!Pe(r,i)||o.push(String(i));if(Te)for(t=Ae(r),f=0;f<ke.length;f++)u=ke[f],t&&"constructor"===u||!Pe(r,u)||o.push(String(u));return o},Ve=j?h()?Ne:xe:Be;function Fe(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)}function Ge(r,t){var e;for(e=0;e<r.length;e++)if(r[e]===t)return!0;return!1}function Le(r,t){var e,n,o;if(t.push(r),0===(e=Ve(r)).length)return!1;for(o=0;o<e.length;o++)if(Fe(n=r[e[o]])&&(Ge(t,n)||Le(n,t)))return!0;return t.pop(r),!1}var Me=g,Ce=function(r){return!!Fe(r)&&Le(r,[])};return function(r){return!!Me(r)&&Ce(r)}}));
//# sourceMappingURL=bundle.js.map
