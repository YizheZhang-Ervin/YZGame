(function(e){function t(t){for(var a,r,s=t[0],c=t[1],l=t[2],d=0,h=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(h.length)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={app:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0cb29":function(e,t,n){"use strict";n("c664")},4641:function(e,t,n){"use strict";n("eb8f")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"app"}},[n("router-view")],1),e._m(0)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"backup"}},[n("h1",[e._v("Please use larger screen(>800*700) to browse this website")])])}],r={name:"App",components:{}},s=r,c=(n("034f"),n("2877")),l=Object(c["a"])(s,o,i,!1,null,null,null),u=l.exports,d=n("cca1"),h=n.n(d),p=(n("8842"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("header",[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":"fintech",mode:"horizontal","background-color":"#000","text-color":"gold","active-text-color":"gold"},on:{select:e.changePage}},[n("el-menu-item",{attrs:{index:"fintech"}},[n("i",{staticClass:"el-icon-s-home"}),e._v(" YeStock ")]),n("el-submenu",{attrs:{index:"alg"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-monitor"}),e._v(" Algorithms ")]),n("el-menu-item",{attrs:{index:"alg-1"}},[e._v("Market Making")]),n("el-menu-item",{attrs:{index:"alg-2"}},[e._v("Passive Investment")]),n("el-menu-item",{attrs:{index:"alg-3"}},[e._v("Active Investment")]),n("el-menu-item",{attrs:{index:"alg-4"}},[e._v("Risk Management")]),n("el-menu-item",{attrs:{index:"alg-5"}},[e._v("Advanced")])],2),n("el-submenu",{attrs:{index:"tool"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-tools"}),e._v("Tools")]),n("el-menu-item",{attrs:{index:"translator"}},[e._v("Translator")]),n("el-menu-item",{attrs:{index:"videochat"}},[e._v("VideoChat")]),n("el-submenu",{attrs:{index:"Games"}},[n("template",{slot:"title"},[e._v("Games")]),n("el-menu-item",{attrs:{index:"3-1"}},[n("a",{attrs:{href:"/game1",target:"iframe001"}},[e._v("Assignment 1")])]),n("el-menu-item",{attrs:{index:"3-2"}},[n("a",{attrs:{href:"/game2",target:"iframe001"}},[e._v("Assignment 2")])]),n("el-menu-item",{attrs:{index:"3-3"}},[n("a",{attrs:{href:"/game3",target:"iframe001"}},[e._v("Assignment 3")])]),n("el-menu-item",{attrs:{index:"3-4"}},[n("a",{attrs:{href:"/game4",target:"iframe001"}},[e._v("Assignment 4")])]),n("el-menu-item",{attrs:{index:"3-5"}},[n("a",{attrs:{href:"/game5",target:"iframe001"}},[e._v("Assignment 5")])]),n("el-menu-item",{attrs:{index:"3-6"}},[n("a",{attrs:{href:"/game6",target:"iframe001"}},[e._v("Project 1")])]),n("el-menu-item",{attrs:{index:"3-7"}},[n("a",{attrs:{href:"/game7",target:"iframe001"}},[e._v("Project 2")])])],2)],2)],1),n("h3",{directives:[{name:"show",rawName:"v-show",value:e.notificationShow,expression:"notificationShow"}],staticClass:"notify",on:{click:e.changeNotification}},[n("i",{staticClass:"el-icon-caret-top"}),e._v(" "+e._s(e.userLocation)+" ")])],1),n("main",{staticClass:"main"},[n("iframe",{directives:[{name:"show",rawName:"v-show",value:e.iframeShow,expression:"iframeShow"}],staticClass:"iframe",attrs:{id:"iframe001",name:"iframe001"}}),n("Translator",{directives:[{name:"show",rawName:"v-show",value:e.translatorShow,expression:"translatorShow"}]}),n("Fintech",{directives:[{name:"show",rawName:"v-show",value:e.fintechShow,expression:"fintechShow"}]}),n("Videochat",{directives:[{name:"show",rawName:"v-show",value:e.videochatShow,expression:"videochatShow"}]})],1),e._m(0)])},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://ervinzhang.pythonanywhere.com/"}},[e._v(" Design By Yizhe Zhang | ervinzhang.pythonanywhere.com ")])])}],v=(n("99af"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("el-select",{attrs:{placeholder:"输入语言类型"},model:{value:e.fromlang,callback:function(t){e.fromlang=t},expression:"fromlang"}},e._l(e.options,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),n("el-select",{attrs:{placeholder:"输出语言类型"},model:{value:e.tolang,callback:function(t){e.tolang=t},expression:"tolang"}},e._l(e.options,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),n("el-input",{attrs:{type:"textarea",rows:5,maxlength:"255","show-word-limit":"",placeholder:"请输入内容"},on:{blur:e.getTranslate},model:{value:e.sentence,callback:function(t){e.sentence=t},expression:"sentence"}}),n("el-input",{attrs:{type:"textarea",rows:5,maxlength:"255","show-word-limit":"",readonly:""},model:{value:e.translatedSentence,callback:function(t){e.translatedSentence=t},expression:"translatedSentence"}}),n("el-popover",{attrs:{placement:"bottom-end",title:"翻译内容",width:"200",trigger:"hover",content:e.translatedSentence}},[n("el-button",{attrs:{slot:"reference"},on:{click:e.getTranslate},slot:"reference"},[e._v("Translate")])],1)],1)],1)}),g=[],b=n("7338"),w={name:"Translator",data:function(){return{sentence:"",options:[{value:"english",label:"English"},{value:"chinese",label:"汉语"},{value:"french",label:"Français"},{value:"spanish",label:"Español"},{value:"russian",label:"Русский язык"},{value:"hindi",label:"हिन्दी"}],fromlang:"english",tolang:"chinese",translatedSentence:""}},methods:{getTranslate:function(){var e=this;b.get("/api/translate/?sentence=".concat(this.sentence,"&fromlang=").concat(this.fromlang,"&tolang=").concat(this.tolang)).then((function(t){"error"==t.data.error?console.log("bakend error"):e.translatedSentence=t.data.result}),(function(e){console.log("frontend error",e)}))}}},y=w,x=Object(c["a"])(y,v,g,!1,null,"37b12b06",null),S=x.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"whole"},[n("section",[n("section",{staticClass:"charts",attrs:{id:"charts"}}),n("section",{staticClass:"output"},[n("pre",{staticClass:"output-pre",domProps:{textContent:e._s(e.output)}})])]),n("section",[n("el-button",{staticClass:"btn",attrs:{size:"small",icon:"el-icon-caret-right",round:""},on:{click:e.post}},[e._v("Run Code")]),n("el-button",{staticClass:"btn",attrs:{size:"small",icon:"el-icon-caret-right",round:""},on:{click:function(t){return e.clear("codes")}}},[e._v("Clear Code")]),n("el-button",{staticClass:"btn",attrs:{size:"small",icon:"el-icon-caret-right",round:""},on:{click:function(t){return e.clear("output")}}},[e._v("Clear Output")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],staticClass:"input",attrs:{id:"input"},domProps:{value:e.input},on:{keydown:function(t){return e.cancelTab(t)},input:function(t){t.target.composing||(e.input=t.target.value)}}})],1)])},C=[],k=n("7338"),P=n("313e"),O={name:"Fintech",components:{},data:function(){return{input:"class Run:\n  def run():\n    return {'x':[],'y':[],'y2':[]}",output:"",visualData:{x:[],y:[],y2:[]}}},mounted:function(){},methods:{get:function(){k.get("api/fintech/").then((function(e){"error"==e.data.error?console.log("backend error"):console.log(e.data.key)}),(function(e){console.log(e.data)}))},post:function(){var e=this;k.post("api/fintech/",{input:JSON.stringify(this.input)}).then((function(t){if("error"==t.data.error)console.log("backend error");else{e.visualData=t.data.result;var n=new Date(Date.now()),a=n.getHours()+":"+n.getMinutes()+":"+n.getSeconds(),o="";o=void 0!=e.visualData.x?"Output(".concat(a,")\n x:").concat(e.visualData.x,",\n y:").concat(e.visualData.y,",\n y2:").concat(e.visualData.y2,"\n\n"):"Output(".concat(a,")\n ").concat(e.visualData.other,"\n\n"),e.output+=o,e.plot()}}),(function(e){console.log(e.data)}))},plot:function(){var e=P.init(document.getElementById("charts")),t={xAxis:{name:"Axis-X",type:"category",data:this.visualData.x},yAxis:{name:"Axis-Y",type:"value"},series:[{data:this.visualData.y,type:"line",smooth:!0},{data:this.visualData.y2,type:"line",smooth:!0}],dataZoom:[{type:"inside"}],tooltip:{trigger:"axis"}};e.setOption(t)},clear:function(e){"codes"==e?this.input="class Run:\n  def run():\n    return {'x':[],'y':[],'y2':[]}":"output"==e&&(this.output="")},cancelTab:function(e){if(9==e.keyCode){e.preventDefault();var t=document.getElementById("input"),n="    ",a=t.selectionStart,o=t.selectionEnd,i=t.scrollTop;t.value=t.value.substring(0,a)+n+t.value.substring(o,t.value.length),t.focus(),t.selectionStart=a+n.length,t.selectionEnd=a+n.length,t.scrollTop=i}}}},I=O,T=(n("b031"),Object(c["a"])(I,_,C,!1,null,"78b6c89c",null)),D=T.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"whole"},[n("section",{staticClass:"chattingArea"},[n("section",{staticClass:"chatBtn"},[n("el-input",{attrs:{placeholder:"Type in peer id to call",clearable:""},model:{value:e.peerId,callback:function(t){e.peerId=t},expression:"peerId"}}),n("el-button",{attrs:{type:"primary",plain:"",round:"",id:"connect",icon:"el-icon-connection"},on:{click:e.connectPeer}},[e._v("Connect")])],1),n("el-card",{staticClass:"box-card cards"},[e._v(" Connection Status: "),n("p",{staticStyle:{display:"inline"},domProps:{textContent:e._s(e.connStatus)}}),n("br"),e._v(" Your Id: "),n("p",{staticStyle:{display:"inline"},domProps:{textContent:e._s(e.selfid)}})]),n("pre",{staticClass:"chattingHistory",domProps:{textContent:e._s(e.msg)}}),n("section",{staticClass:"inputArea"},[n("el-input",{attrs:{id:"inputmsg",placeholder:"msg",type:"textarea"},model:{value:e.inputmsg,callback:function(t){e.inputmsg=t},expression:"inputmsg"}}),n("el-button",{attrs:{type:"primary",plain:"",round:"",id:"sendmsg",icon:"el-icon-s-promotion"},on:{click:e.sendMsgToPeer}},[e._v("Send")])],1)],1),n("section",{staticClass:"videoArea"},[n("section",{staticClass:"videoBtn"},[n("el-input",{attrs:{placeholder:"Type in peer id to call",clearable:""},model:{value:e.peerId,callback:function(t){e.peerId=t},expression:"peerId"}}),n("el-button",{attrs:{type:"primary",plain:"",round:"",id:"callpeer",icon:"el-icon-phone"},on:{click:e.callPeer}},[e._v("Call")]),n("el-button",{attrs:{type:"primary",plain:"",round:"",id:"openVideo",icon:"el-icon-video-camera"},on:{click:e.setLocalVideo}},[e._v("Test Camera")])],1),n("video",{staticClass:"video",attrs:{id:"selfv",autoplay:""}}),n("video",{staticClass:"video",attrs:{id:"peerv",autoplay:""}})])])},E=[],N=(n("ac1f"),n("5319"),n("96cf"),n("1da1")),M=n("a0bc"),A=n.n(M),$={name:"Videochat",data:function(){return{peerId:null,peer:null,localStream:null,conn:null,connStatus:"Unconnected",msg:"",inputmsg:null,selfid:null}},mounted:function(){this.initializePeer()},methods:{initializePeer:function(){var e=this;this.peer=new A.a,this.peer.on("open",(function(){e.selfid=e.peer.id})),this.peer.on("connection",(function(t){e.conn=t,e.connStatus="Connected to ".concat(e.conn.peer),e.conn.on("data",(function(t){e.msg="".concat(e.msg," \n ").concat(e.conn.peer,":").concat(t)}))})),this.peer.on("call",(function(t){null==e.localStream&&e.setLocalVideo(),t.answer(e.localStream),t.on("stream",(function(e){var t=document.getElementById("peerv");t.srcObject=e}))}))},setLocalVideo:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return navigator.mediaDevices.getUserMedia=navigator.mediaDevices.getUserMedia||navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,t.next=3,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 3:e.localStream=t.sent,n=document.getElementById("selfv"),n.srcObject=e.localStream;case 6:case"end":return t.stop()}}),t)})))()},callPeer:function(){if(null==this.peerId)this.$notify({title:"Notification",message:"Please type in peer id to call!",duration:5e3,type:"warning"});else if(null==this.localStream)this.$notify({title:"Notification",message:"Please test camera first!",duration:5e3,type:"warning"});else{this.peerId=this.peerId.replace(/\s+/g,"");var e=this.peer.call(this.peerId,this.localStream);e.on("stream",(function(e){var t=document.getElementById("peerv");t.srcObject=e})),this.$notify({title:"Notification",message:"If you can't see the other side video, please click 'call' again",duration:5e3,type:"warning"})}},connectPeer:function(){var e=this;null==this.peerId?this.$notify({title:"Notification",message:"Please type in peer id to connect!",duration:5e3,type:"warning"}):(this.peerId=this.peerId.replace(/\s+/g,""),this.conn=this.peer.connect(this.peerId,{reliable:!0}),this.conn.on("open",(function(){e.connStatus="Connected to ".concat(e.conn.peer)})),this.conn.on("data",(function(t){e.msg="".concat(e.msg," \n ").concat(e.conn.peer,":").concat(t)})))},sendMsgToPeer:function(){if(null==this.conn)this.$notify({title:"Notification",message:"Please connect to peer first!",duration:5e3,type:"warning"});else{var e=this.inputmsg;this.conn.send(this.inputmsg),this.inputmsg="",this.msg="".concat(this.msg," \n ").concat(this.selfid,"(self):").concat(e)}}}},z=$,L=(n("0cb29"),Object(c["a"])(z,j,E,!1,null,"1375ff34",null)),V=L.exports,B={name:"Index",components:{Translator:S,Fintech:D,Videochat:V},data:function(){return{userLocation:"",notificationShow:!0,translatorShow:!1,iframeShow:!1,fintechShow:!0,videochatShow:!1,frameSrc:""}},mounted:function(){var e=this;this.getLocation(),setInterval((function(){e.checkVisibility()}),1e3)},methods:{checkVisibility:function(){var e=document.visibilityState,t=new Date(Date.now());"visible"==e&&(document.title="YeStock - "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds())},sendNotification:function(e){var t=e.coords.latitude>0?e.coords.latitude+" N":-e.coords.latitude+" S",n=e.coords.longitude>0?e.coords.longitude+" E":-e.coords.longitude+" W";this.userLocation="Location Safety Notification: You are now at (".concat(t,", ").concat(n,"), have access to Algorithms.")},getLocation:function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(this.sendNotification)},changeNotification:function(){this.notificationShow=!1},changePage:function(e){"translator"==e?(this.translatorShow=!0,this.iframeShow=!1,this.fintechShow=!1,this.videochatShow=!1):"fintech"==e?(this.translatorShow=!1,this.iframeShow=!1,this.fintechShow=!0,this.videochatShow=!1):"videochat"==e?(this.translatorShow=!1,this.iframeShow=!1,this.fintechShow=!1,this.videochatShow=!0):(this.translatorShow=!1,this.iframeShow=!0,this.fintechShow=!1,this.videochatShow=!1,document.getElementById("iframe001").src="")}}},U=B,R=(n("4641"),Object(c["a"])(U,f,m,!1,null,"e10bd7c6",null)),Y=R.exports;a["default"].use(p["a"]);var F=[{path:"",component:Y}],G=new p["a"]({routes:F}),H=G;a["default"].config.productionTip=!1,a["default"].use(h.a),new a["default"]({render:function(e){return e(u)},router:H}).$mount("#app")},"5e11":function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="5e11"},"85ec":function(e,t,n){},b031:function(e,t,n){"use strict";n("e228")},c664:function(e,t,n){},e228:function(e,t,n){},eb8f:function(e,t,n){}});
//# sourceMappingURL=app.07678c85.js.map