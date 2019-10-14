<template>
    <transition
        enter-active-class="animated rotateIn"
        leave-active-class="animated bounceOutRight"
    >
        <div 
            class="back-top-box" 
            v-if="isShow"
            v-backtop
        >
            <div class="back-top">
                <i class="fa fa-arrow-up"></i>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data(){
        return {
            isShow:false
        }
    },
    methods:{
        // backTop(){
        //     window.scrollTo(0,0)
        // },
        scrollHandler(){
            let sTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(sTop>=200 && !this.isShow){
                this.isShow = true;
            }else if(sTop<200 && this.isShow){
                this.isShow = false;
            }
        }
    },
    activated(){
        window.addEventListener("scroll",this.scrollHandler)
    },
    deactivated(){
        window.removeEventListener("scroll",this.scrollHandler)
    }
}
</script>

<style lang="scss">
    .back-top-box{
        position: fixed;
        right:20px;
        bottom:80px;
        width:.4rem;
        height:.4rem;
        background: rgba(0,0,0,0.5);
        color:#fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        i{
            font-size:20px;
        }
    }
</style>
