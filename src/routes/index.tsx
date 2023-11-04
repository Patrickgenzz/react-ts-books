import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Layout
import NavbarLayout from '../components/layouts/NavbarLayout';
import SidebarLayout from '../components/layouts/SidebarLayout';

//Home Pages
const LazyUserLogin = lazy(() => import('../pages/home/LoginUser'));
const LazyUserRegister = lazy(() => import('../pages/home/RegisterUser'));
const LazyUserHome = lazy(() => import('../pages/home/HomeUser'));

//Member Pages
const LazyMemberDashboard = lazy(
  () => import('../pages/member/MemberDashboard'),
);

//Admin Pages
const LazyAdminDashboard = lazy(() => import('../pages/admin/AdminDashboard'));
const LazyAdminCreateBook = lazy(() => import('../pages/admin/CreateBook'));
const LazyAdminUpdateBook = lazy(() => import('../pages/admin/UpdateBook'));

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: '/',
        element: <LazyUserHome />,
      },
      {
        path: '/login',
        element: <LazyUserLogin />,
      },
      {
        path: '/register',
        element: <LazyUserRegister />,
      },
    ],
  },
  {
    path: '/admin',
    element: <SidebarLayout />,
    children: [
      {
        path: '/admin',
        element: <LazyAdminDashboard />,
      },
      {
        path: '/admin/create-book',
        element: <LazyAdminCreateBook />,
      },
      {
        path: '/admin/update-book',
        element: <LazyAdminUpdateBook />,
      },
    ],
  },
  {
    path: '/member',
    element: <SidebarLayout />,
    children: [
      {
        path: '/member',
        element: <LazyMemberDashboard />,
      },
    ],
  },
  {
    path: '*',
    element: <div>Routes Not Found!</div>,
  },
]);

const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
