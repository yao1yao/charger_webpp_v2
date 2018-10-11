<template lang="pug">
        div.account
            div.account__item
                div.icon-withdraw-cash.account__item-icon
                p.account__item-content 可用余额: {{balance|formatMoney}}
                p.account__item-content 已冻结金额: {{freeze|formatMoney}}
            div.account__btn
                button(@click="recharge" class="btn btn-primary account__btn-recharger") 充值
            div.account__btn
                button(@click="withDraw" class="btn btn-primary") 提现

</template>

<script>
import {mapState} from 'vuex'
import {formatMoney}  from '../filters/formatMoney.js'
export default {
    name: "Account",
    computed:{
        ...mapState('user',{
            balance: state=>state.userInfo.balance,
            freeze: state=>state.userInfo.freeze
        })
    },
    filters:{
        formatMoney
    },
    methods:{
        recharge(){
            this.$router.push({path:'/recharge'})
        },
        withDraw(){
            this.$router.push({path:'/withdraw'})
        }
    }
}
</script>

<style lang="stylus">
    .account
        &__item
            margin 5.5rem auto 
            &-icon
                font-size 4rem
            &-content
                margin-top .5rem
                font-size 1rem
                line-height 2rem
        &__btn
            width 85%
            margin 1.5rem auto
        
    
</style>
