<template lang="pug">
    div.recharge
        div.recharge__hd
            router-link( class="recharge__hd-item" :to="{path:'/recharge'}")
                span(class="icon-recharge-record recharge__hd-icon")
                p.recharge__hd-text 充值
            router-link(class="recharge__hd-item" :to="{path:'/monthly-fee'}" )
                span(class="icon-recharge-clock recharge__hd-icon")
                p.recharge__hd-text 月费
        p.recharge__title 选择充值面额
        div.recharge__bd
            div.recharge__bd-item
                a(v-for="item in selectMoney" @click="rechargerMoney=item.value" :class="{'recharge__money-on': item.value==rechargerMoney}"  href="javascript:;" class="recharge__money") {{item.value}} 元
            div.recharge__number
                input(type="number" placeholder="请输入整数充值面额" class="recharge__input" v-model="rechargerMoney")
            p(class="recharge__show") {{rechargerMoney}} ￥
        div.recharge__btn
            button(@click="pay" class="btn btn-primary") 立即充值
</template>

<script>
import {pay} from './../api/pay'
import {mapState} from 'vuex'
import {STATUS_EVENT} from './../store/mutation-types.js'
import {isInteger} from './../utils/toolFunc.js'
export default {
    name:"Recharge",
    data () {
        return {
            rechargerMoney: null,
            selectMoney:[
                {value:50},
                {value:100},
                {value:300},
                {value:500},
                {value:1000},
                {value:2000},
            ]
        }
    },
    computed:{
        ...mapState('user',{
            userId:state=>state.userInfo.userId,
            openId:state=>state.userInfo.openId,
            balance:state=>state.userInfo.balance
        })
    },
    methods:{
        pay(){ 
            let self = this
            let rechargeMoney= self.rechargerMoney
            let openId = self.openId
            let userId = self.userId
            if(!isInteger(rechargeMoney)){
                self.$store.commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
                    text: '请输入非 0 整数金额',
                    display: true
                })
            }else{
                pay({
                    openId,
                    rechargeMoney,
                    userId
                }).then(function(res){
                    // 更新当前总余额
                    if(res==='success'){
                        let balance = self.balance+self.rechargerMoney
                        self.$store.commit('user/getNewestBalance',balance)
                        self.$store.commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
                            text: '充值成功',
                            display: true
                        })
                    }
                }).catch(error=>{
                    self.$store.commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
                            text: '充值失败',
                            display: true
                    })
                })
            }
        }
    }
}
</script>

<style lang="stylus">
    @import "./../assets/stylus/common.stylus"
    .recharge
        width 100%
        &__hd
            display flex
            &-item
                flex 1
                display block
                padding .5rem 0
                color #ffffff
                text-align center
                &:first-child
                    background-color #52bcf8
                &:last-child
                    background-color #cacaca
            &-icon
                display inline-block
                font-size 2.5rem
                line-height 3rem
            &-text
                font-size .5rem
        &__title
            widthHeightLineHeightFontSize(100%, 2rem,2rem,1rem)
            background-color #dbdbdb
            color #8d90a1
        &__bd
            width 90%
            height 8rem
            margin 0 auto 
            &-item
                width 100%
                padding-top 1rem
        &__money
            display inline-block
            widthHeightLineHeightFontSize(45%, 1.5rem, 1.5rem,.9rem)
            margin 5px
            padding 1rem 0
            color #a5a5a5
            border 1px solid #a5a5a5
            border-radius(12px)
            text-align center
            &-on
                background-color #52bcf8
                color #fff
        &__number
            width 100%
            margin-top 1rem
        &__input
            widthHeightLineHeightFontSize(95%, 2rem, 2rem, 1rem)
            outline none
            border 1px solid #dbdbdb
            text-indent .5rem
            letter-spacing .1rem
            border-radius(20px)
            &:placeholder
                color #a1a1a1
        &__show
            widthHeightLineHeightFontSize(90%, 1rem, 2rem, 1rem)
            margin 1rem auto
            color red
            position relative
            &:before
                beforeAfter(1px, 35%, #52bcf8, 90%, 1, 0)
            &:after
                beforeAfter(1px, 35%, #52bcf8, 90%, 0, 0)
        &__btn
            width 85%
            beforeAfter(0, 85%, #52bcf8, 50%, 1, 50%)
            margin-top: 45%
            margin-left: -42%


</style>
