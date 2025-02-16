<template>
    <div class="game-banner-design-container">
        <img 
            v-for="num in 15"
            :key="`banner-cover-${num}`"
            class="banner-cover"
            :src="`/assets/images/project/game-banner-design/banner-${String(num).padStart(2, '0')}/cover.jpg`" 
            alt="banner-cover"
            @click="router.push(`/project/game-banner-design/${num}`)"
        >
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style lang="scss" scoped>
.game-banner-design-container {
    .banner-cover {
        width: 32.3077%;
        margin: 0 1.53845% 50px 0;
        cursor: pointer;
        border-radius: 20px;

        &:nth-child(3n) {
            margin: 0 0 50px;
        }
    }
}
</style>