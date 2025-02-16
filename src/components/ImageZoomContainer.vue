<template>
    <div 
        class="image-zoom-container"
        :class="{
            'zoom-in': zoomInStatus
        }"
        @click="toggleZoom"
    >
        <div
            v-if="config.zoomImageUrlList !== undefined && config.zoomImageIndex !== undefined"
            class="img"
            :style="{
                'background-image': `url(${config.zoomImageUrlList[config.zoomImageIndex]})`,
                ...heightStyle
            }"
        />

        <template v-if="!zoomInStatus">
            <div
                class="close-btn"
                @click="resetZoomImage"
            >
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.09 8.08">
                    <path d="M5.18 4.05L7.84 6.7a.75.75 0 0 1 .2.27.88.88 0 0 1 0 .31.83.83 0 0 1-.06.3.63.63 0 0 1-.18.27.42.42 0 0 1-.12.11l-.15.08h-.15a.72.72 0 0 1-.3 0h-.15l-.15-.08a.41.41 0 0 1-.12-.11L4.04 5.18 1.37 7.84a.42.42 0 0 1-.12.11l-.15.08H.95a.72.72 0 0 1-.3 0H.5l-.15-.08a.41.41 0 0 1-.12-.11.63.63 0 0 1-.19-.26.83.83 0 0 1 0-.3.88.88 0 0 1 0-.31.75.75 0 0 1 .18-.27L2.9 4.05.24 1.38a.63.63 0 0 1-.2-.27.83.83 0 0 1 0-.3.88.88 0 0 1 0-.29.75.75 0 0 1 .18-.27.73.73 0 0 1 .27-.18.84.84 0 0 1 .61 0 .73.73 0 0 1 .27.18l2.67 2.66L6.71.24a.73.73 0 0 1 .27-.18.84.84 0 0 1 .61 0 .73.73 0 0 1 .27.18.75.75 0 0 1 .18.28.88.88 0 0 1 0 .29.83.83 0 0 1-.06.3.63.63 0 0 1-.18.27L5.18 4.05z" />
                </svg>
            </div>
    
            <div class="pagination-area left">
                <div class="btn" @click.stop="prevZoomImage">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.687 7.875">
                        <path d="M635.621,375.374a0.7,0.7,0,0,0-.147.017,1.31,1.31,0,0,0-.14.041,0.625,0.625,0,0,0-.129.065,0.7,0.7,0,0,0-.123.1l-3.176,3.176a0.932,0.932,0,0,0-.164.252,0.7,0.7,0,0,0-.059.281,0.737,0.737,0,0,0,.059.287,0.767,0.767,0,0,0,.164.247l3.176,3.175a0.734,0.734,0,0,0,.252.17,0.763,0.763,0,0,0,.281.053,0.819,0.819,0,0,0,.287-0.053,0.617,0.617,0,0,0,.246-0.17,0.752,0.752,0,0,0,.164-0.246,0.7,0.7,0,0,0,0-.562,0.752,0.752,0,0,0-.164-0.246l-2.648-2.649,2.648-2.66a0.752,0.752,0,0,0,.164-0.246,0.7,0.7,0,0,0,0-.563,0.774,0.774,0,0,0-.164-0.246,0.855,0.855,0,0,0-.117-0.1,0.488,0.488,0,0,0-.129-0.065c-0.047-.015-0.094-0.029-0.141-0.041a0.609,0.609,0,0,0-.14-0.017h0Z" transform="translate(-631.688 -375.375)" />
                    </svg>
                </div>
            </div>
    
            <div class="pagination-area right">
                <div class="btn" @click.stop="nextZoomImage">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.687 7.875">
                        <path d="M635.621,375.374a0.7,0.7,0,0,0-.147.017,1.31,1.31,0,0,0-.14.041,0.625,0.625,0,0,0-.129.065,0.7,0.7,0,0,0-.123.1l-3.176,3.176a0.932,0.932,0,0,0-.164.252,0.7,0.7,0,0,0-.059.281,0.737,0.737,0,0,0,.059.287,0.767,0.767,0,0,0,.164.247l3.176,3.175a0.734,0.734,0,0,0,.252.17,0.763,0.763,0,0,0,.281.053,0.819,0.819,0,0,0,.287-0.053,0.617,0.617,0,0,0,.246-0.17,0.752,0.752,0,0,0,.164-0.246,0.7,0.7,0,0,0,0-.562,0.752,0.752,0,0,0-.164-0.246l-2.648-2.649,2.648-2.66a0.752,0.752,0,0,0,.164-0.246,0.7,0.7,0,0,0,0-.563,0.774,0.774,0,0,0-.164-0.246,0.855,0.855,0,0,0-.117-0.1,0.488,0.488,0,0,0-.129-0.065c-0.047-.015-0.094-0.029-0.141-0.041a0.609,0.609,0,0,0-.14-0.017h0Z" transform="translate(-631.688 -375.375)" />
                    </svg>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
import { config, resetZoomImage, prevZoomImage, nextZoomImage } from '../config';

const zoomInStatus = ref(false);
const imageWidth = ref(0);
const imageHeight = ref(0);

const toggleZoom = () => {
    zoomInStatus.value = !zoomInStatus.value;
}

const heightStyle = computed(() => {
    return zoomInStatus.value ? {
        'padding-bottom': `calc(100% / ${imageWidth.value} * ${imageHeight.value})`
    } : {
        'height': '100%'
    }
});

const setImageWidthHeight = () => {
    if (config.value.zoomImageUrlList === undefined || config.value.zoomImageIndex === undefined) return;

    const img = new Image();
    img.src = config.value.zoomImageUrlList[config.value.zoomImageIndex];

    img.onload = () => {
        imageWidth.value = img.width;
        imageHeight.value = img.height;
    }
}

watch(() => config.value.zoomImageIndex, (val) => {
    if (val !== undefined) setImageWidthHeight();
}, { immediate: true });

onMounted(() => {
    window.addEventListener('popstate', resetZoomImage);
});

onBeforeUnmount(() => {
    window.removeEventListener('popstate', resetZoomImage);
});
</script>

<style lang="scss" scoped>
.image-zoom-container {
    position: fixed;
    display: flex;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    background-color: #000;
    cursor: zoom-in;
    overflow: scroll;
    overscroll-behavior: contain;
    max-height: 100vh;

    &.zoom-in {
        .img {
            background-size: 100% auto;
            cursor: zoom-out;
        }
    }

    .img {
        width: 100%;
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-position: center top;
        cursor: zoom-in;
        z-index: 1;
    }

    .pagination-area {
        position: absolute;
        top: 0;
        width: 30vw;
        height: 100%;
        z-index: 2;

        &.left {
            left: 0;

            .btn {
                left: 20px;
            }
        }

        &.right {
            right: 0;

            .btn {
                right: 20px;

                .icon {
                    transform: scaleX(-1);
                }
            }
        }

        &:hover {
            .btn {
                display: flex;
            }
        }

        .btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            display: none;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background-color: #343434;
            border-radius: 50%;
            cursor: pointer;

            &:hover {
                background-color: dimgray;
            }

            .icon {
                fill: #fff;
                width: 7.74px;
            }
        }
    }

    .close-btn {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        background-color: #343434;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        z-index: 3;

        &:hover {
            background-color: dimgray;
        }

        .icon {
            fill: #fff;
            width: 10px;
        }
    }
}
</style>