<template lang="pug">
    mixin chargingItem(icon,text)
        div.charging__item
            div.charging_hd
                span.charging__item-icon(class=icon)
            div.charging_bd
                p.charging__item-text=text
    div.bg
        div.charging
            +chargingItem('icon-charging-scan','通过微信公众号与电桩获取通讯')
            +chargingItem('icon-user-recharge','付费启动充电')
            +chargingItem('icon-charger-status-idle','实时查看充电进度')
            +chargingItem('icon-charging-bluetooth','远距离操控')
            p(class="charging__logo" @click="scan")
                span.charging__logo-content
            p(class="charging__scan") 扫码充电
            div.charging__btn
                button(@click="inputChargingNumber" class="btn btn-primary" v-bind:disabled="Userstatus") 输入编号
            div.charging__btn
                button(@click="getChargerStatus" class="btn btn-primary"  v-bind:disabled="!Userstatus") 充电状态
</template>
<script>
import {mapState} from 'vuex'
import {USER_STATUS} from './../store/modules/user'
import {STATUS_EVENT}  from '../store/mutation-types'
import wx from 'weixin-js-sdk'

export default {
     name: 'charging',
     data(){
         return {
             isLogin: true
         }
     },
     computed:{
         ...mapState('user',['userStatus']),
         Userstatus(){
             return this.userStatus!==USER_STATUS.LOGIN
         }
     },
     created(){
        if(this.$route.query.chargerNumber){
            let chargingInfo={
                set_duration: this.$route.query.setDuration,
                set_energy: this.$route.query.setEnergy,
                charger_number: this.$route.query.chargerNumber,
                charging_type: this.$route.query.chargingType
            }
            this.$store.commit('charger/' + STATUS_EVENT.GET_CHARGER_INFO,chargingInfo, {root: true})
        }
     },
     methods:{
      inputChargingNumber(){
        if(this.userStatus===USER_STATUS.LOGIN){  
            this.$router.push({path: '/charger-start'})
        }
      },
      getChargerStatus(){
        if(this.userStatus===USER_STATUS.CHARGING){  
            this.$router.push({path: '/charger/status'})
        }
      },
      scan(){
          var that = this;
          wx.scanQRCode({
              needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果
              scanType: ["qrCode"],
              success : function(res) {
                  let result = res.resultStr
                  let query=that.splitByqMark(result)
                  let chargerNumber =  that.getQueryString(query[1],'chargerNumber')
                  that.$router.push({path: '/charger-start', query:{chargerNumber:chargerNumber}})
              }
          })
      },
      splitByqMark(str){
        if(str.indexOf('?')===-1){
           return  'str is not url or not carry parameter'
        }
        return str.split('?')
      },
      getQueryString(str,name){     
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");       
        var r = str.match(reg);        
        if (r!=null) return r[2]; return '';    
      }
    }
}
</script>
<style lang="stylus">
@import "./../assets/stylus/common.stylus"
    $whiteColor = #fff
    $blueColor = #0B87CD
    .charging
        width 100%
        margin 0 auto
        padding-top 1rem
        &__item
            display flex
            padding 10px 0 10px 10%
            --webkit-box-align center
            align-items center
            widthHeightLineHeightFontSize(100%, 1.2rem,1.2rem, 1.1rem)
            &-text
                color $whiteColor
        &_bd
            padding-left .5rem 
        &__logo
            margin 13% auto .5rem
            align-items center
            justify-content center
            &-content
                display inline-block
                widthHeightLineHeightFontSize(3rem, 3rem ,0,0)
                border-radius(3rem)
                border 10px solid $blueColor
                background-color $whiteColor
                ^[2]:active
                    box-shadow 0 0 0 5px $whiteColor
        &__scan
            widthHeightLineHeightFontSize(90%, 2rem, 2rem ,1.2rem)
            color $whiteColor
            margin 0 auto 4rem
            position relative
            &:before
                beforeAfter(1px, 34%, $whiteColor, 46.7%, 1, 0)
            &:after
                beforeAfter(1px, 34%, $whiteColor, 46.7%, 0, 0)
        &__btn
            width 90%
            height 1.5rem
            margin 2rem auto
            border none
            
</style>


