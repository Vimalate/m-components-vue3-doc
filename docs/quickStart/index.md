## 快速上手

组件库基于 vue3、element-plus，使用前请确保已经安装 element-plus

安装 

```js
cnpm i -S element-plus @element-plus/icons-vue vue3-m-components
```

使用指南

1. 全局引入
在main.ts 中添加
```js

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import mUI from 'vue3-m-components'
import 'vue3-m-components/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.use(mUI)
app.mount('#app')
```
2. 按需引入
  
```js
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import chooseIcon from 'vue3-m-components/chooseIcon'
import 'vue3-m-components/chooseIcon/style.css' //如需要样式的
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.use(chooseIcon)
app.mount('#app')