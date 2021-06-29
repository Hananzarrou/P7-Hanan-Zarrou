<template>
<div>
<div class="col-lg-7 offset-lg-3 mx-auto">
    <h2>Tous les posts</h2>
    <div class="row mx-auto"  v-for="post in posts" :key="post.index">
        <div v-if="post" class="col-lg-8 mx-auto jumbotron">
          
          <div class="card my-3 bg-primary mx-auto">
                    
                <ul>
                    <!--<li> {{ userId.pseudo }} </li>
                    <li> {{ post.content }} </li>-->
                    
                    <li> {{ post.userId }} </li>
                    <li> {{ post.content }} </li>
                </ul>
          </div>
		    </div>
</div>
</div>
</div>
</template>
<script>
import axios from "axios";
export default {
  //name: "posts",
  name: "post",
  data() {
    return {
      //token: localStorage.getItem("token"),
      posts: [],
      pseudo: localStorage.getItem("pseudo"),
      content:"",
      
    };
  },
methods: {
    getAllPost() {
        
        axios.get('http://localhost:3000/api/auth/post', {
        headers:   { 
            Authorization: "Bearer" + localStorage.getItem("token")
        }})
      
        
        .then(data => this.posts = data)
    }
},
created(){
  this.getAllPost()
}
}
</script>