(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{322:function(t,e,r){},328:function(t,e,r){"use strict";r.r(e);var n={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},l=r(10),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-between"},[t.prev?r("NuxtLink",{staticClass:"text-primary font-bold hover:underline",attrs:{to:{name:"blog-slug",params:{slug:t.prev.slug}}}},[t._v("\n    "+t._s(t.prev.title)+"\n  ")]):r("span",[t._v(" ")]),t._v(" "),t.next?r("NuxtLink",{staticClass:"font-bold hover:underline",attrs:{to:{name:"blog-slug",params:{slug:t.next.slug}}}},[t._v("\n    "+t._s(t.next.title)+"\n  ")]):r("span",[t._v(" ")])],1)}),[],!1,null,null,null);e.default=component.exports},329:function(t,e,r){"use strict";r(322)},340:function(t,e,r){"use strict";r.r(e);r(22),r(145),r(41);var n=r(7),l={data:function(){return{searchQuery:"",articles:[]}},watch:{searchQuery:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=3;break}return e.articles=[],r.abrupt("return");case 3:return r.next=5,e.$content("articles").limit(6).search(t).fetch();case 5:e.articles=r.sent;case 6:case"end":return r.stop()}}),r)})))()}}},c=r(10),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mx-auto my-auto w-full"},[r("div",{staticClass:"flex justify-center py-8"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"shadow rounded border-0 p-2 w-full py-2 truncate leading-5 rounded-md flex",attrs:{type:"search",autocomplete:"off",placeholder:"Search Articles"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}})]),t._v(" "),t.articles.length?r("ul",{staticClass:"z-10 fixed w-auto -mt-6 overflow-hidden rounded border-b-2 border-l-2 border-r-2 border-t-2 border-white"},t._l(t.articles,(function(article){return r("li",{key:article.slug},[r("NuxtLink",{staticClass:"flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 bg-christo-light-3 text-gray-900 hover:text-black",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[t._v("\n        "+t._s(article.title)+"\n      ")])],1)})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},346:function(t,e,r){"use strict";r.r(e);r(29),r(21),r(42);var n=r(17),l=r(20),c=r(74),o=(r(41),r(7)),d={layout:"blog-layout",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,article,d,f,v,m,x,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,o=t.params,e.next=3,r("articles",o.slug).fetch();case 3:return article=e.sent,e.next=6,r("tags").only(["name","slug"]).where({name:{$containsAny:article.tags}}).fetch();case 6:return d=e.sent,f=Object.assign.apply(Object,[{}].concat(Object(c.a)(d.map((function(s){return Object(l.a)({},s.name,s)}))))),e.next=10,r("articles").only(["title","slug"]).sortBy("createdAt","asc").surround(o.slug).fetch();case 10:return v=e.sent,m=Object(n.a)(v,2),x=m[0],_=m[1],e.abrupt("return",{article:article,tags:f,prev:x,next:_});case 15:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},f=(r(329),r(10)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"mt-24"},[r("div",{staticClass:"flex justify-center self-center mx-24 align-middle flex-col"},[r("div",{staticClass:"text-white font-bold hover:underline text-center "},[r("NuxtLink",{attrs:{to:"/projects"}},[t._v("\n      All articles\n    ")])],1),t._v(" "),r("AppSearchInput",{staticClass:"flex-col"})],1),t._v(" "),r("div",{staticClass:"flex flex-row w-screen"},[r("div",{staticClass:"relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left"},[r("img",{staticClass:"absolute ",attrs:{src:t.article.img,alt:t.article.alt}}),t._v(" "),r("div",{staticClass:"overlay"}),t._v(" "),r("div",{staticClass:"absolute top-32 left-32 text-white"},[r("NuxtLink",{attrs:{to:"/"}},[r("Logo")],1),t._v(" "),r("div",{staticClass:"mt-4 ml-4 flex uppercase text-sm"},[r("p",{staticClass:"mr-3"},[t._v("\n            "+t._s(t.formatDate(t.article.updatedAt))+"\n          ")]),t._v(" "),r("span",{staticClass:"mr-3"},[t._v("•")]),t._v(" "),r("p",[t._v(t._s(t.article.author.name))])]),t._v(" "),r("h1",{staticClass:"text-4xl font-bold ml-4 "},[t._v(t._s(t.article.title))]),t._v(" "),t._l(t.article.tags,(function(e,n){return r("span",{key:n},[r("NuxtLink",{staticClass:"ml-4",attrs:{to:"/blog/tag/"+t.tags[e].slug}},[r("span",{staticClass:"truncate uppercase tracking-wider font-medium text-xs px-4 py-1 rounded-full mr-1 mb-2 border border-light-border dark:border-dark-border transition-colors duration-300 ease-linear"},[t._v("\n              "+t._s(t.tags[e].name)+"\n            ")])])],1)}))],2)]),t._v(" "),r("div",{staticClass:"relative xs:py-8 xs:px-8 lg:py-8 lg:px-16 lg:w-1/2 xs:w-full h-full overflow-y-scroll markdown-body post-right custom-scroll"},[r("h1",{staticClass:"font-bold text-4xl"},[t._v(t._s(t.article.title))]),t._v(" "),r("p",[t._v(t._s(t.article.description))]),t._v(" "),r("p",{staticClass:"pb-4"},[t._v("\n        Post last updated: "+t._s(t.formatDate(t.article.updatedAt))+"\n      ")]),t._v(" "),r("nav",{staticClass:"pb-6"},[r("ul",t._l(t.article.toc,(function(link){return r("li",{key:link.id,class:{"font-semibold":2===link.depth}},[r("nuxtLink",{staticClass:"hover:underline",class:{"py-2":2===link.depth,"ml-2 pb-2":3===link.depth},attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)]),t._v(" "),r("nuxt-content",{attrs:{document:t.article}}),t._v(" "),r("PrevNext",{staticClass:"mt-8",attrs:{prev:t.prev,next:t.next}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppSearchInput:r(340).default,PrevNext:r(328).default})}}]);