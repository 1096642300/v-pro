<template>
    <div class="list">
        <mt-cell
            :title="good.CommodityName"  
            :label="good.OriginalPrice"
            v-for="good in goods"
            :key="good.CommodityId"
        >
            <mt-button @click="addGoodInCars(good)" type="danger" size="small">购物</mt-button>
            <img slot="icon" :src="good.SmallPic" width="50" height="50">
        </mt-cell>
    </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
    data(){
        return {
            goods:[]
        }
    },
    methods:{
        getGoods(){
            this.$http.get("/v-douban/api/fruit.json").then(res=>{
                console.log(res.data.CommodityList)
                this.goods = res.data.CommodityList
            })
        },
        ...mapActions(["addGoodInCars"]) 
    },
    created(){
        this.getGoods()
    }
}
</script>

<style lang="scss">
    .mint-cell-title{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        img{
            float:left;
        }
    }
</style>
