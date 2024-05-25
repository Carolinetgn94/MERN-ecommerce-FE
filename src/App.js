import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React, {useEffect} from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { beServer } from "./server";

function App() {

  useEffect(() => {
    axios.get(`${beServer}/user/getuser`, {withCredentials:true}).then((res) => {
      toast.success(res.data.message);
    }).catch((err) => {
      toast.error(err.response.data.message)
    })
  }, [])


  return (
    <div className="App">
      <ToastContainer />
      Header
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
