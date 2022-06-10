<template>
  <div>
    <img :src= getUrl() alt="I  ">
    {{elem.title || elem.name}}
    {{elem.original_title || elem.original_name}}
    {{elem.original_language}}
    <lang-flag :iso = "elem.original_language" :squared = "false"/>
    {{elem.vote_average}}
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
    methods: {
        getUrl(){
            return `https://image.tmdb.org/t/p/w342` + `${this.elem.poster_path}`;
        }
    },
    components: {
        LangFlag,
    }
}
</script>

<style lang = "scss">

</style>