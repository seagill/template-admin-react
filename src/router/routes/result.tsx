import { RouteItem } from '../index';
import { lazy } from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
import Layout from '@/layout';
const ErrorPage500 = lazy(() => import('@/pages/ErrorPage/500'));
const ErrorPage403 = lazy(() => import('@/pages/ErrorPage/403'));
const ErrorPage404 = lazy(() => import('@/pages/ErrorPage/404'));
import { lazyFC } from '../helper/lazy';
const resultRoutes: RouteItem[] = [
  {
    path: '/result',
    element: <Layout />,
    redirect: '/result/500',
    meta: {
      title: '结果页',
      Icon: CheckCircleOutlined,
    },
    children: [
      {
        path: '500',
        element: lazyFC(<ErrorPage500 />),
        meta: {
          title: '500',
        },
      },
      {
        path: '403',
        element: lazyFC(<ErrorPage403 />),
        meta: {
          title: '403',
        },
      },
      {
        path: '404',
        element: lazyFC(<ErrorPage404 />),
        meta: {
          title: '404',
        },
      },
    ],
  },
];

export default resultRoutes;
