<template>
  <img :src = url  alt="">
</template>

<script>
export default {
    name: "CardImg",
    props: {
        url: {
            type: String,
            default: require("@/assets/img/404-img-not-found.png"),
        }
    }
}
</script>

<style lang = "scss" scoped>

</style>