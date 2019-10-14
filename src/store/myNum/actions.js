import {RANDOM_NUM} from "./const"
export default {
    getNumFromBackend(ctx){
        setTimeout(() => {
            let randomNum = Math.floor(Math.random()*100)
            //提交具体的mutations里面的方法，实现更改vuex里面的状态
            ctx.commit(RANDOM_NUM,randomNum)
        }, 1000);
    }
}