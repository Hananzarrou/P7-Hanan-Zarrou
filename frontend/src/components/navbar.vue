<template>
    <div class="Navbar">
<b-navbar toggleable="lg" type="dark" variant="primary">
    <a href="/"><img class="img-fluid logo" src="../assets/icon-left-font-monochrome-black.svg" aria-label="logo groupomania" alt="Logo groupomania"></a>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav class="ml-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-person-fill" viewBox="2 1 10 13">
<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
        <b-nav-item size="sm" class="mr-sm-2 font-weight-bold"><router-link to="/login" class="nav-link">Se connecter</router-link></b-nav-item>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-pencil-fill" viewBox="0 0 16 16">
<path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
        <b-nav-item size="sm" class="mr-sm-2 font-weight-bold"><router-link to="/signup" class="nav-link">S'inscrire</router-link></b-nav-item>
    </b-navbar-nav>

    </b-collapse>
</b-navbar>
</div>
</template>

<script>
export default {
    name: 'Navbar',
    user: false
}
</script>

<style scoped>
.navbar-dark .navbar-nav .nav-link {
    color: white;
}
.logo {
    max-height: 100px;
    max-width: 200px;
}
</style>

<!--<template>
  component de navigation dans l application-
  <nav class="stopPadMarg navbar navbar-expand-md navbar-light backPrimaire">
    <!-- redirige page des postes de tous les users 
    <a
      @click="acceuil"
      class="pl-1 navbar-brand text-secondary"
      href="http://localhost:8080/post"
      ><img
        class="color-secondary"
        width="200px"
        src="../assets/image/icon-left-font-monochrome-black.svg"
        alt="logo-titre"
    /></a>
    <!-- mobile button 
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- en cas d'atterisage ou de bug pour retrouver les routes par accident sur l aplication sans token navigation cache

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li v-if="!token" class="nav-item active">
          <router-link class="text-primary nav-link" to="/"
            >S'inscrire</router-link
          >
        </li>
        <li v-if="!token" class="nav-item">
          <router-link class="text-primary nav-link" to="/login"
            >Login</router-link
          >
        </li>

        <!-- bouton logout meme si son token expire tant qu il est stocker dans localstorage il pourra se deconnecter

        <li v-if="token" @click="deconnecte" class="nav-item">
          <router-link class="text-primary nav-link" to="/logout"
            >se deconnecter</router-link
          >
        </li>
        <!-- Menu poste user et collegue 

        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Menu
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li @click="supprimChoice">
              <router-link class="dropdown-item" to="/profil"
                >Trouver vos collegues</router-link
              >
            </li>
            <li v-if="userChoice == user_id" @click="myPoste">
              <router-link class="dropdown-item" :to="{ myPoste }"
                >Trouver vos postes</router-link
              >
            </li>
          </div>
        </li>
      </ul>
      <!-- Mon compte-
      <div class="d-flex justify-content-end">
        <ul class="navbar-nav mr-3">
          <li @click="acceuil" class="ml-3 nav-item">
            <router-link class="text-primary nav-link" to="/upProfil">
              <b-icon-person-circle class="pr-1"></b-icon-person-circle>Mon
              Compte</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      token: localStorage.getItem("acces_token"),
      user_id: localStorage.getItem("userId"),
      userChoice: localStorage.getItem("userChoice"),
    };
  },
  methods: {
    // methode deconnecte supprime localstorage
    deconnecte() {
      localStorage.removeItem("acces_token");
      localStorage.removeItem("userId");
      localStorage.removeItem("userChoice");
      this.$router.push("/login");
    },
    // supprime l user choisit dans local storage
    supprimChoice() {
      localStorage.removeItem("userChoice");
    },
    // ajoute l'user choisit au local storage
    acceuil() {
      localStorage.setItem("userChoice", this.user_id);
    },
    // redirige vers les postes de l utilisateur connecter
    async myPoste() {
      await localStorage.setItem("userChoice", this.user_id);
      await localStorage.getItem("userChoice");
      await this.$router.push(`/profil/${this.userChoice}`);
      /* phase de test je garde ce code en reserve
      //this.$route.params.user_id;
      //await localStorage.removeItem("userChoice");
      // await this.$router.push(`/profil/${user_id}`);
      // localStorage.removeItem("userChoice");
      //localStorage.setItem("userChoice", this.user_id);
      //const user = localStorage.getItem("userId");
      //const path = `/profil/${this.userChoice}`;
      //if (this.$route.path == path) this.$router.push(path);
      */
    },
  },
};
</script>

<style scoped>
.navbar-dark .navbar-nav .nav-link {
    color: whitesmoke;
}
.logo {
    max-height: 100px;
    max-width: 200px;
}
</style>