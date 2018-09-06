<template lang="pug">
    div.monthly-fee
        div.monthly-fee__hd
            router-link( class="monthly-fee__hd-item" :to="{path:'/recharge'}")
                span(class="icon-recharge-record monthly-fee__hd-icon")
                p.monthly-fee__hd-text 充值
            router-link(class="monthly-fee__hd-item" :to="{path:'/monthly_fee'}" )
                span(class="icon-recharge-clock monthly-fee__hd-icon")
                p.monthly-fee__hd-text 月费
        div.monthly-fee__bd
            a(href="javascript:;" class="monthly-fee__bag monthly-fee__bag-on") 加油包
            a(href="javascript:;" class="monthly-fee__bag") 半年包
            a(href="javascript:;" class="monthly-fee__bag") 一年包
        div.monthly-fee__subbd
            a(href="javascript:;" class="monthly-fee__subbd-item monthly-fee__subbd-on")
                span.monthly-fee__subtitle 100 度/月
                p.monthly-fee__subcontent 238.0 元/月
            a(href="javascript:;" class="monthly-fee__subbd-item ")
                span.monthly-fee__subtitle 150 度/月
                p.monthly-fee__subcontent 338.0 元/月
        div.monthly-fee__explain
            p.monthly-fee__explain-first 套餐介绍: <br>
            |1.238元/月,共1个月，包含电量100度 <br>
            |2.其他未尽事宜，请见下方 "月费购买添加" 或咨询客服 <br>
            | 客服电话：400-1800910
        p.monthly-fee__show 238 ￥
        div.monthly-fee__btn
            button(@click="pay" class="btn btn-primary") 微信支付     
</template>
<script>
export default {
    name: "MonthlyFee",
    methods:{
        pay(){}
    }
}
</script>
<style lang="stylus">
@import "./../assets/stylus/common.stylus"
    .monthly-fee
        width 100%
        &__hd
            display flex
            &-item
                flex 1
                display block
                text-decoration none 
                padding .5rem 0
                color #ffffff
                text-align center
                &:first-child
                    background-color #cacaca
                &:last-child
                    background-color #52bcf8
            &-icon
                display inline-block
                font-size 2.5rem
                line-height 3rem
            &-text
                font-size .5rem
        &__bd
            width 100%
            margin-top 1rem
            background-color #c3c3c3
            display flex
        &__bag
            flex 1
            font-size .7rem
            line-height 2.5rem
            border-right 1px solid #ffffff
            color #ffffff
            &-on
                background-color #52bcf8
        &__subbd
            width 90%
            display flex
            margin  0 auto 
            &-item
                flex 1
                display block
                margin 1rem
                padding .5rem
                border 1px solid #c3c3c3
                border-radius(20px)
                color #7c7a7b
            &-on
                 background-color #52bcf8
                 color #ffffff
        &__subtitle
            font-size 1rem
        &__explain
            width 85%
            margin 0 auto
            font-size .9rem
            line-height 2rem
            text-align left
            color #CACACA
            font-weight bold
        &__show
            widthHeightLineHeightFontSize(85%, 1rem, 2rem, 1rem)
            margin 1rem auto
            color red
            position relative
            &:before
                beforeAfter(1px, 35%, #52bcf8, 90%, 1, 0)
            &:after
                beforeAfter(1px, 35%, #52bcf8, 90%, 0, 0)
        &__btn
            width 85%
            margin 2rem auto 
</style>

