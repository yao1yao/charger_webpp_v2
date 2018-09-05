<template lang="pug">
    div.course
        div.course__item
            p.course__item-title 找桩
            p.course__item-content 通过定位、筛选、导航、找到对应的充电桩
        div.course__item
            p.course__item-title 充电
            p.course__item-content 1、将充电枪插入汽车交流充电接口确认车辆和充电枪连接正常!<br>2、请使用微信扫描充电桩二维码,输入充电桩编码,选择充电时长确认支付,开始充电。<br>3、充电完毕,将充电枪拔出挂回充电桩。
</template>

<script>
export default {
    name: "Course"
}
</script>

<style lang="stylus">
    .course
        text-align left 
        font-size 1rem
        padding 2rem
        &__item 
            &-title
                margin 1rem auto
                font-size 1.5rem
                color #000
                line-height 2.5rem
            &-content
                color #b8b8b8
                line-height 2rem
</style>
