
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError()

     const text= error.status
     const slogun = error.statusText
     const message = error.error.message
     useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <div className="flex justify-center items-center flex-col h-screen">
             <Helmet>
                <title>Error | MovieSphere</title>
            </Helmet>
            <h1 className="text-5xl font-semibold py-5">{text}</h1>
            <h2 className="text-xl font-semibold">{slogun}</h2>
            <p className="py-2">{message}</p>
            <Link className="btn mt-5 bg-accent/90 text-white rounded-full border-none px-5 hover:bg-neutral/20 duration-300" to='/'>Go to Homepage</Link>
        </div>
    );
};

export default ErrorPage;