import React, { useEffect, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import APP_MODULES_ROUTES from './app.routes';
import { ProviderRender } from './helper.routes';



import IRoute from '../../../interfaces/IRoute';

const AppRouter: React.FC = () => {


  useEffect(() => {
    if (!navigator.cookieEnabled) {
      alert('deu erro aqui, 1')
    }
  }, []);

  //const isSigned = useMemo(() => (signedUser ? true : false), [signedUser]);
  //const modules = useMemo(() => (isSigned ? APP_MODULES_ROUTES : AUTH_MODULES_ROUTES), [isSigned]);

  const modules = APP_MODULES_ROUTES

  const isValidPermissions = useCallback((userPermissions: string[], route: IRoute) => {
    let isFoundedAll = true;

    if (!route.permissions) {
      console.error(`Route permission (${route.path}) permission is empty`);
      return false;
    }

    if (route.permissions !== 'public') {
      route.permissions.forEach(permission => {
        if (!userPermissions.includes(permission)) {
          isFoundedAll = false;
        }
      });
    }

    return isFoundedAll;
  }, []);

  const renderRoutes = useCallback((r: any) => r?.map((route: IRoute) => {
    //const permissionGranted = signedUser?.is_admin ? true : isValidPermissions(signedUser?.permissions as string[], route);
    const permissionGranted =  true;
    /* return permissionGranted ? <Route key={route.key} path={route.path} element={<route.component />} /> : <Route key={route.key} path={route.path} element={<Error403 />} />; */
    return permissionGranted && <Route key={route.key} path={route.path} element={<route.component />} />
  }), [isValidPermissions]);

  return (
    <Routes>
      {modules.map((m) => {
        if (!m.providers) return renderRoutes(m.routes);
        return (
          <Route path="/" key={m.key} element={<ProviderRender provider={m.providers} />}>
            {renderRoutes(m.routes)}
          </Route>
        );
      })}
      <Route path="*" element={<div>DEU ERRO! 404</div>} />
    </Routes>
  );
};

export default AppRouter;
