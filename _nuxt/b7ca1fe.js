(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{312:function(t,e,r){},314:function(t,e,r){"use strict";r(312)},316:function(t,e,r){"use strict";r.r(e);r(29);var n={props:{name:{type:String},job:{type:String},category:{type:String},fontColor:{type:String,default:"white"},left:{type:Boolean,default:!1},invert:{type:Boolean,default:!1}},data:function(){return{wrapperClass:"p-".concat(this.$parent.padding,"\n            flex flex-col justify-center"),nameSpan:"text-sm font-display uppercase font-bold inline",categorySpan:"font-sans text-sm"}},computed:{alignContent:function(){return this.left?"text-left":"text-center"},roundedFooter:function(){return"border-0 rounded-b-none rounded-".concat(this.$parent.borderRadius,"-inner border-top-").concat(this.$parent.primaryColor)},invertClass:function(){return this.invert?"bg-".concat(this.$parent.primaryColor):"text-".concat(this.$parent.primaryColor)}}},o=r(10),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.wrapperClass+" "+t.roundedFooter+" "+t.alignContent+" "},[t.name&&t.job?r("span",{class:""+t.nameSpan},[t._v("\n    "+t._s(t.job)+" @ "+t._s(t.name)+"\n  ")]):r("span",{class:""+t.nameSpan},[t._v("\n    "+t._s(t.name)+"\n  ")]),t._v(" "),t.category?r("div",{class:""+t.categorySpan},[t._v(t._s(t.category))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},317:function(t,e,r){"use strict";r.r(e);var n=r(10),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("header",{staticClass:"flex"})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(219).default})},318:function(t,e,r){"use strict";r.r(e);r(29);var n={props:{center:{type:Boolean,default:!1}},render:function(t){var e="text-sm border-0 rounded-t-none rounded-".concat(this.$parent.borderRadius,"-inner"),r=this.center?"flex items-center justify-center text-center":"flex items-center justify-between";return t("div",{class:"".concat(e," ").concat(r," font-sans p-").concat(this.$parent.padding)},this.$slots.default)}},o=r(10),component=Object(o.a)(n,void 0,void 0,!1,null,null,null);e.default=component.exports},319:function(t,e,r){"use strict";r.r(e);var n={props:{src:{type:String},gutter:{type:Boolean,default:!1},sharp:{type:Boolean,default:!1}},computed:{hasImage:function(){return this.src}},render:function(t){var e=this.gutter?"p-".concat(this.$parent.padding):"",r="w-full pb-2 ".concat(e),img=t("img",{attrs:{src:this.src},class:this.sharp?"":"rounded-".concat(this.$parent.borderRadius,"-inner mx-auto")});return this.hasImage?t("div",{class:r,id:"card-image"},[img]):void 0}},o=r(10),component=Object(o.a)(n,void 0,void 0,!1,null,null,null);e.default=component.exports},320:function(t,e,r){"use strict";r.r(e);r(29);var n={props:{gradient:{type:Boolean,default:!1}},render:function(t){var e=this.gradient?"bg-gradient-to-b from-dirtyBlue via-dirtyBluePink to-dirtyPink text-white":"";return t("div",{class:"flex-1 p-".concat(this.$parent.padding," ").concat(e),id:"card-body"},this.$slots.default)}},o=r(10),component=Object(o.a)(n,void 0,void 0,!1,null,null,null);e.default=component.exports},321:function(t,e,r){"use strict";r.r(e);r(29),r(218);var n={props:{padding:{type:Number,default:0},primaryColor:{type:String,default:"gray-100"},secondaryColor:{type:String,default:"gray-300"},cardBg:{type:String,default:"gray-100"},borderWidth:{type:Number,default:0},borderRadius:{type:String,default:"lg"}},computed:{myClass:function(){return"shadow flex flex-col bg-".concat(this.cardBg," border-").concat(this.borderWidth," rounded-").concat(this.borderRadius," border-").concat(this.primaryColor," overflow-hidden")}},render:function(t){return t("div",{class:this.myClass,props:this.$options.propsData},[this.$slots.header,this.$slots.default,this.$slots.footer])}},o=r(10),component=Object(o.a)(n,void 0,void 0,!1,null,null,null);e.default=component.exports},326:function(t,e,r){"use strict";r.r(e);r(35);var n=r(74),o=(r(41),r(7)),l={layout:"blog-layout",data:function(){return{page:0,limit:6,articles:[],experience:[]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:t.articles=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{fetchData:function(){return console.log(this.$content),this.$content("articles").limit(this.limit).skip(this.limit*this.page).sortBy("modifiedAt","desc").fetch()},infiniteHandler:function(t){var e=this;setTimeout(Object(o.a)(regeneratorRuntime.mark((function r(){var o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.page+=1,r.next=3,e.fetchData();case 3:(o=r.sent).length>0?((l=e.articles).push.apply(l,Object(n.a)(o)),console.log("more"),t.loaded()):t.complete();case 5:case"end":return r.stop()}}),r)}))),2e3)}}},c=(r(314),r(10)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("TheHeader"),t._v(" "),r("div",{staticClass:"max-w-6xl mx-auto p-4 mt-12"},[r("h1",{staticClass:"font-bold text-4xl text-center p-8"},[t._v("Projects")]),t._v(" "),r("masonry",{attrs:{cols:{default:4,1e3:3,800:2,550:1},gutter:20}},t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"text-black "},[r("NuxtLink",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col post",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[r("card",{staticClass:"mb-5",attrs:{padding:3,"primary-color":"christo-dark-3","secondary-color":"christo-light-3","border-radius":"lg"}},[r("card-header",{staticClass:"text-black"},[r("ul",{staticClass:"flex flex-wrap"},t._l(article.tags,(function(e){return r("li",{key:e,staticClass:"xs:w-full px-1"},[r("NuxtLink",{attrs:{to:"/blog/tag/"+e}},[r("p",{staticClass:"font-bold text-gray-600 uppercase tracking-wider font-medium text-ss"},[t._v("\n                    "+t._s(e)+"\n                  ")])])],1)})),0)]),t._v(" "),r("card-content",{staticClass:"pa-4"},[article.img?r("card-image",{staticClass:"px-4 ",attrs:{src:article.img}}):r("span",[t._v(" "+t._s(article.description)+" ")])],1),t._v(" "),r("card-footer",{attrs:{invert:"",name:article.title,job:article.job,category:article.category}})],1)],1)],1)})),0)],1),t._v(" "),r("infinite-loading",{attrs:{spinner:"spiral"},on:{infinite:t.infiniteHandler}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeader:r(317).default,CardHeader:r(318).default,CardImage:r(319).default,CardContent:r(320).default,CardFooter:r(316).default,Card:r(321).default})}}]);