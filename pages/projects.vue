<template>
  <div class="">
    <TheHeader />

    <!-- <ul class="flex flex-wrap">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"
      >
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
        >
          <img
            v-if="article.img"
            class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
            :src="article.img"
          />

          <div
            class="p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"
          >
            <h2 class="font-bold">{{ article.title }}</h2>
            <p>by {{ article.author.name }}</p>
            <p class="font-bold text-gray-600 text-sm">
              {{ article.description }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul> -->

    <div class="max-w-6xl mx-auto p-4 mt-12">
      <h1 class="font-bold text-4xl text-center p-8">Projects</h1>

      <masonry :cols="{ default: 4, 1000: 3, 800: 2, 550: 1 }" :gutter="20">
        <div
          v-for="article in articles"
          :key="article.slug"
          class="text-black "
        >
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col post w-full"
          >
            <card
              :padding="3"
              primary-color="christo-dark-3"
              secondary-color="christo-light-3"
              border-radius="lg"
              class="mb-5 text-current"
            >
              <card-header class="text-current">
                <!-- <span> <v-icon name="book-open" scale="1" /> </span> -->
                <ul class="flex flex-wrap">
                <li
                  v-for="tag of article.tags"
                  :key="tag"
                  class="xs:w-full px-1"
                >
                  <NuxtLink :to="`/blog/tag/${tag}`" class="">
                    <p
                      class="font-bold text-gray-600 uppercase tracking-wider font-medium text-ss"
                    >
                      {{ tag }}
                    </p>
                  </NuxtLink>
                </li>
              </ul>
              </card-header>
              <card-content class="pa-4">
                <card-image v-if="article.img" :src="article.img" class="px-4 ">
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
            </card>
          </NuxtLink>
        </div>
      </masonry>
    </div>

    <infinite-loading
      spinner="spiral"
      @infinite="infiniteHandler"
    ></infinite-loading>

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
  layout: "blog-layout",

  data() {
    return {
      page: 0,
      limit: 6,
      articles: [],
      experience: []
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
  },

  methods: {
    fetchData() {
      console.log(this.$content)
      return this.$content("articles")
        .limit(this.limit)
        .skip(this.limit * this.page)
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
</style>
