<template>
    <div style="width:100%;">
        <mu-appbar style="width: 100%;" title=薄片>
            <mu-button flat slot="left" @click="goback">返回</mu-button>
            <mu-button flat slot="right"></mu-button>
        </mu-appbar>
        <div style="margin-top:20px;">
            <mu-chip class="demo-chip">
                default chip
            </mu-chip>
            <mu-chip class="demo-chip" @delete="handleClose" delete>
                delete chip
            </mu-chip>
        </div>
        <div style="margin-top:20px;">
            <mu-chip class="demo-chip" color="teal" @delete="handleClose" delete>
                <mu-avatar :size="32" color="blue">
                <mu-icon value="face"></mu-icon>
                </mu-avatar>
                icon avatar chip
            </mu-chip>
        </div>
        <div style="margin-top:20px;">
            <mu-chip class="demo-chip" color="blue300" @delete="handleClose" delete>
                <mu-avatar text-color="blue300" color="indigo900" :size="32">MB</mu-avatar> custom chip
            </mu-chip>
        </div>
        <div style="margin-top:20px;">
            <mu-chip class="demo-chip" v-for="chip, index in chips" :key="chip" :color="chip" @delete="remove(index)" delete>{{chip}}</mu-chip>
            <mu-button color="primary" v-if="chips.length === 0" @click="reset">reset</mu-button>
        </div>
        <div style="margin-top:20px;"></div>
        <div style="margin-top:20px;"></div>
    </div>
</template>
<script>
const initChips = ['primary', 'secondary', 'success', 'warning', 'info', 'error'];
export default {
    data () {
        return{
            chips: [...initChips]
        }
    },
    methods: {
        goback () {
            this.$router.go(-1);
        },
        handleClose () {
            window.alert('你点击了删除按钮')
        },
        remove (index) {
            this.chips.splice(index, 1);
        },
        reset () {
            this.chips = [...initChips];
        }
    }
}
</script>
<style>
.demo-chip-wrapper {
  text-align: center;
}
.demo-chip {
  margin: 8px;
  vertical-align: middle;
}
</style>


