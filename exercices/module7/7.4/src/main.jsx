import App from './components/App/App.jsx';
import HomePage from './components/Pages/HomePage.jsx';
import CinemaPage from './components/Pages/CinemaPage.jsx';
import MovieListPage from './components/Pages/MovieListPage.jsx';
import AddMoviePage from './components/Pages/AddMoviePage.jsx';
import MoviePage from './components/Pages/MoviePage.jsx';
import ReactDOM from "react-dom";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "cinemas",
        element: <CinemaPage />,
      },
      {
        path: "movies",
        element: <MovieListPage />,
      },
      {
        path: "movies/:id",
        element: <MoviePage />,
      },
      {
        path: "add-movie",
        element: <AddMoviePage />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);