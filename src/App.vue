<template>
  <div id="app">
      <label for="search"></label>
      <input v-model = "searchText" type="text" name="search" id="" @keyup.enter="getApiCall()">
      <button>Summit</button>
    <div
    v-for = "(elem, index) in apiReturns"
    :key = "index"
    >
    {{elem.title}}
    {{elem.release_date}}
    <br>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      searchText: "",
      apiReturns: [],
    }
  },
  methods: {
    getApiCall(){
      axios.get("https://api.themoviedb.org/3/search/movie", {
          params : {
            api_key : 'de769e980146beba17b59014687eb2a7',
            query: this.searchText,
            language: "it-IT",
          }
      })
      .then((response) => {
        console.log(response.data)
        this.apiReturns = response.data.results;
      })
      .catch((error) => {
        console.log(error)
      })
      this.searchText = "";
    }
  },
  components: {
    
  }
}
</script>

<style lang="scss">

</style>
