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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/add-movie',
        element: <AddMovie></AddMovie>
      },
      {
        path: '/register',
        element: <Register></Register>
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
