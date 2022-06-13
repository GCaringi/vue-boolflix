<template>
  <div v-html = generateStar>
  </div>
</template>

<script>
export default {
    name: "averageStar",
    props: {
        value: {
            type: Number,
        }
    },
    computed: {
        getHalfStar(){
            return this.value - (this.value | 0) >= 0.5 ? 1 : 0;
        },
        generateStar(){
            let stars = "";
            let halfStar = this.getHalfStar;
            for (let i = 1; i <= 5; i++){
                if (i <= this.value | 0){
                    stars += '<i class="fa-solid fa-star"></i>'
                }else if (halfStar === 1){
                    stars += '<i class="fa-regular fa-star-half-stroke"></i>'
                    halfStar = 0;
                }else{
                    stars += '<i class="fa-regular fa-star"></i>'
                }
            }
            return stars;
        }
    }

}
</script>

<style>

</style>