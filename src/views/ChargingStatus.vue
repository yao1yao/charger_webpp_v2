<template lang="pug">
    mixin chargerStatusInfoItem(title, content)
        div.charging-status__info-item
            div.charging-status__info-title=title
            div.charging-status__info-content=content
    div.charging-status
        div.charging-status__sum
            div.charging-status__sum-item
                div(v-if="chargingInfo.type===1")
                    p.charging-status__sum-title 设定时长/分钟
                    p.charging-status__sum-value {{chargingInfo.setDuration}}
                div(v-if="chargingInfo.type===0")
                    p.charging-status__sum-title 设定度数/度
                    p.charging-status__sum-value {{chargingInfo.setEnergy}}
            div.charging-status__sum-item
                p.charging-status__sum-title 已充电量/度
                p.charging-status__sum-value {{chargingInfo.energy}}
        div.charging-status__number 设备编号: {{chargingInfo.chargerNumber}}
        div.charging-status__info
            +chargerStatusInfoItem("充电时长","{{chargingInfo.duration}} min")
            +chargerStatusInfoItem("充电电压","{{chargingInfo.voltage}} V")
            +chargerStatusInfoItem("充电电流","{{chargingInfo.current}} A")
            +chargerStatusInfoItem("充电功率","{{chargingInfo.power}} W")
        div.charging-status__btn
            button( @click="setEndCharging" class="btn btn-primary") 充电完毕
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: "ChargerStatus",
    data(){
        return{
            timer: '',
        }
    },
    computed:{
        ...mapState('user',{
            userInfo: state=>state.userInfo
        }),
        ...mapState('charger',{
            chargingInfo: state=>state.chargingInfo
        })
    },
    created(){
        this.fetchData();
        this.timer = setInterval(this.fetchData,300000)
    },
    beforeRouteLeave(to, from,next){
        clearInterval(this.timer)
        next()
    },
    destroyed(){
        clearInterval(this.timer)
    },
    methods:{
        setEndCharging(){
            // this.$router.push({path: '/charger/record'})
            this.$store.commit('stateBox/popUpModal',{
                title: '温馨提示',
                content: '结束充电?',
                btnName: '确认',
                type: 'endCharging',
                display: true
            })
        },
        fetchData(){
            this.$store.dispatch('charger/updateChargingInfo',{
                 chargerNumber: this.chargingInfo.chargerNumber,
                 userId: this.userInfo.userId
            })
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
