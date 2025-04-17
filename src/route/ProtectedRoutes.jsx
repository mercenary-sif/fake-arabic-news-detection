import { Outlet , Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../components/ContextLeader/AuthContext";
const PrivateRoutes = () => { 
    let {UserData , AuthTokens} =useContext(AuthContext)
   
    return(
        AuthTokens?.access ? <Outlet/> : <Navigate to="/Login"/>
    )
}
export default PrivateRoutes ;