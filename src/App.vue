<template>
  <div id="app" class="container">
    <div class="content">
    <router-view/>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>
<script>
import FooterNav from "./components/FooterNav";
export default {
  name: "app",
  components: {
    FooterNav
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
