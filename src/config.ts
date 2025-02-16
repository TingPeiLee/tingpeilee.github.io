import { ref } from 'vue';

type Config = {
    zoomImageIndex?: number;
    zoomImageUrlList?: string[];
}

const config = ref<Config>({
    zoomImageIndex: undefined,
    zoomImageUrlList: undefined
})

const resetZoomImage = () => {
    config.value.zoomImageIndex = undefined;
    config.value.zoomImageUrlList = undefined;
}

const prevZoomImage = () => {
    if (config.value.zoomImageUrlList && config.value.zoomImageIndex !== undefined) {
        config.value.zoomImageIndex = (config.value.zoomImageIndex - 1 + config.value.zoomImageUrlList.length) % config.value.zoomImageUrlList.length;
    }
}

const nextZoomImage = () => {
    if (config.value.zoomImageUrlList && config.value.zoomImageIndex !== undefined) {
        config.value.zoomImageIndex = (config.value.zoomImageIndex + 1) % config.value.zoomImageUrlList.length;
    }
}

export default config;
export { 
    config,
    resetZoomImage,
    prevZoomImage,
    nextZoomImage
};