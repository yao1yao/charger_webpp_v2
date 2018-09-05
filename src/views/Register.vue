<template lang="pug">
    mixin registerItem(flag,type,name,message)
        div.register__item
            div.register__item-hd
                if flag
                    label.register__item-label=name
                else
                    button(class="btn btn-primary register__item-validate")=name
            div.register__item-bd
                input(
                    type=type
                    class="register__item-input"
                    placeholder=message
                )
    div.bg
        div.register
            +registerItem(true,"text","姓名","请输入姓名")
            +registerItem(true,"text","手机号","请输入手机号")
            +registerItem(true,"password","密码","请输入密码")
            +registerItem(true,"password","验证密码","请重复输入密码")
            +registerItem(false,"text","验证码","请输入验证码")
            div.register__btn
                button(class="btn btn-primary") 提交
</template>
<script>
export default {
    name:"Register"
}
</script>
<style lang="stylus">
    @import "./../assets/stylus/common.stylus"
    .register
        padding-top 2rem
        &__item
            display flex
            margin 1.5rem auto
            width 85%
            height 2.5rem
            color #ffffff
            border 2px solid #ffffff
            border-radius 10px
            &-hd
                width 30%
            &-bd
                width 70%
            &-label
                display block
                height 100%
                line-height 2.8rem
                font-size .9rem
                color #00a9ee
                padding-left .5rem
                wordJustify()
            &-input
                widthHeightLineHeightFontSize(100%, 100%, 2rem,.9rem)
                border none 
                outline 0
                letter-spacing .2rem
                text-indent 1.5rem
                background-color transparent
                color #ffffff
            &-validate
                height 2.2rem
                margin .2rem .2rem 

        &__btn
            width 85%
            margin 2.5rem auto
            border none
</style>
