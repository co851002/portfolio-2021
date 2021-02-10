

import barba from '@barba/core';
import { defineNuxtPlugin } from "@nuxtjs/composition-api";

export default defineNuxtPlugin(({ app }) => {
  app.barba = new barba.init({
    // ...
  });
});

