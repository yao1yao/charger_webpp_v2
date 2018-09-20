<template lang="pug">
div.bg
    div.input-identify
        div(v-on:click="display = false")
            input-charger-number(:filterBy="filterBy" :display.sync="display" :arr="arr")
            charger-info(class="input-identify__charger-info" v-bind="chargerInfo")
            pay-money(v-bind:current.sync="current" v-bind:value.sync="value")
        div.input-identify__pay
            div.input-identify__pay_item
                p.input-identify__pay_text 支付金额
                p.input-identify__pay_number {{payMoney|formatMoney}}
            div.input-identify__pay_item
                p.input-identify__pay_text 账户余额
                p.input-identify__pay_number {{balance|formatMoney}}
        div.input-identify__btn
                button(@click="payBalance" class="btn btn-primary") 余额支付
        div.input-identify__btn         
                button(@click="payWechat" class="btn btn-primary") 微信支付
</template>

<script>
import {mapState} from 'vuex'
import {formatMoney} from '../filters/formatMoney.js'
import InputChargerNumber from '../components/InputChargerNumber'
import PayMoney from '../components/PayMoney'
import ChargerInfo from '../components/ChargerInfo'
export default {
    name:"InputIdentify",
    components:{
        InputChargerNumber,
        PayMoney,
        ChargerInfo
    },
    created(){

    },
    filters: {
      formatMoney
    },
    computed:{
        payMoney(){
            return 100;
        },
        ...mapState('user',{
            balance: state=>state.userInfo.balance
        }),
        ...mapState('charger',{
            chargerInfo: state=>state.chargerInfo
        })
    },
    watch:{
        display:{
            handler: function (val) {
            var self = this;
            if(!val) {
                console.log(self.arr.join(''))
                this.$store.dispatch('charger/updateChargerInfo',self.arr.join(''));
               }
            }
        }
    },
    data(){
        return {
            arr: [0, 0, 0, 0, 0, 0, 0, 0],
            filterBy: 0,
            display: false,
            current:0,
            value: 0,
        }
    },
    methods:{
        payBalance(){
            console.log(this.arr)
            console.log(this.current)
            console.log(this.value)
            console.log(this.filterBy)
            //this.$router.push({path:'/charger/status'})
        },
        payWechat(){

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
        &__btn
            width: 90%
            height 1.5rem
            margin 1.5rem auto
            border-radius(2rem)
        
</style>


