<template lang="pug">
    div.recharge-record
        div.recharge-record__sum
            div.recharge-record__item
                p.recharge-record__sum-title 总充值
                p.recharge-record__sum-content {{reChargerRecord.sumRechargeMoney | formatMoney}} 
            div.recharge-record__item
                p.recharge-record__sum-title 余额
                p.recharge-record__sum-content {{userInfo.balance | formatMoney}} 
        table.recharge-record__list
            caption.recharge-record__list-title 最近一个月充值记录
            tbody.recharge-record__list-content
                tr.recharge-record__list-subitem(v-for="(item,index) in reChargerRecord.reChargerRecord")
                    td 充值 {{item.recharge_money | formatMoney}}
                    td 微信支付
                    td {{item.recharge_time}}
</template>

<script>
import {mapState}  from 'vuex'
import {formatMoney}  from '../filters/formatMoney.js'
export default {
    name: "RechargerRecord",
    computed:{
        ...mapState('user',{
            userInfo: state=>state.userInfo
        }),
        ...mapState('record',{
            reChargerRecord: state=>state.reChargerRecord
        })
    },
    filters:{
        formatMoney
    },
    mounted(){
        this.$store.dispatch('record/getRechargeReocrd',{
            userId: this.userInfo.userId
        })
    }
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
                font-size 2rem 
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
