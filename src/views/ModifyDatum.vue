<template lang="pug">
    mixin DatumItem(flag,type,name,message,data,length)
        div.Datum__item
            div.Datum__item-hd
                if flag
                    label.Datum__item-label=name
                else
                    button(class="btn btn-primary Datum__item-validate" v-bind:disabled="btn.valdisabled" @click="_getVerCode")=name
            div.Datum__item-bd
                input(
                    type=type
                    class="Datum__item-input"
                    placeholder=message
                    v-model=data
                    maxlength=length
                )
    div.bg
        div.Datum
            +DatumItem(true,"text","用户名","请输入新的用户名","DatumData.name",40)
            +DatumItem(true,"text","手机号","请输入当前或新的手机号","DatumData.phone",11)
            +DatumItem(false,"text","{{btn.validate}}","请输入验证码","DatumData.code",6)
            div.Datum__btn
                button(class="btn btn-primary" @click="_settings" v-bind:disabled="enabled") 提交
</template>

<script>
import {CheckRegex} from '../utils/checkRegex.js'
import {mapState} from 'vuex'
export default {
     name:'modifyDatum',
     data(){
         return {
            DatumData:{
                name:'',
                phone:'',
                code:''
            },
            count: 60,
            btn:{
                validate: '验证码',
                valdisabled: true,
            }
         }
     },
     computed:{
        enabled(){
             return !this.DatumData.name||!this.DatumData.phone||!this.DatumData.code
        },
        ...mapState('user',{
            userId:state=>state.userInfo.userId
        })
    },
    watch:{
        DatumData:{
            handler:function(val,oldVal){
                if(CheckRegex(/^1[345789]\d{9}$/, val.phone)){
                   this.btn.valdisabled = false
                }else{
                   this.btn.valdisabled = true
                }
            },
            deep: true
        }
    },
     methods:{
         _settings(){
             if (!this.DatumData.name) {
                this.$store.commit('stateBox/popUpToast', {
                    text: '请输入用户名',
                    display: true,
                })
                return
            }
            if (!CheckRegex(/^1[34578]\d{9}$/, this.DatumData.phone)) {
                this.$store.commit('stateBox/popUpToast', {
                    text: '请输入正确的11位电话号码',
                    display: true,
                })
                    return
            }
            if (!this.DatumData.code) {
                this.$store.commit('stateBox/popUpToast', {
                    text: '请输入验证码',
                    display: true,
                })
                return
            }
            this.$store.dispatch('user/modifyDatum',{
                userId: this.userId,
                phone: this.DatumData.phone,
                userName: this.DatumData.name,
                verfCode: this.DatumData.code,
            })
            
         },
         _getVerCode(){
           if (!CheckRegex(/^1[345789]\d{9}$/, this.DatumData.phone)) {
                this.$store.commit('stateBox/popUpToast', {
                    text: '请输入正确的11位电话号码',
                    display: true,
                })
            return;
            }
           let si = setInterval(()=>{
               this.btn.validate=`${this.count} s`
               if(this.count>0){
                   this.btn.valdisabled = true;
                   this.count-=1
               }else{
                   this.btn.validate = "验证码"
                   this.btn.valdisabled = false;
                   this.count = 60
                   clearInterval(si)
               }
           },1000) 
           this.$store.dispatch('user/verfCode',{
               phone: this.DatumData.phone
           }) 
        }
     }
}
</script>

<style lang="stylus">
    @import "./../assets/stylus/common.stylus"
    .Datum
        padding-top 2rem
        &__item
            display flex
            margin 1.5rem auto
            width 85%
            height 2.5rem
            color #ffffff
            border 2px solid #ffffff
            border-radius 10px
            &-hd
                width 30%
            &-bd
                width 70%
            &-label
                display block
                height 100%
                line-height 2.8rem
                font-size .9rem
                color #00a9ee
                padding-left .5rem
                wordJustify()
            &-input
                widthHeightLineHeightFontSize(100%, 100%, 2rem,.9rem)
                border none 
                letter-spacing .2rem
                text-indent 1.5rem
                background-color transparent
            &-validate
                height 2.2rem
                margin .2rem .2rem 

        &__btn
            width 85%
            margin 2.5rem auto
            border none
</style>


