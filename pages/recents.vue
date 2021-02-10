<template>
  <div class="">
    <div class=" p-4 mt-12 max-w-6xl">
      <h1 class="font-bold text-4xl p-8">Recent Projects</h1>

      <div class="wrapper flex">
        <!-- <VueSlickCarousel v-bind="slickOptions" class=""> -->
        <div
          v-for="article in articles"
          :key="article.slug"
          class="relative mx-8 border-transparent rounded-xl overflow-hidden bg-current antialiased"
        >
          <div class="project shadow-lg">
            <div
              class="tags flex absolute z-10 text-christo-light-3 w-full md:w-1/2 rounded-xl  "
            >
              <div
                class="2/3 py-2 px-2"
                v-for="tag of article.tags"
                :key="tag.slug"
              >
                <!-- <NuxtLink :to="`/blog/tag/${tag.slug}`" class=""> -->
                <p class="uppercase text-sm font-medium mx-1 hover:text-white">
                  #{{ tag }}
                </p>
                <!-- </NuxtLink> -->
              </div>
            </div>

            <NuxtLink
              :to="{ name: 'blog-slug', params: { slug: article.slug } }"
              class="flex flex-1 rounted-xl  "
            >
              <!-- <card
                :padding="1"
                primary-color="christo-dark-3"
                secondary-color="christo-light-3"
                border-radius="lg"
                class="mb-5"
              >
                <card-content class="h-300">
                  <card-image
                    v-if="article.img"
                    :src="article.img"
                    class=" object-cover min-h-fit h-150 max-h-3/4 p-4"
                  >
                  </card-image>
                  <span v-else> {{ article.description }} </span>
                </card-content>
                <card-footer
                  invert
                  :name="article.title"
                  :job="article.job"
                  :category="article.category"
                >
                </card-footer>
              </card> -->

              <div class="w-full relative">
                <div class="overlay w-full"></div>

                <div class="bg-white ">
                  <div class="">
                    <div
                      v-if="article.img"
                      class="h-64 w-full bg-cover bg-top antialiased "
                      :style="{ backgroundImage: `url(${article.img})` }"
                    ></div>
                    <div
                      v-else
                      class="h-64 w-full bg-cover bg-top antialiased bg-current "
                    ></div>
                    <!-- <img
                    v-if="article.img"
                    :src="article.img"
                    alt=""
                    class="border-white object-cover object-top h-48 w-full overflow-hidden border-8"
                  /> -->
                  </div>
                  <div
                    class="px-4 py-4 text-left h-48 w-full flex flex-wrap content-between"
                  >
                    <div>
                      <h1 class="font-bold text-lg" v-if="article.title">
                        {{ article.title }}
                      </h1>
                      <h1 class="font-bold text-lg" v-else>
                        {{ article.job }}
                      </h1>

                      <p class="" v-if="article.description">
                        {{ article.description }}
                      </p>
                    </div>
                    <div class="align-bottom">
                      <div class="w-full text-xs font-medium">
                        NOVEMBER - 2019
                      </div>
                      <!-- <div class="text-sm font-medium">
                          Tags:
                       </div> -->
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
        <!-- </VueSlickCarousel> -->
      </div>
    </div>

    <!-- <infinite-loading
      spinner="spiral"
      @infinite="infiniteHandler"
    ></infinite-loading> -->

    <!-- <h3 class="mb-4 font-bold text-2xl uppercase text-center">Topics</h3>
    <ul class="flex flex-wrap mb-4 text-center">
      <li
        v-for="tag of tags"
        :key="tag.slug"
        class="xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"
      >
        <NuxtLink :to="`/blog/tag/${tag.slug}`" class="">
          <p
            class="font-bold text-gray-600 uppercase tracking-wider  text-ss"
          >
            {{ tag.name }}
          </p>
        </NuxtLink>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      slickOptions: {
        slidesToShow: 2,
        dots: true,
        arrows: false,
        dotsClass: "slick-dots custom-dot-class",
        autoplay: true,
        centerPadding: "50px",
        fade: false,
        speed: 500,
        slidesToScroll: 2,
        touchThreshold: 5
      },
      page: 0,
      limit: 3,
      articles: []
    };
  },

  // async asyncData({ $content, params }) {
  //   console.log( params)
  //   const articles = await $content("articles", params.slug)
  //     .only(["title", "description", "img", "slug", "author"])
  //     .limit(this.limit)
  //     .sortBy("createdAt", "desc")
  //     .fetch();
  //   const tags = await $content("tags", params.slug)
  //     .only(["name", "description", "img", "slug"])
  //     .sortBy("createdAt", "asc")
  //     .fetch();
  //   return {
  //     articles,
  //     tags
  //   };
  // },
  async fetch() {
    this.articles = await this.fetchData();
    console.log(this.articles);
  },

  methods: {
    fetchData() {
      console.log(this.$content);
      return this.$content("articles")
        .limit(this.limit)
        .sortBy("modifiedAt", "desc")
        .fetch();
    },

    infiniteHandler($state) {
      setTimeout(async () => {
        this.page += 1;
        let additionalItems = await this.fetchData();

        if (additionalItems.length > 0) {
          this.articles.push(...additionalItems);
          console.log("more");
          $state.loaded();
        } else {
          $state.complete();
        }
      }, 2000);
    }
  }
};
</script>

<style class="postcss">
.article-card {
  border-radius: 8px;
}

.article-card a {
  background-color: #fff;
  border-radius: 8px;
}

.article-card img div {
  border-radius: 8px 0 0 8px;
}

.post-enter-active,
.post-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}

.post-enter,
.post-leave-to {
  opacity: 0;
}

.overlay {
  background: linear-gradient(#000000c9, transparent);
  position: absolute;
  width: 100%;
  height: 20vh;
  top: 0;
  left: 0;
  opacity: 0;
}

.project:hover .overlay {
  opacity: 1;
}
</style>
