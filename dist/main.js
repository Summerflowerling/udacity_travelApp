var Client=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"getLocation",(function(){return c})),n.d(t,"handleSubmit",(function(){return a})),n.d(t,"getDays",(function(){return s})),n.d(t,"updateUi",(function(){return d}));const o=document.getElementById("test");let r,u,l,i;function c(e){fetch("http://localhost:8080/getGeoname",{method:"POST",credentials:"same-origin",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({location:""+e})}).then(e=>e.json()).then(e=>{console.log(e),u=e.geonames[0].lng,r=e.geonames[0].lat,l=e.geonames[0].countryName,console.log("lng here",u),console.log("lat here",r),console.log("country here",l)})}function a(e){e.preventDefault();let t=document.getElementById("destination").value;o.innerHTML=`<p>${t}</p>`,console.log(t),c(t),Client.getDays(4,1,2021)}let f=new Date;function s(e,t,n){i=new Date(`${e}/${t}/${n}`);let o=(i.getTime()-f.getTime())/864e5;console.log(Math.round(o))}function d(){console.log("updated later")}n(0),n(1),n(2);alert("it works")}]);