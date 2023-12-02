"use strict";var c=function(t,s){return function(){return s||t((s={exports:{}}).exports,s),s.exports}};var x=c(function(B,d){"use strict";var q=require("console"),C=q.log;function F(){C.apply(q,arguments)}d.exports=F});var p=c(function(D,w){"use strict";var O=x();w.exports=O});var P=c(function(G,b){"use strict";var S=require("@stdlib/assert/is-string").isPrimitive,y=require("@stdlib/assert/is-collection"),f=require("@stdlib/array/base/accessors"),E=require("@stdlib/string/format"),T=p();function V(t){var s,l,u,g,o,n,v,r,h,i,e,a;if(!S(t))throw new TypeError(E("invalid argument. First argument must be a string. Value: `%s`.",t));for(o=arguments.length,u=[],s=[],n=[],e=1;e<o;e++)if(r=arguments[e],y(r)){i=f(r),u.push(i.accessors[0]),n.push(r),s.push(1),v=r.length,e+=1;break}else r=[r],i=f(r),u.push(i.accessors[0]),n.push(r),s.push(0);for(v===void 0&&(v=1);e<o;e++){if(r=arguments[e],y(r)){if(r.length!==v)throw new RangeError("invalid argument. Provided collections must have the same length.");h=1}else r=[r],h=0;i=f(r),u.push(i.accessors[0]),n.push(r),s.push(h)}for(g=[t],l=[],e=1;e<o;e++)g.push(null),l.push(0);for(e=0;e<v;e++){for(a=0;a<o-1;a++)g[a+1]=u[a](n[a],l[a]),l[a]+=s[a];T(E.apply(null,g))}}b.exports=V});var j=c(function(H,R){"use strict";var z=P();R.exports=z});var k=require("@stdlib/utils/define-read-only-property"),m={};k(m,"log",p());k(m,"logEach",j());module.exports=m;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
