//react
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';

// //components
import App from './App';
// import Home from './pages/Home';
// import ErrorPage from "./pages/ErrorPage";
// import Profile from "./pages/Profile";

// //rrd
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <Home setPokemonData={setPokemonData}/>,
//       },
//       {
//         path: "/profile",
//         element: <Profile pokemonData={pokemonData}/>
//       }

//     ]
//   },
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);



