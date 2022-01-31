<template>
<div class="a" >
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand><router-link class="a" to="/">Home</router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item v-if="loggedin !== '' "><router-link class="a" :to="{name: 'dashboard'}">DashBoard</router-link></b-nav-item>
        <b-nav-item v-if="loggedin !== '' "><router-link class="a" :to="{name: 'accounts'}">Accounts</router-link></b-nav-item>  
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        
      <!-- Using 'button-content' if logged in -->
        <b-nav-item-dropdown right v-if="loggedin !== ''">
         
          <template #button-content>
            <em>{{loggedin.firstname}}</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item @click="logout" >Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
         <!-- Using 'button-content' if logged out -->
         <b-nav-item-dropdown right v-else>
         
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item><router-link to="/loginuser">Login</router-link> </b-dropdown-item>
          <b-dropdown-item><router-link to="/registeruser">Register</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
 
</div>

</template>
<script>
export default {
  data() {
    return{
      
    }
  },
  methods: {
    logout(){

        this.$store.dispatch('logoutuser')
    
      //console.log('Auth', 'Log out clicked')
    }
  },

computed: {
  loggedin() {
           
         return  this.$store.getters.getuser
  },
},
mounted(){
 
}
}
</script>

<style>
  .a {
    color:white;
   
  }
</style>