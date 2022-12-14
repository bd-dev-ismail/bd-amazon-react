import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import LogIn from './components/LogIn/LogIn';
import Orders from './components/Orders/Orders';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import Main from './layout/Main';
import { productAndCart } from './loader/productAndCart';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          // loader: () => fetch("http://localhost:5000/products"),
          element: <Shop></Shop>,
        },
        { path: "/orders", loader: productAndCart, element: <Orders></Orders> },
        {
          path: "/inventory",
          element: (
            <PrivateRoute>
              <Inventory></Inventory>
            </PrivateRoute>
          ),
        },
        {
          path: "/shipping",
          element: (
            <PrivateRoute>
              <Shipping></Shipping>{" "}
            </PrivateRoute>
          ),
        },
        { path: "/about", element: <About></About> },
        { path: "/login", element: <LogIn></LogIn> },
        { path: "/register", element: <Register></Register> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
