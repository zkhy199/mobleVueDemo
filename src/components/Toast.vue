<template>
    <div style="width:100%;">
        <mu-appbar style="width: 100%;" title=消息>
            <mu-button flat slot="left" @click="goback">返回</mu-button>
            <mu-button flat slot="right"></mu-button>
        </mu-appbar>
        <mu-row>
            <mu-col class="demo-snackbar-radio" :key="p" v-for="p in positions" span="6" md="4">
            <mu-radio v-model="normal.position" :value="p" :label="p"></mu-radio>
            </mu-col>
        </mu-row>
        <mu-flex wrap="wrap">
            <mu-text-field v-model="normal.message" label="信息" label-float></mu-text-field>
            <mu-text-field v-model.number="normal.timeout" label="时间" type="number" label-float></mu-text-field>
        </mu-flex>
        <mu-button full-width color="primary" @click="openNormalSnackbar">显示消息</mu-button>
        <mu-snackbar :position="normal.position" :open.sync="normal.open">
            {{normal.message}}
            <mu-button flat slot="action" color="secondary" @click="normal.open = false">关闭</mu-button>
        </mu-snackbar>
        <mu-row>
            <mu-col class="demo-snackbar-radio" :key="c" v-for="c in colors" span="6" md="3">
            <mu-radio v-model="color.color" :color="color.color" :value="c" :label="c"></mu-radio>
            </mu-col>
        </mu-row>
        <mu-flex wrap="wrap">
            <mu-text-field v-model="color.message" label="信息" label-float></mu-text-field>
            <mu-text-field v-model.number="color.timeout" label="时间" type="number" label-float></mu-text-field>
        </mu-flex>
        <mu-button full-width color="primary" @click="openColorSnackbar">显示消息</mu-button>
        <mu-snackbar :color="color.color" :open.sync="color.open">
            <mu-icon left :value="icon"></mu-icon>
            {{color.message}}
            <mu-button flat slot="action" color="#fff" @click="color.open = false">关闭</mu-button>
        </mu-snackbar>
    </div>
</template>
<script>
export default {
    data () {
        return{
            positions: ['top-start', 'top', 'top-end', 'bottom-start', 'bottom', 'bottom-end'],
            normal: {
                position: 'bottom',
                message: '这是一条到处乱窜的消息',
                open: false,
                timeout: 3000
            },
            colors: ['success', 'info', 'error', 'warning'],
            color: {
                color: 'success',
                message: '这是一条能变色的消息',
                open: false,
                timeout: 3000
            }
        }
    },
    computed: {
        icon () {
            return {
                success: 'check_circle',
                info: 'info',
                warning: 'priority_high',
                error: 'warning'
            }[this.color.color]
        }
    },
    methods: {
        goback () {
            this.$router.go(-1);
        },
        openNormalSnackbar () {
            if (this.normal.timer) clearTimeout(this.normal.timer);
            this.normal.open = true;
            this.normal.timer = setTimeout(() => {
                this.normal.open = false;
            }, this.normal.timeout);
        },
        openColorSnackbar () {
            if (this.color.timer) clearTimeout(this.color.timer);
            this.color.open = true;
            this.color.timer = setTimeout(() => {
                this.color.open = false;
            }, this.color.timeout);
        }
    }
}
</script>
<style scoped>
.demo-snackbar-radio {
  margin: 8px 0;
}
</style>


