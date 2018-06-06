<template>
    <div style="width:100%;">
        <mu-appbar style="width: 100%;" title=对话框>
            <mu-button flat slot="left" @click="goback">返回</mu-button>
            <mu-button flat slot="right"></mu-button>
        </mu-appbar>
        <div style="margin-top:20px;">
            <mu-flex justify-content="center">
                <mu-button @click="openSimpleDialog">打开</mu-button>
            </mu-flex>
            <mu-dialog title="对话框" width="360" :open.sync="openSimple">
                这是一个单调的对话框
                <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">关闭</mu-button>
            </mu-dialog>
        </div>
        <div style="margin-top:20px;">
            <mu-flex justify-content="center">
                <mu-button @click="openAlertDialog">打开自定义对话框</mu-button>
            </mu-flex>
            <mu-dialog title="自定义对话框" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false" :open.sync="openAlert">
                这是一个可爱的自定义对话框
                <mu-button slot="actions" flat color="primary" @click="closeAlertDialog">同意</mu-button>
                <mu-button slot="actions" flat color="primary" @click="closeAlertDialog">很同意</mu-button>
            </mu-dialog>
        </div>
        <div style="margin-top:20px;">
            <mu-flex justify-content="center">
                <mu-button @click="openScrollDialog">打开列表对话框</mu-button>
            </mu-flex>
            <mu-dialog title="列表" width="360" scrollable :open.sync="openScroll">
                <mu-list>
                <mu-list-item :key="option" v-for="option in options">
                    <mu-list-item-content>
                    <mu-radio  :label="option" :value="option" v-model="ringtone"></mu-radio>
                    </mu-list-item-content>
                </mu-list-item>
                </mu-list>
                <mu-button slot="actions" flat color="primary" @click="closeScrollDialog">关闭</mu-button>
            </mu-dialog>
        </div>
        <div style="margin-top:20px;">
            <mu-flex justify-content="center">
                <mu-button @click="openFullscreenDialog">打开全屏对话框</mu-button>
            </mu-flex>
            <mu-dialog width="360" transition="slide-bottom" fullscreen :open.sync="openFullscreen">
                <mu-appbar color="primary" title="这都不是个对话框了">
                <mu-button slot="left" icon @click="closeFullscreenDialog">
                    <mu-icon value="close"></mu-icon>
                </mu-button>
                <mu-button slot="right" flat  @click="closeFullscreenDialog">
                    关闭
                </mu-button>
                </mu-appbar>
                <div style="padding: 24px;">
                这应该是一个model
                </div>
            </mu-dialog>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return{
            openSimple: false,
            openScroll: false,
            openFullscreen: false,
            openAlert: false,
            ringtone: 'None',
            options: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14'
            ]
        }
    },
    methods: {
        goback () {
            this.$router.go(-1);
        },
        openSimpleDialog () {
            this.openSimple = true;
        },
        closeSimpleDialog () {
            this.openSimple = false;
        },
        openAlertDialog () {
            this.openAlert = true;
        },
        closeAlertDialog () {
            this.openAlert = false;
        },
        openFullscreenDialog () {
            this.openFullscreen = true;
        },
        closeFullscreenDialog () {
            this.openFullscreen = false;
        },
        openScrollDialog () {
            this.openScroll = true;
        },
        closeScrollDialog () {
            this.openScroll = false;
        }
    }
}
</script>
<style>

</style>


