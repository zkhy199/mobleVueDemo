<template>
    <div style="width:100%;">
        <mu-appbar style="width: 100%;" title=底部导航>
            <mu-button flat slot="left" @click="goback">返回</mu-button>
            <mu-button flat slot="right"></mu-button>
        </mu-appbar>
        <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
            <mu-card-header title="标题" sub-title="描述">
            </mu-card-header>
            <mu-card-media title="图片标题" sub-title="图标描述">
                <img src="../assets/logo.png">
            </mu-card-media>
            <mu-card-title title="内容标题" sub-title="内容描述"></mu-card-title>
            <mu-card-text>
                散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
                调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
                似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
                找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
            </mu-card-text>
            <mu-card-actions>
                <mu-button flat>按钮1</mu-button>
                <mu-button flat>按钮2</mu-button>
            </mu-card-actions>
        </mu-card>
    </div>
</template>
<script>
export default {
    data () {
        return{
            
        }
    },
    methods: {
        goback () {
            this.$router.go(-1);
        }
    }
}
</script>
<style>

</style>


