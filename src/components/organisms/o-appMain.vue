<template>
  <main class = "bg-[color:var(--clr-primary)] min-h-screen text-white">
    <ul class = "flex list-none grid grid-cols-5">
        <li
        v-for = "(element, index) in filterItems"
        :key = "index"
        class = ""
        >
            <card
            :elem = "element"
            />
        </li>
    </ul>    
  </main>
</template>

<script>

import sharedData from '../../shared/sharedData'
import card from '../molecules/m-card.vue'

export default {
    name: "appMain",
    components: {
        card,
    },
    data(){
        return {
            sharedData,
        }
    },
    computed:{
        filterItems(){
            if (this.sharedData.filter === "all"){
                return sharedData.objList;
            }else{
                return sharedData.objList.filter((element) => {
                    return element.genre_ids.includes(Number(this.sharedData.filter))
                })
            }
        }
    }
}
</script>

<style>

</style>