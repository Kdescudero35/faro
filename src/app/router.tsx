import App from './App';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const RootError = lazy(() => import("@shared/components/RootError"));
const ItemsListPage = lazy(() => import("@features/items").then(m => ({ default: m.ItemsListPage })));
const ItemDetailPage = lazy(() => import("@features/items").then(m => ({ default: m.ItemDetailPage })));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <RootError />,
    children: [
      { index: true, element: <ItemsListPage /> },
      { path: 'items/:id', element: <ItemDetailPage /> },
      { path: '*', element: <RootError /> },
    ],
  },
]);
