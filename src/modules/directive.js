import Vue from "vue"
//创建自定义指令  bind(el,binding,vnode) inserted update componentUpdate unbind  
Vue.directive("backtop",{
    bind(el, binding, vnode){
        let eventType = binding.arg || "click"
        el.addEventListener(eventType,e=>{
            window.scrollTo(0,0)
        })
    }
})