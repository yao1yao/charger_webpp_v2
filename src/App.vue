<template>
  <div id="app" class="container">
    <div class="content">
    <router-view/>
    </div>
    <loading v-show="loading"></loading>
    <charger-toast
                v-bind="toast"
                @hideToast="hideToast"
    ></charger-toast>
    <charger-modal
                v-bind="modal"
                @modalResult="modalResult"
    ></charger-modal>
    <footer-nav></footer-nav>
  </div>
</template>
<script>
import FooterNav from "./components/FooterNav"
import ChargerToast from './components/ChargerToast'
import ChargerModal from './components/ChargerModal'
import Loading from './components/Loading.vue'
import {mapState} from 'vuex'
export default {
  name: "app",
  components: {
    FooterNav,
    ChargerToast,
    ChargerModal,
    Loading
  },
  computed:{
    ...mapState('stateBox',{
      toast: state=>state.toast,
      loading: state => state.loading,
      modal: state=>state.modal
    }),
    ...mapState('user',{
      userInfo: state=>state.userInfo
    }),
    ...mapState('charger',{
      chargingInfo: state=>state.chargingInfo
    }),
  },
  methods:{
    hideToast(val){
        this.$store.commit('stateBox/popUpToast',{
          text: 'disappear',
          display: false
        });
    },
    modalResult(val){
       let that = this;
       if(val==='confirm'){
        switch(that.modal.type){
            case 'endCharging':
               that.$store.dispatch('charger/endCharging',{
                  chargerNumber: that.chargingInfo.chargerNumber,
                  userId: that.userInfo.userId
               })
            break;
         }
       }
        this.$store.commit('stateBox/popUpModal', {
            title: '',
            content: '',
            btnName: '',
            type: 'default',
            display: false,
      })
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
