import Home from './Components/Home/Home.jsx';
import Layout from './Components/Layout/Layout.jsx';
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/About/About.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import LogIn from './Components/LogIn/LogIn.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Account from './Components/Account/Account.jsx';
import WishList from './Components/WishList/WishList.jsx';
import Checkout from './Components/CheckOut/Checkout.jsx';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

let Routes = createBrowserRouter([
 { path: "/", element: <Layout />, children: [
    { path: "/", element: <Home /> },
    { path: "signup", element: <SignUp /> },
    { path: "login", element: <LogIn /> },
    { path: "about", element: <About /> },
    { path: "contact", element: <Contact /> },
    { path: "productdetails/:id", element: <ProductDetails /> },
    { path: "*", element: <NotFound /> },

    { path: "account", element: <ProtectedRoute><Account /></ProtectedRoute> },
    { path: "cart", element: <ProtectedRoute><Cart /></ProtectedRoute> },
    { path: "YourWishlist", element: <ProtectedRoute><WishList /></ProtectedRoute> },
    { path: "checkout", element: <ProtectedRoute><Checkout /></ProtectedRoute> },
 ]},
]);

export default function App() {
  return <RouterProvider router={Routes} />;
}
