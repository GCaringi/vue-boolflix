<template>
  <div>
    <h2>Titolo Originale</h2>
    <span>{{originalTitle}}</span>
  </div>
</template>

<script>
export default {
    name: "cardOriginalTitle",
    props: {
        originalTitle: {
            type: String,
            required: true,
        }
    }
}
</script>

<style>

</style>