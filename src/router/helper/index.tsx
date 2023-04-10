import { RouteItem } from '../index';
import type { MenuProps } from 'antd';
import { routes } from '../index';

type MenuItem = Required<MenuProps>['items'][number];

/**
 * @description 路径处理
 */
export function pathJoin(...paths: string[]): string {
  const newPath = paths
    .map((item) => {
      if (item.startsWith('/')) return item.slice(1);
      return item;
    })
    .filter((item) => item !== '/' && item !== '');
  return `/${newPath.join('/')}`;
}

/**
 * @description 菜单递归处理
 */
export function handleRouteToItem(routes: RouteItem[], path = ''): MenuItem[] {
  return routes.map((item) => {
    const Icon = item.meta?.Icon;
    const el: any = {
      label: item.meta?.title,
      key: pathJoin(path, item.path),
      icon: Icon ? <Icon /> : null,
    };

    if (item.children && item.children.length > 0) {
      el.children = handleRouteToItem(item.children, item.path);
    }

    return el;
  });
}

/**
 * @description 获取菜单
 */
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
