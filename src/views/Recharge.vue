<template lang="pug">
    div.recharge
        div.recharge__hd
            router-link( class="recharge__hd-item" :to="{path:'/recharge'}")
                span(class="icon-recharge-record recharge__hd-icon")
                p.recharge__hd-text 充值
            router-link(class="recharge__hd-item" :to="{path:'/monthly_fee'}" )
                span(class="icon-recharge-clock recharge__hd-icon")
                p.recharge__hd-text 月费
        p.recharge__title 选择充值面额
        div.recharge__bd
            div.recharge__bd-item
                a(href="javascript:;" class="recharge__money recharge__money-on") 50 元
                a(href="javascript:;" class="recharge__money") 100 元
                a(href="javascript:;" class="recharge__money") 300 元
            div.recharge__bd-item
                a(href="javascript:;" class="recharge__money") 500 元
                a(href="javascript:;" class="recharge__money") 1000 元
                a(href="javascript:;" class="recharge__money") 2000 元
            div.recharge__number
                input(type="number" placeholder="请输入大于 50 充值面额" class="recharge__input")
            p.recharge__show 238 ￥     
        div.recharge__btn
                    button(@click="pay" class="btn btn-primary") 微信支付
</template>

<script>
export default {
    name:"Recharge",
    methods:{
        pay(){

        }
    }
}
</script>

<style lang="stylus">
    @import "./../assets/stylus/common.stylus"
    .recharge
        width 100%
        &__hd
            display flex
            &-item
                flex 1
                display block
                padding .5rem 0
                color #ffffff
                text-align center
                &:first-child
                    background-color #52bcf8
                &:last-child
                    background-color #cacaca
            &-icon
                display inline-block
                font-size 2.5rem
                line-height 3rem
            &-text
                font-size .5rem
        &__title
            widthHeightLineHeightFontSize(100%, 2rem,2rem,1rem)
            background-color #dbdbdb
            color #8d90a1
        &__bd
            width 90%
            height 12rem
            margin 0 auto 
            &-item
                display flex
                width 100%
                padding-top 1rem
        &__money
            flex 1
            display block
            widthHeightLineHeightFontSize(1rem, 1.5rem, 1.5rem,.7rem)
            margin 4px
            padding .5rem 0
            color #a5a5a5
            border 1px solid #a5a5a5
            border-radius(12px)
            text-align center
            &-on
                background-color #52bcf8
                color #fff
        &__number
            width 100%
            padding-top 1rem
        &__input
            widthHeightLineHeightFontSize(100%, 2.5rem, 2.5rem, 1rem)
            outline none
            border 1px solid #dbdbdb
            text-indent .5rem
            letter-spacing .1rem
            border-radius(20px)
            &:placeholder
                color #a1a1a1
        &__show
            widthHeightLineHeightFontSize(90%, 1rem, 2rem, 1rem)
            margin 1rem auto
            color red
            position relative
            &:before
                beforeAfter(1px, 35%, #52bcf8, 90%, 1, 0)
            &:after
                beforeAfter(1px, 35%, #52bcf8, 90%, 0, 0)
        &__btn
            width 85%
            margin 5rem auto 


</style>
