<template>
    <div style="width:100%;">
        <mu-appbar style="width: 100%;" title=选择框>
            <mu-button flat slot="left" @click="goback">返回</mu-button>
            <mu-button flat slot="right"></mu-button>
        </mu-appbar>
        <div style="margin-top:20px;">
            <p>设置选择框为多选框</p>
            <mu-row gutter>
                <mu-col span="12" lg="4" sm="6">
                <mu-select label="多选择" multiple v-model="multi.value1" full-width>
                    <mu-option v-for="city,index in citys" :key="city" :label="city" :value="city"></mu-option>
                </mu-select>
                </mu-col>
                <mu-col span="12" lg="4" sm="6">
                <mu-select label="分隔符" multiple separator="/" v-model="multi.value2" full-width>
                    <mu-option v-for="city,index in citys" :key="city" :label="city" :value="city"></mu-option>
                </mu-select>
                </mu-col>
                <mu-col span="12" lg="4" sm="6">
                <mu-select label="薄片" multiple chips v-model="multi.value3" full-width>
                    <mu-option v-for="city,index in citys" :key="city" :label="city" :value="city"></mu-option>
                </mu-select>
                </mu-col>
            </mu-row>
        </div>
        <div style="margin-top:20px;">
            <p>支持搜索和模糊查询选择框</p>
            <mu-row gutter>
                <mu-col span="12" lg="4" sm="6">
                <mu-select label="首字母模糊查询" filterable v-model="filterable.value1" full-width>
                    <mu-option v-for="city,index in citys" :key="city" :label="city" :value="city"></mu-option>
                </mu-select>
                </mu-col>
                <mu-col span="12" lg="4" sm="6">
                <mu-select label="不限制模糊查询" filterable multiple v-model="filterable.value2" full-width>
                    <mu-option v-for="city,index in citys" :key="city" :label="city" :value="city"></mu-option>
                </mu-select>
                </mu-col>
                <mu-col span="12" lg="4" sm="6">
                <mu-select label="使用薄片模糊查询" filterable multiple chips v-model="filterable.value3" full-width>
                    <mu-option v-for="city,index in citys" :key="city" :label="city" :value="city"></mu-option>
                </mu-select>
                </mu-col>
            </mu-row>
        </div>
        <div style="margin-top:20px;">
            <p>自定义选择框</p>
            <mu-row gutter>
                <mu-col span="12" sm="6">
                <mu-select label="自定义单选" v-model="custom.value1" full-width>
                    <mu-option v-for="city,index in citys" avatar :key="city" :label="city" :value="city">
                    <mu-list-item-action avatar>
                        <mu-avatar :size="36" color="primary">
                        {{city.substring(0, 1)}}
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-content>
                        <mu-list-item-title>{{city}}</mu-list-item-title>
                    </mu-list-item-content>
                    </mu-option>
                </mu-select>
                </mu-col>
                <mu-col span="12" sm="6">
                <mu-select label="自定义多选" multiple chips v-model="custom.value2" full-width>
                    <template slot="selection" slot-scope="scope">
                    <mu-chip :selected="scope.selected" color="teal">
                        {{scope.label}}
                    </mu-chip>
                    </template>
                    <mu-option v-for="city,index in citys" :key="city" :label="city" :value="city"></mu-option>
                </mu-select>
                </mu-col>
            </mu-row>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return{
            citys: [
                'Alabama', 'Alaska', 'American Samoa', 'Arizona',
                'Arkansas', 'California', 'Colorado', 'Connecticut',
                'Delaware', 'District of Columbia', 'Federated States of Micronesia',
                'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
                'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
                'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
                'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
                'Missouri', 'Montana', 'Nebraska', 'Nevada',
                'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
                'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
                'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
                'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
                'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
                'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
            ],
            multi: {
                value1: [],
                value2: [],
                value3: []
            },
            filterable: {
                value1: '',
                value2: [],
                value3: []
            },
            custom: {
                value1: '',
                value2: []
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
<style>

</style>


