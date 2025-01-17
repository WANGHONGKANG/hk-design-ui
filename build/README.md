# hk-design-ui

Vue3 + Typescript + Vite + pnpm，用于学习研究，欢迎交流

**特点**

- 不使用第三方插件或库，保证代码简洁、轻量、易上手
- 提供了一系列丰富、可复用的UI组件
- 提供丰富的插槽和事件接口，方便进行二次开发

## 演示地址 Demo

https://WANGHONGKANG.github.io/hk-design-ui/

## 安装使用

```shell
pnpm install hk-design-ui
```

```ts
// main.ts
import HkDesignUI from 'hk-design-ui'
import 'hk-design-ui/build/dist/style.css'  //　引入组件栏目
import 'hk-design-ui/build/iconfont/iconfont.css'　//　引入iconfont图
app.use(HkDesignUI)
```

若不使用npm安装，可按下面操作按需复制相应组件到你项目：

1.将`/src/packages`复制到你的项目目录下，然后在`main.js`中引入并注册即可;

2.复制`/public/static/iconfont`到项目下，在`index.html`引入组件所需的字体图标；

```javascript
import HKUI from './packages'
app.use(HKUI)
```

## 组件 UI 库说明

组件库包含了 AutoForm 自动表单、BackTop 返回顶部、Breadcrumb 面包屑、 Button 按钮、Cascader 级联选择器、Checkbox 多选框、Collapse 折叠面板、ColorPicker
颜色选择器、DataPicker 时间选择器、Dialog 弹层对话框、Alert 弹框、Echarts 图形图表、Form 表单、Input 输入框、Lazy 图片延时加载、Loading 加载等待、Menu 菜单、Pagination
分页、Progress 进度条、Radio 单选框、Select 选择器、Steps 步骤条、Swiper 图片轮播、Switch 开关、Table 表格、Tabs 标签页、Textarea 文本框、Tooltip 提示、Transfer
穿梭框、Tree 树形、Upload 上传、Drawer 抽屉等常用组件

### 开发环境
| 名称   | 版本      |
|------|---------|
| node | 16.15.x |
| pnpm | 8.6.x   |
| vite | 4.3.x   |
| vue  | 3.3.x   |


```shell
pnpm install
pnpm dev
```
