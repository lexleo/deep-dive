!function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,i){i(1),i(4)},function(t,e,i){"use strict";function n(){function t(){e<i&&e<500&&(o.scalar(150,10),o.limit(500,50),console.log(o)),e>i&&e<700&&(o.scalar(20,5),o.limit(!1,10)),e>500&&(o.scalar(20,10),o.limit(!1,50))}let e=window.innerWidth,i=window.innerHeight,n=document.querySelectorAll(".parallax__image");n[0]&&(e>i&&n[0].classList.contains("image-h")&&n.forEach(function(t){t.classList.remove("image-h"),t.classList.add("image-w")}),e<i&&n[0].classList.contains("image-w")&&n.forEach(function(t){t.classList.remove("image-w"),t.classList.add("image-h")})),o?t():setTimeout(()=>{o&&t()},500)}Object.defineProperty(e,"__esModule",{value:!0});var o,s,r=i(2),a=i.n(r);document.addEventListener("DOMContentLoaded",t=>{let e=document.getElementById("parallax"),i=document.getElementById("soilParallax");o=new a.a(e,{scalarX:20,limitY:50,onReady:n}),s=new a.a(i,{scalarY:0})}),window.onresize=n},function(t,e,i){(function(e){var i;!function(e){t.exports=e()}(function(){return function t(e,n,o){function s(a,l){if(!n[a]){if(!e[a]){if(!l&&("function"==typeof i&&i))return i(a,!0);if(r)return r(a,!0);var h=new Error("Cannot find module '"+a+"'");throw h.code="MODULE_NOT_FOUND",h}var c=n[a]={exports:{}};e[a][0].call(c.exports,function(t){var i=e[a][1][t];return s(i||t)},c,c.exports,t,e,n,o)}return n[a].exports}for(var r="function"==typeof i&&i,a=0;a<o.length;a++)s(o[a]);return s}({1:[function(t,e,i){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,r,a=function(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),l=1;l<arguments.length;l++){i=Object(arguments[l]);for(var h in i)o.call(i,h)&&(a[h]=i[h]);if(n){r=n(i);for(var c=0;c<r.length;c++)s.call(i,r[c])&&(a[r[c]]=i[r[c]])}}return a}},{}],2:[function(t,e,i){(function(t){(function(){var i,n,o,s,r,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(i()-r)/1e6},n=t.hrtime,s=(i=function(){var t;return 1e9*(t=n())[0]+t[1]})(),a=1e9*t.uptime(),r=s-a):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,t("_process"))},{_process:3}],3:[function(t,e,i){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(t){if(c===setTimeout)return setTimeout(t,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(t,0);try{return c(t,0)}catch(e){try{return c.call(null,t,0)}catch(e){return c.call(this,t,0)}}}function r(){f&&m&&(f=!1,m.length?p=m.concat(p):v=-1,p.length&&a())}function a(){if(!f){var t=s(r);f=!0;for(var e=p.length;e;){for(m=p,p=[];++v<e;)m&&m[v].run();v=-1,e=p.length}m=null,f=!1,function(t){if(u===clearTimeout)return clearTimeout(t);if((u===o||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(t);try{u(t)}catch(e){try{return u.call(null,t)}catch(e){return u.call(this,t)}}}(t)}}function l(t,e){this.fun=t,this.array=e}function h(){}var c,u,d=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(t){c=n}try{u="function"==typeof clearTimeout?clearTimeout:o}catch(t){u=o}}();var m,p=[],f=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];p.push(new l(t,e)),1!==p.length||f||s(a)},l.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=h,d.addListener=h,d.once=h,d.off=h,d.removeListener=h,d.removeAllListeners=h,d.emit=h,d.prependListener=h,d.prependOnceListener=h,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},{}],4:[function(t,i,n){(function(e){for(var n=t("performance-now"),o="undefined"==typeof window?e:window,s=["moz","webkit"],r="AnimationFrame",a=o["request"+r],l=o["cancel"+r]||o["cancelRequest"+r],h=0;!a&&h<s.length;h++)a=o[s[h]+"Request"+r],l=o[s[h]+"Cancel"+r]||o[s[h]+"CancelRequest"+r];if(!a||!l){var c=0,u=0,d=[];a=function(t){if(0===d.length){var e=n(),i=Math.max(0,1e3/60-(e-c));c=i+e,setTimeout(function(){var t=d.slice(0);d.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(c)}catch(t){setTimeout(function(){throw t},0)}},Math.round(i))}return d.push({handle:++u,callback:t,cancelled:!1}),u},l=function(t){for(var e=0;e<d.length;e++)d[e].handle===t&&(d[e].cancelled=!0)}}i.exports=function(t){return a.call(o,t)},i.exports.cancel=function(){l.apply(o,arguments)},i.exports.polyfill=function(){o.requestAnimationFrame=a,o.cancelAnimationFrame=l}}).call(this,void 0!==e?e:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"performance-now":2}],5:[function(t,e,i){"use strict";var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=t("raf"),s=t("object-assign"),r={propertyCache:{},vendors:[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],clamp:function(t,e,i){return e<i?t<e?e:t>i?i:t:t<i?i:t>e?e:t},data:function(t,e){return r.deserialize(t.getAttribute("data-"+e))},deserialize:function(t){return"true"===t||"false"!==t&&("null"===t?null:!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):t)},camelCase:function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},accelerate:function(t){r.css(t,"transform","translate3d(0,0,0) rotate(0.0001deg)"),r.css(t,"transform-style","preserve-3d"),r.css(t,"backface-visibility","hidden")},transformSupport:function(t){for(var e=document.createElement("div"),i=!1,n=null,o=!1,s=null,a=null,l=0,h=r.vendors.length;l<h;l++)if(null!==r.vendors[l]?(s=r.vendors[l][0]+"transform",a=r.vendors[l][1]+"Transform"):(s="transform",a="transform"),void 0!==e.style[a]){i=!0;break}switch(t){case"2D":o=i;break;case"3D":if(i){var c=document.body||document.createElement("body"),u=document.documentElement,d=u.style.overflow,m=!1;document.body||(m=!0,u.style.overflow="hidden",u.appendChild(c),c.style.overflow="hidden",c.style.background=""),c.appendChild(e),e.style[a]="translate3d(1px,1px,1px)",o=void 0!==(n=window.getComputedStyle(e).getPropertyValue(s))&&n.length>0&&"none"!==n,u.style.overflow=d,c.removeChild(e),m&&(c.removeAttribute("style"),c.parentNode.removeChild(c))}}return o},css:function(t,e,i){var n=r.propertyCache[e];if(!n)for(var o=0,s=r.vendors.length;o<s;o++)if(n=null!==r.vendors[o]?r.camelCase(r.vendors[o][1]+"-"+e):e,void 0!==t.style[n]){r.propertyCache[e]=n;break}t.style[n]=i}},a={relativeInput:!1,clipRelativeInput:!1,inputElement:null,hoverOnly:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!1,precision:1,onReady:null,selector:null},l=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=e;var n={calibrateX:r.data(this.element,"calibrate-x"),calibrateY:r.data(this.element,"calibrate-y"),invertX:r.data(this.element,"invert-x"),invertY:r.data(this.element,"invert-y"),limitX:r.data(this.element,"limit-x"),limitY:r.data(this.element,"limit-y"),scalarX:r.data(this.element,"scalar-x"),scalarY:r.data(this.element,"scalar-y"),frictionX:r.data(this.element,"friction-x"),frictionY:r.data(this.element,"friction-y"),originX:r.data(this.element,"origin-x"),originY:r.data(this.element,"origin-y"),pointerEvents:r.data(this.element,"pointer-events"),precision:r.data(this.element,"precision"),relativeInput:r.data(this.element,"relative-input"),clipRelativeInput:r.data(this.element,"clip-relative-input"),hoverOnly:r.data(this.element,"hover-only"),inputElement:document.querySelector(r.data(this.element,"input-element")),selector:r.data(this.element,"selector")};for(var o in n)null===n[o]&&delete n[o];s(this,a,n,i),this.inputElement||(this.inputElement=this.element),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.elementPositionX=0,this.elementPositionY=0,this.elementWidth=0,this.elementHeight=0,this.elementCenterX=0,this.elementCenterY=0,this.elementRangeX=0,this.elementRangeY=0,this.calibrationX=0,this.calibrationY=0,this.inputX=0,this.inputY=0,this.motionX=0,this.motionY=0,this.velocityX=0,this.velocityY=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onDeviceMotion=this.onDeviceMotion.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onMotionTimer=this.onMotionTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.windowWidth=null,this.windowHeight=null,this.windowCenterX=null,this.windowCenterY=null,this.windowRadiusX=null,this.windowRadiusY=null,this.portrait=!1,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.motionSupport=!!window.DeviceMotionEvent&&!this.desktop,this.orientationSupport=!!window.DeviceOrientationEvent&&!this.desktop,this.orientationStatus=0,this.motionStatus=0,this.initialise()}return n(t,[{key:"initialise",value:function(){void 0===this.transform2DSupport&&(this.transform2DSupport=r.transformSupport("2D"),this.transform3DSupport=r.transformSupport("3D")),this.transform3DSupport&&r.accelerate(this.element);"static"===window.getComputedStyle(this.element).getPropertyValue("position")&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)}},{key:"doReadyCallback",value:function(){this.onReady&&this.onReady()}},{key:"updateLayers",value:function(){this.selector?this.layers=this.element.querySelectorAll(this.selector):this.layers=this.element.children,this.layers.length||console.warn("ParallaxJS: Your scene does not have any layers."),this.depthsX=[],this.depthsY=[];for(var t=0;t<this.layers.length;t++){var e=this.layers[t];this.transform3DSupport&&r.accelerate(e),e.style.position=t?"absolute":"relative",e.style.display="block",e.style.left=0,e.style.top=0;var i=r.data(e,"depth")||0;this.depthsX.push(r.data(e,"depth-x")||i),this.depthsY.push(r.data(e,"depth-y")||i)}}},{key:"updateDimensions",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowCenterX=this.windowWidth*this.originX,this.windowCenterY=this.windowHeight*this.originY,this.windowRadiusX=Math.max(this.windowCenterX,this.windowWidth-this.windowCenterX),this.windowRadiusY=Math.max(this.windowCenterY,this.windowHeight-this.windowCenterY)}},{key:"updateBounds",value:function(){this.bounds=this.inputElement.getBoundingClientRect(),this.elementPositionX=this.bounds.left,this.elementPositionY=this.bounds.top,this.elementWidth=this.bounds.width,this.elementHeight=this.bounds.height,this.elementCenterX=this.elementWidth*this.originX,this.elementCenterY=this.elementHeight*this.originY,this.elementRangeX=Math.max(this.elementCenterX,this.elementWidth-this.elementCenterX),this.elementRangeY=Math.max(this.elementCenterY,this.elementHeight-this.elementCenterY)}},{key:"queueCalibration",value:function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)}},{key:"enable",value:function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=!1,window.addEventListener("deviceorientation",this.onDeviceOrientation),this.detectionTimer=setTimeout(this.onOrientationTimer,this.supportDelay)):this.motionSupport?(this.portrait=!1,window.addEventListener("devicemotion",this.onDeviceMotion),this.detectionTimer=setTimeout(this.onMotionTimer,this.supportDelay)):(this.calibrationX=0,this.calibrationY=0,this.portrait=!1,window.addEventListener("mousemove",this.onMouseMove),this.doReadyCallback()),window.addEventListener("resize",this.onWindowResize),this.raf=o(this.onAnimationFrame))}},{key:"disable",value:function(){this.enabled&&(this.enabled=!1,this.orientationSupport?window.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?window.removeEventListener("devicemotion",this.onDeviceMotion):window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize),o.cancel(this.raf))}},{key:"calibrate",value:function(t,e){this.calibrateX=void 0===t?this.calibrateX:t,this.calibrateY=void 0===e?this.calibrateY:e}},{key:"invert",value:function(t,e){this.invertX=void 0===t?this.invertX:t,this.invertY=void 0===e?this.invertY:e}},{key:"friction",value:function(t,e){this.frictionX=void 0===t?this.frictionX:t,this.frictionY=void 0===e?this.frictionY:e}},{key:"scalar",value:function(t,e){this.scalarX=void 0===t?this.scalarX:t,this.scalarY=void 0===e?this.scalarY:e}},{key:"limit",value:function(t,e){this.limitX=void 0===t?this.limitX:t,this.limitY=void 0===e?this.limitY:e}},{key:"origin",value:function(t,e){this.originX=void 0===t?this.originX:t,this.originY=void 0===e?this.originY:e}},{key:"setInputElement",value:function(t){this.inputElement=t,this.updateDimensions()}},{key:"setPosition",value:function(t,e,i){e=e.toFixed(this.precision)+"px",i=i.toFixed(this.precision)+"px",this.transform3DSupport?r.css(t,"transform","translate3d("+e+","+i+",0)"):this.transform2DSupport?r.css(t,"transform","translate("+e+","+i+")"):(t.style.left=e,t.style.top=i)}},{key:"onOrientationTimer",value:function(){this.orientationSupport&&0===this.orientationStatus?(this.disable(),this.orientationSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onMotionTimer",value:function(){this.motionSupport&&0===this.motionStatus?(this.disable(),this.motionSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onCalibrationTimer",value:function(){this.calibrationFlag=!0}},{key:"onWindowResize",value:function(){this.updateDimensions()}},{key:"onAnimationFrame",value:function(){this.updateBounds();var t=this.inputX-this.calibrationX,e=this.inputY-this.calibrationY;(Math.abs(t)>this.calibrationThreshold||Math.abs(e)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.motionX=this.calibrateX?e:this.inputY,this.motionY=this.calibrateY?t:this.inputX):(this.motionX=this.calibrateX?t:this.inputX,this.motionY=this.calibrateY?e:this.inputY),this.motionX*=this.elementWidth*(this.scalarX/100),this.motionY*=this.elementHeight*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.motionX=r.clamp(this.motionX,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.motionY=r.clamp(this.motionY,-this.limitY,this.limitY)),this.velocityX+=(this.motionX-this.velocityX)*this.frictionX,this.velocityY+=(this.motionY-this.velocityY)*this.frictionY;for(var i=0;i<this.layers.length;i++){var n=this.layers[i],s=this.depthsX[i],a=this.depthsY[i],l=this.velocityX*(s*(this.invertX?-1:1)),h=this.velocityY*(a*(this.invertY?-1:1));this.setPosition(n,l,h)}this.raf=o(this.onAnimationFrame)}},{key:"rotate",value:function(t,e){var i=(t||0)/30,n=(e||0)/30,o=this.windowHeight>this.windowWidth;this.portrait!==o&&(this.portrait=o,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.calibrationX=i,this.calibrationY=n),this.inputX=i,this.inputY=n}},{key:"onDeviceOrientation",value:function(t){var e=t.beta,i=t.gamma;null!==e&&null!==i&&(this.orientationStatus=1,this.rotate(e,i))}},{key:"onDeviceMotion",value:function(t){var e=t.rotationRate.beta,i=t.rotationRate.gamma;null!==e&&null!==i&&(this.motionStatus=1,this.rotate(e,i))}},{key:"onMouseMove",value:function(t){var e=t.clientX,i=t.clientY;if(this.hoverOnly&&(e<this.elementPositionX||e>this.elementPositionX+this.elementWidth||i<this.elementPositionY||i>this.elementPositionY+this.elementHeight))return this.inputX=0,void(this.inputY=0);this.relativeInput?(this.clipRelativeInput&&(e=Math.max(e,this.elementPositionX),e=Math.min(e,this.elementPositionX+this.elementWidth),i=Math.max(i,this.elementPositionY),i=Math.min(i,this.elementPositionY+this.elementHeight)),this.elementRangeX&&this.elementRangeY&&(this.inputX=(e-this.elementPositionX-this.elementCenterX)/this.elementRangeX,this.inputY=(i-this.elementPositionY-this.elementCenterY)/this.elementRangeY)):this.windowRadiusX&&this.windowRadiusY&&(this.inputX=(e-this.windowCenterX)/this.windowRadiusX,this.inputY=(i-this.windowCenterY)/this.windowRadiusY)}},{key:"destroy",value:function(){this.disable(),clearTimeout(this.calibrationTimer),clearTimeout(this.detectionTimer),this.element.removeAttribute("style");for(var t=0;t<this.layers.length;t++)this.layers[t].removeAttribute("style");delete this.element,delete this.layers}},{key:"version",value:function(){return"3.1.0"}}]),t}();e.exports=l},{"object-assign":1,raf:4}]},{},[5])(5)})}).call(e,i(3))},function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){function n(t){t.preventDefault(),s.classList.toggle("is-active"),r.classList.toggle("pip--active"),r.classList.contains("pip--active")?o.on():o.off()}var o=i(5),s=document.querySelector(".hamburger"),r=document.querySelector(".pip-wrapper"),a=document.querySelector(".power");s&&s.addEventListener("click",t=>{n(t)}),a&&a.addEventListener("click",t=>{n(t)})},function(t,e){var i={options:{disableWheel:!0,disableScrollbar:!0,disableKeys:!0,scrollEventKeys:[32,33,34,35,36,37,38,39,40]},element:document.body,lockToScrollPos:[0,0],on:function(t,e){this.element=t||document.body,this.options=this._extend(this.options,e),this.options.disableWheel&&(document.addEventListener("mousewheel",this._handleWheel),document.addEventListener("DOMMouseScroll",this._handleWheel),document.addEventListener("touchmove",this._handleWheel)),this.options.disableScrollbar&&(this.lockToScrollPos=[this.element.scrollLeft,this.element.scrollTop],this._disableScrollbarFn=this._handleScrollbar.bind(this),document.addEventListener("scroll",this._disableScrollbarFn)),this.options.disableKeys&&(this._disableKeysFn=this._handleKeydown.bind(this),document.addEventListener("keydown",this._disableKeysFn))},off:function(){document.removeEventListener("mousewheel",this._handleWheel),document.removeEventListener("DOMMouseScroll",this._handleWheel),document.removeEventListener("touchmove",this._handleWheel),document.removeEventListener("scroll",this._disableScrollbarFn),document.removeEventListener("keydown",this._disableKeysFn)},_handleWheel:function(t){t.preventDefault()},_handleScrollbar:function(){window.scrollTo(this.lockToScrollPos[0],this.lockToScrollPos[1])},_handleKeydown:function(t){for(var e=0;e<this.options.scrollEventKeys.length;e++)if(t.keyCode===this.options.scrollEventKeys[e])return t.preventDefault(),!1},_extend:function(t,e){var i=t;for(var n in e)e.hasOwnProperty(n)&&(i[n]=e[n]);return i}};t.exports=i}]);