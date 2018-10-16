<template lang="pug">
div.bg
    div.input-identify
        div(v-on:click="display = false")
            input-charger-number(:filterBy="filterBy" :display.sync="display" :arr="arr")
            charger-message(class="input-identify__charger-info" v-bind="chargerInfo")
            pay-money(v-bind:current.sync="current" v-bind:value.sync="value")
        div.input-identify__pay
            div.input-identify__pay_item
                p.input-identify__pay_text 支付金额
                p.input-identify__pay_number {{payForMoney|formatMoney}}
            div.input-identify__pay_item
                p.input-identify__pay_text 账户余额
                p.input-identify__pay_number {{balance|formatMoney}}
        div.input-identify__btn-hd
                button(@click="payBalance" class="btn btn-primary" v-bind:disabled="enabled") 余额支付
        div.input-identify__btn-ft         
                button(@click="payWechat" class="btn btn-primary"  v-bind:disabled="enabled") 微信支付
</template>

<script>
import {mapState} from 'vuex'
import {formatMoney} from '../filters/formatMoney.js'
import InputChargerNumber from '../components/InputChargerNumber'
import PayMoney from '../components/PayMoney'
import ChargerMessage from '../components/ChargerMessage'
import {CHARGING_TYPE,PAY_TYPE} from '../utils/constants.js'
import {pay} from './../api/pay'
export default {
    name:"InputIdentify",
    components:{
        InputChargerNumber,
        PayMoney,
        ChargerMessage
    },
    filters: {
      formatMoney
    },
    computed:{
        ...mapState('user',{
            balance: state=>state.userInfo.balance,
            userId: state=>state.userInfo.userId,
            openId: state=>state.userInfo.openId,
        }),
        ...mapState('charger',{
            chargerInfo: state=>state.chargerInfo
        }),
        payForMoney(){
            if(this.current=== CHARGING_TYPE.MONEY){
                return Math.round(this.value);
            }else if(this.current === CHARGING_TYPE.TIME){
                return Math.round((this.value/60)*this.chargerInfo.devicePower*(this.chargerInfo.serviceRate+this.chargerInfo.energyRate))
            }
        },
        enabled(){
            return !this.value
        }
    },
    watch:{
        display:{
            handler: function (val) {
            var self = this;
            if(!val) {
                this.$store.dispatch('charger/updateChargerInfo',self.arr.join(''));
               }
            }
        },
        current:{
            handler:function(val){
                // 每次切换方式时，都需要先置零
                this.value = 0
            }
        }
    },
    data(){
        return {
            arr: [0, 0, 0, 0, 0, 0, 0, 0],
            filterBy: 0,
            display: false,
            current:0,
            value: 0
        }
    },
    created(){
        if(this.$route.query.chargerNumber){
            let chargerNumber = this.$route.query.chargerNumber.toString()
            for(let i=0;i<this.arr.length;i++){
                this.arr[i]=chargerNumber[i]
            }
            this.$store.dispatch('charger/updateChargerInfo',this.arr.join(''));
        }
    },
    mounted(){
        this.$store.dispatch('user/getNewestBalance',{
            userId: this.userId
        })
    },
    methods:{
        payBalance(){
            if(!this.value){
                return;
            }
             this.$store.dispatch('charger/startCharging',{
                openId: this.openId,
                type: this.current,
                userId: this.userId,
                chargerNumber: parseInt(this.arr.join('')),
                value: this.value,
                payType:PAY_TYPE.BALANCE

            })
        },
        payWechat(){
            let openId = this.openId
            let userId = this.userId
            // let rechargeMoney=this.payForMoney
            let rechargeMoney=Math.round(this.payForMoney)
            let that = this;
            // 判断是否可用
            this.$store.dispatch('charger/updateChargerInfo',this.arr.join('')).then(res=>{
                    pay({
                    openId,
                    rechargeMoney,
                    userId
                }).then(function(res){
                    if(res==='success'){
                        that.$store.dispatch('charger/startCharging',{
                        openId: openId,
                        type: that.current,
                        userId: userId,
                        chargerNumber: parseInt(that.arr.join('')),
                        value: that.value,
                        payType:PAY_TYPE.WECHAT
                        })
                    }
                })
            }).catch(error=>{
                console.log(error)
            })
            // 可用再继续支付
        }
    }
}
</script>
<style lang="stylus">
@import "./../assets/stylus/common.stylus"
    .input-identify
        padding .5rem 0
        &__charger-info
            margin-top .3rem
        &__pay
            display flex
            widthHeightLineHeightFontSize(90%, auto ,auto, 1rem)
            margin 0 auto 
            &_item
                flex 1
            &_number
                color #B71313
                font-size .9rem
                padding-top .2rem
        &__btn-hd
            width 90%
            beforeAfter(0, 85%, #52bcf8, 50%, 1, 50%)
            margin-top: 35%
            margin-left: -43%
        &__btn-ft
            width 90%
            beforeAfter(0, 85%, #52bcf8, 50%, 1, 50%)
            margin-top: 48%
            margin-left: -43%
        
</style>


