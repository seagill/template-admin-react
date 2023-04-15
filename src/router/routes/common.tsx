import { RouteItem } from '../index';
import Login from '@/pages/Login';
const commonRoutes: RouteItem[] = [
  {
    path: '/login',
    element: <Login />,
    meta: {
      title: '登录',
      hidden: true,
    },
  },
];

export default commonRoutes;
