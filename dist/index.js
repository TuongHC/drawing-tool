!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.drawingTool=e():t.drawingTool=e()}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(1),n(6);var i=n(7);e.default=i.Croppr},function(t,e,n){var i=n(2);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(i,o);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".users-list{width:400px;min-height:200px;border-radius:3px;background-color:#fff;padding:15px 30px;list-style-type:none}.users-list>li{line-height:30px}.croppr-container *{user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box}.croppr-container img{vertical-align:middle;max-width:100%}.croppr{position:relative;display:inline-block}.croppr-overlay{background:rgba(0,0,0,.5);position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;cursor:crosshair}.croppr-region{border:1px dashed rgba(0,0,0,.5);position:absolute;z-index:3;cursor:move;top:0}.croppr-imageClipped{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;pointer-events:none}.croppr-handle{border:1px solid #000;background-color:#fff;width:10px;height:10px;position:absolute;z-index:4;top:0}",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=(s=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),r=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(r).concat([o]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(i[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];null!=s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var i,o,r={},s=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=i.apply(this,arguments)),o}),a=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var i=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),l=null,u=0,h=[],c=n(5);function d(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=r[i.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](i.parts[s]);for(;s<i.parts.length;s++)o.parts.push(b(i.parts[s],e))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(b(i.parts[s],e));r[i.id]={id:i.id,refs:1,parts:a}}}}function p(t,e){for(var n=[],i={},o=0;o<t.length;o++){var r=t[o],s=e.base?r[0]+e.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function f(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=h[h.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),h.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(t.insertAt.before,n);n.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=h.indexOf(t);e>=0&&h.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return n.nc}();i&&(t.attrs.nonce=i)}return g(e,t.attrs),f(t,e),e}function g(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,i,o,r;if(e.transform&&t.css){if(!(r="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=r}if(e.singleton){var s=u++;n=l||(l=m(e)),i=E.bind(null,n,s,!1),o=E.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),f(t,e),e}(e),i=function(t,e,n){var i=n.css,o=n.sourceMap,r=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||r)&&(i=c(i));o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),i=function(t,e){var n=e.css,i=e.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return d(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var s=n[o];(a=r[s.id]).refs--,i.push(a)}t&&d(p(t,e),e);for(o=0;o<i.length;o++){var a;if(0===(a=i[o]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete r[a.id]}}}};var y,w=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function E(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(o=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){"use strict";!function(){for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[e[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[n]+"CancelAnimationFrame"]||window[e[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,n){var i=(new Date).getTime(),o=Math.max(0,16-(i-t)),r=window.setTimeout(function(){e(i+o)},o);return t=i+o,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),function(){if("function"==typeof window.CustomEvent)return!1;function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}t.prototype=window.Event.prototype,window.CustomEvent=t}(),function(t){try{return new CustomEvent("test"),!1}catch(t){}function e(e,n){n=n||{bubbles:!1,cancelable:!1};var i=document.createEvent("MouseEvent");return i.initMouseEvent(e,n.bubbles,n.cancelable,t,0,0,0,0,0,!1,!1,!1,!1,0,null),i}e.prototype=Event.prototype,t.MouseEvent=e}(window)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Croppr=void 0;var i,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function t(e,n,i){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:t(r,n,i)}if("value"in o)return o.value;var s=o.get;return void 0!==s?s.call(i):void 0},s=n(8),a=(i=s)&&i.__esModule?i:{default:i};e.Croppr=function(t){function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.default),o(e,[{key:"getValue",value:function(t){return r(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"getValue",this).call(this,t)}},{key:"setImage",value:function(t){return r(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setImage",this).call(this,t)}},{key:"destroy",value:function(){return r(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this)}},{key:"moveTo",value:function(t,e){return this.box.move(t,e),this.redraw(),null!==this.options.onCropEnd&&this.options.onCropEnd(this.getValue()),this}},{key:"resizeTo",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[.5,.5];return this.box.resize(t,e,n),this.redraw(),null!==this.options.onCropEnd&&this.options.onCropEnd(this.getValue()),this}},{key:"scaleBy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[.5,.5];return this.box.scale(t,e),this.redraw(),null!==this.options.onCropEnd&&this.options.onCropEnd(this.getValue()),this}},{key:"reset",value:function(){return this.box=this.initializeBox(this.options),this.redraw(),null!==this.options.onCropEnd&&this.options.onCropEnd(this.getValue()),this}}]),e}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],i=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{!i&&a.return&&a.return()}finally{if(o)throw r}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=l(n(9)),s=l(n(10)),a=l(n(11));function l(t){return t&&t.__esModule?t:{default:t}}var u=[{position:[0,0],constraints:[1,0,0,1],cursor:"nw-resize"},{position:[.5,0],constraints:[1,0,0,0],cursor:"n-resize"},{position:[1,0],constraints:[1,1,0,0],cursor:"ne-resize"},{position:[1,.5],constraints:[0,1,0,0],cursor:"e-resize"},{position:[1,1],constraints:[0,1,1,0],cursor:"se-resize"},{position:[.5,1],constraints:[0,0,1,0],cursor:"s-resize"},{position:[0,1],constraints:[0,0,1,1],cursor:"sw-resize"},{position:[0,.5],constraints:[0,0,0,1],cursor:"w-resize"}],h=function(){function t(e,n){var i=this,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=t.parseOptions(n||{}),!e.nodeName&&null==(e=document.querySelector(e)))throw"Unable to find element.";if(!e.getAttribute("src"))throw"Image src not provided.";this._initialized=!1,this._restore={parent:e.parentNode,element:e},o||(0===e.width||0===e.height?e.onload=function(){i.initialize(e)}:this.initialize(e))}return o(t,[{key:"initialize",value:function(t){this.createDOM(t),this.options.convertToPixels(this.cropperEl),this.attachHandlerEvents(),this.attachRegionEvents(),this.attachOverlayEvents(),this.box=this.initializeBox(this.options),this.redraw(),this._initialized=!0,null!==this.options.onInitialize&&this.options.onInitialize(this)}},{key:"createDOM",value:function(t){this.containerEl=document.createElement("div"),this.containerEl.className="croppr-container",this.eventBus=this.containerEl,(0,a.default)(this.containerEl),this.cropperEl=document.createElement("div"),this.cropperEl.className="croppr",this.imageEl=document.createElement("img"),this.imageEl.setAttribute("src",t.getAttribute("src")),this.imageEl.setAttribute("alt",t.getAttribute("alt")),this.imageEl.className="croppr-image",this.imageClippedEl=this.imageEl.cloneNode(),this.imageClippedEl.className="croppr-imageClipped",this.regionEl=document.createElement("div"),this.regionEl.className="croppr-region",this.overlayEl=document.createElement("div"),this.overlayEl.className="croppr-overlay";var e=document.createElement("div");e.className="croppr-handleContainer",this.handles=[];for(var n=0;n<u.length;n++){var i=new r.default(u[n].position,u[n].constraints,u[n].cursor,this.eventBus);this.handles.push(i),e.appendChild(i.el)}this.cropperEl.appendChild(this.imageEl),this.cropperEl.appendChild(this.imageClippedEl),this.cropperEl.appendChild(this.regionEl),this.cropperEl.appendChild(this.overlayEl),this.cropperEl.appendChild(e),this.containerEl.appendChild(this.cropperEl),t.parentElement.replaceChild(this.containerEl,t)}},{key:"setImage",value:function(t){var e=this;return this.imageEl.onload=function(){e.box=e.initializeBox(e.options),e.redraw()},this.imageEl.src=t,this.imageClippedEl.src=t,this}},{key:"destroy",value:function(){this._restore.parent.replaceChild(this._restore.element,this.containerEl)}},{key:"initializeBox",value:function(t){var e=t.startSize.width,n=t.startSize.height,i=new s.default(0,0,e,n);i.constrainToRatio(t.aspectRatio,[.5,.5]);var o=t.minSize,r=t.maxSize;i.constrainToSize(r.width,r.height,o.width,o.height,[.5,.5],t.aspectRatio);var a=this.cropperEl.offsetWidth,l=this.cropperEl.offsetHeight;i.constrainToBoundary(a,l,[.5,.5]);var u=this.cropperEl.offsetWidth/2-i.width()/2,h=this.cropperEl.offsetHeight/2-i.height()/2;return i.move(u,h),i}},{key:"redraw",value:function(){var t=this,e=Math.round(this.box.width()),n=Math.round(this.box.height()),i=Math.round(this.box.x1),o=Math.round(this.box.y1),r=Math.round(this.box.x2),s=Math.round(this.box.y2);window.requestAnimationFrame(function(){t.regionEl.style.transform="translate("+i+"px, "+o+"px)",t.regionEl.style.width=e+"px",t.regionEl.style.height=n+"px",t.imageClippedEl.style.clip="rect("+o+"px, "+r+"px, "+s+"px, "+i+"px)";for(var a=t.box.getAbsolutePoint([.5,.5]),l=a[0]-t.cropperEl.offsetWidth/2>>31,u=a[1]-t.cropperEl.offsetHeight/2>>31,h=-2*((l^u)+u+u+4)+8,c=0;c<t.handles.length;c++){var d=t.handles[c],p=d.el.offsetWidth,f=d.el.offsetHeight,v=i+e*d.position[0]-p/2,m=o+n*d.position[1]-f/2;d.el.style.transform="translate("+Math.round(v)+"px, "+Math.round(m)+"px)",d.el.style.zIndex=h==c?5:4}})}},{key:"attachHandlerEvents",value:function(){var t=this.eventBus;t.addEventListener("handlestart",this.onHandleMoveStart.bind(this)),t.addEventListener("handlemove",this.onHandleMoveMoving.bind(this)),t.addEventListener("handleend",this.onHandleMoveEnd.bind(this))}},{key:"attachRegionEvents",value:function(){var t=this.eventBus;function e(e){e.stopPropagation(),t.dispatchEvent(new CustomEvent("regionmove",{detail:{mouseX:e.clientX,mouseY:e.clientY}}))}function n(i){i.stopPropagation(),document.removeEventListener("mouseup",n),document.removeEventListener("mousemove",e),t.dispatchEvent(new CustomEvent("regionend",{detail:{mouseX:i.clientX,mouseY:i.clientY}}))}this.regionEl.addEventListener("mousedown",function(i){i.stopPropagation(),document.addEventListener("mouseup",n),document.addEventListener("mousemove",e),t.dispatchEvent(new CustomEvent("regionstart",{detail:{mouseX:i.clientX,mouseY:i.clientY}}))}),t.addEventListener("regionstart",this.onRegionMoveStart.bind(this)),t.addEventListener("regionmove",this.onRegionMoveMoving.bind(this)),t.addEventListener("regionend",this.onRegionMoveEnd.bind(this))}},{key:"attachOverlayEvents",value:function(){var t=4,e=this,n=null;function i(t){t.stopPropagation(),e.eventBus.dispatchEvent(new CustomEvent("handlemove",{detail:{mouseX:t.clientX,mouseY:t.clientY}}))}function o(t){t.stopPropagation(),document.removeEventListener("mouseup",o),document.removeEventListener("mousemove",i),1!==e.box.width()||1!==e.box.height()?e.eventBus.dispatchEvent(new CustomEvent("handleend",{detail:{mouseX:t.clientX,mouseY:t.clientY}})):e.box=n}this.overlayEl.addEventListener("mousedown",function(r){r.stopPropagation(),document.addEventListener("mouseup",o),document.addEventListener("mousemove",i);var a=e.cropperEl.getBoundingClientRect(),l=r.clientX-a.left,u=r.clientY-a.top;n=e.box,e.box=new s.default(l,u,l+1,u+1),e.eventBus.dispatchEvent(new CustomEvent("handlestart",{detail:{handle:e.handles[t]}}))})}},{key:"onHandleMoveStart",value:function(t){var e=t.detail.handle,n=[1-e.position[0],1-e.position[1]],o=this.box.getAbsolutePoint(n),r=i(o,2),s=r[0],a=r[1];this.activeHandle={handle:e,originPoint:n,originX:s,originY:a},null!==this.options.onCropStart&&this.options.onCropStart(this.getValue())}},{key:"onHandleMoveMoving",value:function(t){var e=t.detail,n=e.mouseX,i=e.mouseY,o=this.cropperEl.getBoundingClientRect();n-=o.left,i-=o.top,n<0?n=0:n>o.width&&(n=o.width),i<0?i=0:i>o.height&&(i=o.height);var r=this.activeHandle.originPoint.slice(),a=this.activeHandle.originX,l=this.activeHandle.originY,u=this.activeHandle.handle,h=1===u.constraints[0],c=1===u.constraints[1],d=1===u.constraints[2],p=1===u.constraints[3],f=(p||c)&&(h||d),v=p||c?a:this.box.x1,m=p||c?a:this.box.x2,g=h||d?l:this.box.y1,b=h||d?l:this.box.y2;v=p?n:v,m=c?n:m,g=h?i:g,b=d?i:b;var y=!1,w=!1;if((p||c)&&(y=p?n>a:n<a),(h||d)&&(w=h?i>l:i<l),y){var E=v;v=m,m=E,r[0]=1-r[0]}if(w){var x=g;g=b,b=x,r[1]=1-r[1]}var C=new s.default(v,g,m,b);if(this.options.aspectRatio){var M=this.options.aspectRatio,z=!1;f?z=i>C.y1+M*C.width()||i<C.y2-M*C.width():(h||d)&&(z=!0);var S=z?"width":"height";C.constrainToRatio(M,r,S)}var k=this.options.minSize,O=this.options.maxSize;C.constrainToSize(O.width,O.height,k.width,k.height,r,this.options.aspectRatio);var R=this.cropperEl.offsetWidth,j=this.cropperEl.offsetHeight;C.constrainToBoundary(R,j,r),this.box=C,this.redraw(),null!==this.options.onCropMove&&this.options.onCropMove(this.getValue())}},{key:"onHandleMoveEnd",value:function(t){null!==this.options.onCropEnd&&this.options.onCropEnd(this.getValue())}},{key:"onRegionMoveStart",value:function(t){var e=t.detail,n=e.mouseX,i=e.mouseY,o=this.cropperEl.getBoundingClientRect();n-=o.left,i-=o.top,this.currentMove={offsetX:n-this.box.x1,offsetY:i-this.box.y1},null!==this.options.onCropStart&&this.options.onCropStart(this.getValue())}},{key:"onRegionMoveMoving",value:function(t){var e=t.detail,n=e.mouseX,i=e.mouseY,o=this.currentMove,r=o.offsetX,s=o.offsetY,a=this.cropperEl.getBoundingClientRect();n-=a.left,i-=a.top,this.box.move(n-r,i-s),this.box.x1<0&&this.box.move(0,null),this.box.x2>a.width&&this.box.move(a.width-this.box.width(),null),this.box.y1<0&&this.box.move(null,0),this.box.y2>a.height&&this.box.move(null,a.height-this.box.height()),this.redraw(),null!==this.options.onCropMove&&this.options.onCropMove(this.getValue())}},{key:"onRegionMoveEnd",value:function(t){null!==this.options.onCropEnd&&this.options.onCropEnd(this.getValue())}},{key:"getValue",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null===t&&(t=this.options.returnMode),"real"==t){var e=this.imageEl.naturalWidth,n=this.imageEl.naturalHeight,i=this.imageEl.getBoundingClientRect(),o=e/i.width,r=n/i.height;return{x:Math.round(this.box.x1*o),y:Math.round(this.box.y1*r),width:Math.round(this.box.width()*o),height:Math.round(this.box.height()*r)}}if("ratio"==t){var s=this.imageEl.getBoundingClientRect(),a=s.width,l=s.height;return{x:c(this.box.x1/a,3),y:c(this.box.y1/l,3),width:c(this.box.width()/a,3),height:c(this.box.height()/l,3)}}if("raw"==t)return{x:Math.round(this.box.x1),y:Math.round(this.box.y1),width:Math.round(this.box.width()),height:Math.round(this.box.height())}}}],[{key:"parseOptions",value:function(t){var e=null,n={width:null,height:null},i={width:null,height:null},o={width:100,height:100,unit:"%"},r="real",s=null,a=null,l=null,u=null,h=null;void 0!==t.aspectRatio&&("number"==typeof t.aspectRatio?h=t.aspectRatio:t.aspectRatio instanceof Array&&(h=t.aspectRatio[1]/t.aspectRatio[0]));var c=null;void 0!==t.maxSize&&null!==t.maxSize&&(c={width:t.maxSize[0]||null,height:t.maxSize[1]||null,unit:t.maxSize[2]||"px"});var d=null;void 0!==t.minSize&&null!==t.minSize&&(d={width:t.minSize[0]||null,height:t.minSize[1]||null,unit:t.minSize[2]||"px"});var p=null;void 0!==t.startSize&&null!==t.startSize&&(p={width:t.startSize[0]||null,height:t.startSize[1]||null,unit:t.startSize[2]||"%"});var f=null;"function"==typeof t.onInitialize&&(f=t.onInitialize);var v=null;"function"==typeof t.onCropStart&&(v=t.onCropStart);var m=null;"function"==typeof t.onCropEnd&&(m=t.onCropEnd);var g=null;"function"==typeof t.onUpdate&&(console.warn("Croppr.js: `onUpdate` is deprecated and will be removed in the next major release. Please use `onCropMove` or `onCropEnd` instead."),g=t.onUpdate),"function"==typeof t.onCropMove&&(g=t.onCropMove);var b=null;if(void 0!==t.returnMode){var y=t.returnMode.toLowerCase();if(-1===["real","ratio","raw"].indexOf(y))throw"Invalid return mode.";b=y}var w=function(t,e){return null!==t?t:e};return{aspectRatio:w(h,e),maxSize:w(c,n),minSize:w(d,i),startSize:w(p,o),returnMode:w(b,r),onInitialize:w(f,s),onCropStart:w(v,a),onCropMove:w(g,l),onCropEnd:w(m,u),convertToPixels:function(t){for(var e=t.offsetWidth,n=t.offsetHeight,i=["maxSize","minSize","startSize"],o=0;o<i.length;o++){var r=i[o];null!==this[r]&&("%"==this[r].unit&&(null!==this[r].width&&(this[r].width=this[r].width/100*e),null!==this[r].height&&(this[r].height=this[r].height/100*n)),delete this[r].unit)}}}}}]),t}();function c(t,e){return Number(Math.round(t+"e"+e)+"e-"+e)}e.default=h},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function t(e,n,i,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var r=this;function s(t){t.stopPropagation(),document.removeEventListener("mouseup",s),document.removeEventListener("mousemove",a),r.eventBus.dispatchEvent(new CustomEvent("handleend",{detail:{handle:r}}))}function a(t){t.stopPropagation(),r.eventBus.dispatchEvent(new CustomEvent("handlemove",{detail:{mouseX:t.clientX,mouseY:t.clientY}}))}this.position=e,this.constraints=n,this.cursor=i,this.eventBus=o,this.el=document.createElement("div"),this.el.className="croppr-handle",this.el.style.cursor=i,this.el.addEventListener("mousedown",function(t){t.stopPropagation(),document.addEventListener("mouseup",s),document.addEventListener("mousemove",a),r.eventBus.dispatchEvent(new CustomEvent("handlestart",{detail:{handle:r}}))})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],i=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{!i&&a.return&&a.return()}finally{if(o)throw r}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();var r=function(){function t(e,n,i,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x1=e,this.y1=n,this.x2=i,this.y2=o}return o(t,[{key:"set",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return this.x1=null==t?this.x1:t,this.y1=null==e?this.y1:e,this.x2=null==n?this.x2:n,this.y2=null==i?this.y2:i,this}},{key:"width",value:function(){return Math.abs(this.x2-this.x1)}},{key:"height",value:function(){return Math.abs(this.y2-this.y1)}},{key:"resize",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,0],i=this.x1+this.width()*n[0],o=this.y1+this.height()*n[1];return this.x1=i-t*n[0],this.y1=o-e*n[1],this.x2=this.x1+t,this.y2=this.y1+e,this}},{key:"scale",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0],n=this.width()*t,i=this.height()*t;return this.resize(n,i,e),this}},{key:"move",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=this.width(),i=this.height();return t=null===t?this.x1:t,e=null===e?this.y1:e,this.x1=t,this.y1=e,this.x2=t+n,this.y2=e+i,this}},{key:"getRelativePoint",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0,0];return[this.width()*t[0],this.height()*t[1]]}},{key:"getAbsolutePoint",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0,0];return[this.x1+this.width()*t[0],this.y1+this.height()*t[1]]}},{key:"constrainToRatio",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"height";if(null!==t){this.width(),this.height();switch(n){case"height":this.resize(this.width(),this.width()*t,e);break;case"width":this.resize(1*this.height()/t,this.height(),e);break;default:this.resize(this.width(),this.width()*t,e)}return this}}},{key:"constrainToBoundary",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,0],o=this.getAbsolutePoint(n),r=i(o,2),s=r[0],a=r[1],l=s,u=a,h=t-s,c=e-a,d=-2*n[0]+1,p=-2*n[1]+1,f=null,v=null;switch(d){case-1:f=l;break;case 0:f=2*Math.min(l,h);break;case 1:f=h}switch(p){case-1:v=u;break;case 0:v=2*Math.min(u,c);break;case 1:v=c}if(this.width()>f){var m=f/this.width();this.scale(m,n)}if(this.height()>v){var g=v/this.height();this.scale(g,n)}return this}},{key:"constrainToSize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[0,0],r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;if(r&&(r>1?(t=1*e/r,i*=r):r<1&&(e=t*r,n=1*i/r)),t&&this.width()>t){var s=t,a=null===r?this.height():e;this.resize(s,a,o)}if(e&&this.height()>e){var l=null===r?this.width():t,u=e;this.resize(l,u,o)}if(n&&this.width()<n){var h=n,c=null===r?this.height():i;this.resize(h,c,o)}if(i&&this.height()<i){var d=null===r?this.width():n,p=i;this.resize(d,p,o)}return this}}]),t}();e.default=r},function(t,e,n){"use strict";function i(t){t.preventDefault();var e=t.changedTouches[0];e.target.dispatchEvent(new MouseEvent({touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"}[t.type],{bubbles:!0,cancelable:!0,view:window,clientX:e.clientX,clientY:e.clientY,screenX:e.screenX,screenY:e.screenY}))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){t.addEventListener("touchstart",i),t.addEventListener("touchend",i),t.addEventListener("touchmove",i)}}]).default});
//# sourceMappingURL=index.js.map