import { useContext } from "react";
import { ThemeContext } from "../context/AssetsContext";
import { GridLoader } from "react-spinners";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";


const MovieDetailsPrivate = ({children}) => {
    const {loadPrivate, user} = useContext(ThemeContext)
    const {pathname} = useLocation()
    if (!loadPrivate) {
        return <div className="h-screen flex justify-center items-center"><GridLoader
        size={10}
        color="#bebebe"
       
        /></div>
        
    }

    if (user) {
        return children
    }

    return <Navigate state={{visit: pathname}} to='/login'></Navigate>

};
MovieDetailsPrivate.propTypes = {
    children: PropTypes.element
}
export default MovieDetailsPrivate;