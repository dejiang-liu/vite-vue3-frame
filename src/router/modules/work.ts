import { RouteRecordRaw } from "vue-router";
import Layout from '@/layout/basic-layout.vue';
import { IrouterItem } from '../index'

const workRouter: Array<RouteRecordRaw> = [
  {
    path: '/work',
    component: Layout,
    name: 'work',
    redirect: '/work/index',
    meta: {
      title: '工作区',
      icon: 'icon-wenjianjia'
    },
    children: [
      {
        path: 'index',
        name: 'work-index',
        meta: {
          title: '工作区-首页',
          icon: 'icon-duoxiangxiangmu'
        },
        component: () => import('@/views/work/index.vue')
      },
      {
        path: 'record',
        name: 'work-record',
        meta: {
          title: '工作区-记录',
          icon: 'icon-dingweizuobiao'
        },
        component: () => import('@/views/work/record.vue')
      },
      {
        path: 'report',
        name: 'work-report',
        meta: {
          title: '工作区-报告',
          icon: 'icon-wenjianzengjia1'
        },
        component: () => import('@/views/work/report.vue')
      }
    ]
  }
]
export const workArr: Array<IrouterItem> = [
  {
    path: '/work',
    meta: {
      title: '工作区',
      icon: 'icon-wenjianjia'
    },
    children: [
      {
        path: 'index',
        meta: {
          title: '工作区-首页',
          icon: 'icon-duoxiangxiangmu'
        },
      },
      {
        path: 'record',
        meta: {
          title: '工作区-记录',
          icon: 'icon-dingweizuobiao'
        },
      },
      {
        path: 'report',
        meta: {
          title: '工作区-报告',
          icon: 'icon-wenjianzengjia1'
        },
      }
    ]
  }
]

export default workRouter;