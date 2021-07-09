<template>
<div>
		
<div class="col-lg-7 offset-lg-3 mx-auto">
    <div class="row mx-auto">
        <div class="col-lg-8 mx-auto">
			<div class="card my-3 bg-primary mx-auto">
                <div class="card-header">
					<h1 class="text-gray-dark"> Post </h1>
                </div>
                <div>
                    <p class="text-white font-weight-bold"> {{ pseudo }}</p>
                </div>
            <div class="card-body py-2">
                <div class="d-flex">
                    <div class="col">
                        <form v-on:submit.prevent="createPost" enctype="multipart/form-data">
                            <div class="form-group mb-2">
                                <label class="sr-only" for="content" aria-label="boutton créer un post">Créer un post</label>
                                <b-form-textarea name="content" type="text" v-model="content" class="form-control border-0" id="content" rows="3" placeholder="Quoi de neuf aujourd'hui ?" required></b-form-textarea>
                            </div>
                            <div class="form-group">
                            <label for="image">
                              <input class="btn fluid btn-fposts btn-md  text-dark font-weight-bold" type="file" name="image" id="image" ref="image" v-on:change="handleFileUpload()"/>
                            </label>
        
  <div class="col">
                        <button class="btn fluid btn-fposts btn-md  bg-purpple text-dark font-weight-bold" aria-label="boutton envoyer">Envoyer</button>
                    </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
		</div>
	</div>
</div>
</div>
</template>

<script>
import {required, maxLength,} from "vuelidate/lib/validators"; 
import axios from "axios";
export default {
name: "sendPost",
  data() {
    return {
    userId: parseInt(localStorage.getItem('userId')),
    content: "",
    image: "",
    postId:"",
    pseudo: localStorage.getItem("pseudo")
    }
  },
 
validations: {
    content: {
        required,
        maxLength: maxLength(255)
    }
},
methods:{
    handleFileUpload(){
        this.image = this.$refs.image.files[0];
},  
createPost() {
    
    const formData = new FormData();
        if (this.image !== null) {
        formData.append("image", this.image);
        formData.append("content", this.content);
        formData.append("userId",parseInt(localStorage.getItem('userId')));
        
    } else {
    formData.append("content", this.content);
    formData.append("userId",parseInt(localStorage.getItem('userId')));
    }    
axios.post('http://localhost:3000/api/auth/post', formData,
{
headers: {
"Content-Type": "multipart/form-data",
'authorization': 'bearer ' + localStorage.getItem('token')
}
})
.then((res) => {
    console.log(formData);
    this.$router.push('/allpost');
    console.log(res);
    alert("Bravo! Votre post est bien crée");
})
.catch(error => {
        console.log(error + "Impossible d'éditer le post, une erreur est survenue");
        console.log(formData);
});
},
}
}
</script>
<style scoped>
.btn {
    border-top-left-radius: 2.25rem;
    border-bottom-right-radius: 2.25rem;
    background-color: #aa559a;
}
.input {
    border-top-left-radius: 1.25rem;
    border-bottom-right-radius: 1.25rem;
    background-color: purple;
}
.card {
    border-top-left-radius: 3.25rem;
    border-bottom-right-radius: 3.25rem;          
}
</style>
<!--<template>
<div>
		
<div class="col-lg-7 offset-lg-3 mx-auto">
    <div class="row mx-auto">
        <div class="col-lg-8 mx-auto">
			<div class="card my-3 bg-primary mx-auto">
                <div class="card-header">
					<p class="text-white"> {{ post.pseudo }}</p>
                </div>
            <div class="card-body py-2">
                <div class="d-flex">
                    <div class="col">
                        <form @submit.prevent="create">
                            <div class="form-group mb-0">
                                <label class="sr-only" for="post">Créer un post</label>
                                <textarea name="post" type="text" v-model="content" class="form-control border-0" id="content" rows="2" placeholder="Quoi de neuf aujourd'hui ?" required></textarea>
                            </div>
                        </form>
                            <div class="col">
                        <button type="submit" @click.prevent="create" class="btn btn-fposts btn-block btn-sm bg-danger text-dark font-weight-bold"><i class="fa fa-pencil" aria-hidden="true"></i>Envoyer</button>
                    </div>
                    </div>
                </div>
            </div>
            <div class="card-footer p-2">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="col">
                        <button type="button" class="btn btn-fposts btn-block btn-sm bg-danger text-dark font-weight-bold" ><i class="fa fa-picture-o" aria-hidden="true"></i>Ajouter un media</button>
                    </div>
					
                </div>
                
            </div>
        </div>
		</div>
	</div>
</div>
</div>
</template>

<script>
import {required, maxLength,} from "vuelidate/lib/validators"; 
import axios from "axios";
export default {
name: "create",
  data() {
    return {
      post: {
      pseudo: localStorage.getItem("pseudo"),
      content: "",
        },
       
     submitStatus: null,
    };
  },
 
validations: {
    content: {
        required,
        maxLength: maxLength(255)
    }
},
methods:{
create() {
    
    const data = {
        // declare content with an empty value
        //content: this.content,
        content: "",
        //pseudo: localStorage.getItem("pseudo"),
        userId: parseInt(localStorage.getItem("userId"))
        
    };
//const token = sessionStorage.getItem('token'); //Add this line
axios.post('http://localhost:3000/api/auth/post', data, {
    headers:   { 
        Authorization: "Bearer " + localStorage.getItem("token")
        //Authorization: `Bearer ${token}` //Add this line
    }
    
        })
.then(response => {
    this.post.id = response.data.id;
    alert("Bravo! Votre post est bien crée");
    this.submitStatus = true;
    this.$router.push('allpost');
})

.catch(e => {
        console.log(e);
});
}
}
}
</script>-->


