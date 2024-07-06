import { Navigate, useRoutes } from 'react-router-dom';
//
import { mainRoutes } from './main';

import { authRoutes } from './auth';
import { dashboardRoutes } from './dashboard';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // {
    //   path: '/',
    //   element: <Navigate to={PATH_AFTER_LOGIN} replace />,
    // },

    // Dashboard routes
    ...dashboardRoutes,

    // Auth routes
    ...authRoutes,

    // Main routes
    // ...mainRoutes,

    // // No match 404
    // { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
