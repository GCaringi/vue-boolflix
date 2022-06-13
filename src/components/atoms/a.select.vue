<template>
    <div>
        <select @change ="changeFilter($event)" name="" id="" v-model="localComponentData.filter"
        class="max-w-[var(--select-size)]"> 
            <option value="all">All</option>
            <option 
                v-for = "(genre,index) in localComponentData.genreList"
                :key = "index"
                :value = "genre.id">
                {{genre.name}}
            </option>
        </select>
    </div>
</template>

<script>

import axios from 'axios';
import sharedData from '@/shared/sharedData.js'

export default {
    name: "selectField",
    data(){
        return {
            localComponentData: sharedData,
        }
    },
    methods:{
        changeFilter(event){
            this.localComponentData.filter = event.target.value;
        }
    },
    created(){
            axios.get("https://api.themoviedb.org/3/genre/movie/list", {
                params: {
                    api_key: "de769e980146beba17b59014687eb2a7",
                    language: "it-IT"
                }
            })
            .then((response) => {
                this.localComponentData.genreList.push(...response.data.genres)
                console.log(response.data.genres);
            })
            .catch((error) => {
                console.log(error);
            })


            axios.get("https://api.themoviedb.org/3/genre/tv/list", {
                params: {
                    api_key: "de769e980146beba17b59014687eb2a7",
                    language: "it-IT"
                }
            })
            .then((response) => {
                let uniqueId = new Set(this.localComponentData.genreList.map(unique => unique.id)) 
                let mergedArray = [...this.localComponentData.genreList, ...response.data.genres.filter(element => !uniqueId.has(element.id))]
                this.localComponentData.genreList = mergedArray;
                console.log("Generi tv",...mergedArray);
            })
            .catch((error) => {
                console.log(error);
            })
    }
}
</script>

<style>

</style>