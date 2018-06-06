<template>
    <div style="width:100%;">
        <mu-appbar style="width: 100%;" title=表单>
            <mu-button flat slot="left" @click="goback">返回</mu-button>
            <mu-button flat slot="right"></mu-button>
        </mu-appbar>
        <div style="margin-top:20px;">
            <mu-flex align-items="center" style="padding-bottom: 8px;">
                <span style="margin-right: 16px;">标签位置:</span>
                <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="top" label="顶部"></mu-radio>
                <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="left" label="左侧"></mu-radio>
                <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="right" label="右侧"></mu-radio>
            </mu-flex>
            <mu-form :model="form" ref="form" class="mu-demo-form" :label-position="labelPosition" label-width="100">
                <mu-form-item label="用户名" help-text="帮助文字" prop="username" :rules="usernameRules">
                    <mu-text-field v-model="form.username" prop="username"></mu-text-field>
                </mu-form-item>
                <mu-form-item label="密码" prop="password" :rules="passwordRules">
                    <mu-text-field type="password" v-model="form.password" prop="password"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="select" label="下拉选择">
                <mu-select v-model="form.select">
                    <mu-option v-for="option,index in options" :key="option" :label="option" :value="option"></mu-option>
                </mu-select>
                </mu-form-item>
                <mu-form-item prop="date" label="时间选择器">
                    <mu-date-input v-model="form.date" type="dateTime" actions></mu-date-input>
                </mu-form-item>
                <mu-form-item prop="radio" label="单选框">
                    <mu-radio v-model="form.radio" value="male" label="男士"></mu-radio>
                    <mu-radio v-model="form.radio" value="female" label="女士"></mu-radio>
                </mu-form-item>
                <mu-form-item prop="checkbox" label="多选框">
                    <mu-checkbox v-model="form.checkbox" value="eat" label="吃"></mu-checkbox>
                    <mu-checkbox v-model="form.checkbox" value="sleep" label="睡"></mu-checkbox>
                    <mu-checkbox v-model="form.checkbox" value="run" label="跑步"></mu-checkbox>
                    <mu-checkbox v-model="form.checkbox" value="movie" label="电影"></mu-checkbox>
                </mu-form-item>
                <mu-form-item prop="switch" label="开关">
                    <mu-switch v-model="form.switch"></mu-switch>
                </mu-form-item>
                <mu-form-item prop="slider" label="滑块">
                    <mu-slider v-model="form.slider"></mu-slider>
                </mu-form-item>
                <mu-form-item prop="textarea" label="文本区域">
                    <mu-text-field multi-line :rows="3" :rows-max="6" v-model="form.textarea"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="isAgree" :rules="argeeRules">
                    <mu-checkbox label="同意用户协议" v-model="form.isAgree"></mu-checkbox>
                </mu-form-item>
                <mu-form-item>
                    <mu-button color="primary" @click="submit">提交</mu-button>
                    <mu-button @click="clear">重置</mu-button>
                </mu-form-item>
            </mu-form>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            options: [
                'Option 1', 'Option 2', 'Option 3', 'Option 4',
                'Option 5', 'Option 6', 'Option 7', 'Option 8',
                'Option 9', 'Option 10'
            ],
            labelPosition: 'top',
            form: {
                input: '',
                select: '',
                date: '',
                radio: '',
                checkbox: [],
                switch: false,
                slider: 30,
                textarea: '',
                username: '',
                password: '',
                isAgree: false
            },
            usernameRules: [
                { validate: (val) => !!val, message: '必须填写用户名'},
                { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
            ],
            passwordRules: [
                { validate: (val) => !!val, message: '必须填写密码'},
                { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
            ],
            argeeRules: [{ validate: (val) => !!val, message: '必须同意用户协议'}],
        }
    },
    methods: {
        goback () {
            this.$router.go(-1);
        },
        submit () {
            this.$refs.form.validate();
        },
        clear () {
            this.$refs.form.clear();
            this.form = {
                input: '',
                select: '',
                date: '',
                radio: '',
                checkbox: [],
                switch: false,
                slider: 30,
                textarea: '',
                username: '',
                password: '',
                isAgree: false
            };
        }
    }
}
</script>
<style>
.mu-demo-form {
  width: 100%;
  max-width: 460px;
}
</style>


