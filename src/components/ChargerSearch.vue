<template lang="pug">
    div(class="charger-search" v-bind:class="{'display':searchShow}")
        p.charger-search__title 电桩筛选
            span(@touchstart.stop="closeChargerSearch") x
        p.charger-search__list-title 充电桩
        div.charger-search__list-content
            p(v-bind:class="{'selected': status == CHARGER.CHARGER.status}" @click="changeStatus(CHARGER.CHARGER.status)")
                span(class="icon-charger-status-charging")
                span 充电
            p(v-bind:class="{'selected': status == CHARGER.IDLE.status}" @click="changeStatus(CHARGER.IDLE.status)")
                span(class="icon-charger-status-idle")
                span 空闲
            p(v-bind:class="{'selected': status == CHARGER.CONNECTED.status}" @click="changeStatus(CHARGER.CONNECTED.status)")
                span(class="icon-charger-status-offline")
                span 连接
            p(v-bind:class="{'selected': status == CHARGER.OFFLINE.status}" @click="changeStatus(CHARGER.OFFLINE.status)")
                span(class="icon-charger-status-offline")
                span 离线
        p.charger-search__confirm(@click="confirm") 确定
</template>
<script>
    import { CHARGER_STATUS } from '../utils/constants.js'
    export default {
      props:{
        searchShow:[Boolean]
      },
      data () {
        return {
          status: 'default',
          CHARGER:{
            CHARGER:{
              status: CHARGER_STATUS.CHARGING
            },
            CONNECTED:{
              status: CHARGER_STATUS.CONNECTED
            },
            OFFLINE:{
              status: CHARGER_STATUS.OFFLINE
            },
            IDLE:{
              status: CHARGER_STATUS.IDLE
            },
            ERR:{
              status: CHARGER_STATUS.ERR
            },
            ALL:{
              status: 100
            }
          },
          flag: true
        }
      },
      methods: {
        changeStatus (data) {
            this.status = data
        },
        closeChargerSearch(){
          this.$emit('searchClose')
        },
        confirm(){
          this.$emit('confirm',this.status);
          this.status='default'
        }
      }
    }
</script>
<style lang="stylus" scoped>
    .charger-search  
        display none
        position fixed
        width 90%
        bottom 20%
        left 0
        right 0
        margin 0 auto
        background white
        border-radius 10px
        &__title 
            background-color #54bcfa
            font-size 1.5rem
            color white
            border-top-left-radius 10px
            border-top-right-radius 10px
            span 
                float right
                padding-right 1rem
        &__list 
            &-title 
                color #242424
                text-align left
                font-size 1rem
                padding 5px 0 5px 1rem
            
            &-content 
                display flex
                height 2rem
                p 
                    flex 1
                    line-height  2rem
                    font-size  1rem
                    padding-left 5px
                    &.selected 
                        color #52bcf8
                        .icon-charger-status-offline
                        .icon-charger-status-idle
                        .icon-charger-status-charging
                        .icon-ev_station
                            font-size 2rem    
                            color #52bcf8   
                    &:active 
                        color #52bcf8    
        &__confirm 
            background-color: #54bcfa;
            color: white;
            font-size: 1.5rem;
            border-bottom-left-radius 10px
            border-bottom-right-radius 10px
    .display
        display: block
    
</style>
