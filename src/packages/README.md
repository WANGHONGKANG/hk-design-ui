<!-- Created by WANGHONGKANG on 2021/6/27. -->
# Hk Design UI

Hk Design UI是一个vue3的组件库，基于 Vue3 + Typescript + Vite + pnpm。

常用基础组件，代码简洁，满足常见项目，组件类名可自定义，不依懒第三方库，全程无红线语法报错，便于二次开发，无缝衔接项目

主题可调，只需10分钟即可定义一套全新的组件样式

用于学习研究，欢迎交流

## 全局引入（推荐）

```shell
pnpm install hk-design-ui
```


```ts
// main.ts
import HkDesignUI from 'hk-design-ui'
import 'hk-design-ui/build/dist/style.css'  //　引入组件样式
import 'hk-design-ui/build/iconfont/iconfont.css'　//　引入iconfont图标样式
app.use(HkDesignUI)
```

若不使用npm安装时，可将资源包复制到项目，如 src 目录下，然后在入口页面 main.ts 中如下配置：

```javascript
import Component from "../packages/index";
// 全局注册基础组件
Vue.use(Component);
```

## 按需引用

在当前页面 import 所需组件

```javascript
import Button from "../packages/button.vue";
```

## 可打包

可使用命令`npm run build:lib`将组件资源打包成一个js文件
