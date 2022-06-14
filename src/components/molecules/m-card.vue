<template>
  <div>
    <card-img
        :url = getUrl()
    />
    <card-over
      :elem = "elem"
    />
    </div>
</template>

<script>

import cardImg from '../atoms/a.cardImg.vue';
import cardOver from '../molecules/m.cardOverlay.vue'

export default {
    name: "cardItem",
    props: {
        elem: {
            type: Object,
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
    },
    components: {
        cardImg,
        cardOver,
    }
}
</script>

<style>

</style>