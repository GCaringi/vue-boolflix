<template>
    <div class="flex  max-w-full">
        <form @submit.prevent="getApiCall()" class="flex items-center gap-x-2 pr-3">
            <selectField/>
            <inputField
            v-model="searchText"
            @keyup.enter="getApiCall()"
            />
            <submitBtn/>
        </form>
    </div>
</template>

<script>

import axios from 'axios'
import sharedData from '../../shared/sharedData'

import selectField from '../atoms/a.select.vue'
import inputField from '../atoms/a.input.vue'
import submitBtn from '../atoms/a.button.vue'

export default {
    name: "searchBar",
    components: {
        selectField,
        inputField,
        submitBtn,
    },
    data(){
        return {
            searchText: "",
            sharedData,
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
        console.log(response.data.results)
        this.sharedData.objList = response.data.results;
      })
      .catch((error) => {
        console.log(error)
      })

      axios.get("https://api.themoviedb.org/3/search/tv", {
          params: {
            api_key : 'de769e980146beba17b59014687eb2a7',
            query: this.searchText,
            language: "it-IT",
          }
      })
      .then((response) => {
        console.log(response.data.results)
        this.sharedData.objList.push(...response.data.results);
      })
      .catch((error) => {
        console.log(error)
      })
      this.searchText = "";
    }
  },
}
</script>

<style>

</style>