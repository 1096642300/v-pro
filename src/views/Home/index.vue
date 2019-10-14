<template>
    <div class="home">
        <div class="pt60">
            <Banner></Banner>
        </div>
        <div class="navbar" :class="{fixtop:fixFlag}">
            <span 
                v-for="nav in navs"
                :key="nav.id"
                :class="{active:type===nav.type}"
                @click="type=nav.type"
            >{{nav.title}}</span>
        </div>
        <div :class="{fixbox:fixFlag}">
            <MovieBox :type="type"></MovieBox>
        </div>
        <BackTop></BackTop>
        <Tabbar></Tabbar>
    </div>
</template>
<script>
import Tabbar from "@/components/Tabbar"
import Banner from "@/components/Banner"
import MovieBox from "./MovieBox"
import BackTop from "./BackTop"
export default {
    name:"home",
    components:{
        Tabbar,Banner,MovieBox,BackTop
    },
    data(){
        return {
            type:"in_theaters",
            navs:[
                {id:1,title:"正在热映",type:"in_theaters"},
                {id:2,title:"即将上映",type:"coming_soon"},
            ],
            fixFlag:false
        }
    },
    methods:{
        scrollHandler(){
            let sTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(sTop>=290 && !this.fixFlag){
                this.fixFlag = true;
            }else if (sTop<290 && this.fixFlag){
                this.fixFlag = false;
            }
        }
    },
    // created(){ //created的  组件缓存了，没有被销毁，只会执行一次  
    //     console.log("created....")
    //     window.addEventListener("scroll",this.scrollHandler)
    // },
    // beforeDestroy(){ //组件缓存起来，使得scroll这个滚动方法永远不会删除
    //     window.removeEventListener("scroll",this.scrollHandler)
    // }
    activated(){
        window.addEventListener("scroll",this.scrollHandler)
        window.scrollTo(0,this.homeTop)
    },
    deactivated(){
        window.removeEventListener("scroll",this.scrollHandler)
        this.fixFlag = false;
    },
    //组件内的路由守卫
    beforeRouteLeave(to,from,next){
        this.homeTop =  document.body.scrollTop || document.documentElement.scrollTop
        next()
    }
}
</script>

<style lang="scss">
    .home{
        .fixbox{
            margin-top:60px;
        }
        padding-bottom: 60px;
        .navbar{
            position: relative;
            height:50px;
            background: #fff;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top:10px;
            z-index:10;
            &.fixtop{
                position: fixed;
                left:0;
                top:0;
                width:100%;
                margin-top:0;
            }
            span{
                position: relative;
                &:after{
                    content:"";
                    width:40px;
                    height:3px;
                    background: transparent;
                    position: absolute;
                    left:50%;
                    margin-left:-20px;
                    bottom:-10px;
                    transition: all 1s;
                }
            }
            .active{
                color:orange;
                &::after{
                    content:"";
                    background: orange;
                }
            }
        }
    }
</style>

