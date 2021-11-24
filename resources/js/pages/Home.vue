<template>
   <div class="container-fluid">
       <div class="row">
           <nav class="nav nav-fill">
               <li class="nav-item">
                   <a class="nav-link active" href="#">Home</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Item 2</a>
               </li>
           </nav>
       </div>
   </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
