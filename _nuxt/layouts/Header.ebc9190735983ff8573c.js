webpackJsonp([3],{"3SG8":function(a,t,n){"use strict";(function(a){t.a={data:function(){return{menuOpen:!1}},mounted:function(){this.scrollBottom(),a("[data-scroll-to]").click(function(t){t.preventDefault();var n=a(this).attr("data-scroll-to");!function(t){var n=0;if("number"==typeof t)n=t;else{var e=t.offset();n=e.top}a("body,html").animate({scrollTop:n},400)}(a("#"+n))})},methods:{scrollBottom:function(){a(".scroll-down").on("click",function(){var t=a(this);a("body, html").animate({scrollTop:t.closest("section").next().offset().top},1e3)})},toggleMenu:function(a){this.menuOpen=!this.menuOpen}}}}).call(t,n("7t+N"))},QqzQ:function(a,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=n("3SG8"),r=n("f4Du"),o=!1;var i=function(a){o||n("ZFCh")},s=n("VU/8")(e.a,r.a,!1,i,null,null);s.options.__file="layouts/Header.vue",t.default=s.exports},ZFCh:function(a,t,n){var e=n("m0V5");"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);n("rjj0")("06a2add4",e,!1,{sourceMap:!1})},f4Du:function(a,t,n){"use strict";var e=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("header",{staticClass:"header transp"},[n("nav",{staticClass:"navbar navbar-inverse navbar-static-top"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-header"},[n("button",{staticClass:"navbar-toggle",class:{collapse:a.menuOpen},attrs:{type:"button","data-target":"#navbar"},on:{click:function(t){return t.preventDefault(),a.toggleMenu(t)}}},[n("span"),n("span"),n("span"),n("span")]),a._m(0)]),n("div",{staticClass:"navbar-collapse",class:{collapsed:a.menuOpen},attrs:{id:"navbar"}},[a._m(1)]),a._m(2)])])])};e._withStripped=!0;var r={render:e,staticRenderFns:[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"nav navbar-brand"},[t("a",{staticClass:"logo nuxt-link-exact-active nuxt-link-active",attrs:{href:"/"}},[this._v("ROBOT_CALLS")]),t("p",[this._v("автоматизация общения с клиентами")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("ul",{staticClass:"nav navbar-nav"},[t("li",[t("a",{attrs:{href:"#","data-scroll-to":"slide1","data-target-analytic":"menuhow"}},[this._v("Как это работает")])]),t("li",[t("a",{attrs:{href:"#","data-scroll-to":"slide2","data-target-analytic":"menuexamples"}},[this._v("Варианты использования")])]),t("li",[t("a",{attrs:{href:"#","data-scroll-to":"slide3","data-target-analytic":"menuprice"}},[this._v("Цена")])]),t("li",[t("a",{attrs:{href:"#","data-scroll-to":"slide4","data-target-analytic":"menuclients"}},[this._v("Клиенты")])]),t("li",[t("a",{attrs:{href:"#","data-scroll-to":"slide5","data-target-analytic":"menurequest",onclick:"yaCounter49657954.reachGoal('kanrequest'); return true;"}},[this._v("Подключение")])])])},function(){var a=this.$createElement,t=this._self._c||a;return t("ul",{staticClass:"nav navbar-nav navbar-right"},[t("li",[t("a",{attrs:{href:"tel:+74999384013","data-target-analytic":"phone"}},[this._v("+7 (499) 938-40-13")])])])}]};t.a=r},m0V5:function(a,t,n){(a.exports=n("FZ+f")(!1)).push([a.i,".header.transp{width:100%;position:relative}.navbar-toggle{display:inline-block;position:absolute;width:30px;height:23px;cursor:pointer;border:none;border-color:transparent;right:15px;top:25px;padding:0;margin:0}.navbar-toggle span{display:block;position:absolute;height:3px;width:100%;background:#fff;opacity:1;left:0;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:.25s ease-in-out;transition:.25s ease-in-out}.navbar-toggle span:first-child{top:0}.navbar-toggle span:nth-child(2),.navbar-toggle span:nth-child(3){top:10px}.navbar-toggle span:nth-child(4){top:20px}.navbar-toggle.collapse span:first-child{top:10px;width:0;left:50%}.navbar-toggle.collapse span:nth-child(2){-webkit-transform:rotate(45deg);transform:rotate(45deg)}.navbar-toggle.collapse span:nth-child(3){-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.navbar-toggle.collapse span:nth-child(4){top:10px;width:0;left:50%}.navbar-collapse{overflow:hidden;height:0}.navbar-collapse,.navbar-collapse.collapsed{-webkit-transition:height .25s;transition:height .25s}.navbar-collapse.collapsed{height:230px}@media (min-width:768px){.navbar-collapse{height:auto}.navbar-toggle{display:none}}.header.transp .navbar-inverse{background-color:#1d0c44;border:none;border-color:transparent;margin-bottom:0}.header.transp .navbar-collapse{border-top:none;-webkit-box-shadow:none;box-shadow:none}.navbar-inverse .navbar-toggle:focus,.navbar-inverse .navbar-toggle:hover{background:transparent}.navbar-inverse .navbar-nav>li>a{color:#fff;-webkit-transition:color .2s;transition:color .2s}.navbar-inverse .navbar-nav>li>a:hover{color:#8b61ff}.navbar-brand{height:75px;padding:25px 15px}.navbar-brand a.logo{display:block;color:#fff;font-size:16px;font-weight:600;letter-spacing:.15em;margin-bottom:10px}.navbar-brand a.logo:hover{text-decoration:none}.navbar-brand p{font-size:12px;color:#8b61ff;margin-bottom:5px;line-height:1}.navbar-right>li>a{font-size:16px;font-weight:600;letter-spacing:.15em;padding:0 15px}@media (min-width:768px){.header.transp{position:absolute;top:30px}.header.transp .navbar-collapse{float:left}.navbar-brand{padding:15px}.navbar-brand p{max-width:165px;line-height:1.2}.navbar-nav>li>a{font-size:14px}.navbar-right>li>a{font-size:16px;padding-top:15px;padding-bottom:15px}}@media (min-width:768px) and (max-width:1200px){.navbar-nav>li>a{padding-left:10px;padding-right:10px;font-size:12px}}@media (min-width:768px) and (max-width:992px){.navbar-right>li>a{padding-top:0;margin-right:17px}}",""])}});