<template>
    <mu-container>
        <mu-appbar style="width: 100%;" title=进度条>
            <mu-button flat slot="left" @click="goback">返回</mu-button>
            <mu-button flat slot="right"></mu-button>
        </mu-appbar>
        <mu-flex class="demo-linear-progress">
            <mu-linear-progress></mu-linear-progress>
        </mu-flex>
        <mu-flex class="demo-linear-progress">
            <mu-linear-progress color="secondary"></mu-linear-progress>
        </mu-flex>
        <mu-flex class="demo-linear-progress">
            <mu-linear-progress :value="linear" mode="determinate" color="green"></mu-linear-progress>
        </mu-flex>
        <mu-circular-progress class="demo-circular-progress" :size="36"></mu-circular-progress>
        <mu-circular-progress class="demo-circular-progress" color="secondary" :stroke-width="5" :size="48"></mu-circular-progress>
        <mu-circular-progress class="demo-circular-progress" color="warning" :stroke-width="7" :size="56"></mu-circular-progress>
    </mu-container>
</template>
<script>
export default {
    data () {
        return{
            linear: 10
        }
    },
    methods: {
        goback () {
            this.$router.go(-1);
        }
    },
    created () {
        this.timer = setInterval(() => {
        this.linear += 10;
        if (this.linear > 100) this.linear = 0;
        }, 1000)
    },
    beforeDestroy () {
        if (this.timer) clearInterval(this.timer);
    }
}
</script>
<style scoped>
.container {
    padding-right: 0;
    padding-left: 0;
}
.demo-linear-progress {
  margin: 16px 0;
}
</style>


