<!-- Created by WANGHONGKANG on 2021.6 0006. -->

# Breadcrumb 面包屑

### 用法

```vue demo
<template>
  <hk-breadcrumb :data="data" separator=">" />
</template>
<script lang="ts" setup>
  import { ref } from 'vue'

  const data = ref([
    { title: '首页', href: '/' },
    { title: '组件演示1', href: '/' },
    { title: '组件演示2', href: '/breadcrumb' },
    { title: '面包屑' }
  ])
</script>

```

## API

### BackTop

|参数|类型|说明|
|----------|--------------|--------|
|data           | Array          |数据|
|separator      | String         |分隔字符|

### data

|参数|类型|说明|
|----------|--------------|--------|
|title           | String          |显示的名称|
|href            | String          |链接地址|
