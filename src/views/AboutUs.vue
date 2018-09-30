<template lang="pug">
div.bg
    div.about
        div.about__item
            p 软件版本
            p 1.0.1
        div.about__item
            p 官网网站
            p www.
        div.about__item
            p 官方微信
            p 微信公众号: 远大科技充电平台
        div.about__item
            p 服务热线
            p 0760-
</template>

<script>
export default {
    name: 'aboutUs'
}
</script>


<style lang="stylus">
    .about
        padding-top 3rem
        width 80%
        margin 0 auto
        &__item
            margin-bottom 2rem
            text-align left 
            font-size 1rem
            p:last-child
                margin-top .5rem
                color white
                font-size .9rem


</style>

