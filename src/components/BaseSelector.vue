<template lang="pug">
    div.selector
        div(class="selector__symbol-hd" @click="changeValue(1)") +
        div(class="selector__content") {{count.value}}
            span {{count.type}}
        div(class="selector__symbol-ft" @click="changeValue(-1)") -
</template>


<script>
export default {
    props:{
        count:{
           type: Object,
           default:function(){
               return {value:0,type:'元',stepValue:10,maxValue:100}
           }
        },
    },
    methods:{
        changeValue(data){
          if(data>0){
            this.count.value+=this.count.stepValue
            if( this.count.value>this.count.maxValue){
                this.count.value=0
            }
          }else{
            this.count.value-=this.count.stepValue
            if( this.count.value<0){
                this.count.value=this.count.maxValue;
            }
          }
         this.$emit('changeNumber',[this.count.type,this.count.value]);
        }
    }
}
</script>

<style lang="stylus">
    .selector
        width 100%
        text-align center
        &__symbol-hd,
        &__symbol-ft
            color #52bcf7
            font-size 2rem
            font-weight bold
        &__content
            font-size 1.6rem
            color #000
            border 
                top 1px dashed #e2e2e2
                bottom 1px dashed #e2e2e2
</style>

