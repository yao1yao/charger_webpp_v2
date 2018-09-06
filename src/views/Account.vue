<template lang="pug">
        div.account
            div.account__item
                div.icon-withdraw-cash.account__item-icon
                p.account__item-content 可用余额: 20.5 ￥
                p.account__item-content 冻结金额: 10.5 ￥
            div.account__btn
                button(@click="recharge" class="btn btn-primary account__btn-recharger") 充值
            div.account__btn
                button(@click="deposit" class="btn btn-primary") 提现

</template>

<script>
export default {
    name: "Account",
    methods:{
        recharge(){
            this.$router.push({path:'/recharge'})
        },
        deposit(){

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
