import { RouteItem } from '../index';
import { lazy } from 'react';
import { DashboardOutlined } from '@ant-design/icons';
const dashboardRoutes: RouteItem[] = [
  {
    path: '/',
    redirect: '/dashboard',
    meta: {
      title: '首页',
      hidden: true,
    },
  },
  {
    path: '/dashboard',
    sort: 1,
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
          single: true,
          Icon: DashboardOutlined,
        },
      },
    ],
  },
];
export default dashboardRoutes;
