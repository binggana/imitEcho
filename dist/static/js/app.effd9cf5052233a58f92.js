webpackJsonp([1],{"+hx3":function(t,a){},"2kiP":function(t,a){},"5OHe":function(t,a){},"5Yoj":function(t,a){},BPvn:function(t,a){},HwpP:function(t,a){var i,s,e,n,o;i=window,s=i.document,e=s.documentElement,n="orientationchange"in i?"orientationchange":"resize",o=function t(){var a=e.getBoundingClientRect().width;return e.style.fontSize=5*Math.max(Math.min(a/750*20,11.2),8.55)+"px",t}(),e.setAttribute("data-dpr",i.navigator.appVersion.match(/iphone/gi)?i.devicePixelRatio:1),/iP(hone|od|ad)/.test(i.navigator.userAgent)&&(s.documentElement.classList.add("ios"),parseInt(i.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1],10)>=8&&s.documentElement.classList.add("hairline")),s.addEventListener&&(i.addEventListener(n,o,!1),s.addEventListener("DOMContentLoaded",o,!1))},NHnr:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i("fZjL"),e=i.n(s),n=i("MVMM"),o=i("Dd8w"),u=i.n(o),c=i("9rMa"),l={name:"musicbar",computed:u()({},Object(c.d)(["audio","playList","playMode"]),Object(c.b)(["audioData","audioPlayStatus"]),{iconplay:function(){return this.audio.playStatus?"icon-pause":"icon-play"}}),data:function(){return{popupVisible:!1}},watch:{audioData:function(t){var a=this;t&&this.$nextTick(function(){a.audioInit()})},audioPlayStatus:function(t){t?this.audio.ele.play():this.audio.ele.pause()}},methods:u()({},Object(c.c)(["setAudioEle","setAudioStatus","setAudioDuration","setAudioCurtime"]),{audioInit:function(){var t=this,a=this.$refs.music;this.setAudioEle(a),a.oncanplay=function(){a.play(),t.setAudioDuration(a.duration)},a.ontimeupdate=function(){var i=a.currentTime;t.setAudioCurtime(i)},a.onplay=function(){t.setAudioStatus(!0)},a.onpause=function(){t.setAudioStatus(!1)},a.onended=function(){t.setAudioStatus(!1)}},toggleList:function(){this.popupVisible=!this.popupVisible,console.log(this.$refs.music.duration)}})},r={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"music-bar"},[i("router-link",{staticClass:"thumbnailH",attrs:{to:"/detail/"+t.audio.data.channel_id}},[i("img",{attrs:{src:t.audio.data.pic_100,alt:"audio.data.name"}})]),t._v(" "),i("div",{staticClass:"audio-txt"},[i("p",{staticClass:"txt-over-hidden"},[t._v(t._s(t.audio.data.name))]),t._v(" "),i("span",{staticClass:"txt-over-hidden"},[t._v(t._s(t.audio.data.user.name))])]),t._v(" "),i("div",{staticClass:"contorls"},[i("div",{staticClass:"lists",on:{click:t.toggleList}},[i("i",{staticClass:"icon icon-list"})]),t._v(" "),i("div",{staticClass:"play",on:{click:function(a){t.setAudioStatus(!t.audio.playStatus)}}},[i("i",{staticClass:"icon",class:t.iconplay})]),t._v(" "),t._m(0)]),t._v(" "),i("audio",{ref:"music",attrs:{src:t.audio.data.source,autoplay:""}})],1),t._v(" "),i("mt-popup",{staticClass:"play-list",attrs:{position:"bottom",modal:!1},model:{value:t.popupVisible,callback:function(a){t.popupVisible=a},expression:"popupVisible"}},[i("p",{staticClass:"title"},[t._v("播放列表"),i("span",[t._v("("+t._s(t.playList.length)+")首")])]),t._v(" "),i("ul",{staticClass:"lists-box"},t._l(t.playList,function(a,s){return i("li",{key:s,class:[a.channel_id==t.audio.data.channel_id?"active":""]},[t._v(t._s(a.name))])}))])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"next"},[a("i",{staticClass:"icon icon-next"})])}]};var d={name:"App",data:function(){return{isOpen:!0}},components:{MusicBar:i("VU/8")(l,r,!1,function(t){i("5Yoj")},"data-v-34999bdf",null).exports}},p={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{class:{open:this.isOpen},attrs:{id:"app"}},[a("set-title",[this._v("echo回声 | 潮流音乐生活方式-3D音乐 弹幕社交 趣味铃声 变声录音 KTV")]),this._v(" "),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1),this._v(" "),a("music-bar")],1)},staticRenderFns:[]};var v=i("VU/8")(d,p,!1,function(t){i("2kiP")},null,null).exports,m=i("/ocq"),f={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("mt-swipe",{attrs:{auto:5e3,"show-indicators":this.swiperDatas.length>1}},this._l(this.swiperDatas,function(t,i){return a("mt-swipe-item",{key:i},[a("img",{attrs:{src:t.url,alt:"item.alt"}})])}))],1)},staticRenderFns:[]};var h={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("ul",{staticClass:"lists clearfix"},t._l(t.listsData,function(a,s){return i("li",{key:s},[i("router-link",{attrs:{to:"/detail/"+a.detailId}},[i("div",{staticClass:"thumbnailW"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.img,expression:"item.img"}]})]),t._v(" "),a.tagColor?i("div",{staticClass:"tags-box"},[i("span",{staticClass:"tag",class:a.tagColor})]):t._e(),t._v(" "),a.collection?i("div",{staticClass:"collection-box"},[i("span",{staticClass:"collection"})]):t._e()]),t._v(" "),i("div",{staticClass:"playlist-txt"},[i("p",{staticClass:"txt-over-hidden"},[t._v(t._s(a.title))]),t._v(" "),a.channel?i("div",{staticClass:"channel-box"},[i("router-link",{staticClass:"txt-over-hidden",attrs:{to:"/channel/"+a.channel.id}},[t._v(t._s(a.channel.txt))]),t._v(" "),i("span",{staticClass:"txt-sm-grey"},[t._v("频道")])],1):t._e()])],1)}))])},staticRenderFns:[]};var _={data:function(){return{indexSwiper:[],lists:[],page:0,loading:!1}},components:{Banner:i("VU/8")({name:"banner",props:["swiperDatas"]},f,!1,function(t){i("BPvn")},null,null).exports,RecommandList:i("VU/8")({name:"RecommandList",props:["listsData"]},h,!1,function(t){i("glLu")},"data-v-19162d7d",null).exports},created:function(){var t=this;this.$axios.get("https://www.easy-mock.com/mock/5b34aeb8e1815c19167faa21/imitecho/").then(function(a){console.log(a.data.data.banner),t.indexSwiper=a.data.data.banner}).catch(function(t){alert(t)});this.$axios.post("https://www.easy-mock.com/mock/5b34aeb8e1815c19167faa21/imitecho/reclists",{page:this.page}).then(function(a){t.lists=a.data.lists,t.page++}).catch(function(t){alert(t)})},methods:{loadMore:function(){var t=this;console.log(this.page,this.loading),this.loading=!0,this.$axios.post("https://www.easy-mock.com/mock/5b34aeb8e1815c19167faa21/imitecho/reclists",{page:this.page}).then(function(a){a.data.lists.forEach(function(a){t.lists.push(a)}),t.page++,t.loading=!1}).catch(function(a){alert(a),t.loading=!1})}}},g={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("set-title",[t._v("首页--为您推荐")]),t._v(" "),i("banner",{staticClass:"index-banner",attrs:{swiperDatas:t.indexSwiper}}),t._v(" "),i("div",{staticClass:"recommand"},[i("h2",{staticClass:"title"},[t._v("echo每日推荐")]),t._v(" "),i("div",{staticClass:"lists"},[i("div",{staticClass:"lists-time"},[t._v("12分钟前推荐")]),t._v(" "),i("recommand-list",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],attrs:{listsData:t.lists,"infinite-scroll-disabled":"loading","infinite-scroll-distance":"10"}}),t._v(" "),i("mt-spinner",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{type:"triple-bounce",color:"#7DD97F"}})],1)])],1)},staticRenderFns:[]};var C=i("VU/8")(_,g,!1,function(t){i("c8wx")},"data-v-28cbb496",null).exports,b={data:function(){return{mtitle:null,userData:{},detailData:{},danmuOn:!0}},computed:u()({},Object(c.d)(["audio","playList","playMode"]),Object(c.b)(["playProgress","audioPlayStatus"]),{isPause:function(){return!this.audio.playStatus}}),created:function(){this.getDatas()},methods:u()({toggleDanmu:function(){this.danmuOn=!this.danmuOn},getDatas:function(){var t=this,a=this.$route.params.id;this.$axios.get("https://www.easy-mock.com/mock/5b34aeb8e1815c19167faa21/imitecho/echoindex").then(function(i){a=a>5?a%5:a;var s=i.data.data[a].sound;t.detailData=s,t.userData=s.user,t.setAudioData(s),t.setPlaylist(s),console.log(s),console.log(t.userData),t.mtitle=s.name}).catch(function(t){console.log(t)})}},Object(c.c)(["setAudioData","setAudioStatus","setPlaylist"]),{beat:function(t){console.log(t.changedTouches[0].pageX,window.innerWidth);var a=(t.changedTouches[0].pageX/window.innerWidth).toFixed(2);this.audio.ele.currentTime=a*this.audio.duration}})},y={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[t.mtitle?i("set-title",[t._v(t._s(t.mtitle))]):t._e(),t._v(" "),i("div",{staticClass:"top"},[i("div",{staticClass:"userinfo"},[i("div",{staticClass:"avatar-box"},[i("div",{staticClass:"avatar"},[i("img",{attrs:{src:t.audio.data.user.avatar_50,alt:t.audio.data.user.name}})]),t._v(" "),t.userData.famous_icon?i("div",{staticClass:"famous-tag"},[i("img",{attrs:{src:t.userData.famous_icon}})]):t._e()]),t._v(" "),i("span",{staticClass:"txt-over-hidden"},[t._v(t._s(t.audio.data.user.name))])]),t._v(" "),i("div",{staticClass:"fans"},[t._v("粉丝："+t._s(t._f("numConvert")(t.audio.data.user.followed_count)))])]),t._v(" "),i("div",{staticClass:"cover"},[i("div",{staticClass:"thumbnailW"},[i("img",{attrs:{src:t.audio.data.pic_500}})]),t._v(" "),i("div",{staticClass:"audioinfo"},[i("div",{staticClass:"progress",on:{touchstart:function(a){return a.stopPropagation(),t.beat(a)}}},[i("em",[t._v(t._s(t._f("numToClock")(t.audio.curTime))+" / "+t._s(t._f("numToClock")(t.audio.duration)))]),t._v(" "),i("span",{style:{width:t.playProgress+"%"}})]),t._v(" "),i("div",{staticClass:"audioinfo-box"},[i("div",{staticClass:"play-status",class:{pause:t.isPause},on:{click:function(a){t.setAudioStatus(t.isPause)}}}),t._v(" "),i("div",{staticClass:"audioname"},[i("span",[t._v(t._s(t.audio.data.name))]),t._v(" "),i("span",{staticClass:"up-info"},[i("router-link",{attrs:{to:"/"}},[t._v(t._s(t.audio.data.user.name))]),t._v("发布在"),i("router-link",{attrs:{to:"/"}},[t._v(t._s(t.audio.data.channel.name))])],1)]),t._v(" "),i("div",{staticClass:"danmu-switch",on:{click:function(a){return a.stopPropagation(),t.toggleDanmu(a)}}},[i("div",{staticClass:"switch-status",class:{on:t.danmuOn}},[t._v("弹幕")])])])])]),t._v("\n    歌单详情页--id"+t._s(t.$route.params.id)+"\n")],1)},staticRenderFns:[]};var x=i("VU/8")(b,y,!1,function(t){i("+hx3")},"data-v-bbd706f0",null).exports;n.default.use(m.a);var w=new m.a({routes:[{path:"/",name:"Index",component:C},{path:"/detail/:id",name:"Detail",component:x},{path:"*",redirect:"/"}]}),D=(i("ZsCP"),i("HwpP"),i("wSez")),k=i.n(D),P=(i("5OHe"),i("aozt")),A=i.n(P),S={created:function(){this.updateTitle()},beforeUpdate:function(){this.updateTitle()},methods:{updateTitle:function(){var t=this.$slots.default;if(!(void 0===t||t.length<1||"string"!=typeof t[0].text)){var a=t[0].text;a!==document.title&&(document.title=a)}}}},L={render:function(){this.$createElement;this._self._c;return this._e()},staticRenderFns:[]},E=i("VU/8")(S,L,!1,null,null,null).exports;n.default.use(c.a);var $={setAudioEle:function(t,a){t.audio.ele=a},setAudioData:function(t,a){t.audio.data=a},setAudioStatus:function(t,a){t.audio.playStatus=a},setAudioDuration:function(t,a){t.audio.duration=a},setAudioCurtime:function(t,a){t.audio.curTime=a},setPlaylist:function(t,a){void 0==t.playList.find(function(t){return t.channel_id==a.channel_id})&&t.playList.unshift(a)}},T=new c.a.Store({state:{audio:{ele:null,data:null,playStatus:!1,duration:0,curTime:0},playMode:"default",playList:[]},mutations:$,getters:{audioData:function(t){return t.audio.data},audioPlayStatus:function(t){return t.audio.playStatus},playProgress:function(t){return(t.audio.curTime/t.audio.duration*100).toFixed(2)}}}),O={numConvert:function(t){if(t)return t.length>=5?(t/1e4).toFixed(2)+"万":t},numToClock:function(t){if(t>=1){var a=~~(t/60),i=Math.round(t)%60;return(a=a>10?a:"0"+a)+":"+(i=i>=10?i:"0"+i)}return"00:00"}};n.default.use(k.a),n.default.prototype.$axios=A.a,n.default.component("setTitle",E),e()(O).forEach(function(t){n.default.filter(t,O[t])}),n.default.config.productionTip=!1,new n.default({el:"#app",store:T,router:w,components:{App:v},template:"<App/>"})},ZsCP:function(t,a){},c8wx:function(t,a){},glLu:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.effd9cf5052233a58f92.js.map