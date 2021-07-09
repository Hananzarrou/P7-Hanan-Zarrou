<template>
    <div class="Navbar">
<b-navbar toggleable="lg" type="dark" variant="primary">
    <a href="/"><img class="img-fluid logo" src="../assets/icon-left-font-monochrome-black.svg" aria-label="logo groupomania" alt="Logo groupomania">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle></a>

    <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav class="ml-auto">
        <b-nav-item size="sm" class="mr-sm-2 font-weight-bold"><router-link to="/allpost" class="nav-link" aria-label="rejoindre la page tous les posts">Tous les posts</router-link></b-nav-item>
        <b-nav-item size="sm" class="mr-sm-2 font-weight-bold"><router-link to="/post/create" class="nav-link" aria-label="rejoindre la page ajouter un post">Ajouter un post</router-link></b-nav-item>
        <b-nav-item size="sm" class="mr-sm-2 font-weight-bold"  @click="logout" aria-label="se deconnecter" >Se déconnecter</b-nav-item>
        
    </b-navbar-nav>

    </b-collapse>
</b-navbar>
</div>
</template>

<script>
export default {
    name: 'NavbarPost',
    methods: {
    logout () {
    localStorage.removeItem('token')
    localStorage.removeItem('pseudo')
    localStorage.removeItem('userId')
    this.$router.push('/signup')
    }
}
}
</script>

<style scoped>
.navbar{
    width: 100%;
}
.navbar-dark .navbar-nav .nav-link {
    color: rgb(41, 40, 40);
}
/*.btn {
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
    background-color: peru;
}*/
.logo {
max-width: 200px;
max-height: 100px;
}
</style>