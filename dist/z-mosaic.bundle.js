module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e){t.exports=require("prop-types")},function(t,e){t.exports=require("react")},function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n),a=r(0),i=r.n(a);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d={width:i.a.number.isRequired,height:i.a.number.isRequired,src:i.a.string.isRequired,left:i.a.number,top:i.a.number,className:i.a.string},h=function(t){function e(){var t,r,n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return n=this,o=(t=f(e)).call.apply(t,[this].concat(i)),r=!o||"object"!==u(o)&&"function"!=typeof o?l(n):o,p(l(r),"onLoadImage",function(){var t=r.props.src,e=document.getElementById("canvas"),n=e.getContext("2d"),o=new Image;o.src="".concat(t,"?").concat((new Date).getTime()),o.crossOrigin="",o.onload=function(){r.drawRect(e,n,o)}}),p(l(r),"drawRect",function(t,e,n){var o=r.props,a=o.left,i=o.top,u=o.width,c=o.height;t.width=r.mosaic.clientWidth,t.height=r.mosaic.clientHeight,e.drawImage(n,0,0,r.mosaic.clientWidth,r.mosaic.clientHeight);for(var f=e.getImageData(a,i,u,c),l=f.width/10,s=f.height/10,p=0;p<s;p++)for(var d=0;d<l;d++)for(var h=r.getXY(f,10*d+Math.floor(10*Math.random()),10*p+Math.floor(10*Math.random())),y=0;y<10;y++)for(var m=0;m<10;m++)r.setXY(f,10*d+m,10*p+y,h);e.putImageData(f,a,i)}),p(l(r),"getXY",function(t,e,r){var n=t.width,o=[];return o[0]=t.data[4*(r*n+e)],o[1]=t.data[4*(r*n+e)+1],o[2]=t.data[4*(r*n+e)+2],o[3]=t.data[4*(r*n+e)+3],o}),p(l(r),"setXY",function(t,e,r,n){var o=t.width;t.data[4*(r*o+e)]=n[0],t.data[4*(r*o+e)+1]=n[1],t.data[4*(r*o+e)+2]=n[2],t.data[4*(r*o+e)+3]=n[3]}),r}var r,a,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,n["Component"]),r=e,(a=[{key:"componentDidMount",value:function(){this.onLoadImage()}},{key:"componentWillUpdate",value:function(t){var e=this.props.src;t.src||e===t.src||this.onLoadImage()}},{key:"render",value:function(){var t=this,e=this.props.className;return o.a.createElement("div",{className:e,style:{width:"100%",height:"100%",position:"relative"},ref:function(e){return t.mosaic=e}},o.a.createElement("canvas",{id:"canvas",style:{width:"100%",height:"100%"}}))}}])&&c(r.prototype,a),i&&c(r,i),e}();h.propTypes=d,h.defaultProps={width:0,height:0,src:"",left:0,top:0,className:""};var y=h;e.default=y}]);