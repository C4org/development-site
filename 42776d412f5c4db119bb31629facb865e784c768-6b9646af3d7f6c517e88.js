(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2W6z":function(e,t,n){"use strict";var r=function(){};e.exports=r},"8rdi":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),a=n.n(r),i=n("Wbzz"),o=n("PHNs"),s=n.n(o);function u(){var e=Object(i.useStaticQuery)("3846993280");return a.a.createElement("div",{className:"flex flex-col align-self-center align-middle"},a.a.createElement("div",{className:"flex flex-row",id:"countUp1"},a.a.createElement("p",null,a.a.createElement(s.a,{end:e.site.siteMetadata.numberOfChapters,duration:3,delay:1})," ","Chapters")),a.a.createElement("div",{className:"flex flex-row",id:"countUp2"},a.a.createElement("p",null,a.a.createElement(s.a,{end:e.site.siteMetadata.numberOfMembers,duration:3,delay:1})," Members")),a.a.createElement("div",{className:"flex flex-row",id:"countUp3"},a.a.createElement("p",null,a.a.createElement(s.a,{end:e.site.siteMetadata.numberOfYears,duration:3,delay:1})," Years")),a.a.createElement("div",{className:"flex flex-row",id:"countUp4"},a.a.createElement("p",null,a.a.createElement(s.a,{end:e.site.siteMetadata.numberOfDollars,delay:1,prefix:"$"})," Raised")))}},GiOn:function(e,t,n){var r,a;void 0===(a="function"==typeof(r=function(e,t,n){return function(e,t,n,r,a,i){function o(e){return"number"==typeof e&&!isNaN(e)}var s=this;if(s.version=function(){return"1.9.3"},s.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(e,t,n,r){return n*(1-Math.pow(2,-10*e/r))*1024/1023+t},formattingFn:function(e){var t,n,r,a,i,o,u=e<0;if(e=Math.abs(e).toFixed(s.decimals),n=(t=(e+="").split("."))[0],r=t.length>1?s.options.decimal+t[1]:"",s.options.useGrouping){for(a="",i=0,o=n.length;i<o;++i)0!==i&&i%3==0&&(a=s.options.separator+a),a=n[o-i-1]+a;n=a}return s.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return s.options.numerals[+e]})),r=r.replace(/[0-9]/g,(function(e){return s.options.numerals[+e]}))),(u?"-":"")+s.options.prefix+n+r+s.options.suffix},prefix:"",suffix:"",numerals:[]},i&&"object"==typeof i)for(var u in s.options)i.hasOwnProperty(u)&&null!==i[u]&&(s.options[u]=i[u]);""===s.options.separator?s.options.useGrouping=!1:s.options.separator=""+s.options.separator;for(var c=0,l=["webkit","moz","ms","o"],f=0;f<l.length&&!window.requestAnimationFrame;++f)window.requestAnimationFrame=window[l[f]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[l[f]+"CancelAnimationFrame"]||window[l[f]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),r=Math.max(0,16-(n-c)),a=window.setTimeout((function(){e(n+r)}),r);return c=n+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),s.initialize=function(){return!(!s.initialized&&(s.error="",s.d="string"==typeof e?document.getElementById(e):e,s.d?(s.startVal=Number(t),s.endVal=Number(n),o(s.startVal)&&o(s.endVal)?(s.decimals=Math.max(0,r||0),s.dec=Math.pow(10,s.decimals),s.duration=1e3*Number(a)||2e3,s.countDown=s.startVal>s.endVal,s.frameVal=s.startVal,s.initialized=!0,0):(s.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",1)):(s.error="[CountUp] target is null or undefined",1)))},s.printValue=function(e){var t=s.options.formattingFn(e);"INPUT"===s.d.tagName?this.d.value=t:"text"===s.d.tagName||"tspan"===s.d.tagName?this.d.textContent=t:this.d.innerHTML=t},s.count=function(e){s.startTime||(s.startTime=e),s.timestamp=e;var t=e-s.startTime;s.remaining=s.duration-t,s.options.useEasing?s.countDown?s.frameVal=s.startVal-s.options.easingFn(t,0,s.startVal-s.endVal,s.duration):s.frameVal=s.options.easingFn(t,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(t/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(t/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Math.round(s.frameVal*s.dec)/s.dec,s.printValue(s.frameVal),t<s.duration?s.rAF=requestAnimationFrame(s.count):s.callback&&s.callback()},s.start=function(e){s.initialize()&&(s.callback=e,s.rAF=requestAnimationFrame(s.count))},s.pauseResume=function(){s.paused?(s.paused=!1,delete s.startTime,s.duration=s.remaining,s.startVal=s.frameVal,requestAnimationFrame(s.count)):(s.paused=!0,cancelAnimationFrame(s.rAF))},s.reset=function(){s.paused=!1,delete s.startTime,s.initialized=!1,s.initialize()&&(cancelAnimationFrame(s.rAF),s.printValue(s.startVal))},s.update=function(e){if(s.initialize()){if(!o(e=Number(e)))return void(s.error="[CountUp] update() - new endVal is not a number: "+e);s.error="",e!==s.frameVal&&(cancelAnimationFrame(s.rAF),s.paused=!1,delete s.startTime,s.startVal=s.frameVal,s.endVal=e,s.countDown=s.startVal>s.endVal,s.rAF=requestAnimationFrame(s.count))}},s.initialize()&&s.printValue(s.startVal)}})?r.call(t,n,t,e):r)||(e.exports=a)},PHNs:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("17x9")),i=n("q1tI"),o=r(i),s=r(n("2W6z")),u=r(n("GiOn"));function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?b(e):t}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){a=!0,i=u}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h=function(e,t){var n=t.decimal,r=t.decimals,a=t.duration,i=t.easingFn,o=t.end,s=t.formattingFn,c=t.prefix,l=t.separator,f=t.start,p=t.suffix,d=t.useEasing;return new u(e,f,o,r,a,{decimal:n,easingFn:i,formattingFn:s,separator:l,prefix:c,suffix:p,useEasing:d,useGrouping:!!l})},w=function(e){function t(){var e,n;c(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return f(b(n=v(this,(e=d(t)).call.apply(e,[this].concat(a)))),"createInstance",(function(){return"function"==typeof n.props.children&&s(n.containerRef.current&&(n.containerRef.current instanceof HTMLElement||n.containerRef.current instanceof SVGTextElement||n.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),h(n.containerRef.current,n.props)})),f(b(n),"pauseResume",(function(){var e=b(n),t=e.reset,r=e.restart,a=e.update,i=n.props.onPauseResume;n.instance.pauseResume(),i({reset:t,start:r,update:a})})),f(b(n),"reset",(function(){var e=b(n),t=e.pauseResume,r=e.restart,a=e.update,i=n.props.onReset;n.instance.reset(),i({pauseResume:t,start:r,update:a})})),f(b(n),"restart",(function(){n.reset(),n.start()})),f(b(n),"start",(function(){var e=b(n),t=e.pauseResume,r=e.reset,a=e.restart,i=e.update,o=n.props,s=o.delay,u=o.onEnd,c=o.onStart,l=function(){return n.instance.start((function(){return u({pauseResume:t,reset:r,start:a,update:i})}))};s>0?n.timeoutId=setTimeout(l,1e3*s):l(),c({pauseResume:t,reset:r,update:i})})),f(b(n),"update",(function(e){var t=b(n),r=t.pauseResume,a=t.reset,i=t.restart,o=n.props.onUpdate;n.instance.update(e),o({pauseResume:r,reset:a,start:i})})),f(b(n),"containerRef",o.createRef()),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"==typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.end,r=t.start,a=t.suffix,i=t.prefix,o=t.redraw,s=t.duration,u=t.separator,c=t.decimals,l=t.decimal;return s!==e.duration||n!==e.end||r!==e.start||a!==e.suffix||i!==e.prefix||u!==e.separator||c!==e.decimals||l!==e.decimal||o}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.end,r=t.start,a=t.suffix,i=t.prefix,o=t.duration,s=t.separator,u=t.decimals,c=t.decimal,l=t.preserveValue;o===e.duration&&r===e.start&&a===e.suffix&&i===e.prefix&&s===e.separator&&u===e.decimals&&c===e.decimal||(this.instance.reset(),this.instance=this.createInstance(),this.start()),n!==e.end&&(l||this.instance.reset(),this.instance.update(n))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.style,a=this.containerRef,i=this.pauseResume,s=this.reset,u=this.restart,c=this.update;return"function"==typeof t?t({countUpRef:a,pauseResume:i,reset:s,start:u,update:c}):o.createElement("span",{className:n,ref:a,style:r})}}])&&l(n.prototype,r),a&&l(n,a),t}(i.Component);f(w,"propTypes",{decimal:a.string,decimals:a.number,delay:a.number,easingFn:a.func,end:a.number.isRequired,formattingFn:a.func,onEnd:a.func,onStart:a.func,prefix:a.string,redraw:a.bool,separator:a.string,start:a.number,startOnMount:a.bool,suffix:a.string,style:a.object,useEasing:a.bool,preserveValue:a.bool}),f(w,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var g={innerHTML:null};t.default=w,t.useCountUp=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},w.defaultProps,{},e),n=t.start,r=t.formattingFn,a=y(i.useState("function"==typeof r?r(n):n),2),o=a[0],s=a[1],u=i.useRef(null),c=function(){var e=u.current;if(null!==e)return e;var n=function(){var e=h(g,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);s(e)},e}();return u.current=n,n},l=function(){var e=t.onReset;c().reset(),e({pauseResume:m,start:d,update:b})},d=function e(){var n=t.onStart,r=t.onEnd;c().reset(),c().start((function(){r({pauseResume:m,reset:l,start:e,update:b})})),n({pauseResume:m,reset:l,update:b})},m=function(){var e=t.onPauseResume;c().pauseResume(),e({reset:l,start:d,update:b})},b=function(e){var n=t.onUpdate;c().update(e),n({pauseResume:m,reset:l,start:d})};return i.useEffect((function(){var e=t.delay,n=t.onStart,r=t.onEnd;if(t.startOnMount)var a=setTimeout((function(){n({pauseResume:m,reset:l,update:b}),c().start((function(){clearTimeout(a),r({pauseResume:m,reset:l,start:d,update:b})}))}),1e3*e);return l}),[]),{countUp:o,start:d,pauseResume:m,reset:l,update:b}}}}]);
//# sourceMappingURL=42776d412f5c4db119bb31629facb865e784c768-6b9646af3d7f6c517e88.js.map