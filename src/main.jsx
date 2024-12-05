import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './layout/Home';
import AddMovie from './layout/AddMovie';
import AssetsContext from './context/AssetsContext';
import Register from './layout/Register';
import AddMoviePrivate from './private/AddMoviePrivate';
import Login from './layout/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: '/',
        loader : () => fetch('http://localhost:5000/featured-movies'),
        element: <Home></Home>,
      },
      {
        path: '/add-movie',
        element: <AddMoviePrivate><AddMovie></AddMovie></AddMoviePrivate>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AssetsContext>
      <RouterProvider router={router} />
      </AssetsContext>
  </StrictMode>,
)
