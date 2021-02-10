<template>
  <div class="font-sans antialiased fixed w-full z-10" id="app">
    <nav class="flex items-top justify-between bg-christo-light-3 dark:bg-christo-dark-3 ">
      <div class="flex justify-between w-full">
        <NuxtLink to="/" class="flex align-middle justify-center p-4">
          <Logo />
          <div class="row ml-2 grid text-current ">
            <span class="font-semibold text-xl tracking-tight row leading-5"
              >Christo
            </span>
            <span class="font-semibold text-xl tracking-tight row leading-5"
              >Oosthuizen</span
            >
          </div>
        </NuxtLink>
      </div>
      <color-mode-picker class="py-6 flex justify-end" />
      <burger class="overflow-hidden"></burger>
    </nav>
    <header-menu>
      <div class="h-1 py-0.5 w-screen bg-current"></div>
      <ul class="">
        <li v-for="item of nav" :key="item.name" class="" @click.prevent="toggle()">
          <NuxtLink
            :to="{path: item.path, hash: item.hash}"
            class="no-underline block py-4 px-8 w-full text-left text-3xl font-bold text-current"
            >{{ item.name }}
          </NuxtLink>
          <!-- <NuxtLink
            :to="item.path"
            class="no-underline block py-4 px-8 w-full text-left text-3xl font-bold text-current"
            >{{ item.name }}
          </NuxtLink> -->
        </li>
      </ul>
    </header-menu>
  </div>
</template>

<script>
import { store, mutations } from "@/store/store.js";
import ColorModePicker from "@/components/ColorModePicker";
import Logo from "@/components/menu/Logo";;
import Burger from "@/components/menu/Burger";
import HeaderMenu from "@/components/menu/HeaderMenu";

export default {
  components: {
    ColorModePicker,
    Logo,
    Burger,
    HeaderMenu
  },
  data() {
    return {
      nav: [
        {
          name: "About",
          path: '/',
          hash: "about",
        },
        {
          name: "Projects",
          path: "/",
          hash: 'recents-projects'

        },
        {
          name: "Contact",
          path: '/',
          hash: "contact"
        }
      ]
    };
  },
  methods: {
    toggle() {
      mutations.toggleNav();
    }
  },
  computed: {
    isBurgerActive() {
      return store.isNavOpen;
    }
  },
};
</script>

<style lang="scss" scoped>
// .line {
//   width: 30px;
//   height: 3px;
//   background-color: #ecf0f1;
//   display: block;
//   margin: 3px auto;
//   transition: all 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86);
// }

// .hamburger:hover {
//   cursor: pointer;
// }

/* TWELVE */

// #hamburger-12.is-active .line:nth-child(1) {
//   opacity: 0;
//   -webkit-transform: translateX(-100%);
//   -ms-transform: translateX(-100%);
//   -o-transform: translateX(-100%);
//   transform: translateX(-100%);
// }

// #hamburger-12.is-active .line:nth-child(3) {
//   opacity: 0;
//   -webkit-transform: translateX(100%);
//   -ms-transform: translateX(100%);
//   -o-transform: translateX(100%);
//   transform: translateX(100%);
// }
// nav {
//   height: 8vh;
// }
</style>
