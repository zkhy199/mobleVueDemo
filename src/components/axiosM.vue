<template>
    <div style="width:100%;">
        <mu-appbar style="width: 100%;" title=底部导航>
            <mu-button flat slot="left" @click="goback">返回</mu-button>
            <mu-button flat slot="right"></mu-button>
        </mu-appbar>
        <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
            <mu-card-header :title="textData.title" sub-title="描述">
            </mu-card-header>
            <mu-card-media :title="textData.text" :sub-title="textData.text">
                <img :src="textData.src">
            </mu-card-media>
            <mu-card-title :title="textData.text" :sub-title="textData.text"></mu-card-title>
            <mu-card-text>
                <ul>
                    <li v-for="text,index in textData.content">
                        <span>{{index}}:</span>{{text}}
                    </li>
                </ul>
            </mu-card-text>
            <mu-card-actions>
                <mu-button flat @click="getAll">请求接口</mu-button>
                <mu-button flat>按钮2</mu-button>
            </mu-card-actions>
        </mu-card>
    </div>
</template>
<script>
import api from '@/api/axiosApi'
import ApiList from '@/api/apiList'
import sun from "../assets/images/sun.jpg";

export default {
    data () {
        return{
            textData:{
                title:"标题",
                src:sun,
                text:"内容标题",
                content:{
                    "text1":"散落在指尖的阳光，我试着轻轻抓住光影的踪迹,",
                    "text2":"它却在眉宇间投下一片淡淡的阴影",
                    "text3":"调皮的阳光掀动了四月的心帘，",
                    "text4":"温暖如约的歌声渐起。",
                    "text5":"似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，",
                    "text6":"找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！",
                }
            }
        }
    },
    methods: {
        goback () {
            this.$router.go(-1);
        },
        getAll () {
            api(ApiList.getHttp,{"jsonData": "Alex的参数",})  
            .then((res)=>{
                console.log("返回的参数"+res);
                if(res){
                    this.textData.title = res.data.data.default;
                    this.textData.text = res.data.data.text;
                    this.textData.src = res.data.data.imgsrc;
                    this.textData.content = res.data.data._req.header;
                }
            },(error)=>{  
                console.log(error)      
            }) 
        }
    }
}
</script>
<style scoped>
ul{
    list-style:none;
}
li{
    text-align: left;
}
span{
font-weight: bold
}
</style>


