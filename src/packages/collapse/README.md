<!-- Created by WANGHONGKANG on 2021.6 -->

# Collapse 折叠面板

### 基础用法

可同时展开多个面板，面板之间不影响

```vue demo
<template>
  <hk-collapse>
    <hk-collapse-panel>
      标题1
      <template #content>
        <p
          >与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</p
        >
        <p
          >在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p
        ></template
      >
    </hk-collapse-panel>
    <hk-collapse-panel>
      标题1
      <template #content>
        <p
          >与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</p
        >
        <p
          >在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p
        ></template
      >
    </hk-collapse-panel>
  </hk-collapse>
</template>

```

### 手风琴效果

每次只能展开一个面板`accordion="true"`

```vue demo
<template>
  <hk-collapse :accordion="true">
    <hk-collapse-panel>
      标题1
      <template #content>
        <p
          >与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</p
        >
        <p
          >在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p
        >
      </template>
    </hk-collapse-panel>
    <hk-collapse-panel>
      标题2
      <template #content>
        <p>简化流程：设计简洁直观的操作流程；</p>
        <p>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</p>
        <p
          >帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</p
        >
      </template>
    </hk-collapse-panel>
    <hk-collapse-panel>
      标题3
      <template #content>
        <p
          >与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</p
        >
        <p
          >在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p
        >
      </template>
    </hk-collapse-panel>
    <hk-collapse-panel>
      标题4
      <template #content>
        <p>简化流程：设计简洁直观的操作流程；</p>
        <p>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</p>
        <p
          >帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</p
        >
      </template>
    </hk-collapse-panel>
  </hk-collapse>
</template>


````

### 指定展开项

通过添加`v-model`和`name`展开指定项

```vue demo
<template>
  <hk-collapse v-model="value1">
    <hk-collapse-panel name="pane1">
      默认展开的项
      <template #content>
        <p
          >与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</p
        >
        <p
          >在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p
        ></template
      >
    </hk-collapse-panel>
    <hk-collapse-panel name="pane2">
      标题2
      <template #content>
        <p>简化流程：设计简洁直观的操作流程；</p>
        <p>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</p>
        <p
          >帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</p
        >
      </template>
    </hk-collapse-panel>
  </hk-collapse>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const value1 = ref(['pane1'])
</script>

```

### 自定义触发事件

通过添加`trigger`插槽，只有点击`trigger`标签才能触发事件

```vue demo
<template>
  <hk-collapse>
    <hk-collapse-panel>
      标题1
      <template #trigger>
        <i class="icon-arrow"></i>
      </template>
      <template #content>
        <p
          >与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</p
        >
        <p
          >在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p
        ></template
      >
    </hk-collapse-panel>
    <hk-collapse-panel>
      标题2
      <template #trigger>
        <i class="icon-arrow"></i>
      </template>
      <template #content>
        <p>简化流程：设计简洁直观的操作流程；</p>
        <p>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</p>
        <p
          >帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</p
        >
      </template>
    </hk-collapse-panel>
  </hk-collapse>
</template>

```

### 事件

`change`事件

```vue demo
<template>
  <hk-collapse @change="change">
    <hk-collapse-panel>
      标题1
      <template #content>
        <p
          >与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</p
        >
        <p
          >在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p
        ></template
      >
    </hk-collapse-panel>
    <hk-collapse-panel>
      标题2
      <template #content>
        <p>简化流程：设计简洁直观的操作流程；</p>
        <p>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</p>
        <p
          >帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</p
        >
      </template>
    </hk-collapse-panel>
  </hk-collapse>
</template>
<script lang="ts" setup>
  const change = () => {
    console.log('change')
  }
</script>

```

## API

### Collapse

|参数|类型|说明|
|----------|--------------|--------|
|v-model | Array |当前激活的面板的，对应panel里的name，可不填|
|accordion | boolean/false |风琴效果，开启后每次只能展开一个面板|

### Collapse Event

|参数|说明|
|----------|--------------|
|change |点击切换事件|

### Panel

|参数|类型|说明|
|----------|--------------|--------|
|name | String |对应Collapse里的value，可不填|

### Panel Slot

|参数|说明|
|----------|--------------|
|trigger | 事件触发标签插槽|
|content | 内容|
