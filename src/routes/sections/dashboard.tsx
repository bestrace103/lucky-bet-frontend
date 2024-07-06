import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// layouts
import DashboardLayout from 'src/layouts/dashboard';
// components
import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

const IndexPage = lazy(() => import('src/pages/dashboard/home'));
const GamePage = lazy(() => import('src/pages/games/view'));

// ----------------------------------------------------------------------

export const dashboardRoutes = [
  {
    path: '/',
    element: (
      <DashboardLayout>
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [
      { element: <IndexPage />, index: true },
      { path: 'casino/:id', element: <GamePage /> },
    ],
  },
];
