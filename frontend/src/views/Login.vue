<template>
  <div class="login">
   
  <Navbar />
  <Log />
  <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Log from '@/components/Log.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Login', 
  components: {
  Navbar, Log, Footer    
}
}
</script>
<!--<template>
  <div id="app">
    <Seconnecter />
     <Footer />
  </div>
</template>
<script>

import Seconnecter from "../components/Seconnecter.vue";
import Footer from '../components/Footer.vue'

export default {
  name: "login",
  components: {
    Seconnecter,
    Footer
  },

};
</script>
<style lang="scss"></style>-->