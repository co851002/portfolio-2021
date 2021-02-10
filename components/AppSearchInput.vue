<template>
  <div class="mx-auto my-auto w-full">
    <!-- <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search Articles"
      class="w-full py-2 truncate leading-5 rounded-md flex"
    /> -->

    <div class="flex justify-center py-8">
      <input
        type="search"
        class="shadow rounded border-0 p-2 w-full py-2 truncate leading-5 rounded-md flex"
        v-model="searchQuery"
        autocomplete="off"
        placeholder="Search Articles"
      />

    </div>

    <ul
      v-if="articles.length"
      class="z-10 fixed w-auto -mt-6 overflow-hidden rounded border-b-2 border-l-2 border-r-2 border-t-2 border-white"
    >
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 bg-christo-light-3 text-gray-900 hover:text-black"
        >
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: "",
      articles: []
    };
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = [];
        return;
      }
      this.articles = await this.$content("articles")
        .limit(6)
        .search(searchQuery)
        .fetch();
    }
  }
};
</script>
