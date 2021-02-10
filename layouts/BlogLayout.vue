<template>
  <div class="flex flex-col h-screen blog-layout">
    <nav-header />
    <Nuxt class="flex-1 overflow-y-auto" />
  </div>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
