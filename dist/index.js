!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.DrawingTool=e():t.DrawingTool=e()}(window,function(){return function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="./",s(s.s=12)}([function(t,e,s){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var s=function(t,e){var s=t[1]||"",i=t[3];if(!i)return s;if(e&&"function"==typeof btoa){var n=(a=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[s].concat(o).concat([n]).join("\n")}var a;return[s].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+s+"}":s}).join("")},e.i=function(t,s){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},n=0;n<this.length;n++){var o=this[n][0];null!=o&&(i[o]=!0)}for(n=0;n<t.length;n++){var a=t[n];null!=a[0]&&i[a[0]]||(s&&!a[2]?a[2]=s:s&&(a[2]="("+a[2]+") and ("+s+")"),e.push(a))}},e}},function(t,e,s){t.exports=s.p+"7f0d1e969712769a8dc491e5a4c08ee5.eot"},function(t,e,s){var i,n,o={},a=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===n&&(n=i.apply(this,arguments)),n}),r=function(t){var e={};return function(t,s){if("function"==typeof t)return t();if(void 0===e[t]){var i=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,s);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),h=null,c=0,l=[],d=s(9);function u(t,e){for(var s=0;s<t.length;s++){var i=t[s],n=o[i.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](i.parts[a]);for(;a<i.parts.length;a++)n.parts.push(y(i.parts[a],e))}else{var r=[];for(a=0;a<i.parts.length;a++)r.push(y(i.parts[a],e));o[i.id]={id:i.id,refs:1,parts:r}}}}function p(t,e){for(var s=[],i={},n=0;n<t.length;n++){var o=t[n],a=e.base?o[0]+e.base:o[0],r={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(r):s.push(i[a]={id:a,parts:[r]})}return s}function f(t,e){var s=r(t.insertInto);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=l[l.length-1];if("top"===t.insertAt)i?i.nextSibling?s.insertBefore(e,i.nextSibling):s.appendChild(e):s.insertBefore(e,s.firstChild),l.push(e);else if("bottom"===t.insertAt)s.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=r(t.insertAt.before,s);s.insertBefore(e,n)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return s.nc}();i&&(t.attrs.nonce=i)}return x(e,t.attrs),f(t,e),e}function x(t,e){Object.keys(e).forEach(function(s){t.setAttribute(s,e[s])})}function y(t,e){var s,i,n,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var a=c++;s=h||(h=v(e)),i=w.bind(null,s,a,!1),n=w.bind(null,s,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(s=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",x(e,t.attrs),f(t,e),e}(e),i=function(t,e,s){var i=s.css,n=s.sourceMap,o=void 0===e.convertToAbsoluteUrls&&n;(e.convertToAbsoluteUrls||o)&&(i=d(i));n&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var a=new Blob([i],{type:"text/css"}),r=t.href;t.href=URL.createObjectURL(a),r&&URL.revokeObjectURL(r)}.bind(null,s,e),n=function(){m(s),s.href&&URL.revokeObjectURL(s.href)}):(s=v(e),i=function(t,e){var s=e.css,i=e.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=s;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(s))}}.bind(null,s),n=function(){m(s)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else n()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var s=p(t,e);return u(s,e),function(t){for(var i=[],n=0;n<s.length;n++){var a=s[n];(r=o[a.id]).refs--,i.push(r)}t&&u(p(t,e),e);for(n=0;n<i.length;n++){var r;if(0===(r=i[n]).refs){for(var h=0;h<r.parts.length;h++)r.parts[h]();delete o[r.id]}}}};var g,b=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function w(t,e,s,i){var n=s?"":i.css;if(t.styleSheet)t.styleSheet.cssText=b(e,n);else{var o=document.createTextNode(n),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},function(t,e,s){var i=s(4);"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s(2)(i,n);i.locals&&(t.exports=i.locals)},function(t,e,s){e=t.exports=s(0)(!1);var i=s(5),n=i(s(1)),o=i(s(1)+"#iefix"),a=i(s(6)),r=i(s(7)),h=i(s(8)+"#icomoon");e.push([t.i,"@font-face{font-family:icomoon;src:url("+n+");src:url("+o+') format("embedded-opentype"),url('+a+') format("truetype"),url('+r+') format("woff"),url('+h+') format("svg");font-weight:400;font-style:normal}[class*=" icon-"],[class^=icon-]{font-family:icomoon!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-arrow:before{content:"\\e900"}.icon-color .path1:before{content:"\\e901";color:#000;opacity:.3608}.icon-color .path2:before{content:"\\e902";margin-left:-1em;color:#000}.icon-ellipse:before{content:"\\e903"}.icon-line:before{content:"\\e904"}.icon-move:before{content:"\\e905";color:#4e4e50}.icon-pen:before{content:"\\e906";color:#929292}.icon-rectangle:before{content:"\\e907"}.icon-redo:before{content:"\\e908"}.icon-text:before{content:"\\e909"}.icon-undo:before{content:"\\e90a"}',""])},function(t,e,s){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e,s){t.exports=s.p+"bc1a7918eada95027fb76b37f03e61b5.ttf"},function(t,e,s){t.exports=s.p+"b5b2b782cc54ca2ee4a207bdcc29f8f5.woff"},function(t,e,s){t.exports=s.p+"a897a5429ff1df640338757a3624f0e6.svg"},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var s=e.protocol+"//"+e.host,i=s+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var n,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(n=0===o.indexOf("//")?o:0===o.indexOf("/")?s+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}},function(t,e,s){var i=s(11);"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s(2)(i,n);i.locals&&(t.exports=i.locals)},function(t,e,s){(t.exports=s(0)(!1)).push([t.i,"body{margin:0;padding:0;font-family:sans-serif;color:#111;background-color:#eee;position:fixed}#drawingTool{position:relative;width:100%;height:100vh;overflow:hidden}.drawing-menu{padding:0;background:#fff;position:absolute;margin:0;top:0;left:0;z-index:10}.drawing-menu li{list-style:none;float:left}.drawing-menu li a{cursor:pointer;padding:5px 10px;-ms-user-select:none;user-select:none;-moz-user-select:none;-webkit-user-select:none}.drawing-menu li a.active span,.drawing-menu li a.active span:before{color:red}#imageView{border:0}#imageTemp{position:absolute;top:0;left:0}.insertText{position:absolute;z-index:10;padding:3px;background:none;outline:none;resize:none;margin:0;font:16px Helvetica;overflow:hidden;border:1px dashed #000;width:30px;line-height:14px}#spanTextCalc,.liText{position:absolute;visibility:hidden;height:auto;width:auto;white-space:nowrap}.liText{display:inline}",""])},function(t,e,s){"use strict";s.r(e);s(3),s(10);class i{constructor(t){this.context=t.context,this.started=t.started,this.canvas=t.canvas,this.canvasx=this.canvas.offsetLeft,this.canvasy=this.canvas.offsetTop,this.last_mousex=this.last_mousey=0,this.mousex=this.mousey=0,this.mousedown=(t=>{this.started=!0,this.last_mousex=parseInt(t._x-this.canvasx),this.last_mousey=parseInt(t._y-this.canvasy)}),this.mousemove=(e=>{if(this.mousex=parseInt(e._x-this.canvasx),this.mousey=parseInt(e._y-this.canvasy),this.started){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.save(),this.context.beginPath();var s=(this.mousex-this.last_mousex)/2*1,i=(this.mousey-this.last_mousey)/2*1;this.context.scale(s,i);var n=this.last_mousex/s+1,o=this.last_mousey/i+1;this.context.arc(n,o,1,0,2*Math.PI),this.context.restore(),this.context.strokeStyle=t.strokeStyle,this.context.lineWidth=t.lineWidth,this.context.stroke()}}),this.mouseup=(t=>{this.started&&(this.mousemove(t),this.started=!1)}),this.mouseleave=(t=>{this.started=!1})}}class n{constructor(t){this.context=t.context,this.started=t.started,this.mousedown=(t=>{this.context.beginPath(),this.context.moveTo(t._x,t._y),this.started=!0}),this.mousemove=(e=>{this.started&&(this.context.lineTo(e._x,e._y),this.context.strokeStyle=t.strokeStyle,this.context.lineWidth=t.lineWidth,this.context.stroke())}),this.mouseup=(t=>{this.started=!1}),this.mouseleave=(t=>{this.started=!1})}}class o{constructor(t){this.context=t.context,this.started=t.started,this.canvas=t.canvas,this.mousedown=(t=>{this.started=!0,this.x0=t._x,this.y0=t._y}),this.mousemove=(e=>{if(this.started){var s=Math.min(e._x,this.x0),i=Math.min(e._y,this.y0),n=Math.abs(e._x-this.x0),o=Math.abs(e._y-this.y0);this.context.clearRect(0,0,this.canvas.width,this.canvas.height),n&&o&&(this.context.strokeStyle=t.strokeStyle,this.context.lineWidth=t.lineWidth,this.context.strokeRect(s,i,n,o))}}),this.mouseup=(t=>{this.started=!1}),this.mouseleave=(t=>{this.started=!1})}}class a{constructor(t){this.context=t.context,this.started=t.started,this.mousedown=(t=>{this.started=!0,this.x0=t._x,this.y0=t._y}),this.mousemove=(e=>{this.started&&(this.context.clearRect(0,0,t.canvas.width,t.canvas.height),this.context.beginPath(),this.context.moveTo(this.x0,this.y0),this.context.lineTo(e._x,e._y),this.context.strokeStyle=t.strokeStyle,this.context.lineWidth=t.lineWidth,this.context.stroke(),this.context.closePath())}),this.mouseup=(t=>{this.started&&(this.mousemove(t),this.started=!1)}),this.mouseleave=(t=>{this.started=!1})}}class r{constructor(t){this.context=t.context,this.started=t.started,this.mousedown=(t=>{this.started=!0,this.x1=t._x,this.y1=t._y}),this.mousemove=(e=>{if(this.started&&(this.x2=e._x,this.y2=e._y,this.x1!==this.x2||this.y1!==this.y2)){this.context.clearRect(0,0,t.canvas.width,t.canvas.height),this.context.beginPath(),this.context.moveTo(this.x1,this.y1),this.context.lineTo(this.x2,this.y2),this.context.strokeStyle=t.strokeStyle,this.context.lineWidth=t.lineWidth,this.context.stroke();var s=Math.atan((this.y2-this.y1)/(this.x2-this.x1));s+=(this.x2>this.x1?90:-90)*Math.PI/180,this.drawArrowhead(this.context,this.x2,this.y2,s,t.lineWidth,t.strokeStyle,t.strokeStyle),this.context.closePath()}}),this.mouseup=(t=>{this.started&&(this.mousemove(t),this.started=!1)}),this.mouseleave=(t=>{this.started=!1})}drawArrowhead(t,e,s,i,n,o,a){t.save(),t.beginPath(),t.translate(e,s),t.rotate(i),t.moveTo(0,0),t.lineTo(n,2*n),t.lineTo(-n,2*n),t.closePath(),t.lineWidth=n,t.strokeStyle=o,t.fillStyle=a,t.stroke(),t.fill(),t.restore()}}class h{constructor(t){this.context=t.context,this.started=t.started,this.textarea=null,this.removeTextarea(t),this.mousedown=(e=>{if(this.started=!0,this.x0=e._x,this.y0=e._y,this.textValue){this.context.clearRect(0,0,t.canvas.width,t.canvas.height),this.drawText(this.context,this.textValue,this.lastX+4,this.lastY+16,14,t.strokeStyle),t.img_update(),this.textValue=""}let s=document.getElementById("insertText");s&&s.parentNode.removeChild(s),this.textarea=document.createElement("textarea"),this.textarea.className="insertText",this.textarea.id="insertText",this.textarea.rows=2,this.textarea.style.color=t.strokeStyle,this.textarea.spellcheck=!1,document.body.appendChild(this.textarea),this.textarea.focus(),this.spanTextCalc=document.createElement("span"),this.spanTextCalc.id="spanTextCalc",document.body.appendChild(this.spanTextCalc),this.textarea.addEventListener("keyup",e=>{this.context.clearRect(0,0,t.canvas.width,t.canvas.height),this.textValue=this.textarea.value,this.lastX=this.x0,this.lastY=this.y0}),this.textarea.addEventListener("keydown",t=>{13==t.keyCode&&(this.textarea.rows=this.textarea.rows+1),this.spanTextCalc.style.fontSize=16;let e=this.textarea.value.replace(/ /g,"&nbsp;");this.spanTextCalc.innerHTML=e;let s=e.split("\n");if(s&&s.length>1){let t=document.getElementById("ulText");t&&t.parentNode.removeChild(t);var i=document.createElement("ul");i.id="ulText",document.body.appendChild(i),s.forEach(function(t){var e=document.createElement("li");e.className="liText",e.innerHTML=t,i.appendChild(e)});var n=document.querySelectorAll("li.liText"),o=Array.prototype.slice.call(n).reduce((t,e)=>t.clientWidth>e.clientWidth?t:e);this.spanTextCalc.innerHTML=o.textContent.replace(/ /g,"&nbsp;"),this.textwidth=this.spanTextCalc.clientWidth,this.textarea.style.width=this.textwidth+30}else this.textwidth=this.spanTextCalc.clientWidth,this.textarea.style.width=this.textwidth+30}),this.textarea.style.top=e.clientY+"px",this.textarea.style.left=e.clientX+"px"})}drawText(t,e,s,i,n,o){var a=n,r=e.split("\n");t.font="16px Helvetica",t.fillStyle=o;for(var h=0;h<r.length;h++)t.fillText(r[h],s,i+h*a)}removeTextarea(t){document.querySelectorAll(".toolSelect a").forEach(e=>{e.addEventListener("click",e=>{let s=document.getElementById("insertText"),i=e.currentTarget.className;if("control"!==i&&"move"!==i)if("color"!==i){if(s){if(s.value){this.context.clearRect(0,0,t.canvas.width,t.canvas.height);let e=s.offsetTop,i=s.offsetLeft;this.drawText(this.context,s.value,i+4,e+16,14,t.strokeStyle),t.img_update(),s.value=""}s.parentNode.removeChild(s)}}else s&&(s.style.color=t.strokeStyle)})})}}class c{constructor(t){this.context=t.context,this.started=t.started,this.points=[],this.mousedown=(t=>{this.context.globalAlpha=.4,this.points.push({x:t.clientX,y:t.clientY}),this.started=!0}),this.mousemove=(e=>{this.started&&(this.points.push({x:e.clientX,y:e.clientY}),this.context.beginPath(),this.context.lineWidth=10,this.context.strokeStyle=t.strokeStyle,this.points.length>1&&(this.context.moveTo(this.points[this.points.length-2].x,this.points[this.points.length-2].y),this.context.lineTo(this.points[this.points.length-1].x,this.points[this.points.length-1].y)),this.context.stroke(),this.context.closePath())}),this.mouseup=(t=>{this.context.globalAlpha=1,this.started=!1,this.points.length=0}),this.mouseleave=(t=>{this.started=!1,this.points.length=0})}}class l{constructor(t){this.elem=t,this.active=!1,this.currentX,this.currentY,this.initialX,this.initialY,this.xOffset=0,this.yOffset=0}creareMenu(){this.ul=document.createElement("ul"),this.ul.className="drawing-menu",this.elem.appendChild(this.ul),[{id:"pencil",title:"Pencil",type:"tool",icon:'<span class="icon-pen"></span>'},{id:"marker",title:"Marker",type:"tool",icon:'<span class="icon-pen"></span>'},{id:"line",title:"Line",type:"tool",icon:'<span class="icon-line"></span>'},{id:"lineArrow",title:"Line Arrow",type:"tool",icon:'<span class="icon-arrow"></span>'},{id:"rect",title:"Rect",type:"tool",icon:'<span class="icon-rectangle"></span>'},{id:"ellipse",title:"Ellipse",type:"tool",icon:'<span class="icon-ellipse"></span>'},{id:"text",title:"Text",type:"tool",icon:'<span class="icon-text"></span>'},{id:"red",title:"Red",type:"color",icon:'<span class="icon-color"><span class="path1"></span><span class="path2"></span></span>'},{id:"blue",title:"Blue",type:"color",value:'<input type="color" value="#ff0000" id="color">'},{id:"undo",title:"Undo",type:"control",icon:'<span class="icon-undo"></span>'},{id:"redo",title:"Redo",type:"control",icon:'<span class="icon-redo"></span>'},{id:"move",title:"Move",type:"move",icon:'<span class="icon-move" id="icon-move"></span>'}].forEach(t=>{let e=document.createElement("li");e.className="toolSelect";let s=document.createElement("a");e.appendChild(s),s.innerHTML=t.icon?t.icon:t.value,s.className=t.type,t.draggable&&(s.draggable=!0),s.dataset.type=t.type,s.id=t.id,this.ul.appendChild(e)}),this.elem.addEventListener("touchstart",this.dragStart.bind(this),!1),this.elem.addEventListener("touchend",this.dragEnd.bind(this),!1),this.elem.addEventListener("touchmove",this.drag.bind(this),!1),this.elem.addEventListener("mousedown",this.dragStart.bind(this),!1),this.elem.addEventListener("mouseup",this.dragEnd.bind(this),!1),this.elem.addEventListener("mousemove",this.drag.bind(this),!1)}dragStart(t){"touchstart"===t.type?(this.initialX=t.touches[0].clientX-this.xOffset,this.initialY=t.touches[0].clientY-this.yOffset):(this.initialX=t.clientX-this.xOffset,this.initialY=t.clientY-this.yOffset),"move"!==t.target.id&&"icon-move"!==t.target.id||(this.ul.draggable=!0,this.active=!0)}dragEnd(t){this.initialX=this.currentX,this.initialY=this.currentY,this.ul.draggable=!1,this.active=!1}drag(t){this.active&&(t.preventDefault(),"touchmove"===t.type?(this.currentX=t.touches[0].clientX-this.initialX,this.currentY=t.touches[0].clientY-this.initialY):(this.currentX=t.clientX-this.initialX,this.currentY=t.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.setTranslate(this.currentX,this.currentY,this.ul))}setTranslate(t,e,s){s.style.transform="translate3d("+t+"px, "+e+"px, 0)"}}class d{constructor(t,e){this.elem=t,this.options=e,this.started=!1,this.tool_default="rect",this.tools={pencil:n,marker:c,rect:o,line:a,lineArrow:r,ellipse:i,text:h},this.cPushArray=new Array,this.cStep=-1,this.strokeStyle="#ff0000",this.lineWidth=4,this.init()}init(){this.createCanvas(),new l(this.elem).creareMenu(),this.handleMenuClick(),this.handleColorChange()}handleMenuClick(){let t=document.querySelectorAll(".toolSelect a");t.forEach(e=>{let s=e.id;switch(e.dataset.type){case"tool":e.addEventListener("click",e=>{t.forEach(t=>{t.className!=e.currentTarget.className&&t.classList.remove("active")}),e.currentTarget.classList.contains("active")?(e.currentTarget.classList.remove("active"),this.tool=null):(e.currentTarget.classList.add("active"),this.tool=new this.tools[s](this))});break;case"control":e.addEventListener("click",t=>{this.handleUndoRedo(s)})}})}handleColorChange(){document.getElementById("color").addEventListener("change",t=>{this.strokeStyle=t.target.value})}createCanvas(){this.canvaso=document.createElement("canvas"),this.canvaso.id="imageView",this.canvaso.width=this.options.width?this.options.width:window.innerWidth,this.canvaso.height=this.options.height?this.options.height:window.innerHeight,this.elem.appendChild(this.canvaso),this.contexto=this.canvaso.getContext("2d"),this.canvas=document.createElement("canvas"),this.canvas.id="imageTemp",this.canvas.width=this.options.width?this.options.width:window.innerWidth,this.canvas.height=this.options.height?this.options.height:window.innerHeight,this.elem.appendChild(this.canvas),this.context=this.canvas.getContext("2d"),this.options.bgImage?(this.bgImage=new Image,this.bgImage.src=this.options.bgImage,this.bgImage.onload=(()=>{this.contexto.drawImage(this.bgImage,0,0),this.cPush()})):this.cPush(),this.tools[this.tool_default]&&(this.tool=new this.tools[this.tool_default](this)),this.canvas.addEventListener("mousedown",this.canvasEvent.bind(this)),this.canvas.addEventListener("mousemove",this.canvasEvent.bind(this)),this.canvas.addEventListener("mouseup",this.canvasEvent.bind(this)),this.canvas.addEventListener("mouseleave",this.canvasEvent.bind(this))}canvasEvent(t){t.layerX||0==t.layerX?(t._x=t.layerX,t._y=t.layerY):(t.offsetX||0==t.offsetX)&&(t._x=t.offsetX,t._y=t.offsetY);var e=this.tool?this.tool[t.type]:null;e&&("mouseup"==t.type&&this.img_update(),"mousedown"==t.type&&(t.preventDefault?t.preventDefault():t.returnValue=!1),e(t))}img_update(){this.contexto.drawImage(this.canvas,0,0),this.cPush(),this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}cPush(){this.cPushArray[this.cStep]!=this.canvaso.toDataURL()&&(this.cStep++,this.cStep<this.cPushArray.length&&(this.cPushArray.length=this.cStep),this.cPushArray.push(this.canvaso.toDataURL()),document.title=this.cStep+":"+this.cPushArray.length)}cUndo(){if(this.cStep>0){this.cStep--;var t=new Image;t.src=this.cPushArray[this.cStep],t.onload=(()=>{this.contexto.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.contexto.drawImage(t,0,0)})}}cRedo(){if(this.cStep<this.cPushArray.length-1){this.cStep++;var t=new Image;t.src=this.cPushArray[this.cStep],t.onload=(()=>{this.contexto.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.contexto.drawImage(t,0,0)})}}handleUndoRedo(t){"undo"==t?this.cUndo():this.cRedo()}}e.default=class extends d{constructor(t,e){super(t,e)}}}]).default});
//# sourceMappingURL=index.js.map