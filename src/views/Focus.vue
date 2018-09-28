<template lang="pug">
    div
        p.focus-text 温馨提示!
        p.fouce-text 关注公众号即可使用
        p (长按识别图中二维码)
        img(:src="publicUrl" alt="公众号连接")
        div.mask
</template>
<script>
import publicAccountLogo from '../assets/account.jpg'
export default {
    name: 'deviceQrcode',
    data(){
        return {
            publicUrl: publicAccountLogo
        }
    }
}
</script>

<style lang="stylus">
@import "./../assets/stylus/common.stylus"
    .focus
        &-text
            padding: 2rem 0
            font-size 1.5rem
            color #52bcf7
</style>
