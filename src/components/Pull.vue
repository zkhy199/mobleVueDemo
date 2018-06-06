<template>
    <mu-paper :z-depth="1" class="demo-list-wrap">
        <!-- <mu-appbar style="width: 100%;" title=网格图片列表>
            <mu-button flat slot="left" @click="goback">返回</mu-button>
            <mu-button flat slot="right"></mu-button>
        </mu-appbar> -->
        <mu-appbar color="cyan">
            <mu-button icon slot="left">
            <mu-icon value="menu"></mu-icon>
            </mu-button>
            下拉刷新+上拉加载
            <mu-button icon slot="right">
                <mu-icon value="search"></mu-icon>
            </mu-button>
        </mu-appbar>
        <!-- 下拉刷新、上拉底部加载更多、下拉刷新文字修改、没有更多数据时候文字显示、 -->
        <scroller 
            :on-refresh="refresh"
            :on-infinite="infinite"
            refreshText="刷新中……"
            noDataText="没有更多数据"
            :snapping=false
            refreshLayerColor='#000'
            loadingLayerColor='#000'
            style="padding-top:60px;">
            <mu-list textline="three-line" style="padding-bottom:100px;">
                <mu-list-item avatar :ripple="true" button  v-for="list,index in lists" :key="'list'+ index">
                    <mu-list-item-action>
                        <mu-avatar>
                            <img :src="list.src">
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-content>
                        <mu-list-item-title>{{list.title}}</mu-list-item-title>
                        <mu-list-item-sub-title>
                        <span style="color: rgba(0, 0, 0, .87)">{{list.name}}</span> {{list.content}}
                        </mu-list-item-sub-title>
                    </mu-list-item-content>
                </mu-list-item>
                <!-- <mu-divider></mu-divider> -->
            </mu-list>
        </scroller>
    </mu-paper>
</template>
<script>
import avatar1 from "../assets/images/avatar1.jpg";
import avatar2 from "../assets/images/avatar2.jpg";
import avatar3 from "../assets/images/avatar3.jpg";
import uicon from "../assets/images/uicon.jpg";

export default {
    data () {
        return {
            snapping:true,
            minH:100,
            lists:[
                {
                    src:avatar1,
                    title:'这个周末一起吃饭么?',
                    name:'刘小瑞',
                    content:'周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈'
                },
                {
                    src:avatar2,
                    title:'Alex',
                    name:'看电影啊',
                    content:'我们去看电影，最近有部烂片上映，又有吐槽的了'
                },
                {
                    src:avatar3,
                    title:'吃鸡?',
                    name:'去打游戏啊',
                    content:'去打游戏啊'
                },
                {
                    src:uicon,
                    title:'LOL?',
                    name:'哇去',
                    content:'实在编不下去，这就是个demo'
                },
                {
                    src:avatar1,
                    title:'这个周末一起吃饭么?',
                    name:'刘小瑞',
                    content:'周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈'
                },
                {
                    src:avatar2,
                    title:'Alex',
                    name:'看电影啊',
                    content:'我们去看电影，最近有部烂片上映，又有吐槽的了'
                },
                {
                    src:avatar3,
                    title:'吃鸡?',
                    name:'去打游戏啊',
                    content:'去打游戏啊'
                },
                {
                    src:uicon,
                    title:'LOL?',
                    name:'哇去',
                    content:'实在编不下去，这就是个demo'
                },
            ]
        }
    },
    methods:{
        goback () {
            this.$router.go(-1);
        },
        refresh(done) {//下拉刷新
            console.log("刷新");
            setTimeout(() => {
                this.lists.reverse();//反转数据
                done();
            }, 1000);
        },
        infinite(done) {//上拉加载
            setTimeout(() => {
                this.lists = this.lists.concat(this.lists);
                done();
            }, 1000);
        }
    }
}
</script>
<style scoped>
.mu-appbar{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width:100%;
}
</style>

