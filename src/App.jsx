import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './routes/Root';
import Home from './routes/Home';
import Training from './routes/Training';

import './App.css';
import Posts from './routes/Posts';

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
        element: <Posts />,
      },
      {
        path: 'tools',
        element: <Posts />,
      },
      {
        path: 'training',
        element: <Training />,
      },
      {
        path: 'organisation-and-management-guidelines',
        element: <Posts />,
      },
      {
        path: 'how-to-processes',
        element: <Posts />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
