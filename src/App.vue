<template>
  <div id="app">
    <appHeader/>
    <appMain/>
  </div>
</template>

<script>

import appHeader from './components/organisms/o-appHeader.vue'
import appMain from './components/organisms/o-appMain.vue'

export default {
  name: 'App',
  components: {
    appHeader,
    appMain,
  }
}
</script>

<style lang="scss">

#app{
  background-color: lightcyan ;
}


</style>
