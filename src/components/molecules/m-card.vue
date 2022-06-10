<template>
  <div>
    {{elem.title}}
    {{elem.original_title}}
    {{elem.original_language}}
    {{elem.vote_average}}
  </div>
</template>

<script>
export default {
    name: "cardItem",
    props: {
        elem: {
            type: Array,
        }
    }
}
</script>

<style>

</style>