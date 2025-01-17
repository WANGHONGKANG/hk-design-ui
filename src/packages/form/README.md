<!-- Created by WANGHONGKANG on 2021/6/18 0018. -->

# Form 表单

### 基本使用

```vue demo
<template>
  <div>
    <hk-form v-model="formValue" :rules="formRules" ref="formEl">
      <hk-form-item label="userName" prop="userName">
        <hk-input v-model="formValue.userName" placeholder="请输入用户名" />
      </hk-form-item>
      <hk-form-item label="password" prop="password">
        <hk-input v-model="formValue.password" placeholder="请输入密码" />
      </hk-form-item>
      <hk-form-item label="password2" prop="password2">
        <hk-input v-model="formValue.password2" placeholder="请再次输入密码" />
      </hk-form-item>
    </hk-form>
    <hk-button @click="submit" type="primary">submit</hk-button>
    <hk-button @click="resetForm">reset</hk-button>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'

  const formValue = ref({
    password: '',
    password2: '',
    userName: ''
  })
  const formRules = {
    password: [
      { type: 'required', msg: '密码不能为空' },
      { type: 'minLength', len: 6, msg: '密码不能小于6位' }
    ],
    password2: [
      { type: 'required', msg: '密码2不能为空' },
      {
        type: 'fn',
        msg: '两次输入的密码不一致',
        validator: (val) => {
          return val === formValue.value.password
        }
      }
    ],
    userName: [{ type: 'required', msg: '用户名不能为空' }]
  }
  const formEl = ref()
  // 重置
  const resetForm = () => {
    formEl.value.resetForm()
  }
  // 表单提交
  const submit = () => {
    formEl.value
      .validate()
      .then((res: string[]) => {
        console.log(res)
      })
      .catch((res: string[]) => {
        console.log(res)
      })
  }
</script>


```

### 表单校验

```vue demo
<template>
  <div>
    <hk-form ref="formEl" v-model="formValue" :rules="formRules" size="mini">
      <hk-form-item label="用户名" prop="userName">
        <hk-input v-model="formValue.userName" placeholder="请输入用户名" />
      </hk-form-item>
      <hk-form-item
        label="密码"
        prop="password"
        v-model="formValue.password"
        :data="{ placeholder: '请输入密码' }"
        type="password"
      />
      <hk-form-item prop="mobile">
        <template #label>手机号</template>
        <hk-input v-model="formValue.mobile" placeholder="请输入手机号" />
      </hk-form-item>
      <hk-form-item prop="mail" label="邮箱">
        <hk-input v-model="formValue.mail" placeholder="请输入邮箱地址" />
      </hk-form-item>
      <hk-form-item
        prop="digits"
        label="digits"
        type="input"
        v-model="formValue.digits"
      />
      <hk-form-item prop="number" label="number">
        <hk-input v-model="formValue.number" />
      </hk-form-item>
      <hk-form-item prop="tel" label="tel">
        <hk-input v-model="formValue.tel" placeholder="请输入电话号码" />
      </hk-form-item>
      <hk-form-item label="城市">
        <hk-form-item prop="city">
          <hk-input v-model="formValue.city" />
        </hk-form-item>
        <hk-form-item prop="area" v-model="formValue.area" type="input" />
      </hk-form-item>
      <hk-form-item label="地区选择" verify="required">
        <hk-cascader
          v-model="formValue.cascader"
          placeholder="请选择"
          :options="[
            {
              label: '广东',
              value: '1',
              children: [{ label: '广州', value: '2' }]
            }
          ]"
        />
      </hk-form-item>
      <hk-form-item label="radio" prop="radio">
        <hk-radio-group v-model="formValue.radio" :options="options" />
      </hk-form-item>
      <hk-form-item label="checkbox" prop="checkboxGroup">
        <hk-checkbox-group
          v-model="formValue.checkboxGroup"
          :options="options"
        />
      </hk-form-item>
      <hk-form-item prop="select" label="select">
        <hk-select
          v-model="formValue.select"
          :options="options"
          :clear="true"
          placeholder="请选择"
        />
      </hk-form-item>
      <hk-form-item label="textarea" prop="textarea">
        <hk-textarea v-model="formValue.textarea" />
      </hk-form-item>
      <hk-form-item label="datePicker" prop="datePicker">
        <hk-date-picker v-model="formValue.datePicker" placeholder="请选择" />
      </hk-form-item>
      <hk-form-item label="switch">
        <hk-switch v-model="formValue.switch" />
      </hk-form-item>
      <hk-form-item label="timePicker" prop="timePicker">
        <hk-time-picker v-model="formValue.timePicker" />
      </hk-form-item>
      <hk-form-item label="timeSelect" prop="timeSelect">
        <hk-time-select v-model="formValue.timeSelect" />
      </hk-form-item>
      <hk-form-item prop="checkbox">
        <hk-checkbox v-model="formValue.checkbox">我已阅读并同意……</hk-checkbox>
      </hk-form-item>
    </hk-form>
    <hk-button type="primary" @click="submit">提交</hk-button>
    <hk-button type="primary" @click="submit2">仅对用户名密码验证</hk-button>
    <hk-button @click="resetForm">重置表单</hk-button>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'

  const formValue = ref({
    userName: '',
    password: '',
    mobile: '',
    mail: '',
    digits: '',
    number: '100.00',
    tel: '',
    city: '',
    area: '',
    cascader: [],
    select: '',
    checkbox: false,
    checkboxGroup: [],
    switch: false,
    textarea: '',
    radio: '',
    datePicker: '',
    timePicker: '',
    timeSelect: ''
  })
  const options = [
    { label: '选项1', value: '1' },
    { label: '选项2', value: '2' },
    { label: '选项3', value: '3' }
  ]
  const formRules = {
    password: [
      { type: 'required', msg: '密码不能为空' },
      { type: 'minLength', len: 6, msg: '密码不能小于6位' }
    ],
    password2: [
      { type: 'required', msg: '密码2不能为空' },
      {
        type: 'fn',
        msg: '两次输入的密码不一致',
        validator: (val: string) => {
          return val === formValue.value.password
        }
      }
    ],
    userName: [{ type: 'required', msg: '用户名不能为空' }],
    mobile: [
      { type: 'required', msg: '请输入手机号' },
      { type: 'mobile', msg: '手机号格式不正确' }
    ],
    mail: [{ type: 'mail', msg: '邮箱格式不正确' }],
    digits: [{ type: 'digits', msg: '只能输入正整数' }],
    number: [{ type: 'number', msg: '只能输入数字' }],
    tel: [{ type: 'tel', msg: '电话号码格式不正确' }],
    city: [{ type: 'required', msg: '城市不能为空' }],
    area: [{ type: 'required', msg: '地区不能为空' }],
    select: [{ type: 'required', msg: '下拉不能为空' }],
    checkbox: [{ type: 'required', msg: '必须同意协议' }],
    checkboxGroup: [{ type: 'required', msg: '不能为空' }],
    textarea: [{ type: 'required', msg: 'textarea不能为空' }],
    radio: [{ type: 'required', msg: 'radio不能为空' }],
    datePicker: [{ type: 'required', msg: '请选择日期' }],
    timePicker: [{ type: 'required', msg: '请选择时间' }],
    timeSelect: [{ type: 'required', msg: '请选择时间' }]
  }
  const formEl = ref()
  // 重置
  const resetForm = () => {
    formEl.value.resetForm()
  }
  // 表单提交
  const submit = () => {
    formEl.value
      .validate()
      .then((res: string[]) => {
        console.log(res)
      })
      .catch((res: string[]) => {
        console.log(res)
      })
  }
  const submit2 = () => {
    formEl.value
      .validate(['userName', 'password'])
      .then((res: string[]) => {
        alert('验证通过')
        console.log(res)
      })
      .catch((res: string[]) => {
        alert(res)
        console.log(res)
      })
  }
</script>


```

## API

### Form Props

| 参数          | 类型            | 说明                                         |
|-------------|---------------|--------------------------------------------|
| v-model     | object        | 表单值                                        |
| rules       | object        | 校验规则                                       |
| showMessage | boolean/true  | 显示错误提示                                     |
| trigger     | string/change | 表单控件校验触发类型，change和blur两种                   |
| labelWidth  | string        | label的宽度                                   |
| required    | boolean/true  | 是否根据验证规则自动生成必填样式名                          |
| size        | string        | 用于控制该表单内组件的尺寸，medium / small / mini        |
| disabled    | boolean/true  | 表单禁用状态，影响子级formItem,button及formItem下所有表单控件 |

### Form Methods

| 参数            | 说明                                               |
|---------------|--------------------------------------------------|
| validate      | 对单个表单项进行校验的方法，Promise返回验证结果，可接受一个参数用于对指定项校验      |
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 组成的数组，如不传则移除整个表单的校验结果 |
| resetForm     | 重置表单                                             |
| setValue      | 使用resetForm功能时，当表单数据发生改变，需使用setValue设置           |
