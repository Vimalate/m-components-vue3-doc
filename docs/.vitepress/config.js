// 配置
module.exports = {
  title: "基于 element-plus、vue3、vite 二次封装的组件",
  // 部署的基础路径
  base: "/",
  head: [],
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "github站点", link: "/", target: "_blank" },
    ],
    // 侧边栏
    sidebar: [
      {
        text: "介绍",
        link: "/intro/",
      },
      {
        text: "快速上手",
        link: "/quickStart/",
      },
      {
        text: "图标选择器",
        link: "/chooseIcon/",
      },
      {
        text: "导航菜单",
        link: "/menu/",
      },
      {
        text: "省市区选择",
        link: "/chooseArea/",
      },
      {
        text: "趋势标记",
        link: "/trend/",
      },
      {
        text: "城市选择",
        link: "/chooseCity/",
      },
      {
        text: "进度条",
        link: "/progress/",
      },
      {
        text: "日历",
        link: "/calendar/",
      },
      {
        text: "时间选择",
        link: "/chooseTime/",
      },
      {
        text: "表单",
        link: "/form/",
      },
      {
        text: "弹出框表单",
        link: "/modalForm/",
      },
      {
        text: "表格",
        link: "/table/",
      },
    ],
  },
};
