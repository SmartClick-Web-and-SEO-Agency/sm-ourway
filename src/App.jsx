import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './routes/Root';

import './App.css';
import Home from './routes/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
