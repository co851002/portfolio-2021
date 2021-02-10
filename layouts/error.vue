<template>
  <div class="w-full h-full flex flex-wrap content-center container">
    <h1 class="row w-full text-4xl" v-if="error.statusCode === 404">Page not found</h1>
    <h1 class="row w-full text-4xl" v-else>An error occurred</h1>
    <NuxtLink class="row w-screen mt-24" to="/">Back to Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error' // you can set a custom layout for the error page
}
</script>
