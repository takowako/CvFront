<template>
  <div id="app">
    
    <div class="d-flex" >
      <sidenav v-if="!this.hideOn.includes($route.name)" ></sidenav>
      <div class=" w-100">
        <navbar v-if='!this.hideOn.includes($route.name)' ></navbar>
        <router-view/>
      </div>
    </div>

    </div>
</template>


<script>
import navbar from './components/layout/navbar.vue';
import sidenav from './components/layout/sidenav.vue';
import VueCookie from 'vue-cookies';
import { mapActions } from 'vuex';

export default {
  components:{
    navbar,
    sidenav
  },
  data(){

    return {
      hideOn:['home','login']
    }
  },
  methods:{
    ...mapActions(['LoginByCookie','GetCv'])
  },
  mounted(){

    //Check Cookie
    var User=VueCookie.get('user')
    var Token=VueCookie.get('token')
    if(User && Token){
      this.LoginByCookie({Token,User});
    }



  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background:#fbfbfd ;
}

.hfull{

  min-height: 100vh;
  height: max-content;

}


</style>
