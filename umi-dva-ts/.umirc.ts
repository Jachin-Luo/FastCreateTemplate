import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    {
      path: "/",
      component: "index"
    },
    {
      path: "/docs",
      component: "docs",
      //配置二级路由
      routes: []
    },
    {
      path: '*',
      component: 'notfound'
    }
  ],
  plugins: [
    '@umijs/plugins/dist/model',
    '@umijs/plugins/dist/dva',
  ],
  dva: {},
  npmClient: 'yarn',
});
