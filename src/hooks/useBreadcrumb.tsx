import { HomeOutlined } from '@ant-design/icons';
import { routes } from '@/router';
import { matchRoutes, useLocation } from 'react-router-dom';
import React from 'react';

type Items = {
  href: string;
  title: React.ReactNode;
};

const home = {
  href: '/',
  title: <HomeOutlined />,
};

export function useBreadcrumb(): Items[] {
  const location = useLocation();

  const paths = matchRoutes(routes, location.pathname);
  if (paths) {
    const items: Items[] = paths.map((item) => {
      let pathname = item.pathname;
      if (item.route.meta?.hidden === true) {
        pathname = '';
      }
      return {
        href: item.pathname,
        title: item.route.meta?.title ?? '',
      };
    });

    items.unshift(home);

    return items;
  } else {
    return [];
  }
}
