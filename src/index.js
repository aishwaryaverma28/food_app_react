import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import "./App.css";
import Shimmer from "./components/Shimmer";
// import PaymentCard from './components/PaymentCard';
import LastPage from "./components/LastPage";
const MenuDetails = lazy(()=>import("./components/MenuDetails"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,

    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
     
      },
      // {
      //   path:"payment",
      //   element:<PaymentCard/>
      // },
      {
        path: "/restaurant/:id",
        element: <Suspense fallback = {<Shimmer/>}><MenuDetails/></Suspense>
      },
      {
        path: "success",
        element: <LastPage/>
      },

    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter}/>
);


