<template lang="pug">
    div.settings
        <ul class="settings__list">
            <li>
                <router-link :to="{path:'/'}" class="settings__item">修改资料
                </router-link>
                <router-link :to="{path:'/'}" class="settings__item">密码修改
                </router-link>
                <!--<a href="javascript:;" class="setup__category__item">企业认证</a>-->
                <!--<a href="javascript:;" class="setup__category__item">关于我们</a>-->
            </li>
        </ul>
        div.settings__btn
            button(@click="logOut" class="btn btn-primary") 退出登录
</template>


<script>
export default {
    name: "Settings",
    methods:{
        logOut(){
            this.$router.push({path: '/login'})
        }
    }
}
</script>


<style lang="stylus">
    @import "./../assets/stylus/common.stylus"
    .settings
        width 90%
        margin 1rem auto 
        background-color #ffffff
        &__list
            list-style-type none 
            margin-top 2rem
        &__item
            width 80%
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
            padding-left: 3rem;
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
                right: 3rem;
        &__btn
            width 90%
            margin 0 auto
            position absolute
            bottom 25%

</style>
