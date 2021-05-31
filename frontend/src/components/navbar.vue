<template>
<div class="login col-sm-6 mx-auto bg-white my-50">
    <h3 class="text-secondary">Me connecter</h3>

<form id="form"
    @submit.prevent="login()"
    method="post"
    novalidate="true">
<div class="form-group form-group-sm" :class="{ 'form-group--error': $v.email.$error }">
    <div class="col-sm-4 mx-auto">
        <label for="email">Email</label>
    <div class="input-group">
        <span class="input-group-addon bg-info">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-person-fill" viewBox="2 1 10 13">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        </svg></span>
        <input
            id="email"
            name="email"
            type="email"
            class="form-control form-control-sm"
            v-model.trim="$v.email.$model"
            >
        </div>
        <span class="error" v-if="!$v.email.required">Champ email manquant</span>
    </div>
    </div>
<div class="form-group form-group-sm" :class="{ 'form-group--error': $v.password.$error }">
    <div class="col-sm-4 mx-auto">
        <label for="password">Mot de passe</label>
    <div class="input-group">
        <span class="input-group-addon bg-info">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-lock2-fill" viewBox="0 0 16 16">
            <path d="M7 6a1 1 0 0 1 2 0v1H7V6z"/>
            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-2 6v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V8.3c0-.627.46-1.058 1-1.224V6a2 2 0 1 1 4 0z"/>
            </svg>
        </span>
        <input
            id="password"
            name="password"
            type="password"
            class="form-control form-control-sm"
            v-model.trim="$v.password.$model">
        </div>
        <span class="error" v-if="!$v.password.required">Champ mot de passe manquant</span> <br>
        <span class="error" v-if="!$v.password.minLength">{{$v.password.$params.minLength.min}} caractères min !.</span>
    </div>
    </div>
    
    <button class="btn btn-dark btn-sm" type="submit" @click.prevent="login">Connexion</button>
    </form>
    <p> Pas encore inscrit ? Créez votre compte dès maintenant !</p>
    <button class="btn btn-dark btn-sm" @click.prevent="goSignin" >Inscription</button>
</div>
</template>


<script>
import {required,minLength} from "vuelidate/lib/validators"; 
import axios from "axios";
export default {
name: 'login',
data() {
    return {
    email: "",
    password: "",
    submited: false,
        }
    },
validations: {
    email: {
        required,
    },
    password: {
        required,
        minLength: minLength(6)
    }
},
methods:{
  
    login() {
    axios.post( 'http://localhost:3000/api/auth/login', {
        email: this.email,
        password: this.password,
        })
    
        .then((res) => {
                localStorage.setItem("token",   res.data.token)
                localStorage.setItem("userId",  res.data.userId)
                console.log(res);
                alert("Bienvenue ! Vous êtes connecté ! ");
                this.$router.push('/myprofile');           
            })
            
        .catch(error => {
        console.log("Identifiants invalides !" + (error));
        })
    },
    goSignin(){
        this.$router.push('Signup');
    }
}
} 
</script>

<style scoped>
.signin {
    margin-top: 20px;
}
.btn {
    margin-bottom: 20px;
    font-weight: bold;
}
.error {
    color: red;
    font-weight: bold;
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