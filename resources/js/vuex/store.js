import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

 const store = new Vuex.Store({

     /////////////////////////////////////////////////////////   STATES
    state:{
        login:'',

    },

     /////////////////////////////////////////////////////////   MUTATIONS
   mutations: {
       updatelogin(state, userx) {
           state.login = userx;
       }
   },

    /////////////////////////////////////////////////////////   ACTIONS
    actions: {
        login(state, credentials) {
            axios.post('auth/loginuser',credentials)
            .then(function (response) {
             let userx = response.data
             state.commit('updatelogin', userx);
            })
            .catch(function (error) {
              alert(error);
            });

           
        }
    },

    /////////////////////////////////////////////////////////   GETTERS
    getters: {
        getuser: state => {
            return state.login;
        }
    }
})

export default store