import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './routes/Root';
import Home from './routes/Home';
import Training from './routes/Training';
import ProtectedRoute from './components/ProtectedRoute';
import Posts from './routes/Posts';
import Post from './routes/Post';
import Login from './routes/Login';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: 'company',
        children: [
          {
            index: true,
            element: (
              <ProtectedRoute>
                <Posts type="company" />
              </ProtectedRoute>
            ),
          },
          {
            path: ':id',
            element: (
              <ProtectedRoute>
                <Post />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: 'tools',
        children: [
          {
            index: true,
            element: (
              <ProtectedRoute>
                <Posts type="tools" />
              </ProtectedRoute>
            ),
          },
          {
            path: ':id',
            element: (
              <ProtectedRoute>
                <Post />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: 'training',
        children: [
          {
            index: true,
            element: (
              <ProtectedRoute>
                <Training />
              </ProtectedRoute>
            ),
          },
          {
            path: 'organisation-and-management-guidelines',
            children: [
              {
                index: true,
                element: (
                  <ProtectedRoute>
                    <Posts type="organisation" />
                  </ProtectedRoute>
                ),
              },
              {
                path: ':id',
                element: (
                  <ProtectedRoute>
                    <Post />
                  </ProtectedRoute>
                ),
              },
            ],
          },
          {
            path: 'how-to-processes',
            children: [
              {
                index: true,
                element: (
                  <ProtectedRoute>
                    <Posts type="howto" />
                  </ProtectedRoute>
                ),
              },
              {
                path: ':id',
                element: (
                  <ProtectedRoute>
                    <Post />
                  </ProtectedRoute>
                ),
              },
            ],
          },
        ],
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
