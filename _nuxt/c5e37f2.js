(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{350:function(t,e,r){var content=r(360);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("ed8a719c",content,!0,{sourceMap:!1})},359:function(t,e,r){"use strict";r(350)},360:function(t,e,r){var n=r(22)(!1);n.push([t.i,".article-card,.article-card a{border-radius:8px}.article-card a{background-color:#fff}.article-card img div{border-radius:8px 0 0 8px}.post-enter-active,.post-leave-active{transition-property:opacity;transition-timing-function:ease-in-out;transition-duration:.5s}.overlay,.post-enter,.post-leave-to{opacity:0}.overlay{background:linear-gradient(rgba(0,0,0,.78824),transparent);position:absolute;width:100%;height:20vh;top:0;left:0}",""]),t.exports=n},366:function(t,e,r){"use strict";r.r(e);r(35);var n=r(75),o=(r(43),r(8)),l={data:function(){return{slickOptions:{slidesToShow:2,dots:!0,arrows:!1,dotsClass:"slick-dots custom-dot-class",autoplay:!0,centerPadding:"50px",fade:!1,speed:500,slidesToScroll:2,touchThreshold:5},page:0,limit:3,articles:[]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:t.articles=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{fetchData:function(){return this.$content("articles").limit(this.limit).sortBy("modifiedAt","desc").fetch()},infiniteHandler:function(t){var e=this;setTimeout(Object(o.a)(regeneratorRuntime.mark((function r(){var o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.page+=1,r.next=3,e.fetchData();case 3:(o=r.sent).length>0?((l=e.articles).push.apply(l,Object(n.a)(o)),t.loaded()):t.complete();case 5:case"end":return r.stop()}}),r)}))),2e3)}}},c=(r(359),r(11)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("div",{staticClass:"p-4 mt-12"},[r("div",{staticClass:"block md:flex justify-between  md:-mx-2"},t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"mx-6 overflow-hidden shadow bg-white border-none dark:border-christo-dark-1 dark:border-2 dark:bg-transparent rounded-xl h-auto "},[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[r("div",{staticClass:"  relative text-left mb-4"},[article.img?r("div",{staticClass:"h-56 w-full bg-cover bg-left-top antialiased ",style:{backgroundImage:"url("+article.img+")"}}):t._e(),t._v(" "),r("div",{staticClass:"px-6 py-4"},[r("div",{staticClass:"block mb-2 text-lg md:text-base lg:text-lg font-bold "},[t._v(t._s(article.title))]),t._v(" "),r("p",{staticClass:"text-grey-darker text-base"},[t._v("\n                "+t._s(article.description)+"\n              ")])]),t._v(" "),t._l(article.tags,(function(e){return r("div",{key:e.slug,staticClass:"relative mt-2 pb-4 md:hidden lg:inline"},[r("NuxtLink",{staticClass:"flex justify-between py-1 px-2 rounded-full text-xs lowercase ",attrs:{to:"/blog/tag/"+e.slug}},[r("span",{staticClass:"inline rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"},[t._v("#"+t._s(e))])])],1)}))],2)])],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);