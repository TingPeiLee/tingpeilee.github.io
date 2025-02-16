<template>
    <ImageListContainer :imageUrlList="imageUrlList" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
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
