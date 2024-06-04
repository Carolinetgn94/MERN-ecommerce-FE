import { Navigate } from "react-router-dom";

function SellerProtectedRoute ({isSeller, children}) {
    if(!isSeller) {
        return <Navigate to={'/'} replace />
    }
    return children
}

export default SellerProtectedRoute;