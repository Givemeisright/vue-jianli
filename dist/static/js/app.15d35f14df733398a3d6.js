webpackJsonp([1],{"1uuo":function(t,e){},COyS:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("/5sW"),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var a={name:"App",components:{HelloWorld:n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},o,!1,function(t){n("1uuo")},"data-v-d8ec41bc",null).exports},data:function(){return{code:"",finalCode:"\n    /*您好，我是LXG欢迎来到我的页面*/\n    /*为了方便您查看我将持续编辑该页面*/\n    /* 首先给所有元素加上过渡效果 */\n    * {\n      transition: all .3s;\n    }\n    /* 白色背景太单调了，我们来点背景 */\n    html {\n      color: rgb(222,222,222); background: rgb(0,43,54);\n    }\n    /* 文字离边框太近了 */\n    .styleEditor {\n      padding: .5em;\n      border: 1px solid;\n      margin: .5em;\n      overflow: auto;\n      width: 45vw; height: 90vh;\n    }\n    /* 代码高亮 */\n    .token.selector{ color: rgb(133,153,0); }\n    .token.property{ color: rgb(187,137,0); }\n    .token.punctuation{ color: yellow; }\n    .token.function{ color: rgb(42,161,152); }\n    /* 加点 3D 效果呗 */\n    html{\n      perspective: 1000px;\n    }\n    .styleEditor {\n      position: fixed; left: 0; top: 0;\n      -webkit-transition: none;\n      transition: none;\n      -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n              transform: rotateY(10deg) translateZ(-100px) ;\n    }\n    /* 接下来我给自己准备一个编辑器 */\n    .resumeEditor{\n      position: fixed; right: 0; top: 0;\n      padding: .5em;  margin: .5em;\n      width: 48vw; height: 90vh;\n      border: 1px solid;\n      background: white; color: #222;\n      overflow: auto;\n    }\n      "}},created:function(){var t=this,e=0;setInterval(function(){t.code=t.finalCode.substring(0,e),e+=1},10)},computed:{styleCode:function(){return"<style>"+this.code+"</style>"}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"app"}},[n("pre",[t._v(t._s(t.code))])]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.styleCode)}},[n("StyleEditor",{ref:"styleEditor",attrs:{code:t.currentStyle}}),t._v(" "),n("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:t.currentMarkdown,enableHtml:t.enableHtml}})],1)])},staticRenderFns:[]};var i=n("VU/8")(a,s,!1,function(t){n("COyS")},null,null).exports;r.a.config.productionTip=!1,new r.a({el:"#app",render:function(t){return t(i)}})}},["NHnr"]);
//# sourceMappingURL=app.15d35f14df733398a3d6.js.map