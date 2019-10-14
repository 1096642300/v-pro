<template>
    <div class="home-banner swiper-container" :class="{loading:banners.length===0}">
        <div class="swiper-wrapper">
            <div 
                class="swiper-slide"
                v-for="banner in banners"
                :key="banner.id"
            >
                <img width="100%" :src="getImages(banner.images.small)" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from "swiper"
import {getImages} from "@/modules/utils"
export default {
    data(){
        return {
            banners:[]
        }
    },
    methods:{
        getImages
    },
    created(){  
        this.$http.get("/api/db/in_theaters",{
            params:{
                limit:6
            }
        }).then(res=>{
            this.banners = res.data.object_list
            //在此回调函数里面就可以获取到因数据改变虚拟dom对比完成后渲染的真实dom结构了！
            this.$nextTick(()=>{
                new Swiper(".home-banner",{
                    loop:true,
                    pagination:{
                        el:".swiper-pagination"
                    }
                })
            })
        })
    }
}
</script>

<style lang="scss">
    .home-banner{
        height:2.4rem;
        width:100%;
        img{
            height:2.4rem;
            width:100%;
        }
        .swiper-pagination{
            width: auto;
            left: auto;
            right: 10px;
        }
        .swiper-pagination-bullet-active{
            background: #fff;
        }
    }
</style>
