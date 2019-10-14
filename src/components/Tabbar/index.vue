<template>
    <div class="tabbar">
        <!-- <TabItem txt="首页" mark="home" :sel="selected" @changeSel="changeSel">
            <img slot="activeImg" src="../../assets/ic_tab_home_active.png" alt="">
            <img slot="normalImg" src="../../assets/ic_tab_home_normal.png" alt="">
        </TabItem>
        <TabItem txt="书影音" mark="audio" :sel="selected" @changeSel="changeSel">
            <img slot="activeImg" src="../../assets/ic_tab_audio_active.png" alt="">
            <img slot="normalImg" src="../../assets/ic_tab_audio_normal.png" alt="">
        </TabItem>
        <TabItem txt="广播" mark="broadcast" :sel="selected" @changeSel="changeSel">
            <img slot="activeImg" src="../../assets/ic_tab_broadcast_active.png" alt="">
            <img slot="normalImg" src="../../assets/ic_tab_broadcast_normal.png" alt="">
        </TabItem>
        <TabItem txt="分组" mark="group" :sel="selected" @changeSel="changeSel">
            <img slot="activeImg" src="../../assets/ic_tab_group_active.png" alt="">
            <img slot="normalImg" src="../../assets/ic_tab_group_normal.png" alt="">
        </TabItem>
        <TabItem txt="我的" mark="mine" :sel="selected" @changeSel="changeSel">
            <img slot="activeImg" src="../../assets/ic_tab_mine_active.png" alt="">
            <img slot="normalImg" src="../../assets/ic_tab_mine_normal.png" alt="">
        </TabItem> -->
        <TabItem
            v-for="nav in navs"
            :key="nav.id"
            :txt="nav.txt" 
            :mark="nav.mark" 
            :sel="selected"
        >
            <img slot="activeImg" :src="nav.activeImg" alt="">
            <img slot="normalImg" :src="nav.normalImg" alt="">
        </TabItem>
    </div>
</template>
<script>
import TabItem from "./Item"
export default {
    data(){
        return {
            selected:this.$route.name,
            navs:[
                {id:1,txt:"首页",mark:"home",normalImg:require("../../assets/ic_tab_home_normal.png"),activeImg:require("../../assets/ic_tab_home_active.png")},
                {id:2,txt:"书影音",mark:"audio",normalImg:require("../../assets/ic_tab_audio_normal.png"),activeImg:require("../../assets/ic_tab_audio_active.png")},
                {id:3,txt:"广播",mark:"broadcast",normalImg:require("../../assets/ic_tab_broadcast_normal.png"),activeImg:require("../../assets/ic_tab_broadcast_active.png")},
                {id:4,txt:"分组",mark:"group",normalImg:require("../../assets/ic_tab_group_normal.png"),activeImg:require("../../assets/ic_tab_group_active.png")},
                {id:5,txt:"我的",mark:"mine",normalImg:require("../../assets/ic_tab_mine_normal.png"),activeImg:require("../../assets/ic_tab_mine_active.png")},
            ]
        }
    },
    methods:{
        changeSel(selected){
            this.selected = selected 
        }
    },
    components:{
        TabItem
    }
}
</script>

<style>
    .tabbar{
        position: fixed;
        bottom:0;
        left:0;
        width:100%;
        height:60px;
        display: flex;
        border-top:1px solid #ccc;
        background: #fff;
    }
</style>
