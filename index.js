// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(e){var r,n,a;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,a=parseInt(n,10),!isFinite(a)){if(!t(n))throw new Error("invalid integer. Value: "+n);a=0}return a<0&&("u"===e.specifier||10!==r)&&(a=4294967295+a+1),a<0?(n=(-a).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=a.toString(r),a||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===u.call(e.specifier)?u.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function l(e){return"string"==typeof e}var s=Math.abs,c=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,d=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,_=/^(\d+)e/,S=/\.0$/,E=/\.0*e/,y=/(\..*[^0])0*e/;function v(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,y,"$1e"),n=p.call(n,E,"e"),n=p.call(n,S,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,d,"e+0$1"),n=p.call(n,g,"e-0$1"),e.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,_,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):c.call(n)}function b(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function w(e,r,t){var n=r-e.length;return n<0?e:e=t?e+b(n):b(n)+e}var m=String.fromCharCode,I=isNaN,O=Array.isArray;function R(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function N(e){var r,t,n,o,u,s,c,f,p;if(!O(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",c=1,f=0;f<e.length;f++)if(l(n=e[f]))s+=n;else{if(r=void 0!==n.precision,!(n=R(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,I(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,I(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=a(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!I(n.arg)){if((u=parseInt(n.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=I(u)?String(n.arg):m(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=w(n.arg,n.width,n.padRight)),s+=n.arg||"",c+=1}return s}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function C(e){var r,t,n,i;for(t=[],i=0,n=U.exec(e);n;)(r=e.slice(i,U.lastIndex-n[0].length)).length&&t.push(r),t.push(T(n)),i=U.lastIndex,n=U.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function L(e){return"string"==typeof e}function F(e){var r,t,n;if(!L(e))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=C(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return N.apply(null,t)}var V=Object.prototype,B=V.toString,D=V.__defineGetter__,A=V.__defineSetter__,j=V.__lookupGetter__,x=V.__lookupSetter__,k=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,u;if("object"!=typeof e||null===e||"[object Array]"===B.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===B.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(j.call(e,r)||x.call(e,r)?(n=e.__proto__,e.__proto__=V,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,u="set"in t,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&D&&D.call(e,r,t.get),u&&A&&A.call(e,r,t.set),e};function $(e,r,t){k(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var M=Math.ceil;function P(e){var r,t,n;return t=e.start,null===(n=e.stop)&&(n=-1),(r=e.step)>0&&t>=n||r<0&&t<=n?0:M((n-t)/r)}function G(e,r,t){k(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Q(e,r,t){k(e,r,{configurable:!1,enumerable:!1,get:t})}function Z(e){return"number"==typeof e}var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return z&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString,q=Object.prototype.hasOwnProperty,X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"",H=J()?function(e){var r,t,n,i,o;if(null==e)return W.call(e);t=e[Y],o=Y,r=null!=(i=e)&&q.call(i,o);try{e[Y]=void 0}catch(r){return W.call(e)}return n=W.call(e),r?e[Y]=t:delete e[Y],n}:function(e){return W.call(e)},K=Number,ee=K.prototype.toString,re=J();function te(e){return"object"==typeof e&&(e instanceof K||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function ne(e){return Z(e)||te(e)}G(ne,"isPrimitive",Z),G(ne,"isObject",te);var ie=Number.POSITIVE_INFINITY,oe=K.NEGATIVE_INFINITY,ue=Math.floor;function ae(e){return e<ie&&e>oe&&ue(r=e)===r;var r}function le(e){return Z(e)&&ae(e)}function se(e){return te(e)&&ae(e.valueOf())}function ce(e){return le(e)||se(e)}function fe(e){return null===e}function pe(e){return void 0===e}function de(e){return le(e)||fe(e)||pe(e)}function ge(){var e,r,t,n;if(0===(e=arguments.length)?(r=null,t=null,n=null):1===e?(r=null,t=arguments[0],n=null):2===e?(r=arguments[0],t=arguments[1],n=null):(r=arguments[0],t=arguments[1],n=arguments[2]),!(this instanceof ge))return new ge(r,t,n);if(!de(r))throw new TypeError(F("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",r));if(!de(t))throw new TypeError(F("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(!de(n))throw new TypeError(F("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",n));if(0===n)throw new RangeError(F("invalid argument. Third argument cannot be zero. Value: `%s`.",n));return this._start=void 0===r?null:r,this._stop=void 0===t?null:t,this._step=void 0===n?null:n,this}function he(){return/^\s*function\s*([^(]*)/i}G(ce,"isPrimitive",le),G(ce,"isObject",se),G(ge,"name","Slice"),Q(ge.prototype,"start",(function(){return this._start})),Q(ge.prototype,"stop",(function(){return this._stop})),Q(ge.prototype,"step",(function(){return this._step})),G(ge.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),G(ge.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}}));var _e=/^\s*function\s*([^(]*)/i;G(he,"REGEXP",_e);var Se=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function Ee(e){return null!==e&&"object"==typeof e}function ye(e){var r,t,n,i;if(("Object"===(t=H(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=_e.exec(n.toString()))return r[1]}return Ee(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}function ve(e){return le(e)||fe(e)||pe(e)||function(e){return e instanceof ge||"Slice"===ye(e)}(e)}function be(){var e,r,t,n,i;if(e=arguments.length,!(this instanceof be)){if(1===e)return new be(arguments[0]);if(2===e)return new be(arguments[0],arguments[1]);if(3===e)return new be(arguments[0],arguments[1],arguments[2]);if(4===e)return new be(arguments[0],arguments[1],arguments[2],arguments[3]);if(5===e)return new be(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(t=[],i=0;i<e;i++)t.push(arguments[i]);return r=Object.create(be.prototype),be.apply(r,t)}for(this._data=[],i=0;i<e;i++){if(!ve(n=arguments[i]))throw new TypeError(F("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",i,n));this._data.push(void 0===n?null:n)}return this}function we(e,r,t){var n,i,o;if(n=e.start,i=e.stop,null===(o=e.step)&&(o=1),null===n)n=o>0?0:r-1;else if(n<0){if((n=r+n)<0){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};n=0}}else if(n>=r){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};n=o<0?r-1:r}if(null===i)i=o>0?r:null;else if(i<0){if((i=r+i)<0)if(o>0){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};i=0}else{if(t&&i<-1)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};i=null}}else if(i>r){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};i=r}return new ge(n,i,o)}function me(e,r,t){return null===e?new ge(0,r,1):"number"==typeof e?e>=r?t?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:new ge(r,r,1):e<0&&(e=r+e)<0?t?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:new ge(0,0,1):new ge(e,e+1,1):we(e,r,t)}G(Ee,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Se(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ee)),G(be,"name","MultiSlice"),Q(be.prototype,"ndims",(function(){return this._data.length})),Q(be.prototype,"data",(function(){return this._data.slice()})),G(be.prototype,"toString",(function(){var e,r,t;for(e=this._data,r=[],t=0;t<e.length;t++)r.push(String(e[t]));return"MultiSlice("+r.join(",")+")"})),G(be.prototype,"toJSON",(function(){var e,r,t,n;for(e=this._data,r={type:"MultiSlice",data:[]},n=0;n<e.length;n++)t=e[n],r.data.push(t&&"function"==typeof t.toJSON?t.toJSON():t);return r}));var Ie=void 0!==String.prototype.trim,Oe=String.prototype.trim,Re=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/,Ne=Ie&&""===Oe.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===Oe.call("᠎")?function(e){return Oe.call(e)}:function(e){return function(e,r,t){return e.replace(r,t)}(e,Re,"$1")},Ue=/(?:\s*-\s*)(?=\d+)(\d+)$/,Te=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;function Ce(e,r,t,n){var i;if("end"===e)return r;if(i=e.match(Ue)){if((e=r-parseInt(i[1],10))<0){if(n)return-2;e=0}return e}return(i=e.match(Te))?(e=parseFloat(i[1]))<1?n?-2:-1:ue(t&&r>0&&1!==e?(r-1)/e:r/e):-1}var Le=/\s*:\s*/,Fe=/^[-+]?[0-9]+$/,Ve=/^end/;function Be(e,r,t){var n,i,o;if((i=(n=Ne(e).split(Le)).length)<2||i>3)return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};if(3===i)if(0===(o=n[2]).length)n[2]=1;else{if(!1===Fe.test(o))return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};if(0===(o=parseInt(o,10)))return{code:"ERR_SLICE_INVALID_INCREMENT"};n[2]=o}else n.push(1);if(0===(o=n[0]).length)n[2]<0&&r>0?n[0]=r-1:n[0]=0;else if(Ve.test(o)){if((o=Ce(o,r,n[2]<0,t))<0)return-2===o?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};n[2]<0&&o>=r&&(o-=1),n[0]=o}else{if(!Fe.test(o))return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};if((o=parseInt(o,10))<0){if((o=r+o)<0){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};o=0}}else if(o>=r){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};o=n[2]<0?r-1:r}n[0]=o}if(0===(o=n[1]).length)n[2]<0?n[1]=null:n[1]=r;else if(Ve.test(o)){if((o=Ce(o,r,n[2]<0,t))<0)return-2===o?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};n[1]=o}else{if(!Fe.test(o))return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};if((o=parseInt(o,10))<0){if((o=r+o)<0)if(n[2]>0){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};o=0}else{if(t&&o<-1)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};o=null}}else if(o>r){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};o=r}n[1]=o}return 0===r?new ge(0,0,n[2]):new ge(n[0],n[1],n[2])}var De=/\s*,\s*/,Ae=/^[-+]?[0-9]+$/,je="Slice(",xe=/\s*,\s*/,ke=/^-?[0-9]+$/;function $e(e){var r,t,n,i,o;if(e.substring(0,je.length)!==je)return null;if(")"!==e[n=e.length-1])return null;if(3!==(e=(e=Ne(e.substring(je.length,n))).split(xe)).length)return null;for(r=[],o=0;o<3;o++){if("null"===(i=e[o]))t=null;else{if(!ke.test(i))return null;t=parseInt(i,10)}r.push(t)}return new ge(r[0],r[1],r[2])}var Me="MultiSlice(",Pe=/\s*,\s*/,Ge=/^-?[0-9]+$/,Qe={};return $(Qe,"sliceLength",P),$(Qe,"normalizeMultiSlice",(function(e,r,t){var n,i,o,u;for(n=e.data,i=[],u=0;u<n.length;u++){if(void 0!==(o=me(n[u],r[u],t)).code)return o;i.push(o)}return be.apply(null,i)})),$(Qe,"normalizeSlice",we),$(Qe,"seq2multislice",(function(e,r,t){var n,i,o,u,a,l,s,c,f,p;for(a=r.length,l=(n=Ne(e).split(De)).length,o=!1,i=[],f=0,c=0;c<l;c++)if("..."!==(s=n[c])){if(u=r[f],Ae.test(s)){if(s=parseInt(s,10),t)if(s<0){if(u+s<0)return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}else if(s>=u)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};f+=1}else{if((s=Be(s,u,t)).code)return s;f+=1}i.push(s)}else{if(o)return{code:"ERR_SLICE_INVALID_ELLIPSIS"};for(o=!0,p=0;p<a-l+1;p++)i.push(new ge(0,r[f],1)),f+=1}return i.length!==a?i.length<a?{code:"ERR_SLICE_INSUFFICIENT_DIMENSIONS"}:{code:"ERR_SLICE_TOO_MANY_DIMENSIONS"}:be.apply(null,i)})),$(Qe,"seq2slice",Be),$(Qe,"sliceShape",(function(e){var r,t,n;for(r=e.data,t=[],n=0;n<r.length;n++)t.push(P(r[n]));return t})),$(Qe,"slice2seq",(function(e){var r,t,n,i;return t=e.start,n=e.stop,i=e.step,r=null===t?"":String(t),null===n?null===i?r+":":""===r?"::"+i:r+"::"+i:(r+=":"+n,null===i?r:r+":"+i)})),$(Qe,"str2multislice",(function(e){var r,t,n,i,o;if(e.substring(0,Me.length)!==Me)return null;if(")"!==e[n=e.length-1])return null;if(1===(n=(e=(e=Ne(e.substring(Me.length,n))).split(Pe)).length)&&""===e[0])return new be;for(r=[],o=0;o<n;o++){if("S"===(i=e[o])[0]){if(null===(t=$e(i=e.slice(o,o+3).join(","))))return null;o+=2}else if("null"===i)t=null;else{if(!Ge.test(i))return null;t=parseInt(i,10)}r.push(t)}return be.apply(null,r)})),$(Qe,"str2slice",$e),Qe},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=r();
//# sourceMappingURL=index.js.map
