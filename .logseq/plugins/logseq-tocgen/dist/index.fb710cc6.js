var n,l$1,u$1,t$2,r$1,o$2,f$1,e$2={},c$1=[],s$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a$1(n,l){for(var u in l)n[u]=l[u];return n}function h$1(n){var l=n.parentNode;l&&l.removeChild(n);}function v$1(l,u,i){var t,r,o,f={};for(o in u)"key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===f[o]&&(f[o]=l.defaultProps[o]);return y$1(l,f,t,r,null)}function y$1(n,i,t,r,o){var f={type:n,props:i,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++u$1:o};return null==o&&null!=l$1.vnode&&l$1.vnode(f),f}function p$1(){return {current:null}}function d$1(n){return n.children}function _$1(n,l){this.props=n,this.context=l;}function k$2(n,l){if(null==l)return n.__?k$2(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?k$2(n):null}function b$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b$1(n)}}function m$1(n){(!n.__d&&(n.__d=!0)&&t$2.push(n)&&!g$2.__r++||o$2!==l$1.debounceRendering)&&((o$2=l$1.debounceRendering)||r$1)(g$2);}function g$2(){for(var n;g$2.__r=t$2.length;)n=t$2.sort(function(n,l){return n.__v.__b-l.__v.__b}),t$2=[],n.some(function(n){var l,u,i,t,r,o;n.__d&&(r=(t=(l=n).__v).__e,(o=l.__P)&&(u=[],(i=a$1({},t)).__v=t.__v+1,j$2(o,t,i,l.__n,void 0!==o.ownerSVGElement,null!=t.__h?[r]:null,u,null==r?k$2(t):r,t.__h),z$1(u,t),t.__e!=r&&b$1(t)));});}function w$2(n,l,u,i,t,r,o,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c$1,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y$1(null,_,null,null,_):Array.isArray(_)?y$1(d$1,{children:_},null,null,null):_.__b>0?y$1(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null;}j$2(n,_,p=p||e$2,t,r,o,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&_.__k===p.__k?_.__d=s=x$2(_,s,n):s=P$1(n,_,p,w,b,s),"function"==typeof u.type&&(u.__d=s)):s&&p.__e==s&&s.parentNode!=n&&(s=k$2(p));}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k$2(i,h+1)),N$1(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M$1(g[h],g[++h],g[++h]);}function x$2(n,l,u){for(var i,t=n.__k,r=0;t&&r<t.length;r++)(i=t[r])&&(i.__=n,l="function"==typeof i.type?x$2(i,l,u):P$1(u,i,i,t,i.__e,l));return l}function A$2(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){A$2(n,l);}):l.push(n)),l}function P$1(n,l,u,i,t,r){var o,f,e;if(void 0!==l.__d)o=l.__d,l.__d=void 0;else if(null==u||t!=r||null==t.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(t),o=null;else {for(f=r,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,r),o=r;}return void 0!==o?o:t.nextSibling}function C$1(n,l,u,i,t){var r;for(r in u)"children"===r||"key"===r||r in l||H$1(n,r,null,u[r],i);for(r in l)t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||H$1(n,r,l[r],u[r],i);}function $$1(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s$1.test(l)?u:u+"px";}function H$1(n,l,u,i,t){var r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$$1(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?i||n.addEventListener(l,r?T$2:I$1,r):n.removeEventListener(l,r?T$2:I$1,r);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function I$1(n){this.l[n.type+!1](l$1.event?l$1.event(n):n);}function T$2(n){this.l[n.type+!0](l$1.event?l$1.event(n):n);}function j$2(n,u,i,t,r,o,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,o=[e]),(s=l$1.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _$1(m,x),h.constructor=P,h.render=O$1),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a$1({},h.__s)),a$1(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k);});}h.context=x,h.props=m,h.state=h.__s,(s=l$1.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a$1(a$1({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d$1&&null==s.key?s.props.children:s,w$2(n,Array.isArray(A)?A:[A],u,i,t,r,o,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L$1(i.__e,u,i,t,r,o,f,c);(s=l$1.diffed)&&s(u);}catch(n){u.__v=null,(c||null!=o)&&(u.__e=e,u.__h=!!c,o[o.indexOf(e)]=null),l$1.__e(n,u,i);}}function z$1(n,u){l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function L$1(l,u,i,t,r,o,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(r=!0),null!=o)for(;_<o.length;_++)if((s=o[_])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,o[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),o=null,c=!1;}if(null===d)y===p||c&&l.data===p||(l.data=p);else {if(o=o&&n.call(l.childNodes),a=(y=i.props||e$2).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=o)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C$1(l,p,y,r,c),v)u.__k=[];else if(_=u.props.children,w$2(l,Array.isArray(_)?_:[_],u,i,t,r&&"foreignObject"!==d,o,f,o?o[0]:i.__k&&k$2(i,0),c),null!=o)for(_=o.length;_--;)null!=o[_]&&h$1(o[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==y.value||_!==l.value||"progress"===d&&!_)&&H$1(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H$1(l,"checked",_,y.checked,!1));}return l}function M$1(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,i);}}function N$1(n,u,i){var t,r;if(l$1.unmount&&l$1.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M$1(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$1.__e(n,u);}t.base=t.__P=null;}if(t=n.__k)for(r=0;r<t.length;r++)t[r]&&N$1(t[r],u,"function"!=typeof n.type);i||null==n.__e||h$1(n.__e),n.__e=n.__d=void 0;}function O$1(n,l,u){return this.constructor(n,u)}function S$1(u,i,t){var r,o,f;l$1.__&&l$1.__(u,i),o=(r="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j$2(i,u=(!r&&t||i).__k=v$1(d$1,null,[u]),o||e$2,e$2,void 0!==i.ownerSVGElement,!r&&t?[t]:o?null:i.firstChild?n.call(i.childNodes):null,f,!r&&t?t:o?o.__e:i.firstChild,r),z$1(f,u);}function q$1(n,l){S$1(n,l,q$1);}function B$1(l,u,i){var t,r,o,f=a$1({},l.props);for(o in u)"key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),y$1(l.type,f,t||l.key,r||l.ref,null)}function D$1(n,l){var u={__c:l="__cC"+f$1++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(m$1);},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=c$1.slice,l$1={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l;}throw n}},u$1=0,_$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a$1({},this.state),"function"==typeof n&&(n=n(a$1({},u),this.props)),n&&a$1(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m$1(this));},_$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m$1(this));},_$1.prototype.render=d$1,t$2=[],r$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g$2.__r=0,f$1=0;

var o$1=0;function e$1(_,e,n,t,f){var l,s,u={};for(s in e)"ref"==s?l=e[s]:u[s]=e[s];var a={type:_,props:u,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--o$1,__source:t,__self:f};if("function"==typeof _&&(l=_.defaultProps))for(s in l)void 0===u[s]&&(u[s]=l[s]);return l$1.vnode&&l$1.vnode(a),a}

/*! For license information please see lsplugin.user.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.LSPluginEntry=t():e.LSPluginEntry=t();}(self,(function(){return (()=>{var e={227:(e,t,n)=>{var r=n(155);t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let r=0,o=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(r++,"%c"===e&&(o=r));})),t.splice(o,0,n);},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug");}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug");}catch(e){}return !e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG),e},t.useColors=function(){return !("undefined"==typeof window||!window.process||"renderer"!==window.process.type&&!window.process.__nwjs)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return ()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=n(447)(t);const{formatters:o}=e.exports;o.j=function(e){try{return JSON.stringify(e)}catch(e){return "[UnexpectedJSONParseError]: "+e.message}};},447:(e,t,n)=>{e.exports=function(e){function t(e){let n,o=null;function i(...e){if(!i.enabled)return;const r=i,o=Number(new Date),a=o-(n||o);r.diff=a,r.prev=n,r.curr=o,n=o,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let s=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((n,o)=>{if("%%"===n)return "%";s++;const i=t.formatters[o];if("function"==typeof i){const t=e[s];n=i.call(r,t),e.splice(s,1),s--;}return n})),t.formatArgs.call(r,e),(r.log||t.log).apply(r,e);}return i.namespace=e,i.useColors=t.useColors(),i.color=t.selectColor(e),i.extend=r,i.destroy=t.destroy,Object.defineProperty(i,"enabled",{enumerable:!0,configurable:!1,get:()=>null===o?t.enabled(e):o,set:e=>{o=e;}}),"function"==typeof t.init&&t.init(i),i}function r(e,n){const r=t(this.namespace+(void 0===n?":":n)+e);return r.log=this.log,r}function o(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){const e=[...t.names.map(o),...t.skips.map(o).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let n;t.save(e),t.names=[],t.skips=[];const r=("string"==typeof e?e:"").split(/[\s,]+/),o=r.length;for(n=0;n<o;n++)r[n]&&("-"===(e=r[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")));},t.enabled=function(e){if("*"===e[e.length-1])return !0;let n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return !1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return !0;return !1},t.humanize=n(824),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");},Object.keys(e).forEach((n=>{t[n]=e[n];})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t};},856:function(e){e.exports=function(){var e=Object.hasOwnProperty,t=Object.setPrototypeOf,n=Object.isFrozen,r=Object.getPrototypeOf,o=Object.getOwnPropertyDescriptor,i=Object.freeze,a=Object.seal,s=Object.create,c="undefined"!=typeof Reflect&&Reflect,l=c.apply,u=c.construct;l||(l=function(e,t,n){return e.apply(t,n)}),i||(i=function(e){return e}),a||(a=function(e){return e}),u||(u=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var p,f=x(Array.prototype.forEach),d=x(Array.prototype.pop),h=x(Array.prototype.push),m=x(String.prototype.toLowerCase),g=x(String.prototype.match),y=x(String.prototype.replace),v=x(String.prototype.indexOf),b=x(String.prototype.trim),_=x(RegExp.prototype.test),w=(p=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u(p,t)});function x(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return l(e,t,r)}}function C(e,r){t&&t(e,null);for(var o=r.length;o--;){var i=r[o];if("string"==typeof i){var a=m(i);a!==i&&(n(r)||(r[o]=a),i=a);}e[i]=!0;}return e}function S(t){var n=s(null),r=void 0;for(r in t)l(e,t,[r])&&(n[r]=t[r]);return n}function O(e,t){for(;null!==e;){var n=o(e,t);if(n){if(n.get)return x(n.get);if("function"==typeof n.value)return x(n.value)}e=r(e);}return function(e){return console.warn("fallback value for",e),null}}var j=i(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),A=i(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),T=i(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),E=i(["animate","color-profile","cursor","discard","fedropshadow","feimage","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),k=i(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),F=i(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),L=i(["#text"]),I=i(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),M=i(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),N=i(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),R=i(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),z=a(/\{\{[\s\S]*|[\s\S]*\}\}/gm),D=a(/<%[\s\S]*|[\s\S]*%>/gm),P=a(/^data-[\-\w.\u00B7-\uFFFF]/),U=a(/^aria-[\-\w]+$/),$=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),H=a(/^(?:\w+script|data):/i),B=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function G(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var J=function(){return "undefined"==typeof window?null:window},q=function(e,t){if("object"!==(void 0===e?"undefined":W(e))||"function"!=typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J(),n=function(t){return e(t)};if(n.version="2.3.1",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,o=t.document,a=t.DocumentFragment,s=t.HTMLTemplateElement,c=t.Node,l=t.Element,u=t.NodeFilter,p=t.NamedNodeMap,x=void 0===p?t.NamedNodeMap||t.MozNamedAttrMap:p,Z=t.Text,V=t.Comment,K=t.DOMParser,Y=t.trustedTypes,X=l.prototype,Q=O(X,"cloneNode"),ee=O(X,"nextSibling"),te=O(X,"childNodes"),ne=O(X,"parentNode");if("function"==typeof s){var re=o.createElement("template");re.content&&re.content.ownerDocument&&(o=re.content.ownerDocument);}var oe=q(Y,r),ie=oe&&ze?oe.createHTML(""):"",ae=o,se=ae.implementation,ce=ae.createNodeIterator,le=ae.createDocumentFragment,ue=ae.getElementsByTagName,pe=r.importNode,fe={};try{fe=S(o).documentMode?o.documentMode:{};}catch(e){}var de={};n.isSupported="function"==typeof ne&&se&&void 0!==se.createHTMLDocument&&9!==fe;var he=z,me=D,ge=P,ye=U,ve=H,be=B,_e=$,we=null,xe=C({},[].concat(G(j),G(A),G(T),G(k),G(L))),Ce=null,Se=C({},[].concat(G(I),G(M),G(N),G(R))),Oe=null,je=null,Ae=!0,Te=!0,Ee=!1,ke=!1,Fe=!1,Le=!1,Ie=!1,Me=!1,Ne=!1,Re=!0,ze=!1,De=!0,Pe=!0,Ue=!1,$e={},He=null,Be=C({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),We=null,Ge=C({},["audio","video","img","source","image","track"]),Je=null,qe=C({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ze="http://www.w3.org/1998/Math/MathML",Ve="http://www.w3.org/2000/svg",Ke="http://www.w3.org/1999/xhtml",Ye=Ke,Xe=!1,Qe=null,et=o.createElement("form"),tt=function(e){Qe&&Qe===e||(e&&"object"===(void 0===e?"undefined":W(e))||(e={}),e=S(e),we="ALLOWED_TAGS"in e?C({},e.ALLOWED_TAGS):xe,Ce="ALLOWED_ATTR"in e?C({},e.ALLOWED_ATTR):Se,Je="ADD_URI_SAFE_ATTR"in e?C(S(qe),e.ADD_URI_SAFE_ATTR):qe,We="ADD_DATA_URI_TAGS"in e?C(S(Ge),e.ADD_DATA_URI_TAGS):Ge,He="FORBID_CONTENTS"in e?C({},e.FORBID_CONTENTS):Be,Oe="FORBID_TAGS"in e?C({},e.FORBID_TAGS):{},je="FORBID_ATTR"in e?C({},e.FORBID_ATTR):{},$e="USE_PROFILES"in e&&e.USE_PROFILES,Ae=!1!==e.ALLOW_ARIA_ATTR,Te=!1!==e.ALLOW_DATA_ATTR,Ee=e.ALLOW_UNKNOWN_PROTOCOLS||!1,ke=e.SAFE_FOR_TEMPLATES||!1,Fe=e.WHOLE_DOCUMENT||!1,Me=e.RETURN_DOM||!1,Ne=e.RETURN_DOM_FRAGMENT||!1,Re=!1!==e.RETURN_DOM_IMPORT,ze=e.RETURN_TRUSTED_TYPE||!1,Ie=e.FORCE_BODY||!1,De=!1!==e.SANITIZE_DOM,Pe=!1!==e.KEEP_CONTENT,Ue=e.IN_PLACE||!1,_e=e.ALLOWED_URI_REGEXP||_e,Ye=e.NAMESPACE||Ke,ke&&(Te=!1),Ne&&(Me=!0),$e&&(we=C({},[].concat(G(L))),Ce=[],!0===$e.html&&(C(we,j),C(Ce,I)),!0===$e.svg&&(C(we,A),C(Ce,M),C(Ce,R)),!0===$e.svgFilters&&(C(we,T),C(Ce,M),C(Ce,R)),!0===$e.mathMl&&(C(we,k),C(Ce,N),C(Ce,R))),e.ADD_TAGS&&(we===xe&&(we=S(we)),C(we,e.ADD_TAGS)),e.ADD_ATTR&&(Ce===Se&&(Ce=S(Ce)),C(Ce,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&C(Je,e.ADD_URI_SAFE_ATTR),e.FORBID_CONTENTS&&(He===Be&&(He=S(He)),C(He,e.FORBID_CONTENTS)),Pe&&(we["#text"]=!0),Fe&&C(we,["html","head","body"]),we.table&&(C(we,["tbody"]),delete Oe.tbody),i&&i(e),Qe=e);},nt=C({},["mi","mo","mn","ms","mtext"]),rt=C({},["foreignobject","desc","title","annotation-xml"]),ot=C({},A);C(ot,T),C(ot,E);var it=C({},k);C(it,F);var at=function(e){var t=ne(e);t&&t.tagName||(t={namespaceURI:Ke,tagName:"template"});var n=m(e.tagName),r=m(t.tagName);if(e.namespaceURI===Ve)return t.namespaceURI===Ke?"svg"===n:t.namespaceURI===Ze?"svg"===n&&("annotation-xml"===r||nt[r]):Boolean(ot[n]);if(e.namespaceURI===Ze)return t.namespaceURI===Ke?"math"===n:t.namespaceURI===Ve?"math"===n&&rt[r]:Boolean(it[n]);if(e.namespaceURI===Ke){if(t.namespaceURI===Ve&&!rt[r])return !1;if(t.namespaceURI===Ze&&!nt[r])return !1;var o=C({},["title","style","font","a","script"]);return !it[n]&&(o[n]||!ot[n])}return !1},st=function(e){h(n.removed,{element:e});try{e.parentNode.removeChild(e);}catch(t){try{e.outerHTML=ie;}catch(t){e.remove();}}},ct=function(e,t){try{h(n.removed,{attribute:t.getAttributeNode(e),from:t});}catch(e){h(n.removed,{attribute:null,from:t});}if(t.removeAttribute(e),"is"===e&&!Ce[e])if(Me||Ne)try{st(t);}catch(e){}else try{t.setAttribute(e,"");}catch(e){}},lt=function(e){var t=void 0,n=void 0;if(Ie)e="<remove></remove>"+e;else {var r=g(e,/^[\r\n\t ]+/);n=r&&r[0];}var i=oe?oe.createHTML(e):e;if(Ye===Ke)try{t=(new K).parseFromString(i,"text/html");}catch(e){}if(!t||!t.documentElement){t=se.createDocument(Ye,"template",null);try{t.documentElement.innerHTML=Xe?"":i;}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(o.createTextNode(n),a.childNodes[0]||null),Ye===Ke?ue.call(t,Fe?"html":"body")[0]:Fe?t.documentElement:a},ut=function(e){return ce.call(e.ownerDocument||e,e,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null,!1)},pt=function(e){return !(e instanceof Z||e instanceof V||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof x&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI&&"function"==typeof e.insertBefore)},ft=function(e){return "object"===(void 0===c?"undefined":W(c))?e instanceof c:e&&"object"===(void 0===e?"undefined":W(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},dt=function(e,t,r){de[e]&&f(de[e],(function(e){e.call(n,t,r,Qe);}));},ht=function(e){var t=void 0;if(dt("beforeSanitizeElements",e,null),pt(e))return st(e),!0;if(g(e.nodeName,/[\u0080-\uFFFF]/))return st(e),!0;var r=m(e.nodeName);if(dt("uponSanitizeElement",e,{tagName:r,allowedTags:we}),!ft(e.firstElementChild)&&(!ft(e.content)||!ft(e.content.firstElementChild))&&_(/<[/\w]/g,e.innerHTML)&&_(/<[/\w]/g,e.textContent))return st(e),!0;if("select"===r&&_(/<template/i,e.innerHTML))return st(e),!0;if(!we[r]||Oe[r]){if(Pe&&!He[r]){var o=ne(e)||e.parentNode,i=te(e)||e.childNodes;if(i&&o)for(var a=i.length-1;a>=0;--a)o.insertBefore(Q(i[a],!0),ee(e));}return st(e),!0}return e instanceof l&&!at(e)?(st(e),!0):"noscript"!==r&&"noembed"!==r||!_(/<\/no(script|embed)/i,e.innerHTML)?(ke&&3===e.nodeType&&(t=e.textContent,t=y(t,he," "),t=y(t,me," "),e.textContent!==t&&(h(n.removed,{element:e.cloneNode()}),e.textContent=t)),dt("afterSanitizeElements",e,null),!1):(st(e),!0)},mt=function(e,t,n){if(De&&("id"===t||"name"===t)&&(n in o||n in et))return !1;if(Te&&!je[t]&&_(ge,t));else if(Ae&&_(ye,t));else {if(!Ce[t]||je[t])return !1;if(Je[t]);else if(_(_e,y(n,be,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==v(n,"data:")||!We[e])if(Ee&&!_(ve,y(n,be,"")));else if(n)return !1}return !0},gt=function(e){var t=void 0,r=void 0,o=void 0,i=void 0;dt("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ce};for(i=a.length;i--;){var c=t=a[i],l=c.name,u=c.namespaceURI;if(r=b(t.value),o=m(l),s.attrName=o,s.attrValue=r,s.keepAttr=!0,s.forceKeepAttr=void 0,dt("uponSanitizeAttribute",e,s),r=s.attrValue,!s.forceKeepAttr&&(ct(l,e),s.keepAttr))if(_(/\/>/i,r))ct(l,e);else {ke&&(r=y(r,he," "),r=y(r,me," "));var p=e.nodeName.toLowerCase();if(mt(p,o,r))try{u?e.setAttributeNS(u,l,r):e.setAttribute(l,r),d(n.removed);}catch(e){}}}dt("afterSanitizeAttributes",e,null);}},yt=function e(t){var n=void 0,r=ut(t);for(dt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)dt("uponSanitizeShadowNode",n,null),ht(n)||(n.content instanceof a&&e(n.content),gt(n));dt("afterSanitizeShadowDOM",t,null);};return n.sanitize=function(e,o){var i=void 0,s=void 0,l=void 0,u=void 0,p=void 0;if((Xe=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!ft(e)){if("function"!=typeof e.toString)throw w("toString is not a function");if("string"!=typeof(e=e.toString()))throw w("dirty is not a string, aborting")}if(!n.isSupported){if("object"===W(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(ft(e))return t.toStaticHTML(e.outerHTML)}return e}if(Le||tt(o),n.removed=[],"string"==typeof e&&(Ue=!1),Ue);else if(e instanceof c)1===(s=(i=lt("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===s.nodeName||"HTML"===s.nodeName?i=s:i.appendChild(s);else {if(!Me&&!ke&&!Fe&&-1===e.indexOf("<"))return oe&&ze?oe.createHTML(e):e;if(!(i=lt(e)))return Me?null:ie}i&&Ie&&st(i.firstChild);for(var f=ut(Ue?e:i);l=f.nextNode();)3===l.nodeType&&l===u||ht(l)||(l.content instanceof a&&yt(l.content),gt(l),u=l);if(u=null,Ue)return e;if(Me){if(Ne)for(p=le.call(i.ownerDocument);i.firstChild;)p.appendChild(i.firstChild);else p=i;return Re&&(p=pe.call(r,p,!0)),p}var d=Fe?i.outerHTML:i.innerHTML;return ke&&(d=y(d,he," "),d=y(d,me," ")),oe&&ze?oe.createHTML(d):d},n.setConfig=function(e){tt(e),Le=!0;},n.clearConfig=function(){Qe=null,Le=!1;},n.isValidAttribute=function(e,t,n){Qe||tt({});var r=m(e),o=m(t);return mt(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(de[e]=de[e]||[],h(de[e],t));},n.removeHook=function(e){de[e]&&d(de[e]);},n.removeHooks=function(e){de[e]&&(de[e]=[]);},n.removeAllHooks=function(){de={};},n}()}();},729:e=>{var t=Object.prototype.hasOwnProperty,n="~";function r(){}function o(e,t,n){this.fn=e,this.context=t,this.once=n||!1;}function i(e,t,r,i,a){if("function"!=typeof r)throw new TypeError("The listener must be a function");var s=new o(r,i||e,a),c=n?n+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],s]:e._events[c].push(s):(e._events[c]=s,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new r:delete e._events[t];}function s(){this._events=new r,this._eventsCount=0;}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(n=!1)),s.prototype.eventNames=function(){var e,r,o=[];if(0===this._eventsCount)return o;for(r in e=this._events)t.call(e,r)&&o.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(e)):o},s.prototype.listeners=function(e){var t=n?n+e:e,r=this._events[t];if(!r)return [];if(r.fn)return [r.fn];for(var o=0,i=r.length,a=new Array(i);o<i;o++)a[o]=r[o].fn;return a},s.prototype.listenerCount=function(e){var t=n?n+e:e,r=this._events[t];return r?r.fn?1:r.length:0},s.prototype.emit=function(e,t,r,o,i,a){var s=n?n+e:e;if(!this._events[s])return !1;var c,l,u=this._events[s],p=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),p){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,r),!0;case 4:return u.fn.call(u.context,t,r,o),!0;case 5:return u.fn.call(u.context,t,r,o,i),!0;case 6:return u.fn.call(u.context,t,r,o,i,a),!0}for(l=1,c=new Array(p-1);l<p;l++)c[l-1]=arguments[l];u.fn.apply(u.context,c);}else {var f,d=u.length;for(l=0;l<d;l++)switch(u[l].once&&this.removeListener(e,u[l].fn,void 0,!0),p){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,t);break;case 3:u[l].fn.call(u[l].context,t,r);break;case 4:u[l].fn.call(u[l].context,t,r,o);break;default:if(!c)for(f=1,c=new Array(p-1);f<p;f++)c[f-1]=arguments[f];u[l].fn.apply(u[l].context,c);}}return !0},s.prototype.on=function(e,t,n){return i(this,e,t,n,!1)},s.prototype.once=function(e,t,n){return i(this,e,t,n,!0)},s.prototype.removeListener=function(e,t,r,o){var i=n?n+e:e;if(!this._events[i])return this;if(!t)return a(this,i),this;var s=this._events[i];if(s.fn)s.fn!==t||o&&!s.once||r&&s.context!==r||a(this,i);else {for(var c=0,l=[],u=s.length;c<u;c++)(s[c].fn!==t||o&&!s[c].once||r&&s[c].context!==r)&&l.push(s[c]);l.length?this._events[i]=1===l.length?l[0]:l:a(this,i);}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&a(this,t)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=n,s.EventEmitter=s,e.exports=s;},717:e=>{"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e;};},824:e=>{var t=1e3,n=60*t,r=60*n,o=24*r;function i(e,t,n,r){var o=t>=1.5*n;return Math.round(e/n)+" "+r+(o?"s":"")}e.exports=function(e,a){a=a||{};var s,c,l=typeof e;if("string"===l&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var i=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(i){var a=parseFloat(i[1]);switch((i[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*a;case"weeks":case"week":case"w":return 6048e5*a;case"days":case"day":case"d":return a*o;case"hours":case"hour":case"hrs":case"hr":case"h":return a*r;case"minutes":case"minute":case"mins":case"min":case"m":return a*n;case"seconds":case"second":case"secs":case"sec":case"s":return a*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}}}(e);if("number"===l&&isFinite(e))return a.long?(s=e,(c=Math.abs(s))>=o?i(s,c,o,"day"):c>=r?i(s,c,r,"hour"):c>=n?i(s,c,n,"minute"):c>=t?i(s,c,t,"second"):s+" ms"):function(e){var i=Math.abs(e);return i>=o?Math.round(e/o)+"d":i>=r?Math.round(e/r)+"h":i>=n?Math.round(e/n)+"m":i>=t?Math.round(e/t)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))};},520:(e,t,n)=>{var r=n(155),o="win32"===r.platform,i=n(539);function a(e,t){for(var n=[],r=0;r<e.length;r++){var o=e[r];o&&"."!==o&&(".."===o?n.length&&".."!==n[n.length-1]?n.pop():t&&n.push(".."):n.push(o));}return n}function s(e){for(var t=e.length-1,n=0;n<=t&&!e[n];n++);for(var r=t;r>=0&&!e[r];r--);return 0===n&&r===t?e:n>r?[]:e.slice(n,r+1)}var c=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,l=/^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,u={};function p(e){var t=c.exec(e),n=(t[1]||"")+(t[2]||""),r=t[3]||"",o=l.exec(r);return [n,o[1],o[2],o[3]]}function f(e){var t=c.exec(e),n=t[1]||"",r=!!n&&":"!==n[1];return {device:n,isUnc:r,isAbsolute:r||!!t[2],tail:t[3]}}function d(e){return "\\\\"+e.replace(/^[\\\/]+/,"").replace(/[\\\/]+/g,"\\")}u.resolve=function(){for(var e="",t="",n=!1,o=arguments.length-1;o>=-1;o--){var s;if(o>=0?s=arguments[o]:e?(s=r.env["="+e])&&s.substr(0,3).toLowerCase()===e.toLowerCase()+"\\"||(s=e+"\\"):s=r.cwd(),!i.isString(s))throw new TypeError("Arguments to path.resolve must be strings");if(s){var c=f(s),l=c.device,u=c.isUnc,p=c.isAbsolute,h=c.tail;if((!l||!e||l.toLowerCase()===e.toLowerCase())&&(e||(e=l),n||(t=h+"\\"+t,n=p),e&&n))break}}return u&&(e=d(e)),e+(n?"\\":"")+(t=a(t.split(/[\\\/]+/),!n).join("\\"))||"."},u.normalize=function(e){var t=f(e),n=t.device,r=t.isUnc,o=t.isAbsolute,i=t.tail,s=/[\\\/]$/.test(i);return (i=a(i.split(/[\\\/]+/),!o).join("\\"))||o||(i="."),i&&s&&(i+="\\"),r&&(n=d(n)),n+(o?"\\":"")+i},u.isAbsolute=function(e){return f(e).isAbsolute},u.join=function(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(!i.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&e.push(n);}var r=e.join("\\");return /^[\\\/]{2}[^\\\/]/.test(e[0])||(r=r.replace(/^[\\\/]{2,}/,"\\")),u.normalize(r)},u.relative=function(e,t){e=u.resolve(e),t=u.resolve(t);for(var n=e.toLowerCase(),r=t.toLowerCase(),o=s(t.split("\\")),i=s(n.split("\\")),a=s(r.split("\\")),c=Math.min(i.length,a.length),l=c,p=0;p<c;p++)if(i[p]!==a[p]){l=p;break}if(0==l)return t;var f=[];for(p=l;p<i.length;p++)f.push("..");return (f=f.concat(o.slice(l))).join("\\")},u._makeLong=function(e){if(!i.isString(e))return e;if(!e)return "";var t=u.resolve(e);return /^[a-zA-Z]\:\\/.test(t)?"\\\\?\\"+t:/^\\\\[^?.]/.test(t)?"\\\\?\\UNC\\"+t.substring(2):e},u.dirname=function(e){var t=p(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},u.basename=function(e,t){var n=p(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},u.extname=function(e){return p(e)[3]},u.format=function(e){if(!i.isObject(e))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof e);var t=e.root||"";if(!i.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof e.root);var n=e.dir,r=e.base||"";return n?n[n.length-1]===u.sep?n+r:n+u.sep+r:r},u.parse=function(e){if(!i.isString(e))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var t=p(e);if(!t||4!==t.length)throw new TypeError("Invalid path '"+e+"'");return {root:t[0],dir:t[0]+t[1].slice(0,-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}},u.sep="\\",u.delimiter=";";var h=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,m={};function g(e){return h.exec(e).slice(1)}m.resolve=function(){for(var e="",t=!1,n=arguments.length-1;n>=-1&&!t;n--){var o=n>=0?arguments[n]:r.cwd();if(!i.isString(o))throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,t="/"===o[0]);}return (t?"/":"")+(e=a(e.split("/"),!t).join("/"))||"."},m.normalize=function(e){var t=m.isAbsolute(e),n=e&&"/"===e[e.length-1];return (e=a(e.split("/"),!t).join("/"))||t||(e="."),e&&n&&(e+="/"),(t?"/":"")+e},m.isAbsolute=function(e){return "/"===e.charAt(0)},m.join=function(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];if(!i.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&(e+=e?"/"+n:n);}return m.normalize(e)},m.relative=function(e,t){e=m.resolve(e).substr(1),t=m.resolve(t).substr(1);for(var n=s(e.split("/")),r=s(t.split("/")),o=Math.min(n.length,r.length),i=o,a=0;a<o;a++)if(n[a]!==r[a]){i=a;break}var c=[];for(a=i;a<n.length;a++)c.push("..");return (c=c.concat(r.slice(i))).join("/")},m._makeLong=function(e){return e},m.dirname=function(e){var t=g(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},m.basename=function(e,t){var n=g(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},m.extname=function(e){return g(e)[3]},m.format=function(e){if(!i.isObject(e))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof e);var t=e.root||"";if(!i.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof e.root);return (e.dir?e.dir+m.sep:"")+(e.base||"")},m.parse=function(e){if(!i.isString(e))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var t=g(e);if(!t||4!==t.length)throw new TypeError("Invalid path '"+e+"'");return t[1]=t[1]||"",t[2]=t[2]||"",t[3]=t[3]||"",{root:t[0],dir:t[0]+t[1].slice(0,-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}},m.sep="/",m.delimiter=":",e.exports=o?u:m,e.exports.posix=m,e.exports.win32=u;},155:e=>{var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o;}catch(e){t=o;}try{n="function"==typeof clearTimeout?clearTimeout:i;}catch(e){n=i;}}();var s,c=[],l=!1,u=-1;function p(){l&&s&&(l=!1,s.length?c=s.concat(c):u=-1,c.length&&f());}function f(){if(!l){var e=a(p);l=!0;for(var t=c.length;t;){for(s=c,c=[];++u<t;)s&&s[u].run();u=-1,t=c.length;}s=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e);}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e);}}function d(e,t){this.fun=e,this.array=t;}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new d(e,t)),1!==c.length||l||a(f);},d.prototype.run=function(){this.fun.apply(null,this.array);},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return []},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return "/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0};},384:e=>{e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8};},539:(e,t,n)=>{var r=n(155),o=/%[sdj%]/g;t.format=function(e){if(!y(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(s(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,i=r.length,a=String(e).replace(o,(function(e){if("%%"===e)return "%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return "[Circular]"}default:return e}})),c=r[n];n<i;c=r[++n])m(c)||!_(c)?a+=" "+c:a+=" "+s(c);return a},t.deprecate=function(e,o){if(v(n.g.process))return function(){return t.deprecate(e,o).apply(this,arguments)};if(!0===r.noDeprecation)return e;var i=!1;return function(){if(!i){if(r.throwDeprecation)throw new Error(o);r.traceDeprecation?console.trace(o):console.error(o),i=!0;}return e.apply(this,arguments)}};var i,a={};function s(e,n){var r={seen:[],stylize:l};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),h(n)?r.showHidden=n:n&&t._extend(r,n),v(r.showHidden)&&(r.showHidden=!1),v(r.depth)&&(r.depth=2),v(r.colors)&&(r.colors=!1),v(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=c),u(r,e,r.depth)}function c(e,t){var n=s.styles[t];return n?"["+s.colors[n][0]+"m"+e+"["+s.colors[n][1]+"m":e}function l(e,t){return e}function u(e,n,r){if(e.customInspect&&n&&C(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return y(o)||(o=u(e,o,r)),o}var i=function(e,t){if(v(t))return e.stylize("undefined","undefined");if(y(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return g(t)?e.stylize(""+t,"number"):h(t)?e.stylize(""+t,"boolean"):m(t)?e.stylize("null","null"):void 0}(e,n);if(i)return i;var a=Object.keys(n),s=function(e){var t={};return e.forEach((function(e,n){t[e]=!0;})),t}(a);if(e.showHidden&&(a=Object.getOwnPropertyNames(n)),x(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return p(n);if(0===a.length){if(C(n)){var c=n.name?": "+n.name:"";return e.stylize("[Function"+c+"]","special")}if(b(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(w(n))return e.stylize(Date.prototype.toString.call(n),"date");if(x(n))return p(n)}var l,_="",S=!1,O=["{","}"];return d(n)&&(S=!0,O=["[","]"]),C(n)&&(_=" [Function"+(n.name?": "+n.name:"")+"]"),b(n)&&(_=" "+RegExp.prototype.toString.call(n)),w(n)&&(_=" "+Date.prototype.toUTCString.call(n)),x(n)&&(_=" "+p(n)),0!==a.length||S&&0!=n.length?r<0?b(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),l=S?function(e,t,n,r,o){for(var i=[],a=0,s=t.length;a<s;++a)T(t,String(a))?i.push(f(e,t,n,r,String(a),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(f(e,t,n,r,o,!0));})),i}(e,n,r,s,a):a.map((function(t){return f(e,n,r,s,t,S)})),e.seen.pop(),function(e,t,n){return e.reduce((function(e,t){return t.indexOf("\n"),e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}(l,_,O)):O[0]+_+O[1]}function p(e){return "["+Error.prototype.toString.call(e)+"]"}function f(e,t,n,r,o,i){var a,s,c;if((c=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?s=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(s=e.stylize("[Setter]","special")),T(r,o)||(a="["+o+"]"),s||(e.seen.indexOf(c.value)<0?(s=m(n)?u(e,c.value,null):u(e,c.value,n-1)).indexOf("\n")>-1&&(s=i?s.split("\n").map((function(e){return "  "+e})).join("\n").substr(2):"\n"+s.split("\n").map((function(e){return "   "+e})).join("\n")):s=e.stylize("[Circular]","special")),v(a)){if(i&&o.match(/^\d+$/))return s;(a=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"));}return a+": "+s}function d(e){return Array.isArray(e)}function h(e){return "boolean"==typeof e}function m(e){return null===e}function g(e){return "number"==typeof e}function y(e){return "string"==typeof e}function v(e){return void 0===e}function b(e){return _(e)&&"[object RegExp]"===S(e)}function _(e){return "object"==typeof e&&null!==e}function w(e){return _(e)&&"[object Date]"===S(e)}function x(e){return _(e)&&("[object Error]"===S(e)||e instanceof Error)}function C(e){return "function"==typeof e}function S(e){return Object.prototype.toString.call(e)}function O(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(v(i)&&(i=r.env.NODE_DEBUG||""),e=e.toUpperCase(),!a[e])if(new RegExp("\\b"+e+"\\b","i").test(i)){var n=r.pid;a[e]=function(){var r=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,r);};}else a[e]=function(){};return a[e]},t.inspect=s,s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},s.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=d,t.isBoolean=h,t.isNull=m,t.isNullOrUndefined=function(e){return null==e},t.isNumber=g,t.isString=y,t.isSymbol=function(e){return "symbol"==typeof e},t.isUndefined=v,t.isRegExp=b,t.isObject=_,t.isDate=w,t.isError=x,t.isFunction=C,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(384);var j=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function A(){var e=new Date,t=[O(e.getHours()),O(e.getMinutes()),O(e.getSeconds())].join(":");return [e.getDate(),j[e.getMonth()],t].join(" ")}function T(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",A(),t.format.apply(t,arguments));},t.inherits=n(717),t._extend=function(e,t){if(!t||!_(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e};}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]});},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});};var r={};return (()=>{n.r(r),n.d(r,{LSPluginUser:()=>Rt,setupPluginUserInstance:()=>zt});var e=n(520);n(856);const t=function(e,t){return e===t||e!=e&&t!=t},o=function(e,n){for(var r=e.length;r--;)if(t(e[r][0],n))return r;return -1};var i=Array.prototype.splice;function a(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1]);}}a.prototype.clear=function(){this.__data__=[],this.size=0;},a.prototype.delete=function(e){var t=this.__data__,n=o(t,e);return !(n<0||(n==t.length-1?t.pop():i.call(t,n,1),--this.size,0))},a.prototype.get=function(e){var t=this.__data__,n=o(t,e);return n<0?void 0:t[n][1]},a.prototype.has=function(e){return o(this.__data__,e)>-1},a.prototype.set=function(e,t){var n=this.__data__,r=o(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};const s=a,c="object"==typeof global&&global&&global.Object===Object&&global;var l="object"==typeof self&&self&&self.Object===Object&&self;const u=c||l||Function("return this")(),p=u.Symbol;var f=Object.prototype,d=f.hasOwnProperty,h=f.toString,m=p?p.toStringTag:void 0;var g=Object.prototype.toString;var y=p?p.toStringTag:void 0;const v=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":y&&y in Object(e)?function(e){var t=d.call(e,m),n=e[m];try{e[m]=void 0;var r=!0;}catch(e){}var o=h.call(e);return r&&(t?e[m]=n:delete e[m]),o}(e):function(e){return g.call(e)}(e)},b=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},_=function(e){if(!b(e))return !1;var t=v(e);return "[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},w=u["__core-js_shared__"];var x,C=(x=/[^.]+$/.exec(w&&w.keys&&w.keys.IE_PROTO||""))?"Symbol(src)_1."+x:"";var S=Function.prototype.toString;var O=/^\[object .+?Constructor\]$/,j=Function.prototype,A=Object.prototype,T=j.toString,E=A.hasOwnProperty,k=RegExp("^"+T.call(E).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const F=function(e){return !(!b(e)||(t=e,C&&C in t))&&(_(e)?k:O).test(function(e){if(null!=e){try{return S.call(e)}catch(e){}try{return e+""}catch(e){}}return ""}(e));var t;},L=function(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return F(n)?n:void 0},I=L(u,"Map"),M=L(Object,"create");var N=Object.prototype.hasOwnProperty;var R=Object.prototype.hasOwnProperty;function z(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1]);}}z.prototype.clear=function(){this.__data__=M?M(null):{},this.size=0;},z.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},z.prototype.get=function(e){var t=this.__data__;if(M){var n=t[e];return "__lodash_hash_undefined__"===n?void 0:n}return N.call(t,e)?t[e]:void 0},z.prototype.has=function(e){var t=this.__data__;return M?void 0!==t[e]:R.call(t,e)},z.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=M&&void 0===t?"__lodash_hash_undefined__":t,this};const D=z,P=function(e,t){var n,r,o=e.__data__;return ("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof t?"string":"hash"]:o.map};function U(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1]);}}U.prototype.clear=function(){this.size=0,this.__data__={hash:new D,map:new(I||s),string:new D};},U.prototype.delete=function(e){var t=P(this,e).delete(e);return this.size-=t?1:0,t},U.prototype.get=function(e){return P(this,e).get(e)},U.prototype.has=function(e){return P(this,e).has(e)},U.prototype.set=function(e,t){var n=P(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};const $=U;function H(e){var t=this.__data__=new s(e);this.size=t.size;}H.prototype.clear=function(){this.__data__=new s,this.size=0;},H.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},H.prototype.get=function(e){return this.__data__.get(e)},H.prototype.has=function(e){return this.__data__.has(e)},H.prototype.set=function(e,t){var n=this.__data__;if(n instanceof s){var r=n.__data__;if(!I||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new $(r);}return n.set(e,t),this.size=n.size,this};const B=H,W=function(){try{var e=L(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),G=function(e,t,n){"__proto__"==t&&W?W(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n;},J=function(e,n,r){(void 0!==r&&!t(e[n],r)||void 0===r&&!(n in e))&&G(e,n,r);},q=function(e,t,n){for(var r=-1,o=Object(e),i=n(e),a=i.length;a--;){var s=i[++r];if(!1===t(o[s],s,o))break}return e};var Z="object"==typeof exports&&exports&&!exports.nodeType&&exports,V=Z&&"object"==typeof module&&module&&!module.nodeType&&module,K=V&&V.exports===Z?u.Buffer:void 0,Y=K?K.allocUnsafe:void 0;const X=u.Uint8Array,Q=function(e,t){var n,r,o=t?(n=e.buffer,r=new n.constructor(n.byteLength),new X(r).set(new X(n)),r):e.buffer;return new e.constructor(o,e.byteOffset,e.length)};var ee=Object.create;const te=function(){function e(){}return function(t){if(!b(t))return {};if(ee)return ee(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),ne=(re=Object.getPrototypeOf,oe=Object,function(e){return re(oe(e))});var re,oe,ie=Object.prototype;const ae=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||ie)},se=function(e){return null!=e&&"object"==typeof e},ce=function(e){return se(e)&&"[object Arguments]"==v(e)};var le=Object.prototype,ue=le.hasOwnProperty,pe=le.propertyIsEnumerable;const fe=ce(function(){return arguments}())?ce:function(e){return se(e)&&ue.call(e,"callee")&&!pe.call(e,"callee")},de=Array.isArray,he=function(e){return "number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},me=function(e){return null!=e&&he(e.length)&&!_(e)};var ge="object"==typeof exports&&exports&&!exports.nodeType&&exports,ye=ge&&"object"==typeof module&&module&&!module.nodeType&&module,ve=ye&&ye.exports===ge?u.Buffer:void 0;const be=(ve?ve.isBuffer:void 0)||function(){return !1};var _e=Function.prototype,we=Object.prototype,xe=_e.toString,Ce=we.hasOwnProperty,Se=xe.call(Object);var Oe={};Oe["[object Float32Array]"]=Oe["[object Float64Array]"]=Oe["[object Int8Array]"]=Oe["[object Int16Array]"]=Oe["[object Int32Array]"]=Oe["[object Uint8Array]"]=Oe["[object Uint8ClampedArray]"]=Oe["[object Uint16Array]"]=Oe["[object Uint32Array]"]=!0,Oe["[object Arguments]"]=Oe["[object Array]"]=Oe["[object ArrayBuffer]"]=Oe["[object Boolean]"]=Oe["[object DataView]"]=Oe["[object Date]"]=Oe["[object Error]"]=Oe["[object Function]"]=Oe["[object Map]"]=Oe["[object Number]"]=Oe["[object Object]"]=Oe["[object RegExp]"]=Oe["[object Set]"]=Oe["[object String]"]=Oe["[object WeakMap]"]=!1;var je="object"==typeof exports&&exports&&!exports.nodeType&&exports,Ae=je&&"object"==typeof module&&module&&!module.nodeType&&module,Te=Ae&&Ae.exports===je&&c.process,Ee=function(){try{return Ae&&Ae.require&&Ae.require("util").types||Te&&Te.binding&&Te.binding("util")}catch(e){}}(),ke=Ee&&Ee.isTypedArray;const Fe=ke?function(e){return function(t){return e(t)}}(ke):function(e){return se(e)&&he(e.length)&&!!Oe[v(e)]},Le=function(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]};var Ie=Object.prototype.hasOwnProperty;const Me=function(e,n,r){var o=e[n];Ie.call(e,n)&&t(o,r)&&(void 0!==r||n in e)||G(e,n,r);};var Ne=/^(?:0|[1-9]\d*)$/;const Re=function(e,t){var n=typeof e;return !!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Ne.test(e))&&e>-1&&e%1==0&&e<t};var ze=Object.prototype.hasOwnProperty;const De=function(e,t){var n=de(e),r=!n&&fe(e),o=!n&&!r&&be(e),i=!n&&!r&&!o&&Fe(e),a=n||r||o||i,s=a?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],c=s.length;for(var l in e)!t&&!ze.call(e,l)||a&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||Re(l,c))||s.push(l);return s};var Pe=Object.prototype.hasOwnProperty;const Ue=function(e){if(!b(e))return function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}(e);var t=ae(e),n=[];for(var r in e)("constructor"!=r||!t&&Pe.call(e,r))&&n.push(r);return n},$e=function(e){return me(e)?De(e,!0):Ue(e)},He=function(e){return function(e,t,n,r){var o=!n;n||(n={});for(var i=-1,a=t.length;++i<a;){var s=t[i],c=r?r(n[s],e[s],s,n,e):void 0;void 0===c&&(c=e[s]),o?G(n,s,c):Me(n,s,c);}return n}(e,$e(e))},Be=function(e,t,n,r,o,i,a){var s,c=Le(e,n),l=Le(t,n),u=a.get(l);if(u)J(e,n,u);else {var p=i?i(c,l,n+"",e,t,a):void 0,f=void 0===p;if(f){var d=de(l),h=!d&&be(l),m=!d&&!h&&Fe(l);p=l,d||h||m?de(c)?p=c:se(s=c)&&me(s)?p=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}(c):h?(f=!1,p=function(e,t){if(t)return e.slice();var n=e.length,r=Y?Y(n):new e.constructor(n);return e.copy(r),r}(l,!0)):m?(f=!1,p=Q(l,!0)):p=[]:function(e){if(!se(e)||"[object Object]"!=v(e))return !1;var t=ne(e);if(null===t)return !0;var n=Ce.call(t,"constructor")&&t.constructor;return "function"==typeof n&&n instanceof n&&xe.call(n)==Se}(l)||fe(l)?(p=c,fe(c)?p=He(c):b(c)&&!_(c)||(p=function(e){return "function"!=typeof e.constructor||ae(e)?{}:te(ne(e))}(l))):f=!1;}f&&(a.set(l,p),o(p,l,r,i,a),a.delete(l)),J(e,n,p);}},We=function e(t,n,r,o,i){t!==n&&q(n,(function(a,s){if(i||(i=new B),b(a))Be(t,n,s,r,e,o,i);else {var c=o?o(Le(t,s),a,s+"",t,n,i):void 0;void 0===c&&(c=a),J(t,s,c);}}),$e);},Ge=function(e){return e},Je=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)};var qe=Math.max;const Ze=W?function(e,t){return W(e,"toString",{configurable:!0,enumerable:!1,value:(n=t,function(){return n}),writable:!0});var n;}:Ge;var Ve=Date.now;const Ke=function(e){var t=0,n=0;return function(){var r=Ve(),o=16-(r-n);if(n=r,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}(Ze),Ye=(Qe=function(e,t,n){We(e,t,n);},function(e,t){return Ke(function(e,t,n){return t=qe(void 0===t?e.length-1:t,0),function(){for(var r=arguments,o=-1,i=qe(r.length-t,0),a=Array(i);++o<i;)a[o]=r[t+o];o=-1;for(var s=Array(t+1);++o<t;)s[o]=r[o];return s[t]=n(a),Je(e,this,s)}}(e,t,Ge),e+"")}((function(e,n){var r=-1,o=n.length,i=o>1?n[o-1]:void 0,a=o>2?n[2]:void 0;for(i=Qe.length>3&&"function"==typeof i?(o--,i):void 0,a&&function(e,n,r){if(!b(r))return !1;var o=typeof n;return !!("number"==o?me(r)&&Re(n,r.length):"string"==o&&n in r)&&t(r[n],e)}(n[0],n[1],a)&&(i=o<3?void 0:i,o=1),e=Object(e);++r<o;){var s=n[r];s&&Qe(e,s,r);}return e}))),Xe="win32"===navigator.platform.toLowerCase()?e.win32:e.posix;var Qe;const et=Ye;function tt(e,t){let n,r,o=!1;const i=t=>n=>{e&&clearTimeout(e),t(n),o=!0;},a=new Promise(((o,a)=>{n=i(o),r=i(a),e&&(e=setTimeout((()=>r(new Error(`[deferred timeout] ${t}`))),e));}));return {created:Date.now(),setTag:e=>t=e,resolve:n,reject:r,promise:a,get settled(){return o}}}var nt=n(227),rt=n.n(nt);const ot="application/x-postmate-v1+json";let it=0;const at={handshake:1,"handshake-reply":1,call:1,emit:1,reply:1,request:1},st=(e,t)=>!("string"==typeof t&&e.origin!==t||!e.data||"object"==typeof e.data&&!("postmate"in e.data)||e.data.type!==ot||!at[e.data.postmate]);class ct{parent;frame;child;events={};childOrigin;listener;constructor(e){this.parent=e.parent,this.frame=e.frame,this.child=e.child,this.childOrigin=e.childOrigin,this.listener=e=>{if(!st(e,this.childOrigin))return !1;const{data:t,name:n}=((e||{}).data||{}).value||{};"emit"===e.data.postmate&&n in this.events&&this.events[n].forEach((e=>{e.call(this,t);}));},this.parent.addEventListener("message",this.listener,!1);}get(e){return new Promise((t=>{const n=++it,r=e=>{e.data.uid===n&&"reply"===e.data.postmate&&(this.parent.removeEventListener("message",r,!1),t(e.data.value));};this.parent.addEventListener("message",r,!1),this.child.postMessage({postmate:"request",type:ot,property:e,uid:n},this.childOrigin);}))}call(e,t){this.child.postMessage({postmate:"call",type:ot,property:e,data:t},this.childOrigin);}on(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t);}destroy(){window.removeEventListener("message",this.listener,!1),this.frame.parentNode.removeChild(this.frame);}}class lt{model;parent;parentOrigin;child;constructor(e){this.model=e.model,this.parent=e.parent,this.parentOrigin=e.parentOrigin,this.child=e.child,this.child.addEventListener("message",(e=>{if(!st(e,this.parentOrigin))return;const{property:t,uid:n,data:r}=e.data;"call"!==e.data.postmate?((e,t)=>{const n="function"==typeof e[t]?e[t]():e[t];return Promise.resolve(n)})(this.model,t).then((r=>{e.source.postMessage({property:t,postmate:"reply",type:ot,uid:n,value:r},e.origin);})):t in this.model&&"function"==typeof this.model[t]&&this.model[t](r);}));}emit(e,t){this.parent.postMessage({postmate:"emit",type:ot,value:{name:e,data:t}},this.parentOrigin);}}class ut{static debug=!1;container;parent;frame;child;childOrigin;url;model;static Model;constructor(e){this.container=e.container,this.url=e.url,this.parent=window,this.frame=document.createElement("iframe"),e.id&&(this.frame.id=e.id),e.name&&(this.frame.name=e.name),this.frame.classList.add.apply(this.frame.classList,e.classListArray||[]),this.container.appendChild(this.frame),this.child=this.frame.contentWindow,this.model=e.model||{};}sendHandshake(e){const t=(e=>{const t=document.createElement("a");t.href=e;const n=t.protocol.length>4?t.protocol:window.location.protocol,r=t.host.length?"80"===t.port||"443"===t.port?t.hostname:t.host:window.location.host;return t.origin||`${n}//${r}`})(e=e||this.url);let n,r=0;return new Promise(((o,i)=>{const a=e=>!!st(e,t)&&("handshake-reply"===e.data.postmate?(clearInterval(n),this.parent.removeEventListener("message",a,!1),this.childOrigin=e.origin,o(new ct(this))):i("Failed handshake"));this.parent.addEventListener("message",a,!1);const s=()=>{r++,this.child.postMessage({postmate:"handshake",type:ot,model:this.model},t),5===r&&clearInterval(n);};this.frame.addEventListener("load",(()=>{s(),n=setInterval(s,500);})),this.frame.src=e;}))}}class pt{child;model;parent;parentOrigin;constructor(e){this.child=window,this.model=e,this.parent=this.child.parent;}sendHandshakeReply(){return new Promise(((e,t)=>{const n=r=>{if(r.data.postmate){if("handshake"===r.data.postmate){this.child.removeEventListener("message",n,!1),r.source.postMessage({postmate:"handshake-reply",type:ot},r.origin),this.parentOrigin=r.origin;const t=r.data.model;return t&&Object.keys(t).forEach((e=>{this.model[e]=t[e];})),e(new lt(this))}return t("Handshake Reply Failed")}};this.child.addEventListener("message",n,!1);}))}}var ft=n(729),dt=n.n(ft);const{importHTML:ht,createSandboxContainer:mt}=window.QSandbox||{};function gt(e,t){return e.startsWith("http")?fetch(e,t):(e=e.replace("file://",""),new Promise((async(t,n)=>{try{const n=await window.apis.doAction(["readFile",e]);t({text:()=>n});}catch(e){console.error(e),n(e);}})))}class yt extends(dt()){_pluginLocal;_frame;_root;_loaded=!1;_unmountFns=[];constructor(e){super(),this._pluginLocal=e,e._dispose((()=>{this._unmount();}));}async load(){const{name:e,entry:t}=this._pluginLocal.options;if(this.loaded||!t)return;const{template:n,execScripts:r}=await ht(t,{fetch:gt});this._mount(n,document.body);const o=mt(e,{elementGetter:()=>this._root?.firstChild}).instance.proxy;o.__shadow_mode__=!0,o.LSPluginLocal=this._pluginLocal,o.LSPluginShadow=this,o.LSPluginUser=o.logseq=new Rt(this._pluginLocal.toJSON(),this._pluginLocal.caller);const i=await r(o,!0);this._unmountFns.push(i.unmount),this._loaded=!0;}_mount(e,t){const n=this._frame=document.createElement("div");n.classList.add("lsp-shadow-sandbox"),n.id=this._pluginLocal.id,this._root=n.attachShadow({mode:"open"}),this._root.innerHTML=`<div>${e}</div>`,t.appendChild(n),this.emit("mounted");}_unmount(){for(const e of this._unmountFns)e&&e.call(null);}destroy(){this.frame?.parentNode?.removeChild(this.frame);}get loaded(){return this._loaded}get document(){return this._root?.firstChild}get frame(){return this._frame}}const vt=rt()("LSPlugin:caller"),bt="#await#response#",_t="#lspmsg#error#",wt=e=>`#lspmsg#${e}`;class xt extends(dt()){_pluginLocal;_connected=!1;_parent;_child;_shadow;_status;_userModel={};_call;_callUserModel;_debugTag="";constructor(e){super(),this._pluginLocal=e,e&&(this._debugTag=e.debugTag);}async connectToChild(){if(this._connected)return;const{shadow:e}=this._pluginLocal;e?await this._setupShadowSandbox():await this._setupIframeSandbox();}async connectToParent(e={}){if(this._connected)return;const t=this,n=null!=this._pluginLocal;let o=0;const i=new Map,a=tt(5e3),s=this._extendUserModel({"#lspmsg#ready#":async e=>{s[wt(e?.pid)]=({type:e,payload:n})=>{vt(`[call from host (_call)] ${this._debugTag}`,e,n),t.emit(e,n);},await a.resolve();},"#lspmsg#beforeunload#":async e=>{const n=tt(1e4);t.emit("beforeunload",Object.assign({actor:n},e)),await n.promise;},"#lspmsg#settings#":async({type:e,payload:n})=>{t.emit("settings:changed",n);},"#lspmsg#":async({ns:e,type:n,payload:r})=>{vt(`[call from host (async)] ${this._debugTag}`,e,n,r),e&&e.startsWith("hook")?t.emit(`${e}:${n}`,r):t.emit(n,r);},"#lspmsg#reply#":({_sync:e,result:t})=>{if(vt(`[sync reply] #${e}`,t),i.has(e)){const n=i.get(e);n&&(t?.hasOwnProperty(_t)?n.reject(t[_t]):n.resolve(t),i.delete(e));}},...e});if(n)return await a.promise,JSON.parse(JSON.stringify(this._pluginLocal?.toJSON()));const c=new pt(s).sendHandshakeReply();return this._status="pending",await c.then((e=>{this._child=e,this._connected=!0,this._call=async(t,n={},r)=>{if(r){const e=++o;i.set(e,r),n._sync=e,r.setTag(`async call #${e}`),vt("async call #",e);}return e.emit(wt(s.baseInfo.id),{type:t,payload:n}),r?.promise},this._callUserModel=async(e,t)=>{try{s[e](t);}catch(t){vt(`[model method] #${e} not existed`);}},setInterval((()=>{if(i.size>100)for(const[e,t]of i)t.settled&&i.delete(e);}),18e5);})).finally((()=>{this._status=void 0;})),await a.promise,s.baseInfo}async call(e,t={}){return this._call?.call(this,e,t)}async callAsync(e,t={}){const n=tt(1e4);return this._call?.call(this,e,t,n)}async callUserModel(e,t={}){return this._callUserModel?.call(this,e,t)}async _setupIframeSandbox(){const e=this._pluginLocal,t=e.id,n=new URL(e.options.entry);n.searchParams.set("__v__",e.options.version);const r=document.querySelector(`#${t}`);r&&r.parentElement.removeChild(r);const o=document.createElement("div");o.classList.add("lsp-iframe-sandbox-container"),o.id=t;try{const e=(await this._pluginLocal._loadLayoutsData())?.$$0;if(e){o.dataset.inited_layout="true";const{width:t,height:n,left:r,top:i}=e;Object.assign(o.style,{width:t+"px",height:n+"px",left:r+"px",top:i+"px"});}}catch(e){console.error("[Restore Layout Error]",e);}document.body.appendChild(o);let i,a=new ut({id:t+"_iframe",container:o,url:n.href,classListArray:["lsp-iframe-sandbox"],model:{baseInfo:JSON.parse(JSON.stringify(e.toJSON()))}}).sendHandshake();return this._status="pending",new Promise(((t,n)=>{i=setTimeout((()=>{n(new Error("handshake Timeout"));}),3e3),a.then((n=>{this._parent=n,this._connected=!0,this.emit("connected"),n.on(wt(e.id),(({type:e,payload:t})=>{vt("[call from plugin] ",e,t),this._pluginLocal?.emit(e,t||{});})),this._call=async(...t)=>{await n.call(wt(e.id),{type:t[0],payload:Object.assign(t[1]||{},{$$pid:e.id})});},this._callUserModel=async(e,t)=>{if(e.startsWith(bt))return await n.get(e.replace(bt,""));n.call(e,t);},t(null);})).catch((e=>{n(e);})).finally((()=>{clearTimeout(i);}));})).catch((e=>{throw vt("[iframe sandbox] error",e),e})).finally((()=>{this._status=void 0;}))}async _setupShadowSandbox(){const e=this._pluginLocal,t=this._shadow=new yt(e);try{this._status="pending",await t.load(),this._connected=!0,this.emit("connected"),this._call=async(t,n={},r)=>(r&&(n.actor=r),this._pluginLocal?.emit(t,Object.assign(n,{$$pid:e.id})),r?.promise),this._callUserModel=async(...e)=>{let t=e[0];t?.startsWith(bt)&&(t=t.replace(bt,""));const n=e[1]||{},r=this._userModel[t];"function"==typeof r&&await r.call(null,n);};}catch(e){throw vt("[shadow sandbox] error",e),e}finally{this._status=void 0;}}_extendUserModel(e){return Object.assign(this._userModel,e)}_getSandboxIframeContainer(){return this._parent?.frame.parentNode}_getSandboxShadowContainer(){return this._shadow?.frame.parentNode}_getSandboxIframeRoot(){return this._parent?.frame}_getSandboxShadowRoot(){return this._shadow?.frame}set debugTag(e){this._debugTag=e;}async destroy(){let e=null;this._parent&&(e=this._getSandboxIframeContainer(),await this._parent.destroy()),this._shadow&&(e=this._getSandboxShadowContainer(),this._shadow.destroy()),e?.parentNode.removeChild(e);}}var Ct=function(){return (Ct=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function St(e){return e.toLowerCase()}var Ot=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],jt=/[^A-Z0-9]+/gi;function At(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}class Tt{ctx;constructor(e){this.ctx=e;}get ctxId(){return this.ctx.baseInfo.id}setItem(e,t){return this.ctx.caller.callAsync("api:call",{method:"write-plugin-storage-file",args:[this.ctxId,e,t]})}getItem(e){return this.ctx.caller.callAsync("api:call",{method:"read-plugin-storage-file",args:[this.ctxId,e]})}removeItem(e){return this.ctx.caller.call("api:call",{method:"unlink-plugin-storage-file",args:[this.ctxId,e]})}clear(){return this.ctx.caller.call("api:call",{method:"clear-plugin-storage-files",args:[this.ctxId]})}hasItem(e){return this.ctx.caller.callAsync("api:call",{method:"exist-plugin-storage-file",args:[this.ctxId,e]})}}const Et=Symbol.for("proxy-continue"),kt=rt()("LSPlugin:user");function Ft(e,t,n){if("function"!=typeof n)return !1;const{key:r,label:o,desc:i,palette:a,keybinding:s}=t,c=`SimpleCommandHook${r}${++It}`;this.Editor["on"+c](n),this.caller?.call("api:call",{method:"register-plugin-simple-command",args:[this.baseInfo.id,[{key:r,label:o,type:e,desc:i,keybinding:s},["editor/hook",c]],a]});}const Lt={registerCommand:Ft,registerCommandPalette(e,t){const{key:n,label:r,keybinding:o}=e;return Ft.call(this,"global-palette-command",{key:n,label:r,palette:!0,keybinding:o},t)},registerUIItem(e,t){const n=this.baseInfo.id;this.caller?.call("api:call",{method:"register-plugin-ui-item",args:[n,e,t]});},registerPageMenuItem(e,t){if("function"!=typeof t)return !1;const n=e+"_"+this.baseInfo.id,r=e;Ft.call(this,"page-menu-item",{key:n,label:r},t);},setFullScreen(e){const t=(...e)=>this._callWin("setFullScreen",...e);"toggle"===e?this._callWin("isFullScreen").then((e=>{e?t():t(!0);})):e?t(!0):t();}};let It=0;const Mt={registerSlashCommand(e,t){kt("Register slash command #",this.baseInfo.id,e,t),"function"==typeof t&&(t=[["editor/clear-current-slash",!1],["editor/restore-saved-cursor"],["editor/hook",t]]),t=t.map((e=>{const[t,...n]=e;switch(t){case"editor/hook":let r=n[0],o=()=>{this.caller?.callUserModel(r);};"function"==typeof r&&(o=r);const i=`SlashCommandHook${t}${++It}`;e[1]=i,this.Editor["on"+i](o);}return e})),this.caller?.call("api:call",{method:"register-plugin-slash-command",args:[this.baseInfo.id,[e,t]]});},registerBlockContextMenuItem(e,t){if("function"!=typeof t)return !1;const n=e+"_"+this.baseInfo.id,r=e;Ft.call(this,"block-context-menu-item",{key:n,label:r},t);},scrollToBlockInPage(e,t){const n="block-content-"+t;this.App.pushState("page",{name:e},{anchor:n});}},Nt={};class Rt extends(dt()){_baseInfo;_caller;_settingsSchema;_connected=!1;_ui=new Map;_fileStorage;_beforeunloadCallback;constructor(e,t){super(),this._baseInfo=e,this._caller=t,t.on("sys:ui:visible",(e=>{e?.toggle&&this.toggleMainUI();})),t.on("settings:changed",(e=>{const t=Object.assign({},this.settings),n=Object.assign(this._baseInfo.settings,e);this.emit("settings:changed",{...n},t);})),t.on("beforeunload",(async e=>{const{actor:n,...r}=e,o=this._beforeunloadCallback;try{o&&await o(r),n?.resolve(null);}catch(e){console.debug(`${t.debugTag} [beforeunload] `,e),n?.reject(e);}})),this._fileStorage=new Tt(this);}async ready(e,t){if(!this._connected)try{"function"==typeof e&&(t=e,e={});let n=await this._caller.connectToParent(e);this._connected=!0,n=et(this._baseInfo,n),this._settingsSchema&&(n.settings=function(e,t){const n=(t||[]).reduce(((e,t)=>("default"in t&&(e[t.key]=t.default),e)),{});return Object.assign(n,e)}(n.settings,this._settingsSchema),await this.useSettingsSchema(this._settingsSchema)),n?.id&&(this._caller.debugTag=`#${n.id} [${n.name}]`),t&&t.call(this,n);}catch(e){console.error("[LSPlugin Ready Error]",e);}}ensureConnected(){if(!this._connected)throw new Error("not connected")}beforeunload(e){"function"==typeof e&&(this._beforeunloadCallback=e);}provideModel(e){return this.caller._extendUserModel(e),this}provideTheme(e){return this.caller.call("provider:theme",e),this}provideStyle(e){return this.caller.call("provider:style",e),this}provideUI(e){return this.caller.call("provider:ui",e),this}useSettingsSchema(e){return this.connected&&this.caller.call("settings:schema",{schema:e,isSync:!0}),this._settingsSchema=e,this}updateSettings(e){this.caller.call("settings:update",e);}onSettingsChanged(e){const t="settings:changed";return this.on(t,e),()=>this.off(t,e)}showSettingsUI(){this.caller.call("settings:visible:changed",{visible:!0});}hideSettingsUI(){this.caller.call("settings:visible:changed",{visible:!1});}setMainUIAttrs(e){this.caller.call("main-ui:attrs",e);}setMainUIInlineStyle(e){this.caller.call("main-ui:style",e);}hideMainUI(e){const t={key:0,visible:!1,cursor:e?.restoreEditingCursor};this.caller.call("main-ui:visible",t),this.emit("ui:visible:changed",t),this._ui.set(t.key,t);}showMainUI(e){const t={key:0,visible:!0,autoFocus:e?.autoFocus};this.caller.call("main-ui:visible",t),this.emit("ui:visible:changed",t),this._ui.set(t.key,t);}toggleMainUI(){const e=this._ui.get(0);e&&e.visible?this.hideMainUI():this.showMainUI();}get isMainUIVisible(){const e=this._ui.get(0);return Boolean(e&&e.visible)}get connected(){return this._connected}get baseInfo(){return this._baseInfo}get settings(){return this.baseInfo?.settings}get caller(){return this._caller}resolveResourceFullUrl(e){if(this.ensureConnected(),e)return e=e.replace(/^[.\\/]+/,""),function(e,...t){try{const n=new URL(e);if(!n.origin)throw new Error(null);const r=Xe.join(e.substr(n.origin.length),...t);return n.origin+r}catch(n){return Xe.join(e,...t)}}(this._baseInfo.lsr,e)}_makeUserProxy(e,t){const n=this,r=this.caller;return new Proxy(e,{get(e,o,i){const a=e[o];return function(...e){if(!a||a.apply(n,e)===Et){if(t){const n=o.toString().match(/^(once|off|on)/i);if(null!=n){const o=n[0].toLowerCase(),a=n.input.slice(o.length),c=`hook:${t}:${i=a,void 0===s&&(s={}),function(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,r=void 0===n?Ot:n,o=t.stripRegexp,i=void 0===o?jt:o,a=t.transform,s=void 0===a?St:a,c=t.delimiter,l=void 0===c?" ":c,u=At(At(e,r,"$1\0$2"),i,"\0"),p=0,f=u.length;"\0"===u.charAt(p);)p++;for(;"\0"===u.charAt(f-1);)f--;return u.slice(p,f).split("\0").map(s).join(l)}(e,Ct({delimiter:"."},t))}(i,Ct({delimiter:"_"},s))}`,l=e[0];return r[o](c,l),"off"!==o?()=>r.off(c,l):void 0}}var i,s;return r.callAsync("api:call",{tag:t,method:o,args:e})}}}})}_callWin(...e){return this._caller.callAsync("api:call",{method:"_callMainWin",args:e})}get App(){return this._makeUserProxy(Lt,"app")}get Editor(){return this._makeUserProxy(Mt,"editor")}get DB(){return this._makeUserProxy(Nt)}get FileStorage(){return this._fileStorage}}function zt(e,t){return new Rt(e,t)}if(null==window.__LSP__HOST__){const e=new xt(null);window.logseq=zt({},e);}})(),r})()}));

const DEFAULT_LOCALE = "en";
let locale = DEFAULT_LOCALE;
let translations = {};
async function setup({ urlTemplate, defaultLocale = DEFAULT_LOCALE, builtinTranslations, }) {
    locale = (await logseq.App.getUserConfigs()).preferredLanguage;
    if (locale === defaultLocale)
        return;
    if (builtinTranslations?.[locale] != null) {
        translations = builtinTranslations;
    }
    else {
        const url = urlTemplate.replace("${locale}", locale);
        try {
            const res = await fetch(url);
            if (res.ok) {
                const remoteTranslations = await res.json();
                translations = { [locale]: remoteTranslations };
            }
        }
        catch (err) {
            console.error("translation fetch failed.\n", err);
        }
    }
}
function t$1(key, args) {
    const template = translations[locale]?.[key] ?? key;
    if (args == null)
        return template;
    return Object.entries(args).reduce((str, [name, val]) => str.replaceAll(`\${${name}}`, val), template);
}

const _isArray = Array.isArray;

function curry(fn, args = []) {
  return (..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]);
}

function debounce(func, ms, immediate = false) {
  let timeout;
  return function (...input) {
    const later = function () {
      timeout = null;

      if (!immediate) {
        return func.apply(null, input);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, ms);

    if (callNow) {
      return func.apply(null, input);
    }
  };
}

function reduceFn(reducer, acc, list) {
  if (!_isArray(list)) {
    throw new TypeError('reduce: list must be array or iterable');
  }

  let index = 0;
  const len = list.length;

  while (index < len) {
    acc = reducer(acc, list[index], index, list);
    index++;
  }

  return acc;
}

const reduce = curry(reduceFn);

function multiply(x, y) {
  if (arguments.length === 1) return _y => multiply(x, _y);
  return x * y;
}

reduce(multiply, 1);

var t,u,r,o=0,i=[],c=l$1.__b,f=l$1.__r,e=l$1.diffed,a=l$1.__c,v=l$1.unmount;function m(t,r){l$1.__h&&l$1.__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w$1,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w$1(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}],i.__c=u),i.__}function y(r,o){var i=m(t++,3);!l$1.__s&&k$1(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i));}function h(r,o){var i=m(t++,4);!l$1.__s&&k$1(i.__H,o)&&(i.__=r,i.__H=o,u.__h.push(i));}function s(n){return o=5,d(function(){return {current:n}},[])}function _(n,t,u){o=6,h(function(){"function"==typeof n?n(t()):n&&(n.current=t());},null==u?u:u.concat(n));}function d(n,u){var r=m(t++,7);return k$1(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A$1(n,t){return o=8,d(function(){return n},t)}function F$1(n){var r=u.context[n.__c],o=m(t++,9);return o.c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function T$1(t,u){l$1.useDebugValue&&l$1.useDebugValue(u?u(t):t);}function x$1(){var t;for(i.sort(function(n,t){return n.__v.__b-t.__v.__b});t=i.pop();)if(t.__P)try{t.__H.__h.forEach(g$1),t.__H.__h.forEach(j$1),t.__H.__h=[];}catch(u){t.__H.__h=[],l$1.__e(u,t.__v);}}l$1.__b=function(n){u=null,c&&c(n);},l$1.__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g$1),r.__h.forEach(j$1),r.__h=[]);},l$1.diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===l$1.requestAnimationFrame||((r=l$1.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u));})(x$1)),u=null;},l$1.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g$1),t.__h=t.__h.filter(function(n){return !n.__||j$1(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],l$1.__e(r,t.__v);}}),a&&a(t,u);},l$1.unmount=function(t){v&&v(t);var u,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{g$1(n);}catch(n){u=n;}}),u&&l$1.__e(u,r.__v));};var b="function"==typeof requestAnimationFrame;function g$1(n){var t=u,r=n.__c;"function"==typeof r&&(n.__c=void 0,r()),u=t;}function j$1(n){var t=u;n.__c=n.__(),u=t;}function k$1(n,t){return !n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w$1(n,t){return "function"==typeof t?t(n):t}

function S(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function E(n){this.props=n;}function g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return !r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:C(this.props,n)}function r(t){return this.shouldComponentUpdate=e,v$1(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new _$1).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var w=l$1.__b;l$1.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n);};var R="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function x(n){function t(t,e){var r=S({},t);return delete r.ref,n(r,(e=t.ref||e)&&("object"!=typeof e||"current"in e)?e:null)}return t.$$typeof=R,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var N=function(n,t){return null==n?null:A$2(A$2(n).map(t))},k={map:N,forEach:N,count:function(n){return n?A$2(n).length:0},only:function(n){var t=A$2(n);if(1!==t.length)throw "Children.only";return t[0]},toArray:A$2},A=l$1.__e;l$1.__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);A(n,t,e);};var O=l$1.unmount;function L(){this.__u=0,this.t=null,this.__b=null;}function U(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function F(n){var t,e,r;function u(u){if(t||(t=n()).then(function(n){e=n.default||n;},function(n){r=n;}),r)throw r;if(!e)throw t;return v$1(e,u)}return u.displayName="Lazy",u.__f=!0,u}function M(){this.u=null,this.o=null;}l$1.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n);},(L.prototype=new _$1).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate();}},c=!0===t.__h;r.__u++||c||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i);},L.prototype.componentWillUnmount=function(){this.t=[];},L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),t.__c.__H=null),null!=(t=S({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P);}this.__b=null;}var u=t.__e&&v$1(d$1,null,n.fallback);return u&&(u.__h=null),[v$1(d$1,null,t.__e?null:n.children),u]};var T=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};function D(n){return this.getChildContext=function(){return n.context},n.children}function I(n){var t=this,e=n.i;t.componentWillUnmount=function(){S$1(null,t.l),t.l=null,t.i=null;},t.i&&t.i!==e&&t.componentWillUnmount(),n.__v?(t.l||(t.i=e,t.l={nodeType:1,parentNode:e,childNodes:[],appendChild:function(n){this.childNodes.push(n),t.i.appendChild(n);},insertBefore:function(n,e){this.childNodes.push(n),t.i.appendChild(n);},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),t.i.removeChild(n);}}),S$1(v$1(D,{context:t.context},n.__v),t.l)):t.l&&t.componentWillUnmount();}function W(n,t){return v$1(I,{__v:n,i:t})}(M.prototype=new _$1).__e=function(n){var t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),T(t,n,r)):u();};e?e(o):o();}},M.prototype.render=function(n){this.u=null,this.o=new Map;var t=A$2(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},M.prototype.componentDidUpdate=M.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){T(n,e,t);});};var j="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V="undefined"!=typeof document,z=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function B(n,t,e){return null==t.__k&&(t.textContent=""),S$1(n,t),"function"==typeof e&&e(),n?n.__c:null}function $(n,t,e){return q$1(n,t),"function"==typeof e&&e(),n?n.__c:null}_$1.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(_$1.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t});}});});var H=l$1.event;function Z(){}function Y(){return this.cancelBubble}function q(){return this.defaultPrevented}l$1.event=function(n){return H&&(n=H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=q,n.nativeEvent=n};var G,J={configurable:!0,get:function(){return this.class}},K=l$1.vnode;l$1.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){var u=-1===t.indexOf("-");for(var o in r={},e){var i=e[o];V&&"children"===o&&"noscript"===t||"value"===o&&"defaultValue"in e&&null==i||("defaultValue"===o&&"value"in e&&null==e.value?o="value":"download"===o&&!0===i?i="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!z(e.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():u&&P.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===i&&(i=void 0),r[o]=i);}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=A$2(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value);})),"select"==t&&null!=r.defaultValue&&(r.value=A$2(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value;})),n.props=r,e.class!=e.className&&(J.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",J));}n.$$typeof=j,K&&K(n);};var Q=l$1.__r;l$1.__r=function(n){Q&&Q(n),G=n.__c;};var X={ReactCurrentDispatcher:{current:{readContext:function(n){return G.__n[n.__c].props.value}}}};function tn(n){return v$1.bind(null,n)}function en(n){return !!n&&n.$$typeof===j}function rn(n){return en(n)?B$1.apply(null,arguments):n}function un(n){return !!n.__k&&(S$1(null,n),!0)}function on(n){return n&&(n.base||1===n.nodeType&&n)||null}var ln=function(n,t){return n(t)},cn=function(n,t){return n(t)};var React = {useState:l,useReducer:p,useEffect:y,useLayoutEffect:h,useRef:s,useImperativeHandle:_,useMemo:d,useCallback:A$1,useContext:F$1,useDebugValue:T$1,version:"17.0.2",Children:k,render:B,hydrate:$,unmountComponentAtNode:un,createPortal:W,createElement:v$1,createContext:D$1,createFactory:tn,cloneElement:rn,createRef:p$1,Fragment:d$1,isValidElement:en,findDOMNode:on,Component:_$1,PureComponent:E,memo:g,forwardRef:x,flushSync:cn,unstable_batchedUpdates:ln,StrictMode:d$1,Suspense:L,SuspenseList:M,lazy:F,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:X};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/**
 * This hooks allows you to track a value across renderings.
 * It keeps the value during the last rendering or `undefined` if there
 * is no last rendering.
 *
 * Note you can combine multiple uses of this hook if you want to keep
 * history steps deeper, as you can see in the following example.
 *
 * ```js
 * const prevA = usePrev(a)
 * const prevPrevA = usePrev(prevA)
 * ```
 */
function usePrev(val) {
    var prevRef = s();
    y(function () {
        prevRef.current = val;
    });
    return prevRef.current;
}

/**
 * This component keeps the previous rendered view and its state around
 * so when you switch back to it, no render is required and all of its
 * state are retained. It can optionally retain the scroll offset too.
 *
 * Views are associated and identified by `kpvId`. There are 2 ways to
 * render a view, `kpvComponent` or `kpvRender` function and regardless of
 * what you choose to use, you will receive 2 extra props,
 * `kpvRestored` and `kpvScrollElementRef`. `kpvRestored` tells you whether
 * the view to render is "restored", that is, it was kept as the previous
 * view; `kpvScrollElementRef` in the other hand, allows you to "attach" a
 * scrolling DOM element if you want to persist scroll offset.
 *
 * @example
 * ```jsx
 * let view
 *
 * switch (path) {
 * case "/pages/a":
 *   view = <KeepPrevView kpvId="/pages/a" kpvComponent={CompA} />
 *   break
 * case "/pages/b":
 *   view = <KeepPrevView kpvId="/pages/b" kpvComponent={CompB} />
 *   break
 * }
 *
 * // CompA
 * function CompA({kpvRestored, kpvScrollElementRef}) {
 *   useEffect(() => {
 *     kpvScrollElementRef.current = document.body
 *   }, [])
 *
 *   useEffect(() => {
 *     if (kpvRestored) {
 *       // View is showed up again.
 *     }
 *   }, [kpvRestored])
 *
 *   return ...
 * }
 * ```
 */
g(function KeepPrevView(_a) {
    var kpvId = _a.kpvId, kpvComponent = _a.kpvComponent, kpvRender = _a.kpvRender, others = __rest(_a, ["kpvId", "kpvComponent", "kpvRender"]);
    var prevId = usePrev(kpvId);
    var prevPrevId = usePrev(prevId);
    var restored = kpvId === prevPrevId;
    var scrollElementRef = useScrollRestore$1(restored);
    var Comp = kpvComponent;
    var jsx = kpvRender ? (kpvRender(__assign({ kpvRestored: restored, kpvScrollElementRef: scrollElementRef }, others))) : (React.createElement(Comp, __assign({ kpvRestored: restored, kpvScrollElementRef: scrollElementRef }, others)));
    var prevJsx = usePrev(jsx);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { key: prevId, style: { display: "none" } }, prevJsx === undefined
            ? undefined
            : rn(prevJsx, { kpvRestored: false })),
        React.createElement("div", { key: kpvId }, jsx)));
}, function (prev, next) { return prev.kpvId === next.kpvId; });
function useScrollRestore$1(restored) {
    var _a;
    var scrollElementRef = s();
    var prevScrollElement = usePrev(scrollElementRef.current);
    var scrollTopRef = s();
    scrollTopRef.current = (_a = scrollElementRef.current) === null || _a === void 0 ? void 0 : _a.scrollTop;
    var prevScrollTop = usePrev(scrollTopRef.current);
    h(function () {
        if (restored && prevScrollElement != null && prevScrollTop != null) {
            prevScrollElement.scrollTop = prevScrollTop;
        }
    });
    return scrollElementRef;
}

/**
 * This component keeps the specified (`kvId` that starts with `kvPrefix`)
 * rendered view and its state around so when you switch back to it, no
 * render is required and all of its state are retained. It can optionally
 * retain the scroll offset too.
 *
 * Views are associated and identified by `kvId`. There are 2 ways to
 * render a view, `kvComponent` or `kvRender` function and regardless of
 * what you choose to use, you will receive 2 extra props,
 * `kvRestored` and `kvScrollElementRef`. `kvRestored` tells you whether
 * the view to render is "restored", that is, it was kept as the previous
 * view; `kvScrollElementRef` in the other hand, allows you to "attach" a
 * scrolling DOM element if you want to persist scroll offset.
 *
 * @example
 * ```jsx
 * let view
 *
 * switch (path) {
 * case "/pages/a":
 *   view = <KeepView kvPrefix="/pages/a" kvId="/pages/a" kvComponent={CompA} />
 *   break
 * case "/pages/b":
 *   view = <KeepView kvPrefix="/pages/a" kvId="/pages/b" kvComponent={CompB} />
 *   break
 * case "/pages/c":
 *   view = <KeepView kvPrefix="/pages/a" kvId="/pages/c" kvComponent={CompC} />
 *   break
 * }
 *
 * // CompA
 * function CompA({kvRestored, kvScrollElementRef}) {
 *   useEffect(() => {
 *     kvScrollElementRef.current = document.body
 *   }, [])
 *
 *   useEffect(() => {
 *     if (kvRestored) {
 *       // View is showed up again.
 *     }
 *   }, [kvRestored])
 *
 *   return ...
 * }
 * ```
 */
g(function KeepView(_a) {
    var kvId = _a.kvId, kvPrefix = _a.kvPrefix, kvComponent = _a.kvComponent, kvRender = _a.kvRender, others = __rest(_a, ["kvId", "kvPrefix", "kvComponent", "kvRender"]);
    var keptId = s();
    var keptJsx = s();
    var prevId = usePrev(kvId);
    var restored = kvId === keptId.current;
    if (restored) {
        keptId.current = undefined;
        keptJsx.current = undefined;
    }
    var shallKeep = !!(prevId === null || prevId === void 0 ? void 0 : prevId.startsWith(kvPrefix));
    var scrollElementRef = useScrollRestore(shallKeep, restored);
    var Comp = kvComponent;
    var jsx = kvRender ? (kvRender(__assign({ kvRestored: restored, kvScrollElementRef: scrollElementRef }, others))) : (React.createElement(Comp, __assign({ kvRestored: restored, kvScrollElementRef: scrollElementRef }, others)));
    var prevJsx = usePrev(jsx);
    if (shallKeep) {
        keptId.current = prevId;
        keptJsx.current = prevJsx;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { key: keptId.current, style: { display: "none" } }, keptJsx.current === undefined
            ? undefined
            : rn(keptJsx.current, { kvRestored: false })),
        React.createElement("div", { key: kvId }, jsx)));
}, function (prev, next) { return prev.kvId === next.kvId; });
function useScrollRestore(shallKeep, restored) {
    var _a;
    var scrollElementRef = s();
    var scrollTopRef = s();
    var prevScrollTop = usePrev((_a = scrollElementRef.current) === null || _a === void 0 ? void 0 : _a.scrollTop);
    if (shallKeep) {
        scrollTopRef.current = prevScrollTop;
    }
    h(function () {
        if (restored &&
            scrollElementRef.current != null &&
            scrollTopRef.current != null) {
            scrollElementRef.current.scrollTop = scrollTopRef.current;
        }
    });
    return scrollElementRef;
}

/**
 * Join your classes for a component, any non-string values will be excluded.
 *
 * ```js
 * const level = 1
 * const visible = false
 * let dynamicClassName
 *
 * <MyComp
 *   className={cls(
 *     "container",
 *     `level-${level}`,
 *     visible && "visible",
 *     dynamicClassName,
 *   )}
 * />
 *
 * // Will be <MyComp className="container level-1" />
 * ```
 */
function cls() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return (classes.filter(function (c) { return typeof c === "string" && c !== ""; }).join(" ") ||
        undefined);
}

function getGlobal() {
    var g = undefined;
    try {
        g = window;
        return g;
    }
    catch (e) {
        // ignore, try next
    }
    try {
        g = global;
        return g;
    }
    catch (e) {
        // ignore, try next
    }
    return g;
}
getGlobal();

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2022, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */

function getDefaults() {
  return {
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}

let defaults = getDefaults();

function changeDefaults(newDefaults) {
  defaults = newDefaults;
}

/**
 * Helpers
 */
const escapeTest = /[&<>"']/;
const escapeReplace = /[&<>"']/g;
const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
const escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }

  return html;
}

const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

/**
 * @param {string} html
 */
function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

const caret = /(^|[^\[])\^/g;

/**
 * @param {string | RegExp} regex
 * @param {string} opt
 */
function edit(regex, opt) {
  regex = typeof regex === 'string' ? regex : regex.source;
  opt = opt || '';
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, '$1');
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}

const nonWordAndColonTest = /[^\w:]/g;
const originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

/**
 * @param {boolean} sanitize
 * @param {string} base
 * @param {string} href
 */
function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(unescape(href))
        .replace(nonWordAndColonTest, '')
        .toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }
  return href;
}

const baseUrls = {};
const justDomain = /^[^:]+:\/*[^/]*$/;
const protocol = /^([^:]+:)[\s\S]*$/;
const domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

/**
 * @param {string} base
 * @param {string} href
 */
function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (justDomain.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = rtrim(base, '/', true);
    }
  }
  base = baseUrls[' ' + base];
  const relativeBase = base.indexOf(':') === -1;

  if (href.substring(0, 2) === '//') {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, '$1') + href;
  } else if (href.charAt(0) === '/') {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, '$1') + href;
  } else {
    return base + href;
  }
}

const noopTest = { exec: function noopTest() {} };

function merge(obj) {
  let i = 1,
    target,
    key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
      let escaped = false,
        curr = offset;
      while (--curr >= 0 && str[curr] === '\\') escaped = !escaped;
      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
    cells = row.split(/ \|/);
  let i = 0;

  // First/last cell in a row cannot be empty if it has no leading/trailing pipe
  if (!cells[0].trim()) { cells.shift(); }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) { cells.pop(); }

  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) cells.push('');
  }

  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }
  return cells;
}

/**
 * Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
 * /c*$/ is vulnerable to REDOS.
 *
 * @param {string} str
 * @param {string} c
 * @param {boolean} invert Remove suffix of non-c chars instead. Default falsey.
 */
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return '';
  }

  // Length of suffix matching the invert condition.
  let suffLen = 0;

  // Step left until we fail to match the invert condition.
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }

  return str.slice(0, l - suffLen);
}

function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  const l = str.length;
  let level = 0,
    i = 0;
  for (; i < l; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}

function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
  }
}

// copied from https://stackoverflow.com/a/5450113/806777
/**
 * @param {string} pattern
 * @param {number} count
 */
function repeatString(pattern, count) {
  if (count < 1) {
    return '';
  }
  let result = '';
  while (count > 1) {
    if (count & 1) {
      result += pattern;
    }
    count >>= 1;
    pattern += pattern;
  }
  return result + pattern;
}

function outputLink(cap, link, raw, lexer) {
  const href = link.href;
  const title = link.title ? escape(link.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, '$1');

  if (cap[0].charAt(0) !== '!') {
    lexer.state.inLink = true;
    const token = {
      type: 'link',
      raw,
      href,
      title,
      text,
      tokens: lexer.inlineTokens(text, [])
    };
    lexer.state.inLink = false;
    return token;
  }
  return {
    type: 'image',
    raw,
    href,
    title,
    text: escape(text)
  };
}

function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);

  if (matchIndentToCode === null) {
    return text;
  }

  const indentToCode = matchIndentToCode[1];

  return text
    .split('\n')
    .map(node => {
      const matchIndentInNode = node.match(/^\s+/);
      if (matchIndentInNode === null) {
        return node;
      }

      const [indentInNode] = matchIndentInNode;

      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }

      return node;
    })
    .join('\n');
}

/**
 * Tokenizer
 */
class Tokenizer {
  constructor(options) {
    this.options = options || defaults;
  }

  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: 'space',
        raw: cap[0]
      };
    }
  }

  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, '');
      return {
        type: 'code',
        raw: cap[0],
        codeBlockStyle: 'indented',
        text: !this.options.pedantic
          ? rtrim(text, '\n')
          : text
      };
    }
  }

  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || '');

      return {
        type: 'code',
        raw,
        lang: cap[2] ? cap[2].trim() : cap[2],
        text
      };
    }
  }

  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();

      // remove trailing #s
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, '#');
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          // CommonMark requires space before trailing #s
          text = trimmed.trim();
        }
      }

      const token = {
        type: 'heading',
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: 'hr',
        raw: cap[0]
      };
    }
  }

  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ *>[ \t]?/gm, '');

      return {
        type: 'blockquote',
        raw: cap[0],
        tokens: this.lexer.blockTokens(text, []),
        text
      };
    }
  }

  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine,
        line, nextLine, rawLine, itemContents, endEarly;

      let bull = cap[1].trim();
      const isordered = bull.length > 1;

      const list = {
        type: 'list',
        raw: '',
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : '',
        loose: false,
        items: []
      };

      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;

      if (this.options.pedantic) {
        bull = isordered ? bull : '[*+-]';
      }

      // Get next list item
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[\t ][^\\n]*)?(?:\\n|$))`);

      // Check if current bullet point can start a new List Item
      while (src) {
        endEarly = false;
        if (!(cap = itemRegex.exec(src))) {
          break;
        }

        if (this.rules.block.hr.test(src)) { // End list if bullet was actually HR (possibly move into itemRegex?)
          break;
        }

        raw = cap[0];
        src = src.substring(raw.length);

        line = cap[2].split('\n', 1)[0];
        nextLine = src.split('\n', 1)[0];

        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/); // Find first non-space char
          indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }

        blankLine = false;

        if (!line && /^ *$/.test(nextLine)) { // Items begin with at most one blank line
          raw += nextLine + '\n';
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }

        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);

          // Check if following lines should be included in List Item
          while (src) {
            rawLine = src.split('\n', 1)[0];
            line = rawLine;

            // Re-align to follow commonmark nesting rules
            if (this.options.pedantic) {
              line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
            }

            // End list item if found start of new bullet
            if (nextBulletRegex.test(line)) {
              break;
            }

            // Horizontal rule found
            if (hrRegex.test(src)) {
              break;
            }

            if (line.search(/[^ ]/) >= indent || !line.trim()) { // Dedent if possible
              itemContents += '\n' + line.slice(indent);
            } else if (!blankLine) { // Until blank line, item doesn't need indentation
              itemContents += '\n' + line;
            } else { // Otherwise, improper indentation ends this item
              break;
            }

            if (!blankLine && !line.trim()) { // Check if current line is blank
              blankLine = true;
            }

            raw += rawLine + '\n';
            src = src.substring(rawLine.length + 1);
          }
        }

        if (!list.loose) {
          // If the previous item ended with a blank line, the list is loose
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }

        // Check for task list items
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== '[ ] ';
            itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
          }
        }

        list.items.push({
          type: 'list_item',
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });

        list.raw += raw;
      }

      // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic
      list.items[list.items.length - 1].raw = raw.trimRight();
      list.items[list.items.length - 1].text = itemContents.trimRight();
      list.raw = list.raw.trimRight();

      const l = list.items.length;

      // Item child tokens handled here at end because we needed to have the final item to trim it first
      for (i = 0; i < l; i++) {
        this.lexer.state.top = false;
        list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
        const spacers = list.items[i].tokens.filter(t => t.type === 'space');
        const hasMultipleLineBreaks = spacers.every(t => {
          const chars = t.raw.split('');
          let lineBreaks = 0;
          for (const char of chars) {
            if (char === '\n') {
              lineBreaks += 1;
            }
            if (lineBreaks > 1) {
              return true;
            }
          }

          return false;
        });

        if (!list.loose && spacers.length && hasMultipleLineBreaks) {
          // Having a single line break doesn't mean a list is loose. A single line break is terminating the last list item
          list.loose = true;
          list.items[i].loose = true;
        }
      }

      return list;
    }
  }

  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: 'html',
        raw: cap[0],
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      };
      if (this.options.sanitize) {
        token.type = 'paragraph';
        token.text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
        token.tokens = [];
        this.lexer.inline(token.text, token.tokens);
      }
      return token;
    }
  }

  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
      const tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
      return {
        type: 'def',
        tag,
        raw: cap[0],
        href: cap[2],
        title: cap[3]
      };
    }
  }

  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (cap) {
      const item = {
        type: 'table',
        header: splitCells(cap[1]).map(c => { return { text: c }; }),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, '').split('\n') : []
      };

      if (item.header.length === item.align.length) {
        item.raw = cap[0];

        let l = item.align.length;
        let i, j, k, row;
        for (i = 0; i < l; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        l = item.rows.length;
        for (i = 0; i < l; i++) {
          item.rows[i] = splitCells(item.rows[i], item.header.length).map(c => { return { text: c }; });
        }

        // parse child tokens inside headers and cells

        // header child tokens
        l = item.header.length;
        for (j = 0; j < l; j++) {
          item.header[j].tokens = [];
          this.lexer.inline(item.header[j].text, item.header[j].tokens);
        }

        // cell child tokens
        l = item.rows.length;
        for (j = 0; j < l; j++) {
          row = item.rows[j];
          for (k = 0; k < row.length; k++) {
            row[k].tokens = [];
            this.lexer.inline(row[k].text, row[k].tokens);
          }
        }

        return item;
      }
    }
  }

  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      const token = {
        type: 'heading',
        raw: cap[0],
        depth: cap[2].charAt(0) === '=' ? 1 : 2,
        text: cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const token = {
        type: 'paragraph',
        raw: cap[0],
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      const token = {
        type: 'text',
        raw: cap[0],
        text: cap[0],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: 'escape',
        raw: cap[0],
        text: escape(cap[1])
      };
    }
  }

  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }

      return {
        type: this.options.sanitize
          ? 'text'
          : 'html',
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize
          ? (this.options.sanitizer
            ? this.options.sanitizer(cap[0])
            : escape(cap[0]))
          : cap[0]
      };
    }
  }

  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        // commonmark requires matching angle brackets
        if (!(/>$/.test(trimmedUrl))) {
          return;
        }

        // ending angle bracket cannot be escaped
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        // find closing parenthesis
        const lastParenIndex = findClosingBracket(cap[2], '()');
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf('!') === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = '';
        }
      }
      let href = cap[2];
      let title = '';
      if (this.options.pedantic) {
        // split pedantic href and title
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : '';
      }

      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !(/>$/.test(trimmedUrl))) {
          // pedantic allows starting angle bracket without ending angle bracket
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
        title: title ? title.replace(this.rules.inline._escapes, '$1') : title
      }, cap[0], this.lexer);
    }
  }

  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src))
        || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = links[link.toLowerCase()];
      if (!link || !link.href) {
        const text = cap[0].charAt(0);
        return {
          type: 'text',
          raw: text,
          text
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }

  emStrong(src, maskedSrc, prevChar = '') {
    let match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match) return;

    // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u)) return;

    const nextChar = match[1] || match[2] || '';

    if (!nextChar || (nextChar && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar)))) {
      const lLength = match[0].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;

      const endReg = match[0][0] === '*' ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0;

      // Clip maskedSrc to same section of string as src (move to lexer?)
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);

      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];

        if (!rDelim) continue; // skip single * in __abc*abc__

        rLength = rDelim.length;

        if (match[3] || match[4]) { // found another Left Delim
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) { // either Left or Right Delim
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue; // CommonMark Emphasis Rules 9-10
          }
        }

        delimTotal -= rLength;

        if (delimTotal > 0) continue; // Haven't found enough closing delimiters

        // Remove extra characters. *a*** -> *a*
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);

        // Create `em` if smallest delimiter has odd char count. *a***
        if (Math.min(lLength, rLength) % 2) {
          const text = src.slice(1, lLength + match.index + rLength);
          return {
            type: 'em',
            raw: src.slice(0, lLength + match.index + rLength + 1),
            text,
            tokens: this.lexer.inlineTokens(text, [])
          };
        }

        // Create 'strong' if smallest delimiter has even char count. **a***
        const text = src.slice(2, lLength + match.index + rLength - 1);
        return {
          type: 'strong',
          raw: src.slice(0, lLength + match.index + rLength + 1),
          text,
          tokens: this.lexer.inlineTokens(text, [])
        };
      }
    }
  }

  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, ' ');
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape(text, true);
      return {
        type: 'codespan',
        raw: cap[0],
        text
      };
    }
  }

  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: 'br',
        raw: cap[0]
      };
    }
  }

  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: 'del',
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2], [])
      };
    }
  }

  autolink(src, mangle) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === '@') {
        text = escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
        href = 'mailto:' + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }

      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: 'text',
            raw: text,
            text
          }
        ]
      };
    }
  }

  url(src, mangle) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === '@') {
        text = escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
        href = 'mailto:' + text;
      } else {
        // do extended autolink path validation
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = escape(cap[0]);
        if (cap[1] === 'www.') {
          href = 'http://' + text;
        } else {
          href = text;
        }
      }
      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: 'text',
            raw: text,
            text
          }
        ]
      };
    }
  }

  inlineText(src, smartypants) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0])) : cap[0];
      } else {
        text = escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
      }
      return {
        type: 'text',
        raw: cap[0],
        text
      };
    }
  }
}

/**
 * Block-Level Grammar
 */
const block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
    + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
    + '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
    + '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
    + ')',
  def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};

block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def)
  .replace('label', block._label)
  .replace('title', block._title)
  .getRegex();

block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */)
  .replace('bull', block.bullet)
  .getRegex();

block.list = edit(block.list)
  .replace(/bull/g, block.bullet)
  .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
  .replace('def', '\\n+(?=' + block.def.source + ')')
  .getRegex();

block._tag = 'address|article|aside|base|basefont|blockquote|body|caption'
  + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption'
  + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe'
  + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option'
  + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr'
  + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, 'i')
  .replace('comment', block._comment)
  .replace('tag', block._tag)
  .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
  .getRegex();

block.paragraph = edit(block._paragraph)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('|table', '')
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();

block.blockquote = edit(block.blockquote)
  .replace('paragraph', block.paragraph)
  .getRegex();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  table: '^ *([^\\n ].*\\|.*)\\n' // Header
    + ' {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?' // Align
    + '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells
});

block.gfm.table = edit(block.gfm.table)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('blockquote', ' {0,3}>')
  .replace('code', ' {4}[^\\n]')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();

block.gfm.paragraph = edit(block._paragraph)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('table', block.gfm.table) // interrupt paragraphs with table
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();
/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */

block.pedantic = merge({}, block.normal, {
  html: edit(
    '^ *(?:comment *(?:\\n|\\s*$)'
    + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))')
    .replace('comment', block._comment)
    .replace(/tag/g, '(?!(?:'
      + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub'
      + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)'
      + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b')
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest, // fences not supported
  paragraph: edit(block.normal._paragraph)
    .replace('hr', block.hr)
    .replace('heading', ' *#{1,6} *[^\n]')
    .replace('lheading', block.lheading)
    .replace('blockquote', ' {0,3}>')
    .replace('|fences', '')
    .replace('|list', '')
    .replace('|html', '')
    .getRegex()
});

/**
 * Inline-Level Grammar
 */
const inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: '^comment'
    + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>', // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: 'reflink|nolink(?!\\()',
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //          () Skip orphan inside strong  () Consume to delim (1) #***                (2) a***#, a***                   (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
    rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ // ^- Not allowed for _
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};

// list of punctuation marks from CommonMark spec
// without * and _ to handle the different emphasis markers * and _
inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();

// sequences em should skip over [title](link), `code`, <html>
inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline.escapedEmSt = /\\\*|\\_/g;

inline._comment = edit(block._comment).replace('(?:-->|$)', '-->').getRegex();

inline.emStrong.lDelim = edit(inline.emStrong.lDelim)
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, 'g')
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, 'g')
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;

inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink)
  .replace('scheme', inline._scheme)
  .replace('email', inline._email)
  .getRegex();

inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;

inline.tag = edit(inline.tag)
  .replace('comment', inline._comment)
  .replace('attribute', inline._attribute)
  .getRegex();

inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;

inline.link = edit(inline.link)
  .replace('label', inline._label)
  .replace('href', inline._href)
  .replace('title', inline._title)
  .getRegex();

inline.reflink = edit(inline.reflink)
  .replace('label', inline._label)
  .replace('ref', block._label)
  .getRegex();

inline.nolink = edit(inline.nolink)
  .replace('ref', block._label)
  .getRegex();

inline.reflinkSearch = edit(inline.reflinkSearch, 'g')
  .replace('reflink', inline.reflink)
  .replace('nolink', inline.nolink)
  .getRegex();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/)
    .replace('label', inline._label)
    .getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace('label', inline._label)
    .getRegex()
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});

inline.gfm.url = edit(inline.gfm.url, 'i')
  .replace('email', inline.gfm._extended_email)
  .getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text)
    .replace('\\b_', '\\b_| {2,}\\n')
    .replace(/\{2,\}/g, '*')
    .getRegex()
});

/**
 * smartypants text replacement
 * @param {string} text
 */
function smartypants(text) {
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
}

/**
 * mangle email addresses
 * @param {string} text
 */
function mangle(text) {
  let out = '',
    i,
    ch;

  const l = text.length;
  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
}

/**
 * Block Lexer
 */
class Lexer {
  constructor(options) {
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };

    const rules = {
      block: block.normal,
      inline: inline.normal
    };

    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }

  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }

  /**
   * Static Lex Method
   */
  static lex(src, options) {
    const lexer = new Lexer(options);
    return lexer.lex(src);
  }

  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options) {
    const lexer = new Lexer(options);
    return lexer.inlineTokens(src);
  }

  /**
   * Preprocessing
   */
  lex(src) {
    src = src
      .replace(/\r\n|\r/g, '\n');

    this.blockTokens(src, this.tokens);

    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }

    return this.tokens;
  }

  /**
   * Lexing
   */
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, '    ').replace(/^ +$/gm, '');
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + '    '.repeat(tabs.length);
      });
    }

    let token, lastToken, cutSrc, lastParagraphClipped;

    while (src) {
      if (this.options.extensions
        && this.options.extensions.block
        && this.options.extensions.block.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
        continue;
      }

      // newline
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          // if there's a single \n as a spacer, it's terminating the last line,
          // so move it there so that we don't get unecessary paragraph tags
          tokens[tokens.length - 1].raw += '\n';
        } else {
          tokens.push(token);
        }
        continue;
      }

      // code
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        // An indented code block cannot interrupt a paragraph.
        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // fences
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // heading
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // hr
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // blockquote
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // list
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // html
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // def
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }

      // table (gfm)
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // lheading
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // top-level paragraph
      // prevent paragraph consuming extensions by clipping 'src' to extension start
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === 'number' && tempStart >= 0) { startIndex = Math.min(startIndex, tempStart); }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === 'paragraph') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = (cutSrc.length !== src.length);
        src = src.substring(token.raw.length);
        continue;
      }

      // text
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      if (src) {
        const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }

    this.state.top = true;
    return tokens;
  }

  inline(src, tokens) {
    this.inlineQueue.push({ src, tokens });
  }

  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;

    // String with links masked to avoid interference with em and strong
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;

    // Mask out reflinks
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    // Mask out other blocks
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }

    // Mask out escaped em & strong delimiters
    while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    }

    while (src) {
      if (!keepPrevChar) {
        prevChar = '';
      }
      keepPrevChar = false;

      // extensions
      if (this.options.extensions
        && this.options.extensions.inline
        && this.options.extensions.inline.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
        continue;
      }

      // escape
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // tag
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // link
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // reflink, nolink
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // em & strong
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // code
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // br
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // del (gfm)
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // autolink
      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // url (gfm)
      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // text
      // prevent inlineText consuming extensions by clipping 'src' to extension start
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === 'number' && tempStart >= 0) { startIndex = Math.min(startIndex, tempStart); }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== '_') { // Track prevChar before string of ____ started
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      if (src) {
        const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }

    return tokens;
  }
}

/**
 * Renderer
 */
class Renderer {
  constructor(options) {
    this.options = options || defaults;
  }

  code(code, infostring, escaped) {
    const lang = (infostring || '').match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }

    code = code.replace(/\n$/, '') + '\n';

    if (!lang) {
      return '<pre><code>'
        + (escaped ? code : escape(code, true))
        + '</code></pre>\n';
    }

    return '<pre><code class="'
      + this.options.langPrefix
      + escape(lang, true)
      + '">'
      + (escaped ? code : escape(code, true))
      + '</code></pre>\n';
  }

  /**
   * @param {string} quote
   */
  blockquote(quote) {
    return `<blockquote>\n${quote}</blockquote>\n`;
  }

  html(html) {
    return html;
  }

  /**
   * @param {string} text
   * @param {string} level
   * @param {string} raw
   * @param {any} slugger
   */
  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      const id = this.options.headerPrefix + slugger.slug(raw);
      return `<h${level} id="${id}">${text}</h${level}>\n`;
    }

    // ignore IDs
    return `<h${level}>${text}</h${level}>\n`;
  }

  hr() {
    return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
  }

  list(body, ordered, start) {
    const type = ordered ? 'ol' : 'ul',
      startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
    return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
  }

  /**
   * @param {string} text
   */
  listitem(text) {
    return `<li>${text}</li>\n`;
  }

  checkbox(checked) {
    return '<input '
      + (checked ? 'checked="" ' : '')
      + 'disabled="" type="checkbox"'
      + (this.options.xhtml ? ' /' : '')
      + '> ';
  }

  /**
   * @param {string} text
   */
  paragraph(text) {
    return `<p>${text}</p>\n`;
  }

  /**
   * @param {string} header
   * @param {string} body
   */
  table(header, body) {
    if (body) body = `<tbody>${body}</tbody>`;

    return '<table>\n'
      + '<thead>\n'
      + header
      + '</thead>\n'
      + body
      + '</table>\n';
  }

  /**
   * @param {string} content
   */
  tablerow(content) {
    return `<tr>\n${content}</tr>\n`;
  }

  tablecell(content, flags) {
    const type = flags.header ? 'th' : 'td';
    const tag = flags.align
      ? `<${type} align="${flags.align}">`
      : `<${type}>`;
    return tag + content + `</${type}>\n`;
  }

  /**
   * span level renderer
   * @param {string} text
   */
  strong(text) {
    return `<strong>${text}</strong>`;
  }

  /**
   * @param {string} text
   */
  em(text) {
    return `<em>${text}</em>`;
  }

  /**
   * @param {string} text
   */
  codespan(text) {
    return `<code>${text}</code>`;
  }

  br() {
    return this.options.xhtml ? '<br/>' : '<br>';
  }

  /**
   * @param {string} text
   */
  del(text) {
    return `<del>${text}</del>`;
  }

  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<a href="' + escape(href) + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += '>' + text + '</a>';
    return out;
  }

  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }

    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += this.options.xhtml ? '/>' : '>';
    return out;
  }

  text(text) {
    return text;
  }
}

/**
 * TextRenderer
 * returns only the textual part of the token
 */
class TextRenderer {
  // no need for block level renderers
  strong(text) {
    return text;
  }

  em(text) {
    return text;
  }

  codespan(text) {
    return text;
  }

  del(text) {
    return text;
  }

  html(text) {
    return text;
  }

  text(text) {
    return text;
  }

  link(href, title, text) {
    return '' + text;
  }

  image(href, title, text) {
    return '' + text;
  }

  br() {
    return '';
  }
}

/**
 * Slugger generates header id
 */
class Slugger {
  constructor() {
    this.seen = {};
  }

  /**
   * @param {string} value
   */
  serialize(value) {
    return value
      .toLowerCase()
      .trim()
      // remove html tags
      .replace(/<[!\/a-z].*?>/ig, '')
      // remove unwanted chars
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
      .replace(/\s/g, '-');
  }

  /**
   * Finds the next safe (unique) slug to use
   * @param {string} originalSlug
   * @param {boolean} isDryRun
   */
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug;
    let occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do {
        occurenceAccumulator++;
        slug = originalSlug + '-' + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }
    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }
    return slug;
  }

  /**
   * Convert string to unique id
   * @param {object} [options]
   * @param {boolean} [options.dryrun] Generates the next unique slug without
   * updating the internal accumulator.
   */
  slug(value, options = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options.dryrun);
  }
}

/**
 * Parsing & Compiling
 */
class Parser {
  constructor(options) {
    this.options = options || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }

  /**
   * Static Parse Method
   */
  static parse(tokens, options) {
    const parser = new Parser(options);
    return parser.parse(tokens);
  }

  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options) {
    const parser = new Parser(options);
    return parser.parseInline(tokens);
  }

  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    let out = '',
      i,
      j,
      k,
      l2,
      l3,
      row,
      cell,
      header,
      body,
      token,
      ordered,
      start,
      loose,
      itemBody,
      item,
      checked,
      task,
      checkbox,
      ret;

    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];

      // Run any renderer extensions
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }

      switch (token.type) {
        case 'space': {
          continue;
        }
        case 'hr': {
          out += this.renderer.hr();
          continue;
        }
        case 'heading': {
          out += this.renderer.heading(
            this.parseInline(token.tokens),
            token.depth,
            unescape(this.parseInline(token.tokens, this.textRenderer)),
            this.slugger);
          continue;
        }
        case 'code': {
          out += this.renderer.code(token.text,
            token.lang,
            token.escaped);
          continue;
        }
        case 'table': {
          header = '';

          // header
          cell = '';
          l2 = token.header.length;
          for (j = 0; j < l2; j++) {
            cell += this.renderer.tablecell(
              this.parseInline(token.header[j].tokens),
              { header: true, align: token.align[j] }
            );
          }
          header += this.renderer.tablerow(cell);

          body = '';
          l2 = token.rows.length;
          for (j = 0; j < l2; j++) {
            row = token.rows[j];

            cell = '';
            l3 = row.length;
            for (k = 0; k < l3; k++) {
              cell += this.renderer.tablecell(
                this.parseInline(row[k].tokens),
                { header: false, align: token.align[k] }
              );
            }

            body += this.renderer.tablerow(cell);
          }
          out += this.renderer.table(header, body);
          continue;
        }
        case 'blockquote': {
          body = this.parse(token.tokens);
          out += this.renderer.blockquote(body);
          continue;
        }
        case 'list': {
          ordered = token.ordered;
          start = token.start;
          loose = token.loose;
          l2 = token.items.length;

          body = '';
          for (j = 0; j < l2; j++) {
            item = token.items[j];
            checked = item.checked;
            task = item.task;

            itemBody = '';
            if (item.task) {
              checkbox = this.renderer.checkbox(checked);
              if (loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                  item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
                  if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                    item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                  }
                } else {
                  item.tokens.unshift({
                    type: 'text',
                    text: checkbox
                  });
                }
              } else {
                itemBody += checkbox;
              }
            }

            itemBody += this.parse(item.tokens, loose);
            body += this.renderer.listitem(itemBody, task, checked);
          }

          out += this.renderer.list(body, ordered, start);
          continue;
        }
        case 'html': {
          // TODO parse inline content if parameter markdown=1
          out += this.renderer.html(token.text);
          continue;
        }
        case 'paragraph': {
          out += this.renderer.paragraph(this.parseInline(token.tokens));
          continue;
        }
        case 'text': {
          body = token.tokens ? this.parseInline(token.tokens) : token.text;
          while (i + 1 < l && tokens[i + 1].type === 'text') {
            token = tokens[++i];
            body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
          }
          out += top ? this.renderer.paragraph(body) : body;
          continue;
        }

        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }

    return out;
  }

  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = '',
      i,
      token,
      ret;

    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];

      // Run any renderer extensions
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }

      switch (token.type) {
        case 'escape': {
          out += renderer.text(token.text);
          break;
        }
        case 'html': {
          out += renderer.html(token.text);
          break;
        }
        case 'link': {
          out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
          break;
        }
        case 'image': {
          out += renderer.image(token.href, token.title, token.text);
          break;
        }
        case 'strong': {
          out += renderer.strong(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'em': {
          out += renderer.em(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'codespan': {
          out += renderer.codespan(token.text);
          break;
        }
        case 'br': {
          out += renderer.br();
          break;
        }
        case 'del': {
          out += renderer.del(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'text': {
          out += renderer.text(token.text);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
}

/**
 * Marked
 */
function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  if (typeof opt === 'function') {
    callback = opt;
    opt = null;
  }

  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);

  if (callback) {
    const highlight = opt.highlight;
    let tokens;

    try {
      tokens = Lexer.lex(src, opt);
    } catch (e) {
      return callback(e);
    }

    const done = function(err) {
      let out;

      if (!err) {
        try {
          if (opt.walkTokens) {
            marked.walkTokens(tokens, opt.walkTokens);
          }
          out = Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!tokens.length) return done();

    let pending = 0;
    marked.walkTokens(tokens, function(token) {
      if (token.type === 'code') {
        pending++;
        setTimeout(() => {
          highlight(token.text, token.lang, function(err, code) {
            if (err) {
              return done(err);
            }
            if (code != null && code !== token.text) {
              token.text = code;
              token.escaped = true;
            }

            pending--;
            if (pending === 0) {
              done();
            }
          });
        }, 0);
      }
    });

    if (pending === 0) {
      done();
    }

    return;
  }

  try {
    const tokens = Lexer.lex(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return Parser.parse(tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if (opt.silent) {
      return '<p>An error occurred:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  changeDefaults(marked.defaults);
  return marked;
};

marked.getDefaults = getDefaults;

marked.defaults = defaults;

/**
 * Use Extension
 */

marked.use = function(...args) {
  const opts = merge({}, ...args);
  const extensions = marked.defaults.extensions || { renderers: {}, childTokens: {} };
  let hasExtensions;

  args.forEach((pack) => {
    // ==-- Parse "addon" extensions --== //
    if (pack.extensions) {
      hasExtensions = true;
      pack.extensions.forEach((ext) => {
        if (!ext.name) {
          throw new Error('extension name required');
        }
        if (ext.renderer) { // Renderer extensions
          const prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;
          if (prevRenderer) {
            // Replace extension with func to run new extension but fall back if false
            extensions.renderers[ext.name] = function(...args) {
              let ret = ext.renderer.apply(this, args);
              if (ret === false) {
                ret = prevRenderer.apply(this, args);
              }
              return ret;
            };
          } else {
            extensions.renderers[ext.name] = ext.renderer;
          }
        }
        if (ext.tokenizer) { // Tokenizer Extensions
          if (!ext.level || (ext.level !== 'block' && ext.level !== 'inline')) {
            throw new Error("extension level must be 'block' or 'inline'");
          }
          if (extensions[ext.level]) {
            extensions[ext.level].unshift(ext.tokenizer);
          } else {
            extensions[ext.level] = [ext.tokenizer];
          }
          if (ext.start) { // Function to check for start of token
            if (ext.level === 'block') {
              if (extensions.startBlock) {
                extensions.startBlock.push(ext.start);
              } else {
                extensions.startBlock = [ext.start];
              }
            } else if (ext.level === 'inline') {
              if (extensions.startInline) {
                extensions.startInline.push(ext.start);
              } else {
                extensions.startInline = [ext.start];
              }
            }
          }
        }
        if (ext.childTokens) { // Child tokens to be visited by walkTokens
          extensions.childTokens[ext.name] = ext.childTokens;
        }
      });
    }

    // ==-- Parse "overwrite" extensions --== //
    if (pack.renderer) {
      const renderer = marked.defaults.renderer || new Renderer();
      for (const prop in pack.renderer) {
        const prevRenderer = renderer[prop];
        // Replace renderer with func to run extension, but fall back if false
        renderer[prop] = (...args) => {
          let ret = pack.renderer[prop].apply(renderer, args);
          if (ret === false) {
            ret = prevRenderer.apply(renderer, args);
          }
          return ret;
        };
      }
      opts.renderer = renderer;
    }
    if (pack.tokenizer) {
      const tokenizer = marked.defaults.tokenizer || new Tokenizer();
      for (const prop in pack.tokenizer) {
        const prevTokenizer = tokenizer[prop];
        // Replace tokenizer with func to run extension, but fall back if false
        tokenizer[prop] = (...args) => {
          let ret = pack.tokenizer[prop].apply(tokenizer, args);
          if (ret === false) {
            ret = prevTokenizer.apply(tokenizer, args);
          }
          return ret;
        };
      }
      opts.tokenizer = tokenizer;
    }

    // ==-- Parse WalkTokens extensions --== //
    if (pack.walkTokens) {
      const walkTokens = marked.defaults.walkTokens;
      opts.walkTokens = function(token) {
        pack.walkTokens.call(this, token);
        if (walkTokens) {
          walkTokens.call(this, token);
        }
      };
    }

    if (hasExtensions) {
      opts.extensions = extensions;
    }

    marked.setOptions(opts);
  });
};

/**
 * Run callback for every token
 */

marked.walkTokens = function(tokens, callback) {
  for (const token of tokens) {
    callback.call(marked, token);
    switch (token.type) {
      case 'table': {
        for (const cell of token.header) {
          marked.walkTokens(cell.tokens, callback);
        }
        for (const row of token.rows) {
          for (const cell of row) {
            marked.walkTokens(cell.tokens, callback);
          }
        }
        break;
      }
      case 'list': {
        marked.walkTokens(token.items, callback);
        break;
      }
      default: {
        if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) { // Walk any extensions
          marked.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
            marked.walkTokens(token[childTokens], callback);
          });
        } else if (token.tokens) {
          marked.walkTokens(token.tokens, callback);
        }
      }
    }
  }
};

/**
 * Parse Inline
 * @param {string} src
 */
marked.parseInline = function(src, opt) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked.parseInline(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked.parseInline(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);

  try {
    const tokens = Lexer.lexInline(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return Parser.parseInline(tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if (opt.silent) {
      return '<p>An error occurred:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
};

/**
 * Expose
 */
marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.parse = marked;

marked.options;
marked.setOptions;
marked.use;
marked.walkTokens;
marked.parseInline;
Parser.parse;
Lexer.lex;

const footnoteRegex = /\[\^[^\]]*\]/g;
const highlightRegex = /==([^=]*)==|\^\^([^\^]*)\^\^/g;
function htmlDecode(str) {
    if (str.length === 0) {
        return "";
    }
    return str.replace(/&(#[0-9]*|amp|lt|gt|nbsp|quot|copy|trade);/g, (_, code)=>{
        switch(code){
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "nbsp":
                return " ";
            case "quot":
                return '"';
            case "copy":
                return "©";
            case "trade":
                return "™";
            default:
                return String.fromCharCode(code.substring(1));
        }
    });
}
const renderer = {
    // Block level renderers.
    code: (code)=>code,
    blockquote: (quote)=>quote,
    html: (html)=>html,
    heading: (text, level, raw)=>text,
    hr: ()=>"",
    list: (body, ordered, start)=>`${ordered ? `${start}. ` : ""}${body}`,
    listitem: (text)=>text,
    checkbox: ()=>"",
    paragraph: (text)=>text,
    table: ()=>"",
    tablerow: ()=>"",
    tablecell: ()=>"",
    // Inline level renderers.
    strong: (text)=>text,
    em: (text)=>text,
    codespan: (code)=>code,
    br: ()=>"",
    del: (text)=>text,
    link: (href, title, text)=>text,
    image: (href, title, text)=>text,
    text: (text)=>text.startsWith("[^") && text.endsWith("]") ? "" : htmlDecode(text)
};
const tokenizer = {
    inlineText: (src)=>{
        if (footnoteRegex.test(src)) {
            const text = src.replace(footnoteRegex, "");
            return {
                type: "text",
                raw: src,
                text
            };
        }
        if (highlightRegex.test(src)) {
            const text = src.replace(highlightRegex, "$1$2");
            return {
                type: "text",
                raw: src,
                text
            };
        }
        return false;
    }
};
marked.use({
    renderer,
    tokenizer
});
const parse = marked.parse;

async function parseContent(content) {
    // Remove front matter.
    content = content.replace(/---\n(-(?!--)|[^-])*\n---\n?/g, "");
    // Use only the first line.
    content = content.match(/.*/)[0];
    // Remove macro renderers.
    content = content.replace(/ \{\{renderer (?:\}[^\}]|[^\}])+\}\}/g, "");
    // Remove properties.
    content = content.replace(/\b[^:\n]+:: [^\n]+/g, "");
    // Handle markdown.
    content = parse(content);
    // Handle LaTex
    content = content.replaceAll(/(\${1,2})([^\$]+)\1/g, (str, _, expr)=>{
        return parent.window.katex.renderToString(expr, {
            throwOnError: false
        });
    });
    // Remove tags.
    content = content.replace(/(?:^|\s)#\S+/g, "");
    // Replace block refs with their content.
    let match;
    while((match = /\(\(([^\)]+)\)\)/g.exec(content)) != null){
        const [start, end] = match.indices[0];
        const refUUID = match[1];
        const refBlock = await logseq.Editor.getBlock(refUUID);
        const refContent = await parseContent(refBlock.content);
        content = `${content.substring(0, start)}${refContent}${content.substring(end)}`;
    }
    // Remove page refs
    content = content.replace(/\[\[([^\]]+)\]\]/g, "$1");
    return content.trim();
}
const HeadingTypes = {
    // Accepts anything as a heading
    any: "any",
    // Accepts only H1..Hn as headings
    h: "h"
};

function Arrow({ class: className , style  }) {
    return /*#__PURE__*/ e$1("svg", {
        viewBox: "64 64 896 896",
        focusable: "false",
        "data-icon": "right",
        width: "0.7em",
        height: "0.7em",
        fill: "currentColor",
        "aria-hidden": "true",
        class: className,
        style: {
            display: "inline",
            ...style
        },
        children: /*#__PURE__*/ e$1("path", {
            d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
        })
    });
}

function Block({ root , block: block1 , levels , headingType , blocksToHighlight , hidden , collapsed , onCollapseChange ,  }) {
    const [content, setContent] = l("");
    const [childrenCollapsed, setChildrenCollapsed] = l(()=>block1.children.reduce((status, block)=>{
            status[block.id] = logseq.settings?.defaultCollapsed ?? false;
            return status;
        }, {}), [
        block1.children
    ]);
    y(()=>{
        setChildrenCollapsed((values)=>block1.children.reduce((status, block)=>{
                status[block.id] = (values[block.id] ?? logseq.settings?.defaultCollapsed) ?? false;
                return status;
            }, {}));
    }, [
        block1.children
    ]);
    const page = d(async ()=>{
        if (root.page) {
            return await logseq.Editor.getPage(root.page.id);
        } else {
            return root;
        }
    }, [
        root.name,
        root.page?.id
    ]);
    const subblocksRef = s();
    const [noChildren, setNoChildren] = l(false);
    y(()=>{
        (async ()=>{
            setContent(await parseContent(block1.content));
        })();
    }, [
        block1
    ]);
    y(()=>{
        const val = subblocksRef.current?.childElementCount <= 1;
        if (noChildren !== val) {
            setNoChildren(val);
        }
    });
    async function goTo(e) {
        if (e.shiftKey) {
            logseq.Editor.openInRightSidebar((await page).uuid);
        } else {
            logseq.Editor.scrollToBlockInPage((await page).name, block1.uuid);
        }
    }
    function goInto(e) {
        if (e.shiftKey) {
            logseq.Editor.openInRightSidebar(block1.uuid);
        } else {
            logseq.Editor.scrollToBlockInPage(block1.uuid);
        }
    }
    function toggleCollapsed() {
        onCollapseChange?.(block1.id, !collapsed);
    }
    function toggleCollapseChildren() {
        if (block1.children.some((block)=>!childrenCollapsed[block.id] && block.level < levels && (headingType === HeadingTypes.h ? block.children.some((subblock)=>subblock.content.startsWith("#") || subblock.properties?.heading) : block.children.length > 0))) {
            setChildrenCollapsed(block1.children.reduce((status, block)=>{
                status[block.id] = true;
                return status;
            }, {}));
        } else {
            setChildrenCollapsed(block1.children.reduce((status, block)=>{
                status[block.id] = false;
                return status;
            }, {}));
        }
    }
    function onBlockCollapseChange(blockId, blockCollapsed) {
        setChildrenCollapsed((old)=>({
                ...old,
                [blockId]: blockCollapsed
            }));
    }
    if (hidden) return null;
    // Hide empty blocks and render/macro blocks.
    if (!content || /^\s*{{/.test(content) || headingType === HeadingTypes.h && !block1.content.startsWith("#") && !block1.properties?.heading) return null;
    const arrowCollapsed = collapsed && block1.level < levels && (headingType === HeadingTypes.h ? block1.children.some((subblock)=>subblock.content.startsWith("#") || subblock.properties?.heading) : block1.children.length > 0);
    return /*#__PURE__*/ e$1(d$1, {
        children: [
            /*#__PURE__*/ e$1("div", {
                class: cls("kef-tocgen-block", blocksToHighlight?.has(block1.id) && "kef-tocgen-active-block"),
                children: [
                    /*#__PURE__*/ e$1("button", {
                        class: "kef-tocgen-arrow",
                        onClick: toggleCollapsed,
                        children: /*#__PURE__*/ e$1(Arrow, {
                            class: cls(!arrowCollapsed && noChildren && "kef-tocgen-arrow-hidden"),
                            style: {
                                transform: arrowCollapsed ? null : "rotate(90deg)"
                            }
                        })
                    }),
                    /*#__PURE__*/ e$1("span", {
                        class: "kef-tocgen-into inline",
                        onClick: goInto,
                        dangerouslySetInnerHTML: {
                            __html: content
                        }
                    }),
                    !logseq.settings?.noPageJump && /*#__PURE__*/ e$1("button", {
                        class: "kef-tocgen-to",
                        onClick: goTo,
                        children: t$1("page")
                    })
                ]
            }),
            block1.level < levels && /*#__PURE__*/ e$1("div", {
                class: "kef-tocgen-block-children",
                ref: subblocksRef,
                children: [
                    /*#__PURE__*/ e$1("div", {
                        className: "kef-tocgen-block-collapse",
                        onClick: toggleCollapseChildren
                    }),
                    block1.children.map((subBlock)=>/*#__PURE__*/ e$1(Block, {
                            root: root,
                            block: subBlock,
                            levels: levels,
                            headingType: headingType,
                            blocksToHighlight: blocksToHighlight,
                            hidden: collapsed,
                            collapsed: childrenCollapsed[subBlock.id],
                            onCollapseChange: onBlockCollapseChange
                        }, subBlock.id))
                ]
            })
        ]
    });
}

function TocGen({ root , blocks , levels , headingType , blocksToHighlight , uuid ,  }) {
    const [name, setName] = l(()=>root.page == null ? root.originalName ?? root.name : "");
    const [collapsed, setCollapsed] = l(false);
    const [childrenCollapsed, setChildrenCollapsed] = l(()=>blocks.reduce((status, block)=>{
            status[block.id] = logseq.settings?.defaultCollapsed ?? false;
            return status;
        }, {}));
    y(()=>{
        setChildrenCollapsed((values)=>blocks.reduce((status, block)=>{
                status[block.id] = (values[block.id] ?? logseq.settings?.defaultCollapsed) ?? false;
                return status;
            }, {}));
    }, [
        blocks
    ]);
    const page = d(async ()=>{
        if (root.page) {
            return await logseq.Editor.getPage(root.page.id);
        } else {
            return root;
        }
    }, [
        root.name,
        root.page?.id
    ]);
    y(()=>{
        if (root.page != null) {
            (async ()=>{
                setName(await parseContent(root.content));
            })();
        } else {
            setName(root.originalName ?? root.name);
        }
    }, [
        root
    ]);
    function goTo(e) {
        if (e.shiftKey) {
            logseq.Editor.openInRightSidebar(root.uuid);
        } else {
            if (root.page == null) {
                logseq.Editor.scrollToBlockInPage(root.name);
            } else {
                logseq.Editor.scrollToBlockInPage(root.uuid);
            }
        }
    }
    async function goToPage(e) {
        if (e.shiftKey) {
            logseq.Editor.openInRightSidebar((await page).uuid);
        } else {
            logseq.Editor.scrollToBlockInPage((await page).name, root.uuid);
        }
    }
    function toggleCollapsed() {
        setCollapsed((v)=>!v);
    }
    function toggleCollapseChildren() {
        if (blocks.some((block)=>!childrenCollapsed[block.id] && block.level < levels && (headingType === HeadingTypes.h ? block.children.some((subblock)=>subblock.content.startsWith("#") || subblock.properties?.heading) : block.children.length > 0))) {
            setChildrenCollapsed(blocks.reduce((status, block)=>{
                status[block.id] = true;
                return status;
            }, {}));
        } else {
            setChildrenCollapsed(blocks.reduce((status, block)=>{
                status[block.id] = false;
                return status;
            }, {}));
        }
    }
    function onBlockCollapseChange(blockId, blockCollapsed) {
        setChildrenCollapsed((old)=>({
                ...old,
                [blockId]: blockCollapsed
            }));
    }
    if (blocks == null) {
        return /*#__PURE__*/ e$1("div", {
            style: {
                color: "#f00"
            },
            children: t$1("Page/Block not found!")
        });
    }
    return /*#__PURE__*/ e$1(d$1, {
        children: [
            /*#__PURE__*/ e$1("div", {
                class: cls("kef-tocgen-page", blocksToHighlight == null && "kef-tocgen-active-block"),
                children: [
                    /*#__PURE__*/ e$1("button", {
                        class: "kef-tocgen-arrow",
                        onClick: toggleCollapsed,
                        children: /*#__PURE__*/ e$1(Arrow, {
                            style: {
                                transform: collapsed ? null : "rotate(90deg)"
                            }
                        })
                    }),
                    /*#__PURE__*/ e$1("span", {
                        className: "inline",
                        onClick: goTo,
                        dangerouslySetInnerHTML: {
                            __html: name
                        }
                    }),
                    root.page != null && !logseq.settings?.noPageJump && /*#__PURE__*/ e$1("button", {
                        class: "kef-tocgen-to",
                        onClick: goToPage,
                        children: t$1("page")
                    })
                ]
            }),
            /*#__PURE__*/ e$1("div", {
                className: "kef-tocgen-block-children",
                children: [
                    /*#__PURE__*/ e$1("div", {
                        className: "kef-tocgen-block-collapse",
                        onClick: toggleCollapseChildren
                    }),
                    blocks.map((block)=>/*#__PURE__*/ e$1(Block, {
                            root: root,
                            block: block,
                            levels: levels,
                            headingType: headingType,
                            blocksToHighlight: blocksToHighlight,
                            hidden: collapsed,
                            collapsed: childrenCollapsed[block.id],
                            onCollapseChange: onBlockCollapseChange
                        }, block.id))
                ]
            })
        ]
    });
}

var page = "页面";
var zhCN = {
	"No active page": "无活动页面",
	"Back to Top": "回到顶部",
	"Go Down": "去底部",
	"It defines how many levels a TOC contains by default if not specified when the TOC is created.": "默认创建目录的级数，创建目录时没有指定级数时会使用此设置。",
	"It defines whether TOC is collapsed by default.": "默认目录是否为折叠状态。",
	"It defines what kind of blocks can be recognized as a heading. \"any\" means that any block will do；\"h\" means that only H1-Hn blocks are accepted as headings.": "默认识别的标题类型。可以指定\"any\"，代表任何块都可作为标题识别；\"h\"代表仅 H1-Hn 块可作为标题识别。",
	"You can use this setting to disable the \"Back to Top\" functionality.": "如果不想要“滚动回页面顶部”这个功能的话可以通过这个设置关闭。",
	"You can use this setting to disable the \"Go Down\" functionality.": "如果不想要“去页面底部”这个功能的话可以通过这个设置关闭。",
	"Set this to true and you will not see the \"page\" link in TOC.": "设置为true在目录中就不会有\"页面\"链接了。",
	"Heading type must be \"any\" or \"h\"!": "标题类型需为 any 或 h！",
	"Page/Block not found!": "页面/块不存在！",
	page: page
};

const observers = {};
let resizeObserver = null;
let pageObserver = null;
const BACK_TOP_ICON = `<svg t="1641276288794" class="kef-tocgen-icon-backtop" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4076" width="200" height="200"><path d="M526.848 202.24c-4.096-4.096-9.216-6.144-14.848-6.144s-11.264 2.048-14.848 6.144L342.016 356.864c-8.192 8.192-8.192 21.504 0 30.208 8.192 8.192 21.504 8.192 30.208 0L512 247.296l139.776 139.776c4.096 4.096 9.728 6.144 14.848 6.144 5.632 0 10.752-2.048 14.848-6.144 8.192-8.192 8.192-21.504 0-30.208L526.848 202.24zM116.224 595.968h90.624v231.936h42.496V595.968h90.624v-42.496H115.712v42.496z m458.24-42.496h-112.64c-13.824 0-27.136 5.12-37.376 15.36s-15.36 24.064-15.36 37.376v168.448c0 13.824 5.12 27.136 15.36 37.376s24.064 15.36 37.376 15.36h112.64c13.824 0 27.136-5.12 37.376-15.36s15.36-24.064 15.36-37.376V606.208c0-13.824-5.12-27.136-15.36-37.376s-23.552-15.36-37.376-15.36z m10.752 221.696c0 2.048-0.512 5.12-3.072 7.68s-5.632 3.072-7.68 3.072h-112.64c-2.048 0-5.12-0.512-7.68-3.072s-3.072-5.632-3.072-7.68V606.72c0-2.048 0.512-5.12 3.072-7.68s5.632-3.072 7.68-3.072h112.64c2.048 0 5.12 0.512 7.68 3.072s3.072 5.632 3.072 7.68v168.448z m307.2-205.824c-10.24-10.24-24.064-15.36-37.376-15.36H709.632v274.432h42.496v-120.32H855.04c13.824 0 27.136-5.12 37.376-15.36s15.36-24.064 15.36-37.376v-48.128c0-14.336-5.12-27.648-15.36-37.888z m-27.136 84.992c0 2.048-0.512 5.12-3.072 7.68s-5.632 3.072-7.68 3.072H751.104v-69.12H855.04c2.048 0 5.12 0.512 7.68 3.072s3.072 5.632 3.072 7.68v47.616h-0.512z" p-id="4077"></path></svg>`;
const GO_DOWN_ICON = `<svg t="1651059361900" class="kef-tocgen-icon-godown" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12219" width="200" height="200"><path d="M830.24 340.688l11.328 11.312a16 16 0 0 1 0 22.624L530.448 685.76a16 16 0 0 1-22.64 0L196.688 374.624a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l288.496 288.496 288.512-288.496a16 16 0 0 1 22.624 0z" p-id="12220"></path></svg>`;
const ICON_TRANSITION_DURATION = 200;
const CURRENT = "*";
const backtopScrollHandler = debounce((e)=>{
    const scrollTop = e.target.scrollTop;
    const backtop = parent.document.querySelector(".kef-tocgen-backtop");
    if (scrollTop >= 300) {
        if (backtop.style.display !== "block") {
            backtop.style.display = "block";
            requestAnimationFrame(()=>{
                backtop.style.opacity = 0.7;
            });
        }
    } else {
        if (backtop.style.display === "block") {
            backtop.style.opacity = 0;
            setTimeout(()=>{
                backtop.style.display = "";
            }, ICON_TRANSITION_DURATION);
        }
    }
}, 50);
const godownScrollHandler = debounce((e)=>{
    const scrollHeight = e.target.scrollHeight;
    const scrollTop = e.target.scrollTop;
    const godown = parent.document.querySelector(".kef-tocgen-godown");
    if (scrollTop + e.target.clientHeight + 300 <= scrollHeight) {
        if (godown.style.display !== "block") {
            godown.style.display = "block";
            requestAnimationFrame(()=>{
                godown.style.opacity = 0.7;
            });
        }
    } else {
        if (godown.style.display === "block") {
            godown.style.opacity = 0;
            setTimeout(()=>{
                godown.style.display = "";
            }, ICON_TRANSITION_DURATION);
        }
    }
}, 50);
async function main() {
    await setup({
        urlTemplate: "https://raw.githubusercontent.com/sethyuan/logseq-plugin-tocgen/master/src/translations/${locale}.json",
        builtinTranslations: {
            "zh-CN": zhCN
        }
    });
    logseq.provideStyle(`
    .kef-tocgen-page {
      line-height: 2;
    }
    .kef-tocgen-page:hover > .inline {
      cursor: pointer;
      color: var(--ls-link-ref-text-color);
    }
    .kef-tocgen-block {
      line-height: 1.7;
    }
    .kef-tocgen-block-children {
      margin-left: 14px;
      position: relative;
    }
    .kef-tocgen-block-collapse {
      z-index: 1;
      position: absolute;
      top: 5px;
      left: -10px;
      width: 4px;
      height: calc(100% - 10px);
      border-left: 1px solid rgba(229,229,229,var(--tw-border-opacity));
      cursor: pointer;
    }
    .kef-tocgen-block-collapse:hover {
      border-left: 4px solid var(--ls-primary-text-color);
      left: -11px;
      border-radius: 2px;
    }
    .kef-tocgen-active-block {
      font-weight: 600;
      color: var(--ls-link-text-color);
    }
    .kef-tocgen-into {
      cursor: pointer;
    }
    .kef-tocgen-into:hover {
      color: var(--ls-link-ref-text-color);
    }
    .kef-tocgen-to {
      font-size: 0.8em;
      margin-left: 6px;
      color: var(--ls-icon-color);
      vertical-align: text-bottom;
    }
    .kef-tocgen-to:hover {
      color: var(--ls-link-ref-text-color);
    }
    .kef-tocgen-arrow {
      padding-right: 4px;
      margin-right: 3px;
    }
    .kef-tocgen-arrow-hidden {
      visibility: hidden;
    }
    .kef-tocgen-noactivepage::before {
      content: "${t$1("No active page")}";
    }

    .kef-tocgen-backtop {
      position: fixed;
      left: 0;
      bottom: 95px;
      will-change: transform;
      background: var(--ls-secondary-background-color);
      border-radius: 50%;
      display: none;
      opacity: 0;
      transition: opacity ${ICON_TRANSITION_DURATION}ms ease-in-out;
    }
    .kef-tocgen-backtop:hover {
      opacity: 1 !important;
      box-shadow: 0px 2px 4px 0px #ccc;
    }
    .kef-tocgen-icon-backtop {
      width: 35px;
      height: 35px;
      fill: var(--ls-primary-text-color);
      padding: 4px;
    }
    .kef-tocgen-godown {
      position: fixed;
      left: 0;
      bottom: 55px;
      will-change: transform;
      background: var(--ls-secondary-background-color);
      border-radius: 50%;
      display: none;
      opacity: 0;
      transition: opacity ${ICON_TRANSITION_DURATION}ms ease-in-out;
    }
    .kef-tocgen-godown:hover {
      opacity: 1 !important;
      box-shadow: 0px 2px 4px 0px #ccc;
    }
    .kef-tocgen-icon-godown {
      width: 35px;
      height: 35px;
      fill: var(--ls-primary-text-color);
      padding: 4px;
    }
  `);
    logseq.App.onMacroRendererSlotted(tocRenderer);
    logseq.Editor.registerSlashCommand("Table of Contents", async ()=>{
        await logseq.Editor.insertAtEditingCursor("{{renderer :tocgen}}");
    // NOTE: Leave this cursor moving code for future reference.
    // const input = parent.document.activeElement
    // const pos = input.selectionStart - 2
    // input.setSelectionRange(pos, pos)
    });
    parent.document.getElementById("main-container");
    const mainContentContainer = parent.document.getElementById("main-content-container");
    if (!logseq.settings?.hideBackTop) {
        logseq.provideUI({
            key: "kef-tocgen-backtop",
            path: "#app-container",
            template: `<a title="${t$1("Back to Top")}" class="kef-tocgen-backtop" data-on-click="backtop">${BACK_TOP_ICON}</a>`
        });
        // Let backtop element get generated first.
        setTimeout(()=>{
            const backtop = parent.document.querySelector(".kef-tocgen-backtop");
            const contentEl = parent.document.querySelector("div[data-is-global-graph-pages] > div:first-child");
            if (contentEl) {
                resizeObserver = new ResizeObserver(()=>{
                    requestAnimationFrame(()=>{
                        const contentElRect = contentEl.getBoundingClientRect();
                        const mainContentContainerRect = mainContentContainer.getBoundingClientRect();
                        backtop.style.transform = `translateX(${contentElRect.right + 57 < mainContentContainerRect.right ? contentElRect.right + 20 : mainContentContainerRect.right - 57}px)`;
                    });
                });
                resizeObserver.observe(mainContentContainer);
                resizeObserver.observe(contentEl);
            }
            mainContentContainer.addEventListener("scroll", backtopScrollHandler);
        }, 0);
    }
    if (!logseq.settings?.hideGoDown) {
        logseq.provideUI({
            key: "kef-tocgen-godown",
            path: "#app-container",
            template: `<a title="${t$1("Go Down")}" class="kef-tocgen-godown" data-on-click="godown">${GO_DOWN_ICON}</a>`
        });
        // Let godown element get generated first.
        setTimeout(()=>{
            const godown = parent.document.querySelector(".kef-tocgen-godown");
            const contentEl = parent.document.querySelector("div[data-is-global-graph-pages] > div:first-child");
            if (contentEl) {
                resizeObserver = new ResizeObserver(()=>{
                    requestAnimationFrame(()=>{
                        const contentElRect = contentEl.getBoundingClientRect();
                        const mainContentContainerRect = mainContentContainer.getBoundingClientRect();
                        godown.style.transform = `translateX(${contentElRect.right + 57 < mainContentContainerRect.right ? contentElRect.right + 20 : mainContentContainerRect.right - 57}px)`;
                    });
                });
                resizeObserver.observe(mainContentContainer);
                resizeObserver.observe(contentEl);
            }
            mainContentContainer.addEventListener("scroll", godownScrollHandler);
        }, 0);
    }
    logseq.beforeunload(()=>{
        pageObserver?.disconnect();
        for (const observer of Object.values(observers)){
            observer?.disconnect();
        }
        mainContentContainer.removeEventListener("scroll", backtopScrollHandler);
        mainContentContainer.removeEventListener("scroll", godownScrollHandler);
        resizeObserver?.disconnect();
    });
    logseq.useSettingsSchema([
        {
            key: "defaultLevels",
            type: "number",
            default: 1,
            description: t$1("It defines how many levels a TOC contains by default if not specified when the TOC is created.")
        },
        {
            key: "defaultCollapsed",
            type: "boolean",
            default: false,
            description: t$1("It defines whether TOC is collapsed by default.")
        },
        {
            key: "defaultHeadingType",
            type: "enum",
            enumChoices: [
                "any",
                "h"
            ],
            enumPicker: "select",
            default: "any",
            description: t$1('It defines what kind of blocks can be recognized as a heading. "any" means that any block will do；"h" means that only H1-Hn blocks are accepted as headings.')
        },
        {
            key: "hideBackTop",
            type: "boolean",
            default: false,
            description: t$1('You can use this setting to disable the "Back to Top" functionality.')
        },
        {
            key: "hideGoDown",
            type: "boolean",
            default: false,
            description: t$1('You can use this setting to disable the "Go Down" functionality.')
        },
        {
            key: "noPageJump",
            type: "boolean",
            default: false,
            description: t$1('Set this to true and you will not see the "page" link in TOC.')
        }, 
    ]);
    console.log("#tocgen loaded");
}
async function tocRenderer({ slot , payload: { arguments: args , uuid  }  }) {
    const [type] = args;
    if (type.trim() !== ":tocgen") return;
    const renderered = parent.document.getElementById(slot)?.childElementCount > 0;
    if (renderered) return;
    const nameArg = !args[1] || args[1] === "$1" ? "" : args[1].trim();
    const isBlock = nameArg?.startsWith("((");
    const name = nameArg === CURRENT ? await getCurrentPageName() : (isBlock ? nameArg?.replace(/^\(\((.*)\)\)\s*$/, "$1") : nameArg?.replace(/^\[\[(.*)\]\]\s*$/, "$1")) || (await logseq.Editor.getPage((await logseq.Editor.getBlock(uuid)).page.id)).name;
    const levels = !args[2] || args[2] === "$2" ? logseq.settings?.defaultLevels ?? 1 : Math.max(1, +args[2] || 1);
    const headingType = !args[3] || args[3] === "$3" ? logseq.settings?.defaultHeadingType ?? "any" : args[3].trim();
    const id = `kef-toc-${slot}`;
    if (HeadingTypes[headingType] == null) {
        logseq.provideUI({
            key: `error-${slot}`,
            slot,
            template: `<div id="${id}" style="color:#f00">[${t$1('Heading type must be "any" or "h"!')}]</div>`,
            reset: true
        });
        return;
    }
    const root = name == null ? null : isBlock ? await logseq.Editor.getBlock(name, {
        includeChildren: true
    }) : await logseq.Editor.getPage(name);
    if (name != null && root == null) {
        logseq.provideUI({
            key: `error-${slot}`,
            slot,
            template: `<div id="${id}" style="color:#f00">[${t$1("Page/Block not found!")}]</div>`,
            reset: true
        });
        return;
    }
    logseq.provideUI({
        key: `toc-${slot}`,
        slot,
        template: `<div id="${id}"></div>`,
        reset: true,
        style: {
            cursor: "default"
        }
    });
    // Let div root element get generated first.
    setTimeout(async ()=>{
        if (root != null) {
            await observeAndGenerate(id, root, levels, headingType, uuid);
        }
        if (nameArg === CURRENT) {
            observePageViewChange(id, levels, headingType, uuid);
            if (name == null) {
                const rootEl = parent.document.getElementById(id);
                S$1(/*#__PURE__*/ e$1("div", {
                    class: "kef-tocgen-noactivepage"
                }), rootEl);
            }
        }
    }, 0);
}
async function observeAndGenerate(id, root, levels, headingType, uuid) {
    const rootEl = parent.document.getElementById(id);
    async function renderIfPageBlock(node) {
        const blockEl = getBlockEl(node);
        if (blockEl == null) return false;
        const blockID = blockEl.getAttribute("blockid");
        const block = await logseq.Editor.getBlock(blockID);
        if (block == null) return false;
        if (root.page == null && block.page.id !== root.id) return false;
        if (root.page != null) {
            // Keep checking parent until root is found or no more parent.
            let b = block;
            while(b != null){
                if (b.parent.id === root.id) break;
                b = await logseq.Editor.getBlock(b.parent.id);
            }
            if (b == null) return false;
        }
        const blocks = root.page == null ? await logseq.Editor.getPageBlocksTree(root.name) : (await logseq.Editor.getBlock(root.id, {
            includeChildren: true
        })).children;
        const currentBlock = await logseq.Editor.getCurrentBlock();
        const blocksToHighlight = await findBlocksToHighlight(currentBlock, levels, headingType);
        S$1(/*#__PURE__*/ e$1(TocGen, {
            root: root,
            blocks: blocks,
            levels: levels,
            headingType: headingType,
            blocksToHighlight: blocksToHighlight,
            uuid: uuid
        }), rootEl);
        return true;
    }
    if (observers[id] == null) {
        const observer = new MutationObserver(async (mutationList)=>{
            let block = null;
            loop: for (const mutation of mutationList){
                if (mutation.removedNodes.length > 0 && (rootEl == null || !rootEl.isConnected)) {
                    observer.disconnect();
                    observers[id] = undefined;
                    return;
                }
                for (const node of mutation.addedNodes){
                    if (node.className === "flex flex-row" || node.className === "block-children-container flex" || node.classList?.contains("block-editor") || node.classList?.contains("ls-block")) {
                        block = node;
                        break loop;
                    }
                }
            }
            if (block != null) {
                await renderIfPageBlock(block);
            }
        });
        observers[id] = observer;
        observer.observe(parent.document.body, {
            subtree: true,
            childList: true
        });
    }
    const blocks1 = root.page == null ? await logseq.Editor.getPageBlocksTree(root.name) : root.children;
    S$1(/*#__PURE__*/ e$1(TocGen, {
        root: root,
        blocks: blocks1,
        levels: levels,
        headingType: headingType,
        uuid: uuid
    }), rootEl);
}
function observePageViewChange(id, levels, headingType, uuid) {
    const rootEl = parent.document.getElementById(id);
    pageObserver = new MutationObserver(async (mutationList)=>{
        for (const mutation of mutationList){
            if (mutation.removedNodes.length > 0 && (rootEl == null || !rootEl.isConnected)) {
                pageObserver.disconnect();
                return;
            }
            for (const node of mutation.addedNodes){
                if (node.classList && node.classList.contains("page") && node.classList.contains("relative")) {
                    let root = await logseq.Editor.getCurrentPage();
                    if (root.page != null) {
                        root = await logseq.Editor.getPage(root.page.id);
                    }
                    observers[id]?.disconnect();
                    observers[id] = undefined;
                    await observeAndGenerate(id, root, levels, headingType, uuid);
                    break;
                }
            }
        }
    });
    pageObserver.observe(parent.document.body, {
        subtree: true,
        childList: true
    });
}
function getBlockEl(node) {
    const body = document.body;
    while(node != null && node.getAttribute?.("blockid") == null && node !== body){
        node = node.parentElement;
    }
    return node === body ? null : node;
}
async function findBlocksToHighlight(block, levels, headingType) {
    const nodes = [];
    let temp = block;
    while(temp?.parent != null){
        nodes.unshift(temp);
        temp = await logseq.Editor.getBlock(temp.parent.id);
    }
    if (nodes.length === 1) return null;
    let index = nodes.length <= levels ? nodes.length - 2 : levels - 1;
    while(headingType === HeadingTypes.h && index >= 0 && !(nodes[index].content.startsWith("#") || nodes[index].properties?.heading)){
        index--;
    }
    return index < 0 ? null : new Set(nodes.slice(0, index + 1).map((node)=>node.id));
}
async function getCurrentPageName() {
    let page = await logseq.Editor.getCurrentPage();
    if (page?.page != null) {
        page = await logseq.Editor.getPage(page.page.id);
    }
    return page?.name;
}
const model = {
    backtop () {
        parent.document.getElementById("main-container");
        const mainContentContainer = parent.document.getElementById("main-content-container");
        mainContentContainer.scroll({
            top: 0
        });
    },
    godown () {
        parent.document.getElementById("main-container");
        const mainContentContainer = parent.document.getElementById("main-content-container");
        mainContentContainer.scroll({
            top: mainContentContainer.scrollHeight
        });
    }
};
logseq.ready(model, main).catch(console.error);
