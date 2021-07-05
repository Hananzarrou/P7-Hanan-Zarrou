<template>
   <div class="accueil-forum justify-content-between">  
       <h1 class="text-center text-white mb-4">Forums</h1>
       <ul class="nav  nav-fill">
        <li class="nav-item bg-primary mb-4">
          <router-link class="nav-link text-white font-weight-bold" to="/form-texte">POST TEXTE</router-link>
          <p>Ici vous partagez un petit message avec vos collègues!</p>
        </li>
        <li class="nav-item bg-primary mb-4">
        <router-link class="nav-link text-white font-weight-bold" to="/forum-multimedia">POST MULTIMEDIA</router-link> 
        <p>Ici vous partagez un multimédia avec vos collègues</p>
        </li>
      </ul>  
    </div>
</template>

<script>
export default {
    name: 'forum',
}
</script>

<style scoped>
.accueil-forum li{
    border-radius: 2px 3px rgb(90, 81, 89);
}
</style>>