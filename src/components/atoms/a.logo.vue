<template>
    <img src="../../assets/img/logo.png" alt="Logo image"
        class="max-w-[var(--logo-size)] p-3 cursor-pointer"
        @click="refreshPage()"
    >
</template>

<script>
export default {
    name: "logoApp",
    methods: {
        refreshPage(){
            window.location.reload();
        }
    }
}
</script>

<style>

</style>