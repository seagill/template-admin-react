import { RouteItem } from '../index';
import { lazy } from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
import Layout from '@/layout/index';

const resultRoutes: RouteItem[] = [
  {
    path: '/result',
    element: <Layout />,
    meta: {
      title: '结果页',
      Icon: CheckCircleOutlined,
    },
    children: [
      {
        path: '500',
        Component: lazy(() => import('@/pages/ErrorPage/500')),
        meta: {
          title: '500',
        },
      },
      {
        path: '403',
        Component: lazy(() => import('@/pages/ErrorPage/403')),
        meta: {
          title: '403',
        },
      },
      {
        path: '404',
        Component: lazy(() => import('@/pages/ErrorPage/404')),
        meta: {
          title: '404',
        },
      },
    ],
  },
];

export default resultRoutes;
