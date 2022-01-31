<template>
  <b-container fluid>
      <p>Dash Board</p>
      <b-row>
          <Investiments :capital ="allinvest" />
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
          allinvest:''
        }
    },
methods: {
    investiments() {
       
            this.$store.dispatch('getinvestiments');
       
    },
},


    beforeMount() {
      this.investiments()
    },
    mounted() {
      console.log("mounted")
    },
computed: {
    invest() {
        console.log(this.$store.getters.getinvestiments)
        return this.$store.getters.getinvestiments
    }
},
    
}
</script>


<style>

</style>