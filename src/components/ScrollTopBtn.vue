<template>
    <button 
        v-show="isVisible"
        class="scroll-top-btn"
        @click="scrollToTop"
    >
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.687 7.875">
            <path d="M635.621,375.374a0.7,0.7,0,0,0-.147.017,1.31,1.31,0,0,0-.14.041,0.625,0.625,0,0,0-.129.065,0.7,0.7,0,0,0-.123.1l-3.176,3.176a0.932,0.932,0,0,0-.164.252,0.7,0.7,0,0,0-.059.281,0.737,0.737,0,0,0,.059.287,0.767,0.767,0,0,0,.164.247l3.176,3.175a0.734,0.734,0,0,0,.252.17,0.763,0.763,0,0,0,.281.053,0.819,0.819,0,0,0,.287-0.053,0.617,0.617,0,0,0,.246-0.17,0.752,0.752,0,0,0,.164-0.246,0.7,0.7,0,0,0,0-.562,0.752,0.752,0,0,0-.164-0.246l-2.648-2.649,2.648-2.66a0.752,0.752,0,0,0,.164-0.246,0.7,0.7,0,0,0,0-.563,0.774,0.774,0,0,0-.164-0.246,0.855,0.855,0,0,0-.117-0.1,0.488,0.488,0,0,0-.129-0.065c-0.047-.015-0.094-0.029-0.141-0.041a0.609,0.609,0,0,0-.14-0.017h0Z" transform="translate(-631.688 -375.375)" />
        </svg>
    </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isVisible = ref(false);

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const checkScroll = () => {
    isVisible.value = window.scrollY > 149;
};

onMounted(() => {
    window.addEventListener('scroll', checkScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', checkScroll);
});
</script>

<style scoped>
.scroll-top-btn {
    position: fixed;
    bottom: 55px;
    right: 55px;
    width: 65px;
    height: 65px;
    background-color: #BCD5ED;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    z-index: 4;


    @media (max-width: 922px) {
        width: 35px;
        height: 35px;
        bottom: 25px;
        right: 25px;
    }

    .icon {
        fill: #fff;
        transform: rotate(90deg);
        width: 14.63px;

        @media (max-width: 922px) {
            width: 8px;
        }
    }
}
</style>
