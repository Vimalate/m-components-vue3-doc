import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import mUI from 'vue3-m-components'
import 'vue3-m-components/style.css'

export default{
  ...DefaultTheme,
  enhanceApp({app}){
    app.use(ElementPlus)
    app.use(mUI)
  }
}