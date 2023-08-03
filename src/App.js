// Importing React-Router-Dom
import {createBrowserRouter, RouterProvider } from "react-router-dom"
// Importing components
import Home from "./Pages/Home/Home";
import Category from "./Pages/Category/Category";
import Product from "./Pages/Product/Product";


function App() {

  // Creating router component
  const router = createBrowserRouter ([
    // Home router
    {
      path:"/",
      element:<Home />
    },
    // Category router
    {
      path:"/products/:id",
      element:<Category />
    },
    // Product router
    {
      path:"/product/:id",
      element:<Product />
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
