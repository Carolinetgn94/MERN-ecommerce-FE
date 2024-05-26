import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useEffect } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import { toast, ToastContainer } from "react-toastify";
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
      Header
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
