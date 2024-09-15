import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Home from './pages/home';
import Error from './pages/error';
import Movie from './pages/movie';
import Bookmark from './pages/bookmarks';
import TVSeries from './pages/tv-series';

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "/home",
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "/movies",
        element: <Movie />,
        errorElement: <Error />
    },    {
        path: "/bookmark",
        element: <Bookmark />,
        errorElement: <Error />
    },    {
        path: "/tvseries",
        element: <TVSeries />,
        errorElement: <Error />
    }
]);