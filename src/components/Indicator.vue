<template>
    <div style="width:100%">
        <mu-appbar style="width: 100%;" title=底部菜单>
            <mu-button flat slot="left" @click="goback">返回</mu-button>
            <mu-button flat slot="right"></mu-button>
        </mu-appbar>
        <mu-flex justify-content="center" style="margin-top:20px;">
            <mu-button @click="openBotttomSheet">打开菜单</mu-button>
        </mu-flex>
        <mu-bottom-sheet :open.sync="open">
            <mu-list @item-click="closeBottomSheet">
            <mu-sub-header>菜单列表</mu-sub-header>
            <mu-list-item button>
                <mu-list-item-title>贵阳</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button>
                <mu-list-item-title>中科</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button>
                <mu-list-item-title>恒运</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button>
                <mu-list-item-title>公司</mu-list-item-title>
            </mu-list-item>
            </mu-list>
        </mu-bottom-sheet>
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

</style>


