<template>
    <div class="footer-container">
        <div class="copyright-container">
            <div class="website-title">
                PEGGYLEE Portfolios
            </div>

            <div class="copyright">
                Copyright @2025 Peggy Lee All Rights Reserved.
            </div>
        </div>

        <div class="email-container">
            <div class="contact-button">
                <img 
                    class="icon" 
                    src="/assets/svg/contact.svg"
                    alt="contact-icon"
                />

                <div class="text">Contact Me</div>
            </div>

            <a 
                class="email"
                href="mailto:peggy8397@gmail.com"
            >
                peggy8397@gmail.com
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer-container {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    padding: 31px 13.96%;
    display: flex;
    color: #fff;
    justify-content: space-between;
    background: linear-gradient(to right, #d5a095 0%, #956d65 100%);     
    z-index: 3;
    box-sizing: border-box;

    @media (max-width: 992px) {
        position: relative;
        display: block;
        text-align: center;
    }

    .copyright-container {
        @media (max-width: 992px) {
            margin-bottom: 20px;
        }
        
        .website-title {
            margin-bottom: 25px;
            font-family: "Poppins", sans-serif;
            font-weight: 500;
            font-size: 1.375rem;
            letter-spacing: 2.42px;
        }

        .copyright {
            font-family: "NotoSansTC", sans-serif;
            font-weight: 400;
            font-size: 1rem;
            letter-spacing: 1.6px;
        }
    }
    
    .email-container {
        .contact-button {
            margin-bottom: 25px;
            font-family: "Poppins", sans-serif;
            font-weight: 400;

            .icon,
            .text {
                display: inline-block;
            }

            .icon {
                width: 21px;
                margin-right: 12px;
            }

            .text {
                font-size: 1.25rem;
            }
        }

        .email {
            font-size: 1rem;
            color: #fff;
            text-decoration: none;

            @media (max-width: 992px) {
                display: none;
            }
        }
    }
}
</style>