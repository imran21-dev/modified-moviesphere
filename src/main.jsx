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
import AllMovies from './layout/AllMovies';

import MovieDetails from './layout/MovieDetails';
import FavouriteMoviesPrivate from './private/FavouriteMoviesPrivate';
import FavouriteMovies from './layout/FavouriteMovies';
import UpdateMoviePrivate from './private/UpdateMoviePrivate';
import UpdateMovie from './layout/UpdateMovie';
import ErrorPage from './layout/ErrorPage';
import TvShow from './layout/TvShow';
import { HelmetProvider } from 'react-helmet-async';
import MovieDetailsPrivate from './private/MovieDetailsPrivate';
import AllMoviesPrivate from './private/AllMoviesPrivate';
import CategoryMovie from './layout/CategoryMovie';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        
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
      },
      {
        path:'/all-movies',
        element: <AllMoviesPrivate><AllMovies></AllMovies></AllMoviesPrivate>,
       
      },
      {
        path: '/movie-details/:id',
        element: <MovieDetailsPrivate><MovieDetails></MovieDetails></MovieDetailsPrivate>,
      },
      {
        path: '/my-favorites',
        element: <FavouriteMoviesPrivate><FavouriteMovies></FavouriteMovies></FavouriteMoviesPrivate>,
        
      },
      {
        path: '/update-movie/:id',
        element: <UpdateMoviePrivate><UpdateMovie></UpdateMovie></UpdateMoviePrivate>,
        loader: ({params}) => fetch(`https://server-side-nu-swart.vercel.app/updates-movie/${params.id}`)
      },
      {
        path: 'tv-show',
        element: <TvShow></TvShow>
      },
      {
        path: '/category/:id',
        element: <CategoryMovie></CategoryMovie>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <HelmetProvider>
      <AssetsContext>
      <RouterProvider router={router} />
      </AssetsContext>
      </HelmetProvider>
  </StrictMode>,
)
