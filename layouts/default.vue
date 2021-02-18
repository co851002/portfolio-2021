<template>
  <div class="h-screen flex flex-col " id="app">
    <Header />
      <Nuxt class="flex-1 " />
    <Footer />
  </div>
</template>

<script>
// import Header from '@/components/header'

export default {
  //  components: {
  //   Header
  // }

}
</script>

<style lang="scss">
// #app {
//   overflow-x: hidden;
// }

:root {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.dark-mode {
  @apply bg-christo-dark-3;
  @apply text-christo-light-3;
}

.light-mode {
  @apply bg-christo-light-3;
  @apply text-christo-dark-3;
}

body {
  background: var(--page-background);
  height: 100%;
}

*,
*::before,
*::after {
  @apply box-border;
}

/* Sample `apply` at-rules with Tailwind CSS */

#__layout,
#__nuxt {
  @apply h-full;
}
</style>
<style>
.nuxt-content * {
  @apply mb-3;
}

.nuxt-content a {
  @apply underline;
}
</style>
<style>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
  transition-delay: 800ms;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
<style>
::-webkit-scrollbar {
  width: 10px;
}

/* Track */

::-webkit-scrollbar-track {
  @apply bg-christo-dark-2;
}

/* Handle */

::-webkit-scrollbar-thumb {
  @apply bg-christo-dark-1;
}

/* Handle on hover */

::-webkit-scrollbar-thumb:hover {
  @apply bg-christo-light-1;
}

/* Track */

/* .dark-mode ::-webkit-scrollbar-track {
  @apply bg-christo-dark-1;
} */

/* Handle */

/* .dark-mode ::-webkit-scrollbar-thumb {
  @apply bg-christo-dark-2;
} */

/* Handle on hover */

/* .dark-mode ::-webkit-scrollbar-thumb:hover {
  @apply bg-christo-dark-2;
} */
</style>
