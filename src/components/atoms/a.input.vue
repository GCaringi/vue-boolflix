<template>
    <input type="text" name="searchFiled" 
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