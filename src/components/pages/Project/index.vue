<template>
    <div class="project-container">
        <div class="title">
            {{ title }}
        </div>

        <div class="container">
            <router-view />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const title = computed(() => {
    const route = useRoute();
    
    if (route.path.includes('graphic-design')) {
        return 'Graphic design';
    } else if (route.path.includes('visual-identity')) {
        return 'Visual identity';
    } else if (route.path.includes('website-design')) {
        return 'Website design';
    } else if (route.path.includes('game-banner-design')) {
        return 'Game banner design';
    } else if (route.path.includes('display-layout')) {
        return 'Display layout';
    } else {
        return 'Projects';
    }
})
</script>

<style lang="scss" scoped>
.project-container {
    margin-top: 66px;

    .title {
        font-size: 64px;
        font-family: "AbhayaLibre", sans-serif;
        font-weight: 400;
        text-align: center;
        margin-bottom: 69px;
    }

    .container {
        padding: 0 13.96% 263px;
    }
}
</style>