<template>
    <div style="width:100%;">
        <mu-appbar style="width: 100%;" title=侧边栏>
            <mu-button flat slot="left" @click="goback">返回</mu-button>
            <mu-button flat slot="right"></mu-button>
        </mu-appbar>
        <div style="margin-top:20px;">
            <mu-flex justify-content="center" align-items="center">
                <mu-switch style="margin-left: 16px" v-model="docked" label="docked"></mu-switch>
                <mu-radio style="margin-left: 16px" v-model="position" value="left" label="left"></mu-radio>
                <mu-radio style="margin-left: 16px" v-model="position" value="right" label="right"></mu-radio>
                <mu-button color="primary" style="margin-left: 16px" @click="open = !open">
                toggle
                </mu-button>
            </mu-flex>
            <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
                <mu-list>
                <mu-list-item button>
                    <mu-list-item-title>菜单栏目1</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button>
                    <mu-list-item-title>菜单栏目2</mu-list-item-title>
                </mu-list-item>
                </mu-list>
            </mu-drawer>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return{
            docked: false,
            open: false,
            position: 'left'
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


