<template lang="pug">
    bm-overlay(
        ref="customOverlay"
        :class="{sample:true}"
        pane="mapPane"
        @draw="draw"
    )
        div(v-text="text")
        span(@touchstart.stop="handleClick(item)" class="icon-charger-position")
</template>

<script>
  import {BmOverlay} from 'vue-baidu-map'
  export default {
      components:{
        BmOverlay
      },
      props:['position','item','text'],
      watch: {
      position: {
            handler () {
                this.$refs.customOverlay.reload()
            },
            deep: true
        }
      },
      data(){
          return {
              
          }
      },
      methods:{
          handleClick(item){
              this.$emit('showChargerInfo',item)
          },
          draw({el,BMap,map}){
              const {lng,lat} = this.position
              const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat))
              el.style.left=pixel.x+'px'
              el.style.top=pixel.y+'px'
          }
      }  
  }
</script>
<style lang="stylus" scoped>
    .sample
        overflow  hidden
        text-align center
        padding: 10px
        position absolute
    .icon-charger-position
        font-size 1.8rem
</style>

