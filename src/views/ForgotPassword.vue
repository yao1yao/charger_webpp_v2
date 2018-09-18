<template lang="pug">
    mixin forgotPasswordItem(type,message,data)
        div.forgot-password__item
            input(
                class="forgot-password__input" 
                type=type 
                placeholder=message
                v-model=data
            )
    div.bg        
        div.forgot-password
            +forgotPasswordItem("number","请输入 11 位手机号","phone")
            +forgotPasswordItem("password","请输入新密码","password")
            +forgotPasswordItem("password","请重复输入新密码","confirmPassword")
            div.forgot-password__validate
                div.forgot-password__btn
                    button(class="btn btn-primary forgot-password__button" @click="_getVerCode" v-bind:disabled="btn.valdisabled") {{btn.validate}}
                div.forgot-password__number
                        input(
                    class="forgot-password__input" 
                    type="number" 
                    placeholder="请输入验证码"
                    v-model="code"
                )
            div.forgot-password__confirm
                    button(class="btn btn-primary" v-bind:disabled="enabled" @click="_forgetPwd") 提交

</template>

<script>
import {CheckRegex} from '../utils/checkRegex.js'
export default {
    name:"ForgotPassword",
    data(){
        return {
            phone: null,
            password: '',
            confirmPassword: '',
            code: null,
            count: 60,
            btn:{
                validate: '验证码',
                valdisabled: false,
            }
        }
    },
    computed:{
        enabled(){
             return !this.phone||!this.password||!this.confirmPassword||!this.code
        }
    },
    methods:{
        _getVerCode(){
           if (!CheckRegex(/^1[345789]\d{9}$/, this.phone)) {
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
               phone: this.phone
           }) 
        },
        _forgetPwd(){
            if (!CheckRegex(/^1[34578]\d{9}$/, this.phone)) {
            this.$store.commit('stateBox/popUpToast', {
                text: '请输入正确的11位电话号码',
                display: true,
            })
            return
            }
            if (this.password !== this.confirmPassword) {
            this.$store.commit('stateBox/popUpToast', {
                text: '两次密码不一致，请重新输入',
                display: true,
            })
            return
            }
            if (!this.code) {
            this.$store.commit('stateBox/popUpToast', {
                text: '请输入验证码',
                display: true,
            })
            return
            }
            this.$store.dispatch('user/forgetPwd',{
                phone: this.phone,
                password: this.password,
                verfCode: this.code
            })
        }
    }
}
</script>

<style lang="stylus">
    @import "./../assets/stylus/common.stylus"
    .forgot-password
        width 85%
        margin 0 auto 
        padding-top 2.5rem
        &__item
            margin 1.5rem auto
        &__input
            widthHeightLineHeightFontSize(100%,2.5rem,auto,.9rem)
            outline none
            border 2px solid #51BAF5
            border-radius 10px
            letter-spacing .2rem
            text-indent 1rem
        &__validate
            width 100%
            display flex
        &__btn
            padding-top .2rem
            width 40%
        &__button
            height 2.5rem
        &__number
            width 55%
            margin-left 1rem
        &__confirm
            margin 5rem auto
            border none
</style>
