import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null)

const AssetsContext = ({children}) => {

    const [releaseYear, setReleaseYear] = useState(null)
    const [ratingStar, setRatingStar] = useState(null)
    const [genreArray, setGenreArray] = useState([])

    const [releaseTool, setReleaseTool] = useState(false)
    const [ratingTool, setRatingTool] = useState(false)
    const [genreTooltip, setGenreTooltip] = useState(false)

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
        setGenreTooltip

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