# Tag 标签

### 基本使用

由`type`属性来选择`tag`的类型，支持 `default`、`success`、`warning`、`danger`类型，默认为 `default`。

```vue demo
<template>
  <div>
    <hk-tag>标签一</hk-tag>
    <hk-tag type="success">标签二</hk-tag>
    <hk-tag type="warning">标签三</hk-tag>
    <hk-tag type="danger">标签四</hk-tag>
    <hk-tag type="danger" color="#fff" bgColor="#c642e7" borderColor="#c642e7">自定样式</hk-tag>
  </div>
</template>
```

### 不同尺寸

`Tag` 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

```vue demo
<template>
  <div>
    <hk-tag size="large">默认标签</hk-tag>
    <hk-tag size="default">中等标签</hk-tag>
    <hk-tag size="small">小型标签</hk-tag>
    <hk-tag size="mini">超小标签</hk-tag>
  </div>
</template>
```

### 可移除标签

设置`closable`属性可以定义一个标签是否可移除

```vue demo
<template>
  <div>
    <hk-tag :closable="true">标签一</hk-tag>
    <hk-tag :closable="true" type="success">标签二</hk-tag>
    <hk-tag :closable="true" type="warning">标签三</hk-tag>
    <hk-tag :closable="true" type="danger">标签3</hk-tag>
  </div>
</template>
```

### 动态编辑标签

```vue demo
<template>
  <div>
    <hk-tag
      v-for="(item, index) in list"
      :key="index"
      :closable="true"
      @close="closeClick(index)"
      >{{ item }}</hk-tag
    >
    <hk-input v-model="newTag" size="small" @keyup.enter="handleInputConfirm" />
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const list = ref(['标签一', '标签二', '标签三'])
  const newTag = ref()
  const closeClick = (index: number) => {
    list.value.splice(index, 1)
  }
  const handleInputConfirm = () => {
    if (newTag.value) {
      list.value.push(newTag.value)
      newTag.value = ''
    }
  }
</script>

```

## API

### Tag Props

| 参数        | 类型          | 说明                                 |
| ----------- | ------------- | ------------------------------------ |
| type        | string        | 类型，success/default/warning/danger |
| closable    | boolean/false | 是否可关闭                           |
| color       | string        | 字体颜色                             |
| bgColor     | string        | 背景色                               |
| borderColor | string        | 边框颜色                             |
| size        | string        | 尺寸，large / default/small / mini   |
