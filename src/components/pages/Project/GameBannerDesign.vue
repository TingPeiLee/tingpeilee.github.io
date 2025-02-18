<template>
    <div class="game-banner-design-container">
        <div
            v-for="num in 15"
            :key="`banner-cover-${num}`" 
            class="img-container"
            @click="router.push(`/project/game-banner-design/${num}`)"
        >
            <img 
                class="banner-cover"
                :src="`/assets/images/project/game-banner-design/banner-${String(num).padStart(2, '0')}/cover.jpg`" 
                alt="banner-cover"
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style lang="scss" scoped>
.game-banner-design-container {
    .img-container {
        position: relative;
        display: inline-block;
        width: 32.3077%;
        margin: 0 1.53845% 50px 0;
        cursor: pointer;
        border-radius: 20px;
        padding-bottom: calc(32.3077% / 744 * 331);
        overflow: hidden;

        @media (max-width: 992px) {
            width: 100%;
            padding-bottom: calc(100% / 744 * 331);
            margin: 0 0 30px;

            &:nth-child(3n) {
                margin: 0 0 30px;
            }
        }

        &:hover {
            .banner-cover {
                transform: scale(1.1);
            }    
        }

        &:nth-child(3n) {
            margin: 0 0 50px;
        }

        .banner-cover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: all 0.3s;
        }
    }
}
</style>