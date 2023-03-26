import React from 'react';

interface Meta {
  title: string;
  Icon?: React.FC<any>;
  hidden?: boolean;
}

export interface RouteItem {
  path: string;
  Component?: React.FC<any>;
  meta?: Meta;
  redirect?: string;
  children?: RouteItem[];
}

export const routes: RouteItem[] = [];
