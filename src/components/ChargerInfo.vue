<template lang="pug">
    div(class="charger-info" v-bind:class="{'display':chargershow}")
        p(class="charger-info__title") 电桩详情
            span(@touchstart.stop="closeChargerInfo") x 
        div.charger-info__list
            p 
                span.icon-charger-position 位置
                span {{address}}
            p
                span.icon-refresh-ui 状态 
                span {{status|filter}}
            p
                span ID 编号
                span {{deviceId}}
            p
                span.icon-charging-energy 电费
                span {{energyMoney}} 元/度
            p
                span.icon-charging-service 服务费
                span {{serviceMoney}} 元/度 
        button.charger-info__nav(@click="navgit") 导航    
</template>
<script>
  export default {
    props:{
        address:{
            require: true,
            type: String
        },
        deviceId:{
            require: true,
            type: Number
        },
        status:{
            require: true,
            type: Number
        },
        chargershow:{
            require: true,
            type: Boolean
        },
        serviceMoney:{
            require: true,
            type: Number
        },
        energyMoney:{
            require: true,
            type: Number
        },
        mapPosition:{
            require: true,
            type: Array
        }
    },
    filters: {
      filter (status) {
        let condition = ''
         switch(status){
           case 0:
             condition = '电桩离线'
            break;
           case 1:
             condition = '枪头已连接'
            break;
           case 2:
             condition = '电桩充电中'
             break;
           case 3:
             condition = '电桩已预约'
            break
           case 4:
             condition = '电桩空闲'
             break
           default:
             condition = "电桩故障"
         }
         return condition
      }
    },
    components:{
    },
    data(){
        return{
            lng:0,
            lat:0,
            location:''
        }
    },
    methods: {
      closeChargerInfo () {  
        this.$emit('close')
      },
      navgit(){
        this.lng=this.mapPosition[0]
        this.lat=this.mapPosition[1]
        this.location = this.address
        this.$emit('navgit',{lng:this.lng,lat:this.lat,address:this.location}) 
      }
    }
  }
</script>

<style lang="stylus">
    .charger-info
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
            border-top-left-radius 10px
            border-top-right-radius 10px
            font-size 1.5rem
            color white
            span 
                float right
                padding-right 1rem
        &__list 
            p 
                display flex
                text-align: left;
                border-top:1px solid #d4d4d4;
                line-height: 2rem;
                span:first-child 
                    display: block;
                    flex: 3;
                    font-size: 1rem;
                    line-height: 2rem;
                    padding-left: 1rem;
                    color: #54bcf9;
                span:last-child 
                    flex: 7;
                    font-size:1rem;

        &__nav
            background-color: #54bcfa;
            color white
            width 100%
            outline none
            font-size: 1.5rem;
            border-bottom-left-radius 10px
            border-bottom-right-radius 10px
            :active
                opacity 0.5
    
    .display
        display: block
    /*todo global charger status color*/
    .icon-charger-position 
        color:gray;
        &.fault-status
            color: #F00;
        
        &.connected-status
            color: #50c3c1;
        
        &.idle-status
          
        &.charging-status
            color: #9dc349;
        
        &.yellow-status
            color: #fff80d;
    .charger-overlay 
        position: absolute;
        font-size: 2rem;
    
</style>

