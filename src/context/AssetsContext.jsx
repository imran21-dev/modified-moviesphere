import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../provider/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
export const ThemeContext = createContext(null)

const AssetsContext = ({children}) => {

    const [user, setUser] = useState(null)
    const [loadPrivate, setLoadPrivate] = useState(false)

    const [release, setRelease] = useState(false)
    const [rating, setRating] = useState(0);
    const [selectedGenre, setSelectedGenre] = useState([]);




    const [releaseYear, setReleaseYear] = useState(null)
    const [ratingStar, setRatingStar] = useState(null)
    const [genreArray, setGenreArray] = useState([])

    





    const [releaseTool, setReleaseTool] = useState(false)
    const [ratingTool, setRatingTool] = useState(false)
    const [genreTooltip, setGenreTooltip] = useState(false)

    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginAccount = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }



    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoadPrivate(true)
        })
        return ()=> {
            unsubscribe()
        }
    },[])

    const themes = {
        releaseYear,
        setReleaseYear,
        ratingStar,
        setRatingStar,
        genreArray,
        setGenreArray,
        releaseTool,
        setReleaseTool,
        ratingTool,
        setRatingTool,
        genreTooltip,
        setGenreTooltip,
        createAccount,
        signInWithGoogle,
        user,
        loadPrivate,
        loginAccount,
        release,
        setRelease,
        rating,
        setRating,
        selectedGenre,
        setSelectedGenre,
       

    }

    return (
        <ThemeContext.Provider value={themes}>
            {children}
        </ThemeContext.Provider>
    );
};
AssetsContext.propTypes = {
    children : PropTypes.element
}
export default AssetsContext;