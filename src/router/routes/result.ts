import { RouteItem } from '../index';
import { lazy } from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
const resultRoutes: RouteItem[] = [
  {
    path: '/result',
    sort: 2,
    Component: lazy(() => import('@/layout/index')),
    meta: {
      title: '结果页',
      Icon: CheckCircleOutlined,
    },
    children: [
      {
        path: '/500',
        Component: lazy(() => import('@/pages/Dashboard')),
        meta: {
          title: '500',
        },
      },
      {
        path: '/403',
        Component: lazy(() => import('@/pages/Dashboard')),
        meta: {
          title: '403',
        },
      },
      {
        path: '/404',
        Component: lazy(() => import('@/pages/Dashboard')),
        meta: {
          title: '404',
        },
      },
    ],
  },
];

export default resultRoutes;
