(window.webpackJsonp=window.webpackJsonp||[]).push([[24,6,7,8,9,10,14,18,22,25,26],{349:function(t,e,r){var content=r(358);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("177e87b0",content,!0,{sourceMap:!1})},350:function(t,e,r){var content=r(360);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("ed8a719c",content,!0,{sourceMap:!1})},351:function(t,e,r){"use strict";r.r(e);r(42);var n={props:{name:{type:String},job:{type:String},category:{type:String},fontColor:{type:String,default:"white"},left:{type:Boolean,default:!1},invert:{type:Boolean,default:!1}},data:function(){return{wrapperClass:"p-".concat(this.$parent.padding,"\n            flex flex-col justify-center"),nameSpan:"text-sm font-display uppercase font-bold inline",categorySpan:"font-sans text-sm"}},computed:{alignContent:function(){return this.left?"text-left":"text-center"},roundedFooter:function(){return"border-0 rounded-b-none rounded-".concat(this.$parent.borderRadius,"-inner border-top-").concat(this.$parent.primaryColor)},invertClass:function(){return this.invert?"bg-".concat(this.$parent.primaryColor):"text-".concat(this.$parent.primaryColor)}}},o=r(11),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.wrapperClass+" "+t.roundedFooter+" "+t.alignContent+" "},[t.name&&t.job?r("span",{class:""+t.nameSpan},[t._v("\n    "+t._s(t.job)+" @ "+t._s(t.name)+"\n  ")]):r("span",{class:""+t.nameSpan},[t._v("\n    "+t._s(t.name)+"\n  ")]),t._v(" "),t.category?r("div",{class:""+t.categorySpan},[t._v(t._s(t.category))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},352:function(t,e,r){"use strict";r.r(e);var n=r(11),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("header",{staticClass:"flex"})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(217).default})},353:function(t,e,r){"use strict";r.r(e);r(42);var n={props:{center:{type:Boolean,default:!1}},render:function(t){var e="text-sm border-0 rounded-t-none rounded-".concat(this.$parent.borderRadius,"-inner"),r=this.center?"flex items-center justify-center text-center":"flex items-center justify-between";return t("div",{class:"".concat(e," ").concat(r," font-sans p-").concat(this.$parent.padding)},this.$slots.default)}},o=r(11),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports},354:function(t,e,r){"use strict";r.r(e);var n={props:{src:{type:String},gutter:{type:Boolean,default:!1},sharp:{type:Boolean,default:!1}},computed:{hasImage:function(){return this.src}},render:function(t){var e=this.gutter?"p-".concat(this.$parent.padding):"",r="w-full pb-2 ".concat(e),img=t("img",{attrs:{src:this.src},class:this.sharp?"":"rounded-".concat(this.$parent.borderRadius,"-inner mx-auto")});return this.hasImage?t("div",{class:r,id:"card-image"},[img]):void 0}},o=r(11),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports},355:function(t,e,r){"use strict";r.r(e);r(42);var n={props:{gradient:{type:Boolean,default:!1}},render:function(t){var e=this.gradient?"bg-gradient-to-b from-dirtyBlue via-dirtyBluePink to-dirtyPink text-white":"";return t("div",{class:"flex-1 p-".concat(this.$parent.padding," ").concat(e),id:"card-body"},this.$slots.default)}},o=r(11),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports},356:function(t,e,r){"use strict";r.r(e);r(42),r(216);var n={props:{padding:{type:Number,default:0},primaryColor:{type:String,default:"gray-100"},secondaryColor:{type:String,default:"gray-300"},cardBg:{type:String,default:"gray-100"},borderWidth:{type:Number,default:0},borderRadius:{type:String,default:"lg"}},computed:{myClass:function(){return"shadow flex flex-col bg-".concat(this.cardBg," border-").concat(this.borderWidth," rounded-").concat(this.borderRadius," border-").concat(this.primaryColor," overflow-hidden")}},render:function(t){return t("div",{class:this.myClass,props:this.$options.propsData},[this.$slots.header,this.$slots.default,this.$slots.footer])}},o=r(11),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports},357:function(t,e,r){"use strict";r(349)},358:function(t,e,r){var n=r(22)(!1);n.push([t.i,".article-card,.article-card a{border-radius:8px}.article-card a{background-color:#fff}.article-card img div{border-radius:8px 0 0 8px}.post-enter-active,.post-leave-active{transition-property:opacity;transition-timing-function:ease-in-out;transition-duration:.5s}.post-enter,.post-leave-to{opacity:0}",""]),t.exports=n},359:function(t,e,r){"use strict";r(350)},360:function(t,e,r){var n=r(22)(!1);n.push([t.i,".article-card,.article-card a{border-radius:8px}.article-card a{background-color:#fff}.article-card img div{border-radius:8px 0 0 8px}.post-enter-active,.post-leave-active{transition-property:opacity;transition-timing-function:ease-in-out;transition-duration:.5s}.overlay,.post-enter,.post-leave-to{opacity:0}.overlay{background:linear-gradient(rgba(0,0,0,.78824),transparent);position:absolute;width:100%;height:20vh;top:0;left:0}",""]),t.exports=n},362:function(t,e,r){var content=r(373);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("1b7833da",content,!0,{sourceMap:!1})},363:function(t,e,r){"use strict";r.r(e);var n={},o=r(11),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col align-middle justify-center "},[r("h1",{staticClass:"text-4xl font-bold "},[t._v("\n        About me\n      ")])])}],!1,null,null,null);e.default=component.exports},364:function(t,e,r){"use strict";r.r(e);var n={},o=r(11),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative flex items-top justify-center min-h-screen bg-transparent sm:items-center sm:pt-0"},[r("div",{staticClass:"max-w-6xl mx-auto my-auto sm:px-6 lg:px-8"},[r("div",{staticClass:"overflow-hidden"},[r("div",{staticClass:"grid grid-cols-1 md:grid-cols-2"},[r("div",{staticClass:"p-6 mr-2 sm:rounded-lg"},[r("h1",{staticClass:"text-4xl text-left sm:text-5xl text-current font-extrabold tracking-tight"},[t._v("\n            Get in touch\n          ")]),t._v(" "),r("p",{staticClass:"text-normal text-left text-lg sm:text-2xl font-medium text-current mt-2"},[t._v("\n            Fill in the form to start a conversation\n          ")]),t._v(" "),r("div",{staticClass:"flex items-center mt-4 text-current"},[r("svg",{staticClass:"w-8 h-8 stroke-current ",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",viewBox:"0 0 24 24"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"}})]),t._v(" "),r("div",{staticClass:"ml-8 text-md text-left tracking-wide font-semibold w-40"},[t._v("\n              +44 7478701027\n            ")])]),t._v(" "),r("div",{staticClass:"flex items-center mt-4 text-current"},[r("svg",{staticClass:"w-8 h-8 stroke-current",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",viewBox:"0 0 24 24"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}})]),t._v(" "),r("div",{staticClass:"ml-8 text-md text-left tracking-wide font-semibold w-40"},[t._v("\n              co851002@gmail.com\n            ")])])]),t._v(" "),t._m(0)])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"p-6 flex flex-col justify-center"},[r("div",{staticClass:"flex flex-col"},[r("label",{staticClass:"hidden",attrs:{for:"name"}},[t._v("Full Name")]),t._v(" "),r("input",{staticClass:"w-100 mt-2 py-3 px-3 rounded-lg bg-current border border-gray-400 dark:border-gray-700 text-current font-semibold focus:border-indigo-500 focus:outline-none",attrs:{type:"name",name:"name",id:"name",placeholder:"Full Name"}})]),t._v(" "),r("div",{staticClass:"flex flex-col mt-2"},[r("label",{staticClass:"hidden",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),r("input",{staticClass:"w-100 mt-2 py-3 px-3 rounded-lg bg-current border border-gray-400 dark:border-gray-700 text-current font-semibold focus:border-indigo-500 focus:outline-none",attrs:{type:"email",name:"email",id:"email",placeholder:"Email"}})]),t._v(" "),r("div",{staticClass:"flex flex-col mt-2"},[r("label",{staticClass:"hidden",attrs:{for:"tel"}},[t._v("Number")]),t._v(" "),r("input",{staticClass:"w-100 mt-2 py-3 px-3 rounded-lg bg-current border border-gray-400 dark:border-gray-700 text-current font-semibold focus:border-indigo-500 focus:outline-none",attrs:{type:"tel",name:"tel",id:"tel",placeholder:"Telephone Number"}})]),t._v(" "),r("button",{staticClass:"md:w-full mt-4 dark:text-christo-dark-2 dark:bg-christo-light-1 text-christo-light-1 bg-christo-dark-2 hover:bg-christo-dark-2 font-bold py-3 px-6 rounded-lg over:christo-dark-2 hover:text-christo-light-1 border-gray-900 transition ease-in-out duration-300",attrs:{type:"submit"}},[t._v("\n            Submit\n          ")])])}],!1,null,null,null);e.default=component.exports},365:function(t,e,r){"use strict";r.r(e);r(35);var n=r(75),o=(r(43),r(8)),l={layout:"blog-layout",data:function(){return{page:0,limit:6,articles:[],experience:[]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:t.articles=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{fetchData:function(){return console.log(this.$content),this.$content("articles").limit(this.limit).skip(this.limit*this.page).sortBy("modifiedAt","desc").fetch()},infiniteHandler:function(t){var e=this;setTimeout(Object(o.a)(regeneratorRuntime.mark((function r(){var o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.page+=1,r.next=3,e.fetchData();case 3:(o=r.sent).length>0?((l=e.articles).push.apply(l,Object(n.a)(o)),console.log("more"),t.loaded()):t.complete();case 5:case"end":return r.stop()}}),r)}))),2e3)}}},c=(r(357),r(11)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("TheHeader"),t._v(" "),r("div",{staticClass:"max-w-6xl mx-auto p-4 mt-12"},[r("h1",{staticClass:"font-bold text-4xl text-center p-8"},[t._v("Projects")]),t._v(" "),r("masonry",{attrs:{cols:{default:4,1e3:3,800:2,550:1},gutter:20}},t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"text-black "},[r("NuxtLink",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col post w-full",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[r("card",{staticClass:"mb-5 text-current",attrs:{padding:3,"primary-color":"christo-dark-3","secondary-color":"christo-light-3","border-radius":"lg"}},[r("card-header",{staticClass:"text-current"},[r("ul",{staticClass:"flex flex-wrap"},t._l(article.tags,(function(e){return r("li",{key:e,staticClass:"xs:w-full px-1"},[r("NuxtLink",{attrs:{to:"/blog/tag/"+e}},[r("p",{staticClass:"font-bold text-gray-600 uppercase tracking-wider font-medium text-ss"},[t._v("\n                    "+t._s(e)+"\n                  ")])])],1)})),0)]),t._v(" "),r("card-content",{staticClass:"pa-4"},[article.img?r("card-image",{staticClass:"px-4 ",attrs:{src:article.img}}):r("span",[t._v(" "+t._s(article.description)+" ")])],1),t._v(" "),r("card-footer",{attrs:{invert:"",name:article.title,job:article.job,category:article.category}})],1)],1)],1)})),0)],1),t._v(" "),r("infinite-loading",{attrs:{spinner:"spiral"},on:{infinite:t.infiniteHandler}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeader:r(352).default,CardHeader:r(353).default,CardImage:r(354).default,CardContent:r(355).default,CardFooter:r(351).default,Card:r(356).default})},366:function(t,e,r){"use strict";r.r(e);r(35);var n=r(75),o=(r(43),r(8)),l={data:function(){return{slickOptions:{slidesToShow:2,dots:!0,arrows:!1,dotsClass:"slick-dots custom-dot-class",autoplay:!0,centerPadding:"50px",fade:!1,speed:500,slidesToScroll:2,touchThreshold:5},page:0,limit:3,articles:[]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:t.articles=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{fetchData:function(){return this.$content("articles").limit(this.limit).sortBy("modifiedAt","desc").fetch()},infiniteHandler:function(t){var e=this;setTimeout(Object(o.a)(regeneratorRuntime.mark((function r(){var o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.page+=1,r.next=3,e.fetchData();case 3:(o=r.sent).length>0?((l=e.articles).push.apply(l,Object(n.a)(o)),t.loaded()):t.complete();case 5:case"end":return r.stop()}}),r)}))),2e3)}}},c=(r(359),r(11)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("div",{staticClass:"p-4 mt-12"},[r("div",{staticClass:"block md:flex justify-between  md:-mx-2"},t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"mx-6 overflow-hidden shadow bg-white border-none dark:border-christo-dark-1 dark:border-2 dark:bg-transparent rounded-xl h-auto "},[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[r("div",{staticClass:"  relative text-left mb-4"},[article.img?r("div",{staticClass:"h-56 w-full bg-cover bg-left-top antialiased ",style:{backgroundImage:"url("+article.img+")"}}):t._e(),t._v(" "),r("div",{staticClass:"px-6 py-4"},[r("div",{staticClass:"block mb-2 text-lg md:text-base lg:text-lg font-bold "},[t._v(t._s(article.title))]),t._v(" "),r("p",{staticClass:"text-grey-darker text-base"},[t._v("\n                "+t._s(article.description)+"\n              ")])]),t._v(" "),t._l(article.tags,(function(e){return r("div",{key:e.slug,staticClass:"relative mt-2 pb-4 md:hidden lg:inline"},[r("NuxtLink",{staticClass:"flex justify-between py-1 px-2 rounded-full text-xs lowercase ",attrs:{to:"/blog/tag/"+e.slug}},[r("span",{staticClass:"inline rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"},[t._v("#"+t._s(e))])])],1)}))],2)])],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports},372:function(t,e,r){"use strict";r(362)},373:function(t,e,r){var n=r(22)(!1);n.push([t.i,".home{overflow-x:hidden}.carousel-wrapper{padding:40px}.img{margin:auto;width:100px;height:100px;background-image:linear-gradient(grey 100%,transparent 0)}.title{display:block;font-weight:300;font-size:55px;color:#35495e;letter-spacing:1px;text-transform:capitalize;margin:25px 0}.h3{font-weight:400;margin:10px}.bw{filter:grayscale(100%)}.text-shadow{text-shadow:4px 4px rgba(0,0,0,.2)}.mask{width:100%;height:100vh;position:absolute;top:0;opacity:.5}",""]),t.exports=n},406:function(t,e,r){"use strict";r.r(e);r(371);var n=r(179),o=r.n(n),l=r(363),c=r(365),d=r(364),f=r(366),m={transition:{name:"scale",mode:"out-in",css:!1,beforeEnter:function(t){this.$gsap.set(t,{opacity:0,scale:0})},enter:function(t,e){this.$gsap.to(t,{opacity:1,scale:1,duration:1,ease:"power2.inOut",onComplete:e})},leave:function(t,e){this.$gsap.to(t,{opacity:0,scale:0,duration:1,ease:"power2.inOut",onComplete:e})}},components:{Logo:o.a,About:l.default,Projects:c.default,Contact:d.default,Recents:f.default},data:function(){return{sections:[],slickOptions:{slidesToShow:5,arrows:!1,autoplay:!0,centerPadding:"50px",fade:!1,speed:500},slider:[{name:"html-5",src:"html-5"},{name:"css-3",src:"css-3"},{name:"Javascript",src:"javascript"},{name:"Vue",src:"vue"},{name:"Nuxt",src:"nuxt"},{name:"Tailwind",src:"tailwindcss"},{name:"AWS",src:"aws"},{name:"Node",src:"nodejs-icon"},{name:"Github",src:"github-icon"},{name:"Jamstack",src:"jamstack"},{name:"Tensorflow",src:"tensorflow"}],camera:null,scene:null,renderer:null,cube:null}},methods:{init:function(){this.$gsap}},mounted:function(){}},h=(r(372),r(11)),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"home page flex justify-center align-middle text-center h-screen"},[r("div",{ref:"container",staticClass:"w-screen h-screen relative top-0 ",attrs:{id:"container"}},[r("flat-surface-shader",{staticClass:"w-screen h-screen absolute shader left-0",attrs:{type:"canvas",light:{ambient:"#16074d",diffuse:"#ff041c",draw:!1,zOffset:0},mesh:{ambient:"#555555",diffuse:"#696969",zRange:30}}}),t._v(" "),r("div",{staticClass:"mask flex flex-col align-middle justify-center bg-black "}),t._v(" "),r("div",{staticClass:"flex flex-col align-middle justify-center absolute w-full h-full"},[t._m(0),t._v(" "),r("div",{staticClass:"block mt-12"},[r("nuxt-link",{staticClass:"uppercase border-b-2 text-sm py-2 mx-8 w-full text-left font-bold text-white",attrs:{to:{path:"/",hash:"about"}}},[t._v("About Me")]),t._v(" "),r("nuxt-link",{staticClass:"uppercase border-b-2 text-sm py-2 mx-8 w-full text-left font-bold text-white",attrs:{to:{path:"/",hash:"projects"}}},[t._v("Works\n          ")])],1)])],1)]),t._v(" "),r("section",{staticClass:"home page flex justify-center align-middle text-center h-screen",attrs:{id:"about"}},[r("about",{staticClass:"up"})],1),t._v(" "),r("section",{staticClass:"home page flex justify-center align-middle text-center h-screen "},[r("div",{staticClass:"flex flex-col align-middle justify-center ",attrs:{id:"projects"}},[r("h1",{staticClass:"text-4xl font-bold "},[t._v("\n        Projects\n      ")]),t._v(" "),r("recents")],1)]),t._v(" "),r("section",{staticClass:"home page h-screen flex justify-center"},[r("div",{staticClass:"home page flex justify-center align-middle text-center h-1/2"},[r("contact",{staticClass:"up",attrs:{id:"contact"}})],1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticClass:"text-3xl xs:text-2xl font-bold text-shadow text-white"},[t._v("\n          Hi, my name is Christo. "),r("br"),t._v("\n          I'm a fullstack developer "),r("br"),t._v("based in London, UK\n        ")])}],!1,null,null,null);e.default=component.exports}}]);