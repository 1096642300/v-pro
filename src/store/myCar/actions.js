import {SYNC_UPDATE} from "./const"
export default {
    initCars(ctx){
        //获取购物车
        let cars = getCar()
        ctx.commit(SYNC_UPDATE,cars)
    },
    addGoodInCars(ctx,good){
        setTimeout(() => {
            //获取后台返回来的购物车
            let cars = getCar()
            let isHas = cars.some(item=>{
                if(item.CommodityId === good.CommodityId){//说明数组里面的商品与外面传来的商品是同一个
                    item.num++
                    return true
                }
            })
            if(!isHas){ //代表数组里面没有此商品
                good.num = 1
                cars.push(good)
            }
            //通知后台更改cars
            localStorage.cars = JSON.stringify(cars)
            //前端的话需要通过mutations具体的方法来去更改state里面的cars
            ctx.commit(SYNC_UPDATE,cars)
        }, 1000);
    },
    reduceGoodInCars(ctx,good){
        let cars = getCar()
        cars = cars.filter(item=>{
            if(item.CommodityId === good.CommodityId){
                item.num--
                if(item.num<=0) return false; //返回false直接将此商品从数组里面删除了！
            }
            return true
        })
        localStorage.cars = JSON.stringify(cars)
        ctx.commit(SYNC_UPDATE,cars)
    }
}


//使用本地存储作为后台进行模拟  
function getCar(){
    return JSON.parse(localStorage.cars?localStorage.cars:'[]')
}