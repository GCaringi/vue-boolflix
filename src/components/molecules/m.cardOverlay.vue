<template>
  <div>
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

<style>

</style>