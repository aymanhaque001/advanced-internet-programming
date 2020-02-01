!function(){"use strict";var e=function(e){var t=new Date(e.getTime()),n=t.getTimezoneOffset();return t.setSeconds(0,0),6e4*n+t.getTime()%6e4};var t=function(e){return e instanceof Date},n=/[T ]/,r=/:/,a=/^(\d{2})$/,u=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],o=/^(\d{4})/,i=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],s=/^-(\d{2})$/,c=/^-?(\d{3})$/,f=/^-?(\d{2})-?(\d{2})$/,l=/^-?W(\d{2})$/,g=/^-?W(\d{2})-?(\d{1})$/,m=/^(\d{2}([.,]\d*)?)$/,d=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,h=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,v=/([Z+-].*)$/,D=/^(Z)$/,M=/^([+-])(\d{2})$/,p=/^([+-])(\d{2}):?(\d{2})$/;function T(e,t,n){t=t||0,n=n||0;var r=new Date(0);r.setUTCFullYear(e,0,4);var a=7*t+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}var y=function(y,S){if(t(y))return new Date(y.getTime());if("string"!=typeof y)return new Date(y);var Y=(S||{}).additionalDigits;Y=null==Y?2:Number(Y);var x=function(e){var t,a={},u=e.split(n);r.test(u[0])?(a.date=null,t=u[0]):(a.date=u[0],t=u[1]);if(t){var o=v.exec(t);o?(a.time=t.replace(o[1],""),a.timezone=o[1]):a.time=t}return a}(y),w=function(e,t){var n,r=u[t],s=i[t];if(n=o.exec(e)||s.exec(e)){var c=n[1];return{year:parseInt(c,10),restDateString:e.slice(c.length)}}if(n=a.exec(e)||r.exec(e)){var f=n[1];return{year:100*parseInt(f,10),restDateString:e.slice(f.length)}}return{year:null}}(x.date,Y),b=w.year,F=function(e,t){if(null===t)return null;var n,r,a,u;if(0===e.length)return(r=new Date(0)).setUTCFullYear(t),r;if(n=s.exec(e))return r=new Date(0),a=parseInt(n[1],10)-1,r.setUTCFullYear(t,a),r;if(n=c.exec(e)){r=new Date(0);var o=parseInt(n[1],10);return r.setUTCFullYear(t,0,o),r}if(n=f.exec(e)){r=new Date(0),a=parseInt(n[1],10)-1;var i=parseInt(n[2],10);return r.setUTCFullYear(t,a,i),r}if(n=l.exec(e))return u=parseInt(n[1],10)-1,T(t,u);if(n=g.exec(e)){u=parseInt(n[1],10)-1;var m=parseInt(n[2],10)-1;return T(t,u,m)}return null}(w.restDateString,b);if(F){var H,I=F.getTime(),$=0;if(x.time&&($=function(e){var t,n,r;if(t=m.exec(e))return(n=parseFloat(t[1].replace(",",".")))%24*36e5;if(t=d.exec(e))return n=parseInt(t[1],10),r=parseFloat(t[2].replace(",",".")),n%24*36e5+6e4*r;if(t=h.exec(e)){n=parseInt(t[1],10),r=parseInt(t[2],10);var a=parseFloat(t[3].replace(",","."));return n%24*36e5+6e4*r+1e3*a}return null}(x.time)),x.timezone)H=6e4*function(e){var t,n;if(t=D.exec(e))return 0;if(t=M.exec(e))return n=60*parseInt(t[2],10),"+"===t[1]?-n:n;if(t=p.exec(e))return n=60*parseInt(t[2],10)+parseInt(t[3],10),"+"===t[1]?-n:n;return 0}(x.timezone);else{var W=I+$,G=new Date(W);H=e(G);var O=new Date(W);O.setDate(G.getDate()+1);var z=e(O)-e(G);z>0&&(H+=z)}return new Date(I+$+H)}return new Date(y)};var S=function(e){var t=y(e),n=new Date(0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n};var Y=function(e){var t=y(e);return t.setHours(0,0,0,0),t};var x=function(e,t){var n=Y(e),r=Y(t),a=n.getTime()-6e4*n.getTimezoneOffset(),u=r.getTime()-6e4*r.getTimezoneOffset();return Math.round((a-u)/864e5)};var w=function(e){var t=y(e);return x(t,S(t))+1};var b=function(e,t){var n=t&&Number(t.weekStartsOn)||0,r=y(e),a=r.getDay(),u=(a<n?7:0)+a-n;return r.setDate(r.getDate()-u),r.setHours(0,0,0,0),r};var F=function(e){return b(e,{weekStartsOn:1})};var H=function(e){var t=y(e),n=t.getFullYear(),r=new Date(0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);var a=F(r),u=new Date(0);u.setFullYear(n,0,4),u.setHours(0,0,0,0);var o=F(u);return t.getTime()>=a.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1};var I=function(e){var t=H(e),n=new Date(0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),F(n)};var $=function(e){var t=y(e),n=F(t).getTime()-I(t).getTime();return Math.round(n/6048e5)+1};var W=function(e){if(t(e))return!isNaN(e);throw new TypeError(toString.call(e)+" is not an instance of Date")};var G=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];var O=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);var r=G.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+r.join("|")+"|.)","g")};var z=function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Su","Mo","Tu","We","Th","Fr","Sa"],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],u=["AM","PM"],o=["am","pm"],i=["a.m.","p.m."],s={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return n[e.getDay()]},ddd:function(e){return r[e.getDay()]},dddd:function(e){return a[e.getDay()]},A:function(e){return e.getHours()/12>=1?u[1]:u[0]},a:function(e){return e.getHours()/12>=1?o[1]:o[0]},aa:function(e){return e.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach((function(e){s[e+"o"]=function(t,n){return function(e){var t=e%100;if(t>20||t<10)switch(t%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"}(n[e](t))}})),{formatters:s,formattingTokensRegExp:O(s)}},C={distanceInWords:function(){var e={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};return{localize:function(t,n,r){var a;return r=r||{},a="string"==typeof e[t]?e[t]:1===n?e[t].one:e[t].other.replace("{{count}}",n),r.addSuffix?r.comparison>0?"in "+a:a+" ago":a}}}(),format:z()};var E={M:function(e){return e.getMonth()+1},MM:function(e){return U(e.getMonth()+1,2)},Q:function(e){return Math.ceil((e.getMonth()+1)/3)},D:function(e){return e.getDate()},DD:function(e){return U(e.getDate(),2)},DDD:function(e){return w(e)},DDDD:function(e){return U(w(e),3)},d:function(e){return e.getDay()},E:function(e){return e.getDay()||7},W:function(e){return $(e)},WW:function(e){return U($(e),2)},YY:function(e){return U(e.getFullYear(),4).substr(2)},YYYY:function(e){return U(e.getFullYear(),4)},GG:function(e){return String(H(e)).substr(2)},GGGG:function(e){return H(e)},H:function(e){return e.getHours()},HH:function(e){return U(e.getHours(),2)},h:function(e){var t=e.getHours();return 0===t?12:t>12?t%12:t},hh:function(e){return U(E.h(e),2)},m:function(e){return e.getMinutes()},mm:function(e){return U(e.getMinutes(),2)},s:function(e){return e.getSeconds()},ss:function(e){return U(e.getSeconds(),2)},S:function(e){return Math.floor(e.getMilliseconds()/100)},SS:function(e){return U(Math.floor(e.getMilliseconds()/10),2)},SSS:function(e){return U(e.getMilliseconds(),3)},Z:function(e){return Z(e.getTimezoneOffset(),":")},ZZ:function(e){return Z(e.getTimezoneOffset())},X:function(e){return Math.floor(e.getTime()/1e3)},x:function(e){return e.getTime()}};function X(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|]$/g,""):e.replace(/\\/g,"")}function Z(e,t){t=t||"";var n=e>0?"-":"+",r=Math.abs(e),a=r%60;return n+U(Math.floor(r/60),2)+t+U(a,2)}function U(e,t){for(var n=Math.abs(e).toString();n.length<t;)n="0"+n;return n}var k=function(e,t,n){var r=t?String(t):"YYYY-MM-DDTHH:mm:ss.SSSZ",a=(n||{}).locale,u=C.format.formatters,o=C.format.formattingTokensRegExp;a&&a.format&&a.format.formatters&&(u=a.format.formatters,a.format.formattingTokensRegExp&&(o=a.format.formattingTokensRegExp));var i=y(e);return W(i)?function(e,t,n){var r,a,u=e.match(n),o=u.length;for(r=0;r<o;r++)a=t[u[r]]||E[u[r]],u[r]=a||X(u[r]);return function(e){for(var t="",n=0;n<o;n++)u[n]instanceof Function?t+=u[n](e,E):t+=u[n];return t}}(r,u,o)(i):"Invalid Date"},A=document.querySelector("#time-now");console.log("if you have sourcemaps enabled in your devtools, click on main.js:5 --\x3e"),function e(){A.textContent=k(new Date,"h:mm:ssa"),setTimeout(e,1e3)}()}();
//# sourceMappingURL=bundle.js.map
