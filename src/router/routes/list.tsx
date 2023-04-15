import { RouteItem } from '../index';
import { lazy } from 'react';
import { TableOutlined } from '@ant-design/icons';
import Layout from '@/layout';
const Base = lazy(() => import('@/pages/List/Base'));
const Search = lazy(() => import('@/pages/List/Search'));
const Card = lazy(() => import('@/pages/List/Card'));
import { lazyFC } from '../helper/lazy';
const resultRoutes: RouteItem[] = [
  {
    path: '/list',
    element: <Layout />,
    redirect: '/list/base',
    meta: {
      title: '列表页',
      Icon: TableOutlined,
    },
    children: [
      {
        path: 'base',
        element: lazyFC(<Base />),
        meta: {
          title: '基础列表',
        },
      },
      {
        path: 'search',
        element: lazyFC(<Search />),
        meta: {
          title: '搜索列表',
        },
      },
      {
        path: 'card',
        element: lazyFC(<Card />),
        meta: {
          title: '卡片列表',
        },
      },
    ],
  },
];

export default resultRoutes;
