// Importing React-Router-Dom
import {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./app.css";
// Importing components
import Home from "./Pages/Home/Home";
import Category from "./Pages/Category/category";
import Product from "./Pages/Product/product";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

// Laying out the Navbar and footer component which will stick to every route
const Layout = () => {
  return (
    <div className="app">
       <Navbar />
       {/* Outlet is the "children" of the router  */}
       <Outlet />
       <Footer />
    </div>
  )
}

// Creating router components
const router = createBrowserRouter ([
  // Home router
  {
    path:"/",
    element:<Layout />,
    children:[ 
      // Home Route
      {
        path:"/",
        element:<Home />
      },
      // Category Route
      {
        path:"/products/:id",
        element:<Category />
      },
      // Product Route
      {
        path:"/product/:id",
        element:<Product />
      }
    ]
  }
]);

// Main app component
function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
