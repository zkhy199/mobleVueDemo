<template>
  <div class="hy-upload">
    <div class="upload-icon">
      <input
        ref="input"
        type="file"
        accept="image/*"
        class="upload-input"
        :disabled="disabled"
        @change="onChange"
        :multiple="multiple"
      >
    </div>
    <div class="pic-list" v-if="waitList.length > 0">
      <div
        class="wait-pic"
        v-for="pic in waitList"
        :style="{backgroundImage: `url(${pic.url})`}"></div>
    </div>
  </div>
</template>

<script>
import api from '@/api/axiosApi'
import ApiList from '@/api/apiList'
import ajax from './ajax'
function noop () {}

export default {
  props: {
    disabled: Boolean,
    autoUpload: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: true
    },
    beforeUpload: Function,
    maxSize: {
      type: Number,
      default: Number.MAX_VALUE
    },
    onSuccess: {
      type: Function,
      default: noop
    },
    onProgress: {
      type: Function,
      default: noop
    },
    onError: {
      type: Function,
      default: noop
    },
    // 删除文件
    onRemove: {
      type: Function,
      default: noop
    },
    // 上传的api地址
    action: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      waitList: [],
      tempIndex: 1,
      uploadFiles: [],
      reqs: {},
      fileList: []
    }
  },
  methods: {
    doSubmit () {
      const vm = this;
      if (autoUpload) { return; }
      this.fileList.forEach(rawFile => {
        vm.handleStart(rawFile);
        vm.upload(rawFile);
      });
    },
    onChange (event) {
      const vm = this
      let { files } = event.target
      if (vm.disabled || !files.length) {
        return
      }

      files = Array.prototype.slice.call(files);
      if (!vm.multiple) { files = files.slice(0, 1); }

      if (files.length === 0) { return; }

      this.fileList = files;
      this.fileList.forEach(rawFile => {
        vm.handleStart(rawFile);
        if (vm.autoUpload) vm.upload(rawFile);
      });
    },
    // 开始上传前的数据准备
    handleStart(rawFile) {
      rawFile.uid = Date.now() + this.tempIndex++;
      let file = {
        status: 'ready',
        name: rawFile.name,
        size: rawFile.size,
        percentage: 0,
        uid: rawFile.uid,
        raw: rawFile
      };

      try {
        file.url = URL.createObjectURL(rawFile);
      } catch (err) {
        console.error(err);
        return;
      }

      this.uploadFiles.push(file);
    },
    // 上传前控制
    upload(rawFile) {
      if (rawFile.size > this.maxSize) {
        this.onError('图片过大', rawFile);
        return;
      }
      this.$refs.input.value = null;

      if (!this.beforeUpload) {
        return this.post(rawFile);
      }

      const before = this.beforeUpload(rawFile);
      if (before !== false) {
        this.post(rawFile);
      } else {
        this.onRemove(rawFile);
      }
    },
    // 正式上传
    post(rawFile) {
      const vm = this
      const { uid } = rawFile;
      const option = {
        headers: {},
        // cookie凭证是否支持发送
        withCredentials: true,
        file: rawFile,
        data: {},
        filename: rawFile.name,
        // 上传的地址
        action: vm.action,
        onProgress: e => {
          vm.onProgress(e, rawFile);
        },
        onSuccess: res => {
          vm.onSuccess(res, rawFile);
          delete vm.reqs[uid];
        },
        onError (res) {
          vm.onError(res, rawFile);
          delete vm.reqs[uid];
        }
      };
      // 调用后台接口
      const req = ajax(option);
      vm.reqs[uid] = req;
      if (req && req.then) {
        req.then(option.onSuccess, option.onError);
      }
    }
  }
}
</script>

<style scoped>
.hy-upload{
  padding: 10px;
  text-align: left;
}
.hy-upload::after{
  content: '';
  display: block;
  clear: both;
}
.upload-icon{
  width: 20px;
  height: 20px;
  overflow: hidden;
  border: 1px solid rgba(100,100,100,0.5);
  position: relative;
}
.upload-icon::before{
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  width: 1px;
  background-color: rgba(100,100,100,0.4);
}
.upload-icon::after{
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
  background-color: rgba(100,100,100,0.4);
}
.upload-input{
  opacity: 0;
}
.pic-list{
  height: 60px;
  overflow: auto;
  border: 1px solid rgba(100,100,100,0.3);
}
.wait-pic{
  height: 100%;
  width: 60px;
  margin-right: 1%;
  float: left;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
