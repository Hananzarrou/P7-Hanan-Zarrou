<template>
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
<style lang="scss"></style>