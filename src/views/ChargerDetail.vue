<template lang="pug">
    div.charger-detail
        div.charger-detail__hd
            p.charger-detail__hd_item {{recordDetail.address}}
            p.charger-detail__hd_item 
                span 设备号: {{recordDetail.charger_number}} <br> 
                span 耗电量: {{recordDetail.energy}} 度
            p.charger-detail__hd_item 
                span(style="float:right") 电费: {{(recordDetail.energy_money)|formatMoney}}   <br> 
                span 服务费: {{(recordDetail.service_money)|formatMoney}} 
        div.charger-detail__bd
            p 开始时间
                span {{(recordDetail.start_time)}}
            p 结束时间
                span {{(recordDetail.end_time)}}
            p 充电时长
                span {{recordDetail.duration}} 分钟

</template>

<script>
import {formatMoney}  from '../filters/formatMoney.js'
export default {
    name: "ChargerDetail",
    filters: {
      formatMoney
    },
    data(){
        return {
            recordDetail:{
            }
        }
    },
    created(){
        this.init();
    },
    methods:{
        init(){
            this.recordDetail=JSON.parse(this.$route.query.recodeDetail);
        }
    }
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
