(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{166:function(e,n,t){"use strict";t.r(n),t.d(n,"getCLS",function(){return y}),t.d(n,"getFCP",function(){return g}),t.d(n,"getFID",function(){return C}),t.d(n,"getLCP",function(){return k}),t.d(n,"getTTFB",function(){return D});var i,r,a,o,u=function(e,n){return{name:e,value:void 0===n?-1:n,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(e,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var t=new PerformanceObserver(function(e){return e.getEntries().map(n)});return t.observe({type:e,buffered:!0}),t}}catch(e){}},f=function(e,n){var t=function t(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),n&&(removeEventListener("visibilitychange",t,!0),removeEventListener("pagehide",t,!0)))};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},s=function(e){addEventListener("pageshow",function(n){n.persisted&&e(n)},!0)},m=function(e,n,t){var i;return function(r){n.value>=0&&(r||t)&&(n.delta=n.value-(i||0),(n.delta||void 0===i)&&(i=n.value,e(n)))}},d=-1,v=function(){return"hidden"===document.visibilityState?0:1/0},p=function(){f(function(e){var n=e.timeStamp;d=n},!0)},l=function(){return d<0&&(d=v(),p(),s(function(){setTimeout(function(){d=v(),p()},0)})),{get firstHiddenTime(){return d}}},g=function(e,n){var t,i=l(),r=u("FCP"),a=function(e){"first-contentful-paint"===e.name&&(f&&f.disconnect(),e.startTime<i.firstHiddenTime&&(r.value=e.startTime,r.entries.push(e),t(!0)))},o=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],f=o?null:c("paint",a);(o||f)&&(t=m(e,r,n),o&&a(o),s(function(i){r=u("FCP"),t=m(e,r,n),requestAnimationFrame(function(){requestAnimationFrame(function(){r.value=performance.now()-i.timeStamp,t(!0)})})}))},T=!1,h=-1,y=function(e,n){T||(g(function(e){h=e.value}),T=!0);var t,i=function(n){h>-1&&e(n)},r=u("CLS",0),a=0,o=[],d=function(e){if(!e.hadRecentInput){var n=o[0],i=o[o.length-1];a&&e.startTime-i.startTime<1e3&&e.startTime-n.startTime<5e3?(a+=e.value,o.push(e)):(a=e.value,o=[e]),a>r.value&&(r.value=a,r.entries=o,t())}},v=c("layout-shift",d);v&&(t=m(i,r,n),f(function(){v.takeRecords().map(d),t(!0)}),s(function(){a=0,h=-1,r=u("CLS",0),t=m(i,r,n)}))},w={passive:!0,capture:!0},E=new Date,L=function(e,n){i||(i=n,r=e,a=new Date,F(removeEventListener),S())},S=function(){if(r>=0&&r<a-E){var e={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};o.forEach(function(n){n(e)}),o=[]}},b=function(e){if(e.cancelable){var n=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,n){var t=function(){L(e,n),r()},i=function(){r()},r=function(){removeEventListener("pointerup",t,w),removeEventListener("pointercancel",i,w)};addEventListener("pointerup",t,w),addEventListener("pointercancel",i,w)}(n,e):L(n,e)}},F=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach(function(n){return e(n,b,w)})},C=function(e,n){var t,a=l(),d=u("FID"),v=function(e){e.startTime<a.firstHiddenTime&&(d.value=e.processingStart-e.startTime,d.entries.push(e),t(!0))},p=c("first-input",v);t=m(e,d,n),p&&f(function(){p.takeRecords().map(v),p.disconnect()},!0),p&&s(function(){var a;d=u("FID"),t=m(e,d,n),o=[],r=-1,i=null,F(addEventListener),a=v,o.push(a),S()})},P={},k=function(e,n){var t,i=l(),r=u("LCP"),a=function(e){var n=e.startTime;n<i.firstHiddenTime&&(r.value=n,r.entries.push(e),t())},o=c("largest-contentful-paint",a);if(o){t=m(e,r,n);var d=function(){P[r.id]||(o.takeRecords().map(a),o.disconnect(),P[r.id]=!0,t(!0))};["keydown","click"].forEach(function(e){addEventListener(e,d,{once:!0,capture:!0})}),f(d,!0),s(function(i){r=u("LCP"),t=m(e,r,n),requestAnimationFrame(function(){requestAnimationFrame(function(){r.value=performance.now()-i.timeStamp,P[r.id]=!0,t(!0)})})})}},D=function(e){var n,t=u("TTFB");n=function(){try{var n=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,n={entryType:"navigation",startTime:0};for(var t in e)"navigationStart"!==t&&"toJSON"!==t&&(n[t]=Math.max(e[t]-e.navigationStart,0));return n}();if(t.value=t.delta=n.responseStart,t.value<0||t.value>performance.now())return;t.entries=[n],e(t)}catch(e){}},"complete"===document.readyState?setTimeout(n,0):addEventListener("load",function(){return setTimeout(n,0)})}}}]);
//# sourceMappingURL=3.ac1c91d6.chunk.js.map