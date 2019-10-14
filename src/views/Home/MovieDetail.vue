<template>
    <div>
        <div v-if="!movie" class="loading"></div>
        <div v-else class="movie-detail">
            <mt-header fixed :title="movie.title">
                <router-link to="/" slot="left">
                    <mt-button icon="back">back</mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
            <div class="img-box">
                <img height='200px' width="100%" :src="getImages(movie.images.small)" alt="">
            </div>
            <p>{{movie.title}}</p>
            <p>演员：</p>
            <div>
                <div
                    v-for="cast in movie.casts"
                    :key="cast.id"
                >
                    <img width='85' height='85' :src="getImages(cast.avatars.small)" alt="">
                    <p>{{cast.name}}</p>
                </div>
            </div>
            <div>{{movie.summary}}</div>
        </div>
    </div>
</template>

<script>
import {getImages} from "@/modules/utils"
export default {
    data(){
        return {
            movie:null
        }
    },
    methods:{
        getImages
    },
    created(){
        //获取传递来的id
        let movieId = this.$route.params.id
        this.$http.get("/api/db/movie_detail/"+movieId).then(res=>{
            this.movie = res.data;
        })
    }
}
</script>

<style>
    .mint-header{
        background-color: #9badba;
    }
</style>
