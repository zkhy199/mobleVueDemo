<template>
  <div class="main">
    <mu-appbar style="width: 100%;" title=组件列表></mu-appbar>
    <mu-list textline="two-line">
      <mu-list-item avatar :ripple="true" button to="/toast">
        <mu-list-item-content>
          <mu-list-item-title>底部导航</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="true" button to="/indicator">
        <mu-list-item-content>
          <mu-list-item-title>底部菜单</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="true" button to="/buttons">
        <mu-list-item-content>
          <mu-list-item-title>按钮</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="true" button to="/card">
        <mu-list-item-content>
          <mu-list-item-title>卡片</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="true" button to="/chip">
        <mu-list-item-content>
          <mu-list-item-title>薄片</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="true" button to="/dataTable">
        <mu-list-item-content>
          <mu-list-item-title>数据表格</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="true" button to="/dialog">
        <mu-list-item-content>
          <mu-list-item-title>对话框</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="true" button to="/divider">
        <mu-list-item-content>
          <mu-list-item-title>分隔线</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="true" button to="/drawer">
        <mu-list-item-content>
          <mu-list-item-title>侧边栏</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="true" button to="/gridList">
        <mu-list-item-content>
          <mu-list-item-title>网格列表</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="true" button to="/form">
        <mu-list-item-content>
          <mu-list-item-title>表单</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="true" button to="/dateInput">
        <mu-list-item-content>
          <mu-list-item-title>时间选择器</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="true" button to="/select">
        <mu-list-item-content>
          <mu-list-item-title>选择框</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="true" button to="/controls">
        <mu-list-item-content>
          <mu-list-item-title>选择控件</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="true" button to="/textfield">
        <mu-list-item-content>
          <mu-list-item-title>文本输入框</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="true" button to="/list">
        <mu-list-item-content>
          <mu-list-item-title>列表</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="true" button to="/pagination">
        <mu-list-item-content>
          <mu-list-item-title>分页</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="true" button to="/progress">
        <mu-list-item-content>
          <mu-list-item-title>进度条</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="true" button to="/toast">
        <mu-list-item-content>
          <mu-list-item-title>消息</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="true" button to="/stepper">
        <mu-list-item-content>
          <mu-list-item-title>步骤条</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="true" button to="/tabs">
        <mu-list-item-content>
          <mu-list-item-title>选项卡</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="true" button to="/pull">
        <mu-list-item-content>
          <mu-list-item-title>下拉刷新+上拉加载</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="true" button to="/axiosM">
        <mu-list-item-content>
          <mu-list-item-title>axios请求</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="true" button to="/fileUpload">
        <mu-list-item-content>
          <mu-list-item-title>图片上传</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="true" button to="/grid">
        <mu-list-item-content>
          <mu-list-item-title>栅格系统</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      msg: '组件列表'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
