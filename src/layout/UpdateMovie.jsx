import { useEffect } from "react";
import { Helmet } from "react-helmet-async";


const UpdateMovie = () => {


  useEffect(()=>{
    window.scrollTo(0,0)
},[])
  return (
    <div>
       <Helmet>
                <title>Update Movie | MovieSharp</title>
            </Helmet>
      
    </div>
  );
};

export default UpdateMovie;