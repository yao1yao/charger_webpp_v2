<template lang="pug">
    mixin chargerStatusInfoItem(title, content)
        div.charging-status__info-item
            div.charging-status__info-title=title
            div.charging-status__info-content=content
    div.charging-status
        div.charging-status__sum
            div.charging-status__sum-item
                p.charging-status__sum-title 设定时长/分钟
                p.charging-status__sum-value 30
            div.charging-status__sum-item
                p.charging-status__sum-title 已充电量/度
                p.charging-status__sum-value 20
        div.charging-status__number 设备编号: 1
        div.charging-status__info
            +chargerStatusInfoItem("充电时长","05 min")
            +chargerStatusInfoItem("充电电压","10 V")
            +chargerStatusInfoItem("充电电流","10 A")
            +chargerStatusInfoItem("充电功率","10 W")
        div.charging-status__btn
            button( @click="setEndCharging" class="btn btn-primary") 充电完毕
</template>

<script>
export default {
    name: "ChargerStatus",
    methods:{
        setEndCharging(){
        this.$router.push({path: '/charger/record'})
        }
    }
}
</script>

<style lang="stylus">
@import "./../assets/stylus/common.stylus"
    .charging-status
        width 100%
        &__sum
            display flex 
            background-color #66C4FA 
            &-item 
                flex 1
                font-size 1.4rem
                line-height 2.3rem
                padding .5rem 0
                color #ffffff
        &__number
            text-align center
            font-size 1.1rem
            margin 1rem auto
        &__info
            height 15rem
            margin 1.5rem auto 
            background-color: #f1f1f1;
            &-item
                display flex
                height 25%
                &:first-child
                    padding-top 1rem
            &-title
            &-content
                width 50%
                font-size: 1.2rem;
                color #898989
        &__btn
            width: 90%
            margin 4rem auto

</style>
