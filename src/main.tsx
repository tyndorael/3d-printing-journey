import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './error-page';
import './index.css';
import Printer from './routes/printer';
import Calibrations from './routes/calibrations';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'printer',
          element: <Printer />,
        },
        {
          path: 'calibrations',
          element: <Calibrations />,
        },
      ],
    },
  ],
  { basename: '/3d-printing-journey' },
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
