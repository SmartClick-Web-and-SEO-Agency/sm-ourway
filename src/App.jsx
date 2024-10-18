import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './routes/Root';
import Home from './routes/Home';
import Training from './routes/Training';

import './App.css';
import Posts from './routes/Posts';
import Post from './routes/Post';
import Login from './routes/Login';

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
        element: <Posts type="company" />,
      },
      {
        path: 'tools',
        element: <Posts type="tools" />,
      },
      {
        path: 'training',
        element: <Training />,
      },
      {
        path: 'organisation-and-management-guidelines',
        element: <Posts type="organisation" />,
      },
      {
        path: 'how-to-processes',
        element: <Posts type="howto" />,
      },
      {
        path: ':id',
        element: <Post id={1126} />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
