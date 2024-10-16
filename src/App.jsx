import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './routes/Root';
import Home from './routes/Home';
import Company from './routes/Company';
import Tools from './routes/Tools';
import Training from './routes/Training';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'company',
        element: <Company />,
      },
      {
        path: 'tools',
        element: <Tools />,
      },
      {
        path: 'training',
        element: <Training />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
