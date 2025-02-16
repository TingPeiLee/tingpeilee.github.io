<template>
    <div class="resume-container">
        <div class="title">
            Resume
        </div>

        <div class="container">
            <div class="section">
                <div class="left">
                    <div class="title en about">
                        About Peggy Lee
                    </div>
    
                    <div class="title zh name">
                        李 庭姵
                    </div>

                    <div class="content">
                        我是一名UI兼平面設計師，擁有7年設計經驗，擅長將視覺美學與使用者體驗相結合，打造直覺且富有吸引力的設計作品。我個性活潑、樂於溝通，擅長跨部門協作，在團隊中總能激發創意並確保專案順利進行。
                        <div class="break" />
                        在過去的經歷中，我參與了網站的UI/UX與APP設計，熟悉Figma、Adobe XD等工具，並具備前端概念，能有效與工程團隊對接。我也負責過品牌視覺與行銷設計，如LOGO、Banner、社群素材、各式海報文宣等。
                        <div class="break" />
                        這些經歷培養了我設計能力與對細節的關注，同時也讓我累積了豐富的實務經驗。
                    </div>
                </div>

                <div class="right">
                    <img 
                        class="profile-image"
                        src="/assets/images/resume/profile.png" 
                        alt="profile-img"
                    />
                </div>
            </div>

            <div class="section">
                <div class="left">
                    <div class="title-container">
                        <div class="title en">
                            EXPERIENCE
                        </div>
    
                        <div class="title zh">
                            工作經歷
                        </div>
                    </div>

                    <div class="content">
                        2021.02
                        <img 
                            class="arrow"
                            src="/assets/svg/arrow.svg"
                            alt="arrow-icon" 
                        >
                        2024.07
                        <br />
                        中祐資訊有限公司  UI設計師
                        <br />
                        2020.06
                        <img 
                            class="arrow"
                            src="/assets/svg/arrow.svg"
                            alt="arrow-icon" 
                        >
                        2020.12
                        <br />
                        芙格斯設計有限公司  視覺設計師
                        <br />
                        2017.02
                        <img 
                            class="arrow"
                            src="/assets/svg/arrow.svg"
                            alt="arrow-icon" 
                        >
                        2020.03
                        <br />
                        東東餐飲企業股份有限公司 設計專員
                    </div>
                </div>

                <div class="right">
                    <div class="title-container">
                        <div class="title en">
                            SKILLS
                        </div>
    
                        <div class="title zh">
                            技能
                        </div>
                    </div>

                    <div class="content">
                        UI Design：Figma、Adobe XD
                        <br />
                        Prototype：Figma、Adobe XD
                        <br />
                        Graphic Design：Photoshop、Illustrator
                        <br />
                        Motion Design：After Effects、Premiere
                        <br />
                        作業系統類：Windows、Mac OS
                        <br />
                        專案管理：Jira
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.resume-container {
    margin-top: 66px;

    > .title {
        font-size: 64px;
        font-family: "AbhayaLibre", sans-serif;
        font-weight: 400;
        text-align: center;
        margin-bottom: 69px;
    }

    .container {
        padding: 0 17.71% 263px;

        .title {
            color: #956D65;

            &.en {
                font-family: "AbhayaLibre", sans-serif;
                font-weight: 400;
                font-size: 40px;
                line-height: 40px;

                &.about {
                    font-size: 45px;
                    line-height: 45px;
                    margin-bottom: 25px;
                }
            }

            &.zh {
                font-family: "NotoSansTC", sans-serif;
                font-weight: 500;
                font-size: 22px;
                line-height: 22px;
                letter-spacing: 4.62px;
                
                &.name {
                    font-size: 28px;
                    line-height: 28px;
                    letter-spacing: 5.88px;
                    margin-bottom: 25px;
                }
            }
        }

        .content {
            font-family: "NotoSansTC", sans-serif;
            font-size: 18px;
            line-height: 36px;
            letter-spacing: 1.08px;

            .break {
                width: 100%;
                height: 36px;
            }

            .arrow {
                margin: 0 10px;
            }
        }

        .section {
            display: flex;

            &:first-child {
                margin-bottom: 115px;
            }

            .left {
                width: 61.37%;
                padding-right: 26.02%;
            }

            .right {
                width: 38.63%;

                .profile-image {
                    width: 78.02%;
                    width: 89.35%;
                }
            }

            .title-container {
                margin-bottom: 20px;

                .title {
                    display: inline-block;

                    &:first-child {
                        margin-right: 30px;
                    }
                }
            }
        }
    }
}
</style>