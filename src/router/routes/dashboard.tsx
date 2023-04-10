import { RouteItem } from '../index';
import { lazy } from 'react';
import { DashboardOutlined } from '@ant-design/icons';
import Layout from '@/layout';
import { lazyFC } from '../helper/lazy';
const Dashboard = lazy(() => import('@/pages/Dashboard'));

const dashboardRoutes: RouteItem[] = [
  {
    path: '/',
    element: <Layout />,
    meta: {
      title: '统计报表',
    },
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        element: lazyFC(<Dashboard />),
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
