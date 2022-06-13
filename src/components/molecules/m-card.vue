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
    <cardFlag
        :language = "elem.original_language"
    />
    {{average}}
    <average-stars
        :value = "average"
    />

</div>
</template>

<script>

import cardImg from '../atoms/a.cardImg.vue';
import cardTitle from '../atoms/a.cardTitle.vue'
import cardOriginalTitle from '../atoms/a-cardOriginalTitle.vue'
import cardFlag from '../atoms/a-cardFlag.vue'
import averageStars from '../atoms/a-averageStar.vue'

export default {
    name: "cardItem",
    props: {
        elem: {
            type: Object,
        }
    },
    data() {
        return {
            flag: true,
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
        cardImg,
        cardTitle,
        cardOriginalTitle,
        cardFlag,
        averageStars,

    }
}
</script>

<style lang = "scss">

</style>