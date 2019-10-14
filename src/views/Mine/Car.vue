<template>
    <div class="list">
        <div v-if="cars.length===0">
            没有商品了
            <router-link to="/mine/list">购买！</router-link>
        </div>
        <div v-else>
            <mt-cell
                :title="good.CommodityName"  
                :label="'￥'+good.OriginalPrice+'*'+good.num"
                v-for="good in cars"
                :key="good.CommodityId"
            >
                <mt-button @click="addGoodInCars(good)" type="danger" size="small">+</mt-button>
                <mt-button @click='reduceGoodInCars(good)' type="danger" size="small">-</mt-button>
                <img slot="icon" :src="good.SmallPic" width="50" height="50">
            </mt-cell>

            <div>
                <p>总价格：{{computeTotal.price}}</p>
                <p>总数量：{{computeTotal.num}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions,mapState,mapGetters} from "vuex"
export default {
    computed:{
        ...mapState({
            cars:state=>state.myCar.cars
        }),
        ...mapGetters(["computeTotal"])
    },
    methods:{
        ...mapActions(["addGoodInCars","reduceGoodInCars"])
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
    .mint-button--small{
        margin:0 5px;
    }
</style>
