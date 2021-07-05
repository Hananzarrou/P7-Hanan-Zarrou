<template>
    <footer class="footer row pb-3 m-0 p-lg-5">
        <ul class="col-12 d-flex flex-column justify-items-center align-items-center flex-md-row justify-content-md-between">
            <li class="col-10 col-md-4 text-center list-unstyled">
                <router-link class="text-white" to="/Confidential">Politique de confidentialité</router-link>
            </li>
            <li class="col-10 col-md-3 text-center list-unstyled">
                <router-link class="text-white" to="/Reglement">Réglement du post</router-link>
            </li>
            <li class="col-10 col-md-3 text-center list-unstyled">
                <router-link class="text-white" to="/Unsubscribe">Désinscription</router-link>
            </li>
            <li class="col-10 col-md-2 text-center list-unstyled">
                <a class="text-white" href="mailto:groupomania@reseau-social.fr">Contact</a>
            </li> 
            <li class="list-inline-item"><a class="font-weight-normal text-secondary" href="/myprofile">Mon compte</a></li>

        </ul>
    </footer>
</template>
<!--<template>
    <div class="footer bg-primary font-weight-bold text-secondary">
        <footer>
            
            <ul class="list-inline">
                <li class="list-inline-item"><a class="font-weight-normal text-secondary" href="#">Mentions légales</a></li>
                <li class="list-inline-item"><a class="font-weight-normal text-secondary" href="#">Signaler un bug</a></li>
                <li class="list-inline-item"><a class="font-weight-normal text-secondary" href="/myprofile">Mon compte</a></li>
            </ul>
            <p class="copyright">Groupomania © 2021</p>
        </footer>
    </div>
</template>-->


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
    background-color: rgb(226, 143, 212);
    
 }
 .liste-inline {
   
 }
</style>