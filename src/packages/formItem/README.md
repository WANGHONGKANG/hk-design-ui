<!-- Created by WANGHONGKANG on 2021/6/18 0018. -->

# FormItem 表单集合

强大的校验功能，使用简单快捷

### 基本使用

```vue demo
<template>
  <hk-form-item label="title">
    <hk-input v-model="value" />
  </hk-form-item>
</template>
<script setup>
  import { ref } from 'vue'

  const value = ref('')
</script>

```

### 校验

使用`rules`规则校验

```vue demo
<template>
  <hk-form-item label="title" :rules="rules">
    <hk-input v-model="value" placeholder="输入时触发" />
  </hk-form-item>
  <hk-form-item label="title" :rules="rules" trigger="blur">
    <hk-input v-model="value2" placeholder="失去焦点触发" />
  </hk-form-item>
</template>
<script>
import {ref} from 'vue'

export default {
  setup() {
    const value = ref('')
    const value2 = ref('')
    const rules = ref([
      {type: 'tips', msg: '获取焦点提示信息'},
      {type: 'required', msg: '必填项'},
      {type: 'number', msg: '只能输入数字'}
    ])
    return {
      value,
      value2,
      rules
    }
  }
}
</script>

```

### 快速校验

对于大量的表单验证不需要精确提示时，如验证为空时统一提示为必填字段，可通过设置`verify`，多个用逗号隔开，也可同时和`rules`规则校验一起使用

```vue demo
<template>
  <hk-form-item label="title" verify="mobile">
    <hk-input v-model="value" placeholder="手机号验证" />
  </hk-form-item>
  <hk-form-item label="title" :rules="rules" verify="mobile">
    <hk-input v-model="value2" placeholder="手机号和必填验证" />
  </hk-form-item>
</template>
<script setup>
  import { ref } from 'vue'

  const value = ref('')
  const value2 = ref('')
  const rules = ref([
    { type: 'tips', msg: '获取焦点提示信息' },
    { type: 'required', msg: '必填项' },
    { type: 'number', msg: '只能输入数字' }
  ])
</script>



```

### 自定义验证规则

```vue demo
<template>
  <hk-form-item label="age" :rules="rules" ref="formItemEl">
    <hk-input v-model="value" placeholder="请输入年龄" />
  </hk-form-item>
  <hk-button @click="submit">submit</hk-button>
</template>
<script setup>
  import { ref } from 'vue'

  const formItemEl = ref()
  const value = ref('')
  const rules = ref([
    { type: 'required', msg: '年龄不能为空' },
    {
      type: 'rule',
      msg: '年龄必须大于1岁，且不能超过120岁',
      rule: '/^(?:[1-9][0-9]?|1[01][0-9]|120)$/'
    }
  ])
  const submit = () => {
    formItemEl.value
      .validate()
      .then((res) => {
        console.log(res)
      })
      .catch((res) => {
        console.log(res)
      })
  }
</script>

```

### 回调验证

```vue demo
<template>
  <hk-form-item label="password" verify="required">
    <hk-input v-model="value" placeholder="请输入密码" />
  </hk-form-item>
  <hk-form-item label="password" :rules="rules">
    <hk-input v-model="value2" placeholder="请再次输入密码" />
  </hk-form-item>
</template>
<script setup>
  import { ref } from 'vue'

  const value = ref('')
  const value2 = ref('')
  const rules = ref([
    { type: 'required', msg: '密码不能为空' },
    {
      type: 'fn',
      msg: '两次输入的密码不一致',
      validator: (val) => {
        return val === value.value
      }
    }
  ])
</script>

```

### 快速输入常见组件类型

支持类型 `'input'、'radio'、'checkbox'、'datePicker'、'select'、'switch'、'textarea'、'timeSelect'、'timePicker'`

```vue demo
<template>
  <div>
    <hk-form-item label="input" type="input" :data="inputData" />
    <hk-form-item label="select" type="select" :data="selectData" />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const inputData = ref({ value: 'abc' })
  const selectData = ref({ value: '112', options: [{ label: '选项1' }], placeholder:'请选择' })
</script>

```

### 可单独使用`Field`

可使用data.value对控件设置值，也可以是v-model(优先)

```vue demo
<template>
  <div>
    <hk-field type="input" :data="inputData" v-model="value1" />
    <br><br>
    <hk-field type="select" :data="selectData" />
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const value1 = ref()
  const inputData = ref({ value: 'abc' })
  const selectData = ref({
    value: '112',
    options: [{ label: '选项1' }],
    placeholder: '请选择'
  })
  // 模拟延时设值
  setTimeout(() => {
    value1.value = '123'
  }, 1000)
</script>

```

## API

### FormItem Props

| 参数           | 类型            | 说明               |
|--------------|---------------|------------------|
| label        | string        | 显示的标签名           |
| labelVisible | boolean/false | 隐藏label          |
| prop         | string        | 表单校验时关联表单的校验规则   |
| required     | boolean/true  | 是否根据验证规则自动生成必填样式名 |
| verify       | string        | 快速验证，支持required, mobile, tel, mail, digits, number,phone 多个用逗号隔开 |
| rules        | array         | 校验规则             |
| showMessage  | boolean/true  | 显示错误提示，在form使用时，优先使用form的设置 |
| trigger      | string/change | change和blur两种，在form使用时，优先使用form的设置 |
| labelWidth   | string        | label的宽度         |
| size         | string        | 用于控制该表单内组件的尺寸,支持 `large`、`normal`、`small`、`mini` 四种尺寸，默认为 `normal` |
| error        | string        | 表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息 |
| type         | string        | 可快速输出控件类型，可选`input、radio、checkbox、datePicker、select、switch、textarea、timeSelect、timePicker` |
| data         | Object        | 仅在type不为空时，对应当前组件的props所有参数 |
| v-model      | any           | 仅在type不为空时，当前控件的值|

### FormItem Rules 验证规则

|类型|说明|
|----------|--------------|
|required       |为空|
|maxLength      |最大字符|
|minLength      |最小字符|
|mobile         |手机号格式|
|tel            |固话|
|phone          |固话或手机|
|mail           |邮箱格式|
|digits         |正整数|
|number         |数字|
|tips           |获得焦点且值为空时显示输入提示|
|rule           |自定义验证规则|
|fn             |回调验证|

### FormItem Methods

|参数| 类型| 说明                          |
|----------|------|-----------------------------|
|validate       | | 对单个表单项进行校验的方法，Promise返回验证结果 |
|clearTips      | | 用于清空验证提示信息，恢复初始状态           |

### Field Props

| 参数      | 类型     | 说明                                        |
|---------|--------|-------------------------------------------|
| type    | string | 可快速输出控件类型，可选`input、radio、checkbox、datePicker、select、switch、textarea、timeSelect、timePicker` |
| data    | Object | 对应当前组件的props所有参数|
| v-model | any    | 当前控件的值                                    |
