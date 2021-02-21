<template>
  <div class="">
    <div class="p-4 mt-12">
      <!-- <h1 class="font-bold text-4xl p-8">Recent Projects</h1> -->
      <div
        class="block md:flex justify-between  md:-mx-2"
      >
        <div
          class="mx-6 overflow-hidden shadow bg-white border-none dark:border-christo-dark-1 dark:border-2 dark:bg-transparent rounded-xl h-auto "
          v-for="article in articles"
          :key="article.slug"
        >
          <!-- component -->
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            class=""
          >
            <div class="  relative text-left mb-4">
              <div
                v-if="article.img"
                class="h-56 w-full bg-cover bg-left-top antialiased "
                :style="{ backgroundImage: `url(${article.img})` }"
              ></div>
              <!-- <img class="h-56 w-full object-cover object-center" :src="article.img" :alt="article.title"> -->
              <div class="px-6 py-4">
                <div class="block mb-2 text-lg md:text-base lg:text-lg font-bold ">{{ article.title }}</div>
                <p class="text-grey-darker text-base">
                  {{ article.description }}
                </p>
              </div>
              <div
                class="relative mt-2 pb-4 md:hidden lg:inline"
                v-for="tag of article.tags"
                :key="tag.slug"
              >
                <NuxtLink :to="`/blog/tag/${tag.slug}`" class="flex justify-between py-1 px-2 rounded-full text-xs lowercase ">
                  <span
                    class="inline rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"
                    >#{{ tag }}</span
                  >
                </NuxtLink>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
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
    // console.log(this.articles);
  },

  methods: {
    fetchData() {
      // console.log(this.$content);
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
          // console.log("more");
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
