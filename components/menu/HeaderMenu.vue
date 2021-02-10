<template>
  <div class="sidebar ">
    <!-- <div
      class="sidebar-backdrop"
      @click="closeSidebarPanel"
      v-if="isPanelOpen"
    ></div> -->
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { store, mutations } from "@/store/store.js";

export default {
  methods: {
    closeSidebarPanel: mutations.toggleNav
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen;
    }
  }
};
</script>
<style lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.6s cubic-bezier(0, 0.55, 0.45, 1);
}

.slide-enter,
.slide-leave-to {
  transform: translateY(100%);
  // transition: all 0.6ms cubic-bezier(0, 0.55, 0.45, 1);
}

.sidebar-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
  display: none;
}

.dark-mode div.sidebar div.sidebar-panel {
  @apply bg-christo-dark-3;
  @apply text-christo-light-3;
}

.light-mode div.sidebar div.sidebar-panel {
  @apply bg-christo-light-3;
  @apply text-christo-dark-3;
}

// .light-mode .sidebar .sidebar-panel {
//   --page-background: linear-gradient(#e2e8f0 0%, #a0aec0 90%);

//   @apply text-black;
// }

.sidebar-panel {
  overflow-y: auto;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 92vh;
  z-index: 999;
  width: 100vw;
}
</style>
