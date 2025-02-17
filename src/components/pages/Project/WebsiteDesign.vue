<template>
    <div class="image-list-container">
        <div 
            v-for="(url, idx) in imageUrlList"
            :key="idx"
            class="img-container"
            @click="zoomImage(idx)"
        >
            <img
                class="img"
                :src="url" 
                alt="img"
            />

            <div
                v-if="idx === 1"
                class="link"
                @click.stop="openWindow(slotList[0].link)" 
            >
                【 專案網址 】： {{ slotList[0].link }}
            </div>
            <div 
                v-else-if="[15, 16, 17, 18].indexOf(idx) !== -1"
                class="button"
                :style="{
                    'background-image': `url(${url.replace('.jpg', '-btn.png')})`
                }"
                @click.stop="openWindow(slotList[idx - 14].link)"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { config } from '../../../config';

type Slot = {
    link: string;
    imgUrl?: string;
}

const slotList: Slot[] = [
    {
        link: 'https://www.bbin-news.com'
    },
    {
        link: 'https://bbin-news.org/event_custom/E13/#/'
    },
    {
        link: 'https://bbin-news.org/event_custom/E02/#/'
    },
    {
        link: 'https://bbin-news.org/event_custom/E19/#/'
    },
    {
        link: 'https://bbin-news.org/event_custom/E28/#/'
    }
]

const imageSum = 19;
const imageUrlList = ref<string[]>([]);

for (let i = 1; i <= imageSum; i += 1) {
    imageUrlList.value.push(`/assets/images/project/website-design/image-${String(i).padStart(2, '0')}.jpg`);
}

const zoomImage = (index: number) => {
    config.value.zoomImageIndex = index;
    config.value.zoomImageUrlList = imageUrlList.value;
}

const openWindow = (link: string) => {
    window.open(link, '_blank');
}
</script>

<style lang="scss" scoped>
.image-list-container {
    .img-container {
        position: relative;
        width: 100%;
        cursor: zoom-in;
        margin-bottom: 20px;

        &:last-child {
            margin-bottom: 0;
        }

        .img {
            position: relative;
            width: 100%;
            z-index: 1;
        }

        .link {
            position: absolute;
            bottom: 50px;
            font-size: 1.4rem;
            left: 50%;
            transform: translateX(-50%);
            cursor: pointer;
            color: #000;
            z-index: 2;
        }

        .button {
            position: absolute;
            top: 5.65%;
            right: 21.5%;
            width: 21%;
            padding-bottom: calc(21% / 628 * 398);
            z-index: 2;
            background-size: 100% auto;
            cursor: pointer;
            
            &:hover {
                transform: translate(-1px, -1px);
            }
        }
    }
}
</style>