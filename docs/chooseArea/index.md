## 省市区选择

### 按需引入

```js
// main.ts
import chooseArea from 'vue3-m-components/chooseArea'

// ...
app.use(chooseArea)
```

### 基本用法

<div style="margin:25px 0;border:1px solid #eee;padding:15px">
<m-choose-area></m-choose-area>
</div>


### 代码示例

```vue
<m-choose-area></m-choose-area>
```

### api

#### 事件
| 事件名 | 说明             | 参数                    |
| :----- | ---------------- | ----------------------- |
| change | 选择三级之后触发 | val:areaInfo,省市区数据 |

#### areaInfo数据格式
| key      | 说明 | 类型      |
| :------- | ---- | --------- |
| province | 省   | val:value |
| city     | 市   | val:value |
| area     | 区   | val:value |

#### value数据格式
| key  | 说明 | 类型   |
| :--- | ---- | ------ |
| name | 名字 | string |
| code | 编码 | number |