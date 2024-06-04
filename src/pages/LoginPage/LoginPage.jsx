import React, {useEffect} from "react";
import Login from "../../components/Login/Login";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function LoginPage () {
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state) => state.user);

    useEffect(() => {
        if (isAuthenticated === true) {
            navigate("/")
        }
    }, [isAuthenticated, navigate])

    return (
        <div className="Login-Page">
           <Login/>
        </div>
        )
}

export default LoginPage;