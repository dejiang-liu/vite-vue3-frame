import { RouteRecordRaw } from "vue-router";
import Layout from '@/layout/basic-layout.vue';
import { IrouterItem } from '../index'

const analysisRouter: Array<RouteRecordRaw> = [
  {
    path: '/analysis',
    name: 'analysis',
    component: Layout,
    redirect: '/analysis/index',
    meta: {
      title: '数据分析区',
      icon: 'icon-renwujilu'
    },
    children: [
      {
        path: 'index',
        name: 'analysis-index',
        meta: {
          title: '数据分析-首页',
          icon: 'icon-renwuguanli'
        },
        component: () => import('@/views/analysis/index.vue')
      },
      {
        path: 'bar',
        name: 'analysis-bar',
        meta: {
          title: '数据分析-柱状图',
          icon: 'icon-renwubaocuo'
        },
        component: () => import('@/views/analysis/bar.vue')
      },
      {
        path: 'line',
        name: 'analysis-line',
        meta: {
          title: '数据分析-折线图',
          icon: 'icon-renwuchenggong'
        },
        component: () => import('@/views/analysis/line.vue')
      },
    ]
  }
]

export const analysisArr: Array<IrouterItem> = [
  {
    path: '/analysis',
    meta: {
      title: '数据分析区',
      icon: 'icon-renwujilu'
    },
    children: [
      {
        path: 'index',
        meta: {
          title: '数据分析-首页',
          icon: 'icon-renwuguanli'
        },
      },
      {
        path: 'bar',
        meta: {
          title: '数据分析-柱状图',
          icon: 'icon-renwubaocuo'
        },
      },
      {
        path: 'line',
        meta: {
          title: '数据分析-折线图',
          icon: 'icon-renwuchenggong'
        },
      }
    ]
  }
]

export default analysisRouter;