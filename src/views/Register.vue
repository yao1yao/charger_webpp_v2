<template lang="pug">
    mixin registerItem(flag,type,name,message,data,length)
        div.register__item
            div.register__item-hd
                if flag
                    label.register__item-label=name
                else
                    button(class="btn btn-primary register__item-validate" v-bind:disabled="btn.valdisabled" @click="_getVerCode")=name
            div.register__item-bd
                input(
                    type=type
                    class="register__item-input"
                    placeholder=message
                    v-model=data
                    maxlength=length
                )
    div.bg
        div.register
            +registerItem(true,"text","用户名","请输入用户名","registerData.name",40)
            +registerItem(true,"tel","手机号","请输入手机号","registerData.phone",11)
            +registerItem(true,"password","密码","请输入密码","registerData.password",20)
            +registerItem(true,"password","验证密码","请重复输入密码","registerData.confirmPassword",20)
            +registerItem(false,"tel","{{btn.validate}}","请输入验证码","registerData.code",6)
            div.register__btn
                button(class="btn btn-primary" @click="_register" v-bind:disabled="enabled") 提交
</template>
<script>
import {CheckRegex} from '../utils/checkRegex.js'
import {mapState} from 'vuex'
export default {
    name:"Register",
    data(){
        return{
            registerData:{
                name:'',
                phone:'',
                password:'',
                confirmPassword:'',
                code: ''
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
             return !this.registerData.name||!this.registerData.phone||!this.registerData.password||!this.registerData.confirmPassword||!this.registerData.code
        },
        ...mapState('user',{
            openId: state=>state.openId
        })
    },
     watch:{
        registerData:{
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
        _register(){
            if (!CheckRegex(/^1[34578]\d{9}$/, this.registerData.phone)) {
                this.$store.commit('stateBox/popUpToast', {
                    text: '请输入正确的11位电话号码',
                    display: true,
                })
                    return
            }
            if (!this.registerData.code) {
                this.$store.commit('stateBox/popUpToast', {
                    text: '请输入验证码',
                    display: true,
                })
                return
            }
            if (!this.registerData.name) {
                this.$store.commit('stateBox/popUpToast', {
                    text: '请输入用户名',
                    display: true,
                })
                return
            }
            if (this.registerData.password !== this.registerData.confirmPassword) {
                this.$store.commit('stateBox/popUpToast', {
                    text: '两次密码不一致，请重新输入',
                    display: true,
                })
                return
            } 
            if (!this.openId) {
                this.$store.commit('stateBox/popUpToast', {
                    text: '手机微信号已注册',
                    display: true,
                })
                return
            } 
            this.$store.dispatch('user/register',{
                phone: this.registerData.phone,
                password: this.registerData.password,
                userName: this.registerData.name,
                verfCode: this.registerData.code,
                openId: this.openId
            })
        },
        _getVerCode(){
           if (!CheckRegex(/^1[345789]\d{9}$/, this.registerData.phone)) {
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
               phone: this.registerData.phone
           }) 
        }
    }
}
</script>
<style lang="stylus">
    @import "./../assets/stylus/common.stylus"
    .register
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
                widthHeightLineHeightFontSize(100%, 100%, 1rem,.9rem)
                border none 
                outline 0
                letter-spacing .2rem
                text-indent 1.5rem
                background-color transparent
                color #000
            &-validate
                height 2.2rem
                margin .2rem .2rem 

        &__btn
            width 85%
            margin 2.5rem auto
            border none
</style>
