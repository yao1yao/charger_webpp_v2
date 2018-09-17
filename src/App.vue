<template>
  <div id="app" class="container">
    <div class="content">
    <router-view/>
    </div>
    <footer-nav></footer-nav>
     <loading v-show="loading"></loading>
    <charger-toast
                v-bind="toast"
                @hideToast="hideToast"
    ></charger-toast>
  </div>
</template>
<script>
import FooterNav from "./components/FooterNav"
import ChargerToast from './components/ChargerToast.vue'
import Loading from './components/Loading.vue'
import {mapState} from 'vuex'
export default {
  name: "app",
  components: {
    FooterNav,
    ChargerToast,
    Loading
  },
  computed:{
    ...mapState('stateBox',{
      toast: state=>state.toast,
      loading: state => state.loading,
    })
  },
  methods:{
    hideToast(val){
        this.$store.commit('stateBox/popUpToast',{
          text: 'disappear',
          display: false
        });
    }
  }
}
</script>
<style lang="stylus">
@import "./assets/stylus/common.stylus"
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

.container
  width 100%
  height 91%

.content
  width 100%
  height 100%
  overflow scroll
</style>
