<template>
    <div style="width:100%;">
        <mu-appbar style="width: 100%;" title=分隔线>
            <mu-button flat slot="left" @click="goback">返回</mu-button>
            <mu-button flat slot="right"></mu-button>
        </mu-appbar>
        <div style="margin-top:20px;">
            <mu-paper :z-depth="2">
                <p>常用</p>
                <mu-text-field placeholder="输入框1" solo full-width class="demo-divider-form"></mu-text-field>
                <mu-divider></mu-divider>
                <mu-text-field placeholder="输入框2" solo full-width class="demo-divider-form"></mu-text-field>
                <mu-divider></mu-divider>
                <mu-text-field placeholder="输入框3" solo full-width class="demo-divider-form"></mu-text-field>
                <mu-divider></mu-divider>
            </mu-paper>
        </div>
        <div style="margin-top:20px;">
            <p>通过设置 shallow-inset 和 inset 改变分隔线的缩进距离</p>
            <mu-row gutter>
                <mu-col span="6">
                <mu-paper :z-depth="2">
                    <mu-list>
                    <mu-list-item>
                        <mu-list-item-content>
                        <mu-list-item-title>前端内容1</mu-list-item-title>
                        </mu-list-item-content>
                    </mu-list-item>
                    <mu-divider shallow-inset></mu-divider>
                    <mu-list-item>
                        <mu-list-item-content>
                        <mu-list-item-title>前端内容2</mu-list-item-title>
                        </mu-list-item-content>
                    </mu-list-item>
                    <mu-divider shallow-inset></mu-divider>
                    <mu-list-item>
                        <mu-list-item-content>
                        <mu-list-item-title>前端内容3</mu-list-item-title>
                        </mu-list-item-content>
                    </mu-list-item>
                    </mu-list>
                </mu-paper>
                </mu-col>
                <mu-col span="6">
                <mu-paper :z-depth="2">
                    <mu-list>
                    <mu-list-item>
                        <mu-list-item-action>
                        <mu-icon value="settings"></mu-icon>
                        </mu-list-item-action>
                        <mu-list-item-content>
                        <mu-list-item-title>设置</mu-list-item-title>
                        </mu-list-item-content>
                    </mu-list-item>
                    <mu-list-item>
                        <mu-list-item-action>
                        <mu-icon value="help_outline"></mu-icon>
                        </mu-list-item-action>
                        <mu-list-item-content>
                        <mu-list-item-title>帮助</mu-list-item-title>
                        </mu-list-item-content>
                    </mu-list-item>
                    <mu-divider></mu-divider>
                    <mu-list-item>
                        <mu-list-item-action>
                        <mu-icon value="power_settings_new"></mu-icon>
                        </mu-list-item-action>
                        <mu-list-item-content>
                        <mu-list-item-title>退出</mu-list-item-title>
                        </mu-list-item-content>
                    </mu-list-item>
                    </mu-list>
                </mu-paper>
                </mu-col>
            </mu-row>
        </div>
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


