(self.webpackChunkfun_standups=self.webpackChunkfun_standups||[]).push([[486],{4261:function(t,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var e=r(7294),o=r(5127),u=r(3751),i=r(5325),a=r.n(i),s=r(5029),c=r(5855),f=r(2562),p=function(t){var n=t.tags,r=t.title,o=s.sort((function(){return Math.random()-.5})).filter((function(t){return t.title!==r&&a()(t.tags,n).length})).slice(0,3);return Boolean(o.length)&&e.createElement("aside",{className:"related-standups"},e.createElement("h2",{className:"related-standups--header"},"Try these next"),e.createElement("ul",{className:"standups"},o.map((function(t){return e.createElement(c.Z,{key:t.title,standup:t,tagColors:(0,f.Z)()})}))))},l=function(t){var n=t.pageContext.standup;return e.createElement(o.Z,null,e.createElement(u.Z,{title:""+n.title,description:""+n.summary}),e.createElement("a",{href:"/",className:"back-link"},e.createElement("span",{"aria-hidden":"true"},"← "),"All ideas"),e.createElement("div",{className:"standup-details"},e.createElement("h1",{className:"standup-details--title"},n.title),e.createElement("p",{className:"standup-details--summary"},n.summary),e.createElement("p",null,n.description),e.createElement("ul",null,n.benefits.map((function(t){return e.createElement("li",{key:t.slice(0,10),className:"standup-details--benefit"},t)}))),n.contributor&&n.contributor.github&&e.createElement("p",{className:"standup-details--contributor"},"Contributed by ",e.createElement("a",{href:"https://github.com/"+n.contributor.github,rel:"noopener noreferrer"},n.contributor.github),".")),e.createElement(p,{tags:n.tags,title:n.title}))}},1989:function(t,n,r){var e=r(1789),o=r(401),u=r(7667),i=r(1327),a=r(1866);function s(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}s.prototype.clear=e,s.prototype.delete=o,s.prototype.get=u,s.prototype.has=i,s.prototype.set=a,t.exports=s},8407:function(t,n,r){var e=r(7040),o=r(4125),u=r(2117),i=r(7518),a=r(4705);function s(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}s.prototype.clear=e,s.prototype.delete=o,s.prototype.get=u,s.prototype.has=i,s.prototype.set=a,t.exports=s},7071:function(t,n,r){var e=r(852)(r(5639),"Map");t.exports=e},3369:function(t,n,r){var e=r(4785),o=r(1285),u=r(6e3),i=r(9916),a=r(5265);function s(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}s.prototype.clear=e,s.prototype.delete=o,s.prototype.get=u,s.prototype.has=i,s.prototype.set=a,t.exports=s},8668:function(t,n,r){var e=r(3369),o=r(619),u=r(2385);function i(t){var n=-1,r=null==t?0:t.length;for(this.__data__=new e;++n<r;)this.add(t[n])}i.prototype.add=i.prototype.push=o,i.prototype.has=u,t.exports=i},6874:function(t){t.exports=function(t,n,r){switch(r.length){case 0:return t.call(n);case 1:return t.call(n,r[0]);case 2:return t.call(n,r[0],r[1]);case 3:return t.call(n,r[0],r[1],r[2])}return t.apply(n,r)}},7443:function(t,n,r){var e=r(2118);t.exports=function(t,n){return!!(null==t?0:t.length)&&e(t,n,0)>-1}},1196:function(t){t.exports=function(t,n,r){for(var e=-1,o=null==t?0:t.length;++e<o;)if(r(n,t[e]))return!0;return!1}},9932:function(t){t.exports=function(t,n){for(var r=-1,e=null==t?0:t.length,o=Array(e);++r<e;)o[r]=n(t[r],r,t);return o}},8470:function(t,n,r){var e=r(7813);t.exports=function(t,n){for(var r=t.length;r--;)if(e(t[r][0],n))return r;return-1}},1848:function(t){t.exports=function(t,n,r,e){for(var o=t.length,u=r+(e?1:-1);e?u--:++u<o;)if(n(t[u],u,t))return u;return-1}},2118:function(t,n,r){var e=r(1848),o=r(2722),u=r(2351);t.exports=function(t,n,r){return n==n?u(t,n,r):e(t,o,r)}},7556:function(t,n,r){var e=r(8668),o=r(7443),u=r(1196),i=r(9932),a=r(1717),s=r(4757),c=Math.min;t.exports=function(t,n,r){for(var f=r?u:o,p=t[0].length,l=t.length,h=l,v=Array(l),_=1/0,d=[];h--;){var x=t[h];h&&n&&(x=i(x,a(n))),_=c(x.length,_),v[h]=!r&&(n||p>=120&&x.length>=120)?new e(h&&x):void 0}x=t[0];var y=-1,g=v[0];t:for(;++y<p&&d.length<_;){var m=x[y],b=n?n(m):m;if(m=r||0!==m?m:0,!(g?s(g,b):f(d,b,r))){for(h=l;--h;){var E=v[h];if(!(E?s(E,b):f(t[h],b,r)))continue t}g&&g.push(b),d.push(m)}}return d}},2722:function(t){t.exports=function(t){return t!=t}},8458:function(t,n,r){var e=r(3560),o=r(5346),u=r(3218),i=r(346),a=/^\[object .+?Constructor\]$/,s=Function.prototype,c=Object.prototype,f=s.toString,p=c.hasOwnProperty,l=RegExp("^"+f.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!u(t)||o(t))&&(e(t)?l:a).test(i(t))}},5976:function(t,n,r){var e=r(6557),o=r(5357),u=r(61);t.exports=function(t,n){return u(o(t,n,e),t+"")}},6560:function(t,n,r){var e=r(5703),o=r(8777),u=r(6557),i=o?function(t,n){return o(t,"toString",{configurable:!0,enumerable:!1,value:e(n),writable:!0})}:u;t.exports=i},1717:function(t){t.exports=function(t){return function(n){return t(n)}}},4757:function(t){t.exports=function(t,n){return t.has(n)}},4387:function(t,n,r){var e=r(9246);t.exports=function(t){return e(t)?t:[]}},4429:function(t,n,r){var e=r(5639)["__core-js_shared__"];t.exports=e},8777:function(t,n,r){var e=r(852),o=function(){try{var t=e(Object,"defineProperty");return t({},"",{}),t}catch(n){}}();t.exports=o},5050:function(t,n,r){var e=r(7019);t.exports=function(t,n){var r=t.__data__;return e(n)?r["string"==typeof n?"string":"hash"]:r.map}},852:function(t,n,r){var e=r(8458),o=r(7801);t.exports=function(t,n){var r=o(t,n);return e(r)?r:void 0}},7801:function(t){t.exports=function(t,n){return null==t?void 0:t[n]}},1789:function(t,n,r){var e=r(4536);t.exports=function(){this.__data__=e?e(null):{},this.size=0}},401:function(t){t.exports=function(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}},7667:function(t,n,r){var e=r(4536),o=Object.prototype.hasOwnProperty;t.exports=function(t){var n=this.__data__;if(e){var r=n[t];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(n,t)?n[t]:void 0}},1327:function(t,n,r){var e=r(4536),o=Object.prototype.hasOwnProperty;t.exports=function(t){var n=this.__data__;return e?void 0!==n[t]:o.call(n,t)}},1866:function(t,n,r){var e=r(4536);t.exports=function(t,n){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=e&&void 0===n?"__lodash_hash_undefined__":n,this}},7019:function(t){t.exports=function(t){var n=typeof t;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t}},5346:function(t,n,r){var e,o=r(4429),u=(e=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+e:"";t.exports=function(t){return!!u&&u in t}},7040:function(t){t.exports=function(){this.__data__=[],this.size=0}},4125:function(t,n,r){var e=r(8470),o=Array.prototype.splice;t.exports=function(t){var n=this.__data__,r=e(n,t);return!(r<0)&&(r==n.length-1?n.pop():o.call(n,r,1),--this.size,!0)}},2117:function(t,n,r){var e=r(8470);t.exports=function(t){var n=this.__data__,r=e(n,t);return r<0?void 0:n[r][1]}},7518:function(t,n,r){var e=r(8470);t.exports=function(t){return e(this.__data__,t)>-1}},4705:function(t,n,r){var e=r(8470);t.exports=function(t,n){var r=this.__data__,o=e(r,t);return o<0?(++this.size,r.push([t,n])):r[o][1]=n,this}},4785:function(t,n,r){var e=r(1989),o=r(8407),u=r(7071);t.exports=function(){this.size=0,this.__data__={hash:new e,map:new(u||o),string:new e}}},1285:function(t,n,r){var e=r(5050);t.exports=function(t){var n=e(this,t).delete(t);return this.size-=n?1:0,n}},6e3:function(t,n,r){var e=r(5050);t.exports=function(t){return e(this,t).get(t)}},9916:function(t,n,r){var e=r(5050);t.exports=function(t){return e(this,t).has(t)}},5265:function(t,n,r){var e=r(5050);t.exports=function(t,n){var r=e(this,t),o=r.size;return r.set(t,n),this.size+=r.size==o?0:1,this}},4536:function(t,n,r){var e=r(852)(Object,"create");t.exports=e},5357:function(t,n,r){var e=r(6874),o=Math.max;t.exports=function(t,n,r){return n=o(void 0===n?t.length-1:n,0),function(){for(var u=arguments,i=-1,a=o(u.length-n,0),s=Array(a);++i<a;)s[i]=u[n+i];i=-1;for(var c=Array(n+1);++i<n;)c[i]=u[i];return c[n]=r(s),e(t,this,c)}}},619:function(t){t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},2385:function(t){t.exports=function(t){return this.__data__.has(t)}},61:function(t,n,r){var e=r(6560),o=r(1275)(e);t.exports=o},1275:function(t){var n=Date.now;t.exports=function(t){var r=0,e=0;return function(){var o=n(),u=16-(o-e);if(e=o,u>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(void 0,arguments)}}},2351:function(t){t.exports=function(t,n,r){for(var e=r-1,o=t.length;++e<o;)if(t[e]===n)return e;return-1}},346:function(t){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(r){}try{return t+""}catch(r){}}return""}},5703:function(t){t.exports=function(t){return function(){return t}}},7813:function(t){t.exports=function(t,n){return t===n||t!=t&&n!=n}},6557:function(t){t.exports=function(t){return t}},5325:function(t,n,r){var e=r(9932),o=r(7556),u=r(5976),i=r(4387),a=u((function(t){var n=e(t,i);return n.length&&n[0]===t[0]?o(n):[]}));t.exports=a},8612:function(t,n,r){var e=r(3560),o=r(1780);t.exports=function(t){return null!=t&&o(t.length)&&!e(t)}},9246:function(t,n,r){var e=r(8612),o=r(7005);t.exports=function(t){return o(t)&&e(t)}},3560:function(t,n,r){var e=r(4239),o=r(3218);t.exports=function(t){if(!o(t))return!1;var n=e(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n}},1780:function(t){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},3218:function(t){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}}}]);
//# sourceMappingURL=component---src-components-standup-details-js-5f8da566d668d10e613c.js.map