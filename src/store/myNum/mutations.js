import {CHANGE_NUM,RANDOM_NUM} from "./const"
export default {
    [CHANGE_NUM](state){ //mutations里面的方法规定了必须是同步的更改状态
        state.num++
    },
    [RANDOM_NUM](state,randomNum){
        state.num = randomNum
    }
}




/**
 *  var a = "abc"
 *  var json = {
 *     ["abc"]:"你好"
 *   }
 *  console.log(json.abc)
 * 
 * 
 *  var obj = {a:10,b:20}
 *  for(var key in obj){
 *     console.log(obj.key)   
 *  }
 * 
 */