// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.2-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-nulls@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros@v0.2.2-esm/index.mjs";function a(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var s=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,s.get?s:{enumerable:!0,get:function(){return e[t]}})})),r}var u="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function p(){}var d=u.console?u.console:{log:p,info:p,warn:p,error:p,dir:p,assert:p,time:p,timeEnd:p,trace:p},f=a(Object.freeze({__proto__:null,default:d})),h=f.log;function m(){h.apply(f,arguments)}function c(e){var i,o,l,a,u,p,d,f,h,c,g;if(!t(e))throw new TypeError(n("invalid argument. First argument must be a string. Value: `%s`.",e));for(u=arguments.length,l=[],i=[],p=[],c=1;c<u;c++){if(r(f=arguments[c])){l.push(s(f)),p.push(f),i.push(1),d=f.length,c+=1;break}f=[f],l.push(s(f)),p.push(f),i.push(0)}for(void 0===d&&(d=1);c<u;c++){if(r(f=arguments[c])){if(f.length!==d)throw new RangeError("invalid argument. Provided collections must have the same length.");h=1}else f=[f],h=0;l.push(s(f)),p.push(f),i.push(h)}for(a=[e],o=[],c=1;c<u;c++)a.push(null),o.push(0);for(c=0;c<d;c++){for(g=0;g<u-1;g++)a[g+1]=l[g](p[g],o[g]),o[g]+=i[g];m(n.apply(null,a))}}function g(e){var a,u,p,d,f,h,c,g,v,j,b,y,w,x;if(c=arguments.length,!t(e))throw new TypeError(n("invalid argument. First argument must be a string. Value: `%s`.",e));if(i(arguments[c-=1]))v=arguments[c],c-=1;else{if(!i(v=arguments[c-1]))throw new TypeError(n("invalid argument. Callback argument must be a function. Value: `%s`.",v));d=arguments[c],c-=2}for(p=[],a=[],g=[],w=1;w<c+1;w++){if(r(b=arguments[w])){p.push(s(b)),g.push(b),a.push(1),j=b.length,w+=1;break}b=[b],p.push(s(b)),g.push(b),a.push(0)}for(void 0===j&&(j=1);w<c+1;w++){if(r(b=arguments[w])){if(b.length!==j)throw new RangeError("invalid argument. Provided collections must have the same length.");y=1}else b=[b],y=0;p.push(s(b)),g.push(b),a.push(y)}for((h=o(c+2))[0]=e,u=l(c),(f=o(c+2))[c+1]=g,w=0;w<j;w++){for(x=0;x<c;x++)f[x]=p[x](g[x],u[x]),h[x+1]=f[x],u[x]+=a[x];f[c]=w,h[c+1]=v.apply(d,f),m(n.apply(null,h))}}var v={};e(v,"log",m),e(v,"logEach",c),e(v,"logEachMap",g);export{v as default,m as log,c as logEach,g as logEachMap};
//# sourceMappingURL=index.mjs.map
