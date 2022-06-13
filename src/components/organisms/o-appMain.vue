<template>
  <main class = "">
    <ul class = "flex">
        <li
        v-for = "(element, index) in sharedData.objList"
        :key = "index"
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
    }
}
</script>

<style>

</style>