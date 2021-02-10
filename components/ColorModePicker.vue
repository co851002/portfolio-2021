<template>
  <div>
    <div class="">
      <component
        :is="`icon-${color}`"
        :class="getClasses(color)"
        @click="changeColorMode"
      />
    </div>
  </div>
</template>

<script>
// import IconSystem from "@/assets/icons/system.svg?inline";
import IconLight from "@/assets/icons/light.svg?inline";
import IconDark from "@/assets/icons/dark.svg?inline";
// import IconSepia from "@/assets/icons/sepia.svg?inline";
export default {
  components: {
    // IconSystem,
    IconLight,
    IconDark
    // IconSepia
  },
  data() {
    return {
      colors: ["light", "dark"]
    };
  },
  computed: {
    color() {
      return this.$colorMode.value === "light" ? "dark" : "light";
    }
  },
  methods: {
    getClasses(color) {
      // Does not set classes on ssr when preference is system (because we don't know the preference until client-side)
      if (this.$colorMode.unknown) {
        return {};
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      };
    },
    changeColorMode() {
      this.$colorMode.preference =
        this.$colorMode.value === "light" ? "dark" : "light";
    }
  }
};
</script>

<style scoped>
.feather {
  position: relative;
  top: 0;
  cursor: pointer;
  margin: 0;
  border-radius: 5px;
}

/* .feather:hover {
  top: -3px;
} */

/* .feather.preferred {
  border-color: var(--color-primary);
  top: -3px;
}

.feather.selected {
  color: var(--color-secondary);
  color: text-violet-500;
} */
</style>
