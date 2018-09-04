<template lang="pug">
    div.charger-detail
        div.charger-detail__hd
            p.charger-detail__hd_item 深圳市南山区西丽凯达尔大厦 B 座 13 层
            p.charger-detail__hd_item 
                span 设备号: 1 <br> 
                span 耗电量: 27.4 W
            p.charger-detail__hd_item 
                span(style="float:right") 总电费: 0 <br> 
                span 总服务费: 0
        div.charger-detail__bd
            p 开始时间
                span 2018-08-27 18:29:17
            p 结束时间
                span 2018-08-27 18:39:17
            p 充电时长
                span 10 分钟

</template>

<script>
export default {
    name: "ChargerDetail"
}
</script>

<style lang="stylus">
    .charger-detail
        font-size 1rem;
        text-align left 
        &__hd
            padding 0.5rem 2rem
            background-color #52bcf7
            color white
            &_item
                margin 1rem 0
        &__bd
            margin-top 2rem
            p
                line-height 2rem
                padding 12px 15px
                background-color #f1f1f1
                border 1px solid #ffffff
                color #b0b0b0
                span 
                    float right
</style>
