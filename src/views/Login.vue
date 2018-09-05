<template lang="pug">
        div.bg
            div.login
                div.login__logo
                    img(class="login__logo-img" src="../../static/company-logo.svg" alt="加载中...")
                div.login__form
                    div.login__form-item
                        label(class="icon-login-phone login__form-icon")
                        input(
                            type="text"
                            class="login__form-input login__form-input-1"
                            placeholder="请输入电话号码"
                        )
                    div.login__form-item
                        label(class="icon-login-password e login__form-icon")
                        input(
                            type="text"
                            class="login__form-input login__form-input-2"
                            placeholder="请输入密码"
                        )    
                div.login__btn-confirm
                    button(@click="logIn" class="btn btn-primary") 登录
                div.login__btn-register
                    button(@click="register" class="btn btn-primary") 注册
                p.login__passwd 忘记密码?
                div.login__select
                    p.login__select-word or
                    p.login__way
                        span(class="icon-login-qq login__way-qq")
                        span(class="icon-login-wechat login__way-wechat")
</template>
<script>
export default {
    name: "Login",
    methods:{
        logIn(){

        },
        register(){
            this.$router.push({path: '/register'})
        }
    }
}
</script>

<style lang="stylus">
    @import "./../assets/stylus/common.stylus"
    $fontColor=#ffffff
    .login
        &__logo
            padding-top: 3rem
            &-img
                display block
                margin 0 auto 
                width 20%
                border-radius 50%
                line-height 10rem
        &__form
            width 85%
            margin 2rem auto  3rem
            &-item
                display flex
                margin 1.5rem auto
                align-items center
                font-size 1.8rem
                color $fontColor
            &-icon
                display block
                padding 0 1rem 0 0 
            &-input
                widthHeightLineHeightFontSize(100%, 1.5rem, 1.5rem, .8rem)
                border none 
                outline 0
                border-bottom 1px solid #ffffff
                opacity 0.8
                &::placeholder
                    color $fontColor
                &-1
                    background-color #80DEF6
                &-2
                    background-color #83E1F4
        &__btn-confirm,
        &__btn-register
            width 85%
            margin 0 auto
            &
                margin-top 1rem
        &__passwd
            font-size .8rem
            color #ffffff
            text-align right
            margin 1rem 1.7rem 
            opacity  .6
            &:hover
                opacity 1
        &__select
            width 85%
            margin 0 auto 
            font-size 1.2rem
            color #ffffff
            &-word
                position relative
                &:before
                    beforeAfter(1px, 40%, #ffffff, 46.7%, 1, 0)
                &:after
                    beforeAfter(1px, 40%, #ffffff, 46.7%, 0, 0)
        &__way
            font-size 1.5rem
            &-qq
                padding-right 1rem

</style>
