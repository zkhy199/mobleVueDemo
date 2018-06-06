<template>
    <div style="width:100%">
        <mu-appbar style="width: 100%;" title=按钮类型>
            <mu-button flat slot="left" @click="goback">返回</mu-button>
            <mu-button flat slot="right"></mu-button>
        </mu-appbar>
        <div style="margin-top:20px;">
            <mu-button color="primary">常用</mu-button>
            <mu-button color="secondary">次要</mu-button>
            <mu-button color="success">成功</mu-button>
            <mu-button color="warning">警告</mu-button>
            <mu-button color="info">信息</mu-button>
            <mu-button color="error">错误</mu-button>
            <mu-button disabled>禁用</mu-button>
        </div>
        <div style="margin-top:20px;">
            <mu-button flat>正常</mu-button>
            <mu-button flat color="primary">常用</mu-button>
            <mu-button flat color="secondary">次要</mu-button>
            <mu-button flat color="success">成功</mu-button>
            <mu-button flat color="warning">警告</mu-button>
            <mu-button flat disabled>禁用</mu-button>
        </div>
        <div style="margin-top:20px;">
            <mu-button color="primary">
                <mu-icon left value="grade"></mu-icon>
                星星
            </mu-button>
            <mu-button color="secondary">
                <mu-icon left value="android"></mu-icon>
                安卓
            </mu-button>
            <mu-button>
                删除
                <mu-icon right value="delete"></mu-icon>
            </mu-button>
            <mu-button color="red">
                发送
                <mu-icon right value="send"></mu-icon>
            </mu-button>
        </div>
        <div style="margin-top:20px;">
            <mu-button fab small color="primary">
                <mu-icon value="grade"></mu-icon>
            </mu-button>
            <mu-button fab small color="pink">
                <mu-icon value="android"></mu-icon>
            </mu-button>
            <mu-button fab color="indigo">
                <mu-icon value="remove"></mu-icon>
            </mu-button>
            <mu-button fab color="teal">
                <mu-icon value="add"></mu-icon>
            </mu-button>
            <mu-button large fab color="red">
                <mu-icon value="edit"></mu-icon>
            </mu-button>
            <mu-button large fab color="purple">
                <mu-icon value="thumb_up"></mu-icon>
            </mu-button>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return{
            open:false,
        }
    },
    methods: {
        openBotttomSheet (){
            this.open = true;
        },
        closeBottomSheet () {
            this.open = false;
        },
        goback () {
            this.$router.go(-1);
        }
    }
}
</script>
<style>
.button-wrapper {
  text-align: center;
}
.mu-button{
    margin: 8px;
}
</style>


