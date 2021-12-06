<template>

  <b-container>
      <b-row>
        <b-col class="col-8" >
            <b-img  block fluid-grow  src="https://picsum.photos/600/400/?image=82" alt="">
            </b-img>
        </b-col >
        <b-col class="register col-4" >
          <b-form @submit.prevent="onSubmit" >
                <b-form-group label="First Name">
                <b-form-input v-model="user.firstname" type="text" ></b-form-input>
                </b-form-group>
                <b-form-group label="Last Name">
                <b-form-input v-model="user.lastname" type="text" ></b-form-input>
                </b-form-group>
              
                <b-form-group label="Phone Number">
                <b-form-input v-model="user.telephone" type="text" ></b-form-input>
                </b-form-group>
                <b-form-group label="Email">
                <b-form-input v-model="user.email" type="text" ></b-form-input>
                </b-form-group>
                <b-form-group label="PassWord">
                <b-form-input v-model="user.password" type="password" ></b-form-input>
                </b-form-group>
                 <b-form-group >
            <b-button  @click="onSubmit" variant="success"  >Register</b-button>
              </b-form-group>
            
          </b-form>

      
        </b-col>
      </b-row>
 </b-container>

</template>

<script>
import axios from 'axios'
export default {
    data() {
      return {
        user: [
          {firstname:''},
          { lastname:''},
          {email:''},
          {telephone:''},
          {password:''}
        ],
        errors:[],
      }
    },
    methods: {
    async onSubmit() {
      this.errors=[]
              if(!this.user.firstname){
                this.errors.push('First Name Required');
              }
              if(!this.user.lastname){
                this.errors.push('Last Name Required');
              }
              if(!this.user.email){
                this.errors.push('Email Required');
              }
              if(!this.user.telephone){
                this.errors.push('Telephone Required');
              }
              if(!this.user.password){
                this.errors.push('Password Required');
              }
                
                const userdata={
                  firstname:this.user.firstname,
                  lastname:this.user.lastname,
                  email:this.user.email,
                  telephone:this.user.telephone,
                  password:this.user.password
                }
                
                ///register link
             await   axios.post('/register',userdata)
                      .then(function (response) {
                        alert (response.data);
                      })
                      .catch(function (error) {
                        alert(error);
                      });
                
      }
    },
}
</script>

<style  scoped>
  .register {
    background-color:#8F0631;
    color: white;
    border-radius: 15px;

}
</style>

