import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from 'react-router';
import { NotFoundRoute } from './NotFoundRoute.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '*',
    element: <NotFoundRoute />,
  },
]);
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
