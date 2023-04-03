import { RouteItem } from '../index';
import { lazy } from 'react';
import { DashboardOutlined } from '@ant-design/icons';
import Layout from '@/layout/index';
const dashboardRoutes: RouteItem[] = [
  {
    path: '/',
    element: <Layout />,
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
