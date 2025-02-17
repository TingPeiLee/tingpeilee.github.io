<template>
    <div 
      class="header-container"
      :style="{
        backgroundColor: ['/', '/resume'].indexOf(route.path) !== -1 ? '#FBF4EE' : '#F7F5F5'
      }"
    >
      <img
        class="logo" 
        @click="router.push('/')" 
        src="/assets/svg/logo.svg"
        alt="logo"
      />

      <div class="nav-list">
        <div 
          class="nav"
          :class="{
            'active': route.path === '/'
          }"
          @click="router.push('/')"
        >
          Home
        </div>

        <div 
          class="nav" 
          :class="{
            'active': route.path.includes('/project')
          }"
          @click="router.push('/project/all')"
        >
          Projects
        </div>

        <div 
          class="nav" 
          :class="{
            'active': route.path === '/resume'
          }"
          @click="router.push('/resume')"
        >
          Resume
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
</script>

<style lang="scss" scoped>
.header-container {
    position: fixed;
    top: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 1.625rem 5.3125%;
    z-index: 3;
    box-sizing: border-box;

    .logo {
        width: auto;
        height: 97px;
        cursor: pointer;

        @media (max-width: 992px) {
          height: 46.3px;
        }
    }
    
    .nav-list {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        display: flex;
        align-items: center;

        .nav {
            position: relative;
            display: inline-block;
            font-size: 1.5rem;
            cursor: pointer;

            &:nth-child(1),
            &:nth-child(2) {
              margin-right: 56px;
            }

            &::after {
              position: absolute;
              bottom: -16px;
              opacity: 0;
              left: 50%;
              transform: translateX(-50%);
              content: '';
              width: 10%;
              height: 3px;
              background-color: #956D65;
              transition: all 0.3s;
              transform-origin: center top;
            }

            &:hover,
            &.active {
              &::after {
                position: absolute;
                bottom: -16px;
                left: 50%;
                transform: translateX(-50%);
                content: '';
                width: 100%;
                opacity: 1;
                height: 3px;
                background-color: #956D65;
              }
            }
        }
    }
}
</style>