// Importing React-Router-Dom
import {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./app.css";
// Importing components
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/product";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Products from "./Pages/Products/Products";

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
        element:<Products />
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
