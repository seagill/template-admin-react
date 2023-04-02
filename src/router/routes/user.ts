import { RouteItem } from '../index';
import { lazy } from 'react';
import { UserOutlined } from '@ant-design/icons';
const userRoutes: RouteItem[] = [
  {
    path: '/user',
    sort: 2,
    Component: lazy(() => import('@/layout/index')),
    meta: {
      title: '个人中心',
      Icon: UserOutlined,
    },
    children: [
      {
        path: '/info',
        Component: lazy(() => import('@/pages/Dashboard')),
        meta: {
          title: '个人中心',
        },
      },
    ],
  },
];

export default userRoutes;
