(self.webpackChunkc4_website=self.webpackChunkc4_website||[]).push([[678],{6106:function(e,t,n){var r,a;void 0===(a="function"==typeof(r=function(e,t,n){return function(e,t,n,r,a,o){function i(e){var t,n,r,a,o,i,l=e<0;if(e=Math.abs(e).toFixed(u.decimals),n=(t=(e+="").split("."))[0],r=t.length>1?u.options.decimal+t[1]:"",u.options.useGrouping){for(a="",o=0,i=n.length;o<i;++o)0!==o&&o%3==0&&(a=u.options.separator+a),a=n[i-o-1]+a;n=a}return u.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return u.options.numerals[+e]})),r=r.replace(/[0-9]/g,(function(e){return u.options.numerals[+e]}))),(l?"-":"")+u.options.prefix+n+r+u.options.suffix}function l(e,t,n,r){return n*(1-Math.pow(2,-10*e/r))*1024/1023+t}function s(e){return"number"==typeof e&&!isNaN(e)}var u=this;if(u.version=function(){return"1.9.3"},u.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:l,formattingFn:i,prefix:"",suffix:"",numerals:[]},o&&"object"==typeof o)for(var c in u.options)o.hasOwnProperty(c)&&null!==o[c]&&(u.options[c]=o[c]);""===u.options.separator?u.options.useGrouping=!1:u.options.separator=""+u.options.separator;for(var f=0,m=["webkit","moz","ms","o"],d=0;d<m.length&&!window.requestAnimationFrame;++d)window.requestAnimationFrame=window[m[d]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[m[d]+"CancelAnimationFrame"]||window[m[d]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),r=Math.max(0,16-(n-f)),a=window.setTimeout((function(){e(n+r)}),r);return f=n+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),u.initialize=function(){return!(!u.initialized&&(u.error="",u.d="string"==typeof e?document.getElementById(e):e,u.d?(u.startVal=Number(t),u.endVal=Number(n),s(u.startVal)&&s(u.endVal)?(u.decimals=Math.max(0,r||0),u.dec=Math.pow(10,u.decimals),u.duration=1e3*Number(a)||2e3,u.countDown=u.startVal>u.endVal,u.frameVal=u.startVal,u.initialized=!0,0):(u.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",1)):(u.error="[CountUp] target is null or undefined",1)))},u.printValue=function(e){var t=u.options.formattingFn(e);"INPUT"===u.d.tagName?this.d.value=t:"text"===u.d.tagName||"tspan"===u.d.tagName?this.d.textContent=t:this.d.innerHTML=t},u.count=function(e){u.startTime||(u.startTime=e),u.timestamp=e;var t=e-u.startTime;u.remaining=u.duration-t,u.options.useEasing?u.countDown?u.frameVal=u.startVal-u.options.easingFn(t,0,u.startVal-u.endVal,u.duration):u.frameVal=u.options.easingFn(t,u.startVal,u.endVal-u.startVal,u.duration):u.countDown?u.frameVal=u.startVal-(u.startVal-u.endVal)*(t/u.duration):u.frameVal=u.startVal+(u.endVal-u.startVal)*(t/u.duration),u.countDown?u.frameVal=u.frameVal<u.endVal?u.endVal:u.frameVal:u.frameVal=u.frameVal>u.endVal?u.endVal:u.frameVal,u.frameVal=Math.round(u.frameVal*u.dec)/u.dec,u.printValue(u.frameVal),t<u.duration?u.rAF=requestAnimationFrame(u.count):u.callback&&u.callback()},u.start=function(e){u.initialize()&&(u.callback=e,u.rAF=requestAnimationFrame(u.count))},u.pauseResume=function(){u.paused?(u.paused=!1,delete u.startTime,u.duration=u.remaining,u.startVal=u.frameVal,requestAnimationFrame(u.count)):(u.paused=!0,cancelAnimationFrame(u.rAF))},u.reset=function(){u.paused=!1,delete u.startTime,u.initialized=!1,u.initialize()&&(cancelAnimationFrame(u.rAF),u.printValue(u.startVal))},u.update=function(e){if(u.initialize()){if(!s(e=Number(e)))return void(u.error="[CountUp] update() - new endVal is not a number: "+e);u.error="",e!==u.frameVal&&(cancelAnimationFrame(u.rAF),u.paused=!1,delete u.startTime,u.startVal=u.frameVal,u.endVal=e,u.countDown=u.startVal>u.endVal,u.rAF=requestAnimationFrame(u.count))}},u.initialize()&&u.printValue(u.startVal)}})?r.call(t,n,t,e):r)||(e.exports=a)},2158:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=r(n(5697)),o=n(7294),i=r(o),l=r(n(2473)),s=r(n(6106));function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?h(e):t}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=function(e,t){var n=t.decimal,r=t.decimals,a=t.duration,o=t.easingFn,i=t.end,l=t.formattingFn,u=t.prefix,c=t.separator,f=t.start,m=t.suffix,d=t.useEasing;return new s(e,f,i,r,a,{decimal:n,easingFn:o,formattingFn:l,separator:c,prefix:u,suffix:m,useEasing:d,useGrouping:!!c})},v=function(e){function t(){var e,n;u(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return f(h(n=y(this,(e=d(t)).call.apply(e,[this].concat(a)))),"createInstance",(function(){return"function"==typeof n.props.children&&l(n.containerRef.current&&(n.containerRef.current instanceof HTMLElement||n.containerRef.current instanceof SVGTextElement||n.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),g(n.containerRef.current,n.props)})),f(h(n),"pauseResume",(function(){var e=h(n),t=e.reset,r=e.restart,a=e.update,o=n.props.onPauseResume;n.instance.pauseResume(),o({reset:t,start:r,update:a})})),f(h(n),"reset",(function(){var e=h(n),t=e.pauseResume,r=e.restart,a=e.update,o=n.props.onReset;n.instance.reset(),o({pauseResume:t,start:r,update:a})})),f(h(n),"restart",(function(){n.reset(),n.start()})),f(h(n),"start",(function(){var e=h(n),t=e.pauseResume,r=e.reset,a=e.restart,o=e.update,i=n.props,l=i.delay,s=i.onEnd,u=i.onStart,c=function(){return n.instance.start((function(){return s({pauseResume:t,reset:r,start:a,update:o})}))};l>0?n.timeoutId=setTimeout(c,1e3*l):c(),u({pauseResume:t,reset:r,update:o})})),f(h(n),"update",(function(e){var t=h(n),r=t.pauseResume,a=t.reset,o=t.restart,i=n.props.onUpdate;n.instance.update(e),i({pauseResume:r,reset:a,start:o})})),f(h(n),"containerRef",i.createRef()),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"==typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.end,r=t.start,a=t.suffix,o=t.prefix,i=t.redraw,l=t.duration,s=t.separator,u=t.decimals,c=t.decimal;return l!==e.duration||n!==e.end||r!==e.start||a!==e.suffix||o!==e.prefix||s!==e.separator||u!==e.decimals||c!==e.decimal||i}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.end,r=t.start,a=t.suffix,o=t.prefix,i=t.duration,l=t.separator,s=t.decimals,u=t.decimal,c=t.preserveValue;i===e.duration&&r===e.start&&a===e.suffix&&o===e.prefix&&l===e.separator&&s===e.decimals&&u===e.decimal||(this.instance.reset(),this.instance=this.createInstance(),this.start()),n!==e.end&&(c||this.instance.reset(),this.instance.update(n))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.style,a=this.containerRef,o=this.pauseResume,l=this.reset,s=this.restart,u=this.update;return"function"==typeof t?t({countUpRef:a,pauseResume:o,reset:l,start:s,update:u}):i.createElement("span",{className:n,ref:a,style:r})}}])&&c(n.prototype,r),a&&c(n,a),t}(o.Component);f(v,"propTypes",{decimal:a.string,decimals:a.number,delay:a.number,easingFn:a.func,end:a.number.isRequired,formattingFn:a.func,onEnd:a.func,onStart:a.func,prefix:a.string,redraw:a.bool,separator:a.string,start:a.number,startOnMount:a.bool,suffix:a.string,style:a.object,useEasing:a.bool,preserveValue:a.bool}),f(v,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var b={innerHTML:null};t.$i=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},v.defaultProps,{},e),n=t.start,r=t.formattingFn,a=x(o.useState("function"==typeof r?r(n):n),2),i=a[0],l=a[1],s=o.useRef(null),u=function(){var e=s.current;if(null!==e)return e;var n=function(){var e=g(b,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);l(e)},e}();return s.current=n,n},c=function(){var e=t.onReset;u().reset(),e({pauseResume:p,start:d,update:h})},d=function e(){var n=t.onStart,r=t.onEnd;u().reset(),u().start((function(){r({pauseResume:p,reset:c,start:e,update:h})})),n({pauseResume:p,reset:c,update:h})},p=function(){var e=t.onPauseResume;u().pauseResume(),e({reset:c,start:d,update:h})},h=function(e){var n=t.onUpdate;u().update(e),n({pauseResume:p,reset:c,start:d})};return o.useEffect((function(){var e=t.delay,n=t.onStart,r=t.onEnd;if(t.startOnMount)var a=setTimeout((function(){n({pauseResume:p,reset:c,update:h}),u().start((function(){clearTimeout(a),r({pauseResume:p,reset:c,start:d,update:h})}))}),1e3*e);return c}),[]),{countUp:i,start:d,pauseResume:p,reset:c,update:h}}},9685:function(e,t,n){"use strict";var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||f(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d,p,h,y,x=(d=new Map,{on:function(e,t){d.has(e)||d.set(e,[]),d.get(e).push(t)},off:function(e){d.delete(e)},emit:function(e,t){d.has(e)&&d.get(e).forEach((function(e){return e(t)}))}}),g=function(e){return"string"==typeof e||e instanceof String},v=function(e){return e[e.length-1]},b="config",w="show_modal",E="hide_modal",C="show_modal",O="hide_modal",V="change_modal",N="hide_all",R=function(e,t){switch(e){case b:if(!function(e){return Array.isArray(e)}(t))throw new Error("Reoverlay: Config data is probably not a valid array. Make sure you pass a valid array to the config method");t.forEach((function(e){if(!e.name||!e.component)throw new Error("Reoverlay: Make sure your config array contains objects with a 'name' and 'component' property.")}));var n=t.map((function(e){return e.name}));if((l=n).some((function(e){return l.filter((function(t){return e===t})).length>1})))throw new Error("Reoverlay: Make sure your config array data is unique.");return!0;case w:var r=function(){throw new Error("Reoverlay: Method 'showModal' has one required argument. Please pass on a React Component, or a pre-configuered identifier string.")};if(t||r(),g(t))return"string";if((o=t)&&"[object Function]"==={}.toString.call(o)||a.isValidElement(t))return"component";r();break;case E:if(g(t))return!0;throw new Error("Reoverlay: Method 'hideModal' has one optional argument. Expected a 'string', got a ".concat(i(t)));default:return!1}var o,l},M=1,j=function(){return(M=(9301*M+49297)%233280)/233280},A=function(e){M=e},F="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function S(){y=!1}function k(e){if(e){if(e!==p){if(e.length!==F.length)throw new Error("Custom alphabet for shortid must be "+F.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,n){return t!==n.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+F.length+" unique characters. These characters were not unique: "+t.join(", "));p=e,S()}}else p!==F&&(p=F,S())}function T(){return y||(y=function(){p||k(F);for(var e,t=p.split(""),n=[],r=j();t.length>0;)r=j(),e=Math.floor(r*t.length),n.push(t.splice(e,1)[0]);return n.join("")}())}var P,D,_={get:function(){return p||F},characters:function(e){return k(e),p},seed:function(e){A(e),h!==e&&(S(),h=e)},lookup:function(e){return T()[e]},shuffled:T},q="object"==typeof window&&(window.crypto||window.msCrypto),I=q&&q.getRandomValues?function(e){return q.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(256*Math.random()));return t},U=function(e,t,n){for(var r=(2<<Math.log(t.length-1)/Math.LN2)-1,a=-~(1.6*r*n/t.length),o="";;)for(var i=e(a),l=a;l--;)if((o+=t[i[l]&r]||"").length===+n)return o},G=function(e){for(var t,n=0,r="";!t;)r+=U(I,_.get(),1),t=e<Math.pow(16,n+1),n++;return r},z=function(e){return!(!e||"string"!=typeof e||e.length<6||new RegExp("[^"+_.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e))},B=function(e,t,n){return function(e){var t=0;function n(){return function(e){var t="",n=Math.floor(.001*(Date.now()-1567752802062));return n===D?P++:(P=0,D=n),t+=G(7),t+=G(e),P>0&&(t+=G(P)),t+G(n)}(t)}e.exports=n,e.exports.generate=n,e.exports.seed=function(t){return _.seed(t),e.exports},e.exports.worker=function(n){return t=n,e.exports},e.exports.characters=function(e){return void 0!==e&&_.characters(e),_.shuffled()},e.exports.isValid=z}(n={path:void 0,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&n.path)}},n.exports),n.exports}(),W={modals:new Map,snappshots:new Map,config:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];R(b,t),t.forEach((function(t){e.modals.set(t.name,t.component)}))},showModal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=R(w,e);if("string"===n){var r=e,a=this.modals.has(r);if(!a)throw new Error("Reoverlay: Modal not found. You're probably trying to access a pre-configured modal which does not exist. Make sure you already \n          passed \"".concat(r,'" to Reoverlay.config().'));var o=this.modals.get(r);this.applyModal({component:o,props:t,modalKey:r,type:C})}else this.applyModal({component:e,props:t,modalKey:B.generate(),type:C})},getSnappshotsArray:function(){var e,t=[],n=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=f(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a,o=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){i=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(i)throw a}}}}(this.snappshots.entries());try{for(n.s();!(e=n.n()).done;){var r=c(e.value,2),a=r[0],o=r[1];t.push(u({modalKey:a},o))}}catch(e){n.e(e)}finally{n.f()}return t},hideModal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(e){R(E,e);var t=e,n=this.snappshots.has(t);if(!n)throw new Error("Reoverlay: Snappshot not found. You're probably trying to hide a modal that does not exist.");var r=this.snappshots.get(t);this.applyModal(u(u({},r),{},{modalKey:t,type:O}))}else{var a=this.getSnappshotsArray(),o=v(a)||null;o?this.applyModal(u(u({},o),{},{type:O})):console.error("Reoverlay: There's no active modal to be hidden.")}},hideAll:function(){this.applyModal({type:N})},applyModal:function(e){var t=e.component,n=e.props,r=e.modalKey;switch(e.type){case C:this.snappshots.set(r,{component:t,props:n});break;case N:this.snappshots.clear();break;default:this.snappshots.delete(r)}var a=this.getSnappshotsArray();x.emit(V,a)}},H=function(e){var t=e.children,n=e.wrapperClassName,r=e.contentContainerClassName,i=e.animation,l=e.onClose,s=a.useRef(null);return o.createElement("div",{ref:s,role:"dialog",className:"reOverlay__modalWrapper -ro-".concat(i," ").concat(n),onClick:function(e){e.target===s.current&&function(e){l(e)}(e)}},o.createElement("div",{className:"reOverlay__modalContainer ".concat(r)},t))};H.defaultProps={children:null,wrapperClassName:"",contentContainerClassName:"",animation:"fade",onClose:function(){return W.hideModal()}},t.F0=function(){var e=c(a.useState([]),2),t=e[0],n=e[1];return a.useEffect((function(){return x.on(V,(function(e){n(e)})),function(){x.off()}}),[t]),o.createElement("div",{className:"reOverlay"},t.map((function(e){var t=e.modalKey,n=e.component,r=e.props,i=n;return o.createElement(a.Fragment,{key:"id-".concat(t)},o.createElement(i,r))})))},t.AB=H,t.cc=W},9427:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(7294),a=n(5617),o=n(5444),i=n(2158);function l(e){var t=(0,i.$i)({start:0,end:e.countEnd,delay:1e8,duration:e.countDuration}),n=t.countUp,a=t.start;return(0,r.useEffect)((function(){document.addEventListener("sal:in",(function(e){e.detail;setTimeout((function(){a()}),1200)}))})),r.createElement("p",{className:"text-2xl md:text-3xl font-display"},r.createElement("span",{className:"text-CGold font-bold"},e.prefix,n)," ",e.unit)}function s(){var e=(0,o.useStaticQuery)("3846993280");return r.createElement("div",{"data-sal":"slide-left","data-sal-delay":"300","data-sal-duration":"800",className:"flex flex-col align-self-center w-1/4 align-middle pl-12 my-auto"},r.createElement(l,{countEnd:e.site.siteMetadata.numberOfChapters,countDuration:3,countDelay:1,prefix:"",unit:"Chapters"}),r.createElement(l,{countEnd:e.site.siteMetadata.numberOfMembers,countDuration:3,countDelay:1,prefix:"",unit:"Members"}),r.createElement(l,{countEnd:e.site.siteMetadata.numberOfYears,countDuration:3,countDelay:1,prefix:"",unit:"Years"}),r.createElement(l,{countEnd:e.site.siteMetadata.numberOfDollars,countDuration:3,countDelay:1,prefix:"$",unit:"Raised"}))}var u=n(2910),c=n(9685),f=function(){return r.createElement(c.AB,null,r.createElement("div",{className:"w-3/4 h-3/4"},r.createElement("p",null,"Hi  dfggfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),r.createElement("button",{onClick:function(){c.cc.hideModal()}},"No")))},m=n(3751);function d(){var e=(0,o.useStaticQuery)("294938491");return r.createElement("div",{className:"container main-container max-w-full min-h-full pt-0 mx-auto font-serif debug-screens"},r.createElement(m.Z,{title:"The C4 Organization"}),r.createElement(a.Z,null),r.createElement("div",{className:"page first-page cover flex-col justify-center"},r.createElement("div",{className:"align-self-center align-middle w-128 text-center text-4xl font-serif"},"Combating Childhood Cancer Club"),r.createElement("div",{className:"align-self-center align-middle w-128 text-center pt-3 text-2xl font-display","data-sal":"slide-up","data-sal-delay":"300","data-sal-duration":"500"},"Established in 2018")),r.createElement("div",{className:"page flex-col md:flex-row justify-center"},r.createElement("div",{className:"flex flex-col w-3/4 md:w-1/2 xl:w-1/4 md:mr-8 text-2xl font-serif"},r.createElement("p",{className:"text-center md text-xl md:text-2xl"},"Hi! We're glad to see that you've found our website. We're the Combating Childhood Cancer Club, but call us C4."),r.createElement("p",{className:"text-center text-xl md:text-2xl"},"Our mission is to support young cancer patients and boost their morale through their battle against cancer."),r.createElement("p",{className:"text-center text-xl md:text-2xl"},"Scroll down to learn a bit more about the club and what we do, or visit one of our other pages to see what they have in store.")),r.createElement(s,null)),r.createElement("div",{className:"page flex-col md:flex-row justify-around "},r.createElement("div",{className:"md:ml-5 md:mr-4 mb-2 md:w-1/4 w-full pt-12 flex-shrink-0 align-middle"},r.createElement("div",{className:"font-display text-2xl md:text-3xl text-CGold py-2 mb-4 mx-auto rounded-lg text-center"},r.createElement("p",{className:"font-display font-medium text-2xl md:text-3xl px-2"},"Our Values and Goals"))),r.createElement("div",{className:"md:mr-5 md:ml-4 mb-2 md:w-2/5 min-w-1/3 font-serif text-xl"},r.createElement("div",{className:"flex flex-col"},r.createElement("p",{className:"font-display text-CBlue pb-4 font-medium text-2xl md:text-3xl"},"Fighting against cancer can be hard, physically and emotionally."),r.createElement("p",{className:"pb-2"},"The Combating Childhood Cancer Club aims to increase positivity among children battling cancer. We value community efforts and unity in order to help everyone thrive."),r.createElement("p",null,"We also value commitment and positive change as they go hand in hand. We show patients that we love them and they shouldn’t give up!")))),r.createElement("div",{className:"page flex-col md:flex-row justify-around "},r.createElement("div",{className:"md:mr-5 md:ml-4 mb-16 md:w-2/5 min-w-1/3 pt-2 font-serif text-xl"},r.createElement("div",{className:"flex flex-col"},r.createElement("p",{className:"font-display text-CBlue pb-4 font-medium text-2xl md:text-3xl"},"Currently, C4 has over ",e.site.siteMetadata.numberOfMembers," members across ",e.site.siteMetadata.numberOfChapters," chapters."),r.createElement("p",{className:"pb-2"},"It's been amazing to see C4 grow from the club it started out as at Poolesville High School in Poolesville, Maryland."),r.createElement("p",{className:""},"Over the past ",e.site.siteMetadata.numberOfYears," years, we've held all sorts of fundraisers. We've sold candy, held coin competitions, hosted game nights - you name it. We've also spread childhood cancer awareness through informational posts."))),r.createElement("div",{className:"md:ml-5 md:mr-4 mb-2 md:w-1/4 w-1/3 pt-12 flex-shrink-0 align-middle order-first md:order-last"},r.createElement("div",{className:"font-display text-2xl md:text-3xl text-CGold py-2 mb-4 mx-auto rounded-lg text-center"},r.createElement("p",{className:"font-display font-medium text-2xl md:text-3xl px-2"},"History")))),r.createElement("div",{className:"page flex-col md:flex-row justify-around "},r.createElement("div",{className:"md:ml-5 md:mr-4 mb-2 md:w-1/4 w-full pt-12 flex-shrink-0 align-middle"},r.createElement("div",{className:"font-display text-2xl md:text-3xl text-CGold py-2 mb-4 mx-auto rounded-lg text-center"},r.createElement("p",{className:"font-display font-medium text-2xl md:text-3xl px-2"},"The Board"))),r.createElement("div",{className:"md:mr-5 md:ml-4 mb-2 md:w-2/5 min-w-1/3 font-serif text-xl"},r.createElement(c.F0,null),r.createElement("div",{className:"flex flex-col max-w-full"},r.createElement("p",{className:"font-display text-CBlue pb-4 font-medium text-2xl md:text-3xl"},"The Board oversees all of C4's activities. Click the names to learn a bit more about them!"),r.createElement("div",{className:"flex flex-row flex-wrap max-w-full"},r.createElement("div",{className:"w-1/3 flex-col text-xl md:text-2xl text-CGold bg-CBlue py-2 mb-4 mx-3 rounded-lg text-center"},r.createElement("p",null,"Chairwoman"),r.createElement("p",null,"Roma Dhingra")),r.createElement("div",{className:"w-1/3 flex-col text-xl md:text-2xl text-CGold bg-CBlue py-2 mb-4 mx-3 rounded-lg text-center"},r.createElement("p",null,"Vice Chairwoman"),r.createElement("p",null,"Liz Attumalil")),r.createElement("div",{className:"w-1/3 flex-col text-xl md:text-2xl text-CGold bg-CBlue py-2 mb-4 mx-3 rounded-lg text-center"},r.createElement("p",null,"Secretary"),r.createElement("p",null,"Temi Olarinde")),r.createElement("div",{className:"w-1/3 flex-col text-xl md:text-2xl text-CGold bg-CBlue py-2 mb-4 mx-3 rounded-lg text-center",onClick:function(){return c.cc.showModal(f)}},r.createElement("p",null,"Treasurer and Head of Website"),r.createElement("p",null,"Kandasamy Chokkalingam")))))),r.createElement(u.Z,null))}},2473:function(e){"use strict";var t=function(){};e.exports=t}}]);
//# sourceMappingURL=component---src-pages-index-js-23b79b2e10827ae25978.js.map