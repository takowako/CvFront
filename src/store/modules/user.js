import axios from "axios"; 
import VueCookie from 'vue-cookies';
import CryptoJS from 'crypto-js'
import router from '../../router/index'



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

            if(resp.data.success){
                
                //encrypt token 
                const key = process.env.VUE_APP_ENCKEY //
                const iv = process.env.VUE_APP_ENCIV // 
                const txt= resp.data.token;
                
                const cipher = CryptoJS.AES.encrypt(txt, CryptoJS.enc.Utf8.parse(key), {
                    iv: CryptoJS.enc.Utf8.parse(iv),
                    mode: CryptoJS.mode.CBC
                })

                commit('User',resp.data.user)
                commit('Token',cipher.toString())

                VueCookie.set('user',resp.data.data.user._id)
                VueCookie.set('token',cipher.toString())

                //Set Token Default
                axios.defaults.headers.common['Authorization'] = txt;

                //redirect to profile view 
                router.push({name:'profile'})




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