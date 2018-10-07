<template lang="pug">
    div.settings
        <ul class="settings__list">
            <li>
                <router-link :to="{path:'/modify-datum'}" class="settings__item">修改资料
                </router-link>
                //- <router-link :to="{path:'/modify-pwd'}" class="settings__item">密码修改
                </router-link>
                <router-link :to="{path:'/company-auth'}" class="settings__item">企业认证
                </router-link>
                <router-link :to="{path:'/about-us'}" class="settings__item">关于我们
                </router-link>
            </li>
        </ul>
        div.settings__btn
            button(@click="logOut" class="btn btn-primary" v-bind:disabled="false") 退出登录
</template>


<script>
import {mapState} from 'vuex'
export default {
    name: "Settings",
    computed:{
        ...mapState('user',{
            userId: state=>state.userInfo.userId
        })
    },
    methods:{
        logOut(){
            this.$store.dispatch('user/logout',{
                userId: this.userId
            })
        }
    }
}
</script>


<style lang="stylus">
    @import "./../assets/stylus/common.stylus"
    .settings
        width 90%
        margin 0 auto
        padding 1rem auto 
        background-color #ffffff
        &__list
            list-style-type none 
            padding-top 2rem
        &__item
            width 70%
            margin 0 auto
            display block
            margin-top 1rem
            font-size 1rem
            font-weight bold
            color #878787
            border-bottom 2px solid #e5e5e5
            text-decoration: none;
            line-height: 2.5rem;
            text-align: left;
            text-indent: .1rem;
            position: relative;
            &:after
                content: " ";
                display: inline-block;
                height: 7px;
                width: 7px;
                border-width: 2px 2px 0 0;
                border-color: #4FAEE4;
                border-style: solid;
                -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
                transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
                position: absolute;
                top: 50%;
                margin-top: -2px;
                right: 2rem;
        &__btn
            width 70%
            margin 0 auto
            position absolute
            bottom 25%
            left 15%

</style>
