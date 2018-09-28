<template lang="pug">
    div.charger-err
        div.charger-err__logo  !
        div.charger-err__text {{errMsg}}
        div.mask
</template>

<script>
const DEFAULT_ERROR = "非法访问，请通过公众号或二维码方式进入界面"
export default {
    data(){
        return {
            errMsg: this.$route.query.errmsg || DEFAULT_ERROR
        }
    }
}
</script>
<style lang="stylus" scoped>
    @import "./../assets/stylus/common.stylus"
    .charger-err
        &__logo
            margin 3rem auto
            width 5rem;
            height 5rem;
            widthHeightLineHeightFontSize(5rem,5rem,5rem,2rem)
            border-radius(50%)
            color white
            background-color #10AEFF
            
        &__text
            font-size 1rem
</style>
