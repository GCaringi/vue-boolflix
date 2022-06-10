<template>
  <div>
    {{elem.title}}
    {{elem.original_title}}
    {{elem.original_language}}
    <lang-flag :iso = elem.original_language squared = " true "/>
    {{elem.vote_average}}
  </div>
</template>

<script>

import LangFlag from 'vue-lang-code-flags';

export default {
    name: "cardItem",
    props: {
        elem: {
            type: Array,
        }
    },
    components: {
        LangFlag,
    }
}
</script>

<style lang = "css">
    .cs{
        font-size: 20px
    }
</style>