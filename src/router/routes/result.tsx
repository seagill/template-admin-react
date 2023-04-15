import { RouteItem } from '../index';
import { lazy } from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
import Layout from '@/layout';
const Page500 = lazy(() => import('@/pages/Result/500'));
const Page403 = lazy(() => import('@/pages/Result/403'));
const Page404 = lazy(() => import('@/pages/Result/404'));
const Error = lazy(() => import('@/pages/Result/Error'));
const Info = lazy(() => import('@/pages/Result/Info'));
const Success = lazy(() => import('@/pages/Result/Success'));
const Warning = lazy(() => import('@/pages/Result/Warning'));
import { lazyFC } from '../helper/lazy';
const resultRoutes: RouteItem[] = [
  {
    path: '/result',
    element: <Layout />,
    redirect: '/result/success',
    meta: {
      title: '结果页',
      Icon: CheckCircleOutlined,
    },
    children: [
      {
        path: 'success',
        element: lazyFC(<Success />),
        meta: {
          title: '成功页',
        },
      },
      {
        path: 'Error',
        element: lazyFC(<Error />),
        meta: {
          title: '失败页',
        },
      },
      {
        path: 'info',
        element: lazyFC(<Info />),
        meta: {
          title: '结果页',
        },
      },
      {
        path: 'warning',
        element: lazyFC(<Warning />),
        meta: {
          title: '告警页',
        },
      },
      {
        path: '500',
        element: lazyFC(<Page500 />),
        meta: {
          title: '500',
        },
      },
      {
        path: '403',
        element: lazyFC(<Page403 />),
        meta: {
          title: '403',
        },
      },
      {
        path: '404',
        element: lazyFC(<Page404 />),
        meta: {
          title: '404',
        },
      },
    ],
  },
];

export default resultRoutes;
