<template>
    <div class="index-container">
        <div class="left-container">
            <div class="slogan">
                細節成就完美，設計源於熱愛
            </div>

            <div class="title">Hello!</div>
            <div class="title">I'm Peggy Lee</div>
            <div class="title">A UI designer</div>

            <div class="subtitle">我是熱愛設計與創新的平面兼UI設計師</div>
            <div class="subtitle">擁有7年的設計經驗</div>
            <div class="subtitle">我專注於將視覺美學與用戶體驗相結合</div>
            <div class="subtitle">為品牌創造具有吸引力且實用的設計解決方案</div>

            <div 
                class="button"
                @click="router.push('/project/all')"
            >
                <div class="text">查看作品集</div>
                <img 
                    class="icon" 
                    src="/assets/svg/next.svg"
                    alt="next-icon"
                />
            </div>
        </div>
        
        <div
            class="cover-image"
            :style="{
                'background-image': 'url(/assets/images/index/computer.png)'
            }"
        />
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style lang="scss" scoped>
.index-container {
    position: relative;
    padding-bottom: 400px;
    display: flex;

    @media (max-width: 992px) {
        display: block;
        padding-bottom: 55px;
    }
    
    .left-container {
        margin: 113px 0 0 13.96%;

        @media (max-width: 1680px) {
            margin: 80px 0 0 13.96%;
        }

        @media (max-width: 992px) {
            margin: 29px 10.4% 32px;
        }

        .slogan {
            font-family: "NotoSansTC", sans-serif;
            display: inline-block;
            padding: 14px 26px;
            border-radius: 5px;
            background-color: #BCD5ED;
            font-size: 1.5rem;
            font-weight: 700;
            transform: translateX(-23px);
            letter-spacing: 2.4px;
            color: #fff;
            margin-bottom: 43px;

            @media (max-width: 992px) {
                font-size: 1.154rem;
                padding: 10px 17px;
                transform: translateX(0);
                margin-bottom: 20px;
            }
        }
        
        .subtitle,
        .text {
            font-family: "NotoSansTC", sans-serif;
        }

        .title {
            font-family: "AbhayaLibre", sans-serif;
            font-weight: 400;
            margin-bottom: -10px;

            &:nth-child(2),
            &:nth-child(4) {
                font-size: 5rem;

                @media (max-width: 992px) {
                    font-size: 3rem;
                    line-height: 5rem;
                }
            }

            &:nth-child(3) {
                font-size: 6.875rem;

                @media (max-width: 992px) {
                    font-size: 3.46rem;
                }
            }

            &:nth-child(4) {
                margin-bottom: 20px;

                @media (max-width: 992px) {
                    margin-bottom: 10px;
                }
            }
        }

        .subtitle {
            font-family: "NotoSansTC", sans-serif;
            font-size: 1.25rem;
            line-height: 35px;
            font-weight: 400;
            letter-spacing: 2px;

            @media (max-width: 992px) {
                line-height: 25px;
                font-size: 0.92rem;
            }
        }

        .button {
            margin-top: 40px;
            display: inline-flex;
            border-radius: 31px;
            padding: 21px 61px;
            background-color: #D8BBB7;
            cursor: pointer;

            @media (max-width: 992px) {
                margin-top: 32px;
                padding: 12px 27px 12px 27px;
            }

            &:hover {
                .icon {
                    transform: translateX(10px);
                }
            }

            .text {
                color: #fff;
                font-size: 1.25rem;
                line-height: 20px;
                letter-spacing: 2px;
                font-weight: 700;
                margin-right: 6px;

                @media (max-width: 992px) {
                    font-size: 1.077rem;
                }
            }

            .icon {
                width: 17px;
                transition: transform 0.1s;

                @media (max-width: 992px) {
                    width: 13px;
                }
            }
        }
    }

    .cover-image {
        box-sizing: border-box;
        padding-bottom: calc(43.125% / 900 * 693);
        width: 43.125%;
        margin: 138px 0 0 4.5%;
        background-size: 100% auto;
        height: 0;

        @media (max-width: 1680px) {
            padding-bottom: calc(43% / 900 * 693);
            width: 43%;
        }

        @media (max-width: 992px) {
            width: 79.2%;
            padding-bottom: calc(79.2% / 900 * 693);
            margin: 0 10.4%;
        }
    }
}
</style>