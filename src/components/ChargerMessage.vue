<template lang="pug">
    div.charger-info
        div.charger-info__list
              span 功率
              strong {{devicePower}} kw/h
              span 服务费
              strong {{serviceRate}} 元/度
              span 电费
              strong {{energyRate}} 元/度     
</template>
<script>
export default {
    name: 'charger-info',
    props:{
        // 设备功率
        devicePower:{
            require: true,
            type: [Number,String]
        },
        serviceRate:{
            require:true,
            type: [Number,String]
        },
        energyRate:{
            requre: true,
            type: [Number,String]
        }
    }
}
</script>
<style lang="stylus" scoped>
    .charger-info
        text-align  center
        &__list
            display flex
            width 90%
            margin 0 auto
            span 
               margin 0 .6rem
               font-size 0.5rem
            strong 
               color black
</style>


