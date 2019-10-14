<template>
    <div class="item" @click="clickItem">
        <span v-if="!flag"><slot name="normalImg"></slot></span>
        <span v-else><slot name="activeImg"></slot></span>
        <span :class="{active:flag}">{{txt}}</span>
    </div>
</template>

<script>
export default {
    props:["txt","mark","sel"],
    computed:{
        flag(){
            if(this.mark === this.sel){
                return true
            }
            return false
        }
    },
    methods:{
        clickItem(){
            // this.changeSel(this.mark)
            // this.$emit("changeSel",this.mark)
            this.$router.push("/"+this.mark)
        }
    }
}
</script>

<style lang="scss">
    .item{
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width:40px;
            height:40px;
        }
        .active{
            color:#2aaa51;
        }
    }
</style>
