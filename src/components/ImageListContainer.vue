<template>
    <div class="image-list-container">
        <img 
            v-for="(url, idx) in imageUrlList"
            :key="idx"
            class="img"
            :src="url" 
            alt="img"
            @click="zoomImage(idx)"
        >
    </div>
</template>

<script setup lang="ts">
import { config } from '../config';

const props = defineProps({
    imageUrlList: {
        type: Array<string>,
        default: () => ([])
    }
})

const zoomImage = (index: number) => {
    config.value.zoomImageIndex = index;
    config.value.zoomImageUrlList = props.imageUrlList;
}
</script>

<style lang="scss" scoped>
.image-list-container {
    .img {
        width: 100%;
        margin-bottom: 20px;
        cursor: zoom-in;

        &:last-child {
            margin-bottom: 0;
        }
    }
}

.image-zoom-container {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1;

    .mask {
        background-color: rgba(0, 0, 0, 0.7);
    }
}
</style>