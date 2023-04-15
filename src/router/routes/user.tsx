import { RouteItem } from '../index';
import { lazy } from 'react';
import { UserOutlined } from '@ant-design/icons';
import Layout from '@/layout';
const Info = lazy(() => import('@/pages/User/Info'));
import { lazyFC } from '../helper/lazy';

const resultRoutes: RouteItem[] = [
  {
    path: '/user',
    element: <Layout />,
    redirect: '/user/info',
    meta: {
      title: '个人中心',
      Icon: UserOutlined,
    },
    children: [
      {
        path: 'info',
        element: lazyFC(<Info />),
        meta: {
          title: '个人信息',
        },
      },
    ],
  },
];

export default resultRoutes;
