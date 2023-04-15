import { RouteItem } from '../index';
import { lazy } from 'react';
import { FileOutlined } from '@ant-design/icons';
import Layout from '@/layout';
const Base = lazy(() => import('@/pages/Detail/Base'));
const Card = lazy(() => import('@/pages/Detail/Card'));
import { lazyFC } from '../helper/lazy';
const resultRoutes: RouteItem[] = [
  {
    path: '/detail',
    element: <Layout />,
    redirect: '/detail/base',
    meta: {
      title: '详情页',
      Icon: FileOutlined,
    },
    children: [
      {
        path: 'base',
        element: lazyFC(<Base />),
        meta: {
          title: '基础详情',
        },
      },
      {
        path: 'card',
        element: lazyFC(<Card />),
        meta: {
          title: '卡片详情',
        },
      },
    ],
  },
];

export default resultRoutes;
