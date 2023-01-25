(()=>{var e={481:e=>{e.exports=function e(t,n,r){function i(a,o){if(!n[a]){if(!t[a]){if(s)return s(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[a]={exports:{}};t[a][0].call(l.exports,(function(e){return i(t[a][1][e]||e)}),l,l.exports,e,t,n,r)}return n[a].exports}for(var s=void 0,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,t,n){"use strict";var r=e("fs"),i=e("path"),s=e("./utils"),a=!1,o=e("../package.json").version,c="locals",l=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],d=l.concat("cache"),u=/^\uFEFF/,h=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/;function m(e,t){var i;if(t.some((function(t){return i=n.resolveInclude(e,t,!0),r.existsSync(i)})))return i}function p(e,t){var r,i=e.filename,s=arguments.length>1;if(e.cache){if(!i)throw new Error("cache option requires a filename");if(r=n.cache.get(i))return r;s||(t=v(i).toString().replace(u,""))}else if(!s){if(!i)throw new Error("Internal EJS error: no file name or template provided");t=v(i).toString().replace(u,"")}return r=n.compile(t,e),e.cache&&n.cache.set(i,r),r}function f(e,t,r){var i;if(!r){if("function"==typeof n.promiseImpl)return new n.promiseImpl((function(n,r){try{n(i=p(e)(t))}catch(e){r(e)}}));throw new Error("Please provide a callback function")}try{i=p(e)(t)}catch(e){return r(e)}r(null,i)}function v(e){return n.fileLoader(e)}function g(e,t){var i=s.shallowCopy(s.createNullProtoObjWherePossible(),t);if(i.filename=function(e,t){var i,s,a=t.views,o=/^[A-Za-z]+:\\|^\//.exec(e);if(o&&o.length)e=e.replace(/^\/*/,""),i=Array.isArray(t.root)?m(e,t.root):n.resolveInclude(e,t.root||"/",!0);else if(t.filename&&(s=n.resolveInclude(e,t.filename),r.existsSync(s)&&(i=s)),!i&&Array.isArray(a)&&(i=m(e,a)),!i&&"function"!=typeof t.includer)throw new Error('Could not find the include file "'+t.escapeFunction(e)+'"');return i}(e,i),"function"==typeof t.includer){var a=t.includer(e,i.filename);if(a&&(a.filename&&(i.filename=a.filename),a.template))return p(i,a.template)}return p(i)}function b(e,t,n,r,i){var s=t.split("\n"),a=Math.max(r-3,0),o=Math.min(s.length,r+3),c=i(n),l=s.slice(a,o).map((function(e,t){var n=t+a+1;return(n==r?" >> ":"    ")+n+"| "+e})).join("\n");throw e.path=c,e.message=(c||"ejs")+":"+r+"\n"+l+"\n\n"+e.message,e}function _(e){return e.replace(/;(\s*$)/,"$1")}function x(e,t){t=t||s.createNullProtoObjWherePossible();var r=s.createNullProtoObjWherePossible();this.templateText=e,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",r.client=t.client||!1,r.escapeFunction=t.escape||t.escapeFunction||s.escapeXML,r.compileDebug=!1!==t.compileDebug,r.debug=!!t.debug,r.filename=t.filename,r.openDelimiter=t.openDelimiter||n.openDelimiter||"<",r.closeDelimiter=t.closeDelimiter||n.closeDelimiter||">",r.delimiter=t.delimiter||n.delimiter||"%",r.strict=t.strict||!1,r.context=t.context,r.cache=t.cache||!1,r.rmWhitespace=t.rmWhitespace,r.root=t.root,r.includer=t.includer,r.outputFunctionName=t.outputFunctionName,r.localsName=t.localsName||n.localsName||c,r.views=t.views,r.async=t.async,r.destructuredLocals=t.destructuredLocals,r.legacyInclude=void 0===t.legacyInclude||!!t.legacyInclude,r.strict?r._with=!1:r._with=void 0===t._with||t._with,this.opts=r,this.regex=this.createRegex()}n.cache=s.cache,n.fileLoader=r.readFileSync,n.localsName=c,n.promiseImpl=new Function("return this;")().Promise,n.resolveInclude=function(e,t,n){var r=i.dirname,s=i.extname,a=(0,i.resolve)(n?t:r(t),e);return s(e)||(a+=".ejs"),a},n.compile=function(e,t){return t&&t.scope&&(a||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),a=!0),t.context||(t.context=t.scope),delete t.scope),new x(e,t).compile()},n.render=function(e,t,n){var r=t||s.createNullProtoObjWherePossible(),i=n||s.createNullProtoObjWherePossible();return 2==arguments.length&&s.shallowCopyFromList(i,r,l),p(i,e)(r)},n.renderFile=function(){var e,t,n,r=Array.prototype.slice.call(arguments),i=r.shift(),a={filename:i};return"function"==typeof arguments[arguments.length-1]&&(e=r.pop()),r.length?(t=r.shift(),r.length?s.shallowCopy(a,r.pop()):(t.settings&&(t.settings.views&&(a.views=t.settings.views),t.settings["view cache"]&&(a.cache=!0),(n=t.settings["view options"])&&s.shallowCopy(a,n)),s.shallowCopyFromList(a,t,d)),a.filename=i):t=s.createNullProtoObjWherePossible(),f(a,t,e)},n.Template=x,n.clearCache=function(){n.cache.reset()},x.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},x.prototype={createRegex:function(){var e="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",t=s.escapeRegExpChars(this.opts.delimiter),n=s.escapeRegExpChars(this.opts.openDelimiter),r=s.escapeRegExpChars(this.opts.closeDelimiter);return e=e.replace(/%/g,t).replace(/</g,n).replace(/>/g,r),new RegExp(e)},compile:function(){var e,t,n,r=this.opts,a="",o="",c=r.escapeFunction,l=r.filename?JSON.stringify(r.filename):"undefined";if(!this.source){if(this.generateSource(),a+='  var __output = "";\n  function __append(s) { if (s !== undefined && s !== null) __output += s }\n',r.outputFunctionName){if(!h.test(r.outputFunctionName))throw new Error("outputFunctionName is not a valid JS identifier.");a+="  var "+r.outputFunctionName+" = __append;\n"}if(r.localsName&&!h.test(r.localsName))throw new Error("localsName is not a valid JS identifier.");if(r.destructuredLocals&&r.destructuredLocals.length){for(var d="  var __locals = ("+r.localsName+" || {}),\n",u=0;u<r.destructuredLocals.length;u++){var m=r.destructuredLocals[u];if(!h.test(m))throw new Error("destructuredLocals["+u+"] is not a valid JS identifier.");u>0&&(d+=",\n  "),d+=m+" = __locals."+m}a+=d+";\n"}!1!==r._with&&(a+="  with ("+r.localsName+" || {}) {\n",o+="  }\n"),o+="  return __output;\n",this.source=a+this.source+o}e=r.compileDebug?"var __line = 1\n  , __lines = "+JSON.stringify(this.templateText)+"\n  , __filename = "+l+";\ntry {\n"+this.source+"} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n":this.source,r.client&&(e="escapeFn = escapeFn || "+c.toString()+";\n"+e,r.compileDebug&&(e="rethrow = rethrow || "+b.toString()+";\n"+e)),r.strict&&(e='"use strict";\n'+e),r.debug&&console.log(e),r.compileDebug&&r.filename&&(e=e+"\n//# sourceURL="+l+"\n");try{if(r.async)try{n=new Function("return (async function(){}).constructor;")()}catch(e){throw e instanceof SyntaxError?new Error("This environment does not support async/await"):e}else n=Function;t=new n(r.localsName+", escapeFn, include, rethrow",e)}catch(e){throw e instanceof SyntaxError&&(r.filename&&(e.message+=" in "+r.filename),e.message+=" while compiling ejs\n\n",e.message+="If the above error is not helpful, you may want to try EJS-Lint:\n",e.message+="https://github.com/RyanZim/EJS-Lint",r.async||(e.message+="\n",e.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),e}var p=r.client?t:function(e){return t.apply(r.context,[e||s.createNullProtoObjWherePossible(),c,function(t,n){var i=s.shallowCopy(s.createNullProtoObjWherePossible(),e);return n&&(i=s.shallowCopy(i,n)),g(t,r)(i)},b])};if(r.filename&&"function"==typeof Object.defineProperty){var f=r.filename,v=i.basename(f,i.extname(f));try{Object.defineProperty(p,"name",{value:v,writable:!1,enumerable:!1,configurable:!0})}catch(e){}}return p},generateSource:function(){this.opts.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var e=this,t=this.parseTemplateText(),n=this.opts.delimiter,r=this.opts.openDelimiter,i=this.opts.closeDelimiter;t&&t.length&&t.forEach((function(s,a){var o;if(0===s.indexOf(r+n)&&0!==s.indexOf(r+n+n)&&(o=t[a+2])!=n+i&&o!="-"+n+i&&o!="_"+n+i)throw new Error('Could not find matching close tag for "'+s+'".');e.scanLine(s)}))},parseTemplateText:function(){for(var e,t=this.templateText,n=this.regex,r=n.exec(t),i=[];r;)0!==(e=r.index)&&(i.push(t.substring(0,e)),t=t.slice(e)),i.push(r[0]),t=t.slice(r[0].length),r=n.exec(t);return t&&i.push(t),i},_addOutput:function(e){if(this.truncate&&(e=e.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!e)return e;e=(e=(e=(e=e.replace(/\\/g,"\\\\")).replace(/\n/g,"\\n")).replace(/\r/g,"\\r")).replace(/"/g,'\\"'),this.source+='    ; __append("'+e+'")\n'},scanLine:function(e){var t,n=this.opts.delimiter,r=this.opts.openDelimiter,i=this.opts.closeDelimiter;switch(t=e.split("\n").length-1,e){case r+n:case r+n+"_":this.mode=x.modes.EVAL;break;case r+n+"=":this.mode=x.modes.ESCAPED;break;case r+n+"-":this.mode=x.modes.RAW;break;case r+n+"#":this.mode=x.modes.COMMENT;break;case r+n+n:this.mode=x.modes.LITERAL,this.source+='    ; __append("'+e.replace(r+n+n,r+n)+'")\n';break;case n+n+i:this.mode=x.modes.LITERAL,this.source+='    ; __append("'+e.replace(n+n+i,n+i)+'")\n';break;case n+i:case"-"+n+i:case"_"+n+i:this.mode==x.modes.LITERAL&&this._addOutput(e),this.mode=null,this.truncate=0===e.indexOf("-")||0===e.indexOf("_");break;default:if(this.mode){switch(this.mode){case x.modes.EVAL:case x.modes.ESCAPED:case x.modes.RAW:e.lastIndexOf("//")>e.lastIndexOf("\n")&&(e+="\n")}switch(this.mode){case x.modes.EVAL:this.source+="    ; "+e+"\n";break;case x.modes.ESCAPED:this.source+="    ; __append(escapeFn("+_(e)+"))\n";break;case x.modes.RAW:this.source+="    ; __append("+_(e)+")\n";break;case x.modes.COMMENT:break;case x.modes.LITERAL:this._addOutput(e)}}else this._addOutput(e)}this.opts.compileDebug&&t&&(this.currentLine+=t,this.source+="    ; __line = "+this.currentLine+"\n")}},n.escapeXML=s.escapeXML,n.__express=n.renderFile,n.VERSION=o,n.name="ejs","undefined"!=typeof window&&(window.ejs=n)},{"../package.json":6,"./utils":2,fs:3,path:4}],2:[function(e,t,n){"use strict";var r=/[|\\{}()[\]^$+*?.]/g,i=Object.prototype.hasOwnProperty,s=function(e,t){return i.apply(e,[t])};n.escapeRegExpChars=function(e){return e?String(e).replace(r,"\\$&"):""};var a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},o=/[&<>'"]/g;function c(e){return a[e]||e}n.escapeXML=function(e){return null==e?"":String(e).replace(o,c)},n.escapeXML.toString=function(){return Function.prototype.toString.call(this)+';\nvar _ENCODE_HTML_RULES = {\n      "&": "&amp;"\n    , "<": "&lt;"\n    , ">": "&gt;"\n    , \'"\': "&#34;"\n    , "\'": "&#39;"\n    }\n  , _MATCH_HTML = /[&<>\'"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n'},n.shallowCopy=function(e,t){if(t=t||{},null!=e)for(var n in t)s(t,n)&&"__proto__"!==n&&"constructor"!==n&&(e[n]=t[n]);return e},n.shallowCopyFromList=function(e,t,n){if(n=n||[],t=t||{},null!=e)for(var r=0;r<n.length;r++){var i=n[r];if(void 0!==t[i]){if(!s(t,i))continue;if("__proto__"===i||"constructor"===i)continue;e[i]=t[i]}}return e},n.cache={_data:{},set:function(e,t){this._data[e]=t},get:function(e){return this._data[e]},remove:function(e){delete this._data[e]},reset:function(){this._data={}}},n.hyphenToCamel=function(e){return e.replace(/-[a-z]/g,(function(e){return e[1].toUpperCase()}))},n.createNullProtoObjWherePossible="function"==typeof Object.create?function(){return Object.create(null)}:{__proto__:null}instanceof Object?function(){return{}}:function(){return{__proto__:null}}},{}],3:[function(e,t,n){},{}],4:[function(e,t,n){(function(e){function t(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}n.resolve=function(){for(var n="",i=!1,s=arguments.length-1;s>=-1&&!i;s--){var a=s>=0?arguments[s]:e.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(n=a+"/"+n,i="/"===a.charAt(0))}return(i?"/":"")+(n=t(r(n.split("/"),(function(e){return!!e})),!i).join("/"))||"."},n.normalize=function(e){var s=n.isAbsolute(e),a="/"===i(e,-1);return(e=t(r(e.split("/"),(function(e){return!!e})),!s).join("/"))||s||(e="."),e&&a&&(e+="/"),(s?"/":"")+e},n.isAbsolute=function(e){return"/"===e.charAt(0)},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(r(e,(function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},n.relative=function(e,t){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=n.resolve(e).substr(1),t=n.resolve(t).substr(1);for(var i=r(e.split("/")),s=r(t.split("/")),a=Math.min(i.length,s.length),o=a,c=0;c<a;c++)if(i[c]!==s[c]){o=c;break}var l=[];for(c=o;c<i.length;c++)l.push("..");return(l=l.concat(s.slice(o))).join("/")},n.sep="/",n.delimiter=":",n.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,s=e.length-1;s>=1;--s)if(47===(t=e.charCodeAt(s))){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},n.basename=function(e,t){var n=function(e){"string"!=typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},n.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,s=0,a=e.length-1;a>=0;--a){var o=e.charCodeAt(a);if(47!==o)-1===r&&(i=!1,r=a+1),46===o?-1===t?t=a:1!==s&&(s=1):-1!==t&&(s=-1);else if(!i){n=a+1;break}}return-1===t||-1===r||0===s||1===s&&t===r-1&&t===n+1?"":e.slice(t,r)};var i=function(e,t,n){return e.substr(t,n)}}).call(this,e("_process"))},{_process:5}],5:[function(e,t,n){var r,i,s=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var l,d=[],u=!1,h=-1;function m(){u&&l&&(u=!1,l.length?d=l.concat(d):h=-1,d.length&&p())}function p(){if(!u){var e=c(m);u=!0;for(var t=d.length;t;){for(l=d,d=[];++h<t;)l&&l[h].run();h=-1,t=d.length}l=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function v(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];d.push(new f(e,t)),1!==d.length||u||c(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=v,s.addListener=v,s.once=v,s.off=v,s.removeListener=v,s.removeAllListeners=v,s.emit=v,s.prependListener=v,s.prependOnceListener=v,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},{}],6:[function(e,t,n){t.exports={name:"ejs",description:"Embedded JavaScript templates",keywords:["template","engine","ejs"],version:"3.1.7",author:"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",license:"Apache-2.0",bin:{ejs:"./bin/cli.js"},main:"./lib/ejs.js",jsdelivr:"ejs.min.js",unpkg:"ejs.min.js",repository:{type:"git",url:"git://github.com/mde/ejs.git"},bugs:"https://github.com/mde/ejs/issues",homepage:"https://github.com/mde/ejs",dependencies:{jake:"^10.8.5"},devDependencies:{browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^3.6.7","lru-cache":"^4.0.1",mocha:"^7.1.1","uglify-js":"^3.3.16"},engines:{node:">=0.10.0"},scripts:{test:"mocha"}}},{}]},{},[1])(1)},824:e=>{var t=1e3,n=60*t,r=60*n,i=24*r;function s(e,t,n,r){var i=t>=1.5*n;return Math.round(e/n)+" "+r+(i?"s":"")}e.exports=function(e,a){a=a||{};var o,c,l=typeof e;if("string"===l&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var s=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(s){var a=parseFloat(s[1]);switch((s[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*a;case"weeks":case"week":case"w":return 6048e5*a;case"days":case"day":case"d":return a*i;case"hours":case"hour":case"hrs":case"hr":case"h":return a*r;case"minutes":case"minute":case"mins":case"min":case"m":return a*n;case"seconds":case"second":case"secs":case"sec":case"s":return a*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}}}(e);if("number"===l&&isFinite(e))return a.long?(o=e,(c=Math.abs(o))>=i?s(o,c,i,"day"):c>=r?s(o,c,r,"hour"):c>=n?s(o,c,n,"minute"):c>=t?s(o,c,t,"second"):o+" ms"):function(e){var s=Math.abs(e);return s>=i?Math.round(e/i)+"d":s>=r?Math.round(e/r)+"h":s>=n?Math.round(e/n)+"m":s>=t?Math.round(e/t)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r),n.d(r,{htmlReport:()=>a});var e=n(481),t=n.n(e),i=n(824),s=n.n(i);function a(e,n={}){n.title||(n.title=(new Date).toISOString()),n.hasOwnProperty("debug")||(n.debug=!1),console.log("[k6-reporter v2.3.1] Generating HTML summary report");let r=[];n.debug&&console.log(JSON.stringify(e,null,2));let i=0,a=0;for(let t in e.metrics)if(r.push(t),e.metrics[t].thresholds){a++;let n=e.metrics[t].thresholds;for(let e in n)n[e].ok||i++}let c=0,l=0;if(e.root_group.checks){let{passes:t,fails:n}=o(e.root_group.checks);c+=n,l+=t}for(let t of e.root_group.groups)if(t.checks){let{passes:e,fails:n}=o(t.checks);c+=n,l+=e}const d=s()(e.state.testRunDurationMs,{long:!0});return t().render('<!DOCTYPE html>\n<html lang="en">\n  <head> \n    <meta charset="UTF-8" />\n    <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css" crossorigin="anonymous">\n\n    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" crossorigin="anonymous">\n\n    <link rel="shortcut icon" href="https://raw.githubusercontent.com/benc-uk/k6-reporter/main/assets/icon.png" type="image/png">\n\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>K6 Load Test: <%= title %></title>\n    <style>\n      body {\n        margin: 1rem;\n      }\n      footer { \n        float: right;\n        font-size: 0.8rem;\n        color: #777;\n      }\n      footer a {\n        text-decoration: none;\n        color: #777;\n      }\n      .failed {\n        background-color: #ff6666 !important;\n      }     \n      .good {\n        background-color: #2cae2c !important;\n      }   \n      td.failed {\n        font-weight: bold;\n      }\n      h1 {\n        font-size: 20px;\n        font-weight: bold;\n      }\n      h2 {\n        padding-bottom: 4px;\n        border-bottom: solid 3px #cccccc;\n      }\n      .tabs {\n        display: flex;\n        flex-wrap: wrap; \n      }\n      .tabs label {\n        order: 1; \n        display: block;\n        padding: 1rem 2rem;\n        margin-right: 0.2rem;\n        cursor: pointer;\n        color: #666;\n        background: #ddd;\n        font-weight: bold;\n        font-size: 1.2rem;\n        flex: 1 1;\n        transition: background ease 0.2s;\n        border-top-left-radius: 0.3rem;\n        border-top-right-radius: 0.3rem;\n        border-color: #ccc;\n        border-style: solid;\n        border-width: 2px 2px 0px;\n        box-shadow: inset 0px -3px 7px -1px rgba(0,0,0,0.33);\n      }\n      .tabs .tab {\n        order: 99;\n        flex-grow: 1;\n        width: 100%;\n        display: none;\n        padding: 1rem;\n        background: #fff;\n      }\n      .tabs input[type="radio"] {\n        display: none;\n      }\n      .tabs input[type="radio"]:checked + label {\n        background: #fff;\n        box-shadow: none;\n        color: #000;\n      }\n      .tabs input[type="radio"]:checked + label + .tab {\n        display: block;\n      }\n      .box {\n        flex: 1 1;\n        border-radius: 0.3rem;\n        background-color: #3abe3a;\n        margin: 1rem;\n        padding: 0.5rem;\n        font-size: 2vw; \n        box-shadow: 0px 4px 7px -1px rgba(0,0,0,0.49);\n        color: white;\n        position: relative;\n        overflow: hidden;\n      }\n      .box h4 {\n        font-size: 20px;\n        margin: 0;\n        padding-bottom: 0.5rem;\n        text-align: center;\n        position: relative;\n        z-index: 50;\n      }\n      .row {\n        display: flex;\n      }\n      .row div {\n        flex: 1 1;\n        text-align: center;\n        margin-bottom: 0.5rem;\n      }\n      .bignum {\n        position: relative;\n        font-size: min(5vw, 64px);\n        z-index: 20;\n      }\n      table {\n        font-size: min(1.4vw, 18px);\n        width: 100%;\n      }\n      .icon { \n        position: absolute;\n        top: 60%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        color: #0000002d;\n        font-size: 8vw;\n        z-index: 1;\n      }\n      .metricbox {\n        background-color: #5697e2;\n        font-size: 2vw;\n        height: auto;\n      }\n      .metricbox .row {\n        position: relative;\n        z-index: 20;\n      }\n    </style>\n  </head>\n\n  <body>\n    <h1>\n      <svg style="vertical-align:middle" width="50" height="45" viewBox="0 0 50 45" fill="none" class="footer-module--logo--_lkxx"><path d="M31.968 34.681a2.007 2.007 0 002.011-2.003c0-1.106-.9-2.003-2.011-2.003a2.007 2.007 0 00-2.012 2.003c0 1.106.9 2.003 2.012 2.003z" fill="#7D64FF"></path><path d="M39.575 0L27.154 16.883 16.729 9.31 0 45h50L39.575 0zM23.663 37.17l-2.97-4.072v4.072h-2.751V22.038l2.75 1.989v7.66l3.659-5.014 2.086 1.51-3.071 4.21 3.486 4.776h-3.189v.001zm8.305.17c-2.586 0-4.681-2.088-4.681-4.662 0-1.025.332-1.972.896-2.743l4.695-6.435 2.086 1.51-2.239 3.07a4.667 4.667 0 013.924 4.6c0 2.572-2.095 4.66-4.681 4.66z" fill="#7D64FF"></path></svg> \n      &nbsp; K6 Load Test: <%= title %> | Duration: <%= totalDuration %> \n    </h1>\n\n    <div class="row">\n      <div class="box">\n        <h4>Total Requests</h4>\n        <div class="bignum"><% if(data.metrics.http_reqs) { %><%= data.metrics.http_reqs.values.count %><% } %></div>\n        <div class="bignum"><% if(data.metrics.grpc_reqs) { %><%= data.metrics.grpc_reqs.values.count %><% } %></div>\n      </div>\n      <div class="box">\n        <h4>Throughput (tps)</h4>\n        <div class="bignum"><% if(data.metrics.http_reqs) { %><%= Math.round(data.metrics.http_reqs.values.rate) %><% } %></div>\n        <div class="bignum"><% if(data.metrics.grpc_reqs) { %><%= Math.round(data.metrics.grpc_reqs.values.rate) %><% } %></div>\n      </div>\n      <% if(data.metrics.http_req_failed && data.metrics.http_req_failed.values) { %>\n        <div class="box <% if(data.metrics.http_req_failed.values.passes > 0) { %> failed <% } %>">\n          <h4>Failed Requests</h4>\n          <div class="bignum"><%= data.metrics.http_req_failed.values.passes %></div>\n        </div> \n      <% } %>     \n      <div class="box <% if(thresholdFailures > 0) { %> failed <% } %>">\n        <h4>Breached Thresholds</h4>\n        <div class="bignum"><%= thresholdFailures %></div>\n      </div>\n      <div class="box <% if(checkFailures > 0) { %> failed <% } %>">\n        <h4>Failed Checks</h4>\n        <div class="bignum"><%= checkFailures %></div>\n      </div>\n    </div>\n\n    <br>\n    \n    <div class="tabs">\n      <input type="radio" name="tabs" id="tabone" checked="checked">\n      \x3c!-- Request Metrics --\x3e\n      <label for="tabone"><i class="far fa-clock"></i> &nbsp; Request Metrics</label>\n      <div class="tab">\n        <table class="pure-table pure-table-striped">\n          <tbody>\n            <thead>\n              <tr>\n                <th>k6 Metrics</th>\n                <th>Average</th>\n                <th>Maximum</th>\n                <th>Median</th> \n                <th>Minimum</th>\n                <th>90th Percentile</th>\n                <th>95th Percentile</th>\n                <th>99th Percentile</th>\n              </tr>\n            </thead>\n            \n            <% function checkFailed(metric, valName) {\n                if(!metric.thresholds) return \'\'\n                for(thres in metric.thresholds) {\n                  if(thres.includes(valName)) {\n                    if(!metric.thresholds[thres].ok) return \'failed\'\n                    return \'good\'\n                  }\n                }\n              }\n\n              for(metricName of standardMetrics) { \n                if(!data.metrics[metricName]) { continue }\n                var metric = data.metrics[metricName] \n            %>\n              <tr>\n                <td><b><%= metricName %></b></td>\n                <% if(metric.values.avg) { %>\n                  <td class="<%= checkFailed(metric, \'avg\') %>"><%= metric.values.avg.toFixed(2) %></td>\n                <% } else { %>\n                  <td>-</td>\n                <% } %>\n\n                <% if(metric.values.max) { %>\n                  <td class="<%= checkFailed(metric, \'max\') %>"><%= metric.values.max.toFixed(2) %></td>\n                <% } else { %>\n                  <td>-</td>\n                <% } %>  \n\n                <% if(metric.values.med) { %>\n                  <td class="<%= checkFailed(metric, \'med\') %>"><%= metric.values.med.toFixed(2) %></td>\n                <% } else { %>\n                  <td>-</td>\n                <% } %>  \n                \n                <% if(metric.values.min) { %>\n                  <td class="<%= checkFailed(metric, \'min\') %>"><%= metric.values.min.toFixed(2) %></td>\n                <% } else { %>\n                  <td>-</td>\n                <% } %>   \n                              \n                <% if(metric.values[\'p(90)\']) { %>\n                  <td class="<%= checkFailed(metric, \'p(90)\') %>"><%= metric.values[\'p(90)\'].toFixed(2) %></td>\n                <% } else { %>\n                  <td>-</td>\n                <% } %>\n\n                <% if(metric.values[\'p(95)\']) { %>\n                  <td class="<%= checkFailed(metric, \'p(95)\') %>"><%= metric.values[\'p(95)\'].toFixed(2) %></td>\n                <% } else { %>\n                  <td>-</td> \n                <% } %>\n\n                <% if(metric.values[\'p(99)\']) { %>\n                  <td class="<%= checkFailed(metric, \'p(99)\') %>"><%= metric.values[\'p(99)\'].toFixed(2) %></td>\n                <% } else { %>\n                  <td>-</td> \n                <% } %>\n              </tr>\n            <% } %>\n          </tbody>\n        </table>\n        <br>\n\n        <% \n          first = true \n          var sortedMetrics = {}\n          Object.keys(data.metrics).sort().forEach(function(k) {\n            sortedMetrics[k] = data.metrics[k]\n          });\n          for(metricName in sortedMetrics) {\n            if(standardMetrics.includes(metricName) || otherMetrics.includes(metricName)) { continue }\n            var metric = sortedMetrics[metricName] \n        %>\n          <% if(first) { first = false %> <h2>Custom Metrics</h2> \n          <table class="pure-table pure-table-striped">\n            <tbody>\n              <thead>\n                <tr>\n                  <th></th>\n                  <th>Count</th>\n                  <th>Rate</th>\n                  <th>Average</th>\n                  <th>Maximum</th>\n                  <th>Median</th> \n                  <th>Minimum</th>\n                  <th>90th Percentile</th>\n                  <th>95th Percentile</th>\n                </tr>\n              </thead>\n              <% } %>\n              <tr>\n                <td><b><%= metricName %></b></td>\n\n                <% if(metric.values.count) { %>\n                  <td class="<%= checkFailed(metric, \'count\') %>"><%= metric.values.count.toFixed(2) %></td>\n                <% } else { %>\n                  <td>-</td>\n                <% } %>\n\n                <% if(metric.values.rate) { %>\n                  <td class="<%= checkFailed(metric, \'rate\') %>"><%= metric.values.rate.toFixed(2) %></td>\n                <% } else { %>\n                  <td>-</td>\n                <% } %>\n                \n                <% if(metric.values.avg) { %>\n                  <td class="<%= checkFailed(metric, \'avg\') %>"><%= metric.values.avg.toFixed(2) %></td>\n                <% } else { %>\n                  <td>-</td>\n                <% } %>\n\n                <% if(metric.values.max) { %>\n                  <td class="<%= checkFailed(metric, \'max\') %>"><%= metric.values.max.toFixed(2) %></td>\n                <% } else { %>\n                  <td>-</td>\n                <% } %>  \n\n                <% if(metric.values.med) { %>\n                  <td class="<%= checkFailed(metric, \'med\') %>"><%= metric.values.med.toFixed(2) %></td>\n                <% } else { %>\n                  <td>-</td>\n                <% } %>  \n                \n                <% if(metric.values.min) { %>\n                  <td class="<%= checkFailed(metric, \'min\') %>"><%= metric.values.min.toFixed(2) %></td>\n                <% } else { %>\n                  <td>-</td>\n                <% } %>   \n                              \n                <% if(metric.values[\'p(90)\']) { %>\n                  <td class="<%= checkFailed(metric, \'p(90)\') %>"><%= metric.values[\'p(90)\'].toFixed(2) %></td>\n                <% } else { %>\n                  <td>-</td>\n                <% } %>\n\n                <% if(metric.values[\'p(95)\']) { %>\n                  <td class="<%= checkFailed(metric, \'p(95)\') %>"><%= metric.values[\'p(95)\'].toFixed(2) %></td>\n                <% } else { %>\n                  <td>-</td> \n                <% } %>\n              </tr>\n              <% } %>\n            </tbody>\n          </table>\n          <br>\n\n\n        &nbsp;&nbsp; Note. All times are in milli-seconds\n      </div> \n      \x3c!-- ---- end tab ---- --\x3e\n      \x3c!-- Tab 2 --\x3e\n      <input type="radio" name="tabs" id="tabtwo">\n      <label for="tabtwo"><i class="fas fa-chart-line"></i> &nbsp; Other Stats</label>\n      <div class="tab">\n        <div class="row">\n          <% if (data.metrics.checks) { %>\n            <div class="box metricbox">\n              <h4>Checks</h4>\n              <div class="row"><div>Passed</div><div><%= data.metrics.checks.values.passes %></div></div>\n              <div class="row"><div>Failed</div><div><%= data.metrics.checks.values.fails %></div></div>\n            </div>\n          <% } %>\n\n          <% if (data.metrics.iterations) { %>\n            <div class="box metricbox">\n              <h4>Iterations</h4>\n              <div class="row"><div>Total</div><div><%= data.metrics.iterations.values.count %></div></div>\n              <div class="row"><div>Rate</div><div><%= data.metrics.iterations.values.rate.toFixed(2) %>/s</div></div>\n            </div>\n          <% } %>\n\n          <div class="box metricbox">\n            <h4>Virtual Users</h4>\n            <div class="row"><div>Min</div><div><%= data.metrics.vus ? data.metrics.vus.values.min : 1 %></div></div>\n            <div class="row"><div>Max</div><div><%= data.metrics.vus ? data.metrics.vus.values.max : 1 %></div></div>\n          </div>\n        </div>\n\n        <div class="row">\n          <div class="box metricbox">\n            <h4>Requests</h4>\n            <div class="row"><div>Total</div><div><% if(data.metrics.http_reqs) { %><%= data.metrics.http_reqs.values.count %><% } %></div></div>\n            <div class="row"><div>Rate</div><div><% if(data.metrics.http_reqs) { %><%= data.metrics.http_reqs.values.rate.toFixed(2) %>/s<% } %></div></div>\n          </div>\n\n          <div class="box metricbox">\n            <h4>Data Received</h4>\n            <div class="row"><div>Total</div><div><%= (data.metrics.data_received.values.count/1000000).toFixed(2) %> MB</div></div>\n            <div class="row"><div>Rate</div><div><%= (data.metrics.data_received.values.rate/1000000).toFixed(2) %> mB/s</div></div>\n          </div>\n\n          <div class="box metricbox">\n            <h4>Data Sent</h4>\n            <div class="row"><div>Total</div><div><%= (data.metrics.data_sent.values.count/1000000).toFixed(2) %> MB</div></div>\n            <div class="row"><div>Rate</div><div><%= (data.metrics.data_sent.values.rate/1000000).toFixed(2) %> mB/s</div></div>\n          </div>   \n        </div>\n      </div>  \n      \x3c!--  end tab  --\x3e     \n\n      \x3c!-- Tab 3 --\x3e\n      <input type="radio" name="tabs" id="tabthree">\n      <label for="tabthree"><i class="fas fa-tasks"></i> Checks & Groups</label>\n      <div class="tab">\n\n        <% for(group of data.root_group.groups) { %>\n          <h2>&bull; Group - <%= group.name %></h2>\n          <table class="pure-table pure-table-horizontal" style="width: 100%">\n            <thead>\n              <tr>\n                <th>Check Name</th>\n                <th>Passes</th>\n                <th>Failures</th>\n              </tr>\n            </thead>\n            <% for(check of group.checks) { %>\n              <tr class="checkDetails <% if(check.fails > 0) { %>failed<% } %>">\n                <td width="50%"><%= check.name %></td><td><%= check.passes %></td><td><%= check.fails %></td>\n              </tr>\n            <% } %>\n          </table>\n          <br>\n        <% } %>\n\n        <h2>&bull; Other Checks</h2>\n        <table class="pure-table pure-table-horizontal" style="width: 100%">\n          <thead>\n            <tr>\n              <th>Check Name</th>\n              <th>Passes</th>\n              <th>Failures</th>\n            </tr>\n          </thead>\n          <% for(check of data.root_group.checks) { %>\n            <tr class="checkDetails <% if(check.fails > 0) { %>failed<% } %>">\n              <td width="50%"><%= check.name %></td><td><%= check.passes %></td><td><%= check.fails %></td>\n            </tr>\n          <% } %>\n        </table>     \n      </div> \n      \x3c!-- ---- end tab ---- --\x3e\n    </div>\n    <footer>K6 Reporter v<%= version %> - Ben Coleman 2021, <a href="https://github.com/benc-uk/k6-reporter">[GitHub]</a></footer>\n  </body>\n</html>\n',{data:e,title:n.title,standardMetrics:["http_req_failed","http_req_duration","grpc_req_duration","http_req_waiting","http_req_sending","http_req_receiving","http_req_blocked","iteration_duration","group_duration","testRunDurationMs"],otherMetrics:["http_reqs","http_req_failed","iterations","data_sent","checks","http_req_connecting","http_req_tls_handshaking","data_received","vus_max","vus","http_req_duration{expected_response:true}"],thresholdFailures:i,thresholdCount:a,checkFailures:c,checkPasses:l,totalDuration:d,version:"2.3.1"})}function o(e){let t=0,n=0;for(let r of e)t+=parseInt(r.passes),n+=parseInt(r.fails);return{passes:t,fails:n}}})();var i=exports;for(var s in r)i[s]=r[s];r.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})})();