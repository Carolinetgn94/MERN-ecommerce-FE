import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useEffect } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import FAQPage from "./pages/FAQPage/FAQPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import { loadUser } from "./redux/actions/user.action";



function App() {
  useEffect(() => {
    Store.dispatch(loadUser());
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
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
