import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/router';


Vue.use(Vuex);

 const store = new Vuex.Store({

     /////////////////////////////////////////////////////////   STATES
    state:{
        login:JSON.parse(localStorage.getItem('user')) || '',
      // login:localStorage.getItem('user')||'',
      // token:localStorage.getItem('token')||'',
        haslogin:false,
        token:JSON.parse(localStorage.getItem('token')) || '',
        investiments:'tttt',

    },

     /////////////////////////////////////////////////////////   MUTATIONS
   mutations: {
       updatelogin(state,userx) {

        localStorage.setItem('user', JSON.stringify(userx[0]));
        localStorage.setItem('token', JSON.stringify(userx[1]));
      
        state.login = userx[0];
        state.token = userx[1];
       },

       updatelogout(state) {

         localStorage.removeItem('token')
        localStorage.removeItem('user')
        state.login = '';
        state.token = '';
       },

       checkinit(state){
    
         //   console.log('tag', JSON.parse(localStorage.getItem('user')));
          
       // state.login = localStorage.getItem('user');
      //  state.token = localStorage.getItem('token');
       
       },

       updateinvestiments(state,investiment){
       // console.log(investiment[0])
          //  state.investiments = investiment[0]
       }

   },

    /////////////////////////////////////////////////////////   ACTIONS
    actions: {
                /**
                 * 
                 * @param {*login state} state 
                 * @param {*login credentials} credentials 
                 * @param {*login the user function} login
                 */
                 async   login(state, credentials) {
                          
                    await  axios.post('api/loginuser',credentials)
                                .then(function (response) {
                                let userx = response.data
                                console.log('tag', response.data)
                              
                                    if(userx !== null){
                                        state.commit('updatelogin', userx);
                                          router.push("dashboard")
                                   }
                              
                            
                                })
                            
                    
                    },

                    /**
                     * @param {* register user function } register
                     * @param {* registration data } userdata
                     * 
                     */

                    async registeruser(state,userdata){
                         ///register link
                            await   axios.post('api/registeruser',userdata)
                            
                            .then(function (response) {
                                let userx= response.data
                                //console.log('tag', response.data)
                                
                                   if(userx !== null){
                                   //  state.commit('updatelogin', userx);
                                 router.push("/loginuser")
                                    }else{
                                       router.push("/")
                                    }
                                
                            })
                            .catch(function (error) {
                            alert(error);
                            });
                    },

                     /**
                     * @param {* logout user function } logoutuser
                     * 
                     * 
                     */

                     async logoutuser(state){

                      //  localStorage.removeItem('user')
                     //  localStorage.removeItem('token')

                      const storedtoken = this.getters.getusertoken
                      axios.defaults.headers['Authorization']= 'Bearer '+ storedtoken
                      console.log('Logout function:'+ storedtoken)
                        var config= {
                            method:'POST',
                            url:'api/logoutuser',

                            Headers:{
                                'content-Type':'application/Json',
                            }
                        };

                        await axios(config)
                        .then(function(response){
                            if(response.status == 200){
                                state.commit('updatelogout')

                                router.push('/')
                            }
                            console.log(response.status)
                        })

                     },
    /////////////////////GET INVESTIMENT/////////////////////
    async getinvestiments(state){

        //  localStorage.removeItem('user')
       //  localStorage.removeItem('token')

        const storedtoken = this.getters.getusertoken
        axios.defaults.headers['Authorization']= 'Bearer '+ storedtoken
        const userid={
            user:this.getters.getuser.id
        }
          var config= {
              method:'POST',
              url:'api/getinvestiments',
                data:userid,
              Headers:{
                  'content-Type':'application/Json',
              }
          };

          await axios(config)
          .then(function(response){
                let investiment = response.data
            
              if(response.status == 200){

                state.commit('updateinvestiments',investiment)

              }
              console.log(response.status)
          })

       }, 
                 

                     
    },

    /////////////////////////////////////////////////////////   GETTERS
    getters: {
        getuser(state) {
           console.log(state.login);
            return state.login;
        },
        getusertoken(state) {
            console.log('Getters:'+ state.token);
            return state.token;
        }
    },
    getinvestiments(state){
        console.log(state.investiments)
       // return state.investiments;
    }
})

export default store