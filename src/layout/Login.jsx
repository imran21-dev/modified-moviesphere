import { CiLock, CiMail } from "react-icons/ci";
import { Link, useLocation, useNavigate, useNavigation } from "react-router-dom";
import google from "../assets/google.png";
import { useContext, useEffect, useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { ThemeContext } from "../context/AssetsContext";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { GridLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const loading = useNavigation()
  
  const [showHide, setShowHide] = useState(false);
  const { loginAccount, signInWithGoogle } = useContext(ThemeContext);

  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    loginAccount(email, password)
      .then(() => {
        if (state) {
          navigate(state.visit);
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        Swal.fire({
          icon: "error",
          title: 'Failed !',
          text: `${errorCode}`,
          confirmButtonText: "Retry",
          scrollbarPadding: false,
          customClass: {
            title: 'text-xl md:text-3xl font-bold ',
            text: 'text-3xl',
            popup: "bg-[#1d0602] text-white rounded-3xl outline outline-[#f12804]",
            confirmButton: "bg-[#f12804] rounded-full py-[10px] px-[30px]",
          },
       
        });
      });

    reset();
  };

  const openPopup = () => {
    signInWithGoogle()
      .then(() => {
        if (state) {
          navigate(state.visit);
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        Swal.fire({
          icon: "error",
          title: 'Failed !',
          text: `${errorCode}`,
          confirmButtonText: "Retry",
          scrollbarPadding: false,
          customClass: {
            title: 'text-xl md:text-3xl font-bold ',
            text: 'text-3xl',
            popup: "bg-[#1d0602] text-white rounded-3xl outline outline-[#f12804]",
            confirmButton: "bg-[#f12804] rounded-full py-[10px] px-[30px]",
          },
       
        });
      });
  };

  const showPass = () => {
    setShowHide(!showHide);
  };
  useEffect(()=>{
    window.scrollTo(0,0)
},[])

  return (
    <>
     <Helmet>
                <title>Login | MovieSphere</title>
            </Helmet>
    {loading.state === 'loading' ? <div className="h-screen flex justify-center items-center"><GridLoader
        size={10}
        color="#bebebe"
       
        /></div>
        : <div className="py-96 md:py-20 h-screen flex flex-col justify-center">
        <section className="md:w-4/12 w-9/12 mx-auto">
          <h1 className="text-xl md:text-3xl pb-2 font-semibold">Welcome Back!</h1>
          <p className="md:pb-8 pb-3 text-xs md:text-sm text-neutral/40">
            Login and continue your cinematic journey!
          </p>
  
          <form onSubmit={handleSubmit(onSubmit)} className="w-full text-xs md:text-sm relative ">
            {/* Email Field */}
            <div className="form-control pb-1">
              <label className="label">
                <span className="label-text md:text-sm text-xs">Email</span>
              </label>
              <div className="flex items-center w-full border rounded-full -ml-1 border-secondary">
                <CiMail className="text-lg mx-3" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent w-full pr-5 py-2 focus:outline-none placeholder:text-neutral/30 placeholder:font-thin"
                  {...register("email", { required: "Email is required" })}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>
  
            {/* Password Field */}
            <div className="form-control pb-1">
              <label className="label">
                <span className="label-text md:text-sm text-xs">Password</span>
              </label>
              <div className="flex items-center w-full border rounded-full -ml-1 border-secondary">
                <CiLock className="text-lg mx-3" />
                <input
                  type={showHide ? "text" : "password"}
                  placeholder="Password"
                  className="bg-transparent w-full py-2 focus:outline-none placeholder:text-neutral/30 placeholder:font-thin"
                  {...register("password", {
                    required: "Password is required",
                   
                  })}
                />
                {showHide ? (
                  <VscEye onClick={showPass} className="mx-3 cursor-pointer text-lg" />
                ) : (
                  <VscEyeClosed onClick={showPass} className="mx-3 cursor-pointer text-lg" />
                )}
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
              )}
              <Link className="text-neutral/30 text-[11px] md:text-xs pt-1 hover:underline">
                Forgot password?
              </Link>
            </div>
  
            {/* Submit Button */}
            <div className="form-control pt-3 md:pt-8">
              <button
                type="submit"
                className="btn -ml-1 bg-accent/90 rounded-full text-xs md:text-[14px] min-h-max h-max py-3 text-white border-none hover:bg-[#BEBEBE]"
              >
                Login
              </button>
            </div>
            <p className="text-xs py-2 text-center">
              Do not have an account?{" "}
              <Link
                className="font-semibold hover:text-accent/90"
                state={state ? state : null}
                to="/register"
              >
                Register
              </Link>
            </p>
          </form>
  
          {/* Google Sign-In */}
          <div className="divider text-sm md:text-base">or</div>
          <div className="mx-auto w-max pt-4">
            <button
              onClick={openPopup}
              className="btn min-h-max h-max py-3 text-xs md:text-sm px-10 btn-outline border-secondary rounded-full"
            >
              <img className="w-4 md:w-5" src={google} alt="" /> Sign in with Google
            </button>
          </div>
        </section>
        
      </div>}
    
    </>
  );
};

export default Login;
