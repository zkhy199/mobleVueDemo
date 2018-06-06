<template>
    <div style="width:100%;">
        <mu-appbar style="width: 100%;" title=步骤条>
            <mu-button flat slot="left" @click="goback">返回</mu-button>
            <mu-button flat slot="right"></mu-button>
        </mu-appbar>
        <p class="Ptitle">横版步骤条</p>
        <div style="margin-top:20px;width:100%;">
            <mu-stepper :active-step="activeStep">
                <mu-step>
                    <mu-step-label>
                        选择活动地点
                    </mu-step-label>
                </mu-step>
                <mu-step>
                    <mu-step-label>
                        创建一个群组
                    </mu-step-label>
                </mu-step>
                <mu-step>
                    <mu-step-label>
                        宣传活动
                    </mu-step-label>
                </mu-step>
            </mu-stepper>
        </div>
        <div class="demo-step-content">
            <p v-if="finished">
            都完成啦!<a href="javascript:;" @click="reset">点这里</a>可以重置
            </p>
            <template v-if="!finished">
                <p>
                    {{content}}
                </p>
                <div>
                    <mu-button flat class="demo-step-button" :disabled="activeStep === 0" @click="handlePrev"> 上一步 </mu-button>
                    <mu-button class="demo-step-button" color="primary" @click="handleNext"> {{activeStep === 2 ? '完成' : '下一步'}} </mu-button>
                </div>
            </template>
        </div>
        <p class="Ptitle">竖版步骤条</p>
        <div style="margin-top:20px;width:100%;">
            <mu-stepper :active-step="activeStep" orientation="vertical">
                <mu-step>
                    <mu-step-label>
                        选择活动地点
                    </mu-step-label>
                </mu-step>
                <mu-step>
                    <mu-step-label>
                        创建一个群组
                    </mu-step-label>
                </mu-step>
                <mu-step>
                    <mu-step-label>
                        宣传活动
                    </mu-step-label>
                </mu-step>
            </mu-stepper>
        </div>
        <div class="demo-step-content">
            <p v-if="finished">
            都完成啦!<a href="javascript:;" @click="reset">点这里</a>可以重置
            </p>
            <template v-if="!finished">
                <p>
                    {{content}}
                </p>
                <div>
                    <mu-button flat class="demo-step-button" :disabled="activeStep === 0" @click="handlePrev"> 上一步 </mu-button>
                    <mu-button class="demo-step-button" color="primary" @click="handleNext"> {{activeStep === 2 ? '完成' : '下一步'}} </mu-button>
                </div>
            </template>
        </div>
        <div style="margin-top:20px;"></div>
        <div style="margin-top:20px;"></div>
    </div>
</template>
<script>
export default {
    data () {
        return{
            activeStep:0,
            finished:false,
            content:'选择一个活动的地点'
        }
    },
    methods: {
        goback () {
            this.$router.go(-1);
        },
        handlePrev () {
            this.activeStep--;
            switch (this.activeStep) {
                case 0:
                    this.content = '选择一个活动的地点'
                    break;
                case 1:
                    this.content = '创建群组，50人左右'
                    break;
                case 2:
                    this.content = '多在群里发消息宣传宣传'
                    break;
            }
        },
        handleNext (){
            if(this.activeStep===2){
                this.finished = true;
            }else{
                this.activeStep++;
                switch (this.activeStep) {
                    case 0:
                        this.content = '选择一个活动的地点'
                        break;
                    case 1:
                        this.content = '创建群组，50人左右'
                        break;
                    case 2:
                        this.content = '多在群里发消息宣传宣传'
                        break;
                }
            }
        },
        reset () {
            this.activeStep=0;
            this.finished = false;
            this.content = '选择一个活动的地点';
        }
    }
}
</script>
<style scoped>
.Ptitle{
    background: #ccc;
    color:#000;
    padding:10px;
}
</style>


