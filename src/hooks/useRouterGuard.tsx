import { useLocation, matchRoutes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { routes } from '@/router';
import { useStoreSelector } from '@/store';

export function useRouterGuard() {
  const location = useLocation();
  const navigate = useNavigate();
  const paths = matchRoutes(routes, location.pathname);
  const target = paths?.find((item) => item.pathname === location.pathname);
  const isLogin = useStoreSelector((state) => state.userSlice.isLogin);

  useEffect(() => {
    console.log('to', location.pathname);
    if (target?.route.redirect) {
      navigate(target?.route.redirect);
    }
    return () => {
      console.log('form', location.pathname);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (!isLogin) {
      navigate('/login');
    }
  }, [isLogin]);
}
