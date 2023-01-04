import React from 'react'
    import {
        createBrowserRouter,
    } from "react-router-dom";
import Home from '../Page/Home';
import About from '../Page/About'
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
     {
         path: "/about",
         element: <About></About>,
     }
    
]);

export default router