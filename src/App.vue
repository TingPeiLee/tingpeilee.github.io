
<template>
  <div 
    class="app-container"
    :class="{
      'dark-bg': ['/', '/resume'].indexOf(route.path) !== -1
    }"
  >
    <div 
      v-if="['/', '/resume'].indexOf(route.path) !== -1"
      class="decoration-container"
    >
      <img 
        class="gradient-left"
        src="/assets/images/index/gradient-left.png"
      />

      <img 
        class="star first"
        src="/assets/images/index/star.png"
      />

      <img 
        class="star second"
        src="/assets/images/index/star.png"
      />

      <img 
        v-if="route.path === '/'"
        class="circle"
        src="/assets/images/index/circle.png"
      />

      <img 
        class="gradient-right"
        src="/assets/images/index/gradient-right.png"
      />

      <img 
        class="star third"
        src="/assets/images/index/star.png"
      />

      <img 
        class="star fourth"
        src="/assets/images/index/star.png"
      />
    </div>

    <Header />

    <div class="page-container">
      <router-view />
    </div>

    <Footer />

    <ScrollTopBtn />

    <ImageZoomContainer v-if="config.zoomImageIndex !== undefined" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import ScrollTopBtn from './components/ScrollTopBtn.vue';
import ImageZoomContainer from './components/ImageZoomContainer.vue';

import { config } from './config';

const route = useRoute();
</script>

<style lang="scss" scoped>
.app-container {
  position: relative;
  background-color: #F7F5F5;
  transition: background-color 0.3s;
  scroll-behavior: smooth;
  
  &.dark-bg {
    background-color: #FBF4EE;
  }

  .decoration-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 1;

    .gradient-left {
      position: absolute;
      top: 146px;
      left: -6.04%;
      width: 28.02%;
      z-index: 1;
    }

    .circle {
      position: absolute;
      top: 476.67px;
      right: 24.853%;
      width: 30.22%;
      transform: rotate(-42.21deg);
      z-index: 2;
    }

    .gradient-right {
      position: absolute;
      top: 239px;
      right: -23.33%;
      width: 67.48%;
      z-index: 1;
    }

    .star {
      position: absolute;
      width: 3.07%;
      z-index: 3;

      &.first {
        top: 402px;
        left: 4.5%;
      }

      &.second {
        top: 485px;
        left: 6.8%;
      }

      &.third {
        top: 958px;
        left: 57.19%;
      }

      &.fourth {
        top: 710px;
        right: 1.56%;
      }
    }
  }

  .page-container {
    position: relative;
    z-index: 2;
  }
}
</style>
