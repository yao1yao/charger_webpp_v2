<template lang="pug">
    div(class='footbar')
        router-link(class="footbar__item" :to="{path: '/home'}" replace)
            span(class="footbar__icon icon-charger-search")
            br
            span(class="footbar__label") 首页
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
    $bgcolor = #EDF7FF
    .footbar
        display flex
        width 100%
        background-color $bgcolor
        &__icon
            display inline-block
            font-size  $bigFontSize
            line-height  $bigLineHeight
        &__label
            text-align center
            font-size $minFontSize
            line-height $minLineHeight
        &__item
            flex 1
            text-decoration none
            line-height 25px
            color gray 
            vertical-align center
            text-align center
            user-select none

.router-link-exact-active
    color #98B257

</style>


