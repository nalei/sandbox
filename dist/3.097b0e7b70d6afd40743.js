(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{382:function(t,e,a){},383:function(t,e,a){},384:function(t,e,a){"use strict";var n=a(382);a.n(n).a},385:function(t,e,a){"use strict";var n=a(383);a.n(n).a},386:function(t,e,a){"use strict";a.r(e);var n=[37.782685,-122.411364],s={props:{latitude:{type:Number,default:function(){return n[0]}},longitude:{type:Number,default:function(){return n[1]}},zoom:{type:Number,default:function(){return 14}}},mounted:function(){this.$map=new google.maps.Map(document.getElementById("map"),{center:new google.maps.LatLng(this.latitude,this.longitude),zoom:this.zoom})}},i=(a(384),a(48)),r=Object(i.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"map",attrs:{id:"map"}})},[],!1,null,null,null).exports,o=a(102);function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.forEach(function(e){u(t,e,a[e])})}return t}function u(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var c={name:"Layout",components:{mapComponent:r},data:function(){return{slide:0,sliding:null}},computed:l({},Object(o.c)({posts:"posts",loading:"loading"})),created:function(){this.fetchPosts("all")},methods:l({},Object(o.b)({fetchPosts:"FETCH_POSTS"}),{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}})},m=(a(385),{name:"Home",components:{layout:Object(i.a)(c,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("section",{staticClass:"mapper"},[a("div",{staticClass:"mapper-left"},[a("div",{staticClass:"mapper-left_wrapper"},[a("map-component")],1)]),a("aside",{staticClass:"mapper-right"},[a("div",{staticClass:"mapper-right_wrapper"},[a("b-container",{attrs:{fluid:""}},t._l(t.posts,function(e){return a("b-form-row",{key:e.id},["default"!=e.thumbnail&&"self"!=e.thumbnail?a("div",{staticClass:"media-left"},[a("a",{attrs:{href:e.url}},[a("img",{staticClass:"media-object",attrs:{src:e.thumbnail}})])]):t._e(),a("div",{staticClass:"media-body"},[a("p",{staticClass:"meta"},[t._v("Published"),a("span",{staticClass:"meta-bit"},[t._v(t._s(e.created))]),t._v("at"),a("span",{staticClass:"meta-bit"},[t._v(t._s(e.domain))])]),a("h4",[a("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.title))])]),a("p",{staticClass:"stats"},[a("font-awesome-icon",{attrs:{icon:["far","thumbs-up"]}}),a("span",[t._v(t._s(e.score))]),a("font-awesome-icon",{attrs:{icon:["far","comment"]}}),a("span",[t._v(t._s(e.num_comments))])],1)])])}),1)],1)])])])},[],!1,null,null,null).exports},metaInfo:{title:"Home",meta:[{name:"description",content:"Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta."}]}}),p=Object(i.a)(m,function(){var t=this.$createElement;return(this._self._c||t)("layout")},[],!1,null,null,null);e.default=p.exports}}]);
//# sourceMappingURL=3.097b0e7b70d6afd40743.js.map