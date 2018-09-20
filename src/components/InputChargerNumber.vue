<template lang="pug">
    div.input-number
        div.input-number__hd 请输入充电桩编号
        div.input-number__bd
            span(v-for="(item,index) in arr" class="input-number__bd-i" v-bind:class="{'input-number__bd-on':Byfilter===index}" @click.stop="Byfilter=index;$emit('update:display',true)") {{item}}
        base-key-board(v-bind:display="display" v-on:input="updateChargerNumber") 
</template>
<script>
import BaseKeyBoard from './BaseKeyBoard'
export default {
    props:{
        display:{
            require:true,
            type: Boolean,
            default:false,
        },
        arr:{
            require: true,
            type: Array
        },
        filterBy:{
            require: true,
            type: Number
        }
    },
    components:{
        BaseKeyBoard
    },
    data(){
        return {
            Byfilter: this.filterBy
        }
    },
    watch:{
        filterBy(val){
            this.Byfilter = val
        }
    },
    methods:{
        updateChargerNumber(val){
            if(val==='del'){
                this.arr[this.Byfilter]=0
                --this.Byfilter;
                if(this.Byfilter<0){
                    this.Byfilter=this.arr.length-1;
                }
            }else if(val === 'finish'){
                this.Byfilter = Math.random()
            }else{
                this.arr[this.Byfilter] = val;
                ++this.Byfilter;
                if(this.Byfilter>this.arr.length-1){
                    this.Byfilter=0
                }
            }    
        }
    }
}
</script>
<style lang="stylus" scoped>
    .input-number
        &__hd
            text-indent 5%
            font-size 1rem
            line-height 1.5rem
            padding .5rem 0
            text-align left
            color #888
        &__bd
            width 90%
            display flex
            margin 0 auto 
            &-i
                flex 1
                margin 0 3px
                font-size 1.8rem
                height 2rem
                line-height 2rem
                border 2px solid #a4a4a4
                border-radius 6px
            &-on
                border 2px solid #06ba04

</style>
