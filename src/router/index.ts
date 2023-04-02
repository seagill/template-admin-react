import React from 'react';
import commonRoutes from './routes/common';
import userRoutes from './routes/user';
import dashboardRoutes from './routes/dashboard';
import resultRoutes from './routes/result';
interface Meta {
  title: string;
  Icon?: React.FC;
  hidden?: boolean;
  single?: boolean;
}

export interface RouteItem {
  path: string;
  Component?: React.FC<any>;
  sort?: number;
  meta?: Meta;
  redirect?: string;
  children?: RouteItem[];
}

export const routes: RouteItem[] = [...commonRoutes, ...dashboardRoutes, ...resultRoutes, ...userRoutes];
