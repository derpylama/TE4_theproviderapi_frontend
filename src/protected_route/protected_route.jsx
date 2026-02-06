import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
    var token = sessionStorage.getItem("x-person-token")
    
    return (
        token ? <Outlet/> : <Navigate to={"/login"}></Navigate>
    )
}

export default ProtectedRoute