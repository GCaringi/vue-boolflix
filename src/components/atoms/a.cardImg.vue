<template>
  <img :src = url  alt=""
        class = "h-[28rem] w-full"
    >
</template>

<script>
export default {
    name: "CardImg",
    props: {
        url: {
            type: String,
            required: false,
            default: require("@/assets/img/404-img-not-found.png"),
        }
    }
}
</script>

<style lang = "scss" scoped>

</style>