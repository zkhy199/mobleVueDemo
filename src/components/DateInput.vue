<template>
    <div style="width:100%;">
        <mu-appbar style="width: 100%;" title=时间选择器>
            <mu-button flat slot="left" @click="goback">返回</mu-button>
            <mu-button flat slot="right"></mu-button>
        </mu-appbar>
        <div style="margin-top:20px;">
            <p>常用</p>
            <mu-row gutter>
                <mu-col span="12" lg="4" sm="6">
                    <mu-date-input v-model="value1" label="选择日期" label-float></mu-date-input>
                </mu-col>
            </mu-row>
        </div>
        <div style="margin-top:20px;">
            <p>不同显示方式</p>
            <mu-row gutter>
                <mu-col span="12" lg="4" sm="6">
                    <mu-date-input  icon="today" v-model="value4" label="popover 显示" label-float full-width></mu-date-input>
                </mu-col>
                <mu-col span="12" lg="4" sm="6">
                    <mu-date-input  icon="today" v-model="value5" label="对话框显示" container="dialog" label-float full-width></mu-date-input>
                </mu-col>
                <mu-col span="12" lg="4" sm="6">
                    <mu-date-input  icon="today" v-model="value6" label="底部弹出显示" container="bottomSheet" label-float full-width></mu-date-input>
                </mu-col>
            </mu-row>
        </div>
        <div style="margin-top:20px;">
            <p>不同选择模式</p>
            <mu-row gutter>
                <mu-col span="12" lg="4" sm="6">
                    <mu-date-input  icon="today" v-model="value7" label="选择日期" type="date" label-float full-width></mu-date-input>
                </mu-col>
                <mu-col span="12" lg="4" sm="6">
                    <mu-date-input  icon="today" landscape v-model="value8" label="选择时间" type="time" actions label-float full-width></mu-date-input>
                </mu-col>
                <mu-col span="12" lg="4" sm="6">
                    <mu-date-input  icon="today" v-model="value9" label="选择年份" type="year" label-float full-width></mu-date-input>
                </mu-col>
                <mu-col span="12" lg="4" sm="6">
                    <mu-date-input  icon="today" v-model="value10" label="选择月份" type="month" label-float full-width></mu-date-input>
                </mu-col>
                <mu-col span="12" lg="4" sm="6">
                    <mu-date-input  icon="today" v-model="value11" label="选择日期和时间" type="dateTime" actions label-float full-width landscape></mu-date-input>
                </mu-col>
            </mu-row>
        </div>
        <div style="margin-top:20px;">
            <p>格式化文本，显示模式更改，禁用一些日期的选择。</p>
            <mu-row gutter>
                <mu-col span="12" lg="4" sm="6">
                    <mu-date-input  icon="today" type="time" v-model="value12" label="显示确定/取消按钮" actions label-float full-width></mu-date-input>
                </mu-col>
                <mu-col span="12" lg="4" sm="6">
                    <mu-date-input  icon="today" v-model="value13" label="格式化显示" format="YYYY 年 MM 月 DD 日" label-float full-width></mu-date-input>
                </mu-col>
                <mu-col span="12" lg="4" sm="6">
                    <mu-date-input  icon="today" v-model="value14" label="不展示日期" no-display label-float full-width></mu-date-input>
                </mu-col>
                <mu-col span="12" lg="4" sm="6">
                    <mu-date-input  icon="today" v-model="value15" label="只能选择当前月份"  :max-date="maxDate" :min-date="minDate" label-float full-width></mu-date-input>
                </mu-col>
                <mu-col span="12" lg="4" sm="6">
                    <mu-date-input  icon="today" v-model="value16" label="只能选工作日"  :should-disable-date="disableWeekends" label-float full-width></mu-date-input>
                </mu-col>
                <mu-col span="12" lg="4" sm="6">
                    <mu-date-input  icon="today" v-model="value17" label="只能选择奇数日期"  :should-disable-date="allowedDates" label-float full-width></mu-date-input>
                </mu-col>
            </mu-row>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        const minDate = new Date();
        const maxDate = new Date();
        minDate.setDate(1);
        maxDate.setMonth(maxDate.getMonth() + 1);
        maxDate.setDate(0);
        return{
            value1: undefined,
            value2: undefined,
            value3: undefined,
            value4: undefined,
            value5: undefined,
            value6: undefined,
            value7: undefined,
            value8: undefined,
            value9: undefined,
            value10: undefined,
            value11: undefined,
            value12: null,
            value13: null,
            value14: null,
            value15: null,
            value16: null,
            value17: null,
            minDate,
            maxDate
        }
    },
    methods: {
        goback () {
            this.$router.go(-1);
        },
        disableWeekends (date) {
            return date.getDay() === 0 || date.getDay() === 6
        },
        allowedDates (date) {
            return date.getDate() % 2 === 0
        }
    }
}
</script>
<style>

</style>


