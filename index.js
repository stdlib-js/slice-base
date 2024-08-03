// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,u=r-e.length;return u<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(u):n(u)+e,i&&(e="-"+e)),e}var u=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function a(e){var r,n,a;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,a=parseInt(n,10),!isFinite(a)){if(!t(n))throw new Error("invalid integer. Value: "+n);a=0}return a<0&&("u"===e.specifier||10!==r)&&(a=4294967295+a+1),a<0?(n=(-a).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=a.toString(r),a||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):u.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var l=Math.abs,s=String.prototype.toLowerCase,c=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,h=/^(\d+)e/,_=/\.0$/,S=/\.0*e/,E=/(\..*[^0])0*e/;function v(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,E,"$1e"),n=f.call(n,S,"e"),n=f.call(n,_,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,d,"e-0$1"),e.alternate&&(n=f.call(n,g,"$1."),n=f.call(n,h,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===c.call(e.specifier)?c.call(n):s.call(n)}function w(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var y=String.fromCharCode,b=Array.isArray;function m(e){return e!=e}function I(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,t,n,u,o,l,s,c,f,p,d,g,h;if(!b(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",s=1,c=0;c<e.length;c++)if("string"==typeof(n=e[c]))l+=n;else{if(r=void 0!==n.precision,!(n=I(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(u=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+u)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,m(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,m(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=a(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!m(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=m(o)?String(n.arg):y(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,d=n.width,g=n.padRight,h=void 0,(h=d-p.length)<0?p:p=g?p+w(h):w(h)+p)),l+=n.arg||"",s+=1}return l}var R=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function U(e){var r,t,n,i;for(t=[],i=0,n=R.exec(e);n;)(r=e.slice(i,R.lastIndex-n[0].length)).length&&t.push(r),t.push(N(n)),i=R.lastIndex,n=R.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function T(e){var r,t;if("string"!=typeof e)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[U(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return O.apply(null,r)}var C=Object.prototype,L=C.toString,F=C.__defineGetter__,D=C.__defineSetter__,V=C.__lookupGetter__,B=C.__lookupSetter__,j=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,u,o;if("object"!=typeof e||null===e||"[object Array]"===L.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===L.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(e,r)||B.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),u="get"in t,o="set"in t,i&&(u||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&F&&F.call(e,r,t.get),o&&D&&D.call(e,r,t.set),e};function A(e,r,t){j(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}function x(e,r,t){j(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function k(e,r,t){j(e,r,{configurable:!1,enumerable:!1,get:t})}function $(e){return"number"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function P(){return M&&"symbol"==typeof Symbol.toStringTag}var G=Object.prototype.toString,Q=Object.prototype.hasOwnProperty,Z="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Z?Z.toStringTag:"",J=P()?function(e){var r,t,n,i,u;if(null==e)return G.call(e);t=e[z],u=z,r=null!=(i=e)&&Q.call(i,u);try{e[z]=void 0}catch(r){return G.call(e)}return n=G.call(e),r?e[z]=t:delete e[z],n}:function(e){return G.call(e)},W=Number,q=W.prototype.toString,X=P();function Y(e){return"object"==typeof e&&(e instanceof W||(X?function(e){try{return q.call(e),!0}catch(e){return!1}}(e):"[object Number]"===J(e)))}function H(e){return $(e)||Y(e)}x(H,"isPrimitive",$),x(H,"isObject",Y);var K=Number.POSITIVE_INFINITY,ee=W.NEGATIVE_INFINITY,re=Math.floor;function te(e){return e<K&&e>ee&&re(r=e)===r;var r}function ne(e){return $(e)&&te(e)}function ie(e){return Y(e)&&te(e.valueOf())}function ue(e){return ne(e)||ie(e)}function oe(e){return null===e}function ae(e){return void 0===e}function le(e){return ne(e)||oe(e)||ae(e)}function se(){var e,r,t,n;if(0===(e=arguments.length)?(r=null,t=null,n=null):1===e?(r=null,t=arguments[0],n=null):2===e?(r=arguments[0],t=arguments[1],n=null):(r=arguments[0],t=arguments[1],n=arguments[2]),!(this instanceof se))return new se(r,t,n);if(!le(r))throw new TypeError(T("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",r));if(!le(t))throw new TypeError(T("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(!le(n))throw new TypeError(T("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",n));if(0===n)throw new RangeError(T("invalid argument. Third argument cannot be zero. Value: `%s`.",n));return this._start=void 0===r?null:r,this._stop=void 0===t?null:t,this._step=void 0===n?null:n,this}function ce(){return/^\s*function\s*([^(]*)/i}x(ue,"isPrimitive",ne),x(ue,"isObject",ie),x(se,"name","Slice"),k(se.prototype,"start",(function(){return this._start})),k(se.prototype,"stop",(function(){return this._stop})),k(se.prototype,"step",(function(){return this._step})),x(se.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),x(se.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}}));var fe=/^\s*function\s*([^(]*)/i;x(ce,"REGEXP",fe);var pe=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)};function de(e){return null!==e&&"object"==typeof e}function ge(e){var r,t,n,i;if(("Object"===(t=J(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=fe.exec(n.toString()))return r[1]}return de(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}function he(e){return ne(e)||oe(e)||ae(e)||function(e){return e instanceof se||"Slice"===ge(e)}(e)}function _e(){var e,r,t,n,i;if(e=arguments.length,!(this instanceof _e)){if(1===e)return new _e(arguments[0]);if(2===e)return new _e(arguments[0],arguments[1]);if(3===e)return new _e(arguments[0],arguments[1],arguments[2]);if(4===e)return new _e(arguments[0],arguments[1],arguments[2],arguments[3]);if(5===e)return new _e(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(t=[],i=0;i<e;i++)t.push(arguments[i]);return r=Object.create(_e.prototype),_e.apply(r,t)}for(this._data=[],i=0;i<e;i++){if(!he(n=arguments[i]))throw new TypeError(T("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",i,String(n)));this._data.push(void 0===n?null:n)}return this}function Se(e){switch(e.length){case 0:return new _e;case 1:return new _e(e[0]);case 2:return new _e(e[0],e[1]);case 3:return new _e(e[0],e[1],e[2]);case 4:return new _e(e[0],e[1],e[2],e[3]);case 5:return new _e(e[0],e[1],e[2],e[3],e[4]);case 6:return new _e(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new _e(e[0],e[1],e[2],e[3],e[4],e[5],e[6]);case 8:return new _e(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]);case 9:return new _e(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]);case 10:return new _e(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9]);default:return _e.apply(null,e)}}function Ee(e,r,t){return e>=r?t?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:new se(r,r,1):e<0&&(e=r+e)<0?t?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:new se(0,0,1):new se(e,e+1,1)}x(de,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!pe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(de)),x(_e,"name","MultiSlice"),k(_e.prototype,"ndims",(function(){return this._data.length})),k(_e.prototype,"data",(function(){return this._data.slice()})),x(_e.prototype,"toString",(function(){var e,r,t;for(e=this._data,r=[],t=0;t<e.length;t++)r.push(String(e[t]));return"MultiSlice("+r.join(",")+")"})),x(_e.prototype,"toJSON",(function(){var e,r,t,n;for(e=this._data,r={type:"MultiSlice",data:[]},n=0;n<e.length;n++)t=e[n],r.data.push(t&&"function"==typeof t.toJSON?t.toJSON():t);return r}));var ve=Math.ceil;function we(e){var r,t,n;return t=e.start,null===(n=e.stop)&&(n=-1),(r=e.step)>0&&t>=n||r<0&&t<=n?0:ve((n-t)/r)}function ye(e,r,t){var n,i,u;if(n=e.start,i=e.stop,null===(u=e.step)&&(u=1),null===n)n=u>0?0:r-1;else if(n<0){if((n=r+n)<0){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};n=0}}else if(n>=r){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};n=u<0?r-1:r}if(null===i)i=u>0?r:null;else if(i<0){if((i=r+i)<0)if(u>0){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};i=0}else{if(t&&i<-1)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};i=null}}else if(i>r){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};i=r}return new se(n,i,u)}function be(e,r,t){return null===e?new se(0,r,1):"number"==typeof e?Ee(e,r,t):ye(e,r,t)}function me(e,r,t){return e.replace(r,t)}var Ie=void 0!==String.prototype.trim,Oe=String.prototype.trim,Re=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/,Ne=Ie&&""===Oe.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===Oe.call("᠎")?function(e){return Oe.call(e)}:function(e){return me(e,Re,"$1")},Ue="Slice(",Te=3,Ce=/\s*,\s*/,Le=/^-?[0-9]+$/;function Fe(e){var r,t,n,i,u;if(e.substring(0,Ue.length)!==Ue)return null;if(")"!==e[n=e.length-1])return null;if((e=(e=Ne(e.substring(Ue.length,n))).split(Ce)).length!==Te)return null;for(r=[],u=0;u<Te;u++){if("null"===(i=e[u]))t=null;else{if(!Le.test(i))return null;t=parseInt(i,10)}r.push(t)}return new se(r[0],r[1],r[2])}var De="MultiSlice(",Ve=/\s*,\s*/,Be=/^-?[0-9]+$/;function je(e){var r,t,n,i,u;if(e.substring(0,De.length)!==De)return null;if(")"!==e[n=e.length-1])return null;if(1===(n=(e=(e=Ne(e.substring(De.length,n))).split(Ve)).length)&&""===e[0])return new _e;for(r=[],u=0;u<n;u++){if("S"===(i=e[u])[0]){if(null===(t=Fe(i=e.slice(u,u+3).join(","))))return null;u+=2}else if("null"===i)t=null;else{if(!Be.test(i))return null;t=parseInt(i,10)}r.push(t)}return Se(r)}var Ae=/(?:\s*-\s*)(?=\d+)(\d+)$/,xe=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;function ke(e,r,t,n){var i;if("end"===e)return r;if(i=e.match(Ae)){if((e=r-parseInt(i[1],10))<0){if(n)return-2;e=0}return e}return(i=e.match(xe))?(e=parseFloat(i[1]))<1?n?-2:-1:re(t&&r>0&&1!==e?(r-1)/e:r/e):-1}var $e=/\s*:\s*/,Me=/^[-+]?[0-9]+$/,Pe=/^end/;function Ge(e,r,t){var n,i,u;if((i=(n=Ne(e).split($e)).length)<2||i>3)return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};if(3===i)if(0===(u=n[2]).length)n[2]=1;else{if(!1===Me.test(u))return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};if(0===(u=parseInt(u,10)))return{code:"ERR_SLICE_INVALID_INCREMENT"};n[2]=u}else n.push(1);if(0===(u=n[0]).length)n[2]<0&&r>0?n[0]=r-1:n[0]=0;else if(Pe.test(u)){if((u=ke(u,r,n[2]<0,t))<0)return-2===u?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};n[2]<0&&u>=r&&(u-=1),n[0]=u}else{if(!Me.test(u))return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};if((u=parseInt(u,10))<0){if((u=r+u)<0){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};u=0}}else if(u>=r){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};u=n[2]<0?r-1:r}n[0]=u}if(0===(u=n[1]).length)n[2]<0?n[1]=null:n[1]=r;else if(Pe.test(u)){if((u=ke(u,r,n[2]<0,t))<0)return-2===u?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};n[1]=u}else{if(!Me.test(u))return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};if((u=parseInt(u,10))<0){if((u=r+u)<0)if(n[2]>0){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};u=0}else{if(t&&u<-1)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};u=null}}else if(u>r){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};u=r}n[1]=u}return 0===r?new se(0,0,n[2]):new se(n[0],n[1],n[2])}var Qe=/\s*,\s*/,Ze=/^[-+]?[0-9]+$/,ze={};return A(ze,"args2multislice",Se),A(ze,"int2slice",Ee),A(ze,"sliceLength",we),A(ze,"nonreducedDimensions",(function(e){var r,t,n;for(r=e.data,t=[],n=0;n<r.length;n++)"number"!=typeof r[n]&&t.push(n);return t})),A(ze,"normalizeMultiSlice",(function(e,r,t){var n,i,u,o;for(n=e.data,i=[],o=0;o<n.length;o++){if(void 0!==(u=be(n[o],r[o],t)).code)return u;i.push(u)}return Se(i)})),A(ze,"normalizeSlice",ye),A(ze,"reducedDimensions",(function(e){var r,t,n;for(r=e.data,t=[],n=0;n<r.length;n++)"number"==typeof r[n]&&t.push(n);return t})),A(ze,"sargs2multislice",(function(e){return e=me(e,/^,/,"null,"),e=me(e,/,$/,",null"),e=me(e,/,(?=,)/g,",null"),je("MultiSlice("+(e=me(e,/undefined/g,"null"))+")")})),A(ze,"seq2multislice",(function(e,r,t){var n,i,u,o,a,l,s,c,f,p;for(a=r.length,l=(n=Ne(e).split(Qe)).length,u=!1,i=[],f=0,c=0;c<l;c++)if("..."!==(s=n[c])){if(o=r[f],Ze.test(s)){if(s=parseInt(s,10),t)if(s<0){if(o+s<0)return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}else if(s>=o)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};f+=1}else{if((s=Ge(s,o,t)).code)return s;f+=1}i.push(s)}else{if(u)return{code:"ERR_SLICE_INVALID_ELLIPSIS"};for(u=!0,p=0;p<a-l+1;p++)i.push(new se(0,r[f],1)),f+=1}return i.length!==a?i.length<a?{code:"ERR_SLICE_INSUFFICIENT_DIMENSIONS"}:{code:"ERR_SLICE_TOO_MANY_DIMENSIONS"}:Se(i)})),A(ze,"seq2slice",Ge),A(ze,"sliceShape",(function(e){var r,t,n;for(r=e.data,t=[],n=0;n<r.length;n++)t.push(we(r[n]));return t})),A(ze,"slice2seq",(function(e){var r,t,n,i;return t=e.start,n=e.stop,i=e.step,r=null===t?"":String(t),null===n?null===i?r+":":""===r?"::"+i:r+"::"+i:(r+=":"+n,null===i?r:r+":"+i)})),A(ze,"str2multislice",je),A(ze,"str2slice",Fe),ze},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=r();
//# sourceMappingURL=index.js.map