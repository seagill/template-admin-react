import { RouteItem } from '../index';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export function handleRouteToItem(routes: RouteItem[]): MenuItem[] {
  return routes.map((item) => {
    const Icon = item.meta?.Icon;
    const el: any = {
      label: item.meta?.title,
      key: item.path,
      icon: Icon ? <Icon /> : null,
    };

    if (item.children && item.children.length > 0) {
      el.children = handleRouteToItem(item.children);
    }

    return el;
  });
}

export function pathJoin(...paths: string[]): string {
  const newPath = paths
    .map((item) => {
      if (item.startsWith('/')) return item.slice(1);
      return item;
    })
    .filter((item) => item !== '/' && item !== '');
  return `/${newPath.join('/')}`;
}

export function getMenuRoutes(routes: RouteItem[]): MenuItem[] {
  // 过滤需要隐藏的菜单
  const showMenu = routes.filter((item) => item.meta?.hidden !== true);

  // 提升显示为一级菜单
  const menus = showMenu.map((item) => {
    const child = item.children?.find((item) => item.meta?.single === true);
    if (child) {
      child.path = pathJoin(item.path, child.path);
      item = child;
    }
    return item;
  });
  return handleRouteToItem(menus);
}
