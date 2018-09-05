<template lang="pug">
    mixin chargingItem(icon,text)
        div.charging__item
            div.charging_hd
                span.charging__item-icon(class=icon)
            div.charging_bd
                p.charging__item-text=text
    div.bg
        div.charging
            +chargingItem('icon-charging-scan','通过微信公众号与电桩获取通讯')
            +chargingItem('icon-user-recharge','付费启动充电')
            +chargingItem('icon-charger-status-idle','实时查看充电进度')
            +chargingItem('icon-charging-bluetooth','远距离操控')
            p.charging__logo
                span.charging__logo-content
            p.charging__scan 扫描充电
            div.charging__btn
                button(@click="inputChargingNumber" class="btn btn-primary") 输入编号
            div.charging__btn
                button(@click="getChargerStatus" class="btn btn-primary") 充电状态
</template>
<script>
export default {
    name: 'charging',
     methods:{
      inputChargingNumber(){
        this.$router.push({path: '/charger/input_identify'})
      },
      getChargerStatus(){
        this.$router.push({path: '/charger/status'})
      }
    }
}
</script>
<style lang="stylus">
@import "./../assets/stylus/common.stylus"
    $whiteColor = #fff
    $blueColor = #0B87CD
    .charging
        width 100%
        margin 0 auto
        padding-top 1rem
        &__item
            display flex
            padding 10px 0 10px 10%
            --webkit-box-align center
            align-items center
            widthHeightLineHeightFontSize(100%, 1.2rem,1.2rem, 1.1rem)
            &-text
                color $whiteColor
        &_bd
            padding-left .5rem 
        &__logo
            margin 13% auto .5rem
            align-items center
            justify-content center
            &-content
                display inline-block
                widthHeightLineHeightFontSize(3rem, 3rem ,0,0)
                border-radius(3rem)
                border 10px solid $blueColor
                background-color $whiteColor
                ^[2]:active
                    box-shadow 0 0 0 5px $whiteColor
        &__scan
            widthHeightLineHeightFontSize(90%, 2rem, 2rem ,1.2rem)
            color $whiteColor
            margin 0 auto 4rem
            position relative
            &:before
                beforeAfter(1px, 34%, $whiteColor, 46.7%, 1, 0)
            &:after
                beforeAfter(1px, 34%, $whiteColor, 46.7%, 0, 0)
        &__btn
            width 90%
            height 1.5rem
            margin 2rem auto
            border none
            
</style>


