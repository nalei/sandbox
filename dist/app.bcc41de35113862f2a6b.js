!function(t){function e(e){for(var a,r,s=e[0],l=e[1],u=e[2],m=0,p=[];m<s.length;m++)r=s[m],i[r]&&p.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);for(c&&c(e);p.length;)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={0:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;o.push([351,1]),n()}({144:function(t,e,n){},351:function(t,e,n){"use strict";n.r(e);n(144),n(145);var a=n(11),i=n(139),o=n.n(i);a.a.use(o.a);var r=n(35),s=n(98),l=(n(349),n(350),n(140));r.c.add(s.a,s.b),a.a.component("font-awesome-icon",l.a);var u=n(36),c=n.n(u),m=n(141),p=n.n(m);function d(t){t.title;var e=t.message,n=t.type;t.timeout,t.cb;return n===c.a.types.warn&&(n="warning"),new p.a({layout:"topRight",theme:"bootstrap-v4",timeout:2e3,text:e,type:n}).show()}var f={success:d,error:d,info:d,warn:d};a.a.use(c.a,f);var v={name:"App",metaInfo:{titleTemplate:"%s | Vue SSR Boilerplate",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}]},data:function(){return{slide:0,sliding:null,message:null}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}}},b=n(34),h=Object(b.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"header"},[n("b-container",[n("div",{staticClass:"d-flex justify-content-between"},[n("h3",{staticClass:"text-muted"},[t._v("\n          vue-ssr-boilerplate\n        ")]),t._v(" "),n("b-nav",{staticClass:"nav-pills float-right"},[n("b-nav-item",{attrs:{to:"/",exact:""}},[t._v("\n            Home\n          ")]),t._v(" "),n("b-nav-item",{attrs:{to:"/about"}},[t._v("\n            About\n          ")]),t._v(" "),n("b-nav-item",{attrs:{to:"/contact"}},[t._v("\n            Contact\n          ")])],1)],1)])],1),t._v(" "),n("div",{staticClass:"container"},["home"===t.$route.name?n("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel1",controls:"",indicators:"",background:"#ababab",interval:4e3,"img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[n("b-carousel-slide",{attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":"https://picsum.photos/1024/480/?image=52"}}),t._v(" "),n("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=54"}},[n("h1",[t._v("Hello world!")])]),t._v(" "),n("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=58"}}),t._v(" "),n("b-carousel-slide",[n("img",{staticClass:"d-block img-fluid w-100",attrs:{slot:"img",width:"1024",height:"480",src:"https://picsum.photos/1024/480/?image=55",alt:"image slot"},slot:"img"})]),t._v(" "),n("b-carousel-slide",{attrs:{caption:"Blank Image","img-blank":"","img-alt":"Blank image"}},[n("p",[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut\n          pellentesque ut lacus vel interdum.\n        ")])])],1):t._e(),t._v(" "),t.message?n("b-alert",{attrs:{variant:""+t.message.type}},[t._v("\n      "+t._s(t.message.body)+"\n    ")]):t._e(),t._v(" "),n("router-view")],1),t._v(" "),n("div",{staticClass:"footer"},[n("b-container",[n("p",[n("font-awesome-icon",{attrs:{icon:"code"}}),t._v(" with\n        "),n("font-awesome-icon",{attrs:{icon:"heart"}}),t._v(" by mycompany.com\n      ")],1)])],1)])},[],!1,null,null,null).exports,g=n(99),_=n(142),w=n.n(_),y=n(143),x=n.n(y),S={name:"Home",metaInfo:{title:"Home",meta:[{name:"description",content:"Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta."}]},notifications:{showSuccessMsg:{type:c.a.types.success,title:"Hello there",message:"That's the success!"},showInfoMsg:{type:c.a.types.info,title:"Hey you",message:"Here is some info for you"},showWarnMsg:{type:c.a.types.warn,title:"Wow, man",message:"That's the kind of warning"},showErrorMsg:{type:c.a.types.error,title:"Wow-wow",message:"That's the error"}},methods:{openSwal:function(){x()({title:"Yo!",text:"Yeaaah!",type:"success",confirmButtonText:"Cool"})}}},C=Object(b.a)(S,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row marketing"},[n("h4",[t._v("HTML5 Boilerplate")]),t._v(" "),n("p",[t._v("\n    HTML5 Boilerplate is a professional front-end template for building fast,\n    robust, and adaptable web apps or sites.\n  ")]),t._v(" "),n("h4",[t._v("Sass")]),t._v(" "),n("p",[t._v("\n    Sass is the most mature, stable, and powerful professional grade CSS\n    extension language in the world.\n  ")]),t._v(" "),n("h4",[t._v("Bootstrap")]),t._v(" "),n("p",[t._v("\n    Sleek, intuitive, and powerful mobile first front-end framework for faster\n    and easier web development.\n  ")]),t._v(" "),n("b-btn",{staticClass:"mr-1",on:{click:t.openSwal}},[t._v("\n    Sweet !\n  ")]),t._v(" "),n("b-btn",{staticClass:"mr-1",attrs:{variant:"success"},on:{click:function(e){return t.showSuccessMsg()}}},[t._v("\n    Noty !\n  ")]),t._v(" "),n("b-btn",{staticClass:"mr-1",attrs:{variant:"info"},on:{click:function(e){return t.showInfoMsg()}}},[t._v("\n    Noty !\n  ")]),t._v(" "),n("b-btn",{staticClass:"mr-1",attrs:{variant:"warning"},on:{click:function(e){return t.showWarnMsg()}}},[t._v("\n    Noty !\n  ")]),t._v(" "),n("b-btn",{staticClass:"mr-1",attrs:{variant:"danger"},on:{click:function(e){return t.showErrorMsg()}}},[t._v("\n    Noty !\n  ")])],1)},[],!1,null,null,null).exports,k={name:"About",metaInfo:{title:"About",meta:[{name:"description",content:"Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat."}]}},q=Object(b.a)(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"mb-4"},[t._v("\n    "+t._s(t.$t("about.title"))+"\n  ")]),t._v(" "),n("p",[t._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n    est laborum.\n  ")]),t._v(" "),n("p",[t._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n    est laborum.\n  ")]),t._v(" "),n("b-container",[n("b-row",{staticClass:"justify-content-md-center"},[n("b-col",{staticClass:"mb-4",attrs:{md:"8"}},[n("b-card",{attrs:{header:"Title"}},[n("p",[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n            enim ad minim veniam, quis nostrud exercitation ullamco laboris\n            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n            reprehenderit in voluptate velit esse cillum dolore eu fugiat\n            nulla pariatur. Excepteur sint occaecat cupidatat non proident,\n            sunt in culpa qui officia deserunt mollit anim id est laborum.\n          ")])])],1)],1)],1)],1)},[],!1,null,null,null).exports,I={name:"Contact",metaInfo:{title:"Contact",meta:[{name:"description",content:"Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim."}]},data:function(){return{form:{email:"",name:"",food:null,checked:!1,secret:"S3CR3T"},foods:[{text:"Select One",value:null},"Carrots","Beans","Tomatoes","Corn"]}},methods:{onSubmit:function(t){t.preventDefault(),alert(JSON.stringify(this.form))}}},T=Object(b.a)(I,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"mb-4"},[t._v("\n    "+t._s(t.$t("contact.title"))+"\n  ")]),t._v(" "),n("b-form",{staticClass:"mb-4",on:{submit:t.onSubmit}},[n("b-form-group",{attrs:{id:"exampleInputGroup1",label:"Email address:","label-for":"exampleInput1",description:"We'll never share your email with anyone else."}},[n("b-form-input",{attrs:{id:"exampleInput1",type:"email",required:"",placeholder:"Enter email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),n("b-form-group",{attrs:{id:"exampleInputGroup2",label:"Your Name:","label-for":"exampleInput2"}},[n("b-form-input",{attrs:{id:"exampleInput2",type:"text",required:"",placeholder:"Enter name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("b-form-group",{attrs:{id:"exampleInputGroup3",label:"Food:","label-for":"exampleInput3"}},[n("b-form-select",{attrs:{id:"exampleInput3",options:t.foods,required:""},model:{value:t.form.food,callback:function(e){t.$set(t.form,"food",e)},expression:"form.food"}})],1),t._v(" "),n("b-form-group",{attrs:{id:"exampleGroup4"}},[n("b-form-checkbox",{attrs:{id:"exampleInput4"},model:{value:t.form.checked,callback:function(e){t.$set(t.form,"checked",e)},expression:"form.checked"}},[t._v("\n        Check me out\n      ")])],1),t._v(" "),n("b-btn",{attrs:{type:"submit",variant:"primary"}},[t._v("\n      Submit\n    ")]),t._v(" "),n("b-btn",{attrs:{type:"reset",variant:"secondary"}},[t._v("\n      Reset\n    ")])],1)],1)},[],!1,null,null,null).exports;a.a.use(g.a),a.a.use(w.a);var E=n(100);a.a.use(E.a);var O=n(101),j={about:{title:"About"},contact:{title:"Contact"}},M={about:{title:"Qui-sommes-nous"},contact:{title:"Contactez-nous"}};a.a.use(O.a);var $,A,N,B=($=new g.a({linkActiveClass:"open active",mode:"history",scrollBehavior:function(){return{y:0}},routes:[{path:"/",name:"home",component:C},{path:"/about",name:"about",component:q},{path:"/contact",name:"contact",component:T}]}),A=new E.a.Store({state:{}}),N=new O.a({locale:"en",messages:{en:j,fr:M}}),{app:new a.a({router:$,store:A,i18n:N,render:function(t){return t(h)}}),router:$,store:A}),H=B.app,L=B.router,P=B.store;window.__INITIAL_STATE__&&P.replaceState(window.__INITIAL_STATE__),L.onReady(function(){H.$mount("#app")})}});
//# sourceMappingURL=app.bcc41de35113862f2a6b.js.map