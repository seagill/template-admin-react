import { RouteItem } from '../index';
import { lazy } from 'react';
import { DashOutlined } from '@ant-design/icons';
export const PrivateRoutes: RouteItem[] = [
  {
    path: '/dashboard',
    Component: lazy(() => import('@/layout/index')),
    meta: {
      title: 'Dashboard',
    },
    children: [
      {
        path: '/',
        Component: lazy(() => import('@/pages/Dashboard')),
        meta: {
          title: 'Dashboard',
          Icon: DashOutlined,
        },
      },
    ],
  },
];
