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
      },
      {
        path:'/all-movies',
        element: <AllMovies></AllMovies>,
        loader: () => fetch('http://localhost:5000/')
      },
      {
        path: '/movie-details/:id',
        loader: ({params}) => fetch(`http://localhost:5000/movieDetails/${params.id}`),
        element: <MovieDetailsPrivate><MovieDetails></MovieDetails></MovieDetailsPrivate>,
      },
      {
        path: '/my-favourites',
        element: <FavouriteMoviesPrivate><FavouriteMovies></FavouriteMovies></FavouriteMoviesPrivate>,
        loader: () => fetch('http://localhost:5000/get-favourites')
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
