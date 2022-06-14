<template>
  <div class="relative overflow-hidden"> 
    <card-img
        :url = getUrl()
        class = "m-card shadow-red-900 shadow-md"
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

<style lang = "scss">

.m-card:hover{
    transform: scale(1.05); 
}

.m-card:hover + .m-overlay{
    transform: translateY(0);
    transition: transform 250ms ease;

}

.m-overlay:hover{
    transform: translateY(0);
}

</style>