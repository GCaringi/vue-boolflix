<template>
  <lang-flag :iso = language /> 
</template>

<script>

import LangFlag from 'vue-lang-code-flags'

export default {
    name: "cardFlag",
    props: {
        language: {
            type: String,
            required: true,
        }
    },
    components:{
        LangFlag,
    }
}
</script>

<style>

</style>