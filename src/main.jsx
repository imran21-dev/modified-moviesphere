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
import MovieDetailsPrivate from './private/MovieDetailsPrivate';
import MovieDetails from './layout/MovieDetails';
import FavouriteMoviesPrivate from './private/FavouriteMoviesPrivate';
import FavouriteMovies from './layout/FavouriteMovies';
import UpdateMoviePrivate from './private/UpdateMoviePrivate';
import UpdateMovie from './layout/UpdateMovie';
import ErrorPage from './layout/ErrorPage';
import TvShow from './layout/TvShow';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        loader : () => fetch('https://server-side-nu-swart.vercel.app/featured-movies'),
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
        element: <AllMovies></AllMovies>,
        loader: () => fetch('https://server-side-nu-swart.vercel.app/')
      },
      {
        path: '/movie-details/:id',
        loader: ({params}) => fetch(`https://server-side-nu-swart.vercel.app/movieDetails/${params.id}`),
        element: <MovieDetailsPrivate><MovieDetails></MovieDetails></MovieDetailsPrivate>,
      },
      {
        path: '/my-favourites',
        element: <FavouriteMoviesPrivate><FavouriteMovies></FavouriteMovies></FavouriteMoviesPrivate>,
        loader: () => fetch('https://server-side-nu-swart.vercel.app/get-favourites')
      },
      {
        path: '/update-movie/:id',
        element: <UpdateMoviePrivate><UpdateMovie></UpdateMovie></UpdateMoviePrivate>,
        loader: ({params}) => fetch(`https://server-side-nu-swart.vercel.app/updates-movie/${params.id}`)
      },
      {
        path: 'tv-show',
        element: <TvShow></TvShow>
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
