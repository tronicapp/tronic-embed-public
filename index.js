var A,p,ne,Fe,T,Z,oe,$,Ne,H={},re=[],Ue=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,R=Array.isArray;function C(t,e){for(var n in e)t[n]=e[n];return t}function ie(t){var e=t.parentNode;e&&e.removeChild(t)}function v(t,e,n){var o,_,r,c={};for(r in e)r=="key"?o=e[r]:r=="ref"?_=e[r]:c[r]=e[r];if(arguments.length>2&&(c.children=arguments.length>3?A.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(r in t.defaultProps)c[r]===void 0&&(c[r]=t.defaultProps[r]);return F(t,c,o,_,null)}function F(t,e,n,o,_){var r={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:_??++ne,__i:-1,__u:0};return _==null&&p.vnode!=null&&p.vnode(r),r}function L(t){return t.children}function N(t,e){this.props=t,this.context=e}function E(t,e){if(e==null)return t.__?E(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?E(t):null}function _e(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return _e(t)}}function K(t){(!t.__d&&(t.__d=!0)&&T.push(t)&&!U.__r++||Z!==p.debounceRendering)&&((Z=p.debounceRendering)||oe)(U)}function U(){var t,e,n,o,_,r,c,u,s;for(T.sort($);t=T.shift();)t.__d&&(e=T.length,o=void 0,r=(_=(n=t).__v).__e,u=[],s=[],(c=n.__P)&&((o=C({},_)).__v=_.__v+1,p.vnode&&p.vnode(o),q(c,o,_,n.__n,c.ownerSVGElement!==void 0,32&_.__u?[r]:null,u,r??E(_),!!(32&_.__u),s),o.__.__k[o.__i]=o,le(u,o,s),o.__e!=r&&_e(o)),T.length>e&&T.sort($));U.__r=0}function ce(t,e,n,o,_,r,c,u,s,l,f){var i,d,a,g,w,b=o&&o.__k||re,m=e.length;for(n.__d=s,Ae(n,e,b),s=n.__d,i=0;i<m;i++)(a=n.__k[i])!=null&&typeof a!="boolean"&&typeof a!="function"&&(d=a.__i===-1?H:b[a.__i]||H,a.__i=i,q(t,a,d,_,r,c,u,s,l,f),g=a.__e,a.ref&&d.ref!=a.ref&&(d.ref&&O(d.ref,null,a),f.push(a.ref,a.__c||g,a)),w==null&&g!=null&&(w=g),65536&a.__u||d.__k===a.__k?s=se(a,s,t):typeof a.type=="function"&&a.__d!==void 0?s=a.__d:g&&(s=g.nextSibling),a.__d=void 0,a.__u&=-196609);n.__d=s,n.__e=w}function Ae(t,e,n){var o,_,r,c,u,s=e.length,l=n.length,f=l,i=0;for(t.__k=[],o=0;o<s;o++)(_=t.__k[o]=(_=e[o])==null||typeof _=="boolean"||typeof _=="function"?null:typeof _=="string"||typeof _=="number"||typeof _=="bigint"||_.constructor==String?F(null,_,null,null,_):R(_)?F(L,{children:_},null,null,null):_.constructor===void 0&&_.__b>0?F(_.type,_.props,_.key,_.ref?_.ref:null,_.__v):_)!=null?(_.__=t,_.__b=t.__b+1,u=Le(_,n,c=o+i,f),_.__i=u,r=null,u!==-1&&(f--,(r=n[u])&&(r.__u|=131072)),r==null||r.__v===null?(u==-1&&i--,typeof _.type!="function"&&(_.__u|=65536)):u!==c&&(u===c+1?i++:u>c?f>s-c?i+=u-c:i--:i=u<c&&u==c-1?u-c:0,u!==o+i&&(_.__u|=65536))):(r=n[o])&&r.key==null&&r.__e&&(r.__e==t.__d&&(t.__d=E(r)),B(r,r,!1),n[o]=null,f--);if(f)for(o=0;o<l;o++)(r=n[o])!=null&&!(131072&r.__u)&&(r.__e==t.__d&&(t.__d=E(r)),B(r,r))}function se(t,e,n){var o,_;if(typeof t.type=="function"){for(o=t.__k,_=0;o&&_<o.length;_++)o[_]&&(o[_].__=t,e=se(o[_],e,n));return e}return t.__e!=e&&(n.insertBefore(t.__e,e||null),e=t.__e),e&&e.nextSibling}function Le(t,e,n,o){var _=t.key,r=t.type,c=n-1,u=n+1,s=e[n];if(s===null||s&&_==s.key&&r===s.type)return n;if(o>(s!=null&&!(131072&s.__u)?1:0))for(;c>=0||u<e.length;){if(c>=0){if((s=e[c])&&!(131072&s.__u)&&_==s.key&&r===s.type)return c;c--}if(u<e.length){if((s=e[u])&&!(131072&s.__u)&&_==s.key&&r===s.type)return u;u++}}return-1}function Y(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||Ue.test(e)?n:n+"px"}function M(t,e,n,o,_){var r;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof o=="string"&&(t.style.cssText=o=""),o)for(e in o)n&&e in n||Y(t.style,e,"");if(n)for(e in n)o&&n[e]===o[e]||Y(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=n,n?o?n.u=o.u:(n.u=Date.now(),t.addEventListener(e,r?te:ee,r)):t.removeEventListener(e,r?te:ee,r);else{if(_)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function ee(t){var e=this.l[t.type+!1];if(t.t){if(t.t<=e.u)return}else t.t=Date.now();return e(p.event?p.event(t):t)}function te(t){return this.l[t.type+!0](p.event?p.event(t):t)}function q(t,e,n,o,_,r,c,u,s,l){var f,i,d,a,g,w,b,m,y,k,P,S,J,D,W,x=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(s=!!(32&n.__u),r=[u=e.__e=n.__e]),(f=p.__b)&&f(e);e:if(typeof x=="function")try{if(m=e.props,y=(f=x.contextType)&&o[f.__c],k=f?y?y.props.value:f.__:o,n.__c?b=(i=e.__c=n.__c).__=i.__E:("prototype"in x&&x.prototype.render?e.__c=i=new x(m,k):(e.__c=i=new N(m,k),i.constructor=x,i.render=Ie),y&&y.sub(i),i.props=m,i.state||(i.state={}),i.context=k,i.__n=o,d=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),x.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=C({},i.__s)),C(i.__s,x.getDerivedStateFromProps(m,i.__s))),a=i.props,g=i.state,i.__v=e,d)x.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(x.getDerivedStateFromProps==null&&m!==a&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(m,k),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(m,i.__s,k)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(i.props=m,i.state=i.__s,i.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(z){z&&(z.__=e)}),P=0;P<i._sb.length;P++)i.__h.push(i._sb[P]);i._sb=[],i.__h.length&&c.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(m,i.__s,k),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(a,g,w)})}if(i.context=k,i.props=m,i.__P=t,i.__e=!1,S=p.__r,J=0,"prototype"in x&&x.prototype.render){for(i.state=i.__s,i.__d=!1,S&&S(e),f=i.render(i.props,i.state,i.context),D=0;D<i._sb.length;D++)i.__h.push(i._sb[D]);i._sb=[]}else do i.__d=!1,S&&S(e),f=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++J<25);i.state=i.__s,i.getChildContext!=null&&(o=C(C({},o),i.getChildContext())),d||i.getSnapshotBeforeUpdate==null||(w=i.getSnapshotBeforeUpdate(a,g)),ce(t,R(W=f!=null&&f.type===L&&f.key==null?f.props.children:f)?W:[W],e,n,o,_,r,c,u,s,l),i.base=e.__e,e.__u&=-161,i.__h.length&&c.push(i),b&&(i.__E=i.__=null)}catch(z){e.__v=null,s||r!=null?(e.__e=u,e.__u|=s?160:32,r[r.indexOf(u)]=null):(e.__e=n.__e,e.__k=n.__k),p.__e(z,e,n)}else r==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Ve(n.__e,e,n,o,_,r,c,s,l);(f=p.diffed)&&f(e)}function le(t,e,n){e.__d=void 0;for(var o=0;o<n.length;o++)O(n[o],n[++o],n[++o]);p.__c&&p.__c(e,t),t.some(function(_){try{t=_.__h,_.__h=[],t.some(function(r){r.call(_)})}catch(r){p.__e(r,_.__v)}})}function Ve(t,e,n,o,_,r,c,u,s){var l,f,i,d,a,g,w,b=n.props,m=e.props,y=e.type;if(y==="svg"&&(_=!0),r!=null){for(l=0;l<r.length;l++)if((a=r[l])&&"setAttribute"in a==!!y&&(y?a.localName===y:a.nodeType===3)){t=a,r[l]=null;break}}if(t==null){if(y===null)return document.createTextNode(m);t=_?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,m.is&&m),r=null,u=!1}if(y===null)b===m||u&&t.data===m||(t.data=m);else{if(r=r&&A.call(t.childNodes),b=n.props||H,!u&&r!=null)for(b={},l=0;l<t.attributes.length;l++)b[(a=t.attributes[l]).name]=a.value;for(l in b)a=b[l],l=="children"||(l=="dangerouslySetInnerHTML"?i=a:l==="key"||l in m||M(t,l,null,a,_));for(l in m)a=m[l],l=="children"?d=a:l=="dangerouslySetInnerHTML"?f=a:l=="value"?g=a:l=="checked"?w=a:l==="key"||u&&typeof a!="function"||b[l]===a||M(t,l,a,b[l],_);if(f)u||i&&(f.__html===i.__html||f.__html===t.innerHTML)||(t.innerHTML=f.__html),e.__k=[];else if(i&&(t.innerHTML=""),ce(t,R(d)?d:[d],e,n,o,_&&y!=="foreignObject",r,c,r?r[0]:n.__k&&E(n,0),u,s),r!=null)for(l=r.length;l--;)r[l]!=null&&ie(r[l]);u||(l="value",g!==void 0&&(g!==t[l]||y==="progress"&&!g||y==="option"&&g!==b[l])&&M(t,l,g,b[l],!1),l="checked",w!==void 0&&w!==t[l]&&M(t,l,w,b[l],!1))}return t}function O(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(o){p.__e(o,n)}}function B(t,e,n){var o,_;if(p.unmount&&p.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||O(o,null,e)),(o=t.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){p.__e(r,e)}o.base=o.__P=null,t.__c=void 0}if(o=t.__k)for(_=0;_<o.length;_++)o[_]&&B(o[_],e,n||typeof t.type!="function");n||t.__e==null||ie(t.__e),t.__=t.__e=t.__d=void 0}function Ie(t,e,n){return this.constructor(t,n)}function ue(t,e,n){var o,_,r,c;p.__&&p.__(t,e),_=(o=typeof n=="function")?null:n&&n.__k||e.__k,r=[],c=[],q(e,t=(!o&&n||e).__k=v(L,null,[t]),_||H,H,e.ownerSVGElement!==void 0,!o&&n?[n]:_?null:e.firstChild?A.call(e.childNodes):null,r,!o&&n?n:_?_.__e:e.firstChild,o,c),le(r,t,c)}A=re.slice,p={__e:function(t,e,n,o){for(var _,r,c;e=e.__;)if((_=e.__c)&&!_.__)try{if((r=_.constructor)&&r.getDerivedStateFromError!=null&&(_.setState(r.getDerivedStateFromError(t)),c=_.__d),_.componentDidCatch!=null&&(_.componentDidCatch(t,o||{}),c=_.__d),c)return _.__E=_}catch(u){t=u}throw t}},ne=0,Fe=function(t){return t!=null&&t.constructor==null},N.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof t=="function"&&(t=t(C({},n),this.props)),t&&C(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),K(this))},N.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),K(this))},N.prototype.render=L,T=[],oe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,$=function(t,e){return t.__v.__b-e.__v.__b},U.__r=0,Ne=0;var Q,h,j,ae,G=0,ge=[],V=[],fe=p.__b,pe=p.__r,de=p.diffed,me=p.__c,he=p.unmount;function We(t,e){p.__h&&p.__h(h,t,G||e),G=0;var n=h.__H||(h.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:V}),n.__[t]}function be(t){return G=1,$e(ye,t)}function $e(t,e,n){var o=We(Q++,2);if(o.t=t,!o.__c&&(o.__=[n?n(e):ye(void 0,e),function(u){var s=o.__N?o.__N[0]:o.__[0],l=o.t(s,u);s!==l&&(o.__N=[l,o.__[1]],o.__c.setState({}))}],o.__c=h,!h.u)){var _=function(u,s,l){if(!o.__c.__H)return!0;var f=o.__c.__H.__.filter(function(d){return d.__c});if(f.every(function(d){return!d.__N}))return!r||r.call(this,u,s,l);var i=!1;return f.forEach(function(d){if(d.__N){var a=d.__[0];d.__=d.__N,d.__N=void 0,a!==d.__[0]&&(i=!0)}}),!(!i&&o.__c.props===u)&&(!r||r.call(this,u,s,l))};h.u=!0;var r=h.shouldComponentUpdate,c=h.componentWillUpdate;h.componentWillUpdate=function(u,s,l){if(this.__e){var f=r;r=void 0,_(u,s,l),r=f}c&&c.call(this,u,s,l)},h.shouldComponentUpdate=_}return o.__N||o.__}function Be(){for(var t;t=ge.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(I),t.__H.__h.forEach(X),t.__H.__h=[]}catch(e){t.__H.__h=[],p.__e(e,t.__v)}}p.__b=function(t){h=null,fe&&fe(t)},p.__r=function(t){pe&&pe(t),Q=0;var e=(h=t.__c).__H;e&&(j===h?(e.__h=[],h.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=V,n.__N=n.i=void 0})):(e.__h.forEach(I),e.__h.forEach(X),e.__h=[],Q=0)),j=h},p.diffed=function(t){de&&de(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(ge.push(e)!==1&&ae===p.requestAnimationFrame||((ae=p.requestAnimationFrame)||Re)(Be)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==V&&(n.__=n.__V),n.i=void 0,n.__V=V})),j=h=null},p.__c=function(t,e){e.some(function(n){try{n.__h.forEach(I),n.__h=n.__h.filter(function(o){return!o.__||X(o)})}catch(o){e.some(function(_){_.__h&&(_.__h=[])}),e=[],p.__e(o,n.__v)}}),me&&me(t,e)},p.unmount=function(t){he&&he(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{I(o)}catch(_){e=_}}),n.__H=void 0,e&&p.__e(e,n.__v))};var ve=typeof requestAnimationFrame=="function";function Re(t){var e,n=function(){clearTimeout(o),ve&&cancelAnimationFrame(e),setTimeout(t)},o=setTimeout(n,100);ve&&(e=requestAnimationFrame(n))}function I(t){var e=h,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),h=e}function X(t){var e=h;t.__c=t.__(),h=e}function ye(t,e){return typeof e=="function"?e(t):e}function xe(t){let[e,n]=be(!1);return v("div",{class:"tronic-embed tronic-namespace"},v("div",{class:"tronic-embed-launcher tronic-launcher",role:"button",tabIndex:0,"aria-label":"Open tronic wallet","aria-live":"polite",onClick:()=>n(!e)},v("div",{class:"tronic-embed-launcher-icon tronic-embed-launcher-icon-open"},v("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 50 62.5",style:"enable-background:new 0 0 50 50;","xml:space":"preserve"},v("g",null,v("g",null,v("path",{d:"M38.1121,25.1354h7.77v-5.64c0-2.03-1.64-3.66-3.67-3.66c-0.31,0-0.61-0.01-0.91-0.01v-3.33c0-3.45-2.8-6.25-6.25-6.25    H29.812l4.01,3h1.23c1.79,0,3.25,1.45,3.25,3.24v3.34h-29.8c-1.8199,0-3.3-1.47-3.3-3.29s1.48-3.29,3.3-3.29h2.08l2.25-3h-6.11    c-2.35,0.15-4.51,2.03-4.51,4.66c-0.01,0-0.01,0-0.01,0v32.06c0,2.5,2.02,4.52,4.52,4.52h35.5c2.02,0,3.66-1.64,3.66-3.66v-5.99    h-7.99c-3.79,0-6.8-3.33-6.3-7.2C32.012,27.4454,34.892,25.1354,38.1121,25.1354z"}),v("path",{d:"M46.5976,27.0574h-8.7094c-1.2195,0-2.3335,0.4993-3.1304,1.2964c-0.797,0.8066-1.2964,1.9109-1.2964,3.1304    c0,2.4391,1.9781,4.4268,4.4268,4.4268h8.7094c0.6626,0,1.2003-0.5377,1.2003-1.2003v-6.4529    C47.798,27.5952,47.2602,27.0574,46.5976,27.0574z M38.1379,33.6447c-1.1811,0-2.1606-0.9602-2.1606-2.1606    c0-1.2003,0.9795-2.1606,2.1606-2.1606c1.2003,0,2.1798,0.9602,2.1798,2.1606C40.3177,32.6845,39.3382,33.6447,38.1379,33.6447z"})),v("g",null,v("path",{d:"M35.2421,13.8254h-25.58l1.92-2.58l5.24-7l0.07-0.1c1.34-1.8,3.87-2.16,5.67-0.83l1.2401,0.9301l9.35,7l0.65,0.49    C34.5221,12.2755,35.012,13.0054,35.2421,13.8254z"}))))),v("div",{class:"tronic-embed-launcher-icon tronic-embed-launcher-icon-minimize"},v("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z",fill:"white"})))),v("div",{class:`tronic-wallet ${e?"visible":""}`},v("iframe",{src:`http://${t.friendlyId}.localhost:3031`,style:{width:"100%",height:"100%",border:"none"}})))}var we=`
  @keyframes tronic-embed-launcher {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes tronic-embed-gradient {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes tronic-embed-messenger {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    40% {
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
  }

  .tronic-embed {
    position: fixed;
    z-index: 2147483001;
    width: 0;
    height: 0;
    font-family: tronic-font, "Helvetica Neue", "Apple Color Emoji",
      Helvetica, Arial, sans-serif;
  }

  .tronic-embed-gradient {
    position: fixed;
    z-index: 2147483002;
    width: 500px;
    height: 500px;
    bottom: 0;
    right: 0;
    pointer-events: none;
    background: radial-gradient(
      ellipse at bottom right,
      rgba(29, 39, 54, 0.16) 0%,
      rgba(29, 39, 54, 0) 72%
    );
    animation: tronic-embed-gradient 200ms ease-out;
  }

  .tronic-embed-launcher {
    position: fixed;
    z-index: 2147483003;
    padding: 0 !important;
    margin: 0 !important;
    border: none;
    bottom: 20px;
    right: 20px;
    max-width: 48px;
    width: 48px;
    max-height: 48px;
    height: 48px;
    border-radius: 50%;
    background: #000000;
    cursor: pointer;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.06),
      0 2px 32px 0 rgba(0, 0, 0, 0.16);
    transition: transform 167ms cubic-bezier(0.33, 0, 0, 1);
    box-sizing: content-box;
  }

  .tronic-embed-launcher:hover {
    transition: transform 250ms cubic-bezier(0.33, 0, 0, 1);
    transform: scale(1.1);
  }

  .tronic-embed-launcher:active {
    transform: scale(0.85);
    transition: transform 134ms cubic-bezier(0.45, 0, 0.2, 1);
  }

  .tronic-embed-launcher:focus {
    outline: none;
  }

  .tronic-embed-launcher-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 48px;
    height: 48px;
    transition: transform 100ms linear, opacity 80ms linear;
  }

  .tronic-embed-launcher-icon-open {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }

  .tronic-embed-launcher-icon-open svg {
    width: 24px;
    height: 24px;
  }

  .tronic-embed-launcher-icon-open svg path {
    fill: rgb(255, 255, 255);
  }

  .tronic-embed-launcher-icon-self-serve {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }

  .tronic-embed-launcher-icon-self-serve svg {
    height: 44px;
  }

  .tronic-embed-launcher-icon-self-serve svg path {
    fill: rgb(255, 255, 255);
  }

  .tronic-embed-launcher-custom-icon-open {
    max-height: 24px;
    max-width: 24px;

    opacity: 1;
    transform: rotate(0deg) scale(1);
  }

  .tronic-embed-launcher-icon-minimize {
    opacity: 0;
    transform: rotate(-60deg) scale(0);
  }

  .tronic-embed-launcher-icon-minimize svg path {
    fill: rgb(255, 255, 255);
  }

  .tronic-embed-messenger {
    position: fixed;
    z-index: 2147483003;
    overflow: hidden;
    background-color: white;
    animation: tronic-embed-messenger 200ms
      ease-out;
    transform-origin: bottom right;

    width: 400px;
    height: calc(100% - 104px);
    max-height: 704px;
    min-height: 250px;
    right: 20px;
    bottom: 84px;
    box-shadow: 0 5px 40px rgba(0, 0, 0, 0.16);

    border-radius: 16px;
  }

  .tronic-embed-messenger-header {
    height: 64px;
    border-bottom: none;
    background: #0057ff;
  }

  .tronic-embed-messenger-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;
    background: #fff;
    font-size: 14px;
    line-height: 21px;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.05);
  }

  .tronic-namespace .tronic-wallet {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
    position: fixed;
    right: 80px;
    bottom: 80px;
    width: 400px;
    height: 600px;
    z-index: 2147483004;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    overflow: hidden;
  }

  .tronic-namespace .tronic-wallet.visible {
    visibility: visible;
    opacity: 1;
  }

  @media print {
    .tronic-embed {
      display: none;
    }
  }
`;function ke(t){let e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(t)),document.head.appendChild(e)}var Te=function(t,e,n,o){var _;e[0]=0;for(var r=1;r<e.length;r++){var c=e[r++],u=e[r]?(e[0]|=c?1:2,n[e[r++]]):e[++r];c===3?o[0]=u:c===4?o[1]=Object.assign(o[1]||{},u):c===5?(o[1]=o[1]||{})[e[++r]]=u:c===6?o[1][e[++r]]+=u+"":c?(_=t.apply(u,Te(t,u,n,["",null])),o.push(_),u[0]?e[0]|=2:(e[r-2]=0,e[r]=_)):o.push(u)}return o},Ce=new Map;function Ee(t){var e=Ce.get(this);return e||(e=new Map,Ce.set(this,e)),(e=Te(this,e.get(t)||(e.set(t,e=function(n){for(var o,_,r=1,c="",u="",s=[0],l=function(d){r===1&&(d||(c=c.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?s.push(0,d,c):r===3&&(d||c)?(s.push(3,d,c),r=2):r===2&&c==="..."&&d?s.push(4,d,0):r===2&&c&&!d?s.push(5,0,!0,c):r>=5&&((c||!d&&r===5)&&(s.push(r,0,c,_),r=6),d&&(s.push(r,d,0,_),r=6)),c=""},f=0;f<n.length;f++){f&&(r===1&&l(),l(f));for(var i=0;i<n[f].length;i++)o=n[f][i],r===1?o==="<"?(l(),s=[s],r=3):c+=o:r===4?c==="--"&&o===">"?(r=1,c=""):c=o+c[0]:u?o===u?u="":c+=o:o==='"'||o==="'"?u=o:o===">"?(l(),r=1):r&&(o==="="?(r=5,_=c,c=""):o==="/"&&(r<5||n[f][i+1]===">")?(l(),r===3&&(s=s[0]),r=s,(s=s[0]).push(2,0,r),r=0):o===" "||o==="	"||o===`
`||o==="\r"?(l(),r=2):c+=o),r===3&&c==="!--"&&(r=4,s=s[0])}return l(),s}(t)),e),arguments,[])).length>1?e:e[0]}var qe=Ee.bind(v);function Se(t,e,n={}){ue(qe`<${t} ...${n} />`,e)}var Oe="tronic-embed-root";function He(t){t.mounted&&t.unmount();let e=document.createElement("div");e.id=Oe,document.body.appendChild(e),ke(we),Se(xe,e,t.settings),t.mounted=!0}function Pe(t){(window.Tronic?.q||[]).forEach(function(n){t.apply(window,n)})}var je="tronic-embed-root";function De(t){if(!t.mounted)return;let e=document.getElementById(je);e&&e.remove(),t.mounted=!1}function ze(t,e){t.settings=e,t.mount()}function Me(t){let e=function(n){let o=Array.prototype.slice.call(arguments,1);console.debug("method call:",n,o),e[n]?e[n].apply(e,o):console.error("Tronic Error: method not found:",n)};return e.settings=t,e.q=[],e.mounted=!1,e.mount=He.bind(null,e),e.unmount=De.bind(null,e),e.update=ze.bind(null,e),e.processQueue=Pe.bind(null,e),e}(function(){if(window.tronicSettings&&window.tronicSettings.friendlyId){let t=Me(window.tronicSettings);t.processQueue(),window.Tronic=t}else console.error("Tronic Error: friendlyId not provided")})();
