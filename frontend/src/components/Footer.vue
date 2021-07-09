<template>
    <footer class="footer row pb-3 m-0 p-lg-2">
        <ul class="col-12 d-flex flex-column justify-items-center align-items-center flex-md-row justify-content-md-between">
            
            <li class="col-10 col-md-2  mt-3 text-center list-unstyled">
                <a class="font-weight-bold text-white" href="/myprofile" aria-label="rejoindre la page mon compte">Mon compte</a>
            </li>
             <li class="col-10 col-md-2 text-center list-unstyled">
                <a class="text-white" href="https://openclassrooms.com/fr/dashboard/paths#path-185" aria-label="rejoindre la page contact">Contact</a>
            </li> 
            <li class="col-10 col-md-3 text-center list-unstyled">
                <router-link class="text-white" to="/Reglement" aria-label="rejoindre la page réglement du post">Réglement du post</router-link>
            </li>
            <li class="col-10 col-md-3 text-center list-unstyled">
                <router-link class="text-white" to="/Unsubscribe" aria-label="rejoindre la page de désinscription" >Désinscription</router-link>
            </li>
           
        </ul>
    </footer>
</template>


<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
 .Footer {
     display:flex;
    justify-content: space-around;
    margin-top: 20px;
    background-color: rgb(141, 75, 130); 
    font-weight: bold;
 }
 .col-12 {
    flex: 0 0 100%;
    max-width: 90%;
}
 
</style>