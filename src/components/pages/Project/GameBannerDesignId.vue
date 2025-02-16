<template>
    <ImageListContainer :imageUrlList="imageUrlList" />

    <div 
        class="back-btn"
        @click="router.push('/project/game-banner-design')"
    >
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.687 7.875">
            <path d="M635.621,375.374a0.7,0.7,0,0,0-.147.017,1.31,1.31,0,0,0-.14.041,0.625,0.625,0,0,0-.129.065,0.7,0.7,0,0,0-.123.1l-3.176,3.176a0.932,0.932,0,0,0-.164.252,0.7,0.7,0,0,0-.059.281,0.737,0.737,0,0,0,.059.287,0.767,0.767,0,0,0,.164.247l3.176,3.175a0.734,0.734,0,0,0,.252.17,0.763,0.763,0,0,0,.281.053,0.819,0.819,0,0,0,.287-0.053,0.617,0.617,0,0,0,.246-0.17,0.752,0.752,0,0,0,.164-0.246,0.7,0.7,0,0,0,0-.562,0.752,0.752,0,0,0-.164-0.246l-2.648-2.649,2.648-2.66a0.752,0.752,0,0,0,.164-0.246,0.7,0.7,0,0,0,0-.563,0.774,0.774,0,0,0-.164-0.246,0.855,0.855,0,0,0-.117-0.1,0.488,0.488,0,0,0-.129-0.065c-0.047-.015-0.094-0.029-0.141-0.041a0.609,0.609,0,0,0-.14-0.017h0Z" transform="translate(-631.688 -375.375)" />
        </svg>

        <div class="text">Back</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const { id } = route.params;

const imageSum = 3;
const imageUrlList = ref<string[]>([]);

const fileTypeList = [
    'jpg',
    'png',
    'jpg'
]

for (let i = 1; i <= imageSum; i += 1) {
    imageUrlList.value.push(`/assets/images/project/game-banner-design/banner-${String(id).padStart(2, '0')}/image-${String(i).padStart(2, '0')}.${fileTypeList[i - 1]}`);
}
</script>

<style lang="scss" scoped>
.back-btn {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: inline-flex;
    margin-top: 92.32px;
    padding: 17.5px 83px;
    border-radius: 50px;
    background-color: #D8BBB7;
    cursor: pointer;

    .icon {
        fill: #fff;
        position: absolute;
        left: 33px;
        width: 16px;
    }

    .text {
        color: #fff;
        font-family: "NotoSansTC", sans-serif;
        font-weight: 700;
        font-size: 20px;
    }
}
</style>
