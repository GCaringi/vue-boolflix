<template>
  <header>
    <appLogo/>
    <searchBar/>
  </header>
</template>

<script>

import appLogo from '../atoms/a.logo.vue'
import searchBar from '../molecules/m-searchBar.vue'

export default {
    name: "appHeader",
    components: {
        appLogo,
        searchBar,
    }
}
</script>

<style>

</style>