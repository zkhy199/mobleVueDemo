<template>
    <div style="width:100%;">
        <mu-appbar style="width: 100%;" title=文本输入框>
            <mu-button flat slot="left" @click="goback">返回</mu-button>
            <mu-button flat slot="right"></mu-button>
        </mu-appbar>
        <div style="margin-top:20px;">
            <p>正常使用</p>
            <mu-text-field></mu-text-field><br/>
            <mu-text-field placeholder="输入内容"></mu-text-field><br/>
            <mu-text-field disabled placeholder="禁止输入"></mu-text-field><br/>
            <mu-text-field placeholder="输入错误内容" error-text="输入内容，什么都行！"></mu-text-field><br/>
            <mu-text-field label="邮件地址" suffix="@gmail.com"></mu-text-field><br/>
            <mu-text-field label="浮动标签" prefix="$" label-float ></mu-text-field><br/>
            <mu-text-field label="密码" :action-icon="visibility ? 'visibility_off' : 'visibility'" :action-click="() => (visibility = !visibility)" :type="visibility ? 'text' : 'password'"></mu-text-field><br/>
            <mu-text-field label="同屏幕宽度一致" full-width></mu-text-field>
        </div>
        <div style="margin-top:20px;">
            <p>多行输入</p>
            <mu-text-field placeholder="默认3行, 最大显示6行" multi-line :rows="3" :rows-max="6"></mu-text-field><br/>
            <mu-text-field placeholder="默认4行, 宽度同屏幕一致" multi-line :rows="4" full-width></mu-text-field><br/>
        </div>
        <div style="margin-top:20px;">
            <p>图标显示</p>
            <mu-text-field type="number" placeholder="电话号码" icon="phone"></mu-text-field><br/>
            <mu-text-field multi-line :rows="4" icon="comment"  placeholder="输入信息"></mu-text-field><br/>
        </div>
        <div style="margin-top:20px;">
            <p>帮助文字和错误状态</p>
            <mu-text-field label="用户名" label-float help-text="用户名为6-12长度的字符" icon="account_circle"></mu-text-field><br/>
            <mu-text-field label="密码" label-float error-text="请输入密码" icon="locked"></mu-text-field><br/>
        </div>
        <div style="margin-top:20px;">
            <p>输入长度限制</p>
            <mu-text-field placeholder="最多不超过10个字符" :max-length="10"></mu-text-field><br/>
            <mu-text-field placeholder="不允许超过100个字符" multi-line :rows="3" :max-length="100"></mu-text-field><br/>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return{
            visibility: false
        }
    },
    methods: {
        goback () {
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
p{
    background: #000;
    color:#fff;
}
</style>


