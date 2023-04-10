import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
export function useRouterGuard() {
  const location = useLocation();

  useEffect(() => {
    console.log('to', location.pathname);

    return () => {
      console.log('form', location.pathname);
    };
  }, [location.pathname]);
}
