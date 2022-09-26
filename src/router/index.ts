import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import workRoutes,{workArr} from './modules/work'
import analysisRouter, {analysisArr} from './modules/analysis'

export const modulesRouter = [...workRoutes, ...analysisRouter];
export const routerArr = [...workArr, ...analysisArr];
export interface IrouterItem {
  path: string;
  meta: {
    title: string;
    icon: string;
  };
  children?: Array<IrouterItem>;
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/work/index',
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录页面'
    },
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/home.vue')
  },
  {
    path: '/404',
    name: 'Page404',
    component: () =>
      import(/* webpackChunkName: "404" */ '@/views/404/index.vue'),
    meta: { hidden: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...modulesRouter]
})

export default router;