<template>
    <router-link 
        class="movieitem"
        tag="div"
        :to="{name:'moviedetail',params:{id:movie.id}}"
    >
        <div class="img-box">
            <img width="100%" v-lazy="getImages(movie.images.small)" alt="">
        </div>
        <div class="info">
            <div class="info-left">
                <p class="title">{{movie.title}}</p>
                <p class="count">{{movie.collect_count | filterVal}}</p>
            </div>
            <div class="info-right">
                <p class="director">{{movie.directors[0].name}}</p>
                <p class="rating">{{movie.rating.average}}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
import {getImages} from "@/modules/utils"
export default {
    props:{
        movie:Object
    },
    filters:{
        filterVal(val){
            if(val>=10000){
                val = val/10000
                val = val.toFixed(1)
                val = val+"万"
            }
            return val;
        }
    },
    methods:{
        getImages
    }
}
</script>

<style lang="scss">
    .movieitem{
        margin:0.1rem;
        .img-box{
            width:100%;
            height:2.2rem;
            img{
                height:2.2rem;
            }
        }
        .info{
            display: flex;
            justify-content: space-between;
            padding:0 .2rem;
            font-size: 14px;
        }
        .title,.director{
            font-size: 16px;
            color:orange;
            margin:0.05rem 0;
        }
        .rating{
            font-size: 16px;
            color: #966c6c;
            font-weight: bold;
        }
    }
</style>
