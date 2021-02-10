<template>
  <div
    class="flex"
    id="burger"
    :class="{ active: isBurgerActive }"
    @click.prevent="toggle"
  >
    <slot>
      <button type="button" class="burger-button outline-none cursor-pointer stroke-current flex justify-end align-middle my-6 mx-4 bg-current" title="Menu">
        <span class="hidden">Toggle menu</span>
        <span class="burger-bar burger-bar--1 bg-current"></span>
        <span class="burger-bar burger-bar--2 bg-current"></span>
        <span class="burger-bar burger-bar--3 bg-current"></span>
      </button>
      <!-- <svg
        :class="{ active: isBurgerActive }"
        class="ham hamRotate ham1 stroke-current flex justify-end"
        viewBox="0 0 100 100"
        width="80"
      >
        >
        <path
          class="line top"
          d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
        />
        <path class="line middle" d="m 30,50 h 40" />
        <path
          class="line bottom"
          d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
        />
      </svg> -->
    </slot>
  </div>
</template>

<script>
import { store, mutations } from "@/store/store.js";

export default {
  computed: {
    isBurgerActive() {
      return store.isNavOpen;
    }
  },
  methods: {
    toggle() {
      mutations.toggleNav();
    }
  }
};
</script>
<style lang="scss">

button:focus {
  outline: 0;
}

.burger-button {
  position: relative;
  height: 24px;
  width: 40px;
  display: block;
  z-index: 999;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar {
  // background-color: #130f40;
  position: absolute;
  height: 2px;
  width: 100%;
  transition:
    transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar--1 {
  left: 0;
  transform: translateY(-6px) scaleX(0.8);
  transform-origin: right center;
}

.burger-button:hover .burger-bar--1 {
  transform: translateY(-6px) scaleX(1);
}

.no-touchevents .burger-bar--1:hover {
  transform: translateY(-6px) scaleX(1);
}

.burger-bar--2 {
  left: 0;
  transform-origin: 100% 50%;
  transform: scaleX(1);
}

.burger-button:hover .burger-bar--2 {
  transform: scaleX(0.8);
  transform-origin: left center;
}

.no-touchevents .burger-bar--2:hover {
  transform: scaleX(0.8);
  transform-origin: left center;
}

.burger-bar--3 {
  left: 0;
  transform: translateY(6px) scaleX(0.8);
  transform-origin: right center;
}

.burger-button:hover .burger-bar--3 {
  transform: translateY(6px) scaleX(1);
}

.no-touchevents .burger-bar--3:hover {
  transform: translateY(6px) scaleX(1);
}

#burger.active .burger-button {
  transform: rotate(-180deg);
}

// #burger.active .burger-bar {
//   background-color: #fff;
// }

#burger.active .burger-bar--1 {
  transform: rotate(45deg);
  transform-origin: center;
}

#burger.active .burger-bar--2 {
  opacity: 0;
}

#burger.active .burger-bar--3 {
  transform: rotate(-45deg);
  transform-origin: center;
}
</style>
