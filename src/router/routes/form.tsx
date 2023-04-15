import { RouteItem } from '../index';
import { lazy } from 'react';
import { FormOutlined } from '@ant-design/icons';
import Layout from '@/layout';
const Base = lazy(() => import('@/pages/Form/Base'));
const Step = lazy(() => import('@/pages/Form/Step'));
import { lazyFC } from '../helper/lazy';
const resultRoutes: RouteItem[] = [
  {
    path: '/form',
    element: <Layout />,
    redirect: '/form/base',
    meta: {
      title: '表单页',
      Icon: FormOutlined,
    },
    children: [
      {
        path: 'base',
        element: lazyFC(<Base />),
        meta: {
          title: '基础表单',
        },
      },
      {
        path: 'step',
        element: lazyFC(<Step />),
        meta: {
          title: '分步表单',
        },
      },
    ],
  },
];

export default resultRoutes;
