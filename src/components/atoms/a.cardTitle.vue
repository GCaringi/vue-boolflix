<template>
  <div>
    <h2>Titolo Originale:</h2><span>{{title}}</span>
  </div>
</template>

<script>
export default {
    name: "cardTitle",
    props: {
        title: {
            type: String,
            required: true,
        }
    }

}
</script>

<style>

</style>