import App from './App';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const ListPage = lazy(() => import("@features/items").then(m => ({ default: m.ListPage })));
const RootError = lazy(() => import("@shared/components/RootError"));
const DetailPage = lazy(() => import("@features/items").then(m => ({ default: m.DetailPage })));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <RootError />,
    children: [
      { index: true, element: <ListPage /> },
      { path: 'items/:id', element: <DetailPage /> },
      { path: '*', element: <RootError /> },
    ],
  },
]);
