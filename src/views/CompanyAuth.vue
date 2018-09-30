<template lang="pug">
    div.company
        div.company__hd
            img(class="company__hd-logo" src="../../static/company-logo.svg" alt="加载中...")
            p 中山远大科技有限公司
        div.company__bd
            div.company__item
                p 企业营业执照:
            div.company__item
                p 企业工商执照:
            div.company__item
                p 企业经营许可证:
</template>

<script>
export default {
    name: 'companyAuth'
}
</script>

<style lang="stylus">
    @import "./../assets/stylus/common.stylus"
    .company
        &__hd
            height 10rem
            padding-top 3rem
            background-color #F1F1F1
            &-logo
                display block
                margin 1rem auto 
                width 20%
                border-radius 50%
                line-height 10rem
        &__item
            text-align left
            text-indent 2rem
            font-size 1.1rem
            color #909090
            margin 3rem auto
</style>
