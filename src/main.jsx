import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
// import Login from './components/Login/Login.jsx';
import Footer from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Banner from './components/Banner/Banner.jsx';
import Home from './components/Home/Home.jsx';
import Roots from './Roots.jsx';
import Errorpage from './components/Errorpage/Errorpage.jsx';

import MyCraft from './components/MyCraft/MyCraft.jsx';

import Login from './components/Login/Login.jsx';
import AddCraft from './components/AddCraft/AddCraft.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import ProtectedRoute from './routes/ProtectedRoute.jsx';
import AlArt from './components/AlArt/AlArt.jsx';
// import AuthProvider from './providers/AuthProvider.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "login", // this means "/"
        element: <Login></Login>
      },
      {
        path: "register", // this means "/"
        element: <Register></Register>
      },

      {
        path: "addCraft", // this means "/"
        element: <ProtectedRoute>
          <AddCraft></AddCraft>
        </ProtectedRoute>


      },

      {
        path: "myCraft", // this means "/"
        element: <ProtectedRoute> <MyCraft></MyCraft></ProtectedRoute>
        
        
      },
      {
        path: "alArt", // this means "/"
        element: <AlArt></AlArt>
      },
      {
        path: "products/:id", // this means "/"
        element: <ProductDetails></ProductDetails>
        // loader: productloader
      },

    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);


