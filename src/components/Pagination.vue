<template>
    <div style="width:100%;">
        <mu-appbar style="width: 100%;" title=分页>
            <mu-button flat slot="left" @click="goback">返回</mu-button>
            <mu-button flat slot="right"></mu-button>
        </mu-appbar>
        <div style="margin-top:20px;"><mu-pagination :total="1000" :current.sync="current"></mu-pagination></div>
        <div style="margin-top:20px;"></div>
    </div>
</template>
<script>
export default {
    data () {
        return{
            current: 1
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


