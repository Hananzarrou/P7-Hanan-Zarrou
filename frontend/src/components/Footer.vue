<template>
    <footer class="footer row pb-3 m-0 p-lg-2">
        <ul class="col-12 d-flex flex-column justify-items-center align-items-center flex-md-row justify-content-md-between">
            
            <li class="col-10 col-md-2  mt-3 text-center list-unstyled">
                <a class="font-weight-bold text-dark" href="/myprofile">Mon compte</a>
            </li>
             <li class="col-10 col-md-2 text-center list-unstyled">
                <a class="text-dark" href="https://openclassrooms.com/fr/dashboard/paths#path-185">Contact</a>
            </li> 
            <li class="col-10 col-md-3 text-center list-unstyled">
                <router-link class="text-dark" to="/Reglement">Réglement du post</router-link>
            </li>
            <li class="col-10 col-md-3 text-center list-unstyled">
                <router-link class="text-dark" to="/Unsubscribe">Désinscription</router-link>
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