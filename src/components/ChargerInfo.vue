<template lang="pug">
    div.charger-info
        div.charger-info__list
            p 
              span 功率
              strong {{devicePower}} kw/h
            p
              span 服务费每度
              strong {{serviceRate}} ￥
            p 
              span 电费每度
              strong {{energyRate}} ￥       
</template>
<script>
export default {
    name: 'charger-info',
    props:{
        // 设备功率
        devicePower:{
            require: true,
            type: Number
        },
        serviceRate:{
            require:true,
            type: Number
        },
        energyRate:{
            requre: true,
            type:Number
        }
    }
}
</script>
<style lang="stylus" scoped>
    .charger-info
        text-align left
        padding-left 1.2rem
        &__list
            display flex
            p
              flex 1
              font-size 1rem
              span 
                font-size 0.5rem
              strong 
                color black
</style>


