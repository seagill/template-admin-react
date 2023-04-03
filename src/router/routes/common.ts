import { lazy } from 'react';
import { RouteItem } from '../index';
const commonRoutes: RouteItem[] = [
  {
    path: '/login',
    Component: lazy(() => import('@/pages/Login')),
    meta: {
      title: '登录',
      hidden: true,
    },
  },
];

export default commonRoutes;
