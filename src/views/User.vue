<template lang="pug">
    mixin userItem(icon, content)
        div.user__item
            span(class=icon)
            span=content
    mixin consumeItem(text,money)
        div.consume__item
            span=text
            span=money
    mixin menuItem(path,path_second,icon,icon_second,text,text_second)
        div.menu__item
            router-link(:to=path class="menu__item_i")
                span.menu__item_icon(class=icon)
                p.menu__item_text=text
            router-link(:to=path_second class="menu__item_i")
                span.menu__item_icon(class=icon_second)
                p.menu__item_text=text_second
    div        
        div.user
            +userItem("icon-user-info-name", "{{userInfo.userName}}")
            +userItem("icon-user-info-phone", "{{userInfo.phone}}")
        div.consume
            +consumeItem("余额","{{userInfo.balance|formatMoney}}")
            +consumeItem("消费","{{reChargerRecord.sumSpendMoney|formatMoney}}")
        div.service 用户服务
        div.menu
            +menuItem("{path:'/account'}","{path:'/settings'}","icon-withdraw-cash","icon-user-account","账户管理","设置")
            +menuItem("{path:'/charger/record'}","{path:'/recharge-record'}","icon-charging-status","icon-recharge-record","充电记录","充值记录")
            +menuItem("{path:'/course'}","{path:'/feedback'}","icon-user-help","icon-user-advice","使用教程","意见反馈")
</template>
<script>
import {mapState}  from 'vuex'
import {formatMoney}  from '../filters/formatMoney.js'
export default {
    name: 'User',
    data () {
        return {
        
        }
    },
     filters:{
        formatMoney
    },
    computed:{
        ...mapState('user',{
            userInfo: state=>state.userInfo
        }),
        ...mapState('record',{
            reChargerRecord: state=>state.reChargerRecord
        })
    },
    mounted(){
        this.$store.dispatch('record/getRechargeReocrd',{
            userId: this.userInfo.userId
        }),
        this.$store.dispatch('user/getNewestBalance',{
            userId: this.userInfo.userId
        })
    }
}
</script>

<style lang="stylus">
@import "./../assets/stylus/common.stylus"
    $color = #52BCF9
    .user
        widthHeightLineHeightFontSize(100%,auto,auto,1rem)
        color: #fff
        background-color:  #66C5FB
        display flex
        &__item
            flex 1
            padding 1rem 0
            widthHeightLineHeightFontSize(100%,auto,2rem,1.2rem)
            text-align left 
            span
                padding-left .5rem
    .consume
        width 100%
        color $color
        display flex
        &__item
            flex 1
            text-align center
            line-height 4rem
            font-size 1.5rem
            &:last-child
                border-left 1px solid $color
            span 
                &:last-child
                    padding-left .5rem
                    font-size 1.2rem
                    font-weight bold
    .service
        widthHeightLineHeightFontSize(100%, 3.5rem,3.5rem,1.2rem)
        text-align center
        background-color $color
        color #fff
    .menu  
        width 100%
        &__item
            display flex
            &_i
                flex 1
                display block
                text-decoration none
                padding .5rem 0 0
                color #939393
                text-align center
                border .5px solid #D8D8D8
            &_icon
                display inline-block
                widthHeightLineHeightFontSize(3rem, 4rem,4rem,2.5rem)
                border-radius(4rem)
                color #f1dc4d
            &_text
                font-size 1rem
</style>

