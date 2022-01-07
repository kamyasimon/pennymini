<template>
  <b-container fluid>
      <p>Dash Board</p>
      <b-row>
          <Investiments/>
      </b-row>
     <b-row class="mt-5">
<Investimenttable/>
     </b-row>
     
  </b-container>
</template>

<script>
import Investiments from '../components/Investimentplan.vue'
import Investimenttable from '../components/Investimentdraft.vue'
export default {
    components: {
        Investiments,
        Investimenttable
    },
    data() {
        return {
          
        }
    },

    
}
</script>


<style>

</style>