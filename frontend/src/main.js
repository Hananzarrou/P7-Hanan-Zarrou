import Vue from "vue";
import Vuelidate from "vuelidate";
import axios from "axios";
import App from "./App.vue";

// importe differente librairie

axios.defaults.headers.common["Authorization"] =
  "Bearer" + " " + localStorage.getItem("acces_token");

//import Acceuil from "./views/Acceuil.vue";
//import Login from "./views/Login.vue";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "./assets/custom.scss";
import "./assets/style.css";
import router from "./router";

//Vue.use(Vuelidate);
//Vue.use(axios);

// rassemble les module ensemble
[
  [router],
  [Vuelidate],
  [axios],

].forEach((args) => Vue.use(...args));

// Install BootstrapVue
Vue.use(BootstrapVue);
// install plugin icon 
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");