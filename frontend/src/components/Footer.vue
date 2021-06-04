<template>
    <div class="footer bg-primary font-weight-bold text-secondary">
        <footer>
            
            <ul class="list-inline">
                <li class="list-inline-item"><a class="font-weight-normal text-secondary" href="#">Mentions légales</a></li>
                <li class="list-inline-item"><a class="font-weight-normal text-secondary" href="#">Signaler un bug</a></li>
                <li class="list-inline-item"><a class="font-weight-normal text-secondary" href="/myprofile">voir mon  profil</a></li>
            </ul>
            <p class="copyright">Groupomania © 2021</p>
        </footer>
    </div>
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
    background-color: rgb(226, 143, 212);
    
 }
 .liste-inline {
   
 }
</style>