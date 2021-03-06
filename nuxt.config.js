import webpack from "webpack";
import nodeExternals from 'webpack-node-externals'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  // ssr: false,
   /*
   ** Router configuration
   */
  router: {
    base: '/portfolio-2021/',
    scrollBehavior: async function(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }

      const findEl = async (hash, x = 0) => {
        return (
          document.querySelector(hash) ||
          new Promise(resolve => {
            if (x > 50) {
              return resolve(document.querySelector("#app"));
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1));
            }, 100);
          })
        );
      };

      if (to.hash) {
        console.log('here hash')
        let el = await findEl(to.hash);
        if ("scrollBehavior" in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
        } else {
          return window.scrollTo(0, el.offsetTop);
        }
      }

      return { x: 0, y: 0 };
    }
  },


  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "portfolio",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 'vuesax/dist/vuesax.css',
    // "@/assets/main.css",
    // "@/assets/css/tailwind.scss",
    // "vue-slick-carousel/dist/vue-slick-carousel.css",
    // "vue-slick-carousel/dist/vue-slick-carousel-theme.css"
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/infiniteloading", ssr: false },
    { src: "~/plugins/vue-slick-carousel", ssr: false },
    { src: "~/plugins/vue-masonry-css", mode: "client" },
    // { src: "~/plugins/vue-aos", mode: "client" },
    { src: "~/plugins/co-utils" },
    // { src: "~/plugins/fss" }
    {src: '~plugins/vue-flat-surface-shader.js', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: [ { path: '~/components', global: 'dev' } ],


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/color-mode",
    "@nuxtjs/svg",
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    // Simple usage
    // '@nuxtjs/vuetify',
    // Simple usage
    // 'nuxt-buefy',
    "@nuxtjs/composition-api",
    "@nuxtjs/stylelint-module",
    "nuxt-gsap-module"
  ],

  gsap: {
    /* module options */
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    },
    extraEases: {
      expoScaleEase: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxtjs/fontawesome",
    "nuxt-purgecss"
    // 'nuxt-buefy',
  ],

  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-material-oceanic.css"
      }
    },
    nestedProperties: ["author.name"]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // extractCSS: true,
    transpile: ["gsap"],
    // parallel: true,
    // hardSource: true,
    // cache: true,
    // extend(config) {
    //   if (process.server) {
    //     config.externals = [
    //       nodeExternals({
    //         whitelist: [/^vue-flat-surface-shader/]
    //       })
    //     ]
    //   }
    // }
  },
  purgeCSS: {
    whitelist: ["dark-mode"],
    oide: "postcss"
  }

  // postcss: {
  //   plugins: { tailwindcss: path.resolve(__dirname, "./tailwind.config.js") }
  // }
};
