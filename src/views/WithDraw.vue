<template lang="pug">
    mixin withdrawItem(flag,type,name,message,data,length)
        div.withdraw__item
            div.withdraw__item-hd
                if flag
                    label.withdraw__item-label=name
                else
                    button(class="btn btn-primary withdraw__item-validate" v-bind:disabled="btn.valdisabled" @click="_getVerCode")=name
            div.withdraw__item-bd
                input(
                    type=type
                    class="withdraw__item-input"
                    placeholder=message
                    v-model=data
                    maxlength=length
                )
    div.bg                
        div.withdraw
            p.withdraw-title 最大提现金额:   
                span {{balance|formatMoney}} 
            +withdrawItem(true,"tel","电话号码","请输入电话号码","withDraw.phone",11)
            +withdrawItem(true,"number","提现金额","请输入提现金额","withDraw.money",5)
            +withdrawItem(false,"tel","{{btn.validate}}","请输入提现码","withDraw.code",6)
            div.register__btn
                    button(class="btn btn-primary" @click="_withDraw" v-bind:disabled="enabled") 提现
            p.withdraw-end 温馨提示: 提现成功后一周时间内会自动存入微信钱包   

</template>

<script>
import {mapState} from 'vuex'
import {formatMoney}  from '../filters/formatMoney.js'
import {CheckRegex} from '../utils/checkRegex.js'
import {isInteger} from './../utils/toolFunc.js'
export default {
    name: 'withDraw',
    filters:{
        formatMoney
    },
    data(){
        return{
            withDraw:{
                money: '',
                code:'',
                phone:''
            },
            count: 60,
            btn:{
                validate: '提现码',
                valdisabled: true,
            }
        }
    },
    computed:{
        enabled(){
             return !this.withDraw.money||!this.withDraw.phone||!this.withDraw.code
        },
        ...mapState('user',{
            balance: state=>state.userInfo.balance,
            userId: state=>state.userInfo.userId,
            openId: state=>state.userInfo.openId,
        })
    },
    watch:{
        withDraw:{
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
        _withDraw(){
            if (!CheckRegex(/^1[34578]\d{9}$/, this.withDraw.phone)) {
                this.$store.commit('stateBox/popUpToast', {
                    text: '请输入正确的11位电话号码',
                    display: true,
                })
                    return
            }
            if (!this.withDraw.code) {
                this.$store.commit('stateBox/popUpToast', {
                    text: '请输入验证码',
                    display: true,
                })
                return
            }
            if(!isNaN(this.withDraw.money)&&this.withDraw.money==0){
                this.$store.commit('stateBox/popUpToast', {
                    text: '请输入有效金额',
                    display: true,
                })
                return
            }
            if(parseFloat(this.withDraw.money)>parseFloat(this.balance)){
                this.$store.commit('stateBox/popUpToast', {
                    text: '不能超过最大提现金额',
                    display: true,
                })
                return
            }
            if(String(this.withDraw.money).indexOf('.')!=0){
                if((String(this.withDraw.money).length-(String(this.withDraw.money).indexOf('.') + 1))>2){
                    this.$store.commit('stateBox/popUpToast', {
                        text: '小数点后不超过两位',
                        display: true,
                    })
                    return
                }
            }
            this.$store.dispatch('user/withDraw',{
                phone: this.withDraw.phone,
                money: parseFloat(this.withDraw.money).toFixed(2),
                verfCode: this.withDraw.code,
                userId: this.userId,
                openId: this.openId
            })
        },
        _getVerCode(){
            if (!CheckRegex(/^1[345789]\d{9}$/, this.withDraw.phone)) {
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
                phone: this.withDraw.phone
            })
        },
    }
}
</script>

<style lang="stylus">
    @import "./../assets/stylus/common.stylus"
    .withdraw
        padding-top 2rem
        &-title
            font-size 1.2rem
            span 
                color red
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
        &-end
            width 85%
            margin 0 auto
            font-size 1rem
            color #fff
</style>


