<template lang="pug">
    mixin chargingItem(icon,text)
        div.charging__item
            div.charging_hd
                span.charging__item_icon(class=icon )
            div.charging_bd
                p.charging__item_text=text
    div.bg
        div.charging
            +chargingItem('icon-charging-scan','通过微信公众号与电桩获取通讯')
            +chargingItem('icon-user-recharge','付费启动充电')
            +chargingItem('icon-charger-status-idle','实时查看充电进度')
            +chargingItem('icon-charging-bluetooth','远距离操控')
        
</template>
<script>
export default {
    name: 'charging',
    methods:{

    }
}
</script>
<style lang="stylus">

</style>


