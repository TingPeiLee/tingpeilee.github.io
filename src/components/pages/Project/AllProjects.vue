<template>
    <div 
        v-for="(project, idx) in dataList"
        :key="idx"
        class="project-container"
        @click="router.push(project.route)"
    >
        <img 
            :src="project.coverUrl" 
            class="cover"
            alt="cover" 
        >

        <div class="title">
            {{ project.title }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const dataList = [
    {
        route: '/project/graphic-design',
        title: '平面 / 型錄 / 包裝',
        coverUrl: '/assets/images/project/graphic-design.jpg'
    },
    {
        route: '/project/visual-identity',
        title: '品牌識別設計',
        coverUrl: '/assets/images/project/visual-identity.jpg'
    },
    {
        route: '/project/website-design',
        title: '網頁 / ＡＰＰ / 活動介面',
        coverUrl: '/assets/images/project/website-design.jpg'
    },
    {
        route: '/project/game-banner-design',
        title: '遊戲廣宣設計',
        coverUrl: '/assets/images/project/game-banner-design.jpg'
    },
    {
        route: '/project/display-layout',
        title: '陳列佈置設計',
        coverUrl: '/assets/images/project/display-layout.jpg'
    }
]
</script>

<style lang="scss" scoped>
.project-container {
    display: inline-block;
    width: 31.86%;
    margin: 0 2.21% 80px 0;
    cursor: pointer;
    
    &:nth-child(3n) {
        margin: 0 0 80px 0;
    }

    @media (max-width: 992px) {
        width: 100%;
        margin: 0 0 30px;

        &:nth-child(3n) {
            margin: 0;
        }

        &:last-child {
            margin: 0;
        }
    }

    .cover {
        width: 100%;
        border-radius: 10px;
    }

    .title {
        margin-top: 20px;
        font-size: 1.5rem;
        font-family: "NotoSansTC", sans-serif;
        font-weight: 500;
        text-align: center;
    }
}
</style>