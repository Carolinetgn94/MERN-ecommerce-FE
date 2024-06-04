import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import React, { useEffect } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import FAQPage from "./pages/FAQPage/FAQPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ShopCreatePage from "./pages/ShopCreatePage/ShopCreatePage";
import ShopLoginPage from "./pages/ShopLoginPage/ShopLoginPage";
import ShopHomePage from "./pages/ShopHomePage/ShopHomePage";
import ShopDashboardPage from "./pages/ShopDashboardPage/ShopDashboardPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import { loadSeller, loadUser } from "./redux/actions/user.action";
import ProtectedRoute from "./ProtectedRoute";
import SellerProtectedRoute from "./SellerProtectedRoute";



function App() {

  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:name" element={<ProductDetailsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <CheckoutPage />
              </ProtectedRoute>
            }
          />

          <Route path="/create-shop" element={<ShopCreatePage />} />
          <Route path="/shop-login" element={<ShopLoginPage />} />
          <Route
            path="/shop/:id"
            element={
              <SellerProtectedRoute>
                <ShopHomePage />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <SellerProtectedRoute>
                <ShopDashboardPage />
              </SellerProtectedRoute>
            }
          />



        </Routes>
      </Router>
    </div>
  );
}

export default App;
