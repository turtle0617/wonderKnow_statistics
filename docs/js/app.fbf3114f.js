(function(e){function t(t){for(var a,c,o=t[0],i=t[1],l=t[2],d=0,f=[];d<o.length;d++)c=o[d],n[c]&&f.push(n[c][0]),n[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,o=1;o<s.length;o++){var i=s[o];0!==n[i]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=s[0]))}return e}var a={},n={app:0},r=[];function c(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=e,c.c=a,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(s,a,function(t){return e[t]}.bind(null,a));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/wonderKnow_statistics_refactoring/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=i;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"00c7":function(e,t,s){"use strict";var a=s("a26d"),n=s.n(a);n.a},4610:function(e,t,s){},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return s(t)}function r(e){var t=a[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="4678"},4725:function(e,t,s){"use strict";var a=s("bc1c"),n=s.n(a);n.a},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("097d");var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/"}},[e._v("Members")]),e._v(" |\n    "),s("router-link",{attrs:{to:"/Frontend"}},[e._v("Front-end")]),e._v(" |\n    "),s("router-link",{attrs:{to:"/Backend"}},[e._v("Back-end")]),e._v(" |\n    "),s("router-link",{attrs:{to:"/ios"}},[e._v("IOS")]),e._v(" |\n    "),s("router-link",{attrs:{to:"/android"}},[e._v("Android")]),e._v(" |\n  ")],1),s("router-view")],1)},n=[],r=void 0,c=(s("5c0b"),s("2877")),o=Object(c["a"])(r,a,n,!1,null,null,null);o.options.__file="App.vue";var i=o.exports,l=s("2b0e"),u=s("8c4f"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("div",{staticClass:"all_speakers_speech_statistic"},[s("h1",[e._v("每月統計:")]),s("ve-line",{attrs:{"after-set-option-once":e.getChartInit,data:e.all_speakers_speech_statistic.chartData,"data-zoom":e.all_speakers_dataZoom,events:e.detectSliderMove()}})],1),s("speakerDisplay",{attrs:{speakerList:e.speaker_list,chartXMax:e.chartSettings,dataZoomDuration:e.dataZoom_duration}})],1)},f=[],p=(s("c5f6"),s("3835")),h=(s("aabe"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{directives:[{name:"masonry",rawName:"v-masonry"}],attrs:{"item-selector":".item"}},[e._l(e.speaker_list,function(t){return[t.speechs_count>0?s("li",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],key:t,staticClass:"item",attrs:{"fit-width":"true"}},[s("div",{staticClass:"speaker",on:{click:function(s){e.showChart(t)}}},[s("img",{attrs:{src:t.photo,alt:""}}),e._v(" "+e._s(t.name)+"\n      ")]),s("h3",[e._v("總演講次數: "+e._s(t.speechs_count))]),t.showChart?s("div",[s("ve-line",{attrs:{width:"400px",data:t.chartData,"data-zoom":e.speaker_dataZoom,settings:e.chartXMax}})],1):e._e()]):e._e()]})],2)}),_=[],m=(s("ac6a"),s("6762"),s("2fdb"),s("55dd"),s("20d6"),s("7f7f"),s("5df3"),s("4f7f"),s("2909")),v=(s("6c7b"),s("c1df")),k=s.n(v),b=[2017,3],j=k()(),g=Math.abs(k()([2017,3]).diff(j,"months"))+1;function y(){var e=D();return{columns:["month","month_speechs_count"],rows:e}}function w(){var e=new Array(g).fill(0);return e}function x(e){var t=e.result.map(function(e){return e.speaker}),s=Object(m["a"])(new Set(t)).map(function(e){return{name:e,speechs_count:0,monthly_of_speech_count:w().slice(),photo:"",chartData:y(),showChart:!1}}),a={chartData:y()};return[e.result,s,a]}function C(e){var t=e[0],s=e[1],a=e[2];return s=s.map(function(e){return t.forEach(function(t){var s=t.speaker===e.name,n=t.speech_date.slice(0,7),r=e.chartData.rows.findIndex(function(e){return e.month===n});if(s&&~r){var c="month_speechs_count";e.speechs_count++,e.photo=S(t.speaker_img),e.monthly_of_speech_count[r]+=1,e.chartData.rows[r][c]++,a.chartData.rows[r][c]++}}),e}),[s,a]}function O(e){var t=e.slice();return t.sort(function(e,t){return t.speechs_count-e.speechs_count})}function S(e){return e.includes("imgur")?e:"/wonderKnow_statistics_refactoring/goodidea.png"}function D(){for(var e=[],t=0;t<g;t++)e.push({month:k()(b).add(t,"M").format("YYYY-MM"),month_speechs_count:0});return e}var z={props:["speakerList","chartXMax","dataZoomDuration"],data:function(){return{speaker_list:[],speaker_dataZoom:{type:"slider",show:!1,start:0,end:100}}},watch:{speakerList:function(e){this.speaker_list=O(e)},dataZoomDuration:function(e){var t=this,s=e.startIndex,a=e.endIndex,n={type:"slider",show:!1,start:e.start,end:e.end};this.speaker_dataZoom=n,this.speaker_list.forEach(function(e){e.speechs_count=t.calculMonthPeriodSpeechCount(e,s,a)}),this.speaker_list=O(this.speaker_list)}},methods:{showChart:function(e){e.showChart=!e.showChart,this.$nextTick(function(){console.log("hi"),this.$redrawVueMasonry()})},calculMonthPeriodSpeechCount:function(e,t,s){return e.monthly_of_speech_count.reduce(function(e,a,n){return n<t||n>s?e:e+a},0)}}},E=z,M=Object(c["a"])(E,h,_,!1,null,null,null);M.options.__file="speakerDisplay.vue";var T=M.exports,I=s("bc3a"),P=s.n(I),$="https://devche.com/api";function Z(e){return P.a.get($+e).then(function(e){return 200===e.status?e.data:e.status})}var F={GET:Z},A={name:"home",data:function(){return{all_speakers_chartInit:"",speaker_list:[],all_speakers_speech_statistic:[],chartSettings:{max:[]},all_speakers_dataZoom:{type:"slider",show:!0,start:0,end:100,realtime:!1},dataZoom_duration:{start:0,end:100,startIndex:0,endIndex:0}}},mounted:function(){var e=this;F.GET("/speech/data").then(x).then(C).then(function(t){var s=Object(p["a"])(t,2),a=s[0],n=s[1];e.speaker_list=a,e.all_speakers_speech_statistic=n,e.chartSettings.max.push(e.calculSpeechMaxCount())})},components:{speakerDisplay:T},methods:{calculSpeechMaxCount:function(){var e=this.all_speakers_speech_statistic.chartData.rows.map(function(e){return e.month_speechs_count}),t=e.reduce(function(e,t){return Math.max(e,t)});return t},detectSliderMove:function(){var e=this;return{datazoom:function(t){e.updateSpeakerZoom(t.start,t.end)}}},updateSpeakerZoom:function(e,t){var s=this.all_speakers_chartInit.getOption().xAxis[0],a={start:Number(e.toFixed(2)),end:Number(t.toFixed(2)),startIndex:s.rangeStart,endIndex:s.rangeEnd};this.dataZoom_duration=a},getChartInit:function(e){this.all_speakers_chartInit=e}}},B=A,N=Object(c["a"])(B,d,f,!1,null,null,null);N.options.__file="Home.vue";var G=N.exports,L=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"frontend"},[s("forntendDisplay",{attrs:{talks:e.talks}})],1)},Y=[],J=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",e._l(e.frontendTalks,function(t,a){return s("li",{key:a},[s("h1",[e._v("主題："+e._s(t.title))]),s("div",{staticClass:"talk"},[s("div",{staticClass:"speaker"},[s("img",{attrs:{src:t.speaker_img,alt:""}}),s("span",[e._v(e._s(t.speaker))])]),s("div",{staticClass:"Summary"},[e._v("\n        "+e._s(t.message)+"\n      ")])]),s("label",[e._v("日期："+e._s(t.speech_date))])])}),0)},X=[],q={props:["talks"],methods:{isFrontend:function(e){var t=["Front-end","CSS","HTML","Vue"],s=e.speaker_img;return e.speaker_img=this.checkPhoto(s),t.includes(e.class)},checkPhoto:function(e){var t=e.includes("imgur");return t?e:(e="/goodidea.png",e)}},computed:{frontendTalks:function(){var e=this.talks.filter(this.isFrontend);return e.reverse()}}},H=q,K=Object(c["a"])(H,J,X,!1,null,null,null);K.options.__file="forntendDisplay.vue";var U=K.exports,V={name:"frontend",data:function(){return{talks:[]}},mounted:function(){var e=this;F.GET("/speech/data").then(function(t){e.talks=t.result})},components:{forntendDisplay:U}},Q=V,R=Object(c["a"])(Q,L,Y,!1,null,null,null);R.options.__file="frontend.vue";var W=R.exports,ee=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"backend"},[s("backendDisplay",{attrs:{talks:e.talks}})],1)},te=[],se=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",e._l(e.backendTalks,function(t,a){return s("li",{key:a},[s("h1",[e._v("主題："+e._s(t.title))]),s("div",{staticClass:"talk"},[s("div",{staticClass:"speaker"},[s("img",{attrs:{src:t.speaker_img,alt:""}}),s("span",[e._v(e._s(t.speaker))])]),s("div",{staticClass:"Summary"},[e._v("\n        "+e._s(t.message)+"\n      ")])]),s("label",[e._v("日期："+e._s(t.speech_date))])])}),0)},ae=[],ne={props:["talks"],methods:{isBackend:function(e){var t=["Backend-end","backend-end","Security","NodeJS"],s=e.speaker_img;return e.speaker_img=this.checkPhoto(s),t.includes(e.class)},checkPhoto:function(e){var t=e.includes("imgur");return t?e:(e="/goodidea.png",e)}},computed:{backendTalks:function(){var e=this.talks.filter(this.isBackend);return e.reverse()}}},re=ne,ce=(s("00c7"),Object(c["a"])(re,se,ae,!1,null,"90b42624",null));ce.options.__file="backendDisplay.vue";var oe=ce.exports,ie={name:"backend",data:function(){return{talks:[]}},mounted:function(){var e=this;F.GET("/speech/data").then(function(t){e.talks=t.result})},components:{backendDisplay:oe}},le=ie,ue=Object(c["a"])(le,ee,te,!1,null,null,null);ue.options.__file="backend.vue";var de=ue.exports,fe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"backend"},[s("iosDisplay",{attrs:{talks:e.talks}})],1)},pe=[],he=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",e._l(e.iosTalks,function(t,a){return s("li",{key:a},[s("h1",[e._v("主題："+e._s(t.title))]),s("div",{staticClass:"talk"},[s("div",{staticClass:"speaker"},[s("img",{attrs:{src:t.speaker_img,alt:""}}),s("span",[e._v(e._s(t.speaker))])]),s("div",{staticClass:"Summary"},[e._v("\n        "+e._s(t.message)+"\n      ")])]),s("label",[e._v("日期："+e._s(t.speech_date))])])}),0)},_e=[],me={props:["talks"],methods:{isIOS:function(e){var t=["IOS"],s=e.speaker_img;return e.speaker_img=this.checkPhoto(s),t.includes(e.class)},checkPhoto:function(e){var t=e.includes("imgur");return t?e:(e="/goodidea.png",e)}},computed:{iosTalks:function(){var e=this.talks.filter(this.isIOS);return e.reverse()}}},ve=me,ke=(s("4725"),Object(c["a"])(ve,he,_e,!1,null,"e32df76e",null));ke.options.__file="iosDisplay.vue";var be=ke.exports,je={name:"backend",data:function(){return{talks:[]}},mounted:function(){var e=this;F.GET("/speech/data").then(function(t){e.talks=t.result})},components:{iosDisplay:be}},ge=je,ye=Object(c["a"])(ge,fe,pe,!1,null,null,null);ye.options.__file="ios.vue";var we=ye.exports,xe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"backend"},[s("androidDisplay",{attrs:{talks:e.talks}})],1)},Ce=[],Oe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",e._l(e.androidTalks,function(t,a){return s("li",{key:a},[s("h1",[e._v("主題："+e._s(t.title))]),s("div",{staticClass:"talk"},[s("div",{staticClass:"speaker"},[s("img",{attrs:{src:t.speaker_img,alt:""}}),s("span",[e._v(e._s(t.speaker))])]),s("div",{staticClass:"Summary"},[e._v("\n        "+e._s(t.message)+"\n      ")])]),s("label",[e._v("日期："+e._s(t.speech_date))])])}),0)},Se=[],De={props:["talks"],methods:{isAndroid:function(e){var t=["Android"],s=e.speaker_img;return e.speaker_img=this.checkPhoto(s),t.includes(e.class)},checkPhoto:function(e){var t=e.includes("imgur");return t?e:(e="/goodidea.png",e)}},computed:{androidTalks:function(){var e=this.talks.filter(this.isAndroid);return e.reverse()}}},ze=De,Ee=(s("aec0"),Object(c["a"])(ze,Oe,Se,!1,null,"fde7ef06",null));Ee.options.__file="androidDisplay.vue";var Me=Ee.exports,Te={name:"backend",data:function(){return{talks:[]}},mounted:function(){var e=this;F.GET("/speech/data").then(function(t){e.talks=t.result})},components:{androidDisplay:Me}},Ie=Te,Pe=Object(c["a"])(Ie,xe,Ce,!1,null,null,null);Pe.options.__file="android.vue";var $e=Pe.exports;l["a"].use(u["a"]);var Ze=new u["a"]({routes:[{path:"/",name:"home",component:G},{path:"/Frontend",name:"Frontend",component:W},{path:"/Backend",name:"Backend",component:de},{path:"/ios",name:"ios",component:we},{path:"/android",name:"android",component:$e}]}),Fe=s("2819"),Ae=s.n(Fe),Be=s("3f9b");l["a"].use(Ae.a),l["a"].use(Be["a"]),l["a"].config.productionTip=!1,new l["a"]({router:Ze,render:function(e){return e(i)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var a=s("5e27"),n=s.n(a);n.a},"5e27":function(e,t,s){},a26d:function(e,t,s){},aec0:function(e,t,s){"use strict";var a=s("4610"),n=s.n(a);n.a},bc1c:function(e,t,s){}});
//# sourceMappingURL=app.fbf3114f.js.map