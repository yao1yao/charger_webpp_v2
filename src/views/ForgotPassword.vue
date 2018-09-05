<template lang="pug">
    mixin forgotPasswordItem(type,message)
        div.forgot-password__item
            input(
                class="forgot-password__input" 
                type=type 
                placeholder=message
            )
    div.forgot-password
        +forgotPasswordItem("password","请输入新密码")
        +forgotPasswordItem("number","请输入 11 位手机号")
        +forgotPasswordItem("password","请重复输入新密码")
        div.forgot-password__validate
            div.forgot-password__btn
                button(class="btn btn-primary") 获取验证码
            div.forgot-password__number
                    input(
                class="forgot-password__input" 
                type=type 
                placeholder=message
            )
        div.forgot-password__confirm
                button(class="btn btn-primary") 确认

</template>

<script>
export default {
    name:"ForgotPassword"
}
</script>

<style lang="stylus">
    @import "./../assets/stylus/common.stylus"
    .forgot-password
        width 85%
        margin 0 auto 
        &__item
            margin 2.5rem auto
        &__input
            widthHeightLineHeightFontSize(100%,2.5rem,auto,.9rem)
            outline none
            border 2px solid #51BAF5
            border-radius 10px
            letter-spacing .2rem
            text-indent 1rem
        &__validate
            width 100%
            display flex
        &__btn
            width 40%
            margin-top .2rem
            border none
        &__number
            width 55%
            margin-left 1rem
        &__confirm
            margin 5rem auto
            border none
</style>
