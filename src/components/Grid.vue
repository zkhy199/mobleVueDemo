<template>
  <div>
    <mu-container class="demo-container is-stripe">
      <p>基础栅格</p>
      <mu-row>
        <mu-col span="12"><div class="grid-cell"></div></mu-col>
      </mu-row>
      <mu-row>
        <mu-col span="6"><div class="grid-cell"></div></mu-col>
        <mu-col span="6"><div class="grid-cell"></div></mu-col>
      </mu-row>
      <mu-row>
        <mu-col span="4"><div class="grid-cell"></div></mu-col>
        <mu-col span="4"><div class="grid-cell"></div></mu-col>
        <mu-col span="4"><div class="grid-cell"></div></mu-col>
      </mu-row>
      <mu-row>
        <mu-col span="3"><div class="grid-cell"></div></mu-col>
        <mu-col span="3"><div class="grid-cell"></div></mu-col>
        <mu-col span="3"><div class="grid-cell"></div></mu-col>
        <mu-col span="3"><div class="grid-cell"></div></mu-col>
      </mu-row>
      <mu-row>
        <mu-col span="2"><div class="grid-cell"></div></mu-col>
        <mu-col span="2"><div class="grid-cell"></div></mu-col>
        <mu-col span="2"><div class="grid-cell"></div></mu-col>
        <mu-col span="2"><div class="grid-cell"></div></mu-col>
        <mu-col span="2"><div class="grid-cell"></div></mu-col>
        <mu-col span="2"><div class="grid-cell"></div></mu-col>
      </mu-row>
    </mu-container>
    <mu-container class="demo-container">
      <p>有间隔的栅格（通过设置 gutter 实现）</p>
      <mu-row gutter>
        <mu-col span="6"><div class="grid-cell"></div></mu-col>
        <mu-col span="6"><div class="grid-cell"></div></mu-col>
      </mu-row>
      <mu-row gutter>
        <mu-col span="4"><div class="grid-cell"></div></mu-col>
        <mu-col span="4"><div class="grid-cell"></div></mu-col>
        <mu-col span="4"><div class="grid-cell"></div></mu-col>
      </mu-row>
      <mu-row gutter>
        <mu-col span="3"><div class="grid-cell"></div></mu-col>
        <mu-col span="3"><div class="grid-cell"></div></mu-col>
        <mu-col span="3"><div class="grid-cell"></div></mu-col>
        <mu-col span="3"><div class="grid-cell"></div></mu-col>
      </mu-row>
    </mu-container>
    <mu-container class="demo-container">
      <p>带偏移的栅格（设置 col 组件的 offset 属性可以指定偏移的格数）</p>
      <mu-row gutter>
        <mu-col span="3"><div class="grid-cell"></div></mu-col>
        <mu-col span="3" offset="3"><div class="grid-cell"></div></mu-col>
      </mu-row>
      <mu-row gutter>
        <mu-col span="3" offset="3"><div class="grid-cell"></div></mu-col>
        <mu-col span="3" offset="3"><div class="grid-cell"></div></mu-col>
      </mu-row>
      <mu-row gutter>
        <mu-col span="6" offset="3"><div class="grid-cell"></div></mu-col>
      </mu-row>
    </mu-container>
    <mu-container class="demo-container is-stripe">
      <p>响应式布局（预设了四个响应尺寸：sm、md、lg 和 xl）</p>
      <mu-row gutter>
        <mu-col span="8" sm="6" md="4" lg="3" xl="1"><div class="grid-cell"></div></mu-col>
        <mu-col span="4" sm="6" md="8" lg="9" xl="11"><div class="grid-cell"></div></mu-col>
        <mu-col span="4" sm="6" md="8" lg="9" xl="11"><div class="grid-cell"></div></mu-col>
        <mu-col span="8" sm="6" md="4" lg="3" xl="1"><div class="grid-cell"></div></mu-col>
      </mu-row>
    </mu-container>
    <p style="margin: 40px 0">更多属性及参数前往<a href="https://muse-ui.org/#/zh-CN/grid" target="_blank">官网</a>查看</p>
  </div>
</template>

<style lang="less" scoped>
.demo-container {
  .row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .grid-cell {
    border-radius: 4px;
    height: 36px;
    background: rgba(200, 200, 200, 0.8);
  }
}
.demo-container.is-stripe .col:nth-child(2n) .grid-cell{
  background: rgba(0, 0, 0, 0.54);
}
</style>