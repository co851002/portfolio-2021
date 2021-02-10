<template>
  <div>
    <section
      class="home page flex justify-center align-middle text-center h-screen"
    >
      <div
        id="container"
        ref="container"
        class="w-full h-screen absolute top-0 up "
      ></div>
      <div class="flex flex-col align-middle justify-center z-10 fade">
        <h1 class="text-4xl font-bold ">
          Hi, my name is Christo. <br />
          I'm a fullstack developer <br />based in London, UK
        </h1>
      </div>

      <!-- <h1 class="text-xl flex justify-center content-center text-center mt-6">
      I frequently work with
    </h1>
    <div class="carousel-wrapper max-w-2xl block mx-auto">
      <VueSlickCarousel v-bind="slickOptions" class="max-h-2">
        <div v-for="i in slider" :key="i.name" class="img-wrapper">
          <img
            :src="require(`@/assets/images/stack/${i.src}.svg`)"
            :alt="i.name"
            class="h-24 px-8 bw fill-current"
          />
        </div>
      </VueSlickCarousel>
    </div> -->
    </section>

    <section
      class="home page flex justify-center align-middle text-center h-screen"
    >
      <about class="up" id="about"/>
    </section>

     <section
      class="home page flex justify-center align-middle text-center h-screen "
    >
      <recents class="up" id="recents-projects"/>
    </section>
    <!-- Need custom projects extract here -->
    <!-- <section>
      <projects/>
    </section> -->
    <section
      class="home page h-screen flex justify-center"
    >
      <!-- <svg
        class="fill-current stroke-current w-screen mt-16"
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="75"
        width="100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0 L50 100 L100 0 Z" class="w-screen"></path>
      </svg> -->
      <div class="home page flex justify-center align-middle text-center h-1/2">
        <contact class="up" id="contact" />
      </div>
    </section>
  </div>
</template>

<script>
import * as THREE from "three";
// import {gsap, ScrollTrigger, ScrollToPlugin } from 'gsap';
import Logo from "@/assets/images/portfolio.svg?inline";
import About from "@/pages/about";
import Projects from "@/pages/projects";
import Contact from "@/pages/contact";
import Recents from "@/pages/recents";


export default {
  components: {
    Logo,
    About,
    Projects,
    Contact,
    Recents
  },
  data() {
    return {
      sections: [],
      slickOptions: {
        slidesToShow: 5,
        arrows: false,
        autoplay: true,
        centerPadding: "50px",
        fade: false,
        speed: 500
      },
      slider: [
        { name: "html-5", src: "html-5" },
        { name: "css-3", src: "css-3" },
        { name: "Javascript", src: "javascript" },
        { name: "Vue", src: "vue" },
        { name: "Nuxt", src: "nuxt" },
        { name: "Tailwind", src: "tailwindcss" },
        { name: "AWS", src: "aws" },
        { name: "Node", src: "nodejs-icon" },
        { name: "Github", src: "github-icon" },
        { name: "Jamstack", src: "jamstack" },
        { name: "Tensorflow", src: "tensorflow" }
      ],
      camera: null,
      scene: null,
      renderer: null,
      cube: null
    };
  },
  methods: {
    init: function() {
      const gsap = this.$gsap;
      let container = this.$refs.container;
      this.camera = new THREE.PerspectiveCamera(
        70,
        container.clientWidth / container.clientHeight,
        0.01,
        10
      );
      this.camera.position.z = 1;

      this.scene = new THREE.Scene();
      // this.scene.background = new THREE.Color( 0xff0000 );

      let geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
      let material = new THREE.MeshNormalMaterial();

      this.mesh = new THREE.Mesh(geometry, material);
      this.scene.add(this.mesh);

      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);
    },
    animate: function() {
      requestAnimationFrame(this.animate);
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.02;
      this.renderer.render(this.scene, this.camera);
    },
    goToSection: function(section, anim) {
      this.$gsap.to(window, {
        scrollTo: { y: section, autoKill: false },
        duration: 1
      });

      if (anim) {
        anim.restart();
      }
    }
  },
  mounted() {
    // const gsap = this.$gsap
    // const ExpoScaleEase = this.$ExpoScaleEase
    // const ScrollToPlugin = this.$ScrollToPlugin
    // const ScrollTrigger = this.$ScrollTrigger

    // gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, ExpoScaleEase)

    this.sections = document.querySelectorAll("section");
    this.sections.forEach(section => {
      const intoAnim = this.$gsap
        .timeline({ paused: true })
        .from(section.querySelector(".up"), {
          delay: 0.5,
          xPercent: 200,
          duration: 0.8
        });

      this.$ScrollTrigger.create({
        trigger: section,
        onEnter: () => this.goToSection(section, intoAnim)
      });

      this.$ScrollTrigger.create({
        trigger: section,
        start: `${window.innerHeight/3} bottom`,
        onEnterBack: () => this.goToSection(section, intoAnim)
      });
    });
    console.log(this.sections);
    this.init();
    this.animate();
  }
};
</script>

<style>
.carousel-wrapper {
  padding: 40px;
}

.img {
  margin: auto;
  width: 100px;
  height: 100px;
  background-image: linear-gradient(gray 100%, transparent 0);
}

.title {
  display: block;
  font-weight: 300;
  font-size: 55px;
  color: #35495e;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 25px 0;
}

.subtitle {
  font-weight: 300;
  font-size: 1.1rem;
  color: #526488;
  word-spacing: 2px;
  padding-bottom: 15px;
  max-width: 600px;
}

.subtitle a {
  font-weight: 500;
  color: inherit;
}

.links {
  padding-top: 15px;
  margin-bottom: 20px;
}

.content-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 500px;
}

.plus {
  font-size: 2.5rem;
  margin: 15px;
  color: #35495e;
}

.h3 {
  font-weight: 400;
  margin: 10px;
}

.bw {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
</style>
