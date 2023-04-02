import React from 'react';
import { routes, RouteItem } from './index';
import { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { pathJoin } from './helper';

const resolveRoutes = (routes: RouteItem[], parentPath = ''): React.ReactNode[] => {
  return routes.map((route) => {
    const { path, Component, redirect, children } = route;
    const currentPath = pathJoin(parentPath, path);

    if (redirect) {
      return <Route key={currentPath} element={<Navigate to={redirect} replace></Navigate>}></Route>;
    }

    if (Component) {
      return (
        <Route path={currentPath} key={currentPath} element={<Component path={currentPath} />}>
          {children ? resolveRoutes(children, currentPath) : null}
        </Route>
      );
    }
  });
};
function RouterContent() {
  console.log(resolveRoutes(routes));
  return (
    <Suspense>
      <Routes>{resolveRoutes(routes)}</Routes>
    </Suspense>
  );
}

export default RouterContent;
