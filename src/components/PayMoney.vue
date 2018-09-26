<template lang="pug">
    div.pay-money
       div.pay-money__select
          select(class="pay-money__select-bd" @change.stop="updateSelect($event.target.value)")
             option(v-for="option in availableOptions" v-bind:value="option.id") {{option.name}}
       div(class="pay-money__set" v-show="current===0")
          div.pay-money__set-hd 设置充电金额
          div.pay-money__set-bd
             base-selector(v-on:changeNumber="changeNumber" v-bind:count="count.money")
       div(class="pay-money__set" v-show="current===1")
          div.pay-money__set-hd 设置充电时长
          div.pay-money__set-bd
             base-selector(v-on:changeNumber="changeNumber" v-bind:count="count.hour")
             base-selector(v-on:changeNumber="changeNumber" v-bind:count="count.second")
                      
</template>
<script>
import BaseSelector from './BaseSelector'
import {CHARGING_TYPE} from '../utils/constants.js'
export default {
    props:{
        availableOptions:{
            type: Array,
            required:false,
            default:function(){
                return [
                    {id:CHARGING_TYPE.MONEY,name:'金额充电'},
                    {id:CHARGING_TYPE.TIME,name:'时间充电'}
                ]
            }
        },
        current:{
            type:Number,
            require:true,
            default: 0
        },
        value:{
            type:Number,
            require:true,
            default:0
        }
    },
    components:{
        BaseSelector
    },
    data () {
        return {
          count: {
            money: {
              value: 0,
              type: '元',
              stepValue: 10,
              maxValue: 100,
            },
            hour: {
              value: 0,
              type: '小时',
              stepValue: 1,
              maxValue: 12,
            },
            second: {
              value: 0,
              type: '分钟',
              stepValue: 30,
              maxValue: 30,
            }
          },
        }
      },
      methods: {
        updateSelect(value) {
            this.$emit('update:current',Number(value));
        },
        changeNumber(data){
          if(data[0]===this.count.money.type){
             this.count.money.value= data[1]
          }else if(data[0]===this.count.hour.type){
             this.count.hour.value= data[1]
          }else if(data[0]===this.count.second.type){
             this.count.second.value = data[1]
          }
          if(this.current===CHARGING_TYPE.MONEY){
            this.$emit('update:value',this.count.money.value)
          }else {   
            this.$emit('update:value',this.count.hour.value*60+this.count.second.value)
          }
        },
      }
}
</script>
<style lang="stylus" scoped>
    .pay-money
         margin 1rem 0
         &__select
            text-indent 5%
            font-size 1rem
            text-align left
            color #888
            &-bd
              display block
              width 90%
              margin .5rem auto
              height 1.8rem
              color #888
              border 1px solid #888
              appearance none 
              -moz-appearance none 
              -webkit-appearance none 
              background url('../../static/arrow.png') no-repeat scroll right center transparent;
              &:focus
                outline 0  
         &__set
            &-hd
              font-size  1rem 
              line-height  1.5rem 
              padding  .5rem .9rem 
              text-align  left 
              color  #888 
            &-bd
              display  flex 
              width  90% 
              margin  0 auto 
              border  1px solid #e2e2e2 
              -webkit-border-radius  7px 
              -moz-border-radius  7px 
              border-radius  7px     
</style>
