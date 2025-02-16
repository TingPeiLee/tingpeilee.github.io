<template>
    <ImageListContainer :imageUrlList="imageUrlList" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const imageSum = 28;
const imageUrlList = ref<string[]>([]);

for (let i = 1; i <= imageSum; i += 1) {
    imageUrlList.value.push(`/assets/images/project/graphic-design/image-${String(i).padStart(2, '0')}.jpg`);
}
</script>
