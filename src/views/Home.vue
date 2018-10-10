<template lang="pug">
    baidu-map(
        id="map" ak="1taMaGAUGBb2S4gQvHqDt7daPOCIjIkW" 
        :center="center"   
        :zoom="zoom"
        @touchstart="closeAll"
        )
        bm-control
            button(class="home-btn icon-charger-filter" @click="chargerSearchShow") 筛选
        bm-scale(anchor="BMAP_ANCHOR_BOTTOM_LEFT")
        bm-navigation(anchor="BMAP_ANCHOR_TOP_LEFT")
        bm-geolocation(anchor="BMAP_ANCHOR_BOTTOM_LEFT" :showAddress="true" :autoLocation="true")
        div(v-for="item in addressFilter")
            my-overlay(:position="{lng:item.mapPosition[0],lat:item.mapPosition[1]}"
                       :class="{'icon-gray':item.status==chargerStatus.OFFLINE,'icon-green':item.status==chargerStatus.CHARGING,'icon-blue':item.status==chargerStatus.IDLE,'icon-green1':item.status==chargerStatus.CONNECTED,'icon-red':item.status==chargerStatus.ERR}"
                       @showChargerInfo="showChargerInfo"
                       :item="item"
                      )
        charger-info(
            :chargershow="chargerInfoShow"
            :address="this.addressOrder.address"
            :deviceId="this.addressOrder.deviceId"
            :status="this.addressOrder.status"
            :energyMoney="this.addressOrder.energyMoney"
            :serviceMoney="this.addressOrder.serviceMoney"
            :mapPosition="this.addressOrder.mapPosition"
            @close="close"
            @navgit="navgit"
        )
        charger-search(
            :searchShow="searchShow"
            @searchClose="searchClose"
            @confirm="confirmStatus"
        )
</template>

<script>
    import {mapState} from 'vuex'
    import {BaiduMap,BmNavigation,BmGeolocation,BmScale,BmOverlay,BmControl}  from 'vue-baidu-map'
    import MyOverlay from '../components/MyOverlay.vue'
    import ChargerInfo from '../components/ChargerInfo.vue'
    import ChargerSearch from '../components/ChargerSearch.vue'
    import { CHARGER_STATUS } from '../utils/constants.js'
    import {getAllChargerInfo} from '../api/home'
    import {getLocation} from '../utils/wxJSSDK'
    import wx from 'weixin-js-sdk'
    export default {
        name:'home',
        components:{
            BaiduMap,
            BmNavigation,
            BmGeolocation,
            BmScale,
            BmOverlay,
            MyOverlay,
            BmControl,
            ChargerInfo,
            ChargerSearch
        },
        data(){
            return {
                addressList:[],
                addressFilter:[],
                chargerInfoShow: false,
                searchShow: false,
                addressOrder: [],
                chargerStatus: CHARGER_STATUS,
                zoom:15,
                center:{lng : 113.9519,lat : 22.5903}
            }
        },
        computed:{
            addressListFilter () {
             return this.addressList
           },
           ...mapState('user', {
               userId: state=>state.userInfo.userId
           }),
           ...mapState('charger',{
               allChargerInfo:state=>state.allChargerInfo
           })
        },
        mounted(){
            this.init()
        },
        methods:{
            init(){
                // 获取所有充电桩信息
                // getAllChargerInfo({
                //     userId:this.userId
                // }).then((res)=>{
                //     this.addressList=res
                //     this.addressFilter=this.addressList
                // }).catch(error=>{
                //     this.$store.commit('stateBox/popUpToast',{
                //         text: '暂无法获取最新的电桩信息',
                //         display: true
                //     });
                // })
                this.$store.dispatch('charger/getAllChargerInfo',{
                    userId:this.userId
                })
                this.addressList=this.allChargerInfo
                this.addressFilter=this.addressList
                // 设置地图中心为当前用户位置
                getLocation().then(res=>{
                    this.center.lat = res.latitude
                    this.center.lng = res.longitude
                }).catch(error=>{
                    this.$store.commit('stateBox/popUpToast',{
                        text: error.errMsg,
                        display: true
                    });
                })
            },
            showChargerInfo (item) {
                console.log(item)
                this.addressOrder = item
                this.chargerInfoShow = true
                this.searchShow = false
            },
            //点击X关闭详情框
            close () {
                this.chargerInfoShow = false
            },
            //外部关闭详情框
            closeAll () {
               this.chargerInfoShow = false
               this.searchShow = false
            },
            searchClose () {
                this.searchShow = false
            },
            chargerSearchShow () {
                this.searchShow = !this.searchShow
                this.chargerInfoShow = false
            },
            // 筛选触发后执行
            confirmStatus(data){
                this.addressFilter = []
                if (data !== 100) {
                    this.addressList.forEach((item, index) => {
                        if (item.status === data) {
                        this.addressFilter.push(this.addressList[index])
                    }
                 })
                } else {
                    this.addressList.forEach((item, index) => {
                    this.addressFilter.push(this.addressList[index])
                 })
                }
                this.searchShow = false
            },
            // 进行导航
            navgit(val){
                wx.openLocation({
                    latitude: parseFloat(val.lat), // 纬度，浮点数，范围为90 ~ -90
                    longitude: parseFloat(val.lng) , // 经度，浮点数，范围为180 ~ -180。
                    name: val.address, // 位置名
                    address: val.address, // 地址详情说明
                    scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
                    infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
                })
            }
        }
        
    }
</script>
<style lang="stylus">
    .map-wrap
        width 100%
        height 100%
    #map
        width 100%
        height 100%

    .icon-blue  
        color #50c3c1
     
    .icon-gray  
        color gray
    
    .icon-green  
        color #A2C741
    .icon-green1
        color green 
    .icon-yellow 
        color yellow
    .icon-idle
        color orange 
    .icon-yellow2 
        color #faac52
     
    .icon-red 
        color red
     
    .home-btn  
        display block;
        width 5rem
        height 2.5rem
        font-size 1.2rem;
        color white;
        margin 0
        padding 0
        outline none
        text-decoration none
        border-radius 20%
        background-color #747472
        opacity 0.9
        &.icon-charger-filter:before
            font-size 1.2rem
        position fixed;
        top 3%;
        left 14%;
     
</style>

