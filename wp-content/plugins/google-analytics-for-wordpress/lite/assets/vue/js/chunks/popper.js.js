/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */var T=typeof window<"u"&&typeof document<"u"&&typeof navigator<"u",pe=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(T&&navigator.userAgent.indexOf(e[t])>=0)return 1;return 0}();function ce(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}function de(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},pe))}}var he=T&&window.Promise,ve=he?ce:de;function K(e){var t={};return e&&t.toString.call(e)==="[object Function]"}function O(e,t){if(e.nodeType!==1)return[];var r=e.ownerDocument.defaultView,n=r.getComputedStyle(e,null);return t?n[t]:n}function I(e){return e.nodeName==="HTML"?e:e.parentNode||e.host}function C(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=O(e),r=t.overflow,n=t.overflowX,i=t.overflowY;return/(auto|scroll|overlay)/.test(r+i+n)?e:C(I(e))}function X(e){return e&&e.referenceNode?e.referenceNode:e}var j=T&&!!(window.MSInputMethodContext&&document.documentMode),z=T&&/MSIE 10/.test(navigator.userAgent);function S(e){return e===11?j:e===10?z:j||z}function x(e){if(!e)return document.documentElement;for(var t=S(10)?document.body:null,r=e.offsetParent||null;r===t&&e.nextElementSibling;)r=(e=e.nextElementSibling).offsetParent;var n=r&&r.nodeName;return!n||n==="BODY"||n==="HTML"?e?e.ownerDocument.documentElement:document.documentElement:["TH","TD","TABLE"].indexOf(r.nodeName)!==-1&&O(r,"position")==="static"?x(r):r}function me(e){var t=e.nodeName;return t==="BODY"?!1:t==="HTML"||x(e.firstElementChild)===e}function R(e){return e.parentNode!==null?R(e.parentNode):e}function D(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var r=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=r?e:t,i=r?t:e,o=document.createRange();o.setStart(n,0),o.setEnd(i,0);var s=o.commonAncestorContainer;if(e!==s&&t!==s||n.contains(i))return me(s)?s:x(s);var f=R(e);return f.host?D(f.host,t):D(e,R(t).host)}function P(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top",r=t==="top"?"scrollTop":"scrollLeft",n=e.nodeName;if(n==="BODY"||n==="HTML"){var i=e.ownerDocument.documentElement,o=e.ownerDocument.scrollingElement||i;return o[r]}return e[r]}function ge(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n=P(t,"top"),i=P(t,"left"),o=r?-1:1;return e.top+=n*o,e.bottom+=n*o,e.left+=i*o,e.right+=i*o,e}function Y(e,t){var r=t==="x"?"Left":"Top",n=r==="Left"?"Right":"Bottom";return parseFloat(e["border"+r+"Width"])+parseFloat(e["border"+n+"Width"])}function q(e,t,r,n){return Math.max(t["offset"+e],t["scroll"+e],r["client"+e],r["offset"+e],r["scroll"+e],S(10)?parseInt(r["offset"+e])+parseInt(n["margin"+(e==="Height"?"Top":"Left")])+parseInt(n["margin"+(e==="Height"?"Bottom":"Right")]):0)}function J(e){var t=e.body,r=e.documentElement,n=S(10)&&getComputedStyle(r);return{height:q("Height",t,r,n),width:q("Width",t,r,n)}}var be=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},we=function(){function e(t,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),L=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function y(e){return g({},e,{right:e.left+e.width,bottom:e.top+e.height})}function W(e){var t={};try{if(S(10)){t=e.getBoundingClientRect();var r=P(e,"top"),n=P(e,"left");t.top+=r,t.left+=n,t.bottom+=r,t.right+=n}else t=e.getBoundingClientRect()}catch{}var i={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},o=e.nodeName==="HTML"?J(e.ownerDocument):{},s=o.width||e.clientWidth||i.width,f=o.height||e.clientHeight||i.height,a=e.offsetWidth-s,l=e.offsetHeight-f;if(a||l){var p=O(e);a-=Y(p,"x"),l-=Y(p,"y"),i.width-=a,i.height-=l}return y(i)}function k(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n=S(10),i=t.nodeName==="HTML",o=W(e),s=W(t),f=C(e),a=O(t),l=parseFloat(a.borderTopWidth),p=parseFloat(a.borderLeftWidth);r&&i&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var u=y({top:o.top-s.top-l,left:o.left-s.left-p,width:o.width,height:o.height});if(u.marginTop=0,u.marginLeft=0,!n&&i){var d=parseFloat(a.marginTop),c=parseFloat(a.marginLeft);u.top-=l-d,u.bottom-=l-d,u.left-=p-c,u.right-=p-c,u.marginTop=d,u.marginLeft=c}return(n&&!r?t.contains(f):t===f&&f.nodeName!=="BODY")&&(u=ge(u,t)),u}function ye(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=e.ownerDocument.documentElement,n=k(e,r),i=Math.max(r.clientWidth,window.innerWidth||0),o=Math.max(r.clientHeight,window.innerHeight||0),s=t?0:P(r),f=t?0:P(r,"left"),a={top:s-n.top+n.marginTop,left:f-n.left+n.marginLeft,width:i,height:o};return y(a)}function Q(e){var t=e.nodeName;if(t==="BODY"||t==="HTML")return!1;if(O(e,"position")==="fixed")return!0;var r=I(e);return r?Q(r):!1}function Z(e){if(!e||!e.parentElement||S())return document.documentElement;for(var t=e.parentElement;t&&O(t,"transform")==="none";)t=t.parentElement;return t||document.documentElement}function V(e,t,r,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,o={top:0,left:0},s=i?Z(e):D(e,X(t));if(n==="viewport")o=ye(s,i);else{var f=void 0;n==="scrollParent"?(f=C(I(t)),f.nodeName==="BODY"&&(f=e.ownerDocument.documentElement)):n==="window"?f=e.ownerDocument.documentElement:f=n;var a=k(f,s,i);if(f.nodeName==="HTML"&&!Q(s)){var l=J(e.ownerDocument),p=l.height,u=l.width;o.top+=a.top-a.marginTop,o.bottom=p+a.top,o.left+=a.left-a.marginLeft,o.right=u+a.left}else o=a}r=r||0;var d=typeof r=="number";return o.left+=d?r:r.left||0,o.top+=d?r:r.top||0,o.right-=d?r:r.right||0,o.bottom-=d?r:r.bottom||0,o}function Ee(e){var t=e.width,r=e.height;return t*r}function ee(e,t,r,n,i){var o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:0;if(e.indexOf("auto")===-1)return e;var s=V(r,n,o,i),f={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}},a=Object.keys(f).map(function(d){return g({key:d},f[d],{area:Ee(f[d])})}).sort(function(d,c){return c.area-d.area}),l=a.filter(function(d){var c=d.width,h=d.height;return c>=r.clientWidth&&h>=r.clientHeight}),p=l.length>0?l[0].key:a[0].key,u=e.split("-")[1];return p+(u?"-"+u:"")}function te(e,t,r){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,i=n?Z(t):D(t,X(r));return k(r,i,n)}function re(e){var t=e.ownerDocument.defaultView,r=t.getComputedStyle(e),n=parseFloat(r.marginTop||0)+parseFloat(r.marginBottom||0),i=parseFloat(r.marginLeft||0)+parseFloat(r.marginRight||0),o={width:e.offsetWidth+i,height:e.offsetHeight+n};return o}function N(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(r){return t[r]})}function ne(e,t,r){r=r.split("-")[0];var n=re(e),i={width:n.width,height:n.height},o=["right","left"].indexOf(r)!==-1,s=o?"top":"left",f=o?"left":"top",a=o?"height":"width",l=o?"width":"height";return i[s]=t[s]+t[a]/2-n[a]/2,r===f?i[f]=t[f]-n[l]:i[f]=t[N(f)],i}function M(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function Oe(e,t,r){if(Array.prototype.findIndex)return e.findIndex(function(i){return i[t]===r});var n=M(e,function(i){return i[t]===r});return e.indexOf(n)}function oe(e,t,r){var n=r===void 0?e:e.slice(0,Oe(e,"name",r));return n.forEach(function(i){i.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var o=i.function||i.fn;i.enabled&&K(o)&&(t.offsets.popper=y(t.offsets.popper),t.offsets.reference=y(t.offsets.reference),t=o(t,i))}),t}function xe(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=te(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=ee(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=ne(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=oe(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function ie(e,t){return e.some(function(r){var n=r.name,i=r.enabled;return i&&n===t})}function _(e){for(var t=[!1,"ms","Webkit","Moz","O"],r=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],o=i?""+i+r:e;if(typeof document.body.style[o]<"u")return o}return null}function Pe(){return this.state.isDestroyed=!0,ie(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[_("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function se(e){var t=e.ownerDocument;return t?t.defaultView:window}function fe(e,t,r,n){var i=e.nodeName==="BODY",o=i?e.ownerDocument.defaultView:e;o.addEventListener(t,r,{passive:!0}),i||fe(C(o.parentNode),t,r,n),n.push(o)}function Le(e,t,r,n){r.updateBound=n,se(e).addEventListener("resize",r.updateBound,{passive:!0});var i=C(e);return fe(i,"scroll",r.updateBound,r.scrollParents),r.scrollElement=i,r.eventsEnabled=!0,r}function Se(){this.state.eventsEnabled||(this.state=Le(this.reference,this.options,this.state,this.scheduleUpdate))}function Te(e,t){return se(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(r){r.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function Ce(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=Te(this.reference,this.state))}function $(e){return e!==""&&!isNaN(parseFloat(e))&&isFinite(e)}function H(e,t){Object.keys(t).forEach(function(r){var n="";["width","height","top","right","bottom","left"].indexOf(r)!==-1&&$(t[r])&&(n="px"),e.style[r]=t[r]+n})}function Me(e,t){Object.keys(t).forEach(function(r){var n=t[r];n!==!1?e.setAttribute(r,t[r]):e.removeAttribute(r)})}function De(e){return H(e.instance.popper,e.styles),Me(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&H(e.arrowElement,e.arrowStyles),e}function Ne(e,t,r,n,i){var o=te(i,t,e,r.positionFixed),s=ee(r.placement,o,t,e,r.modifiers.flip.boundariesElement,r.modifiers.flip.padding);return t.setAttribute("x-placement",s),H(t,{position:r.positionFixed?"fixed":"absolute"}),r}function Ae(e,t){var r=e.offsets,n=r.popper,i=r.reference,o=Math.round,s=Math.floor,f=function(w){return w},a=o(i.width),l=o(n.width),p=["left","right"].indexOf(e.placement)!==-1,u=e.placement.indexOf("-")!==-1,d=a%2===l%2,c=a%2===1&&l%2===1,h=t?p||u||d?o:s:f,v=t?o:f;return{left:h(c&&!u&&t?n.left-1:n.left),top:v(n.top),bottom:v(n.bottom),right:h(n.right)}}var Be=T&&/Firefox/i.test(navigator.userAgent);function Fe(e,t){var r=t.x,n=t.y,i=e.offsets.popper,o=M(e.instance.modifiers,function(E){return E.name==="applyStyle"}).gpuAcceleration;o!==void 0&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=o!==void 0?o:t.gpuAcceleration,f=x(e.instance.popper),a=W(f),l={position:i.position},p=Ae(e,window.devicePixelRatio<2||!Be),u=r==="bottom"?"top":"bottom",d=n==="right"?"left":"right",c=_("transform"),h=void 0,v=void 0;if(u==="bottom"?f.nodeName==="HTML"?v=-f.clientHeight+p.bottom:v=-a.height+p.bottom:v=p.top,d==="right"?f.nodeName==="HTML"?h=-f.clientWidth+p.right:h=-a.width+p.right:h=p.left,s&&c)l[c]="translate3d("+h+"px, "+v+"px, 0)",l[u]=0,l[d]=0,l.willChange="transform";else{var b=u==="bottom"?-1:1,w=d==="right"?-1:1;l[u]=v*b,l[d]=h*w,l.willChange=u+", "+d}var m={"x-placement":e.placement};return e.attributes=g({},m,e.attributes),e.styles=g({},l,e.styles),e.arrowStyles=g({},e.offsets.arrow,e.arrowStyles),e}function ae(e,t,r){var n=M(e,function(f){var a=f.name;return a===t}),i=!!n&&e.some(function(f){return f.name===r&&f.enabled&&f.order<n.order});if(!i){var o="`"+t+"`",s="`"+r+"`";console.warn(s+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return i}function Re(e,t){var r;if(!ae(e.instance.modifiers,"arrow","keepTogether"))return e;var n=t.element;if(typeof n=="string"){if(n=e.instance.popper.querySelector(n),!n)return e}else if(!e.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var i=e.placement.split("-")[0],o=e.offsets,s=o.popper,f=o.reference,a=["left","right"].indexOf(i)!==-1,l=a?"height":"width",p=a?"Top":"Left",u=p.toLowerCase(),d=a?"left":"top",c=a?"bottom":"right",h=re(n)[l];f[c]-h<s[u]&&(e.offsets.popper[u]-=s[u]-(f[c]-h)),f[u]+h>s[c]&&(e.offsets.popper[u]+=f[u]+h-s[c]),e.offsets.popper=y(e.offsets.popper);var v=f[u]+f[l]/2-h/2,b=O(e.instance.popper),w=parseFloat(b["margin"+p]),m=parseFloat(b["border"+p+"Width"]),E=v-e.offsets.popper[u]-w-m;return E=Math.max(Math.min(s[l]-h,E),0),e.arrowElement=n,e.offsets.arrow=(r={},L(r,u,Math.round(E)),L(r,d,""),r),e}function We(e){return e==="end"?"start":e==="start"?"end":e}var ue=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],B=ue.slice(3);function G(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=B.indexOf(e),n=B.slice(r+1).concat(B.slice(0,r));return t?n.reverse():n}var F={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function He(e,t){if(ie(e.instance.modifiers,"inner")||e.flipped&&e.placement===e.originalPlacement)return e;var r=V(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split("-")[0],i=N(n),o=e.placement.split("-")[1]||"",s=[];switch(t.behavior){case F.FLIP:s=[n,i];break;case F.CLOCKWISE:s=G(n);break;case F.COUNTERCLOCKWISE:s=G(n,!0);break;default:s=t.behavior}return s.forEach(function(f,a){if(n!==f||s.length===a+1)return e;n=e.placement.split("-")[0],i=N(n);var l=e.offsets.popper,p=e.offsets.reference,u=Math.floor,d=n==="left"&&u(l.right)>u(p.left)||n==="right"&&u(l.left)<u(p.right)||n==="top"&&u(l.bottom)>u(p.top)||n==="bottom"&&u(l.top)<u(p.bottom),c=u(l.left)<u(r.left),h=u(l.right)>u(r.right),v=u(l.top)<u(r.top),b=u(l.bottom)>u(r.bottom),w=n==="left"&&c||n==="right"&&h||n==="top"&&v||n==="bottom"&&b,m=["top","bottom"].indexOf(n)!==-1,E=!!t.flipVariations&&(m&&o==="start"&&c||m&&o==="end"&&h||!m&&o==="start"&&v||!m&&o==="end"&&b),le=!!t.flipVariationsByContent&&(m&&o==="start"&&h||m&&o==="end"&&c||!m&&o==="start"&&b||!m&&o==="end"&&v),U=E||le;(d||w||U)&&(e.flipped=!0,(d||w)&&(n=s[a+1]),U&&(o=We(o)),e.placement=n+(o?"-"+o:""),e.offsets.popper=g({},e.offsets.popper,ne(e.instance.popper,e.offsets.reference,e.placement)),e=oe(e.instance.modifiers,e,"flip"))}),e}function Ie(e){var t=e.offsets,r=t.popper,n=t.reference,i=e.placement.split("-")[0],o=Math.floor,s=["top","bottom"].indexOf(i)!==-1,f=s?"right":"bottom",a=s?"left":"top",l=s?"width":"height";return r[f]<o(n[a])&&(e.offsets.popper[a]=o(n[a])-r[l]),r[a]>o(n[f])&&(e.offsets.popper[a]=o(n[f])),e}function ke(e,t,r,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+i[1],s=i[2];if(!o)return e;if(s.indexOf("%")===0){var f=void 0;switch(s){case"%p":f=r;break;case"%":case"%r":default:f=n}var a=y(f);return a[t]/100*o}else if(s==="vh"||s==="vw"){var l=void 0;return s==="vh"?l=Math.max(document.documentElement.clientHeight,window.innerHeight||0):l=Math.max(document.documentElement.clientWidth,window.innerWidth||0),l/100*o}else return o}function Ve(e,t,r,n){var i=[0,0],o=["right","left"].indexOf(n)!==-1,s=e.split(/(\+|\-)/).map(function(p){return p.trim()}),f=s.indexOf(M(s,function(p){return p.search(/,|\s/)!==-1}));s[f]&&s[f].indexOf(",")===-1&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var a=/\s*,\s*|\s+/,l=f!==-1?[s.slice(0,f).concat([s[f].split(a)[0]]),[s[f].split(a)[1]].concat(s.slice(f+1))]:[s];return l=l.map(function(p,u){var d=(u===1?!o:o)?"height":"width",c=!1;return p.reduce(function(h,v){return h[h.length-1]===""&&["+","-"].indexOf(v)!==-1?(h[h.length-1]=v,c=!0,h):c?(h[h.length-1]+=v,c=!1,h):h.concat(v)},[]).map(function(h){return ke(h,d,t,r)})}),l.forEach(function(p,u){p.forEach(function(d,c){$(d)&&(i[u]+=d*(p[c-1]==="-"?-1:1))})}),i}function _e(e,t){var r=t.offset,n=e.placement,i=e.offsets,o=i.popper,s=i.reference,f=n.split("-")[0],a=void 0;return $(+r)?a=[+r,0]:a=Ve(r,o,s,f),f==="left"?(o.top+=a[0],o.left-=a[1]):f==="right"?(o.top+=a[0],o.left+=a[1]):f==="top"?(o.left+=a[0],o.top-=a[1]):f==="bottom"&&(o.left+=a[0],o.top+=a[1]),e.popper=o,e}function $e(e,t){var r=t.boundariesElement||x(e.instance.popper);e.instance.reference===r&&(r=x(r));var n=_("transform"),i=e.instance.popper.style,o=i.top,s=i.left,f=i[n];i.top="",i.left="",i[n]="";var a=V(e.instance.popper,e.instance.reference,t.padding,r,e.positionFixed);i.top=o,i.left=s,i[n]=f,t.boundaries=a;var l=t.priority,p=e.offsets.popper,u={primary:function(c){var h=p[c];return p[c]<a[c]&&!t.escapeWithReference&&(h=Math.max(p[c],a[c])),L({},c,h)},secondary:function(c){var h=c==="right"?"left":"top",v=p[h];return p[c]>a[c]&&!t.escapeWithReference&&(v=Math.min(p[h],a[c]-(c==="right"?p.width:p.height))),L({},h,v)}};return l.forEach(function(d){var c=["left","top"].indexOf(d)!==-1?"primary":"secondary";p=g({},p,u[c](d))}),e.offsets.popper=p,e}function Ue(e){var t=e.placement,r=t.split("-")[0],n=t.split("-")[1];if(n){var i=e.offsets,o=i.reference,s=i.popper,f=["bottom","top"].indexOf(r)!==-1,a=f?"left":"top",l=f?"width":"height",p={start:L({},a,o[a]),end:L({},a,o[a]+o[l]-s[l])};e.offsets.popper=g({},s,p[n])}return e}function je(e){if(!ae(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,r=M(e.instance.modifiers,function(n){return n.name==="preventOverflow"}).boundaries;if(t.bottom<r.top||t.left>r.right||t.top>r.bottom||t.right<r.left){if(e.hide===!0)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(e.hide===!1)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}function ze(e){var t=e.placement,r=t.split("-")[0],n=e.offsets,i=n.popper,o=n.reference,s=["left","right"].indexOf(r)!==-1,f=["top","left"].indexOf(r)===-1;return i[s?"left":"top"]=o[r]-(f?i[s?"width":"height"]:0),e.placement=N(t),e.offsets.popper=y(i),e}var Ye={shift:{order:100,enabled:!0,fn:Ue},offset:{order:200,enabled:!0,fn:_e,offset:0},preventOverflow:{order:300,enabled:!0,fn:$e,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:Ie},arrow:{order:500,enabled:!0,fn:Re,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:He,behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:ze},hide:{order:800,enabled:!0,fn:je},computeStyle:{order:850,enabled:!0,fn:Fe,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:De,onLoad:Ne,gpuAcceleration:void 0}},qe={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:Ye},A=function(){function e(t,r){var n=this,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};be(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=ve(this.update.bind(this)),this.options=g({},e.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=r&&r.jquery?r[0]:r,this.options.modifiers={},Object.keys(g({},e.Defaults.modifiers,i.modifiers)).forEach(function(s){n.options.modifiers[s]=g({},e.Defaults.modifiers[s]||{},i.modifiers?i.modifiers[s]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(s){return g({name:s},n.options.modifiers[s])}).sort(function(s,f){return s.order-f.order}),this.modifiers.forEach(function(s){s.enabled&&K(s.onLoad)&&s.onLoad(n.reference,n.popper,n.options,s,n.state)}),this.update();var o=this.options.eventsEnabled;o&&this.enableEventListeners(),this.state.eventsEnabled=o}return we(e,[{key:"update",value:function(){return xe.call(this)}},{key:"destroy",value:function(){return Pe.call(this)}},{key:"enableEventListeners",value:function(){return Se.call(this)}},{key:"disableEventListeners",value:function(){return Ce.call(this)}}]),e}();A.Utils=(typeof window<"u"?window:global).PopperUtils;A.placements=ue;A.Defaults=qe;const Ge=A;export{Ge as P};
