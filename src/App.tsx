import React from 'react';
import logo from './logo.svg';
import './App.css'
import { RouterProvider} from 'react-router-dom'
import { routes } from './routes';
import { MovieProvider } from './context';

function App() {
  return (
   <MovieProvider>
    <RouterProvider router={routes} />
   </MovieProvider>
  );
}

export default App;
