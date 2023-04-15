import React from 'react';
import { createBrowserRouter, NonIndexRouteObject } from 'react-router-dom';
import commonRoutes from './routes/common';
import dashboardRoutes from './routes/dashboard';
import listRoutes from './routes/list';
import formRoutes from './routes/form';
import detailRoutes from './routes/detail';
import userRoutes from './routes/user';
import resultRoutes from './routes/result';

interface Meta {
  title: string;
  Icon?: React.FC;
  hidden?: boolean;
  single?: boolean;
}
export interface RouteItem extends Omit<NonIndexRouteObject, 'children' | 'path'> {
  path: string;
  meta?: Meta;
  redirect?: string;
  children?: RouteItem[];
}

export const routes: RouteItem[] = [
  ...commonRoutes,
  ...dashboardRoutes,
  ...listRoutes,
  ...formRoutes,
  ...detailRoutes,
  ...resultRoutes,
  ...userRoutes,
];

const router = createBrowserRouter(routes);

export default router;
