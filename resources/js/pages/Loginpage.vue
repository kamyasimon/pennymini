<template>
    <b-row class="d-flex justify-content-center align-items-center" >
      <b-col class="col-6" >
        <b-card>
        <b-card-header header-bg-variant="success">
          {{loggedin.firstname}}
            <p>Login</p>
        </b-card-header>
              <b-card-body>
                
                  <b-form>
                        <b-form-group >
                        <b-form-input v-model="login.companyid" type="text" placeholder="Business ID"></b-form-input>
                        </b-form-group>
                        <b-form-group>
                        <b-form-input v-model="login.userid" type="text" placeholder="Worker ID"></b-form-input>
                        </b-form-group>
                        <b-form-group>
                        <b-form-input v-model="login.email" type="email" placeholder="Email"></b-form-input>
                        </b-form-group>
                        <b-form-group>
                        <b-form-input v-model="login.password" type="password" placeholder="PassWord"></b-form-input>
                        </b-form-group>
                        <b-form-group>
                        <b-button class="btn-sm" @click="loginuser" variant="success">Login</b-button>
                        </b-form-group>
                  </b-form>
                  </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
export default {
data() {
  return {
    login:[
      {companyid:''},
      {userid:''},
      {email:''},
      {password:''},
    ],
  }
},
methods: {
  loginuser(){
        const credentials={
          company:this.login.companyid,
          user:this.login.userid,
          email:this.login.email,
          password:this.login.password
        }
          console.log('tag', credentials)
          /*
        axios.post('/loginuser',credentials)
                      .then(function (response) {
                        alert (response.data);
                      })
                      .catch(function (error) {
                        alert(error);
                      });*/

      ///disptach to login
       this.$store.dispatch('login', credentials)
                    
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

</style>