<template lang="pug">
    div.recharge-record
        div.recharge-record__sum
            div.recharge-record__item
                p.recharge-record__sum-title 总充值/元
                p.recharge-record__sum-content 100 
            div.recharge-record__item
                p.recharge-record__sum-title 余额/元
                p.recharge-record__sum-content 10 
        table.recharge-record__list
            caption.recharge-record__list-title 最近一个月充值记录
            tbody.recharge-record__list-content
                tr.recharge-record__list-subitem
                    td 充值 30 元
                    td 微信支付
                    td 2018-10-12 06:29:59
                tr.recharge-record__list-subitem
                    td 充值 30 元
                    td 微信支付
                    td 2018-10-12 06:29:59
                tr.recharge-record__list-subitem
                    td 充值 30 元
                    td 微信支付
                    td 2018-10-12 06:29:59
                tr.recharge-record__list-subitem
                    td 充值 30 元
                    td 微信支付
                    td 2018-10-12 06:29:59
</template>

<script>
import {mapState}  from 'vuex'
export default {
    name: "RechargerRecord",
}

</script>
<style lang="stylus">
@import "./../assets/stylus/common.stylus"
    .recharge-record 
        &__sum
            display flex
            background-color #52BCF8
            &-title
                font-size 1rem
            &-content
                font-size 2.5rem 
                letter-spacing .2rem
        &__item
            flex 1
            font-size 1.4rem
            line-height 2.7rem
            padding .5rem 0
            color #ffffff
        &__list
            width 100%
            color #878787
            margin 1rem auto
            border-spacing 2px
            border-collapse collapse
            &-title
                font-size 1.2rem
                line-height 2rem
                margin-bottom 1rem
            &-content
                widthHeightLineHeightFontSize(100% ,2.5rem,2.4rem, 1rem)
            &-subitem
                &:nth-child(2n+1)
                    background-color #f1f1f1
                &:active
                    background-color: rgba(60, 63, 65, 0.2);
</style>
