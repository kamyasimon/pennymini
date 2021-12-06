<template>
<div class="a" >
       <b-navbar  >
   <b-nav >
    <b-nav-item active><router-link :to="{name: 'home'}">Home</router-link> </b-nav-item>
    <b-nav-item >Link</b-nav-item>
    <b-col v-if="loggedin != '' ">
      <p>{{loggedin.firstname}}</p>
    <b-nav-item><router-link to="/loginuser">Profile</router-link>  </b-nav-item>
    <b-nav-item > <router-link to="/registeruser">Log out</router-link></b-nav-item>
    </b-col>
    <b-col v-else>
      <b-nav-item><router-link to="/loginuser">Login</router-link>  </b-nav-item>
    <b-nav-item > <router-link to="/registeruser">Register</router-link></b-nav-item>
    </b-col>
  </b-nav>
</b-navbar>

    
</div>

</template>
<script>
export default {
  data() {
    return{

    }
  },
  computed: {
  loggedin() {
    return this.$store.getters.getuser;
  }
},
}
</script>

<style>
  .a {
    color:crimson;
   
  }
</style>