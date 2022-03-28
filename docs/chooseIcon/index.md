## 图标选择器 

点击按钮，显示弹框，点击图标复制图标代码

### 基本用法

<div style="margin:25px 0;border:1px solid #eee;padding:15px">
<m-choose-icon title='选择图标' v-model:visible='visible'>选择图标</m-choose-icon>
</div>


### 代码示例

<script setup>
  import {ref} from 'vue'

  let visible=ref(false)
</script>

```vue
<m-choose-icon title='选择图标' v-model:visible='visible'>选择图标</<m-choose-icon>

<script setup>
  import {ref} from 'vue'

  let visible=ref(false)
</script>
```