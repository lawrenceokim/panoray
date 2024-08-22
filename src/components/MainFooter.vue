<template>
    <footer class="footer">
        <div class="container secondary-container">
            <div class="d-flex flex-wrap row justify-content-md-between align-items-center">
                <div class="left-content col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start">
                    <div class="copyright">
                        <span>© 2023 by Panoray Ventures</span>
                    </div>
                </div>
                <div class="right-content col-12 col-md-6">
                    <ul class="footer-navigation list-group-flush d-flex align-items-center justify-content-center justify-content-md-end">
                        <li class="list-group-item">
                            <a href="https://twitter.com/panorayventures" target="_blank">Twitter</a>
                        </li>
                        <li class="list-group-item">
                            <a href="https://www.linkedin.com/company/panoray-ventures/" target="_blank">Linkedin</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </footer>
</template>

<script>
export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {},
};
</script>

<style lang="scss" scoped>
footer{
    padding: 0.3rem 0;
    border-top: 1px solid #252525;
    .footer-logo{
        img{
            max-width: 100%;
        }
    }
    .copyright{
        @media(max-width: 767px){
            padding-left: 10px;
            padding-top: 9px;
        }
    }
    .footer-navigation{
        @media(max-width: 767px){
            padding-top: 10px;
        }
        li{
            margin-left: 0.44rem;
            &:first-of-type{
                margin-left: 0;
            }
            a{
                padding: 0.1rem;
                display: inline-block;
                vertical-align: top;
                color: var(--white-color);
            }
            &:hover{
                a{
                    color: var(--green-color)
                }
            }
            @media(max-width: 767px){
                a{
                    padding: 0.05rem 0;
                }
            }
        }
    }
    @media(max-width: 1199px){
        font-size: 0.18rem;
    }
    @media(max-width: 767px){
        text-align: center;
        font-size: 16px;
    }
    @media(max-width: 480px){
        font-size: 13px;
    }
}
</style>
