<template lang="pug">
    div.input-identify
        div.input-identify__pay
            div.input-identify__pay_item
                p.input-identify__pay_text 支付金额
                p.input-identify__pay_number 0.00￥
            div.input-identify__pay_item
                p.input-identify__pay_text 账户余额
                p.input-identify__pay_number 100.00￥
        div.input-identify__btn
                button(@click="setChargingStart" class="btn btn-primary") 开始充电
</template>

<script>
export default {
    name:"InputIdentify",
    methods:{
        setChargingStart(){
            this.$router.push({path:'/charger/status'})
        }
    }
}
</script>
<style lang="stylus">
@import "./../assets/stylus/common.stylus"
    .input-identify
        padding .5rem 0
        &__pay
            display flex
            widthHeightLineHeightFontSize(90%, auto ,auto, 1rem)
            margin .5rem auto 
            &_item
                flex 1
            &_number
                color #B71313
                font-size .9rem
                padding-top .2rem
        &__btn
            width: 90%
            height 1.5rem
            margin 2rem auto
            border-radius(2rem)
</style>


