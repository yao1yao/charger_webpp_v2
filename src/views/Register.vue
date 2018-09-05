<template lang="pug">
    mixin registerItem(name)
        div.register__item
            div.register__item-hd
                label.register__item-label=name
            div.register__item-bd
                
    div.bg
        div.register

</template>
<script>
export default {
    name:"Register"
}
</script>
<style lang="stylus">
    @import "./../assets/stylus/common.stylus"

</style>
