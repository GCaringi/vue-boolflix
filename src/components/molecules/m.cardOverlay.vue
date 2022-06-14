<template>
  <div class = "m-overlay absolute bottom-0 left-0 bg-red-900 z-10 w-full h-1/2 overflow-auto text-black">
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

import cardTitle from '../atoms/a.cardTitle.vue'
import cardOriginalTitle from '../atoms/a-cardOriginalTitle.vue'
import cardFlag from '../atoms/a-cardFlag.vue'
import averageStars from '../atoms/a-averageStar.vue'

export default {
    name: "cardOverlay",
    components: {
        cardTitle,
        cardOriginalTitle,
        cardFlag,
        averageStars,
    },
    props: {
      elem: {
        type: Object
      }
    },
    data(){
      return {
        average: this.elem.vote_average / 2,
      }
    }
}
</script>

<style lang = "scss" >

.m-overlay{
  background: rgba(255, 255, 255, 0.42);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.7px);

  transform: translateY(100%);
  transition: transform 500ms ease;
}

</style>