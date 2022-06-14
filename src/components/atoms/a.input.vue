<template>
    <input type="text" name="searchFiled" placeholder="Cerca film o serie..."
    class = "rounded-md pl-1" 
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