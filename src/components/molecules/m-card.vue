<template>
  <div>
    <img :src= getUrl() alt="IMG">
    {{elem.title || elem.name}}
    {{elem.original_title || elem.original_name}}
    {{elem.original_language}}
    <lang-flag :iso = "elem.original_language" :squared = "false"/>
    {{elem.vote_average}}
    <i
    v-for = "(star, idx) in getFullStar"
    :key = "idx" 
    class="fa-solid fa-star"></i>
    <i
    v-for = "(star) in getHalfStar"
    :key = "star"
    class="fa-regular fa-star-half-stroke"></i>
    <i
    v-for = "(star) in getEmptyStar"
    :key = "star"
    class="fa-regular fa-star"></i>
</div>
</template>

<script>

import LangFlag from 'vue-lang-code-flags';

export default {
    name: "cardItem",
    props: {
        elem: {
            type: Object,
        }
    },
    data() {
        return {
            average: this.elem.vote_average / 2,
        }
    },
    methods: {
        getUrl(){
            if (this.elem.poster_path === null){
                return ""
            }
            return `https://image.tmdb.org/t/p/w342` + `${this.elem.poster_path}`;
        }
    },
    computed: {
        getFullStar(){
            return this.average | 0
        },
        getHalfStar(){
            return this.average - (this.average | 0) === 0.5 ? 1 : 0;
        },
        getEmptyStar(){
            return 5 - this.getFullStar - this.getHalfStar;
        }
    },
    components: {
        LangFlag,
    }
}
</script>

<style lang = "scss">

</style>