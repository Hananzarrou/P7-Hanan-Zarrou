<template>
    <div class="row mx-auto my-5">
        <div class="col-lg-8 mx-auto bg-primary ">
            <div>
                <img class="rounded-circle" width="50" src="https://picsum.photos/80/80/?random?image=4">
            </div>
            <div class="text-dark-gray font-weight-bold">
                {{ pseudo + " " + "a écrit"}}
            </div>
			<div class="card my-3 mx-auto">
                {{ content }} 
                <div>
            <img id="imgpost" :src="imageUrl">
            </div>
            </div>
        <slot name="Comments"></slot>
        <slot name="EditCom"></slot>
         
  </div>      
</div>
</template>

<script>
export default {
name: "Post",

    props: {
        pseudo: {
            type: String,
            default: ""
        },

        
        content: {
            type: String,
            default: ""
        },
        postId: {
            type: String
        },
        imageUrl: {
            type: String
        },
        commentContent: {
            type: String
        }
    },
  
}
</script>

<style scoped>
#imgpost {
 max-width: 200px;
 max-height: 200px;
}
.card {
    border-top-left-radius: 3.25rem;
    border-bottom-right-radius: 3.25rem;          
}
</style>