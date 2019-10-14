<template>
    <div 
        class="moviebox"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
    >
        <MovieItem
            v-for="movie in movies"
            :key="movie.id"
            :movie="movie"
        ></MovieItem>
    </div>
</template>

<script>
import MovieItem from "./MovieItem"
import { Toast } from 'mint-ui';
export default {
    props:["type"],
    watch:{
        type(val){
            this.movies = [];//每次类型切换的时候，数组清空
            this.page = 1;//每次类型切换的时候，页码从第一页开始
            this.hasMore = true;//有更多数据
            this.getMovies()
        }
    },
    data(){
        return {
            movies:[],
            limit:6,
            page:1,
            loading:false,  //默认开启无限滚动
            hasMore:true    //默认有更多数据
        }
    },
    methods:{
        loadMore(){
            if(!this.hasMore){ //没有更多数据
                Toast({
                    message:"我是有底线的...",
                    position:"bottom"
                })
                this.loading = true;//关闭无限滚动  loadMore方法就不会进来了
                return false;
            }
            this.getMovies()
        },
        getMovies(){
            let instance = Toast({
                message:"正在加载中...",
                duration:-1,
                iconClass: 'fa fa-cog fa-spin'
            });
            let {limit,page} = this; //let page = this.page;
            this.loading = true;//关闭无限滚动
            this.$http.get("/api/db/"+this.type,{
                params:{
                    limit,
                    page
                }
            }).then(res=>{
                this.movies = this.movies.concat(res.data.object_list)   
                this.loading = false;//开启无限滚动
                instance.close();//关闭loading弹出框
                if(this.limit*this.page >= res.data.total){
                    this.hasMore = false //代表没有更多数据了
                    return false;
                }
                this.page++
            })
        }
    },
    components:{
        MovieItem
    },
    activated(){
        this.loading = false;//继续开启无限滚动
    },
    deactivated(){
        this.loading = true;//关闭无限滚动
    }
}
</script>

<style lang="scss">

</style>
