<template lang="pug">
    div(class='footbar')
        router-link(class="footbar__item" :to="{path: '/home'}" replace)
            span(class="footbar__icon icon-charger-search")
            br
            span(class="footbar__label") 找桩
        |
        |
        router-link(class="footbar__item" :to="{path: '/charger'}" replace)
            span(class="footbar__icon icon-ev_station")
            br
            span(class="footbar__label") 设备
        |
        |
        router-link(class="footbar__item" :to="{path: '/user'}" replace)
            span(class="footbar__icon icon-user")
            br
            span(class="footbar__label") 用户
</template>

<script>
export default {
    name: "FooterNav"
}
</script>
<style lang="stylus">
@import "./../assets/stylus/common.stylus"
    .footbar
        display flex
        width 100%
        &__icon
            display inline-block
            font-size  1.5rem
            line-height  1.1rem
        &__label
            text-align center
            font-size .9rem
            line-height .9rem
        &__item
            flex 1
            text-decoration none
            padding-top .5rem
            line-height 1.3rem
            color gray 
            vertical-align center
            text-align center
            user-select none

.router-link-exact-active
    color #9DC34C

</style>


