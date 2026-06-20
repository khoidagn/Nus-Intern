import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout'; 
import Feeds from '../pages/Feeds';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/feeds" replace /> },
      { path: 'feeds', element: <Feeds /> },
    ],
  },
  { path: '*', element: <div>Trang không tồn tại - 404 Not Found</div> }
]);