(window.webpackJsonp=window.webpackJsonp||[]).push([[11,5,9,12,13],{311:function(t,e,n){},312:function(t,e,n){},313:function(t,e,n){"use strict";n(311)},314:function(t,e,n){"use strict";n(312)},315:function(t,e,n){"use strict";n.r(e);n(29);var r={props:{name:{type:String},job:{type:String},category:{type:String},fontColor:{type:String,default:"white"},left:{type:Boolean,default:!1},invert:{type:Boolean,default:!1}},data:function(){return{wrapperClass:"p-".concat(this.$parent.padding,"\n            flex flex-col justify-center"),nameSpan:"text-sm font-display uppercase font-bold inline",categorySpan:"font-sans text-sm"}},computed:{alignContent:function(){return this.left?"text-left":"text-center"},roundedFooter:function(){return"border-0 rounded-b-none rounded-".concat(this.$parent.borderRadius,"-inner border-top-").concat(this.$parent.primaryColor)},invertClass:function(){return this.invert?"bg-".concat(this.$parent.primaryColor):"text-".concat(this.$parent.primaryColor)}}},o=n(9),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.wrapperClass+" "+t.roundedFooter+" "+t.alignContent+" "},[t.name&&t.job?n("span",{class:""+t.nameSpan},[t._v("\n    "+t._s(t.job)+" @ "+t._s(t.name)+"\n  ")]):n("span",{class:""+t.nameSpan},[t._v("\n    "+t._s(t.name)+"\n  ")]),t._v(" "),t.category?n("div",{class:""+t.categorySpan},[t._v(t._s(t.category))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},316:function(t,e,n){"use strict";n.r(e);var r=n(9),component=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("header",{staticClass:"flex"})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(218).default})},317:function(t,e,n){"use strict";n.r(e);n(29);var r={props:{center:{type:Boolean,default:!1}},render:function(t){var e="text-sm border-0 rounded-t-none rounded-".concat(this.$parent.borderRadius,"-inner"),n=this.center?"flex items-center justify-center text-center":"flex items-center justify-between";return t("div",{class:"".concat(e," ").concat(n," font-sans p-").concat(this.$parent.padding)},this.$slots.default)}},o=n(9),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.default=component.exports},318:function(t,e,n){"use strict";n.r(e);var r={props:{src:{type:String},gutter:{type:Boolean,default:!1},sharp:{type:Boolean,default:!1}},computed:{hasImage:function(){return this.src}},render:function(t){var e=this.gutter?"p-".concat(this.$parent.padding):"",n="w-full pb-2 ".concat(e),img=t("img",{attrs:{src:this.src},class:this.sharp?"":"rounded-".concat(this.$parent.borderRadius,"-inner mx-auto")});return this.hasImage?t("div",{class:n,id:"card-image"},[img]):void 0}},o=n(9),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.default=component.exports},319:function(t,e,n){"use strict";n.r(e);n(29);var r={props:{gradient:{type:Boolean,default:!1}},render:function(t){var e=this.gradient?"bg-gradient-to-b from-dirtyBlue via-dirtyBluePink to-dirtyPink text-white":"";return t("div",{class:"flex-1 p-".concat(this.$parent.padding," ").concat(e),id:"card-body"},this.$slots.default)}},o=n(9),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.default=component.exports},320:function(t,e,n){"use strict";n.r(e);n(29),n(217);var r={props:{padding:{type:Number,default:0},primaryColor:{type:String,default:"gray-100"},secondaryColor:{type:String,default:"gray-300"},cardBg:{type:String,default:"gray-100"},borderWidth:{type:Number,default:0},borderRadius:{type:String,default:"lg"}},computed:{myClass:function(){return"shadow flex flex-col bg-".concat(this.cardBg," border-").concat(this.borderWidth," rounded-").concat(this.borderRadius," border-").concat(this.primaryColor," overflow-hidden")}},render:function(t){return t("div",{class:this.myClass,props:this.$options.propsData},[this.$slots.header,this.$slots.default,this.$slots.footer])}},o=n(9),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.default=component.exports},322:function(t,e,n){},323:function(t,e,n){"use strict";n.r(e);var r={},o=n(9),component=Object(o.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-col align-middle justify-center z-10"},[e("h1",{staticClass:"text-4xl font-bold "},[this._v("\n        About me\n      ")])])}],!1,null,null,null);e.default=component.exports},324:function(t,e,n){"use strict";n.r(e);var r={},o=n(9),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative flex items-top justify-center min-h-screen bg-transparent sm:items-center sm:pt-0"},[n("div",{staticClass:"max-w-6xl mx-auto sm:px-6 lg:px-8"},[n("div",{staticClass:"overflow-hidden"},[n("div",{staticClass:"grid grid-cols-1 md:grid-cols-2"},[n("div",{staticClass:"p-6 mr-2 sm:rounded-lg"},[n("h1",{staticClass:"text-4xl text-left sm:text-5xl text-current font-extrabold tracking-tight"},[t._v("\n            Get in touch\n          ")]),t._v(" "),n("p",{staticClass:"text-normal text-left text-lg sm:text-2xl font-medium text-current mt-2"},[t._v("\n            Fill in the form to start a conversation\n          ")]),t._v(" "),n("div",{staticClass:"flex items-center mt-4 text-current"},[n("svg",{staticClass:"w-8 h-8 stroke-current ",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",viewBox:"0 0 24 24"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"}})]),t._v(" "),n("div",{staticClass:"ml-8 text-md text-left tracking-wide font-semibold w-40"},[t._v("\n              +44 7478701027\n            ")])]),t._v(" "),n("div",{staticClass:"flex items-center mt-4 text-current"},[n("svg",{staticClass:"w-8 h-8 stroke-current",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",viewBox:"0 0 24 24"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}})]),t._v(" "),n("div",{staticClass:"ml-8 text-md text-left tracking-wide font-semibold w-40"},[t._v("\n              co851002@gmail.com\n            ")])])]),t._v(" "),t._m(0)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"p-6 flex flex-col justify-center"},[n("div",{staticClass:"flex flex-col"},[n("label",{staticClass:"hidden",attrs:{for:"name"}},[t._v("Full Name")]),t._v(" "),n("input",{staticClass:"w-100 mt-2 py-3 px-3 rounded-lg bg-current border border-gray-400 dark:border-gray-700 text-current font-semibold focus:border-indigo-500 focus:outline-none",attrs:{type:"name",name:"name",id:"name",placeholder:"Full Name"}})]),t._v(" "),n("div",{staticClass:"flex flex-col mt-2"},[n("label",{staticClass:"hidden",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),n("input",{staticClass:"w-100 mt-2 py-3 px-3 rounded-lg bg-current border border-gray-400 dark:border-gray-700 text-current font-semibold focus:border-indigo-500 focus:outline-none",attrs:{type:"email",name:"email",id:"email",placeholder:"Email"}})]),t._v(" "),n("div",{staticClass:"flex flex-col mt-2"},[n("label",{staticClass:"hidden",attrs:{for:"tel"}},[t._v("Number")]),t._v(" "),n("input",{staticClass:"w-100 mt-2 py-3 px-3 rounded-lg bg-current border border-gray-400 dark:border-gray-700 text-current font-semibold focus:border-indigo-500 focus:outline-none",attrs:{type:"tel",name:"tel",id:"tel",placeholder:"Telephone Number"}})]),t._v(" "),n("button",{staticClass:"md:w-full mt-4 dark:text-christo-dark-2 dark:bg-christo-light-1 text-christo-light-1 bg-christo-dark-2 hover:bg-christo-dark-2 font-bold py-3 px-6 rounded-lg over:christo-dark-2 hover:text-christo-light-1 border-gray-900 transition ease-in-out duration-300",attrs:{type:"submit"}},[t._v("\n            Submit\n          ")])])}],!1,null,null,null);e.default=component.exports},325:function(t,e,n){"use strict";n.r(e);n(35);var r=n(74),o=(n(41),n(7)),l={layout:"blog-layout",data:function(){return{page:0,limit:6,articles:[],experience:[]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:t.articles=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{fetchData:function(){return console.log(this.$content),this.$content("articles").limit(this.limit).skip(this.limit*this.page).sortBy("modifiedAt","desc").fetch()},infiniteHandler:function(t){var e=this;setTimeout(Object(o.a)(regeneratorRuntime.mark((function n(){var o,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.page+=1,n.next=3,e.fetchData();case 3:(o=n.sent).length>0?((l=e.articles).push.apply(l,Object(r.a)(o)),console.log("more"),t.loaded()):t.complete();case 5:case"end":return n.stop()}}),n)}))),2e3)}}},c=(n(313),n(9)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("TheHeader"),t._v(" "),n("div",{staticClass:"max-w-6xl mx-auto p-4 mt-12"},[n("h1",{staticClass:"font-bold text-4xl text-center p-8"},[t._v("Projects")]),t._v(" "),n("masonry",{attrs:{cols:{default:4,1e3:3,800:2,550:1},gutter:20}},t._l(t.articles,(function(article){return n("div",{key:article.slug,staticClass:"text-black "},[n("NuxtLink",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col post",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[n("card",{staticClass:"mb-5",attrs:{padding:3,"primary-color":"christo-dark-3","secondary-color":"christo-light-3","border-radius":"lg"}},[n("card-header",{staticClass:"text-black"},[n("ul",{staticClass:"flex flex-wrap"},t._l(article.tags,(function(e){return n("li",{key:e,staticClass:"xs:w-full px-1"},[n("NuxtLink",{attrs:{to:"/blog/tag/"+e}},[n("p",{staticClass:"font-bold text-gray-600 uppercase tracking-wider font-medium text-ss"},[t._v("\n                    "+t._s(e)+"\n                  ")])])],1)})),0)]),t._v(" "),n("card-content",{staticClass:"pa-4"},[article.img?n("card-image",{staticClass:"px-4 ",attrs:{src:article.img}}):n("span",[t._v(" "+t._s(article.description)+" ")])],1),t._v(" "),n("card-footer",{attrs:{invert:"",name:article.title,job:article.job,category:article.category}})],1)],1)],1)})),0)],1),t._v(" "),n("infinite-loading",{attrs:{spinner:"spiral"},on:{infinite:t.infiniteHandler}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeader:n(316).default,CardHeader:n(317).default,CardImage:n(318).default,CardContent:n(319).default,CardFooter:n(315).default,Card:n(320).default})},326:function(t,e,n){"use strict";n.r(e);n(35);var r=n(74),o=(n(41),n(7)),l={data:function(){return{slickOptions:{slidesToShow:2,dots:!0,arrows:!1,dotsClass:"slick-dots custom-dot-class",autoplay:!0,centerPadding:"50px",fade:!1,speed:500,slidesToScroll:2,touchThreshold:5},page:0,limit:3,articles:[]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:t.articles=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{fetchData:function(){return this.$content("articles").limit(this.limit).sortBy("modifiedAt","desc").fetch()},infiniteHandler:function(t){var e=this;setTimeout(Object(o.a)(regeneratorRuntime.mark((function n(){var o,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.page+=1,n.next=3,e.fetchData();case 3:(o=n.sent).length>0?((l=e.articles).push.apply(l,Object(r.a)(o)),t.loaded()):t.complete();case 5:case"end":return n.stop()}}),n)}))),2e3)}}},c=(n(314),n(9)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{staticClass:" p-4 mt-12 max-w-6xl"},[n("h1",{staticClass:"font-bold text-4xl p-8"},[t._v("Recent Projects")]),t._v(" "),n("div",{staticClass:"wrapper flex"},t._l(t.articles,(function(article){return n("div",{key:article.slug,staticClass:"relative mx-8 border-transparent rounded-md overflow-hidden bg-current antialiased"},[n("div",{staticClass:"project shadow-lg"},[n("div",{staticClass:"tags flex absolute z-10 text-christo-light-3 w-full md:w-1/2 rounded-md  "},t._l(article.tags,(function(e){return n("div",{key:e.slug,staticClass:"2/3 py-2 px-2"},[n("p",{staticClass:"uppercase text-sm font-medium mx-1 hover:text-white"},[t._v("\n                #"+t._s(e)+"\n              ")])])})),0),t._v(" "),n("NuxtLink",{staticClass:"flex flex-1 rounted-md  ",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[n("div",{staticClass:"w-full relative"},[n("div",{staticClass:"overlay w-full"}),t._v(" "),n("div",{staticClass:"bg-white "},[n("div",{},[article.img?n("div",{staticClass:"h-64 w-full bg-cover bg-left-top antialiased ",style:{backgroundImage:"url("+article.img+")"}}):n("div",{staticClass:"h-64 w-full bg-cover bg-top antialiased bg-current "})]),t._v(" "),n("div",{staticClass:"px-4 py-4 text-left h-48 w-full flex flex-wrap content-between"},[n("div",[article.title?n("h1",{staticClass:"font-bold text-lg"},[t._v("\n                      "+t._s(article.title)+"\n                    ")]):n("h1",{staticClass:"font-bold text-lg"},[t._v("\n                      "+t._s(article.job)+"\n                    ")]),t._v(" "),article.description?n("p",{},[t._v("\n                      "+t._s(article.description)+"\n                    ")]):t._e()]),t._v(" "),n("div",{staticClass:"align-bottom"},[n("div",{staticClass:"w-full text-xs font-medium"},[t._v("\n                      NOVEMBER - 2019\n                    ")])])])])])])],1)])})),0)])])}),[],!1,null,null,null);e.default=component.exports},330:function(t,e,n){"use strict";n(322)},387:function(t,e,n){"use strict";n.r(e);n(25),n(30);var r=n(329),o=n(185),l=n.n(o),c=n(323),d=n(325),f=n(324),m=n(326),h={components:{Logo:l.a,About:c.default,Projects:d.default,Contact:f.default,Recents:m.default},data:function(){return{sections:[],slickOptions:{slidesToShow:5,arrows:!1,autoplay:!0,centerPadding:"50px",fade:!1,speed:500},slider:[{name:"html-5",src:"html-5"},{name:"css-3",src:"css-3"},{name:"Javascript",src:"javascript"},{name:"Vue",src:"vue"},{name:"Nuxt",src:"nuxt"},{name:"Tailwind",src:"tailwindcss"},{name:"AWS",src:"aws"},{name:"Node",src:"nodejs-icon"},{name:"Github",src:"github-icon"},{name:"Jamstack",src:"jamstack"},{name:"Tensorflow",src:"tensorflow"}],camera:null,scene:null,renderer:null,cube:null}},methods:{init:function(){this.$gsap;var t=this.$refs.container;this.camera=new r.d(70,t.clientWidth/t.clientHeight,.01,10),this.camera.position.z=1,this.scene=new r.e;var e=new r.a(.2,.2,.2),n=new r.c;this.mesh=new r.b(e,n),this.scene.add(this.mesh),this.renderer=new r.f({antialias:!0,alpha:!0}),this.renderer.setSize(t.clientWidth,t.clientHeight),t.appendChild(this.renderer.domElement)},animate:function(){requestAnimationFrame(this.animate),this.mesh.rotation.x+=.01,this.mesh.rotation.y+=.02,this.renderer.render(this.scene,this.camera)},goToSection:function(section,t){this.$gsap.to(window,{scrollTo:{y:section,autoKill:!1},duration:1}),t&&t.restart()}},mounted:function(){var t=this;this.sections=document.querySelectorAll("section"),this.sections.forEach((function(section){var e=t.$gsap.timeline({paused:!0}).from(section.querySelector(".up"),{delay:.5,xPercent:200,duration:.8});t.$ScrollTrigger.create({trigger:section,onEnter:function(){return t.goToSection(section,e)}}),t.$ScrollTrigger.create({trigger:section,start:"".concat(window.innerHeight/3," bottom"),onEnterBack:function(){return t.goToSection(section,e)}})})),console.log(this.sections),this.init(),this.animate()}},v=(n(330),n(9)),component=Object(v.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("section",{staticClass:"home page flex justify-center align-middle text-center h-screen"},[e("div",{ref:"container",staticClass:"w-full h-screen absolute top-0 up ",attrs:{id:"container"}}),this._v(" "),this._m(0)]),this._v(" "),e("section",{staticClass:"home page flex justify-center align-middle text-center h-screen"},[e("about",{staticClass:"up",attrs:{id:"about"}})],1),this._v(" "),e("section",{staticClass:"home page flex justify-center align-middle text-center h-screen "},[e("recents",{staticClass:"up",attrs:{id:"recents-projects"}})],1),this._v(" "),e("section",{staticClass:"home page h-screen flex justify-center"},[e("div",{staticClass:"home page flex justify-center align-middle text-center h-1/2"},[e("contact",{staticClass:"up",attrs:{id:"contact"}})],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-col align-middle justify-center z-10 fade"},[e("h1",{staticClass:"text-4xl font-bold "},[this._v("\n        Hi, my name is Christo. "),e("br"),this._v("\n        I'm a fullstack developer "),e("br"),this._v("based in London, UK\n      ")])])}],!1,null,null,null);e.default=component.exports}}]);