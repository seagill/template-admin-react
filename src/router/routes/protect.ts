import { lazy } from 'react';
import { RouteItem } from '../index';
export const ProtectRoutes: RouteItem[] = [
  {
    path: '/login',
    Component: lazy(() => import('@/pages/Login')),
    meta: {
      title: '登录',
      hidden: true,
    },
  },
];
