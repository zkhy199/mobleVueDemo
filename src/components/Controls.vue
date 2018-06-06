<template>
    <div style="width:100%;">
        <mu-appbar style="width: 100%;" title=选择控件>
            <mu-button flat slot="left" @click="goback">返回</mu-button>
            <mu-button flat slot="right"></mu-button>
        </mu-appbar>
        <div style="margin-top:20px;">
            <p>正常使用</p>
            <mu-flex class="select-control-row">
                <mu-checkbox v-model="normal.checkbox" :label="'Checkbox: ' + normal.checkbox"></mu-checkbox>
            </mu-flex>
            <div class="select-control-group">
                <mu-flex class="select-control-row" :key="'radio ' + i" v-for="i in 3">
                <mu-radio :value="i" v-model="normal.radio" :label="'Radio ' + i"></mu-radio>
                </mu-flex>
            </div>
            <mu-flex class="select-control-row">
                <mu-switch v-model="normal.switch" :label="'Switch: ' + normal.switch"></mu-switch>
            </mu-flex>
        </div>
        <div style="margin-top:20px;">
            <p>自定义图标（多选）</p>
            <mu-flex class="select-control-row">
                <mu-checkbox v-model="checkbox.value2" uncheck-icon="favorite_border" checked-icon="favorite" label="自定义图标"></mu-checkbox>
            </mu-flex>
            <mu-flex class="select-control-row">
                <mu-checkbox v-model="checkbox.value3" uncheck-icon="visibility_off" checked-icon="visibility" label="自定义图标"></mu-checkbox>
            </mu-flex>
            <div class="select-control-group" >
                Selects: {{checkbox.value1}}
                <mu-flex class="select-control-row" :key="'Checkbox ' + i" v-for="i in 3">
                <mu-checkbox :value="'Checkbox ' + i" v-model="checkbox.value1" :label="'Checkbox ' + i"></mu-checkbox>
                </mu-flex>
            </div>
            不可用状态
            <mu-flex class="select-control-row">
                <mu-checkbox disabled label="disabled"></mu-checkbox>
            </mu-flex>
            <mu-flex class="select-control-row">
                <mu-checkbox disabled :input-value="true" label="disabled"></mu-checkbox>
            </mu-flex>
        </div>
        <div style="margin-top:20px;">
            <p>自定义图标（单选）</p>
            <mu-flex class="select-control-row">
                <mu-radio v-model="radio.value2" value="heart" uncheck-icon="favorite_border" checked-icon="favorite" label="自定义图标"></mu-radio>
            </mu-flex>
            <mu-flex class="select-control-row">
                <mu-radio v-model="radio.value2" value="visibility" uncheck-icon="visibility_off" checked-icon="visibility" label="自定义图标"></mu-radio>
            </mu-flex>
            <div class="select-control-group" >
                Selects: {{radio.value1}}
                <mu-flex class="select-control-row" :key="'radio ' + i" v-for="i in 3">
                <mu-radio :value="'radio ' + i" v-model="radio.value1" :label="'radio ' + i"></mu-radio>
                </mu-flex>
            </div>
            不可用状态
            <mu-flex class="select-control-row">
                <mu-radio disabled v-model="radio.value3" value="null" label="disabled"></mu-radio>
            </mu-flex>
            <mu-flex class="select-control-row">
                <mu-radio disabled v-model="radio.value3" value="disable" label="disabled"></mu-radio>
            </mu-flex>
        </div>
        <div style="margin-top:20px;">
            <p>开关</p>
            <mu-flex class="select-control-row">
                <mu-switch v-model="switchVal.value1" label="switch"></mu-switch>
            </mu-flex>
            <mu-flex class="select-control-row">
                <mu-switch v-model="switchVal.value2" label="switch"></mu-switch>
            </mu-flex>
            <mu-flex class="select-control-row">
                <mu-switch v-model="switchVal.value3" disabled label="disabled"></mu-switch>
            </mu-flex>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return{
            normal: {
                checkbox: true,
                radio: 1,
                switch: false
            },
            checkbox: {
                value1: [],
                value2: false,
                value3: false
            },
            radio: {
                value1: [],
                value2: 'heart',
                value3: 'disable'
            },
            switchVal: {
                value1: false,
                value2: true,
                value3: false
            }
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
.select-control-row{
  padding: 8px 0;
}
.select-control-group {
  margin: 16px 0;
}
</style>


