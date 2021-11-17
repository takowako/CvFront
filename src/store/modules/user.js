import axios from "axios"; 
import VueCookie from 'vue-cookies';
// import CryptoJS from 'crypto-js'



const state = {
    User:{},
    Token:{}
}

const getters = {
    User:state=>state.User,
    Token:state=>state.Token
}

const actions = {

    //Login
    Login({commit},user){

        var url = process.env.VUE_APP_BASEURL+'/User/login';
        axios.post(url,user,{headers:{}}).then(function(resp){

            var result = resp.data;

            if(resp.data.success){
                console.log(result)
                commit('User',result.data.user)
                commit('Token',result.data.token)
                VueCookie.set('user',result.data.user._id)
                VueCookie.set('token',result.data.token)
            }

        })
    },

    LoginByCookie({commit}){
       
        var User=VueCookie.get('user')
        var Token=VueCookie.get('token')

        if(User && Token){

         commit('User',User)
         commit('Token',Token)
        }
       
    }



}

const mutations = {
    User:(state,User)=>(state.User = User),
    Token:(state,Token)=>(state.Token = Token)
}



export default {
    state,
    getters,
    actions,
    mutations
  }