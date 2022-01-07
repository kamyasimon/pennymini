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
       token:localStorage.getItem('token')||'',
        haslogin:false,
       // token:JSON.parse(localStorage.getItem('token')) || '',

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
                              
                                  //  if(userx !== null){
                                        state.commit('updatelogin', userx);
                                          router.push("dashboard")
                                  //  }
                              
                            
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
                                let userr = response.data
                                //console.log('tag', response.data)
                                
                                    if(userr !== null){
                                       // state.commit('updatelogin', userx);
                                       router.go("dashboard")
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

                      ///  localStorage.removeItem('user')
                     //   localStorage.removeItem('token')

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

                     }
                     

                     
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
    }
})

export default store