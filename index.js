var Ht=Object.create;var de=Object.defineProperty;var Rt=Object.getOwnPropertyDescriptor;var Wt=Object.getOwnPropertyNames;var $t=Object.getPrototypeOf,Vt=Object.prototype.hasOwnProperty;var Bt=(e,t,r)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var jt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var qt=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Wt(t))!Vt.call(e,o)&&o!==r&&de(e,o,{get:()=>t[o],enumerable:!(n=Rt(t,o))||n.enumerable});return e};var B=(e,t,r)=>(r=e!=null?Ht($t(e)):{},qt(t||!e||!e.__esModule?de(r,"default",{value:e,enumerable:!0}):r,e));var j=(e,t,r)=>(Bt(e,typeof t!="symbol"?t+"":t,r),r);var L=jt((Pr,ne)=>{(function(){"use strict";var e={}.hasOwnProperty;function t(){for(var o="",i=0;i<arguments.length;i++){var c=arguments[i];c&&(o=n(o,r(c)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return t.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var i="";for(var c in o)e.call(o,c)&&o[c]&&(i=n(i,c));return i}function n(o,i){return i?o?o+" "+i:o+i:o}typeof ne<"u"&&ne.exports?(t.default=t,ne.exports=t):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return t}):window.classNames=t})()});var q=class{constructor({enabled:t=!1}){j(this,"enabled");this.enabled=t}_log(t,...r){this.enabled&&console[t]("Tronic Logger: ",...r)}log(...t){this._log("log",...t)}error(...t){this._log("error",...t)}warn(...t){this._log("warn",...t)}info(...t){this._log("info",...t)}debug(...t){this._log("debug",...t)}};function Ie(e){(window.Tronic?.queue||[]).forEach(function(r){e.logger.debug("processing queue item",r),e.apply(window,r)}),e.logger.debug("processed queue")}var K,p,$e,Gt,k,Le,Ve,he,Jt,I={},Be=[],Qt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ye=Array.isArray;function E(e,t){for(var r in t)e[r]=t[r];return e}function je(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,r){var n,o,i,c={};for(i in t)i=="key"?n=t[i]:i=="ref"?o=t[i]:c[i]=t[i];if(arguments.length>2&&(c.children=arguments.length>3?K.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)c[i]===void 0&&(c[i]=e.defaultProps[i]);return J(e,c,n,o,null)}function J(e,t,r,n,o){var i={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++$e,__i:-1,__u:0};return o==null&&p.vnode!=null&&p.vnode(i),i}function X(e){return e.children}function Q(e,t){this.props=e,this.context=t}function A(e,t){if(t==null)return e.__?A(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?A(e):null}function qe(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return qe(e)}}function Ue(e){(!e.__d&&(e.__d=!0)&&k.push(e)&&!Z.__r++||Le!==p.debounceRendering)&&((Le=p.debounceRendering)||Ve)(Z)}function Z(){var e,t,r,n,o,i,c,_,a;for(k.sort(he);e=k.shift();)e.__d&&(t=k.length,n=void 0,i=(o=(r=e).__v).__e,_=[],a=[],(c=r.__P)&&((n=E({},o)).__v=o.__v+1,p.vnode&&p.vnode(n),ge(c,n,o,r.__n,c.ownerSVGElement!==void 0,32&o.__u?[i]:null,_,i??A(o),!!(32&o.__u),a),n.__.__k[n.__i]=n,Qe(_,n,a),n.__e!=i&&qe(n)),k.length>t&&k.sort(he));Z.__r=0}function Ge(e,t,r,n,o,i,c,_,a,u,l){var s,d,f,g,C,v=n&&n.__k||Be,m=t.length;for(r.__d=a,Zt(r,t,v),a=r.__d,s=0;s<m;s++)(f=r.__k[s])!=null&&typeof f!="boolean"&&typeof f!="function"&&(d=f.__i===-1?I:v[f.__i]||I,f.__i=s,ge(e,f,d,o,i,c,_,a,u,l),g=f.__e,f.ref&&d.ref!=f.ref&&(d.ref&&ve(d.ref,null,f),l.push(f.ref,f.__c||g,f)),C==null&&g!=null&&(C=g),65536&f.__u||d.__k===f.__k?a=Je(f,a,e):typeof f.type=="function"&&f.__d!==void 0?a=f.__d:g&&(a=g.nextSibling),f.__d=void 0,f.__u&=-196609);r.__d=a,r.__e=C}function Zt(e,t,r){var n,o,i,c,_,a=t.length,u=r.length,l=u,s=0;for(e.__k=[],n=0;n<a;n++)(o=e.__k[n]=(o=t[n])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?J(null,o,null,null,o):ye(o)?J(X,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?J(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=e,o.__b=e.__b+1,_=Kt(o,r,c=n+s,l),o.__i=_,i=null,_!==-1&&(l--,(i=r[_])&&(i.__u|=131072)),i==null||i.__v===null?(_==-1&&s--,typeof o.type!="function"&&(o.__u|=65536)):_!==c&&(_===c+1?s++:_>c?l>a-c?s+=_-c:s--:s=_<c&&_==c-1?_-c:0,_!==n+s&&(o.__u|=65536))):(i=r[n])&&i.key==null&&i.__e&&(i.__e==e.__d&&(e.__d=A(i)),me(i,i,!1),r[n]=null,l--);if(l)for(n=0;n<u;n++)(i=r[n])!=null&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=A(i)),me(i,i))}function Je(e,t,r){var n,o;if(typeof e.type=="function"){for(n=e.__k,o=0;n&&o<n.length;o++)n[o]&&(n[o].__=e,t=Je(n[o],t,r));return t}return e.__e!=t&&(r.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function Kt(e,t,r,n){var o=e.key,i=e.type,c=r-1,_=r+1,a=t[r];if(a===null||a&&o==a.key&&i===a.type)return r;if(n>(a!=null&&!(131072&a.__u)?1:0))for(;c>=0||_<t.length;){if(c>=0){if((a=t[c])&&!(131072&a.__u)&&o==a.key&&i===a.type)return c;c--}if(_<t.length){if((a=t[_])&&!(131072&a.__u)&&o==a.key&&i===a.type)return _;_++}}return-1}function He(e,t,r){t[0]==="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||Qt.test(t)?r:r+"px"}function G(e,t,r,n,o){var i;e:if(t==="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||He(e.style,t,"");if(r)for(t in r)n&&r[t]===n[t]||He(e.style,t,r[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=r,r?n?r.u=n.u:(r.u=Date.now(),e.addEventListener(t,i?We:Re,i)):e.removeEventListener(t,i?We:Re,i);else{if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,r))}}function Re(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(p.event?p.event(e):e)}function We(e){return this.l[e.type+!0](p.event?p.event(e):e)}function ge(e,t,r,n,o,i,c,_,a,u){var l,s,d,f,g,C,v,m,b,x,W,z,ze,$,pe,T=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(a=!!(32&r.__u),i=[_=t.__e=r.__e]),(l=p.__b)&&l(t);e:if(typeof T=="function")try{if(m=t.props,b=(l=T.contextType)&&n[l.__c],x=l?b?b.props.value:l.__:n,r.__c?v=(s=t.__c=r.__c).__=s.__E:("prototype"in T&&T.prototype.render?t.__c=s=new T(m,x):(t.__c=s=new Q(m,x),s.constructor=T,s.render=Yt),b&&b.sub(s),s.props=m,s.state||(s.state={}),s.context=x,s.__n=n,d=s.__d=!0,s.__h=[],s._sb=[]),s.__s==null&&(s.__s=s.state),T.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=E({},s.__s)),E(s.__s,T.getDerivedStateFromProps(m,s.__s))),f=s.props,g=s.state,s.__v=t,d)T.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(T.getDerivedStateFromProps==null&&m!==f&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(m,x),!s.__e&&(s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(m,s.__s,x)===!1||t.__v===r.__v)){for(t.__v!==r.__v&&(s.props=m,s.state=s.__s,s.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.forEach(function(V){V&&(V.__=t)}),W=0;W<s._sb.length;W++)s.__h.push(s._sb[W]);s._sb=[],s.__h.length&&c.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(m,s.__s,x),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(f,g,C)})}if(s.context=x,s.props=m,s.__P=e,s.__e=!1,z=p.__r,ze=0,"prototype"in T&&T.prototype.render){for(s.state=s.__s,s.__d=!1,z&&z(t),l=s.render(s.props,s.state,s.context),$=0;$<s._sb.length;$++)s.__h.push(s._sb[$]);s._sb=[]}else do s.__d=!1,z&&z(t),l=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++ze<25);s.state=s.__s,s.getChildContext!=null&&(n=E(E({},n),s.getChildContext())),d||s.getSnapshotBeforeUpdate==null||(C=s.getSnapshotBeforeUpdate(f,g)),Ge(e,ye(pe=l!=null&&l.type===X&&l.key==null?l.props.children:l)?pe:[pe],t,r,n,o,i,c,_,a,u),s.base=t.__e,t.__u&=-161,s.__h.length&&c.push(s),v&&(s.__E=s.__=null)}catch(V){t.__v=null,a||i!=null?(t.__e=_,t.__u|=a?160:32,i[i.indexOf(_)]=null):(t.__e=r.__e,t.__k=r.__k),p.__e(V,t,r)}else i==null&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=Xt(r.__e,t,r,n,o,i,c,a,u);(l=p.diffed)&&l(t)}function Qe(e,t,r){t.__d=void 0;for(var n=0;n<r.length;n++)ve(r[n],r[++n],r[++n]);p.__c&&p.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(i){i.call(o)})}catch(i){p.__e(i,o.__v)}})}function Xt(e,t,r,n,o,i,c,_,a){var u,l,s,d,f,g,C,v=r.props,m=t.props,b=t.type;if(b==="svg"&&(o=!0),i!=null){for(u=0;u<i.length;u++)if((f=i[u])&&"setAttribute"in f==!!b&&(b?f.localName===b:f.nodeType===3)){e=f,i[u]=null;break}}if(e==null){if(b===null)return document.createTextNode(m);e=o?document.createElementNS("http://www.w3.org/2000/svg",b):document.createElement(b,m.is&&m),i=null,_=!1}if(b===null)v===m||_&&e.data===m||(e.data=m);else{if(i=i&&K.call(e.childNodes),v=r.props||I,!_&&i!=null)for(v={},u=0;u<e.attributes.length;u++)v[(f=e.attributes[u]).name]=f.value;for(u in v)f=v[u],u=="children"||(u=="dangerouslySetInnerHTML"?s=f:u==="key"||u in m||G(e,u,null,f,o));for(u in m)f=m[u],u=="children"?d=f:u=="dangerouslySetInnerHTML"?l=f:u=="value"?g=f:u=="checked"?C=f:u==="key"||_&&typeof f!="function"||v[u]===f||G(e,u,f,v[u],o);if(l)_||s&&(l.__html===s.__html||l.__html===e.innerHTML)||(e.innerHTML=l.__html),t.__k=[];else if(s&&(e.innerHTML=""),Ge(e,ye(d)?d:[d],t,r,n,o&&b!=="foreignObject",i,c,i?i[0]:r.__k&&A(r,0),_,a),i!=null)for(u=i.length;u--;)i[u]!=null&&je(i[u]);_||(u="value",g!==void 0&&(g!==e[u]||b==="progress"&&!g||b==="option"&&g!==v[u])&&G(e,u,g,v[u],!1),u="checked",C!==void 0&&C!==e[u]&&G(e,u,C,v[u],!1))}return e}function ve(e,t,r){try{typeof e=="function"?e(t):e.current=t}catch(n){p.__e(n,r)}}function me(e,t,r){var n,o;if(p.unmount&&p.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||ve(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){p.__e(i,t)}n.base=n.__P=null,e.__c=void 0}if(n=e.__k)for(o=0;o<n.length;o++)n[o]&&me(n[o],t,r||typeof e.type!="function");r||e.__e==null||je(e.__e),e.__=e.__e=e.__d=void 0}function Yt(e,t,r){return this.constructor(e,r)}function Ze(e,t,r){var n,o,i,c;p.__&&p.__(e,t),o=(n=typeof r=="function")?null:r&&r.__k||t.__k,i=[],c=[],ge(t,e=(!n&&r||t).__k=h(X,null,[e]),o||I,I,t.ownerSVGElement!==void 0,!n&&r?[r]:o?null:t.firstChild?K.call(t.childNodes):null,i,!n&&r?r:o?o.__e:t.firstChild,n,c),Qe(i,e,c)}K=Be.slice,p={__e:function(e,t,r,n){for(var o,i,c;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(e)),c=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,n||{}),c=o.__d),c)return o.__E=o}catch(_){e=_}throw e}},$e=0,Gt=function(e){return e!=null&&e.constructor==null},Q.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=E({},this.state),typeof e=="function"&&(e=e(E({},r),this.props)),e&&E(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),Ue(this))},Q.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ue(this))},Q.prototype.render=X,k=[],Ve=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,he=function(e,t){return e.__v.__b-t.__v.__b},Z.__r=0,Jt=0;var te,y,be,Ke,Se=0,ot=[],Y=[],Xe=p.__b,Ye=p.__r,et=p.diffed,tt=p.__c,rt=p.unmount;function it(e,t){p.__h&&p.__h(y,e,Se||t),Se=0;var r=y.__H||(y.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({__V:Y}),r.__[e]}function re(e){return Se=1,er(st,e)}function er(e,t,r){var n=it(te++,2);if(n.t=e,!n.__c&&(n.__=[r?r(t):st(void 0,t),function(_){var a=n.__N?n.__N[0]:n.__[0],u=n.t(a,_);a!==u&&(n.__N=[u,n.__[1]],n.__c.setState({}))}],n.__c=y,!y.u)){var o=function(_,a,u){if(!n.__c.__H)return!0;var l=n.__c.__H.__.filter(function(d){return d.__c});if(l.every(function(d){return!d.__N}))return!i||i.call(this,_,a,u);var s=!1;return l.forEach(function(d){if(d.__N){var f=d.__[0];d.__=d.__N,d.__N=void 0,f!==d.__[0]&&(s=!0)}}),!(!s&&n.__c.props===_)&&(!i||i.call(this,_,a,u))};y.u=!0;var i=y.shouldComponentUpdate,c=y.componentWillUpdate;y.componentWillUpdate=function(_,a,u){if(this.__e){var l=i;i=void 0,o(_,a,u),i=l}c&&c.call(this,_,a,u)},y.shouldComponentUpdate=o}return n.__N||n.__}function Te(e,t){var r=it(te++,3);!p.__s&&nr(r.__H,t)&&(r.__=e,r.i=t,y.__H.__h.push(r))}function tr(){for(var e;e=ot.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ee),e.__H.__h.forEach(we),e.__H.__h=[]}catch(t){e.__H.__h=[],p.__e(t,e.__v)}}p.__b=function(e){y=null,Xe&&Xe(e)},p.__r=function(e){Ye&&Ye(e),te=0;var t=(y=e.__c).__H;t&&(be===y?(t.__h=[],y.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.__V=Y,r.__N=r.i=void 0})):(t.__h.forEach(ee),t.__h.forEach(we),t.__h=[],te=0)),be=y},p.diffed=function(e){et&&et(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ot.push(t)!==1&&Ke===p.requestAnimationFrame||((Ke=p.requestAnimationFrame)||rr)(tr)),t.__H.__.forEach(function(r){r.i&&(r.__H=r.i),r.__V!==Y&&(r.__=r.__V),r.i=void 0,r.__V=Y})),be=y=null},p.__c=function(e,t){t.some(function(r){try{r.__h.forEach(ee),r.__h=r.__h.filter(function(n){return!n.__||we(n)})}catch(n){t.some(function(o){o.__h&&(o.__h=[])}),t=[],p.__e(n,r.__v)}}),tt&&tt(e,t)},p.unmount=function(e){rt&&rt(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{ee(n)}catch(o){t=o}}),r.__H=void 0,t&&p.__e(t,r.__v))};var nt=typeof requestAnimationFrame=="function";function rr(e){var t,r=function(){clearTimeout(n),nt&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,100);nt&&(t=requestAnimationFrame(r))}function ee(e){var t=y,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),y=t}function we(e){var t=y;e.__c=e.__(),y=t}function nr(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}function st(e,t){return typeof t=="function"?t(e):t}var ct=B(L(),1),or=({children:e,state:t,buttonProps:r})=>h("button",{style:{backgroundColor:t.theme?.primary},className:(0,ct.default)("tronic-embed-launcher",{left:t.placement==="left",right:t.placement==="right"}),...r},e),_t=or;var at=B(L(),1);var ut=({visible:e,theme:t})=>{let r=t?.primaryText;return h("div",{className:(0,at.default)(["tronic-embed-launcher-icon tronic-embed-launcher-icon-minimize",{visible:e}])},h("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M18 6L6 18",stroke:r,strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round"}),h("path",{d:"M6 6L18 18",stroke:r,strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round"})))};var ft=B(L(),1);var lt=({visible:e,theme:t})=>{let r=t?.primaryText;return h("div",{className:(0,ft.default)(["tronic-embed-launcher-icon tronic-embed-launcher-icon-open",{visible:!e}])},h("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M22 18L22 14C22 12.5 21.4444 12 19.7778 12L16.4445 12C15.3334 12 15.3333 15 12 15C8.66667 15 8.66667 12 7.55557 12L4.22223 12C2.99493 12 2 12.5 2 14L2 18C2 19.5 2.99493 20 4.22222 20L19.7778 20C21.4444 20 22 19.5 22 18Z",stroke:r,strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round"}),h("path",{d:"M22 14L21.9998 10.1818C21.9998 8.54545 21.4442 8 19.7776 8L14.4999 8L9.22215 8L4.2222 8C2.99491 8 2 8.54545 2 10.1818L2.0002 14",stroke:r,strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round"}),h("path",{d:"M22 10L21.9998 6.18182C21.9998 4.54545 21.4443 4 19.7776 4L14.4999 4L9.22215 4L4.2222 4C2.99491 4 2 4.54545 2 6.18182L2.0002 10",stroke:r,strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round"})))};var Ce=B(L(),1);function pt(e,t){switch(t){case"local":return`https://${e}.local.tronic.app`;case"dev":return`https://${e}.dev.tronic.app`;case"staging":return`https://${e}.staging.tronic.app`;case"uat":return`https://${e}.uat.tronic.app`;case"production":return`https://${e}.tronic.app`;default:return`https://${e}.tronic.app`}}var dt=({friendlyId:e,visible:t,placement:r,theme:n,__tronicEnvironment:o})=>{let[i,c]=re(!1);return h("div",{className:(0,Ce.default)("tronic-app-container",{visible:t,left:r==="left",right:r==="right"})},h("div",{className:(0,Ce.default)("tronic-app-container-loader",{visible:!i})},h("div",{role:"status"},h("svg",{"aria-hidden":"true",className:"tn-w-12 tn-h-12 tn-text-gray-200 tn-animate-spin",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{fill:n?.primary}},h("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),h("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})))),h("iframe",{onLoad:()=>{c(!0)},src:pt(e,o)}))};function ht({settings:e,initialState:t,dispatch:r,stateObserver:n}){let[o,i]=re(t),c=_=>i({...o,..._});return Te(()=>{n.subscribe(_=>{c(_)})},[]),Te(()=>{r({type:o.visible?"SHOW":"HIDE"})},[o.visible]),h("div",{class:"tronic-embed-container"},h(dt,{...o,__tronicEnvironment:e.__tronicEnvironment,dispatch:r}),h(_t,{state:o,buttonProps:{onClick:()=>{c({visible:!o.visible})}}},h(lt,{...o}),h(ut,{...o})))}var oe="tronic",ie={friendlyId:"",visible:!1,mounted:!1,placement:"right",theme:{primary:"#000000",primaryText:"#FFFFFF"}};var yt=function(e,t,r,n){var o;t[0]=0;for(var i=1;i<t.length;i++){var c=t[i++],_=t[i]?(t[0]|=c?1:2,r[t[i++]]):t[++i];c===3?n[0]=_:c===4?n[1]=Object.assign(n[1]||{},_):c===5?(n[1]=n[1]||{})[t[++i]]=_:c===6?n[1][t[++i]]+=_+"":c?(o=e.apply(_,yt(e,_,r,["",null])),n.push(o),_[0]?t[0]|=2:(t[i-2]=0,t[i]=o)):n.push(_)}return n},mt=new Map;function gt(e){var t=mt.get(this);return t||(t=new Map,mt.set(this,t)),(t=yt(this,t.get(e)||(t.set(e,t=function(r){for(var n,o,i=1,c="",_="",a=[0],u=function(d){i===1&&(d||(c=c.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,d,c):i===3&&(d||c)?(a.push(3,d,c),i=2):i===2&&c==="..."&&d?a.push(4,d,0):i===2&&c&&!d?a.push(5,0,!0,c):i>=5&&((c||!d&&i===5)&&(a.push(i,0,c,o),i=6),d&&(a.push(i,d,0,o),i=6)),c=""},l=0;l<r.length;l++){l&&(i===1&&u(),u(l));for(var s=0;s<r[l].length;s++)n=r[l][s],i===1?n==="<"?(u(),a=[a],i=3):c+=n:i===4?c==="--"&&n===">"?(i=1,c=""):c=n+c[0]:_?n===_?_="":c+=n:n==='"'||n==="'"?_=n:n===">"?(u(),i=1):i&&(n==="="?(i=5,o=c,c=""):n==="/"&&(i<5||r[l][s+1]===">")?(u(),i===3&&(a=a[0]),i=a,(a=a[0]).push(2,0,i),i=0):n===" "||n==="	"||n===`
`||n==="\r"?(u(),i=2):c+=n),i===3&&c==="!--"&&(i=4,a=a[0])}return u(),a}(e)),t),arguments,[])).length>1?t:t[0]}var ir=gt.bind(h);function vt(e,t,r={}){Ze(ir`<${e} ...${r} />`,t)}function bt(e){e.state.mounted&&e.unmount();let t=document.createElement("div");t.id=oe,t.className="tronic-namespace",document.body.appendChild(t),vt(ht,t,{settings:e.settings,initialState:e.state,dispatch:e.dispatch,stateObserver:e.stateObserver}),e.dispatch({type:"MOUNT"})}function St(e){if(!e.state.mounted)return;let t=document.getElementById(oe);t&&t.remove(),e.dispatch({type:"UNMOUNT"})}function wt(e,t){e.dispatch({type:"UPDATE_SETTINGS",payload:t})}function Tt(e){e.dispatch({type:"SHOW"})}function Ct(e){e.dispatch({type:"HIDE"})}var Dt=Symbol.for("immer-nothing"),Pt=Symbol.for("immer-draftable"),S=Symbol.for("immer-state");function P(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var M=Object.getPrototypeOf;function F(e){return!!e&&!!e[S]}function D(e){return e?Nt(e)||Array.isArray(e)||!!e[Pt]||!!e.constructor?.[Pt]||ae(e)||ue(e):!1}var sr=Object.prototype.constructor.toString();function Nt(e){if(!e||typeof e!="object")return!1;let t=M(e);if(t===null)return!0;let r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===sr}function U(e,t){_e(e)===0?Object.entries(e).forEach(([r,n])=>{t(r,n,e)}):e.forEach((r,n)=>t(n,r,e))}function _e(e){let t=e[S];return t?t.type_:Array.isArray(e)?1:ae(e)?2:ue(e)?3:0}function Ee(e,t){return _e(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function At(e,t,r){let n=_e(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function cr(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function ae(e){return e instanceof Map}function ue(e){return e instanceof Set}function O(e){return e.copy_||e.base_}function ke(e,t){if(ae(e))return new Map(e);if(ue(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&Nt(e))return M(e)?{...e}:Object.assign(Object.create(null),e);let r=Object.getOwnPropertyDescriptors(e);delete r[S];let n=Reflect.ownKeys(r);for(let o=0;o<n.length;o++){let i=n[o],c=r[i];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(r[i]={configurable:!0,writable:!0,enumerable:c.enumerable,value:e[i]})}return Object.create(M(e),r)}function Me(e,t=!1){return fe(e)||F(e)||!D(e)||(_e(e)>1&&(e.set=e.add=e.clear=e.delete=_r),Object.freeze(e),t&&U(e,(r,n)=>Me(n,!0),!0)),e}function _r(){P(2)}function fe(e){return Object.isFrozen(e)}var ar={};function N(e){let t=ar[e];return t||P(0,e),t}var H;function Mt(){return H}function ur(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function xt(e,t){t&&(N("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Oe(e){De(e),e.drafts_.forEach(fr),e.drafts_=null}function De(e){e===H&&(H=e.parent_)}function Et(e){return H=ur(H,e)}function fr(e){let t=e[S];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function kt(e,t){t.unfinalizedDrafts_=t.drafts_.length;let r=t.drafts_[0];return e!==void 0&&e!==r?(r[S].modified_&&(Oe(t),P(4)),D(e)&&(e=se(t,e),t.parent_||ce(t,e)),t.patches_&&N("Patches").generateReplacementPatches_(r[S].base_,e,t.patches_,t.inversePatches_)):e=se(t,r,[]),Oe(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Dt?e:void 0}function se(e,t,r){if(fe(t))return t;let n=t[S];if(!n)return U(t,(o,i)=>Ot(e,n,t,o,i,r),!0),t;if(n.scope_!==e)return t;if(!n.modified_)return ce(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;let o=n.copy_,i=o,c=!1;n.type_===3&&(i=new Set(o),o.clear(),c=!0),U(i,(_,a)=>Ot(e,n,o,_,a,r,c)),ce(e,o,!1),r&&e.patches_&&N("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function Ot(e,t,r,n,o,i,c){if(F(o)){let _=i&&t&&t.type_!==3&&!Ee(t.assigned_,n)?i.concat(n):void 0,a=se(e,o,_);if(At(r,n,a),F(a))e.canAutoFreeze_=!1;else return}else c&&r.add(o);if(D(o)&&!fe(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;se(e,o),(!t||!t.scope_.parent_)&&ce(e,o)}}function ce(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Me(t,r)}function lr(e,t){let r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:Mt(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1},o=n,i=Fe;r&&(o=[n],i=R);let{revoke:c,proxy:_}=Proxy.revocable(o,i);return n.draft_=_,n.revoke_=c,_}var Fe={get(e,t){if(t===S)return e;let r=O(e);if(!Ee(r,t))return pr(e,r,t);let n=r[t];return e.finalized_||!D(n)?n:n===Pe(e.base_,t)?(xe(e),e.copy_[t]=Ae(n,e)):n},has(e,t){return t in O(e)},ownKeys(e){return Reflect.ownKeys(O(e))},set(e,t,r){let n=Ft(O(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){let o=Pe(O(e),t),i=o?.[S];if(i&&i.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(cr(r,o)&&(r!==void 0||Ee(e.base_,t)))return!0;xe(e),Ne(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Pe(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,xe(e),Ne(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){let r=O(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){P(11)},getPrototypeOf(e){return M(e.base_)},setPrototypeOf(){P(12)}},R={};U(Fe,(e,t)=>{R[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});R.deleteProperty=function(e,t){return R.set.call(this,e,t,void 0)};R.set=function(e,t,r){return Fe.set.call(this,e[0],t,r,e[0])};function Pe(e,t){let r=e[S];return(r?O(r):e)[t]}function pr(e,t,r){let n=Ft(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}function Ft(e,t){if(!(t in e))return;let r=M(e);for(;r;){let n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=M(r)}}function Ne(e){e.modified_||(e.modified_=!0,e.parent_&&Ne(e.parent_))}function xe(e){e.copy_||(e.copy_=ke(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var dr=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){let i=r;r=t;let c=this;return function(a=i,...u){return c.produce(a,l=>r.call(this,l,...u))}}typeof r!="function"&&P(6),n!==void 0&&typeof n!="function"&&P(7);let o;if(D(t)){let i=Et(this),c=Ae(t,void 0),_=!0;try{o=r(c),_=!1}finally{_?Oe(i):De(i)}return xt(i,n),kt(o,i)}else if(!t||typeof t!="object"){if(o=r(t),o===void 0&&(o=t),o===Dt&&(o=void 0),this.autoFreeze_&&Me(o,!0),n){let i=[],c=[];N("Patches").generateReplacementPatches_(t,o,i,c),n(i,c)}return o}else P(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(c,..._)=>this.produceWithPatches(c,a=>t(a,..._));let n,o;return[this.produce(t,r,(c,_)=>{n=c,o=_}),n,o]},typeof e?.autoFreeze=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof e?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){D(e)||P(8),F(e)&&(e=hr(e));let t=Et(this),r=Ae(e,void 0);return r[S].isManual_=!0,De(t),r}finishDraft(e,t){let r=e&&e[S];(!r||!r.isManual_)&&P(9);let{scope_:n}=r;return xt(n,t),kt(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){let o=t[r];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}r>-1&&(t=t.slice(r+1));let n=N("Patches").applyPatches_;return F(e)?n(e,t):this.produce(e,o=>n(o,t))}};function Ae(e,t){let r=ae(e)?N("MapSet").proxyMap_(e,t):ue(e)?N("MapSet").proxySet_(e,t):lr(e,t);return(t?t.scope_:Mt()).drafts_.push(r),r}function hr(e){return F(e)||P(10,e),zt(e)}function zt(e){if(!D(e)||fe(e))return e;let t=e[S],r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=ke(e,t.scope_.immer_.useStrictShallowCopy_)}else r=ke(e,!0);return U(r,(n,o)=>{At(r,n,zt(o))}),t&&(t.finalized_=!1),r}var w=new dr,It=w.produce,fn=w.produceWithPatches.bind(w),ln=w.setAutoFreeze.bind(w),pn=w.setUseStrictShallowCopy.bind(w),dn=w.applyPatches.bind(w),hn=w.createDraft.bind(w),mn=w.finishDraft.bind(w);var mr=(e=ie,t,r)=>It(e,n=>{switch(t.type){case"SHOW":n.visible=!0;break;case"HIDE":n.visible=!1;break;case"MOUNT":n.mounted=!0;break;case"UNMOUNT":n.mounted=!1;break;case"UPDATE_SETTINGS":n.theme=t.payload?.theme||e.theme,n.friendlyId=t.payload?.friendlyId||e.friendlyId,n.placement=t.payload?.placement||e.placement;break;default:break}r.debug(`reducer(${t.type})`,{prevState:e,nextState:JSON.parse(JSON.stringify(n))})}),Lt=mr;var le=class{constructor(){j(this,"subscribers");this.subscribers=[]}subscribe(t){this.subscribers.push(t)}notify(t){this.subscribers.forEach(r=>r(t))}};var yr={debug:!1,mountOnInitialize:!0,__tronicEnvironment:"production"};function Ut(e){let t=function(r,...n){t.logger.debug("method call:",r,n),t[r]?t[r](...n):t.logger.error("method not found:",r)};return t.settings={...yr,...e},t.logger=new q({enabled:t.settings.debug}),t.queue=[],t.stateObserver=new le,t.state=ie,t.dispatch=r=>{t.state=Lt(t.state,r,t.logger),t.stateObserver.notify(t.state)},t.dispatch({type:"UPDATE_SETTINGS",payload:{friendlyId:t.settings.friendlyId,theme:t.settings.theme,placement:t.settings.placement}}),t.mount=bt.bind(null,t),t.unmount=St.bind(null,t),t.update=wt.bind(null,t),t.processQueue=Ie.bind(null,t),t.show=Tt.bind(null,t),t.hide=Ct.bind(null,t),t.settings.mountOnInitialize&&t.mount(),t}(function(){if(window.tronicSettings&&window.tronicSettings.friendlyId){let e=Ut(window.tronicSettings);e.processQueue(),window.Tronic=e}else console.error("friendlyId not provided")})();
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
