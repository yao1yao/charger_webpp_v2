<template lang="pug">
    div.charger-record
        div.charger-record__sum
            div.charger-record__item
                p.charger-record__sum-title 总充电时长/分钟
                p.charger-record__sum-content {{chargerRecord.sumDuration}}
            div.charger-record__item
                p.charger-record__sum-title 总充电电量/度
                p.charger-record__sum-content {{chargerRecord.sumEnergy}}
        table.charger-record__list
            caption.charger-record__list-title 最近一个月充电记录
            tbody.charger-record__list-content
                tr.charger-record__list-subitem(@click="$router.push({path: '/charger/detail',query:{recodeDetail:JSON.stringify(item)}})" v-for="(item,index) in chargerRecord.allRecord")
                    td 充电 {{item.energy}}  度
                    td 用时 {{item.duration}} 分钟
                    td {{item.end_time}}
</template>

<script>
import {mapState}  from 'vuex'
export default {
    name: "ChargerRecord",
    computed:{
        ...mapState('user',{
            userInfo: state=>state.userInfo
        }),
        ...mapState('record',{
            chargerRecord: state=>state.chargerRecord
        })
    },
    mounted(){
        this.$store.dispatch('record/getChargerReocrd',{
            userId: this.userInfo.userId
        })
    },
}

</script>
<style lang="stylus">
@import "./../assets/stylus/common.stylus"
    .charger-record 
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
