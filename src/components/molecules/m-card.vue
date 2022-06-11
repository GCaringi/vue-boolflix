<template>
  <div>
    <card-img
    :url = getUrl()
    />
    <card-title
    :title = "elem.title || elem.name"
    />
    <card-original-title
    :originalTitle = "elem.original_title || elem.original_name"
    />
    
    <lang-flag :iso = "elem.original_language" :squared = "false"/>
    {{average}}
    <!-- <i
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
    class="fa-regular fa-star"></i> -->
</div>
</template>

<script>

import LangFlag from 'vue-lang-code-flags';
import cardImg from '../atoms/a.cardImg.vue';
import cardTitle from '../atoms/a.cardTitle.vue'
import cardOriginalTitle from '../atoms/a-cardOriginalTitle.vue'

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
                return undefined;
            }
            return `https://image.tmdb.org/t/p/w342` + `${this.elem.poster_path}`;
        }
    },
    computed: {
        getFullStar(){
            return this.average | 0
        },
        getHalfStar(){
            return this.average - (this.average | 0) >= 0.5 ? 1 : 0;
        },
        getEmptyStar(){
            return 5 - this.getFullStar - this.getHalfStar;
        }
    },
    components: {
        LangFlag,
        cardImg,
        cardTitle,
        cardOriginalTitle,
    }
}
</script>

<style lang = "scss">

</style>