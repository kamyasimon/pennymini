<template>
   <div class="container-fluid">
       <div>
           <Nav></Nav>
       </div>
       <div>
           
            <router-view/>
       </div>

      
        
   </div>

</template>

<script>
import Nav from '../components/Navcomponent.vue'
    export default {
        components: {
            Nav
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
