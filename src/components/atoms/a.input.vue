<template>
    <input type="text" name="searchFiled"
    class = "" 
    :value= "textSearch"
    @input= "$emit('input', $event.target.value)"
    >
</template>

<script>
export default {
    name: "inputField",
    model:{
        prop: "textSearch",
        event: 'input' 
    },
    props: {
      textSearch: String
    }
}
</script>

<style>

</style>